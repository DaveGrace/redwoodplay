import { Link, routes } from '@redwoodjs/router'

import MembersDbs from 'src/components/MembersDbs'

export const QUERY = gql`
  query MEMBERS_DBS {
    membersDbs {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No membersDbs yet. '}
      <Link to={routes.newMembersDB()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ membersDbs }) => {
  return <MembersDbs membersDbs={membersDbs} />
}
