import { UPDATE_UID } from './actionTypes'

export const updateUID = (uid) => {
    return {
        type: UPDATE_UID,
        uid: uid
      }
}