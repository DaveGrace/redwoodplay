import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MembersDbForm from 'src/components/MembersDbForm'

const CREATE_MEMBERS_DB_MUTATION = gql`
  mutation CreateMembersDbMutation($input: CreateMembersDbInput!) {
    createMembersDb(input: $input) {
      id
    }
  }
`

const NewMembersDb = () => {
  const { addMessage } = useFlash()
  const [createMembersDb, { loading, error }] = useMutation(
    CREATE_MEMBERS_DB_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.membersDbs())
        addMessage('MembersDb created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createMembersDb({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MembersDb</h2>
      </header>
      <div className="rw-segment-main">
        <MembersDbForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMembersDb
