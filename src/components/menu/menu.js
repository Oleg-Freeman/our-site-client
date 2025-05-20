import './menu.css'

export const Menu = () => {
    return (
        <nav className="menu">
            <a href="/" className="menu-item">Home</a>
            <a href="/lists" className="menu-item">Lists</a>
            <a href="/messages" className="menu-item">Messages</a>
        </nav>
    );
}