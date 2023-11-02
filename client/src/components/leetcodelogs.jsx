import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LeetcodeLogs = () => {
  const [leetcodeLogs, setLeetCodeLogs] = useState();
  const { userSummary } = useSelector((state) => state.main);
  const { algorithms } = userSummary;
  const columns = [
    'solved',
    'last_solved',
    'problem',
    'interviews',
    'difficulty',
    'comfort_rating',
  ];

  useEffect(() => {
    if (algorithms && algorithms.length > 0) {
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
          setLeetCodeLogs(res.data);
        })
        .then(() => {
          console.log(leetcodeLogs);
        })
        .catch((err) => {
          console.log('fetch algo err', err);
        });
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {leetcodeLogs &&
          leetcodeLogs.map((algo) => (
            <tr key={algo.algorithm_id}>
            <td>algo.solved</td>
            <td>algo.last_solved</td>
            <td>algo.problem</td>
            <td>algo.interviews</td>
            <td>algo.difficulty</td>
            <td>algo.comfort_rating</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default LeetcodeLogs;
