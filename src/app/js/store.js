import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import promise from "redux-promise-middleware"

import reducer from "./reducers/listReducer"

const middleware = applyMiddleware(logger)

export default createStore(reducer, middleware)
