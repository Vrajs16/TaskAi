// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage


import { Private, Router, Route, Set } from '@redwoodjs/router'


import BannerLayout from 'src/layouts/BannerLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import GitAuth from './GitAuth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import SignupPage from './pages/SignupPage/SignupPage'
const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Appointments" titleTo="appointments" buttonLabel="New Appointment" buttonTo="newAppointment">
        <Route path="/appointments/new" page={AppointmentNewAppointmentPage} name="newAppointment" />
        <Route path="/appointments/{id:Int}/edit" page={AppointmentEditAppointmentPage} name="editAppointment" />
        <Route path="/appointments/{id:Int}" page={AppointmentAppointmentPage} name="appointment" />
        <Route path="/appointments" page={AppointmentAppointmentsPage} name="appointments" />
      </Set>
      <Route path="/GitAuth" page={GitAuth} name="GitAuth"></Route>

      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      </Set>
      <Set wrap={ScaffoldLayout} private unauthenticated="login" title="Tasks" titleTo="tasks" buttonLabel="New Task" buttonTo="newTask">
        <Route path="/tasks/new" page={TaskNewTaskPage} name="newTask" />
        <Route path="/tasks/{id:Int}/edit" page={TaskEditTaskPage} name="editTask" />
        <Route path="/tasks/{id:Int}" page={TaskTaskPage} name="task" />
        <Route path="/tasks" page={TaskTasksPage} name="tasks" />
      </Set>
      <Set wrap={BannerLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/verify" page={VerifyPage} name="verify" />
      </Set>
      <Private unauthenticated="login" wrap={BannerLayout}>
        <Route path="/planner" page={PlannerPage} name="planner" />
        <Route path="/profile" page={ProfilePage} name="profile" />
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
