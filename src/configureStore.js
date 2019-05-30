import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

// exported to be able to use in tests
export const middlewares = [ReduxThunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default createStoreWithMiddleware(rootReducer)