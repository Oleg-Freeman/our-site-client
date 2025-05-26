import './menu.css'
import { HomeIcon, ListsIcon, MessagesIcon, LogoutIcon } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, logout } from '../../redux/user/userOperations';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser);

    useEffect(() => {
        if (!currentUser) {
            dispatch(getMe())
        }
    }, [currentUser, dispatch]);

    const handleLogout = () => {
        dispatch(logout()).then(() => navigate('/login'));
    }

    return (
        <nav className="menu">
            <a href="/" className="menu-item"><HomeIcon /></a>
            <a href="/lists" className="menu-item"><ListsIcon /></a>
            <a href="/messages" className="menu-item"><MessagesIcon /></a>
            <button className="menu-item" onClick={handleLogout}><LogoutIcon /></button>
        </nav>
    );
}