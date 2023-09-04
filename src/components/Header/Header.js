import styles from './Header.module.scss'
import { useState } from 'react';

import Modal from '../Modal/Modal'

import headerImg from '../../assets/images/reinhart-julian-WxM465oM4j4-unsplash.png';
import headerLogo from '../../assets/images/LOGO_Placeholder.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import instagramLogo from '../../assets/images/instagram.svg';
import youtubeLogo from '../../assets/images/youtube.svg';



const Header = () => {

    const [isHamburgerActive, setIsHamburgerActive] = useState(false)
    const [isNavActive, setIsNavActive] = useState(false)

    const [openModal, setOpenModal] = useState(false);

    const ToggleClass = () => {
        setIsHamburgerActive(!isHamburgerActive);
        setIsNavActive(!isNavActive);
    }

    return ( 
        <div className={styles.headerContainer} id='start-link'>
            <Modal open={openModal} onClose={()=>setOpenModal(false)}/>

            <div className={styles.navbarContainer}>
                <nav className={styles.navContainer}>
                    <img src={headerLogo} alt="header logo" className={styles.headerLogo}/>

                    <div className={`${styles.linksContainer} ${isNavActive ? styles.linksContainerActive : ''}`}>
                        <div className={styles.navigationListContainer}>
                            <ul className={styles.navigationList}>
                                <li><a href="#start-link">start</a></li>
                                <li><a href="#about-me-link">o mnie</a></li>
                                <li><a href="#gallery-link">galeria</a></li>
                                <li onClick={()=> setOpenModal(true)}>kontakt</li>
                            </ul>

                        </div>
                        <div className={styles.socialMediaContainer}>
                            <img src={facebookLogo} alt="facebook logo" className={styles.facebookLogo}/>
                            <img src={instagramLogo} alt="instagram logo" className={styles.instagramLogo}/>
                            <img src={youtubeLogo} alt="youtube logo" className={styles.youtubeLogo}/>
                        </div>
                    </div>

                    <button className={`${styles.headerHamburger} ${isHamburgerActive ? styles.hamburgerActive : ''}`} onClick={ToggleClass} >
                        <span className={styles.hamburgerBox}>
                            <span className={styles.hamburgerInside}>

                            </span>
                        </span>
                    </button>

                    {/* <button onClick={()=> setOpenModal(true)}>Modal</button> */}
                    
                </nav>
            </div>
            <div className={styles.headerImageContainer}>
                <img src={headerImg} alt="hero" className={styles.headerImage}/>
            </div>
        </div>
     );
}
 
export default Header;