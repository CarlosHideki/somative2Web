import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from './login.module.css'
import firebase from "../../database/Firebase"


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => { window.location.href = '/home' })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('Usuário não encontrado!')
        } else {
          console.log(error.message);
        }
      });

  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <div className={styles.divFather}>
        <div className={styles.divChild}>
          <div className={styles.inputsLogin}>
            <label>E-mail:</label>
            <input required type="text" onChange={(ev) => setEmail(ev.target.value)} />
          </div>
          <div className={styles.inputsLogin}>
            <label>Senha:</label>
            <input required type="password" onChange={(ev) => setPassword(ev.target.value)} />
          </div>
          <div className={styles.centerButton}>
            <button type="submit" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      <div>
      <Link to="/">
        <button className={styles.inicial}><p className={styles.p}>Página Inicial</p></button>
      </Link>
    </div>
    </div>
  )
}

export default Login