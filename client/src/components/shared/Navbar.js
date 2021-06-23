import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Navbar = ({ user, handleLogout, location, history }) => {

  // show nav items base on login
  const rightNavItems = () => {
    if (user) {
      // links that user see when logged in
      return (
        <Menu.Menu position='right'>
          <Link to="/dash">
            <Menu.Item
              name='dash'
              id='dash'
              active={location.pathname === '/dash'}
            />
          </Link>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(history) }
          />
        </Menu.Menu>
      )
    } else {
      // links the user see when not logged in
      return (
        <Menu.Menu position='right'>
          <Link to="/login">
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  // show up regardless of logged in or not
  return(
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item
          name='home'
          id='home'
          active={location.pathname === '/'}
        />
      </Link>
      { rightNavItems() }
    </Menu>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar);