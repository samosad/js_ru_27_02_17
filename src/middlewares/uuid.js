import getUUID from 'uuid'
import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
    if (action.type === ADD_COMMENT) {
        const id = getUUID()
        console.log('---', 'uuid:', id)
        next({ ...action, payload: { ...action.payload, id } })
    } else {
        next(action)
    }
}
