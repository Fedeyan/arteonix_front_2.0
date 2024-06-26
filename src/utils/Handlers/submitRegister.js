import { registerUser } from "../../api/auth";
import setStorage from "../storage/setStorage";

export default async function submitRegister(e, { username, email, password, confirmPassword }, setErrorsData, setLoading) {
  try {
    e.preventDefault();


    setLoading(true)
    const { status, data } = await registerUser({ username, email, password, confirmPassword });
    if (status === 400) {
      setLoading(false)
      const errData = data?.data?.map(err => ({ path: err?.path[0], message: err?.message }))

      console.log(errData)
      setErrorsData(prevErrData => {
        const newErrors = { ...prevErrData }

        errData.forEach(error => newErrors[error.path] = error.message)

        return newErrors
      })
    }

    if (status === 409) {
      setLoading(false)
      setErrorsData(prevErrData => ({
        ...prevErrData,
        formError: data?.message
      }))
    }

    if (status === 201) {
      const { token } = data;
      setStorage(true, "session", token)
      window.location.reload()
    }
  } catch (error) {
    console.log(error);
  }
}
