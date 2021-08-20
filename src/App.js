import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import UserForm from './UserForm';

const initialData = [{
  id: '1',
  name: 'sekar',
  emailId: 'sekar@gmail.com',
  designation: 'Developer',

},
{
  id: '2',
  name: 'karuppasamy',
  emailId: 'karuppasamy@gmail.com',
  designation: 'Consultant',

},
{
  id: '3',
  name: 'kumar',
  emailId: 'kumar@gmail.com',
  designation: 'Consultant',

},
];
function App() {
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [userData, setUserData] = React.useState(initialData);
  const [flow, setFlow] = React.useState(null);

  const handleClickOpen = () => {
    setFlow('add');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFlow(null);
  };

  const onClickEdit = (data) => {
    setFlow('edit');
    setOpen(true);
    setCurrentUser(data);
  };

  const onSubmitForm = (userInfo) => {
    if (flow === 'add') {
      const newUserList = [...userData, userInfo];
      setUserData(newUserList);
    } else {
      const updateUseList = userData;
      const foundIndex = updateUseList.findIndex((element) => element.id === userInfo.id);
      updateUseList.splice(foundIndex, 1, userInfo);
      setUserData(updateUseList);
    }

    handleClose();
  };

  const deleteUserItem = (userInfo) => {
    const newArr = userData.filter((element) => element.id !== userInfo.id);
    setUserData(newArr);
  };

  return (
    <div className="App">
      <div className="topbar">
        <Button className="add-btn" data-testid="add-user" onClick={handleClickOpen}>
          Add user
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"><UserForm currentUser={currentUser} onSubmitForm={onSubmitForm} handleClose={handleClose} /></DialogTitle>
        <DialogContent />

      </Dialog>
      <Grid>

        <TableContainer data-testid="user-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email Id</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>
                    {data.name}
                  </TableCell>
                  <TableCell>
                    {data.emailId}
                  </TableCell>

                  <TableCell>
                    {data.designation}
                  </TableCell>

                  <TableCell>
                    <Button variant="outlined" className="edit-btn" color="primary" onClick={() => { onClickEdit(data); }}>
                      edi
                    </Button>
                    <Button variant="outlined" className="delete-btn" color="primary" onClick={() => { deleteUserItem(data); }}>
                      delete
                    </Button>

                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}
export default App;
