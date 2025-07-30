import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
// import ManagedITBenefits from "../components/ManagedITBenefits";
// import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import Tabs from "../components/Tabs";

import hard1 from "../assets/itInfra/hard2.jpg";
import hard2 from "../assets/itInfra/hard3.jpg";
import ItInfraHeader from "../components/ItInfraHeader";

const tabData = [
  {
    tab1: "New Office IT Setup",
    data: "🛠️ Hardware Support – Mannschaft Infotech\nExpert in installation and maintenance of computers and peripherals.Helps reduce large capital investments with cost-efficient hardware solutions.Ensures all IT equipment and maintenance costs are treated as operating expenses.Offers prompt and reliable support for hardware-related issues and upgrades.Delivers proactive servicing to maximize system uptime and performance.",
    title: "🏢 New Office IT Setup",
    data2:
      "End-to-end IT setup for new offices across India — ideal for businesses without in-house IT teams.\nHassle-free implementation of computers, software, and network infrastructure.\nPersonalized consultation and system recommendations from experienced IT professionals.\nComprehensive project management from planning to installation.\nIncludes long-term maintenance and support under our IT AMC (Annual Maintenance Contract) package.\nScalable and future-ready solutions to grow with your business.",
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "HARDWARE MAINTAINANCE",
    title2: "🔧 Hardware Maintenance",
    data3: `Preventive Maintenance – Regular checkups to avoid hardware failures.
Break-Fix Support – Quick repairs or replacements for faulty hardware.
System Upgrades – Updating outdated components for better performance.
Peripheral Maintenance – Servicing printers, routers, and other devices.
Lifecycle Management – Tracking and planning hardware replacements.
Certified Technicians – Skilled experts ensuring reliable service.
On-Site & Remote Support – Flexible support options based on your needs.
Custom AMC Plans – Tailored annual maintenance contracts.`,
    img3: hard2,
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
      {/* // <ManagedITBenefits pageIndex={0} />
      // <ManagedITServicesLeftImage pageIndex={0} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
