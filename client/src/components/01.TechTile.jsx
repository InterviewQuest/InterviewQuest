import React, { FC, useContext, useState } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import TechTileModal from './02.TechTileModal';

const TechTile = ({ title, color, textStyle }) => {
  const size = useContext(ResponsiveContext);
  const [showModal, setShowModal] = useState(false);
  //* ! State variables for each Text Area
  const [proText, setProText] = useState('');
  const [conText, setConText] = useState('');
  const [opinionText, setOpinionText] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    /**
     * todo: API Calls to Store Payload
     */
    console.log(proText);
    setShowModal(false);
  };

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
        pad="small"
        border={{ color: 'shadow', size: 'medium' }}
        round="medium"
        background={color}
        onClick={openModal}
        as="button"
        hoverIndicator="tertiary"
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
          proText={proText}
          setProText={setProText}
          conText={conText}
          setConText={setConText}
          opinionText={opinionText}
          setOpinionText={setOpinionText}
        />
      )}
    </>
  );
};

export default TechTile;
