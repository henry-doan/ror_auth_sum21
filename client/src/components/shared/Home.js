import { Header, Image } from 'semantic-ui-react';
import Mtn from '../../images/mtn.jpeg';

const Home = () => (
  <>
    <Header>Home Page</Header>
    <Image src={Mtn} />
    <Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80" />
  </>
)

export default Home;