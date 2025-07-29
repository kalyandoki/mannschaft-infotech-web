import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

import Tabs from "../components/Tabs";

import hard1 from "../assets/mannInfra/ss11.jpg";
import hard2 from "../assets/mannInfra/ss22.webp";
import hard3 from "../assets/mannInfra/ss33.webp";
import hard4 from "../assets/mannInfra/ss44.webp";
import hard5 from "../assets/mannInfra/ss55.jpg";
import hard6 from "../assets/mannInfra/ss66.png";
import hard7 from "../assets/mannInfra/ss77.jpg";
import hard8 from "../assets/mannInfra/ss88.jpg";
import hard9 from "../assets/mannInfra/ss99.jpg";

const tabData = [
  {
    tab1: "BIOMETRIC",
    data: "",
    title: "🧬 BIOMETRIC",
    data2: `Smart Identity Verification for Secure Access
Fingerprint, Face & Iris Recognition: Accurate and quick identification.
Eliminates Password Hassles: No need for cards or codes—just biometric traits.
Highly Secure: Prevents unauthorized access with individual authentication.
Attendance Management: Efficient tracking of employee in/out timings.
Integration Ready: Works seamlessly with access control systems.`,
    img2: hard1,
    reverse: true,
  },
  {
    tab2: "ACCESS CONTROL",
    data: "",
    title: "🔐 ACCESS CONTROL",
    data2: `Controlled Entry Systems for Secure Premises
Role-Based Access: Grant specific access based on user roles or time schedules.
Card, PIN, or Biometric Options: Flexible authentication methods.
Real-Time Monitoring: Track and log who enters and exits.
Remote Access Management: Control entry from a central dashboard.
Visitor Management Support: Easily manage temporary access for guests.`,
    img2: hard2,
    reverse: false,
  },
  {
    tab1: "CCTV",
    data: "",
    title: "📹 Smart CCTV Surveillance for 24/7 Protection",
    data2: `Live Monitoring & Playback: Watch real-time activity or access recorded footage anytime.
HD & Infrared Night Vision: Crystal-clear visibility in both daylight and darkness.
Instant Motion Alerts: Get notified immediately on suspicious or unauthorized movements.
Flexible Storage Options: Save recordings locally or on the cloud based on your needs.
Preventive Security: Strong visual deterrent against theft and vandalism.`,
    img2: hard4,
    title2: "🛡️ Advanced Video Surveillance You Can Trust",
    data3: `Round-the-Clock Monitoring: Full-time surveillance for homes, offices, and commercial spaces.
Smart Camera Technology: Equipped with motion sensors and night vision.
Real-Time Notifications: Stay informed with app or SMS alerts when activity is detected.
Secure Storage: Archive footage safely with local DVR/NVR or encrypted cloud storage.
Boosted Safety: Helps enforce accountability and reduce security risks.`,
    img3: hard3,
    reverse: false,
  },
  {
    tab2: "FIRE ALARM",
    data: "",
    title: "🚨 FIRE ALARM",
    data2: `Early Fire Detection for Life and Property Safety
Smoke & Heat Sensors: Detect fire hazards instantly.
Instant Alerts & Sirens: Notifies building occupants and control centers.
24x7 Monitoring: Continuous protection even during off-hours.
Compliance with Safety Standards: Meets regulatory fire safety codes.
System Integration: Connects with sprinklers, emergency exits, and alarms.`,
    img2: hard5,
    reverse: true,
  },
  {
    tab1: "GPS",
    data: "",
    title: "🚗 Vehicle Tracking System",
    data2: `Real-Time Fleet Visibility and Smart Management
Live Location Tracking: Monitor your vehicles in real-time from any device.
Route Optimization: Analyze routes to reduce fuel usage and travel time.
Geo-Fencing Alerts: Get notified when a vehicle enters or exits predefined zones.
Driver Behavior Monitoring: Track speed, harsh braking, and idle time for safety and performance.
Trip History Reports: Detailed logs for compliance, auditing, and planning.
Fuel Monitoring: Reduce fuel theft and improve mileage efficiency.
Mobile & Web Dashboard: Access data anytime via a user-friendly interface.
24/7 Monitoring: Ensure full visibility of your fleet around the clock.`,
    img2: hard6,
    title2: "⛽ Fuel Level Monitoring",
    data3: `Accurate Fuel Insights to Control Costs and Prevent Theft
Real-Time Fuel Tracking: Monitor fuel levels live from any location.
Theft Detection Alerts: Instantly detect sudden drops or unauthorized siphoning.
Fuel Refill Records: Log every refuel event with time, date, and location.
Consumption Analysis: Get detailed reports on usage per trip or driver.
Dashboard Integration: View all fuel data on a centralized platform.
Optimized Fleet Efficiency: Helps reduce fuel waste and increase mileage.
Compatible with GPS Systems: Combine with vehicle tracking for full visibility.
Custom Alerts & Notifications: Get SMS or app alerts for low fuel or unusual activity.`,
    img3: hard7,
    title3: "🧍‍♂️ Personal Tracking Solution",
    data4: `Stay Connected. Stay Safe. Anytime, Anywhere.
Real-Time Location Monitoring: Track individuals live via mobile or wearable devices.
Geo-Fencing Alerts: Set safe zones and get notified if someone moves beyond limits.
SOS/Emergency Button: Instantly alert emergency contacts in case of danger.
History Playback: View location history and movement over specific dates.
Compact & Wearable Devices: Lightweight and easy-to-carry for daily use.
Battery & Connectivity Alerts: Get notified for low battery or signal loss.
Ideal for: Kids, senior citizens, field employees, lone workers, and VIPs.
Mobile App & Dashboard Access: Monitor from your phone or control center in real-time.`,
    img4: hard8,
    title4: "🚚 Fleet Management",
    data5: `Complete Control & Visibility Over Your Vehicle Operations
Real-Time Vehicle Tracking: Monitor the exact location and movement of all fleet vehicles.
Driver Behavior Monitoring: Track speed, braking, idle time, and driving patterns for safety and performance.
Fuel Management: Optimize fuel consumption and detect theft with fuel level monitoring.
Maintenance Alerts: Get automatic reminders for servicing, inspections, and repairs.
Route Optimization: Plan the most efficient routes to reduce travel time and fuel costs.
Trip & Activity Reports: Detailed analytics for trips, deliveries, halts, and distance covered.
Geo-Fencing & Alerts: Define virtual zones and receive alerts on entry or exit.
Centralized Dashboard: One-stop platform to monitor and manage your entire fleet.`,
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
