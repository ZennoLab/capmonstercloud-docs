import React, { useEffect, useState } from 'react';

export default function UserAgent({color}) {
  const [currentUserAgent, setCurrentUserAgent] = useState('');
  const getUserAgent = async () => {
    const url = 'https://data-docs.capmonster.cloud/';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data?.UserAgent) {
          setCurrentUserAgent(data.UserAgent)
        }
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }
  useEffect(() => {
    getUserAgent();
  }, [])
  return (
    <span>
      "{currentUserAgent}"
    </span>
  );
}