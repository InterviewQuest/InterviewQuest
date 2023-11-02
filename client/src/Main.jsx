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
  Sidebar,
  SidebarProps,
} from 'grommet';
// import Tileimport TileGrid from './components/00.TileGrid';
import TileGrid from './components/00.TileGrid';
import AppSidebar from './components/AppSidebar';
import Social from './components/AppFooter';
import Media from './components/AppFooter';

// const theme = {};

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

const AppBar = (props) => {
  return (
    <Header
      background="highlight"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      {...props}
    />
  );
};

const Main = () => {
  return (
    // <Grommet
    //   theme={theme}
    //   full
    // >
    <Grid
      rows={['xsmall', 'large', 'small']}
      columns={['auto', 'flex']}
      areas={[
        ['header', 'header'],
        ['sidebar', 'main'],
        ['footer', 'footer'],
      ]}
      gap="small"
    >
      <AppBar
        background="shadow"
        pad="medium"
        gap="medium"
        gridArea="header"
      >
        <Text size="large">Interview Quest</Text>
      </AppBar>
      <AppSidebar
        background="shadow"
        pad="small"
        gap="small"
        gridArea="sidebar"
      />
      <Page gridArea="main">
        {/* <AppSidebar /> */}
        <PageContent>
          <TileGrid
            pad="medium"
            techTileTitles={techTileTitles}
            color="gray3"
          />
        </PageContent>
      </Page>
      <Media gridArea={['footer', 'footer']} />
    </Grid>
    // </Grommet>
  );
};

export default Main;
