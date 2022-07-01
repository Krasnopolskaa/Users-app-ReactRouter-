import React from 'react'
import { Route, Link } from 'react-router-dom'
const User = ({ match }) => <p>{match.params.id}</p>
class Users extends React.Component {
  render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <Route path="/users/:id" component={User} />
      </div>
    )
  }
}
export default Users