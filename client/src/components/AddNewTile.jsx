import React, { useContext, useState } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import TechTileModal from './02.TechTileModal';
import { storeTileInfo } from '../slices/mainSlice.js';

const AddNewTile = ({ title, color, textStyle }) => {
  const dispatch = useDispatch();
  const { userSummary } = useSelector((state) => state.main);
  const size = useContext(ResponsiveContext);
  const [showModal, setShowModal] = useState(false);
  //* ! State variables for each Text Area
  const [proText, setProText] = useState('');
  const [conText, setConText] = useState('');
  const [opinionText, setOpinionText] = useState('');
  const [notesText, setNotesText] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    const userID = userSummary.algorithms[0].userId;
    const payload = {
      userId: userID,
      technology: title,
      pros: proText,
      cons: conText,
      opinion: opinionText,
      notes: notesText,
      green: false,
    };
    dispatch(storeTileInfo(payload));
    setShowModal(false);
  };

  // {
  //   userId: Int,
  //   technology: String,
  //   pros: proText,
  //   cons: conText,
  //   opinion: opinionText,
  //   notes: notes,
  //   green: Boolean,
  // }

  // //Go inside
  // const userID = userSummary.algorithms[0].userId

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
          notesText={notesText}
          setNotesText={setNotesText}
        />
      )}
    </>
  );
};

export default AddNewTile;
