import DefaultLayout from './layouts/DefaultLayout'
import asyncComponent from './components/AsyncComponent'

const AsyncTimeline = asyncComponent(() => import('./containers/timeline'))
const AsyncTimelineItemsCreate = asyncComponent(() =>
  import('./containers/timelineCreate')
)
const AsyncTimelineItemsEdit = asyncComponent(() =>
  import('./containers/timelineEdit')
)

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
      }
    ]
  }
]
