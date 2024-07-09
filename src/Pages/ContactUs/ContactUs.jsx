import Contact_Us_Map from "../../Components/Contact_Us_Map/Contact_Us_Map";
import ContactUs_Accordion from "../../Components/ContactUs_Accordion/ContactUs_Accordion";
import ContactUs_Components from "../../Components/ContactUs_Components";

export default function ContactUs() {
  return (
    <div>
      <ContactUs_Components />
      <Contact_Us_Map />
      <ContactUs_Accordion />
    </div>
  );
}
