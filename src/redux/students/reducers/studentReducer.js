import { ADD_STUDENT } from "../types/types";
import { EDIT_STUDENT } from "../types/types";

const initialState = {
  studentData: [
    {
      name: "John",
      age: "26",
      course: "MERN",
      batch: "October",
      change: "Edit",
      id: 1,
    },
    {
      name: "Shon",
      age: "26",
      course: "MEVN",
      batch: "Dec",
      change: "Edit",
      id: 2,
    },
  ],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        studentData: [...state.studentData, action.payload],
      };

    case EDIT_STUDENT:
      const newData = state.studentData.map((student) =>
        +student.id === +action.payload.id ? action.payload : student
      );

      return {
        ...state,
        studentData: newData,
      };

    default:
      return state;
  }
};
export default studentReducer;
