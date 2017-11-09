import React from 'react';
import UserList from './js/containers/user-list';
import UserDetails from './js/containers/user-detail';
import ItemModsDisplay from './js/containers/item-mods-display';
import AddModButton from './js/containers/add-mod-button';
require('./scss/style.scss');

const App = () => (
  <div>
    <div>
      <h2>User List</h2>
      <UserList />
      <hr />
      <h2>User Details</h2>
      <UserDetails />
    </div>
    <div>
      <ItemModsDisplay />
      <AddModButton />
    </div>
  </div>
);

export default App;
