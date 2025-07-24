import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/office.jpg";
import hard2 from "../assets/mannInfra/hardware.jpg";

const tabData = [
  {
    tab1: "NEW OFFICE SETUP",
    data: "Mannschaft Infotech Hardware Support is responsible for installation and maintenance of computers and computer peripherals. we eliminate large capital outlays and ensure IT equipment costs and related maintenance services to qualify as operating expenses.",
    title: "NEW OFFICE SETUP",
    data2:
      "We understand that doing business in India can sometimes be a new and challenging process. This is especially true when setting up new offices without your own dedicated IT staff. Mannschaft Infotech can provide New Office IT Set-Up services you can trust and rely on. Our team of expert technical consultants can confidently recommend, support, and implement a wide range of hardware, software, and network systems with your best interests in mind. We can provide you with installation project management as well as long-term IT maintenance and support with our normal IT maintenance package.",
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "HARDWARE MAINTAINANCE",
    data: "Our Team of professional engineers maintains your IT systems, so you have more time to focus on your core business.",
    title: "HARDWARE MAINTAINANCE",
    data2: `Optimizing Hardware and Software Performance
Removing Spyware and other invasive software
System and Software Updates
Virus Clean Up
De-fragmenting Disk Data
IT Trouble Shooting
Overall System consultation
Onsite Services`,
    img2: hard2,
    // title2: "HARDWARE MAINTAINANCE",
    // data3:
    //   "We also provide in-depth hardware diagnostics and repair services...",
    // img3: hard1,
    reverse: true,
  },
];
export default function HardwarePage() {
  return (
    <>
      <InfraServicePage pageIndex={0} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Hardware Solutions
      </h1>
      <Tabs tabs={tabData} />
      <ManagedITBenefits pageIndex={0} />
      <ManagedITServicesLeftImage pageIndex={0} />
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
