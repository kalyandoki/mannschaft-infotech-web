import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/ss1.jpg";
import hard2 from "../assets/mannInfra/ss2.jpg";
import hard3 from "../assets/mannInfra/ss3.jpg";
import hard4 from "../assets/mannInfra/ss4.jpg";
import hard5 from "../assets/mannInfra/ss5.jpg";
import hard6 from "../assets/mannInfra/ss6.jpg";
import hard7 from "../assets/mannInfra/ss7.jpg";
import hard8 from "../assets/mannInfra/ss8.jpg";
import hard9 from "../assets/mannInfra/ss9.jpg";

const tabData = [
  {
    tab1: "BIOMETRIC",
    data: "Conventional methods for gathering time & attendance data are complex, time consuming and routinely produce inaccurate results.",
    title: "BENEFITS",
    data2:
      "Patrolling is aimed at preventing cable disruptions along the OFC routes daily on fixed stretch\nPreventive and Corrective Maintenance is carried out as defined by the SLA / SOW\nAll fibers are tested for the block sections and reported every month\nAny defects in the fiber or in any of the associated equipment is attended to, in consultation with the Customer at site\nRepeater stations and the optical equipment installed for alarms are monitored\nBreakdown OFC Maintenance includes 24*7 mobilization of equipment and skilled manpower for fault identification and rectification\nTest link attributes like the splice loss/link loss after the rectification of fault are corrected\nDeployment of O&M teams to carry out Splicing and Termination of Optical Fiber Cable",
    img2: hard1,
    reverse: true,
  },
  {
    tab2: "ACCESS CONTROL",
    data: "",
    title: "",
    data2:
      "Access Control systems increase security within your premises. Fingerprint reader, pin combination, facial recognition systems, RFID card reader are the different kinds of access control systems available in the MARKET. These systems can be used to increase security at home and business places.\nRestricting entry into your premises is the most important step towards attaining safety, only authorized users are granted access into your homes, safes, offices, cabins etc. In-built alarms in access control systems alert owners in case an unauthorized entry is attempted. Mannschaft Infotech access control security systems provide outstanding setups to protect offices, hospitals, public buildings, retail sectors, educational institutions etc.",
    img2: hard2,
    reverse: false,
  },
  {
    tab1: "CCTV",
    data: "For the ultimate security, your organization needs Internet-based surveillance. If you have been looking into security systems for your business, Mannschaft Infotech Internet-based, streaming video surveillance solutions are the most flexible, cost-effective answer.",
    title: "IP CAMERAS",
    data2:
      "IP Cameras are today's advanced security camera. Internet protocol camera transmits video surveillance feeds captured from the camera over a network.\nThis is one the major benefits of using IP camera users can store and view security and surveillance footage from any remote location. To know more about IP camera technical specifications, product benefits and prices please contact us.",
    img2: hard4,
    data3:
      "At Mannschaft Infotech, we offer advanced IP Camera Surveillance Solutions designed to enhance your security with high-definition video, remote access, and intelligent monitoring. Whether for commercial, industrial, or residential use, our IP cameras provide:\nReal-time monitoring from anywhere via mobile or web\nHigh-resolution footage for detailed video clarity\nMotion detection and alerts for proactive security\nNight vision and wide-angle coverage\nSeamless integration with existing security systems\nEmpower your spaces with smart surveillance — secure, scalable, and future-ready.",
    img3: hard3,
    reverse: false,
  },
  {
    tab2: "FIRE ALARM",
    data: "",
    title: "FIRE ALARM",
    data2:
      "Alarming is an important component of fire fighting. This process involves triggering either sound or light or both upon sensing the smoke or ignition. Role of Fire Alarm Systems have become very crucial with the inclusion of advanced technologies & sophisticated tools in the business settings.\nHuman monitoring is not possible round the clock and sometimes hidden or deep ignition cannot be detected timely which causes the spread of fire. Contact Mannschaft Infotech at projects@mannschaftit.com to put our expertise to work and show you how we can add value to your IT department.",
    img2: hard5,
    reverse: true,
  },
  {
    tab1: "GPS",
    data: "Our GPS tracking system designed to help you manage and improve as much as possible your fleet‘s everyday activities. We provide School Bus Tracking Solutions, Enterprise Tracking Solutions, Temperature Tracking Solutions, RFID Tracking Solutions.",
    title: "VEHICLE TRACKING SYSTEM",
    data2:
      "A wide range of GPS tracking devices, specifically designed to ease the the process of Vehicle tracking are available. To understand how our Vehicle Tracking solutions can help you in tracking your vehicle\nWith OUR Vehicle Tracking solution you can:\nTrack and Control your vehicle from your fingertips.\n24/7 Live vehicle tracking from anywhere and anytime.\nPrevent vehicle theft.\nInstant notification via emails, sms, App notifications.\nEmpower your vehicle’s security.",
    img2: hard6,
    title2: "FUEL LEVEL MONITORING",
    data3:
      "Key Features:\nRemote Tank Monitoring\nFuel Theft Prevention\nAutomated Fuel Fill Reporting\nFuel Consumption Recordings\nDetailed Analytics Report\n99% Accuracy Rate\nInstant Alerts via SMS, E-MAIL and App Notifications\nManage Unlimited Number of Vehicles",
    img3: hard7,
    title3: "PERSONAL TRACKING SOLUTION",
    data4:
      "Personal Tracker is a new-age tracking device that is feature-rich and ensures absolute safety by all means to your loved ones.\nThe personal tracking technology is recommended for the end user and also they can come in handy for large corporations, those who care for the well being of their employees.",
    img4: hard8,
    title4: "FLEET MANAGEMENT",
    data5:
      "leet Management solutions are constantly evolving in order to bring the best out of our clients businesses.",
    img5: hard9,
    reverse: false,
  },
];

export default function SurveillancePage() {
  return (
    <>
      <InfraServicePage pageIndex={3} />
      <h1 className="text-right p-6 mr-10 text-4xl font-bold text-[#ec2028] hover:text-[#ec2028]">
        Surveillance & Security Solutions
      </h1>
      <Tabs tabs={tabData} />
      {/* <ManagedITBenefits pageIndex={3} />
      <ManagedITServicesLeftImage pageIndex={3} /> */}
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
