import { render } from '@testing-library/react';
import UserForm from './UserForm';
/* eslint-disable */
it('User Form fields', () => {
  const {getByTestId }=render(<UserForm/>);
  const id=getByTestId("id");
  expect(id).toBeTruthy();
  const name=getByTestId("name");
  expect(name).toBeTruthy();
  const emailId=getByTestId("emailId");
  expect(emailId).toBeTruthy();
  const designation=getByTestId("designation");
  expect(designation).toBeTruthy();
});

