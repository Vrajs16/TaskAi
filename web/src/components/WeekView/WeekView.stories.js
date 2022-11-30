// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <WeekView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import WeekView from './WeekView'

export const generated = () => {
  return <WeekView />
}

export default {
  title: 'Components/WeekView',
  component: WeekView,
}
