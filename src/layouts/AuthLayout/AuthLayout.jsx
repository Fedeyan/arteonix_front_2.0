import { useLocation } from 'react-router-dom'
import Styles from './AuthLayout.module.css'
import logo from '../../assets/img/misc/logo.png'

const AuthLayout = ({ children }) => {
  const location = useLocation().pathname

  return (
    <div className={Styles.container}>
      <aside className={Styles.aside}>
        <img src={logo} alt="ArteoniX_logo" />
        <h3 className={Styles.sub_title}>{location.includes("register") ? "Bienvenido a" : "Bienvenido de nuevo a"}</h3>
        <h1 className={Styles.title}>ArteoniX</h1>
      </aside>
      <main className={Styles.main}>{children}</main>
    </div>
  )
}

export default AuthLayout