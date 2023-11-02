import React from 'react';
import {
  Anchor,
  Box,
  Header,
  Menu,
  Nav,
  Text,
  ResponsiveContext,
  Sidebar,
} from 'grommet';
import { Home, Notification, ChatOption } from 'grommet-icons';

const AppSidebar = (props: { children?: React.ReactNode }) => {
  return (
    <Sidebar
      background="highlight"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      direction="column"
    >
      <Nav
        direction="column"
        background="highlight"
        pad="medium"
        gap="medium"
      >
        <Anchor icon={<Home />} />
        <Anchor icon={<Notification />} />
        <Anchor icon={<ChatOption />} />
      </Nav>
    </Sidebar>
  );
};

export default AppSidebar;
