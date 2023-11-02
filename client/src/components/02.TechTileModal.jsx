import React, { FC } from 'react';
import {
  Layer,
  Box,
  Button,
  Header,
  Tab,
  Tabs,
  Text,
  TextInput,
  TextArea,
} from 'grommet';
import { Grommet } from 'grommet-icons';
import theme from './styles/theme.js';

const TechTileModal = ({ onClose, title }) => {
  return (
    <Grommet theme={theme}>
      <Layer
        onEsc={onClose}
        onClickOutside={onClose}
        background="transparent"
      >
        <Box
          pad="medium"
          width="large"
          height="large"
          background={{
            color: 'gray3',
            size: 'cover',
          }}
          responsive={true}
          round="large"
        >
          <Header title={title}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '2rem',
                fontWeight: '600',
                color: '#073B4C',
              }}
              margin={{ bottom: 'small' }}
            >{`${title}`}</Text>
          </Header>
          <Tabs flex="grow">
            <Tab title="Pros">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea
                  size="small"
                  focusIndicator={true}
                  placeholder="Reasons to want to use this technology..."
                  fill
                />
              </Box>
            </Tab>

            <Tab title="Cons">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea
                  size="small"
                  focusIndicator={true}
                  placeholder="Reasons against using this technology..."
                  fill
                />
              </Box>
            </Tab>

            <Tab title="Informed Opinions">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea
                  size="small"
                  focusIndicator={true}
                  placeholder="Informed opinions..."
                  fill
                />
              </Box>
            </Tab>
          </Tabs>

          <Box
            align="end"
            pad="medium"
          >
            <Button
              label="Close"
              onClick={onClose}
            />
          </Box>
        </Box>
      </Layer>
    </Grommet>
  );
};

export default TechTileModal;
