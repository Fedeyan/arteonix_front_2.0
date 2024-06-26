import { checkSessionStatus } from "../../api/auth";
import { setAuthStatus } from "../../redux/slices/authSlice";
import store from "../../redux/store";

export default async function checkAuthStatus({ setRender }) {
    try {
        const { status } = await checkSessionStatus()
        if (status === 200 || status === 304) {
            store.dispatch(setAuthStatus(true))
        } else {
            store.dispatch(setAuthStatus(false))
        }

        setRender(true)
    } catch (error) {
        console.log(error.response)
    }
}