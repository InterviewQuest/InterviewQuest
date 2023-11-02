import React, { useEffect, useState } from 'react';
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
    'comfort rating',
  ];

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
        setLeetCodeLogs(res.data);
      })
      .then(()=> {
        console.log(leetcodeLogs)
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
          )}
        </tr>
      </thead>
      <tbody>
        {leetcodeLogs && leetcodeLogs.map((algo) => (
          <tr key={algo.algoritm_id}>
            <td>
              <div className="entry">
                {columns.map((item) => (
                  <td key={item}>{algo[item]}</td>
                )}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LeetcodeLogs;
