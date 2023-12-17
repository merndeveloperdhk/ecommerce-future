import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const MyAccount = () => {
    return (
        <div>
            <Helmet>
                <title>My Account | Welcome to my site</title>
            </Helmet>
            <ul>
                <Link to='/myProfile'><li>My Profile</li></Link>
                <Link><li>Orders</li></Link>
                <li><Link>favourite</Link></li>
                
            </ul>
        </div>
    );
};

export default MyAccount;
