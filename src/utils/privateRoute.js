import { Navigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    const isAccessAllowed = Boolean(token);

    if (isAccessAllowed) {
        return children;
    }

    return <Navigate to="/login" />;
};
