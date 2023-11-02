import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from '../slices/mainSlice';
import { Help } from 'grommet-icons';
import { MultipleValues } from './MultipleValues'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { problemOfTheDayObj, hasQuestionBeenSent, userSummary, userSummary } = useSelector(
    (state) => state.main
  );
  const { algorithms } = userSummary;
  const { algorithm, difficulty, url } = problemOfTheDayObj;
  const { algorithms, technologies } = userSummary;

  const [completedLeetCode, setCompletedLeetCode] = useState('');
  const [totalLeetCode, setTotalLeetCode] = useState('');
  const [completedTechnology, setCompletedTechnology] = useState('');
  const [totalTechnology, setTotalTechnology] = useState('');
  const [popUpStatus, setPopUpStatus] = useState('true');
  console.log(algorithms);

  const linkToLeetCode = () => {
    window.open(url, `_blank`);
  };

  const leetCodeVisualNavigation = () => {
    window.open(url, '_blank');
    navigate('/leetcode')
  };

  const technologyNavigation = () => {
    navigate('/main');
  };

  useEffect(() => {
    if (algorithms && algorithms.length > 0){

    fetch('/algo/getAlgo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: algorithms[0].user_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCompletedLeetCode(res.completed);
        setTotalLeetCode(res.total);
      })
      .catch((err) => {
        console.log('fetch algo err', err);
      });
      }
  }, []);

  useEffect(() => {
    if (technologies && technologies.length > 0){

    fetch('/tech/getTech', {
      method: 'POST',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: technologies[0].user_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCompletedTechnology(res.completed);
        setTotalTechnology(res.total);
      })
      .catch((err) => {
        console.log('fetch algo err', err);
      });
    }
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
            <Text size="medium"> Hello User </Text>
          </Box>
          <Box width="small" />
        </Box>
      </AppBar>

      <PageContent fill="horizontal">
        <Box
          fill="horizontal"
          justify="end" // This will align the child Box to the end (right side) of this Box
        >
          {popUpStatus && hasQuestionBeenSent && (
            <Box
              onClick={linkToLeetCode}
              role="button"
              tabIndex={0}
              aria-label="Go to LeetCode"
              style={{ cursor: 'pointer' }}
            >
              <Notification
                title="Algorithm of the day"
                message={algorithm}
                icon={<Help />}
                onClose={(event) => {
                  event.stopPropagation();
                  setPopUpStatus(false);
                }}
              />
            </Box>
          )}
        </Box>
        {/* {completedLeetCode && (
          <Text size="small">
           helloooooooooo
          </Text>
        )} */}
        {completedLeetCode && totalLeetCode && (
          <Text size="small">
            {completedLeetCode} / {totalLeetCode}
          </Text>
        )}

        {completedLeetCode && <Text size='small'> {completedLeetCode }</Text>}
        {totalLeetCode && <Text size='small'> {totalLeetCode}</Text>}
      </PageContent>
    </Page>
  );
};

export default Dashboard;
