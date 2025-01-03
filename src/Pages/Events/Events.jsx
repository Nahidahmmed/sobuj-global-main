import Event_Study from "../../Components/Event_Study/Event_Study";
import Event_Subscribe from "../../Components/Event_Subscribe/Event_Subscribe";
import Events_Components from "../../Components/Events_Components/Events_Components";
import UpcomingEvents_PastEvents from "../../Components/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";


const Events = () => {
    return (
        <div>
            <Events_Components/>
            {/* <UpcomingEvents_EducationFair/> */}
            <UpcomingEvents_PastEvents/>
            <Event_Subscribe/>
            <Event_Study/>
        </div>
    );
};

export default Events;
