import React from 'react';
import { Box, Meter, Stack, Text, Grommet, grommet } from 'grommet';

export const MultipleValues = ({ completed, total, label1, label2 }) => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[
              {
                value: completed,
                label: label1,
                color: 'status-ok', // Example color, adjust as needed
              },
              {
                value: total - completed,
                label: label2,
                color: '', // Example color, adjust as needed
              },
            ]}
            max={total}
            size="small"
            thickness="medium"
          />
          <Box align="center" >
            <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}  >
              <Text size="xxlarge" weight="bold">
                {completed}
              </Text>
              <Text size="large">/{total}</Text>
            </Box>
            <Text>{label1}</Text>
          </Box>
        </Stack>
      </Box>
    </Grommet>
  );
};

export default MultipleValues; // If this is the default export
