import { useState } from 'react';

import styles from './Modal.module.scss'

import closeBtnImg from '../../assets/images/close.svg'

const Modal = ({open, onClose}) => {
    
    const [isFormCorrect, setIsFormCorrect] = useState(true); 
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [consent, setConsent] = useState(false)

    const consentHandler = () => {
        setConsent(!consent)
      }

    const responseBody = {
        firstName: "", 
        lastName: "", 
        email: "0", 
        consent: false
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        responseBody.firstName = name;
        responseBody.lastName = lastName;
        responseBody.email = email;
        responseBody.consent = consent;
        console.log(JSON.stringify(responseBody))

    }
    
    const inputChangeHandler = (setFunction, e) => {
        setFunction(e.target.value)
    }

    const handleClick = () => {
        if(name.length === 0 || lastName.length === 0 || email.length === 0 || consent === false){
            setIsFormCorrect(false)
        } else {
            setIsFormCorrect(true)
        }
    }
    
    
    if (!open) return null
    return ( 
        <div onClick={onClose} className={styles.overlay}>
            <div onClick={(e)=>{e.stopPropagation()}} className={styles.modalContainer}>
                <form className={styles.contentContainer} id='modalForm' onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label htmlFor='nameInput' className={styles.inputLabel}>
                            Imię
                            <p className={styles.redStar}>
                                *
                            </p>
                        </label>
                        <input 
                            id='nameInput' 
                            type="text" 
                            className={styles.inputField} 
                            placeholder='- wpisz -'
                            size="64"
                            maxlength="64"
                            minlength="3"
                            required
                            value={name}
                            onChange={(e)=>inputChangeHandler(setName, e)}
                        />

                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor='surnameInput' className={styles.inputLabel}>
                            Nazwisko
                            <p className={styles.redStar}>
                                *
                            </p>
                        </label>
                        <input 
                            id='surnameInput' 
                            type="text" className={styles.inputField} 
                            placeholder='- wpisz -'
                            size="64"
                            maxlength="64"
                            minlength="3"
                            required
                            value={lastName}
                            onChange={(e)=>inputChangeHandler(setLastName, e)}
                        />

                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor='emailInput' className={styles.inputLabel}>
                            Adres e-mail
                            <p className={styles.redStar}>
                                *
                            </p>
                        </label>
                        <input 
                            id='emailInput' 
                            type="email" 
                            className={styles.inputField} 
                            placeholder='- wpisz -'
                            size="64"
                            maxlength="64"
                            minlength="3"
                            required
                            value={email}
                            onChange={(e)=>inputChangeHandler(setEmail, e)}
                        />

                    </div>
                    <div className={styles.requiredFieldsInfoContainer}>
                        <p className={styles.redStar}>*</p>
                        <p className={styles.requiredFiledInfo}>-pola wymagane</p>
                    </div>

                    <div className={styles.consentContainer}>
                        <input 
                            id='consentInput' 
                            type="checkbox" 
                            className={styles.checkboxField} 
                            checked={consent}
                            onChange={consentHandler}
                            required
                        />
                        <label htmlFor='consentInput' className={styles.checkboxLabel}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </label>


                    </div>

                    <button type='submit' form='modalForm' className={styles.submitBtn} onClick={handleClick}>
                        Wyślij
                    </button>
                    {!isFormCorrect ? 
                        (<div className={styles.warningMessage}>
                            Proszę uzupełnić wymagane pola!
                        </div>) : 
                        ''
                    }
                </form>
                <img src={closeBtnImg} alt='close button' className={styles.closeBtn} onClick={onClose}/>
            </div>
        </div>
     );
}
 
export default Modal;