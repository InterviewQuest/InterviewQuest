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

const AppSidebar = (props) => {
  return (
    <Sidebar
      background="shadow"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      direction="column"
    >
      <Nav
        direction="column"
        background="shadow"
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
