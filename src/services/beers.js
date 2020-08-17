import axios from 'axios';

const instance = axios.create({
  baseURL: `https://ih-beers-api2.herokuapp.com/beers`,
});

export const loadBeers = () => {
  return instance.get('/').then((res) => {
    return res.data;
  });
};

export const loadSingleBeer = (beerId) => {
  return instance.get('/').then((res) => {
    return res.data.find((item) => item._id === beerId);
  });
};

export const loadRandomBeer = () => {
  return instance.get('/').then((res) => {
    return res.data[Math.floor(Math.random() * res.data.length)];
  });
};
