import ContactUsSection from "../components/ContactSection";
import ContactWithUs from "../components/ContactWithUs";
import LocationMap from "../components/LocationMap";

const ContactUs = () => {
  return (
    <>
      <div className="pt-6 pb-20">
        {/* <ContactUsSection /> */}
        <ContactWithUs />
        <LocationMap />
      </div>
    </>
  );
};

export default ContactUs;
