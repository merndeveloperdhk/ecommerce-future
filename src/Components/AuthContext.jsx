import { createContext } from "react";
import PropTypes from 'prop-types';
export const AuthContextCreate = createContext(null);
const authInfo = {

}

const AuthContext = ({children}) => {
    return (
        <AuthContextCreate.Provider value={authInfo}>
            {children}
        </AuthContextCreate.Provider>
    );
};

export default AuthContext;
AuthContext.propTypes = {
    children: PropTypes.node
}