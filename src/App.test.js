import { render } from '@testing-library/react';
import App from './App';
/* eslint-disable */
it('check table render', () => {
  const {getByTestId }=render(<App/>);
  const table=getByTestId("user-table");
  expect(table).toBeTruthy();
});
it('Add button', () => {
    const {getByTestId }=render(<App/>);
    const addUser=getByTestId("add-user");
    expect(addUser).toBeTruthy();
  });
