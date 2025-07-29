import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/print1.jpg";
import hard2 from "../assets/mannInfra/print2.jpg";

const tabData = [
  {
    tab1: "ID Card Printers",
    data: "",
    title: "🪪 ID Card Printers",
    data2: `Secure & Professional Identity Printing Solutions
High-Quality Card Printing: Prints sharp, durable ID cards with photos, barcodes, and QR codes.
Single & Dual-Sided Options: Flexible printing depending on business needs.
Fast Print Speed: Quickly generate employee, visitor, or student ID cards.
Smart Card Encoding Support: Compatible with RFID, magnetic stripe, and contactless cards.
Ideal for: Offices, schools, hospitals, and secured facilities.
Compact & User-Friendly: Easy to set up, operate, and maintain.`,
    img2: hard1,
    reverse: false,
  },
  {
    tab2: "Industrial Printers",
    title2: "🖨️ Industrial Printers",
    data3: `Heavy-Duty Printing for Large-Scale Operations
High-Speed, High-Volume Printing: Built for manufacturing, logistics, and warehouse needs.
Durable & Rugged Design: Withstands tough environments and continuous use.
Supports Labels, Tags & Barcodes: Ideal for packaging, shipping, and inventory control.
Precision & Reliability: Delivers consistent output with minimal downtime.
Wide Media Compatibility: Prints on a variety of materials and sizes.
Easy Integration: Works with enterprise systems for seamless operations.`,
    img3: hard2,
    reverse: true,
  },
];

export default function PrinterPage() {
  return (
    <>
      <InfraServicePage pageIndex={4} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Printer Solutions
      </h1>
      <Tabs tabs={tabData} />
      {/* <ManagedITBenefits pageIndex={4} />
      <ManagedITServicesLeftImage pageIndex={4} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
