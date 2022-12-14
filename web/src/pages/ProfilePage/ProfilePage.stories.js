import { User } from '@auth0/auth0-react'
import ProfilePage from './ProfilePage'


export const generated = () => {
  return <ProfilePage
  ProfilePage={{
    title: 'FirstLast Name',
    password: 'Current Password',
    password: 'New Password',
    password: 'Confirm New Password',
    button: 'Cancle',
    button: 'Submit'
  }} />
}

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
}
