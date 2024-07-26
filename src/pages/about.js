import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import secondaryProfileImage from "../../public/secondaryProfileImage.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import { Details, AboutDetails } from "@/components/AboutDetails";
import TransitionEffect from "@/components/TransitionEffect";

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

  return <span ref={ref} className="dark:text-light sm:text-5xl"></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Grace Butler | A Bit About Me</title>
        <meta title="A Bit About Me" content="About Page" />
      </Head>
      <TransitionEffect/>
      <main className="flex  w-full  flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8"
            text="A Bit About Me"
          />
          <div className="grid w-full grid-cols-8 gap-16  dark:text-light sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light  sm:text-md">
                Professional Background
              </h2>
              <p className="font-medium  sm:text-base">
                My journey in began with a solid educational foundation in
                Health Studies from Texas Woman’s University, where I graduated
                summa cum laude in 2019. This academic background instilled in
                me a strong analytical mindset and an appreciation for
                meticulous problem-solving.
              </p>
              <p className="my-4 font-medium  sm:text-base">
                Starting out as an Executive Administrative Assistant at
                HealthTrackRx, I developed essential organizational and
                coordination skills by managing executive schedules and
                organizing major training events. This role taught me the value
                of attention to detail and adaptability, which became crucial as
                I transitioned into the role of Compliance Specialist. There, I
                focused on compliance monitoring and risk reduction, further
                enhancing my analytical and process-oriented skills.
              </p>
              <p className="mb-4 font-medium  sm:text-base">
                {" "}
                To pivot into tech, I completed a Certificate in Full Stack Web
                Development from Southern Methodist University in 2020, marking
                the start of my career in web development.
              </p>
              <p className="mb-4 font-medium  sm:text-base">
                I moved into a more technical role at Shyft6 as a Systems
                Analyst/Developer. I was able to apply my growing tech skills to
                automate processes and develop applications using Zoho tools.
                This role deepened my understanding of project management and
                technology application in business contexts. My subsequent
                position as a Frontend Developer at Abra allowed me to fully
                immerse myself in web technologies. Utilizing React, Material
                UI, and Vite, I built and maintained web portals, developed an
                in-house UI library, and managed CI/CD pipelines. This
                experience was pivotal in showcasing my ability to thrive in a
                dynamic startup environment and apply technical knowledge to
                create impactful solutions.
              </p>
              <p className="font-medium  sm:text-base">
                I offer a unique blend of technical proficiency and real-world
                experience, having worked extensively with HTML, CSS,
                JavaScript, and modern frameworks like React and Flutter. My
                diverse background has equipped me with a versatile skill set
                and a proactive approach to problem-solving. I am now excited to
                leverage my experience and skills in a new role where I can
                continue to grow, contribute to innovative projects, and take on
                fresh challenges. I am actively seeking opportunities that will
                allow me to further develop my career and make a meaningful
                impact.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-pink-300 p-8 dark:bg-lightBlue xl:hidden">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-pink-700 dark:bg-mediumBlue" />
              <Image
                src={secondaryProfileImage}
                alt="Grace Butler"
                className="w-full h-auto rounded-2xl items-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start  xl:flex-row xl:col-span-full sm:flex-col">
              <div className=" flex-col relative items-start justify-center rounded-2xl border-2 border-solid border-dark bg-pink-300 p-8 dark:bg-lightBlue hidden
               xl:flex xl:mr-20  xl:w-full">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-pink-700 dark:bg-mediumBlue " />
                <Image
                  src={secondaryProfileImage}
                  alt="Grace Butler"
                  className="w-full h-auto rounded-2xl items-center "
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="xl:flex xl:flex-col sm:flex-row sm:justify-between sm:mt-4">
                <div className="flex flex-col items-start justify-center mb-[10em] xl:w-1/2 sm:mb-0 sm:mx-3">
                  <span className="inline-block text-7xl font-bold dark:text-light  sm:text-5xl">
                    <AnimatedNumbers value={6} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light sm:text-wrap  ">
                    Projects Completed
                  </h2>
                </div>
                <div className="flex flex-col items-start justify-center   sm:mb-0 sm:mx-3 sm:pt-3">
                  <span className="inline-block text-7xl font-bold dark:text-light sm:text-5xl ">
                    <AnimatedNumbers value={3} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light sm:text-wrap">
                    Years of Experience
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Skills />
          <div>
            <AboutDetails
              sectionName="Experience"
              details={[
                <div key="experience">
                  <Details
                    for={"experience"}
                    title={"Frontend Developer"}
                    organization={"Abra"}
                    companyLink={"https://www.abra.io/"}
                    location={"Orlando, FL (Remote)"}
                    time={"February 2022 - July 2024"}
                    details={[
                      // "- Contributed to development of 3 web portals; Admin, self-service, and talent portal. This included the creation, maintenance and addition of new features.",
                      // "- Contributed to the creation and maintenance of new features within the mobile app for iOS and Android using Flutter.",
                      // "- Fully created and developed Abra’s in-house UI library by creating reusable components, resulting in significant time and cost savings.",
                      // "- Proven ability to quickly adapt to new technologies and leverage them to achieve project goals.",
                      "- Utilized React and Material UI to create dynamic and responsive user interfaces for 3 web portals: Admin Portal, Self Service Portal, and Talent Portal. Collaborated with a designer to translate Figma designs into functional and aesthetically pleasing web components to improve user satisfaction and engagement in a fast-paced startup environment.",
                      "- Optimized development and build processes by leveraging Vite to streamline development workflows and achieve faster build times across all three portals. Ensured efficient and scalable codebases, enhancing performance and maintainability.",
                      "- Managed CI/CD deployment pipelines by ensuring the configurations for all portals were functional and efficient, focusing on deploying applications to multiple environments, via Azure DevOps. Guaranteed reliable and consistent delivery of updates and new features.",
                      "- Fully created and developed Abra’s in-house UI library by designing reusable components, resulting in significant time and cost savings across multiple projects, a critical efficiency for a growing startup.",
                      "- Contributed to the creation and maintenance of new features within the Abra mobile app for iOS and Android using Flutter, improving user experience and application performance.",
                    ]}
                  />
                  <Details
                    for={"experience"}
                    title={"Systems Analyst / Developer"}
                    organization={"Shyft6"}
                    companyLink={"https://www.shyft6.com/"}
                    location={"Orlando, FL (Remote)"}
                    time={"November 2021 - February 2022"}
                    details={[
                      "- Improved internal hiring and onboarding processes by adding automation tasks within with Zoho Recruit and Zoho People.",
                      "- Created and developed COVID Tracking application used to track vaccination status for 300+ contract workers using deluge scripting and Zoho Creator.",
                      "- Gained experience with Zoho Books and Zoho CRM by implementing integrations with other platforms used within the business.",
                    ]}
                  />
                  <Details
                    for={"experience"}
                    title={"MSP Onsite Coordinator"}
                    organization={"Shyft6"}
                    companyLink={"https://www.shyft6.com/"}
                    location={"Denton, Texas"}
                    time={"August - November 2021"}
                    details={[
                      "- Coordinated with the program manager and 4 additional staffing agencies to onboard contracted employees.",
                      "- Facilitated implementation of onboarding checklist to streamline the process, ensuring a consistent and efficient experience for all new hires. Involved first-day orientation, building tours, workstation setup, and integration into team workflows and backend admin processes.",
                      "- Prepared, maintained, and updated employee schedules, monitored time tracking, and managed approvals for time off requests through the 'When I Work' staffing software for 300+ contractors.",
                    ]}
                  />
                  <Details
                    for={"experience"}
                    title={"Compliance Specialist"}
                    organization={"HealthTrackRX"}
                    companyLink={"https://www.healthtrackrx.com/"}
                    location={"Denton, TX"}
                    time={"January - August 2021"}
                    details={[
                      "- Conducted thorough federal and state sanction screenings, reviewed and verified match validity for all employees, vendors, and providers, significantly reducing company risk.",
                      "- Prepared, distributed, and prominently displayed compliance materials in high-traffic areas of the facility, ensuring widespread awareness and adherence to regulations. ",
                      "- Performed continuous compliance monitoring activities, contributing to the identification, implementation, and maintenance of the organization’s comprehensive compliance program.",
                    ]}
                  />
                  <Details
                    for={"experience"}
                    title={"Executive Administrative Assistant"}
                    organization={"HealthTrackRX"}
                    companyLink={"https://www.healthtrackrx.com/"}
                    location={"Denton, TX"}
                    time={"March 2020 - January 2021"}
                    details={[
                      "- Managed calendars, travel arrangements, and additional daily administrative tasks for the C-Suite.",
                      "- Oversaw the organization, planning, and logistics of 2 national sales training meetings for a growing sales team of 50+ sales representatives.",
                      "- Expedited the implementation of Brainshark sales training with the Chief Sales Officer and the Chief of Commercial Operations for a team of 50+ sales representatives.",
                    ]}
                  />
                  <Details
                    for={"experience"}
                    title={"Medical Receptionist"}
                    organization={"W.B. Carrell Memorial Clinic"}
                    companyLink={"https://www.carrellclinic.com/"}
                    location={"Frisco, TX"}
                    time={"September 2019 - February 2020"}
                    details={[
                      "- Responsible for the revenue cycle for clinic and physical therapy patients, comprehending all types of insurances to properly bill and charge patients at the time of service depending on their deductibles, coinsurance rates, copayments, and self-pay rates.",
                      "- Guided the daily operations for a 3 physician and 3 physical therapist office, optimizing patient workflow to ensure an efficient clinic with an average of 100 patients per day.",
                      "- Managed patient schedules for 3 physical therapists to maximize volume while enhancing patient care and satisfaction.",
                    ]}
                  />
                </div>,
              ]}
            />
          </div>
          <AboutDetails
            sectionName="Education"
            details={[
              <div key={"education"}>
                <Details
                  for={"education"}
                  title={"Certificate, Full Stack Web Development"}
                  organization={"Southern Methodist University"}
                  location={"Dallas, TX"}
                  time={"2020-2021"}
                  details={[
                    "- 12 Week full time FullStack Web Development course.",
                  ]}
                />
                <Details
                  for={"education"}
                  title={"Bachelor of Science in Health Studies"}
                  organization={"Texas Woman's University"}
                  location={"Denton, TX"}
                  time={"2017-2019"}
                  details={["- Graduated Suma Cum Laude."]}
                />
                <Details
                  for={"education"}
                  title={"Benedictine College - General Courses"}
                  organization={"Benedictine College"}
                  location={"Atchinson, KS"}
                  time={"2015-2017"}
                  details={[
                    "- Studied Abroad in Florance, Italy, spring semester of 2016.",
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
