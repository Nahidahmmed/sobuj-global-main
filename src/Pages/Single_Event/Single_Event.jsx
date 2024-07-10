import Event_Study from "../../Components/Event_Study/Event_Study";
import Event_Subscribe from "../../Components/Event_Subscribe/Event_Subscribe";
import UpcomingEvents_EducationFair from "../../Components/UpcomingEvents_EducationFair/UpcomingEvents_EducationFair";
import UpcomingEvents_PastEvents from "../../Components/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";

const Single_Event = () => {
    return (
        <div>
            <UpcomingEvents_EducationFair/>
            <UpcomingEvents_PastEvents/>
            <Event_Subscribe/>
            <Event_Study/>
        </div>
    );
};

export default Single_Event;