import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyProfile = () => {
    const{user} = useContext(AuthContext);
    return (
        <div className="text-center">
            <h1>Name: <span className="text-xl font-semibold">{user.displayName}</span> </h1>
            <h1>Email: {user.email} </h1>
            <img className="w-28 h-28 object-cover rounded-md mx-auto" src={user.photoURL} alt="" />
        </div>
    );
};

export default MyProfile;