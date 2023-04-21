import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './cadastro.module.css'
import firebase from "../../database/Firebase"


const Cadastro = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [dateBorn, setDateBorn] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  

  const handleSubmit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        await firebase.firestore().collection('users').doc(response.user.uid).set({
          nome: name,
          sobrenome: lastName,
          nascimento: dateBorn,
        })
      })
    window.location.href = '/home'
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cadastro</h1>
      <div className={styles.divFather}>
        <div className={styles.divChild}>
          <div className={styles.inputsRegister}>
            <label>Nome:</label>
            <input type="text" onChange={(ev) => setName(ev.target.value)} />
          </div>
          <div className={styles.inputsRegister}>
            <label>Sobrenome:</label>
            <input type="text" onChange={(ev) => setLastName(ev.target.value)} />
          </div>
          <div className={styles.inputsRegister}>
            <label>Data de Nascimento:</label>
            <input type="date" onChange={(ev) => setDateBorn(ev.target.value)} />
          </div>
          <div className={styles.inputsRegister}>
            <label>E-mail:</label>
            <input type="email" onChange={(ev) => setEmail(ev.target.value)} />
          </div>
          <div className={styles.inputsRegister}>
            <label>Senha:</label>
            <input type="password" onChange={(ev) => setPassword(ev.target.value)} />
          </div>
          <div className={styles.centerButton}>
            <button className={styles.cadastrar} type="submit" onClick={handleSubmit}>Cadastrar</button>
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

export default Cadastro