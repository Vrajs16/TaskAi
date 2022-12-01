import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SyncPage = () => {
  return (
    <>
      <MetaTags title="Sync" description="Sync page" />

      <h1>SyncPage</h1>
      <p>
        Find me in <code>./web/src/pages/SyncPage/SyncPage.js</code>
      </p>
      <p>
        My default route is named <code>sync</code>, link to me with `
        <Link to={routes.sync()}>Sync</Link>`
      </p>
    </>
  )
}

export default SyncPage
