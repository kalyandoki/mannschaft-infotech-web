import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/netP1.jpg";
import hard2 from "../assets/mannInfra/netP2.jpg";
import hard3 from "../assets/mannInfra/netP3.jpg";
import hard4 from "../assets/mannInfra/netP4.jpg";
import hard5 from "../assets/mannInfra/netP5.jpg";
import ItInfraHeader from "../components/ItInfraHeader";

const tabData = [
  {
    tab1: "LAN",
    data: "We take care of all your Networking needs like Cabling, remote monitoring & Network Security issues. Choosing the right type of cabling for your needs, installing it properly and verifying compliance with required standards is one of the keys to getting the most out of your network and telecommunications INVESTMENT.",
    title: "NEW OFFICE SETUP",
    data2:
      "Design, Configure, Build & Integrate are the four key points we keep in mind before executing a solution. Handling data in the best manner means, less burden on business finances, as additional storage comes with additional cost. Our cabling engineers can quickly and affordably cable your new offices, network multiple locations, or simply add a single network or voice drop to your existing infrastructure.\nIT network setup consulting\nPABX system set-up\nCable installation and network system set-up\nInternet set-up\nVoice over Internet Proxy Direct Call Service (VOIP)\nVirtual Private Network (VPN) set-up",
    img2: hard1,
    title2: "DATA CENTER SETUP & MAINTENANCE",
    data3:
      "Mannschaft Infotech is experienced in both Local and Wide Area Network and Telecommunications cabling installation and service, and has the expertise to support all of your cabling requirements.\nWe design Data Center solutions to match your context.\nData Protection\nBackup & High Availability\nDisaster Recovery\nPower & Cooling\nNetworking & Communication\nNetwork Management & Automation\nIntelligent Structured cabling Solution\nRouting / Switching / Wireless Services",
    img3: hard2,
    reverse: false,
  },
  {
    tab2: "FIBER",
    data: "OFC Fiber cable network roll-out significantly complex activity involving outdoor locations and deployment of large amount of manpower and machines. Mannschaft Infotech holds immense expertise in offering Trenching and laying services in OFC Networks, managing end to end activities from designing, planning, executing, testing and handover.We have well experienced professionals they know how to implement Terrestrial and Aerial OFC links, whether in hard rock, soft soil, forest or hilly terrain.",
    title: "CABLE SPLICING SERVICES",
    data2:
      "Our clients can avail Cable Splicing Services from us,which are planned and executed by our skilled and dicated staff members. Our technicians utilize the best components and sophisticated technology machines in rendering these services.\nOur reasonably priced and authentic services are offered as per the diverse requirements and demands of the clients within the promised time frame.",
    img2: hard3,
    title2: "OFC NETWORK MAINTENANCE",
    data3:
      "As communication networks are developing towards all-optical networks. We offer complete solutions in terms of equipment’s installation, Fiber routing, Designing and Maintenance\nPatrolling is aimed at preventing cable disruptions along the OFC routes daily on fixed stretchPreventive and Corrective Maintenance is carried out as defined by the SLA / SOWAll fibers are tested for the block sections and reported every month\nAny defects in the fiber or in any of the associated equipment is attended to, in consultation with the Customer at site\nRepeater stations and the optical equipment installed for alarms are monitored\nBreakdown OFC Maintenance includes 24*7 mobilization of equipment and skilled manpower for fault identification and rectification\nTest link attributes like the splice loss/link loss after the rectification of fault are corrected\nDeployment of O&M teams to carry out Splicing and Termination of Optical Fiber Cable",
    img3: hard4,
    reverse: true,
  },
  {
    tab2: "WIRELESS",
    data: "Mannschaft infotech is an area leader in the design and installation of wireless networks. Typical wireless installations are implemented using either Point-to-Point Bridges or Wireless Access Points. Point-to-Point Wireless Bridges are typically used to connect remote facilities together. Whether the deployment is in a typical campus environment or corporate offices miles apart, Point-to-Point wireless technology can be a very cost-effective alternative to leased lines or trenching for new cable installations.",
    title: "Wireless Access",
    data2:
      "Wireless Access Points are used to facilitate wireless networking within an office environment. Wireless networking can be beneficial for roaming laptop or tablet users. There can also be great cost-savings in buildings that are extremely difficult to run network cabling.\nSite Walks & System Designs\nSystem Installations & Integrations\nSystem Expansions, Enhancements & Repairs\nNeutral Host/Enterprise/Over-The-Air Systems\nDAS/iDAS/oDAS\nSmall Cell Hub Sites\nHead End Room Build-Outs\nBDA Upgrades\nWi-Fi/Hot Spots/WLANs\nMuch More!",
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
