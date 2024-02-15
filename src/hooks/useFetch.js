import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRandomMessageSuccess,
  fetchRandomMessageFailure,
} from '../store/messageSlice';

export const useFetch = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const randomMessage = useSelector((state) => state.messages.randomMessage);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        dispatch(fetchRandomMessageSuccess(result));
      } catch (error) {
        setError(error.message);
        dispatch(fetchRandomMessageFailure(error.message));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, dispatch]);

  return { loading, error, randomMessage };
};
