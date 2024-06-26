import axios from "axios";
import getStorage from "../utils/storage/getStorage";


//register
export const registerUser = async ({ username, email, password, confirmPassword }) => {
  try {
    const query = await axios.post("/authentication/register", {
      username,
      email,
      password,
      confirmPassword
    });
    const data = query.data;
    return data;
  } catch (error) {
    console.log("Se produjo un error:", error.message);
    return { status: error?.response?.status, data: error?.response?.data };
  }
};

//login
export const loginUser = async ({ username, password }) => {
  console.log(username, password, "loginin")
  try {
    const query = await axios.post("/authentication/login", {
      username,
      password,
    });

    const data = query.data;

    return data;
  } catch (error) {
    console.log("Se produjo un error:", error.message);
    return { status: error?.response?.status, data: error?.response?.data };
  }
};

//login status 
export const checkSessionStatus = async () => {
  try {
    const query = await axios.get("/authentication/login_status", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getStorage("session") || ""}`,
      }
    })

    const data = query?.data;
    return { status: query?.status, data: data }

  } catch (error) {
    return { status: error?.response?.status, data: error?.response?.data };
  }
}