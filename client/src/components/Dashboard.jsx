import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomQuestion } from '../slices/mainSlice';
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
  Notification,
  Header,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from 'grommet';

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

const Dashboard = () => {
  const dispatch = useDispatch();
  const { leetCodeQuestionLink, hasQuestionBeenSent } = useSelector(
    (state) => state.main
  );

  const [completedLeetCode, setCompletedLeetCode] = useState('');
  const [totalLeetCode, setTotalLeetCode] = useState('');

  const linkToLeetCode = () => {
    window.open(leetCodeQuestionLink, `_blank`);
  };

  useEffect(() => {
    fetch('/algo/getAlgo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res)=> {
      return res.json()
    })
      .then((res) => {
      console.log('this is response', res)
        setCompletedLeetCode(res.completed);
        setTotalLeetCode(res.total);
      })
      .catch((err) => {
        console.log('fetch algo err', err);
      });
  }, []);

  return (
    <Page>
      <AppBar>
        <Box
          direction="row"
          align="center"
          justify="between"
          fill="horizontal"
        >
          <Text size="large">Interview Quest</Text>
          <Box
            flex
            align="center"
            justify="center"
          >
            <Text size="small"> Hello User... </Text>
          </Box>
          <Box width="smal" />
        </Box>
      </AppBar>

      <PageContent>
        <Box
          align="center"
          justify="end"
        >
          {!hasQuestionBeenSent && (
            <Box
            onClick={linkToLeetCode}
            role="button"
            tabIndex={0}
            aria-label="Go to LeetCode"
            style={{ cursor: 'pointer' }}>
              <Notification
                title="Default Status Title"
                message="This is an example of a notification message"
                onClose={(event) => {
                  event.stopPropagation();
                  dispatch(randomQuestion({ questionSent: true }));
                }}
              />
            </Box>
          )}
        </Box>

        {completedLeetCode && <Text size='small'> {completedLeetCode }</Text>}
        {totalLeetCode && <Text size='small'> {totalLeetCode}</Text>}
      </PageContent>
    </Page>
  );
};

export default Dashboard;
