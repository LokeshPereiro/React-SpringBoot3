import axios from "axios";
const BASE_URL = "http://localhost:8080/users";
export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
  //Si falla
  return null;
};

export const save = async ({ username, email, password }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await axios.post(BASE_URL, {
      username,
      email,
      password,
    });
  } catch (error) {
    // console.log(error);
    throw error;
  }
  // return undefined;
};

export const update = async ({ id, username, email }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await axios.put(`${BASE_URL}/${id}`, {
      username,
      email,
    });
  } catch (error) {
    // console.log(error);
    throw error;
  }
  // return undefined;
};

export const remove = async ({ id }) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
  return null;
};
