import { db } from '../firebase/firebase.config';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const note = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const doc = await db.collection(`${uid}/journal/notes`).add(note);

    dispatch( setActiveNote(uid, note) )
  }
}

export const setActiveNote = (id, note) => ({
  type: types.notesActive,
  payload: note
})