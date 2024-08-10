import styles from './Footer.module.css' 
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <FaInstagram />
                <FaGithub />
                <FaLinkedin />
            </div>
            <div>
                <p>Rik Inc @2024</p>
            </div>
        </footer>
    )
}

export default Footer