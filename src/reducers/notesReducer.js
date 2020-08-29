/*
  {
    notes: [],
    active: null, |
    active: {
      id: 'asfGAFDA4532',
      title: '',
      body: '',
      date: 1242153,
    }
  }
*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
