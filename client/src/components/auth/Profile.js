import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Container, Button, Header } from 'semantic-ui-react';

const defaultImage = "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"

const Profile = ({ user }) => {
  const [editing, setEditing] = useState(false)
  const [editUser, setUser] = useState({name: '', email: ''})

  const profileView = () => {
    return (
      <>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{user.name}</Header>
          <Header as="h1">{user.email}</Header>
        </Grid.Column>
      </>
    )
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={editUser.name}
            required
            onChange={(e) => setUser({ ...editUser, name: e.target.value })}
          />
          <Form.Input
            label="Email"
            name="email"
            value={editUser.email}
            required
            onChange={(e) => setUser({ ...editUser, email: e.target.value })}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

  return(
    <Container>
      <Grid>
        <Grid.Row>
          { editing ? editView() : profileView() }
          <Grid.Column>
            <Button onClick={() => setEditing(!editing)}>
              { editing ? 'Cancel' : 'Edit'}
            </Button>
          </Grid.Column>
        </Grid.Row>  
      </Grid>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => <Profile {...props} {...auth} /> }
  </AuthConsumer>
)

export default ConnectedProfile;