import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MembersDbForm from 'src/components/MembersDbForm'

export const QUERY = gql`
  query FIND_MEMBERS_DB_BY_ID($id: Int!) {
    membersDb: membersDb(id: $id) {
      id
      email
      phone
      name
      street_address
      suburb
      state
      postcode
    }
  }
`
const UPDATE_MEMBERS_DB_MUTATION = gql`
  mutation UpdateMembersDbMutation($id: Int!, $input: UpdateMembersDbInput!) {
    updateMembersDb(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ membersDb }) => {
  const { addMessage } = useFlash()
  const [updateMembersDb, { loading, error }] = useMutation(
    UPDATE_MEMBERS_DB_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.membersDbs())
        addMessage('MembersDb updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateMembersDb({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MembersDb {membersDb.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MembersDbForm
          membersDb={membersDb}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
