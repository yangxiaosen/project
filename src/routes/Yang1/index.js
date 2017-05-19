//新增组件入口？
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'yang1',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Yang1 = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'yang1', reducer })

      /*  Return getComponent   */
      cb(null, Yang1)

    /* Webpack named bundle   */
    }, 'yang1')
  }
})
