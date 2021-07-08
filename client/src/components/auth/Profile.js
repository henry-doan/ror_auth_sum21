import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Container, Button, Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const defaultImage = "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [editUser, setUser] = useState({name: '', email: '', file: ''})

  useEffect( () => {
    setUser({ name: user.user.name, email: user.user.email})
  }, [])

  const profileView = () => {
    return (
      <>
        <Grid.Column width={4}>
          <Image src={user.user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{user.user.name}</Header>
          <Header as="h1">{user.user.email}</Header>
        </Grid.Column>
      </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.user.id, editUser)
    setUser({name: '', email: '', file: ''})
    setEditing(false)
  }

  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={(files) => setUser({...editUser, file: files[0]})}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
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