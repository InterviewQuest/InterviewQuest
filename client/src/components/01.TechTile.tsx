import React, { FC, useContext, useState } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import TechTileModal from './02.TechTileModal';

interface TechTileProps {
  title: string;
  color?: string;
  textStyle?: React.CSSProperties;
}

const TechTile: FC<TechTileProps> = ({ title, color, textStyle }) => {
  const size = useContext(ResponsiveContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const boxStyles =
    size === 'small'
      ? {
          minHeight: '5vh',
        }
      : {
          aspectRatio: '1 / 1',
          width: '10vw',
          height: '10vw',
        };

  return (
    <>
      <Box
        align="center"
        justify="center"
        pad="medium"
        border={{ color: 'gray8', size: 'small' }}
        round="medium"
        background={color}
        onClick={openModal}
        as="button"
        hoverIndicator="highlight"
        style={boxStyles}
      >
        <Text
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...textStyle,
          }}
        >
          {title}
        </Text>
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
