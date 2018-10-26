import PrivateLayout from './layouts/PrivateLayout'
import AuthFormLayout from './layouts/AuthFormLayout'
import asyncComponent from './components/AsyncComponent'

const AsyncTimeline = asyncComponent(() => import('./containers/timeline'))
const AsyncTimelineItemsCreate = asyncComponent(() =>
  import('./containers/timelineCreate')
)
const AsyncTimelineItemsEdit = asyncComponent(() =>
  import('./containers/timelineEdit')
)
const AsyncSignup = asyncComponent(() => import('./containers/signup'))
const AsyncSignin = asyncComponent(() => import('./containers/signin'))
const AsyncSignout = asyncComponent(() => import('./containers/signout'))

export default [
  {
    layout: AuthFormLayout,
    routes: [
      {
        path: '/signup',
        component: AsyncSignup
      },
      {
        path: '/signin',
        component: AsyncSignin
      }
    ]
  },
  {
    layout: PrivateLayout,
    routes: [
      {
        path: '/',
        component: AsyncTimeline,
        exact: true
      },
      {
        path: '/timeline',
        component: AsyncTimeline,
        exact: true
      },
      {
        path: '/timeline/items/:id/edit',
        component: AsyncTimelineItemsEdit
      },
      {
        path: '/timeline/items/create',
        component: AsyncTimelineItemsCreate
      },
      {
        path: '/signout',
        component: AsyncSignout
      }
    ]
  }
]
