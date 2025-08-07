import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";

const BenefitItem = ({ text }) => (
  <ul className="flex items-start gap-3">
    <li className="text-sm md:text-sm text-[#5F6567] font-medium leading-relaxed">
      • {text}
    </li>
  </ul>
);

const ManagedITBenefits = ({ pageIndex }) => {
  const { infraPagesData } = useAppContext();
  const page = infraPagesData[pageIndex];

  return (
    <section className="bg-[#F5F5F5] py-10 px-4 md:px-10 2xl:px-20 font-sans">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === Left Text Content === */}
        <div>
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-[#111218] mb-6 border-b-4 border-[#DEE0FF] inline-block pb-2">
            Benefits of Managed IT Services Provided by Tecnologia
          </h2>

          <div className="space-y-4 text-[#5F6567] mb-2 text-base 2xl:text-lg">
            <p>
              Are you busy putting out IT fires instead of focusing on your core
              business? If your technology is draining resources rather than
              optimizing them, Netsurit can get you back on track.
            </p>
            <p className="font-semibold text-[#121315]">
              A professionally managed services provider can give you the
              decisive edge to:
            </p>
          </div>

          <div className="space-y-2 mb-10 text-base 2xl:text-lg">
            <BenefitItem text="Grow your business while our experts handle your technology." />
            <BenefitItem text="Get more done with information technology that increases productivity and efficiency." />
            <BenefitItem text="Eliminate budgeting surprises with a flat monthly rate for comprehensive IT coverage." />
            <BenefitItem text="Protect your business and your data from unexpected problems and unwanted intruders." />
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-[#242627] text-base 2xl:text-lg">
            <div className="space-y-2">
              <h4 className="text-xl 2xl:text-2xl font-semibold text-[#101011] flex items-center">
                <AiOutlineCheckCircle className="text-[#dfe0e8] bg-[#010ED0] rounded-full mr-2" />
                IT Service for You
              </h4>
              <p>
                We know that every businesses’ needs are completely different
                from the next, so we offer packages for any business size or
                budget.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg 2xl:text-xl font-semibold text-[#101011] flex items-center">
                <AiOutlineCheckCircle className="text-[#dfe0e8] bg-[#010ED0] rounded-full mr-2" />
                Keeping Your Team Productive
              </h4>
              <p>
                Our managed services include round-the-clock monitoring of your
                key infrastructure, computers and network servers.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg 2xl:text-xl font-semibold text-[#101011] flex items-center">
                <AiOutlineCheckCircle className="text-[#dfe0e8] bg-[#010ED0] rounded-full mr-2" />
                Predictable Costs 24/7
              </h4>
              <p>
                We don’t charge you more when your network is down or a server
                fails. Our flat-rate fee programs cover all of that whenever you
                need it done.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg 2xl:text-xl font-bold text-[#101011] flex items-center">
                <AiOutlineCheckCircle className="text-[#dfe0e8] bg-[#010ED0] rounded-full mr-2" />
                Our Team is Ready to Help
              </h4>
              <p>
                Part of what makes our managed services so exceptional is that
                we are always available, regardless of time or holiday.
              </p>
            </div>
          </div>
        </div>

        {/* === Right Side Image === */}
        <div className="w-full h-full flex flex-column items-center justify-center">
          <img
            src={page.img2}
            alt="Managed IT Services"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover 2xl:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ManagedITBenefits;
