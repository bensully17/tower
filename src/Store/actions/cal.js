import { CHANGE_DATE, CHANGE_DUE_DATE } from './actionTypes'

export const changeDate = (date) => {
  return {
    type: CHANGE_DATE,
    date: date
  }
}
export const changeDueDate = (dueDate) => {
  return {
    type: CHANGE_DUE_DATE,
    dueDate: dueDate
  }
}
