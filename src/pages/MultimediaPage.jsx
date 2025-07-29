import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/mul11.jpg";
import hard2 from "../assets/mannInfra/mul22.jpg";
import hard3 from "../assets/mannInfra/mul333.jpg";

const tabData = [
  {
    tab1: "Projectors",
    data: "",
    title: "📽️ Projectors",
    data2: `Crisp Visual Displays for Business & Education
HD & 4K Projection Quality: Delivers clear, vibrant visuals for meetings and classrooms.
Wireless & Wired Options: Supports screen sharing from laptops, mobiles, or USB.
Large Screen Coverage: Projects up to 300 inches for wide audiences.
Compact & Portable Models: Easy to carry and install in different spaces.
Ideal for: Offices, smart classrooms, seminars, and home theaters.`,
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "Audio Systems",
    title2: "🔊 Audio Systems",
    data3: `Clear & Powerful Sound for Every Space
High-Fidelity Sound Output: Crystal-clear audio for voice and music.
PA & Conference Solutions: Ideal for meetings, events, and public announcements.
Wireless & Bluetooth Options: Easy connection with multiple devices.
Custom Installations: Tailored for offices, schools, auditoriums, or outdoor use.
Noise Cancellation & Echo Control: Delivers professional-grade sound quality.`,
    img3: hard2,
    reverse: true,
  },
  {
    tab1: "Barcode Systems",
    data: "",
    title: "🧾 Barcode Systems",
    data2: `Fast & Accurate Data Capture for Smarter Operations
1D & 2D Barcode Scanning: Supports QR codes, retail barcodes, and asset tags.
Handheld & Fixed Scanners: Versatile for retail, warehousing, and logistics.
POS Integration: Easily connects with billing and inventory systems.
Inventory & Asset Tracking: Improves accuracy and reduces manual errors.
Durable & Fast-Response Devices: Designed for high-volume environments.`,
    img2: hard3,
    reverse: false,
  },
];
export default function MultimediaPage() {
  return (
    <>
      <InfraServicePage pageIndex={5} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Multimedia Solutions
      </h1>
      <Tabs tabs={tabData} />
      {/* <ManagedITBenefits pageIndex={5} />
      <ManagedITServicesLeftImage pageIndex={5} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
