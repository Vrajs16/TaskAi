// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Calendar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Calendar from './Calendar'

export const generated = () => {
  return <Calendar />
}

export default {
  title: 'Components/Calendar',
  component: Calendar,
}
