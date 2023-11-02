import React, { FC, useContext } from 'react';
import { Grid, GridColumnsType, ResponsiveContext } from 'grommet';
import TechTile from './01.TechTile';

interface TileGridProps {
  techTileTitles: string[];
  color: string;
}

const TileGrid: React.FC<TileGridProps> = ({ techTileTitles, color }) => {
  const size = useContext(ResponsiveContext);
  console.log('size is: ', size);

  let columns: GridColumnsType;
  if (size === 'small') {
    columns = ['full'];
  } else if (size === 'medium') {
    columns = {
      count: 'fit',
      size: ['auto', 'full'],
    };
  } else {
    //for large display
    columns = {
      count: 'fit',
      size: ['auto', 'full'],
    };
  }

  return (
    <Grid
      columns={columns}
      gap="small"
      responsive
      style={size === 'large' ? { maxWidth: '80vw', margin: '0 auto' } : {}}
    >
      {techTileTitles.map((title, index) => (
        <TechTile
          key={index}
          title={title}
          color={color}
        />
      ))}
    </Grid>
  );
};

export default TileGrid;
