import axios from "axios";

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
