import styles from './index.module.css'
import logoImg from '../../assets/logo_uniamerica_portais.png'


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
                    <p className={styles.registre}>Novo? Registre-se aqui!!!</p>
                </div>
            </div>
        </section>
    );
};

export default Login;