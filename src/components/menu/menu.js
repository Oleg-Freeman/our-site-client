import './menu.css'
import { HomeIcon, ListsIcon, MessagesIcon, LogoutIcon } from '../../utils';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/userOperations';
import { useNavigate } from 'react-router';


export const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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