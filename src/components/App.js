import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import "react-day-picker/lib/style.css"


//компонент становится слишком большим, пора разбивать на более мелкие
class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selected: null,
        from: null,
        to: null
    }

    render() {
        const { articles } = this.props
        const { text, selected, from, to } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <div>
                    Enter your name: <input type="text" value={text} onChange={this.handleTextChange}/>
                </div>
                <hr/>
                <div>
                    Choose date range:
                    { from && to && <b> ({from.toLocaleString()} - {to.toLocaleString()})</b> }
                    <DayPicker
                        numberOfMonths={2}
                        selectedDays={[from, { from, to }]}
                        onDayClick={this.handleDayClick}
                    />
                </div>
                <hr/>
                <Select options = {options} value={selected} onChange = {this.handleSelectChange} multi/>
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
}

export default App
