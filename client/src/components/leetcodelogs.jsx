import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {updateAlgo, updateSolved} from '../slices/mainSlice';

const LeetcodeLogs = () => {
  const dispatch = useDispatch();
  const [leetcodeLogs, setLeetCodeLogs] = useState();
  const { userSummary } = useSelector((state) => state.main);
  const { algorithms } = userSummary;
  const columns = [
    'solved',
    'problem',
    'difficulty',
    'comfort_rating',
  ];
  const [selectedRows, setSelectedRows] = useState([]);

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
        .then((res) => res.json())
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

  // Function to toggle the selection of a row
  const toggleRowSelection = (solved, user_id, algorithm_id, index) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = !updatedSelectedRows[index];
    setSelectedRows(updatedSelectedRows);
     solved === false ? solved === true : solved === false
    dispatch(updateSolved(solved, user_id, algorithm_id))
  };

  const changeComfortRating = (user_id, algorithm_id, comfort_rating) => {
    dispatch(updateAlgo(user_id, algorithm_id, comfort_rating))
  }

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
          leetcodeLogs.map((algo, index) => (
            <tr key={algo.algorithm_id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows[index] || false}
                  onChange={() => toggleRowSelection(algo.solved, algo.user_id, algo.algoirthm_id, index)}
                />
              </td>
              {/* <td>{algo.last_solved}</td> */}
              <td>{algo.algorithm}</td>
              <td>{algo.difficulty}</td>
              <input type = 'text' default = {algo.comfort_rating} onChange = {()=> changeComfortRating(algo.user_id, algo.algoirthm_id, algo.comfort_rating)}/>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default LeetcodeLogs;
