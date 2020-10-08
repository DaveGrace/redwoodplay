// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/orgs/new" page={NewOrgPage} name="newOrg" />
      <Route path="/orgs/{id:Int}/edit" page={EditOrgPage} name="editOrg" />
      <Route path="/orgs/{id:Int}" page={OrgPage} name="org" />
      <Route path="/orgs" page={OrgsPage} name="orgs" />
      <Route path="/members-dbs/new" page={NewMembersDBPage} name="newMembersDB" />
      <Route path="/members-dbs/{id:Int}/edit" page={EditMembersDBPage} name="editMembersDB" />
      <Route path="/members-dbs/{id:Int}" page={MembersDBPage} name="membersDb" />
      <Route path="/members-dbs" page={MembersDBSPage} name="membersDbs" />
      <Route path="/members" page={MembersPage} name="members" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route notfound page={NotFoundPage} />
      <Route path="/" page={HomePage} name="home" />
    </Router>
  )
}

export default Routes
