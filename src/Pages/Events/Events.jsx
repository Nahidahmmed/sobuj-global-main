import Events_Components from "../../Components/Events_Components/Events_Components";
import UpcomingEvents_EducationFair from "../../Components/UpcomingEvents_EducationFair/UpcomingEvents_EducationFair";
import UpcomingEvents_PastEvents from "../../Components/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";


const Events = () => {
    return (
        <div>
            <Events_Components/>
            <UpcomingEvents_EducationFair/>
            <UpcomingEvents_PastEvents/>
        </div>
    );
};

export default Events;
