import styles from './AboutMe.module.scss'

import aboutMeImg from '../../assets/images/tim-bogdanov-4uojMEdcwI8-unsplash.png'

const AboutMe = () => {
    return ( 
        <div className={styles.aboutMeMain} id='about-me-link'>
            <div className={styles.aboutMeImgContainer}>
                <img src={aboutMeImg} alt="aboutme" className={styles.aboutMeImg}/>
            </div>
            <div className={styles.aboutMeContainer}>
                <p className={styles.aboutMeTitle}>
                    O mnie
                </p>
                <div className={styles.aboutMeTxtContainer}>
                    <p className={styles.aboutMeTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className={styles.aboutMeTxt}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className={styles.aboutMeTxt}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <p className={styles.aboutMeTxt}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;