import React, { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserForm from 'src/components/User/UserForm'

export const QUERY = gql`
  query EditUserById($id: Int!) {
    user: user(id: $id) {
      id
      name
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      isVerified
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      isVerified
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ user }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User updated')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }
  const { currentUser, isAuthenticated } = useAuth()
  const data = {
    isVerified: true,
  }
  const [update] = useMutation(UPDATE_USER_MUTATION)
  update({ variables: { id: $id, input: data } })
  useEffect(() => {
    update()
  })
  return (
    <h2>
      <center>
        <font color="#3BB9FF" size="4">
          You may now exit this page ㋡
        </font>
      </center>
    </h2>
  )
}
