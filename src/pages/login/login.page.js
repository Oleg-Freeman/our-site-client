import './login.css';

import { CustomInput } from '../../components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/userOperations';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password })).then(() => navigate('/'));
    }

    return (
        <div className="container">
            <ToastContainer />
            <form className="loginForm" onSubmit={handleSubmit}>
                <h2>Заходь :)</h2>
                <CustomInput
                    id="email"
                    type="email"
                    text="Емейл"
                    required={true}
                    value={email}
                    handleChange={(v) => setEmail(v)}
                />
                <CustomInput
                    id="password"
                    type="password"
                    text="Пароль"
                    required={true}
                    value={password}
                    handleChange={(v) => setPassword(v)}
                />
                <br/>
                <input className="loginSubmit" type="submit" value="Вхід"/>
            </form>
        </div>
    )
}