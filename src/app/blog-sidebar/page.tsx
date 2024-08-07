import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import  "../../styles/index.css";
// Adjust the path acc

import { Metadata } from "next";
import { Brand } from "@/types/brand";

import brandsData from "@/components/Brands/brandsData";

export const metadata: Metadata = {
  title: "Styrone",
  description: "Services",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">

        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">

            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[800px] text-center lg:text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  IT Solutions with Unmatched Commitment.
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Discover Styrone, the new generation technology partner who understands your need for more speed and better value. Styrone has trained techies having decades of experience in Oracle solutions like JD Edwards, PeopleSoft and NetSuite, and Full Stack solutions.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">


                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <Image
                src="/images/bg2.png" // Replace with your image path
                alt="Hero Image"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <section className="video-block section bg-light centered-section">
          <div >
            <div >
              <div >
                <div className="flex flex-wrap items-center justify-center">
                  {brandsData.map((brand) => (
                    <div key={brand.id} className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                      <a
                        href={brand.href}
                        target="_blank"
                        rel="nofollow noreferrer"
                        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
                      >
                        <Image src={brand.imageLight} alt={brand.name} fill className="hidden " objectFit="contain" />
                        <Image src={brand.image} alt={brand.name} fill className="block " objectFit="contain" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="section" id="philosophy">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 img1">
                <Image
                  src="/images/jd.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 justified-cell">
                <h1>JD Edwards</h1>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Technical Consulting:</li>
                  <li>New Implementations and Upgrades</li>
                  <li>Interoperability, Collaboration and Interfaces</li>
                  <li>Application and Systems Development</li>
                </ul>
                <h5>World Software Support</h5>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  We have extensive experience in supporting World Software Clients. We have consultants with rich
                  World background experience with deep understanding of the AS/400 platform and its requirements.
                  They present a wealth of information when it comes to supporting the World software, Converting
                  to EnterpriseOne solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="philosophy">
          <div className="container">
            <div className="row">

              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                <h1>Oracle PeopleSoft</h1>
                <ul className="list-disc pl-5 space-y-2">
                  <li>PeopleSoft - Focus Areas</li>
                  <li>Human Capital Management</li>
                  <li>Financials and Supply Chain Management</li>
                  <li>Campus Solutions</li>
                  <li>Customer Relationship Management</li>
                  <li>Enterprise Performance Management</li>
                  <li>Enterprise Service Automation</li>
                  <li>PeopleTools</li>
                </ul>
                <h5>Support:</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Application Administration and Maintenance</li>
                  <li>Process Scheduling and Monitoring</li>
                  <li>L2 and L3 Production Support</li>
                </ul>
              </div>
              <div className="image-container">
                <Image
                  src="/images/people.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="philosophy">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 img1">
                <Image
                  src="/images/netsuit.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 justified-cell">
                <h1>NetSuite ERP</h1>
                <ul className="list-disc pl-5 space-y-2">
                  <li>NetSuite Implementation Services</li>
                  <li>NetSuite Consulting Services</li>
                  <li>NetSuite Integration Services</li>
                  <li>NetSuite Support Services</li>
                  <li>NetSuite Managed Services</li>
                </ul>
                <h5>What Styrone Offers</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cloud Migration & Optimization</li>
                  <li>Enhance your system with our expert NetSuite consulting</li>
                  <li>NetSuite implementation, support, administration</li>
                  <li>Report Customization, Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="philosophy">
          <div className="container">
            <div className="row">

              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                <h1>Full Stack Development</h1>
                <h5>Technologies:</h5>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl" ></p>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                React Native, Flutter, Node.js, PostgreSQL, GraphQL. Styrone brings front-end and back-end to create a high-performance app. Our team consists of core
                  contributors on various tech stacks who are skilled in building apps with great user experience.
                </p>
                <h5>Services:</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Web App Development</li>
                  <li>Mobile App Development</li>
                  <li>UI/UX Design & Development</li>
                </ul>
                <h5 >Why Build a Full Stack App for Your Business?</h5>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  In the digital era, staying relevant means delivering a good user experience. And the fastest
                  route to achieving it is through full-stack development.
                </p>
                <h5 >Why Styrone?</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Deep Expertise in Cutting-Edge Tech Stacks: in development frameworks such as React Native and Flutter</li>
                  <li>Impressive Track Record in Full Stack App Development: Our portfolio tells the story.</li>
                </ul>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Total Support: From conceptualization and development to post-launch support, our team will assist you
                  throughout the entire application development journey.
                </p>
              </div>
              <div className="image-container">
                <Image
                  src="/images/bg2.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="image"
                />
              </div>
            </div>
          </div>
        </section>



      </section>
    </>
  );
};

export default BlogSidebarPage;
