import DefaultLayout from './layouts/DefaultLayout'
import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./containers/home'))
const AsyncAbout = asyncComponent(() => import('./containers/about'))
const AsyncTimeline = asyncComponent(() => import('./containers/timeline'))
const AsyncTimelineGroups = asyncComponent(() =>
  import('./containers/timeline/TimelineGroupForm')
)
const AsyncTimelineItems = asyncComponent(() =>
  import('./containers/timeline/TimelineForm')
)

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: AsyncHome,
        exact: true
      },
      {
        path: '/about',
        component: AsyncAbout,
        exact: true
      },
      {
        path: '/timeline',
        component: AsyncTimeline,
        exact: true
      },
      {
        path: '/timeline/groups',
        component: AsyncTimelineGroups
      },
      {
        path: '/timeline/items',
        component: AsyncTimelineItems
      }
    ]
  }
]
