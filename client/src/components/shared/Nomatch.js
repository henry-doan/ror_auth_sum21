import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Nomatch = () => (
  <>
    <Header>404 Page not found</Header>
    <Link to="/">
      Return Home
    </Link>
  </>
)

export default Nomatch;