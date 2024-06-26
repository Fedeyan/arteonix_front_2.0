import { loginUser } from "../../api/auth";
import setStorage from "../storage/setStorage";

export default async function submitLogin(e, { username, password }, setErrorsData, setLoading) {
  try {
    e.preventDefault();


    setLoading(true)
    const { status, data } = await loginUser({ username, password });
    console.log("status ---->", status)
    console.log("data ---->", data)
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

    if (status === 404) {
      setLoading(false)
      setErrorsData(prevErrData => ({
        ...prevErrData,
        username: data?.message
      }))
    }

    if (status === 200) {
      const { token } = data;
      setStorage(true, "session", token)
      window.location.reload()
    }

    setLoading(false)
  } catch (error) {
    console.log(error);
  }
}
