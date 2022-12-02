// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <LogoutButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import LogoutButton from './LogoutButton'

export const generated = () => {
  return <LogoutButton />
}

export default {
  title: 'Components/LogoutButton',
  component: LogoutButton,
}
