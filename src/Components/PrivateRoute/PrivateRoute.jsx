import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpeaner from '../LoadingSpinner/LoadingSpeaner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
        // return <span className="loading loading-spinner text-info "></span>
        return <LoadingSpeaner></LoadingSpeaner>
    }
    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}