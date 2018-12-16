import { combineReducers } from 'react-redux'

const root = combineReducers({
    dashboard: () => ({
        sumary: {credit: 100, debt: 50}
    })
})

export default rootReducer