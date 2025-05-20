import { Navigate } from 'react-router';

export const LoginRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    const isAccessAllowed = Boolean(token);

    if (isAccessAllowed) {
        return <Navigate to="/" />;
    }

    return children;
};
