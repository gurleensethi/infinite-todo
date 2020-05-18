import {
  TaskState,
  TaskAction,
  FETCH_TASK_FINISH,
  ADD_TASK_FINISH,
  UPDATE_TASK_FINISH,
  DELETE_TASK_FINISH,
} from "./task.types";

const initalState: TaskState = {
  tasks: [],
};

export const taskReducer = (
  state = initalState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case FETCH_TASK_FINISH: {
      return { ...state, tasks: action.tasks };
    }
    case ADD_TASK_FINISH: {
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    }
    case UPDATE_TASK_FINISH: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.task.id) {
            return action.task;
          }
          return task;
        }),
      };
    }
    case DELETE_TASK_FINISH: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};
