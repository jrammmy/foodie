import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ej7td6dSNuuRO3fLI22RqZ_1MRK4qQE0R4SLXfzcG93PqaPKz5vR4W2YDapXDRQaPE4CgWIklp1yjB_T7LbBk6RHgf5oZzRHWBLAhPkjMh0uQZq9Vvqm2A_vP9OPXnYx',
  },
});
