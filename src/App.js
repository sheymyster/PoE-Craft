import React from 'react';
import ItemModsDisplay from './js/containers/item-mods-display';
import CraftingButtonField from './js/containers/add-mod-button';
require('./index.css');

const App = () => (
  <div className='entireContainer'>
      <ItemModsDisplay />
      <CraftingButtonField />
  </div>
);

export default App;
