import React, { useState } from 'react';
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
  StarRating,
} from 'grommet';
import { Grommet } from 'grommet';
import theme from './styles/theme.js';

const TechTileModal = ({
  onClose,
  title: initialTileTitle,
  setProText,
  setConText,
  setOpinionText,
  setNotesText,
  proText,
  conText,
  opinionText,
  notesText,
}) => {
  const [tileTitle, setTileTitle] = useState(initialTileTitle || '');

  return (
    <Grommet theme={theme}>
      <Layer // Modal Layer
        onEsc={onClose}
        onClickOutside={onClose}
        background="transparent"
      >
        <Box // Visibile Background Layer
          pad="medium"
          width="large"
          height="large"
          background={{
            color: 'white',
            size: 'cover',
          }}
          responsive={true}
          round="large"
        >
          {/* <Header title={title}> */}
          <Header>
            {initialTileTitle === 'addNew' ? (
              <TextInput
                placeholder="Enter title here..."
                value={''}
                onChange={(event) => setTileTitle(event.target.value)}
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#073B4C',
                }}
              />
            ) : (
              <Text // Tech Name
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#073B4C',
                }}
                margin={{ bottom: 'small' }}
              >
                {tileTitle}
              </Text>
            )}
          </Header>

          <Tabs flex="grow">
            <Tab title="Pros">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea // Pro Text Area
                  size="small"
                  // focusIndicator={true}
                  placeholder="Reasons to want to use this technology..."
                  fill
                  background="#000000"
                  value={proText}
                  onChange={(event) => setProText(event.target.value)}
                />
              </Box>
            </Tab>

            <Tab title="Cons">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea // Con Text Area
                  size="small"
                  focusIndicator={true}
                  placeholder="Reasons against using this technology..."
                  fill
                  value={conText}
                  onChange={(event) => setConText(event.target.value)}
                />
              </Box>
            </Tab>

            <Tab title="Informed Opinions">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea // Opinion Text Area
                  size="small"
                  // focusIndicator={true}
                  placeholder="Informed opinions..."
                  fill
                  value={opinionText}
                  onChange={(event) => setOpinionText(event.target.value)}
                />
              </Box>
            </Tab>
            <Tab title="Notes">
              <Box
                pad="medium"
                flex="grow"
                fill
              >
                <TextArea // Notes Text Area
                  size="small"
                  // focusIndicator={true}
                  placeholder="Additional Notes..."
                  fill
                  value={notesText}
                  onChange={(event) => setNotesText(event.target.value)}
                />
              </Box>
            </Tab>
          </Tabs>

          <Box
            align="end"
            pad="medium"
          >
            <StarRating />
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
