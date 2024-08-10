import logo from '../img/logo.png'
import styles from './Header.module.css'
function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.div_logo}>
                <img src={logo} alt="Logo" className={styles.header_logo} />
                <h1>GameBox</h1>
            </div>
            <div className={styles.div_links}>
                <p>Ver lista de Jogos</p>
                <p>Sobre nós</p>
            </div>
        </header>
    )
}

export default Header