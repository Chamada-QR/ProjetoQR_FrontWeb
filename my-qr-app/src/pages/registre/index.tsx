import styles from './index.module.css'
import { Link } from 'react-router-dom'

function Registre(){
    return(
        <section className={styles.fundo_registre}>
            <Link to='/'>
                <button>VOLTAR </button>
            </Link>

        </section>
    );
};

export default Registre;