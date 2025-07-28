import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/itInfra/clo1.jpg";
import hard2 from "../assets/itInfra/clo1.jpg";

const tabData = [
  {
    tab1: "NEW OFFICE SETUP",
    data: "Mannschaft Infotech Hardware Support is responsible for installation and maintenance of computers and computer peripherals...",
    title: "HARDWARE MAINTAINANCE",
    data2:
      "We understand that doing business in India can sometimes be a new and challenging process...\nOur team of expert consultants can recommend, support, and implement a wide range of hardware.",
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "HARDWARE MAINTAINANCE",
    data: "...",
    title: "HARDWARE MAINTAINANCE",
    data2: "...",
    img2: hard2,
    title2: "HARDWARE MAINTAINANCE",
    data3:
      "We also provide in-depth hardware diagnostics and repair services...",
    img3: hard1,
    reverse: true,
  },
];

export default function PrinterPage() {
  return (
    <>
      <InfraServicePage pageIndex={4} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Networking Solutions
      </h1>
      <Tabs tabs={tabData} />
      {/* <ManagedITBenefits pageIndex={4} />
      <ManagedITServicesLeftImage pageIndex={4} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
