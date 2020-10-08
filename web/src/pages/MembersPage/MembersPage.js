import { Link, routes } from '@redwoodjs/router'

const MembersPage = () => {
  return (
    <>
      <div className= " flex-column justify-between w-full"> MembersPage
      <img className="bg-50" src="C:\Users\User\Documents\Council\Labor\Broulee island.jpg"></img>
      <p>
        Find me in <tt>./web/src/pages/MembersPage/MembersPage.js</tt>
      </p>
      <p>
        My default route is named <tt>members</tt>, link to me with `
        <Link to={routes.members()}>Members</Link>`
      </p>
      </div>
    </>
  )
}

export default MembersPage
