import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = useSelector((state) => state.auth?.token);

    // If no token, redirect to login
    if (!token) return <Navigate to="/login" replace />;

    // Render nested routes
    return <Outlet />;
};

export default ProtectedRoutes;