import getUUID from 'uuid'

export default store => next => action => {
    const uuid = getUUID()
    console.log('---', 'uuid:', uuid)
    next({...action, uuid})
//    next({...action, newField: 'some'})
}