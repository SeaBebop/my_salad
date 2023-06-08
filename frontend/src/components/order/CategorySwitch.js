import React, { useState } from 'react';
import LoadFruits from './LoadFruits';
import LoadVegetables from './LoadVegetables';
import LoadProtien from './LoadProtien';

import classes from './CategorySwitch.module.css';

const CategorySwitch = (props) => {
  const [activeView, setActiveView] = useState('fruit');

  const handleUsersClick = function (saladType) {
    setActiveView(saladType);
  };

  return (
    <div className={`${classes.CategorySwitch} row`}>
      <div className={classes.UserSaladTrigger}>
        <button
          className={activeView === 'fruit' ? classes.activeButton : ''}
          onClick={() => handleUsersClick('fruit')}
        >
          Fruit Salads
        </button>
        <button
          className={activeView === 'vegetable' ? classes.activeButton : ''}
          onClick={() => handleUsersClick('vegetable')}
        >
          Vegetable Salads
        </button>
        <button
          className={activeView === 'protein' ? classes.activeButton : ''}
          onClick={() => handleUsersClick('protein')}
        >
          Protein Salads
        </button>
      </div>

      {activeView === 'fruit' && <LoadFruits />}
      {activeView === 'vegetable' && <LoadVegetables />}
      {activeView === 'protein' && <LoadProtien />}
    </div>
  );
};

export default CategorySwitch;
