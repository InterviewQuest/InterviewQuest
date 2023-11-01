import React, { FC, useState } from 'react';
import { Box, Text } from 'grommet';
import TechTileModal from './TechTileModal';

interface TechTileProps {
  title: string;
  color?: string;
}

const TechTile: FC<TechTileProps> = ({ title, color }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Box
        align="center"
        justify="center"
        pad="medium"
        border={{ color: 'shadow', size: 'medium' }}
        round="small"
        background={color}
        onClick={openModal}
        as="button"
      >
        <Text>{title}</Text>
      </Box>
      {showModal && (
        <TechTileModal
          onClose={closeModal}
          title={title}
        />
      )}
    </>
  );
};

export default TechTile;
