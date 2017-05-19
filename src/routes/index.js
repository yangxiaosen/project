// We only need to import the modules necessary for initial render

import CoreLayout from '../layouts/CoreLayout'

import Home from './Home'
import CounterRoute from './Counter'
import AboutRoute from './About'
import SignUpRoute from './SignUp'
import UserRoute from './User'
import Yang1Route from './Yang1'
import Yang2Route from './Yang2'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Yang2Route(),
    Yang1Route(store),
    CounterRoute(store),
    AboutRoute(store),
    {
      path        : '/signUp',
      component   : SignUpRoute
    },
    UserRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
