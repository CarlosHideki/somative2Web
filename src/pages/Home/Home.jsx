import { useState } from "react"
import styles from './home.module.css'
import firebase from "../../database/Firebase"
import { Link } from "react-router-dom"


const Home = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [dateBorn, setDateBorn] = useState();

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const uid = user.uid

      await firebase.firestore().collection('users').doc(uid).get()
        .then((response) => {
          setName(response.data().nome)
          setLastName(response.data().sobrenome)
          setDateBorn(response.data().nascimento)
        })
    }
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      <div className={styles.divFather}>
        <div className={styles.divChild}>
          <p><span>Nome:</span> {name}</p>
          <p style={{ marginBottom: '18px' }}><span>Sobrenome:</span> {lastName}</p>
          <p><span>Data de Nascimento:</span>{dateBorn}</p>
        </div>
        <Link to="/">
          <button className={styles.sair}>Sair</button>
        </Link>
      </div>
    </div>
  )
}

export default Home