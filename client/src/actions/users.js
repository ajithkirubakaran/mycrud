import {
 CREATE_USER,
 SHOW_USERS,
 FIND_USER,
 UPDATE_USER,
 DELETE_USER,
} from "./types.js";

import UserDataService from "../services/user.service.js";

export const createUser = (email, password) => async (dispatch) => {
  try {
    const res = await UserDataService.create({ email, password });

    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const showUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.show();

    dispatch({
      type: SHOW_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findUser = (email) => async (dispatch) => {
  try {
    const res = await UserDataService.find(email);

    dispatch({
      type: FIND_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserDataService.update(id, data);

    dispatch({
      type: UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserDataService.delete(id);

    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
