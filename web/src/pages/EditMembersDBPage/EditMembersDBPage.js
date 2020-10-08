import MembersDbsLayout from 'src/layouts/MembersDbsLayout'
import EditMembersDbCell from 'src/components/EditMembersDbCell'

const EditMembersDbPage = ({ id }) => {
  return (
    <MembersDbsLayout>
      <EditMembersDbCell id={id} />
    </MembersDbsLayout>
  )
}

export default EditMembersDbPage
