import React, { useState, FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Grommet,
  grommet,
  Header,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from 'grommet';
import TileGrid from './components/TileGrid';

const theme = {
  global: {
    colors: {
      primary: '#007ECC',
      secondary: '#F3704B',
      accent: '#99E9FF',
      highlight: '#E1DFEB',
      shadow: '#686770',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const techTileTitles = [
  'http2',
  'Event Loop',
  'GraphQL Schemas',
  'React: Smart vs Presentational',
  'Vue Tempaltes',
  'setTimeout',
  'Observables',
  'Redis',
  'SQL Queries',
  'ACID Compliance',
  'Oauth',
  'CSS Grid',
  'Prototype Chain',
  'NGINX',
  'CSS Positioning',
  'CSS Box Model',
];

const AppBar = (props: { children?: React.ReactNode }) => {
  return (
    <Header
      background="primary"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      {...props}
    />
  );
};

const App: React.FC = () => {
  return (
    <Grommet
      theme={theme}
      full
    >
      <Page>
        <AppBar>
          <Text size="large">Interview Quest</Text>
        </AppBar>
        <PageContent>
          <PageHeader title="Welcome to Interview Quest!" />
          <TileGrid
            techTileTitles={techTileTitles}
            color="highlight"
          />
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default App;
