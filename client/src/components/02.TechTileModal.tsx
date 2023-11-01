import React, { FC } from 'react';
import { Layer, Box, Button, Text, TextInput, TextArea } from 'grommet';

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
        background={{ color: 'gray0', opacity: 'medium', size: 'cover' }}
        responsive={true}
      >
        <Text>{`This is the modal content for ${title}`}</Text>
        <TextArea
          size="small"
          focusIndicator={true}
          placeholder="Type something..."
        />
        <Button
          label="Close"
          onClick={onClose}
        />
      </Box>
    </Layer>
  );
};

export default TechTileModal;
