import { Link } from "react-router-dom"
import styles from './inicial.module.css'


const Inicial = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Página Inicial</h1>
      <div className={styles.buttons}>
        <Link to="/register"><p className={styles.p}>Cadastro</p></Link>
        <Link to="/login"><p className={styles.p}>Login</p></Link>
      </div>
    </div>
  )
}

export default Inicial