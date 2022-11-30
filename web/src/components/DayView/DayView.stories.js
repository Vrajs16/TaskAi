// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <DayView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import DayView from './DayView'

export const generated = () => {
  return <DayView />
}

export default {
  title: 'Components/DayView',
  component: DayView,
}
