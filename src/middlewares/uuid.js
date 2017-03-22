import getUUID from 'uuid'
import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        const id = getUUID()
        console.log('---', 'uuid:', id)
        next({ ...action, payload: { ...action.payload, id } })
    } else {
        next(action)
    }
}