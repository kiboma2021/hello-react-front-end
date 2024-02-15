import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFetch } from '../hooks/useFetch';
import {
  fetchRandomMessageRequest,
} from '../store/messageSlice';

export const Greeting = () => {
  const url = 'http://127.0.0.1:4000/random_greeting';
  const { loading, error, randomMessage } = useFetch({ url });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomMessageRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Random Message:</h1>
      {randomMessage && <p>{randomMessage.content}</p>}
    </div>
  );
};
