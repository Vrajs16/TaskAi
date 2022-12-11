import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VerifyPage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <h1>
        <center>
          <font color="#3BB9FF" size="6">
            Thank you for Verifying!
          </font>
        </center>
      </h1>
      <center>
        <img
          src="https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4="
          width="300"
          height="300"
        ></img>
      </center>
      <h2>
        <center>
          <font color="#3BB9FF" size="4">
            You may now exit this page ㋡
          </font>
        </center>
      </h2>
    </>
  )
}

export default VerifyPage
