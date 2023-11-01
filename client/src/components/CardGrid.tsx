import React, { FC } from 'react';
import { Grid } from 'grommet';
import TechTile from './TechTile';
import TechCard from './TechCard';

interface TileGridProps {
  techTileTitles: string[];
  color: string;
}

const TileGrid: React.FC<TileGridProps> = ({ techTileTitles, color }) => {
  return (
    <Grid
      pad="large"
      columns={[['medium', 'large']]}
      justifyContent="center"
    >
      {techTileTitles.map((title, index) => (
        <TechCard
          key={index}
          title={title}
          color={color}
        />
      ))}
    </Grid>
  );
};

export default TileGrid;
