import React, { FC } from 'react';
import { Grid } from 'grommet';
import TechTile from './01.TechTile';

interface TileGridProps {
  techTileTitles: string[];
  color: string;
}

const TileGrid: React.FC<TileGridProps> = ({ techTileTitles, color }) => {
  return (
    <Grid
      columns={{ count: 6, size: 'auto' }}
      gap="small"
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
