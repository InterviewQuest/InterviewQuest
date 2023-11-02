import React, { FC, useContext, useState } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import TechTileModal from './02.TechTileModal';

const AddNewTile = ({ title, color, textStyle }) => {
  const size = useContext(ResponsiveContext);
  const [showModal, setShowModal] = useState(false);
  //* ! State variables for each Text Area
  const [proText, setProText] = useState('');
  const [conText, setConText] = useState('');
  const [opinionText, setOpinionText] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    useEffect(() => {
      fetch('/tech/addTech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        
      })
    });
    setShowModal(false);
  };

  {
    userId: Int,
    technology: String,
    pros: proText,
    cons: conText,
    opinion: opinionText,
    notes: notes,
    green: Boolean,
  }


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
          title={'addNew'}
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

export default AddNewTile;
