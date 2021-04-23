# CNATRA-LMS Frontend

### Start the frontend in development mode

To run this app ensure that you have done the following:

1. `cd frontend`
2. Installed the necessary dependencies, `npm install`
3. Start the frontend `npm start`

### Major Frontend Technologies/Packages Utilized

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React Table](https://react-table.tanstack.com/)
- [React Hook Form](https://react-hook-form.com/)

### Areas for Improvement

#### Persisting Application State & Caching data

- Currently, on refresh, the Redux store state is NOT persisted. Thus,
  a number of useEffect hooks are called to ensure that components can retreive the necessary properties from Redux / the backend. This causes the application to make a non-optimal number of data requests, slowing down performance. Some possible solutions for this may include:

  - Utilizing the browser's [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or [SessionsStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to store certain key information that can be persisted between page reloads.
  - Using [Redux Storage](https://www.npmjs.com/package/redux-storage) or [Redux Persist](https://www.npmjs.com/package/redux-persist) to persist the Redux store state between refreshes and reduce the number of calls to the backend

#### Navigation Bar Expansion

- The Navigation Bar has been developed to accept and display an array of icons links. Currently it show what an instuctor may see in their navigation bar, however separate files can be created for students and administrators to show different navigation bars.

#### Login System

- There is currently no authentication for this application. All views created are likely what an instuctor would see. Within the `TextOrInput` Component there is an option to toggle the user variable, disabling the editing ability of the user, however this no replacement for a backend authentication system that would help to serve the user different views according to their role.
- `Routes.js` should also redirect the user to a login page if the user is not signed yet
