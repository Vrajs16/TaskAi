import { MetaTags } from '@redwoodjs/web'

import TaskCell from 'src/components/Task/TaskCell'

const TaskPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Task" description="Task Page" />

      <h1>Task Page</h1>
      <TaskCell id={id} />
    </>
  )
}

export default TaskPage
