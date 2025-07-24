import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/cloud1.jpg";
import hard2 from "../assets/mannInfra/cloud2.jpg";
import hard3 from "../assets/mannInfra/cloud3.jpg";

const tabData = [
  {
    tab1: "CLOUD SOLUTIONS",
    data: "Each business discussion today rotates around SMAC – Social, Mobility, Cloud and Analytic. The cloud is enabling ventures to change their organizations by quick computerized development, empowering lithe business stages and shortening time-to-market. Cloud is the foundation of a future-prepared enterprise.",
    title: "CLOUD SOLUTIONS",
    data2:
      "In today’s digital era, business transformation is driven by SMAC — Social, Mobility, Analytics, and Cloud. Among them, Cloud stands as the cornerstone of innovation. It empowers organizations to accelerate digital growth, build agile business platforms, and dramatically reduce time-to-market. At Mannschaft Infotech, we deliver scalable and secure cloud solutions that lay the foundation for a future-ready enterprise — enabling you to innovate faster, operate smarter, and grow seamlessly.",
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "SERVERS",
    data: "Windows & Linux Server Management is essential for enterprises and web hosting companies that maintain dedicated servers like Application Servers, Proxy Servers, Mail Servers, Web Servers, server monitoring, server support, server hardening, server tuning and optimization, backups and restore etc., to cater to their specific IT needs.",
    title: "",
    data2:
      "Mannschaft Infotech windows & Linux server management plans provide you with 24/7 access to our team of expert administrators to sort out any issues that arise right way.Each of our team members has minimum 5+ years of experience in managing windows & Linux servers. If you just bought a new server then we will also set it up from the scratch installing all the necessary software’s.Mannschaft Infotech is one stop shop to buy any kind of server. We can provide you with wide array of choices depending on your needs, we cater from entry level home servers to Enterprise level servers. We have partnership with all most of all the Server manufacturers IBM, HP, Lenovo, Dell etc.",
    img2: hard2,
    reverse: true,
  },
  {
    tab1: "WORK STATIONS",
    data: "",
    title: "WORK STATIONS",
    data2:
      "Mannschaft Infotech is one stop shop to buy any kind of desktop. We can provide you with wide array of choices depending on your needs, we cater from entry level home desktops to Enterprise level workstations. We have partnership with all most of all the Desktop manufacturers like IBM, HP, Lenovo, Dell etc.We take care of all your server needs so you can focus your business Contact Mannschaft Infotech at projects@mannschaftit.com to put our expertise to work and show you how we can add value to your IT department.",
    img2: hard3,
    reverse: false,
  },
];
export default function CloudPage() {
  return (
    <>
      <InfraServicePage pageIndex={2} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Cloud & Infrastructure Solutions
      </h1>
      <Tabs tabs={tabData} />
      <ManagedITBenefits pageIndex={2} />
      <ManagedITServicesLeftImage pageIndex={2} />
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
