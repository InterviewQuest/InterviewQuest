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
  const { problemOfTheDayObj, hasQuestionBeenSent, userSummary } = useSelector(
    (state) => state.main
  );
  const { algorithm, difficulty, url } = problemOfTheDayObj;
  const { algorithms, technologies } = userSummary;

  const [completedLeetCode, setCompletedLeetCode] = useState('');
  const [totalLeetCode, setTotalLeetCode] = useState('');
  const [completedTechnology, setCompletedTechnology] = useState('');
  const [totalTechnology, setTotalTechnology] = useState('');
  const [popUpStatus, setPopUpStatus] = useState('true');

  const linkToLeetCode = () => {

    window.open(url, `_blank`);



  const leetCodeVisualNavigation = () => {
    window.open(url, '_blank');
    navigate('/leetcode');
  };

  const technologyNavigation = () => {
    navigate('/main');

  };

  const leetCodeVisualNavigation = () => {
    window.open(url, '_blank');
    navigate('/leetcode');
  };

  const technologyNavigation = () => {
    navigate('/main');
  };

  useEffect(() => {

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
    if (technologies && technologies.length > 0) {
      fetch('/tech/getTech', {
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
            <Text size="large"> Hello User! </Text>
          </Box>
          <Box width="small" />
        </Box>
      </AppBar>

      <PageContent fill="horizontal">
        <Box
          margin="medium"
          fill="horizontal"
          direction="row"
          justify="end" // This will align the child Box to the end (right side) of this Box
        >
          {!hasQuestionBeenSent && (
            <Box
              onClick={linkToLeetCode}
              role="button"
              tabIndex={0}
              aria-label="Go to LeetCode"
              style={{ cursor: 'pointer' }}
              border={{ color: 'shadow', size: 'small' }}
            >
              <Notification
                title="Default Status Title"
                message="This is an example of a notification message"
                onClose={(event) => {
                  event.stopPropagation();
                  dispatch(randomQuestion({ questionSent: true }));
                }}
                style={{ padding: '10px' }}
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


        <Heading margin="medium">Dashboard</Heading>
        <Box
          direction="row"
          align="center"
          justify="center"
          fill="horizontal"
          border="shadow"
        >
          <Box
            role="button"
            onClick={leetCodeVisualNavigation}
          >
            <MultipleValues
              completed={parseInt(completedLeetCode)}
              total={parseInt(totalLeetCode)}
              label1="Leetcode"
              label2="Remaining LeetCode"
            />
          </Box>
          <Box
            role="button"
            onClick={technologyNavigation}
          >
            <MultipleValues
              completed={parseInt(completedTechnology)}
              total={parseInt(totalTechnology)}
              label1="Technologies"
              label2="Remaining Technology"
            />
          </Box>
        </Box>

      </PageContent>
    </Page>
  );
};

export default Dashboard;
