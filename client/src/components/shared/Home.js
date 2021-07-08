import { Header, Image } from 'semantic-ui-react';
import Mtn from '../../images/mtn.jpeg';
import { MainButton, MainImg } from '../styledComponents/sharedStyles';

export const styles = {
  imageSty: {
    width: '600px', 
    borderRadius: '10px',
  }
}

const Home = () => (
  <>
    <Header>Home Page</Header>
    <MainButton fSize='sm'>Click</MainButton>
    <MainButton color="blue" fSize='lrg'>Click 2</MainButton>
    <MainImg src={Mtn} />
    <Image src={Mtn} />
    <Image src={Mtn} style={{ width: '200px', marginRight: '4px'}} />
    <Image src={Mtn} style={styles.imageSty} />
    <Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80" />
  </>
)

export default Home;