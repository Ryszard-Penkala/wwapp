import { useState, useEffect } from 'react';
import styles from './ImageSlider.module.scss'

import arrowLeftImg from '../../assets/images/arrow-left.svg';


const ImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    const keyDownHandler = (event) => {
        if(event.code === 'ArrowLeft'){
            goToPrevious();
        } else if (event.code === 'ArrowRight') {
            goToNext();
        }
      }

    useEffect(()=>{
        window.addEventListener('keydown', keyDownHandler)
    })

    return (
        <div className={styles.imageSlider} >
            <p className={styles.galleryHeader}>
                Galeria
            </p>
            <img src={arrowLeftImg} alt="arrow left" className={styles.leftArrow} onClick={goToPrevious} />
            <img src={arrowLeftImg} alt="arrow right" className={styles.rightArrow} onClick={goToNext} />
            <div className={styles.slidesStyles} style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
            <div className={styles.dotContainer}>
                {slides.map((slide, slideIndex) => (
                    <div 
                    key={slideIndex} 
                    className={`${styles.dotStyles} ${currentIndex === slideIndex ? styles.dotStylesActive : ""}`}
                    onClick={() => goToSlide(slideIndex)}>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;