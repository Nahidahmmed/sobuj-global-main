import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import ContactUs_Accordion from "../Components/ContactUs_Accordion/ContactUs_Accordion";
import AboutUs_MeetOurFounder from "../Components/AboutUs_MeetOurFounder/AboutUs_MeetOurFounder";
import AboutUs_Thebest from "../Components/AboutUs_TheBest/AboutUs_TheBest";
import UpcomingEvents_EducationFair from "../Components/UpcomingEvents_EducationFair/UpcomingEvents_EducationFair";
import UpcomingEvents_PastEvents from "../Components/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";
import Blog_BlogInbox from "../Components/Blog_BlogInbox/Blog_BlogInbox";


const Layout = () => {
    return (
        <div>
            <ContactUs_Accordion></ContactUs_Accordion>
            <AboutUs_MeetOurFounder></AboutUs_MeetOurFounder>
            <AboutUs_Thebest></AboutUs_Thebest>
            <UpcomingEvents_EducationFair></UpcomingEvents_EducationFair>
            <UpcomingEvents_PastEvents></UpcomingEvents_PastEvents>
            <Blog_BlogInbox></Blog_BlogInbox>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;