//there is tiltle and description of the about page and section of the about page is mentioned here

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-8">  {/* Adjust the padding value as needed */}
      <Breadcrumb
        pageName="About"
        description="Styrone Inc is an ISO:9000 company in the Oracle Partner Network. We are a 10 year old organization that excels on:"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </div>
  );
};

export default AboutPage;
