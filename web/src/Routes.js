// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BannerLayout from 'src/layouts/BannerLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import GitAuth from './GitAuth'

const Routes = () => {
  return (
    <Router>
      <Route path="/calendar" page={CalendarPage} name="calendar" />
      <Route path="/GitAuth" page={GitAuth} name="GitAuth"></Route>
      <Set wrap={AuthLayout}>
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/register" page={RegisterPage} name="register" />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Tasks" titleTo="tasks" buttonLabel="New Task" buttonTo="newTask">
        <Route path="/tasks/new" page={TaskNewTaskPage} name="newTask" />
        <Route path="/tasks/{id:Int}/edit" page={TaskEditTaskPage} name="editTask" />
        <Route path="/tasks/{id:Int}" page={TaskTaskPage} name="task" />
        <Route path="/tasks" page={TaskTasksPage} name="tasks" />
      </Set>
      <Set wrap={BannerLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/planner" page={PlannerPage} name="planner" />
        <Route path="/profile" page={ProfilePage} name="profile" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
