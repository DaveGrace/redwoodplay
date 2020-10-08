import MembersDb from 'src/components/MembersDb'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MembersDb not found</div>

export const Success = ({ membersDb }) => {
  return <MembersDb membersDb={membersDb} />
}
