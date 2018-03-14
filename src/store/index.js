import { createStore } from 'redux';

const initialState = {
  city: 'Santiago,cl'
}

createStore(city, initialState);

export default createStore;