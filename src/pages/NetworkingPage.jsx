import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/lan1.jpeg";
import hard2 from "../assets/mannInfra/lan2.jpg";
import hard3 from "../assets/mannInfra/netP44.jpg";
import hard4 from "../assets/mannInfra/fiber2.jpg";
import hard5 from "../assets/mannInfra/netP55.jpg";
import ItInfraHeader from "../components/ItInfraHeader";

const tabData = [
  {
    tab1: "LAN",
    data: "",
    title: "🔌 Robust LAN Solutions for Seamless Office Connectivity",
    data2: `High-Speed Local Data Flow: Enables fast communication between all devices in your network.
Enhanced Network Security: Safeguard internal data with controlled, private access.
Smart Resource Sharing: Share printers, files, and applications efficiently.
Budget-Friendly Infrastructure: Great value for small to mid-sized businesses.
Centralized Control: Easily manage users, devices, and network performance.`,
    img2: hard1,
    title2: "🖧 Local Area Networking Built for Business Efficiency",
    data3: `Lag-Free Communication: Real-time collaboration through stable, low-latency connections.
Secure & Enclosed Environment: Keeps sensitive data within your private network.
Simplified IT Operations: Unified management of connected systems and users.
Scalable Design: Expand your network as your team or office grows.
Productivity-Driven Setup: Designed to support smooth daily business operations.`,
    img3: hard2,
    reverse: false,
  },
  {
    tab2: "FIBER",
    data: "",
    title: "🌐 Fiber Optic Internet — Powering the Digital Future",
    data2: `Blazing Fast Connectivity: Experience unmatched upload and download speeds for all your business needs.
High-Capacity Network: Perfect for data-intensive tasks like video calls, cloud computing, and large file transfers.
Consistent Performance Over Distance: Enjoy stable speeds without degradation, even over long cables.
Next-Gen Ready: Designed to support emerging technologies like AI, 4K/8K video, and smart infrastructure.
Highly Reliable: Low signal interference ensures smooth, uninterrupted connectivity.`,
    img2: hard3,
    title2: "⚡ Future-Ready Fiber Solutions for Modern Enterprises",
    data3: `Supercharged Speeds: Boost productivity with gigabit-class internet performance.
Scalable Bandwidth: Grow your business without worrying about internet limits.
Enterprise-Grade Reliability: Say goodbye to signal drops and slowdowns.
Future-Proof Infrastructure: Ideal for expanding tech needs and smart business operations.
Minimal Downtime: Built to deliver always-on connectivity with minimal maintenance.`,
    img3: hard4,
    reverse: true,
  },
  {
    tab2: "WIRELESS",
    data: "",
    title: "📡 WIRELESS (Wi-Fi & Wireless Networks)",
    data2: `Flexible Connectivity Without Cables
Mobility & Convenience: Access the network from anywhere within range.
Quick Installation: No cabling required, ideal for dynamic environments.
Scalable: Easily extend the network by adding more access points.
Supports BYOD: Seamless connectivity for personal and office devices.
Secure Access Controls: Protects data with encryption and authentication.`,
    img2: hard5,
    reverse: true,
  },
];

export default function NetworkingPage() {
  return (
    <>
      <ItInfraHeader />
      <InfraServicePage pageIndex={1} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Networking Solutions
      </h1>
      <Tabs tabs={tabData} />
      {/* <ManagedITBenefits pageIndex={1} />
      <ManagedITServicesLeftImage pageIndex={1} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
