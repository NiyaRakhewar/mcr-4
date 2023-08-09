import React, { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { forumData } from "../components/data";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = () => {
      console.log(forumData);
      dispatch({ type: "FETCH_SUCCESSFULL_DATA", payload: forumData });
    };
    getData();
  }, []);

  return (
    <ForumContext.Provider value={{ state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
};
