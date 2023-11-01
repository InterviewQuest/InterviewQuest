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
import TileGrid from './components/00.TileGrid';

const theme = {
  global: {
    colors: {
      base: '#073B4C',
      highlight: '#118AB2',
      approve: '#06D6A0',
      warn: '#FFD166',
      danger: '#EF476F',
      gray0: 'F8F9FA',
      gray1: 'E9ECEF',
      gray2: '#DEE2E6',
      gray3: '#CED4DA',
      gray4: '#ADB5BD',
      gray5: '#6C757D',
      gray6: '#495057',
      gray7: '#343A40',
      gray8: '#212529',
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
      background="highlight"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      {...props}
    />
  );
};

const Main: React.FC = () => {
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
            color="gray4"
          />
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default Main;
