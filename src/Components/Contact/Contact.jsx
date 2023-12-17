import { Helmet } from "react-helmet-async";
import NewsLetter from "../NewsLetter/NewsLetter";
import ContactIcons from "./ContactIcons";
import ContactMessage from "./ContactMessage";
import Map from "./Map";


const Contact = () => {
    return (
        <div className="my-4">
           <Helmet>
        <title>Contact | Welcome to my site</title>
      </Helmet>
                <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Contact Information</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo quod dicta repudiandae excepturi minima!</p>
                </div>
                <ContactIcons></ContactIcons>
                <ContactMessage></ContactMessage>
                <Map></Map>
                <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Contact;