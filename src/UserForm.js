import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', name: '', emailId: '', designation: '',
    };
  }

  componentDidMount() {
    const { currentUser } = this.props;

    if (currentUser != null) {
      this.setState({
        id: currentUser.id,
        name: currentUser.name,
        emailId: currentUser.emailId,
        designation: currentUser.designation,
      });
    } else {
      this.setState({
        id: '', name: '', emailId: '', designation: '',
      });
    }
  }
/* eslint-disable */

  onSubmitForm = () => {
      const { onSubmitForm } = this.props;
      const {
        id, name, emailId, designation,
      } = this.state;
      const userObject = {
        id,
        name,
        emailId,
        designation,
      };
      onSubmitForm(userObject);
    }
    /* eslint-enable */

  render() {
    const {
      id, name, emailId, designation,
    } = this.state; const { handleClose } = this.props;
    return (
      <form>
        <Grid container>
          <Grid container className="container-btm">
            <Grid md={6} item>
              <FormControl><InputLabel>Id</InputLabel></FormControl>

            </Grid>
            <Grid md={6} item>
              <TextField
                data-testid="id"
                value={id}
                fullWidth
                variant="outlined"
                onChange={(event) => {
                  this.setState({ id: event.target.value });
                }}
              />

            </Grid>
          </Grid>
          <Grid container className="container-btm">
            <Grid md={6} item>
              <FormControl><InputLabel>Name</InputLabel></FormControl>

            </Grid>
            <Grid md={6} item>
              <TextField
                data-testid="name"
                value={name}
                fullWidth
                variant="outlined"
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              />

            </Grid>
          </Grid>
          <Grid container className="container-btm">
            <Grid md={6} item>
              <FormControl><InputLabel>Email Id</InputLabel></FormControl>

            </Grid>
            <Grid md={6} item>
              <TextField
                data-testid="emailId"
                value={emailId}
                fullWidth
                variant="outlined"
                onChange={(event) => {
                  this.setState({ emailId: event.target.value });
                }}
              />

            </Grid>
          </Grid>
          <Grid container className="container-btm">
            <Grid md={6} item>
              <FormControl><InputLabel>Designation</InputLabel></FormControl>

            </Grid>
            <Grid md={6} item>
              <TextField
                data-testid="designation"
                value={designation}
                fullWidth
                variant="outlined"
                onChange={(event) => {
                  this.setState({ designation: event.target.value });
                }}
              />

            </Grid>
          </Grid>

          <div>
            <Button onClick={this.onSubmitForm} className="submit-btn">
              submit
            </Button>
            <Button onClick={handleClose} className="cancel-btn">
              cancel
            </Button>
          </div>
        </Grid>
      </form>
    );
  }
}

export default UserForm;
