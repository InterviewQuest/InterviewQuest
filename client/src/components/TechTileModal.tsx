import React, { FC } from 'react';
import { Layer, Box, Button, Text } from 'grommet';

interface ModalProps {
  onClose: () => void;
  title: string;
}

const TechTileModal: FC<ModalProps> = ({ onClose, title }) => {
  return (
    <Layer
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <Box
        pad="medium"
        width="large"
        height="large"
      >
        <Text>{`This is the modal content for ${title}`}</Text>
        <Button
          label="Close"
          onClick={onClose}
        />
      </Box>
    </Layer>
  );
};

export default TechTileModal;
