import { registerUser } from "../../api/auth";

export default async function submitRegister(e, { username, email, password }) {
  try {
    e.preventDefault();
    const { status, data } = await registerUser({ username, email, password });
    console.log(status);
  } catch (error) {
    console.log(error);
  }
}
