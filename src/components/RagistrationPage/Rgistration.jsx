import { useState, useEffect } from "react";
import style from "./Ragistration.module.css";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [data, setData] = useState('');
    const [password, setPasswoed] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);
    const [dataDirty, setDataDirty] = useState(false);
    const [passwordDirty, setPasswoedDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емаил не может быть пустым');
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [dataError, setDataError] = useState('Дата должна быть указана');
    const [telError, setTelError] = useState('Телефон не может быть пустым');
    const [passwordError, setPasswoedError] = useState('Пароль не может быть пустым');
    const [formaValid, setFormaValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError || telError || nameError || dataError) {
            setFormaValid(false)
        }else {
            setFormaValid(true)
        }
    }, [emailError, passwordError, telError, nameError, dataError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Емаил не коректен")
        }else {
            setEmailError()
        }
    };

    const telHandler = (e) => {
        setTel(e.target.value)
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setTelError("Телефон не коректен")
        }else {
            setTelError()
        }
    };


    const passwordHandler = (e) => {
        setPasswoed(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswoedError('Пароль должен быть длинее 3 и меньше 8')
            if(!e.target.value) {
                setPasswoedError('Пароль не может быть пустым')
            }
        }else {
            setPasswoedError('')
        }
    };

    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value.length !== String) {
            setNameError('Имя не валидно')
            if(!e.target.value) {
                setNameError('Имя не может быть пустым')
            }
            
        }else {
            setNameError('')
        }
    };

    const dataHandler = (e) => {
        setData(e.target.value)
            if(!e.target.value) {
                setDataError('Дата должна быть выбрана')
            }else {
                setDataError('')
            }
    };


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'password':
                setPasswoedDirty(true)
                break
            case 'tel':
                setTelDirty(true)
                break
            case 'data':
                setDataDirty(true)
                break
        }
    }

    return (
    
    <div className={style.form_container}>
        <form className={style.form_content}>
            <h1 className={style.form_content__text}>Зпись на курс</h1>
            {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
            <input className={style.form_content__inp} onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" type="text" placeholder="Enter your name..."/>

            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <input className={style.form_content__inp} onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email..."/>
            
            {(telDirty && telError) && <div style={{color: 'red'}}>{telError}</div>}
            <input className={style.form_content__inp} onChange={e => telHandler(e)} value={tel} onBlur={e => blurHandler(e)} name="tel" type="text" placeholder="Enter your tel..."/>
            
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input className={style.form_content__inp} onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..."/>

            {(dataDirty && dataError) && <div style={{color: 'red'}}>{dataError}</div>}
            <input onChange={e => dataHandler(e)} value={data} onBlur={e => blurHandler(e)} name="data" type="datetime-local"/>

            <button className={style.form_content__botton} disabled={!formaValid} type="submit">Записаться</button>
        </form>
    </div>
  );
}

export default Registration;