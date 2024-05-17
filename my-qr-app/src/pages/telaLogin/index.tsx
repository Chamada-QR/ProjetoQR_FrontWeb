import styles from './index.module.css'
import logoImg from '../../assets/logo_uniamerica_portais.png'
import { Link } from 'react-router-dom'

function Login(){
    return(
        <section className={styles.fundo}>
            <div className={styles.logo}>
                <div>
                    <img className={styles.logoImg} src={logoImg} alt="Logo" />
                </div>
            </div>
            <div className={styles.login}>
                <div>
                    <input className={styles.email} type="email" name="email" placeholder='Nome'/>
                    <Link to='/registre' className={styles.link}>
                        <p className={styles.registre}>Novo? Registre-se aqui!!!</p>
                    </Link>
                    

                    <Link to='/chamada_professor'>
                        <button className={styles.button_verChamada}>ver chamada</button>
                    </Link>
                    
                </div>
            </div>
        </section>
    );
};

export default Login;