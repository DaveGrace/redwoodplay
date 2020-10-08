import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MEMBERS_DB_MUTATION = gql`
  mutation DeleteMembersDbMutation($id: Int!) {
    deleteMembersDb(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MembersDb = ({ membersDb }) => {
  const { addMessage } = useFlash()
  const [deleteMembersDb] = useMutation(DELETE_MEMBERS_DB_MUTATION, {
    onCompleted: () => {
      navigate(routes.membersDbs())
      addMessage('MembersDb deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete membersDb ' + id + '?')) {
      deleteMembersDb({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MembersDb {membersDb.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{membersDb.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{membersDb.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{membersDb.phone}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{membersDb.name}</td>
            </tr>
            <tr>
              <th>Street address</th>
              <td>{membersDb.street_address}</td>
            </tr>
            <tr>
              <th>Suburb</th>
              <td>{membersDb.suburb}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{membersDb.state}</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{membersDb.postcode}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMembersDB({ id: membersDb.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(membersDb.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default MembersDb
