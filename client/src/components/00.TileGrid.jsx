import React, { FC, useContext } from 'react';
import { Grid, GridColumnsType, ResponsiveContext } from 'grommet';
import TechTile from './01.TechTile';
import AddNewTile from './AddNewTile';
import { base } from 'grommet-icons';

const TileGrid = ({ techTileTitles, color }) => {
  const size = useContext(ResponsiveContext);
  console.log('size is: ', size);

  let columns;
  if (size === 'small') {
    columns = 'fit';
  } else if (size === 'medium') {
    columns = ['1fr', '1fr', '1fr', '1fr'];
  } else {
    //for large display
    columns = ['1fr', '1fr', '1fr', '1fr', '1fr'];
  }

  return (
    <Grid
      columns={columns}
      gap="small"
      responsive
      style={size === 'large' ? { maxWidth: '80vw', margin: '0 auto' } : {}}
    >
      <AddNewTile
        key="addNew"
        title="Add New"
        color="highlight"
        textStyle={{ fontWeight: 'bold', color: 'base' }}
      />
      {techTileTitles.map((title, index) => (
        <TechTile
          key={index}
          title={title}
          color={color}
          textStyle={{ fontWeight: 'bold', color: 'base' }}
        />
      ))}
    </Grid>
  );
};

export default TileGrid;
