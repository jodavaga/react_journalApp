import { db } from '../firebase/firebase.config';

export const startNewNote = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const note = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const doc = db.collection(`${uid}/journal/notes`).add(note)
      .then(resp => console.log(resp))
      .catch(e => console.log(e));
  }
}