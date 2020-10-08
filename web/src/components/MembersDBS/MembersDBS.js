import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_MEMBERS_DB_MUTATION = gql`
  mutation DeleteMembersDbMutation($id: Int!) {
    deleteMembersDb(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const MembersDbsList = ({ membersDbs }) => {
  const { addMessage } = useFlash()
  const [deleteMembersDb] = useMutation(DELETE_MEMBERS_DB_MUTATION, {
    onCompleted: () => {
      addMessage('MembersDb deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete membersDb ' + id + '?')) {
      deleteMembersDb({ variables: { id }, refetchQueries: ['MEMBERS_DBS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Name</th>
            <th>Street address</th>
            <th>Suburb</th>
            <th>State</th>
            <th>Postcode</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {membersDbs.map((membersDb) => (
            <tr key={membersDb.id}>
              <td>{truncate(membersDb.id)}</td>
              <td>{truncate(membersDb.email)}</td>
              <td>{truncate(membersDb.phone)}</td>
              <td>{truncate(membersDb.name)}</td>
              <td>{truncate(membersDb.street_address)}</td>
              <td>{truncate(membersDb.suburb)}</td>
              <td>{truncate(membersDb.state)}</td>
              <td>{truncate(membersDb.postcode)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.membersDb({ id: membersDb.id })}
                    title={'Show membersDb ' + membersDb.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMembersDB({ id: membersDb.id })}
                    title={'Edit membersDb ' + membersDb.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete membersDb ' + membersDb.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(membersDb.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MembersDbsList
