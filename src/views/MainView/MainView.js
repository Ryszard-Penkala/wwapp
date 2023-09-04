import styles from './MainView.module.scss'

import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Footer from '../../components/Footer/Footer'

import slide1 from '../../assets/images/reinhart-julian-_r0lZDocH78-unsplash.png'
import slide2 from '../../assets/images/reinhart-julian-H4AejIh_l7g-unsplash.png'
import slide3 from '../../assets/images/reinhart-julian-S9BOTsGr2ww-unsplash.png'
import slide4 from '../../assets/images/reinhart-julian-VnI_piHNlok-unsplash.png'

const MainView = () => {

    const slides = [
        {url: slide1, title: 'Slide1'},
        {url: slide2, title: 'Slide2'},
        {url: slide3, title: 'Slide3'},
        {url: slide4, title: 'Slide4'},
    ]

    return(
        <main className={styles.mainView}>
            <Header />
            <AboutMe />
            <div className={styles.containerStyle} id='gallery-link'>
                <ImageSlider slides={slides} />
            </div>
            <Footer />
        </main>
    )
}

export default MainView