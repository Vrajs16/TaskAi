import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

import EditUserCell from 'src/components/User/EditUserCell'

const VerifyPage = ({ id }) => {
  const { currentUser, isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  console.log(currentUser)

  const VERIFY_USER_MUTATION = gql`
    mutation VerifyUserMutation($id: Int!, $input: VerifyUserInput!) {
      verifyUser(id: $id, input: $input) {
        isVerified
      }
    }
  `
  const data = {
    isVerified: true,
  }
  const [update] = useMutation(VERIFY_USER_MUTATION)
  {
    isAuthenticated ? (
      update({ variables: { id: currentUser.id, input: data } })
    ) : (
      <>verifying</>
    )
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          <h1>
            <center>
              <font color="#3BB9FF" size="6">
                Thank you for Verifying!
              </font>
            </center>
          </h1>
          <center>
            <img
              src="https://media.giphy.com/media/lYpOXbTyaTF60/giphy.gif"
              //src="https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4="
              width="300"
              height="300"
              alt="verified"
            ></img>
          </center>
          <h2>
            <center>
              <font color="#3BB9FF" size="4">
                You may now exit this page ㋡
              </font>
            </center>
          </h2>
        </div>
      ) : (
        <div>
          <center>
            <font color="#3BB9FF" size="6">
              Loading...
            </font>
          </center>
        </div>
      )}
    </>
  )
}

export default VerifyPage
