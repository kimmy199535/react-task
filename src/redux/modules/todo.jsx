import { v4 as uuidv4 } from "uuid";

const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";

// Action Creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload: payload,
  };
};

// 초기 상태값
const initialState = [
  {
    id: uuidv4(),
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => {
        if (todo.id === action.payload) {
          return null;
        } else {
          return todo;
        }
      });

    case DONE_TODO:
      return state.filter((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
export default todos;
