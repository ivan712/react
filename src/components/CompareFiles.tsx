import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getData() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<string>(
        'https://reqres.in/api/users',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
      return JSON.stringify(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

function CompareFiles() {
    const [data, setData] = useState('nothing')

    useEffect(() => {
        getData().then(response => {
            setData(response);
        })
    }, [])
    
    return (
        <div>{data}</div>
    )
}

export default CompareFiles;