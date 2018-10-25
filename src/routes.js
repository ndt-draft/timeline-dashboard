import DefaultLayout from './layouts/DefaultLayout'
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
    layout: DefaultLayout,
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
        path: '/signup',
        component: AsyncSignup
      },
      {
        path: '/signin',
        component: AsyncSignin
      },
      {
        path: '/signout',
        component: AsyncSignout
      }
    ]
  }
]
