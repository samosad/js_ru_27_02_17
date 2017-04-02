import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {connect} from 'react-redux'
import ArticlesPage from './ArticlesPage'
import NotFound from './NotFound'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsPage from './CommentsPage'
import Menu, {MenuItem} from './Menu/index'
import {loadAllArticles} from '../AC'
import history from '../history'
import locale from '../locale'

class App extends Component {
    static propTypes = {
    };

    static childContextTypes = {
        user: PropTypes.string,
        language: PropTypes.string
    }

    state = {
        text: '',
        language: 'ru'
    }

    getChildContext() {
        return {
            user: this.state.text,
            language: this.state.language
        }
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <div>
                        {locale[this.state.language].label.Language}: <label><input type="radio" value="ru" name="language"
                                                   onChange={this.handleLangChange}
                                                   checked={this.state.language === 'ru'}/>ru </label>
                        <label><input type="radio" value="en" name="language" onChange={this.handleLangChange}
                                         checked={this.state.language === 'en'}/>en</label>
                    </div>
                    {locale[this.state.language].label.User}: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                    <Menu>
                        <MenuItem path="/counter"/>
                        <MenuItem path="/filters"/>
                        <MenuItem path="/articles"/>
                        <MenuItem path="/comments"/>
                    </Menu>
                    <Switch>
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path="/comments/:page" component={CommentsPage} />
                        <Redirect from="/comments" to="/comments/1"/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }

    handleLangChange = event => {
        event.target.checked && this.setState({
            language: event.target.value
        })
    }
}

export default connect(null, { loadAllArticles })(App)