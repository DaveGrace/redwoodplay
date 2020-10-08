import MembersDbsLayout from 'src/layouts/MembersDbsLayout'
import MembersDbCell from 'src/components/MembersDbCell'

const MembersDbPage = ({ id }) => {
  return (
    <MembersDbsLayout>
      <MembersDbCell id={id} />
    </MembersDbsLayout>
  )
}

export default MembersDbPage
