import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {useState} from 'react'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell.js'
import GoogleEventsCell from 'src/components/GoogleEventsCell/GoogleEventsCell.js'
import {Button} from '@chakra-ui/react'
import FullCalEventsCell from 'src/components/FullCalEventsCell'
const SyncPage = () => {

  const [showEvents, setShowEvents] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get('code')

  const start = '2022-11-01T12:00:00Z'
  const end = '2022-12-30T12:00:00Z'

  if (code === null){
    return <AuthorizeCell></AuthorizeCell>
  }

  return (
    <>
      <MetaTags title="Sync" description="Sync page" />
      <p> Working </p>
      <Button onClick = {() => setShowEvents(true)}> Show Events </Button>
      {showEvents ? (
        <FullCalEventsCell
        start = {start}
        end = {end}
        code = {code}
        ></FullCalEventsCell>
      ) : (

        <div></div>
      )}
    </>
  )
}

export default SyncPage