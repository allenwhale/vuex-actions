import {
  isFunc,
  STATUS
} from './utils'

const handleAction = handlers => (state, mutation) => {
  const { __status__: status, __payload__: payload } = mutation

  if (isFunc(handlers)) {
    status === STATUS.SUCCESS && handlers.call(this, state, payload)
  } else {
    const handler = handlers[status] || handlers[STATUS.SUCCESS]
    isFunc(handler) && handler.call(this, state, payload)
  }
}

export default handleAction
