import { DUMMY_ACTION } from './types';

export function dummyAction() {
  return {
    type: DUMMY_ACTION,
    payload: `I am only here so import statements elsewhere do not break,
    remove me after you create your own actions :)`,
  };
};
