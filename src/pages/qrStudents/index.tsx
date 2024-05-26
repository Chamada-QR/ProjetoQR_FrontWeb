import styles from './index.module.css'
import { RewindCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import QR from '../../assets/Rectangle 1.png'
function qrStudents() {
  return (
    <section className={styles.fundo_tela}>
      <div className={styles.back}>
        <Link to="/chamada_professor">
          <RewindCircle weight="bold" />
        </Link>
      </div>
      <main>
        <h2>
          Escanei{' '}
          <span>
            para confirmar
            <br /> sua presença
          </span>
        </h2>
      </main>
      <img src={QR} alt="" />
    </section>
  )
}

export default qrStudents
