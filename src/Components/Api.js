import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com/"
});

const getFindRepositoryByUserName = async ( userName ) => {
  try{
    const { data } = await API.get(`/users/${userName}/repos`);
    return data;
  }catch (error){
    return null;

  }
};

export { getFindRepositoryByUserName };
