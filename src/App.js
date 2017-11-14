import React from 'react';
import ItemModsDisplay from './js/containers/item-mods-display';
import AddModButton from './js/containers/add-mod-button';
require('./index.css');

const App = () => (
  <div>
    <div className='itemStatsContainer'>
      <ItemModsDisplay />
    </div>
    <div>
      <AddModButton />
    </div>
  </div>
);

export default App;
