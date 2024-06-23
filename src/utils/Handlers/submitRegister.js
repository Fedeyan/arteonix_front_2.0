import { registerUser } from "../../api/auth";

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
  } catch (error) {
    console.log(error);
  }
}
