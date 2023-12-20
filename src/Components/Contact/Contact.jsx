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
                <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent">Contact Information</h1>
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