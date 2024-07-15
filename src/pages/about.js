import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../public/profileImage.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import { Details, AboutDetails } from "@/components/AboutDetails";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  //framer motion hooks
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Grace Reed | A Bit About Me</title>
        <meta title="A Bit About Me" content="About Page" />
      </Head>
      <main className="flex  w-full  flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="A Bit About Me" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">paragrah 1</p>
              <p className="my-4 font-medium">another paragrah</p>
              <p className="font-medium">another paragrah</p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-lightBlue p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-mediumBlue" />
              <Image
                src={profileImage}
                alt="Grace Reed"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <AboutDetails
            sectionName="Experience"
            details={[
              <div>
                <Details
                  title={"Frontend Developer"}
                  organization={"Abra"}
                  companyLink={"https://www.abra.io/"}
                  location={"Orlando, FL (Remote)"}
                  time={"February 2022 - July 2024"}
                  width={60}
                  details={[
                    "- Contributed to development of 3 web portals; Admin, self-service, and talent portal. This included the creation, maintenance and addition of new features.",
                    "- Contributed to the creation and maintenance of new features within the mobile app for iOS and Android using Flutter.",
                    "- Fully created and developed Abra’s in-house UI library by creating reusable components, resulting in significant time and cost savings.",
                    "- Proven ability to quickly adapt to new technologies and leverage them to achieve project goals.",
                  ]}
                />
                <Details
                  title={"Systems Analyst / Developer"}
                  organization={"Shyft6"}
                  companyLink={"https://www.shyft6.com/"}
                  location={"Orlando, FL (Remote)"}
                  time={"November 2021 - February 2022"}
                  width={60}
                  details={[
                    "- Improved internal hiring and onboarding processes by adding automation tasks within with Zoho Recruit and Zoho People.",
                    "- Created and developed COVID Tracking application used to track vaccination status for 300+ contract workers using deluge scripting and Zoho Creator.",
                    "- Gained experience with Zoho Books and Zoho CRM by implementing integrations with other platforms used within the business.",
                  ]}
                />
                <Details
                  title={"MSP Onsite Coordinator"}
                  organization={"Shyft6"}
                  companyLink={"https://www.shyft6.com/"}
                  location={"Denton, Texas"}
                  time={"August - November 2021"}
                  width={60}
                  details={[
                    "- Coordinated with the program manager and 4 additional staffing agencies to onboard contracted employees.",
                    "- Facilitated implementation of onboarding checklist to streamline the process, ensuring a consistent and efficient experience for all new hires. Involved first-day orientation, building tours, workstation setup, and integration into team workflows and backend admin processes.",
                    "- Prepared, maintained, and updated employee schedules, monitored time tracking, and managed approvals for time off requests through the 'When I Work' staffing software for 300+ contractors.",
                  ]}
                />
                <Details
                  title={"Compliance Specialist"}
                  organization={"HealthTrackRX"}
                  companyLink={"https://www.healthtrackrx.com/"}
                  location={"Denton, TX"}
                  time={"January - August 2021"}
                  width={60}
                  details={[
                    "- Conducted thorough federal and state sanction screenings, reviewed and verified match validity for all employees, vendors, and providers, significantly reducing company risk.",
                    "- Prepared, distributed, and prominently displayed compliance materials in high-traffic areas of the facility, ensuring widespread awareness and adherence to regulations. ",
                    "- Performed continuous compliance monitoring activities, contributing to the identification, implementation, and maintenance of the organization’s comprehensive compliance program.",
                  ]}
                />
                <Details
                  title={"Executive Administrative Assistant"}
                  organization={"HealthTrackRX"}
                  companyLink={"https://www.healthtrackrx.com/"}
                  location={"Denton, TX"}
                  time={"March 2020 - January 2021"}
                  width={60}
                  details={[
                    "- Managed calendars, travel arrangements, and additional daily administrative tasks for the C-Suite.",
                    "- Oversaw the organization, planning, and logistics of 2 national sales training meetings for a growing sales team of 50+ sales representatives.",
                    "- Expedited the implementation of Brainshark sales training with the Chief Sales Officer and the Chief of Commercial Operations for a team of 50+ sales representatives.",
                  ]}
                />
                <Details
                  title={"Medical Receptionist"}
                  organization={"W.B. Carrell Memorial Clinic"}
                  companyLink={"https://www.carrellclinic.com/"}
                  location={"Frisco, TX"}
                  time={"September 2019 - February 2020"}
                  width={60}
                  details={[
                    "- Responsible for the revenue cycle for clinic and physical therapy patients, comprehending all types of insurances to properly bill and charge patients at the time of service depending on their deductibles, coinsurance rates, copayments, and self-pay rates.",
                    "- Guided the daily operations for a 3 physician and 3 physical therapist office, optimizing patient workflow to ensure an efficient clinic with an average of 100 patients per day.",
                    "- Managed patient schedules for 3 physical therapists to maximize volume while enhancing patient care and satisfaction.",
                  ]}
                />
              </div>,
            ]}
          />
          <AboutDetails
            sectionName="Education"
            details={[
              <div>
                <Details
                  title={"Certificate, Full Stack Web Development"}
                  organization={"Southern Methodist University"}
                  location={"Dallas, TX"}
                  time={"2020-2021"}
                  width={60}
                  details={[
                    "- 12 Week full time FullStack Web Development course.",
                  ]}
                />
                <Details
                  title={"Bachelor of Science in Health Studies"}
                  organization={"Texas Woman's University"}
                  location={"Denton, TX"}
                  time={"2017-2019"}
                  width={60}
                  details={["- Graduated Suma Cum Laude."]}
                />
                <Details
                  title={"General Courses"}
                  organization={"Benedictine College"}
                  location={"Atchinson, KS"}
                  time={"2015-2017"}
                  width={60}
                  details={[
                    " - Studied Abroad in Florance, Italy, spring semester of 2016.",
                  ]}
                />
              </div>,
            ]}
          />
        </Layout>
      </main>
    </>
  );
};

export default about;
