import { ADD_STUDENT, EDIT_STUDENT } from "../types/types";

export const addStudent = (data) => {
  return {
    type: ADD_STUDENT,
    payload: {
      id: Date.now(),
      ...data,
    },
  };
};

export const editStudent = (data) => {
  return {
    type: EDIT_STUDENT,
    payload: data,
  };
};
