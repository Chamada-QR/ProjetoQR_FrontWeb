import styles from './index.module.css'
import { Link } from 'react-router-dom'

function Registre(){
    return(
        <section className={styles.fundo_registre}>

            <div className={styles.loginRegistre}>             
                <div>
                    <input className={styles.email} type="email" name="email" placeholder='Nome'/>  

                    <input className={styles.ra} type='text' name="number" placeholder='Ra'/>      
                </div>
                <Link to='/'>
                    <button className={styles.button_voltar}>VOLTAR </button>
                </Link>
            </div>

        </section>
    );
};

export default Registre;

<section className={styles.fundo}>


</section>