import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com/"
});

const getFindRepositoryByUserName = async ( userName ) => {
  console.log("entrou", userName);
  const { data } = await API.get(`/users/${userName}/repos`);
  return data;
};

export { getFindRepositoryByUserName };
