import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import useTitle from '../../hooks/useTitle';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    useTitle('Private Route')

    if (loading) {
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{margin: 'auto'}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivateRoute;