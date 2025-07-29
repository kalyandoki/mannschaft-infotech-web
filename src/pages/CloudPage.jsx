import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/cloud111.jpg";
import hard2 from "../assets/mannInfra/cloud22.jpg";
import hard3 from "../assets/mannInfra/cloud33.jpg";

const tabData = [
  {
    tab1: "CLOUD SOLUTIONS",
    data: "",
    title: "☁️ CLOUD SOLUTIONS",
    data2: `Smart, Scalable, and Secure IT Infrastructure
On-Demand Access: Use your data and apps from anywhere, anytime.
Scalability: Easily upgrade storage, computing power, and services as your business grows.
Data Security & Backup: Encrypted storage with automatic backups to protect your information.
Cost-Effective: Pay only for what you use—no need for heavy upfront investment.
Collaboration Ready: Ideal for remote teams and real-time file sharing.`,
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "SERVERS",
    data: "",
    title: "🖥️ SERVERS",
    data2: `The Core Backbone of Your IT Infrastructure
Reliable Data Hosting: Centralized storage for files, applications, and databases.
24/7 Availability: Keep your business operations running around the clock.
High Performance: Powerful hardware to manage multiple users and heavy workloads.
Secure Access: Managed permissions and firewall protection for data safety.
Custom Configuration: Tailored to suit specific business applications or network roles.`,
    img2: hard2,
    reverse: true,
  },
  {
    tab1: "WORK STATIONS",
    data: "",
    title: "💻 WORK STATIONS",
    data2: `High-Performance Systems for Professionals
Optimized for Productivity: Powerful processors and high memory for smooth multitasking.
Designed for Heavy Workloads: Ideal for design, development, engineering, and analysis.
Ergonomic & Reliable: Built for long-term, daily professional use.
Customizable Hardware: Easily upgrade components based on need.
Seamless Network Integration: Connects efficiently with servers and cloud platforms.`,
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
      {/* <ManagedITBenefits pageIndex={2} />
      <ManagedITServicesLeftImage pageIndex={2} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
