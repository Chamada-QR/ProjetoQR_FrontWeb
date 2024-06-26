import styles from './index.module.css'
import logoImg from '../../assets/logo_uniamerica_portais.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className={styles.fundo}>
      <div className={styles.logo}>
        <div>
          <img className={styles.logoImg} src={logoImg} alt="Logo" />
        </div>
      </div>
      <div className={styles.loginContainer}>
        <div>
          <input
            className={styles.email}
            type="email"
            name="email"
            placeholder="Nome"
          />
          <Link to="/registre" className={styles.link}>
            <p className={styles.registre}>Novo? Registre-se aqui!!!</p>
          </Link>

          <div className={styles.rightMover}>
            <Link to="/chamada_professor">
              <button className={styles.button_verChamada}>Ver chamada</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
