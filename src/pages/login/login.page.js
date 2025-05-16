import { CustomInput } from '../../components';
import { useState } from 'react';

import './login.css';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <form className="loginForm">
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

// TODO: add redux to store user data
// TODO: load user data from back end
// TODO: load photos from back end
// TODO: load compliments from back end
// TODO: implement Random Meme component