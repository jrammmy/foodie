import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'santa cruz',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong.');
    }
  };

  // ensures that code is ran only once when the compent renders
  useEffect(() => {
    // idea: based on time of day, update default to be breakfast, lunch, dinner, or late night
    searchApi('pizza');
  }, []);

  // this is how we export code that needs to be used in other files
  return [searchApi, results, errorMessage];
};
