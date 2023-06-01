import { Dispatch } from "react";
import { Action } from "redux";

const ADD_NUMBER = "ADD_NUMBER";
const RESET_NUMBER = "RESET_NUMBER"
const CHANGE_BOX = "CHANGE_BOX"
const ADD_MAV_VALUE = "ADD_MAV_VALUE";
const ADD_MIN_LOCAL_VALUE = "ADD_MIN_VALUE";

const initState = {
  count: 0 as number,
  maxCount: 0 as number,
  change: false as boolean
};

export type initStateType = typeof initState


export const reduserCount = (state = initState, action: ActionAll): initStateType => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + 1 };
    case RESET_NUMBER:
      return { ...state, count: 0 };
    case CHANGE_BOX:
      return { ...state, change: !state.change };
    case ADD_MAV_VALUE:
      return { ...state, maxCount: +action.box.value };
    case ADD_MIN_LOCAL_VALUE:
      return { ...state, count: +action.box.value };
    default:
      return state;
  }
};

// - - - Action - - -
export const actionAddNumber = () => {
  return {
    type: ADD_NUMBER,
  } as const;
};

export const actionResetNumber = () => {
  return {
    type: RESET_NUMBER,
  } as const;
};

export const actionChangeBox = () => {
  return {
    type: CHANGE_BOX,
  } as const;
};

export const actionMaxValue = (value:string) => {
  return {
    type: ADD_MAV_VALUE,
    box:{
      value
    }
  } as const;
};

export const actionStartAlsoLocalValue = (value:string) => {
  return {
    type: ADD_MIN_LOCAL_VALUE,
    box: {
      value,
    },
  } as const;
};


type ActionAddNumberType = ReturnType<typeof actionAddNumber>
type ActionResetNumberType = ReturnType<typeof actionResetNumber>;
type ActionChangeBoxType = ReturnType<typeof actionChangeBox>;
type ActionMaxValueType = ReturnType<typeof actionMaxValue>;
type ActionStartValueType = ReturnType<typeof actionStartAlsoLocalValue>;
type ActionAll =
  | ActionAddNumberType
  | ActionResetNumberType
  | ActionChangeBoxType
  | ActionMaxValueType
  | ActionStartValueType

// - - -Thunk - - -
export const AddNumberThunk = (count:number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(actionAddNumber());
    localStorage.setItem("count", (count + 1).toString());
  };
};

export const ResetNumberThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(actionResetNumber());
    localStorage.setItem("minValue", (0).toString());
    localStorage.setItem("count", (0).toString());
  };
};

export const GetLocalThunkThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    let getLocalNumberMin = localStorage.getItem("minValue");
    let getLocalNumber = localStorage.getItem("count");
    if (getLocalNumber) {
      dispatch(actionStartAlsoLocalValue(JSON.parse(getLocalNumber)))
    } else if (getLocalNumberMin) {
      dispatch(actionStartAlsoLocalValue(JSON.parse(getLocalNumberMin)));
    } else {
      dispatch(actionResetNumber())
    }
  };
};

export const GetMaxValueThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    let getLocalNumberMax = localStorage.getItem("maxValue")
    if (getLocalNumberMax) {
      dispatch(actionMaxValue(JSON.parse(getLocalNumberMax)))
    } else {
      dispatch(actionMaxValue("5"))
    }
  }
}

export const GetInputValueThunk = (inputValue: string, inputValueStart:string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(actionMaxValue(inputValue))
    localStorage.setItem("maxValue", inputValue)
    dispatch(actionStartAlsoLocalValue(inputValueStart))
    localStorage.setItem("minValue", inputValueStart);
    localStorage.setItem("count", inputValueStart);
    dispatch(actionChangeBox());
  }
}; 