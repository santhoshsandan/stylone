//contact page title and description is here and contact page navigation link is here 

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="contact us for any queries"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
