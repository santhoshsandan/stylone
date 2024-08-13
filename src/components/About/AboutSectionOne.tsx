// Importing the Next.js Image component for optimized image rendering
import Image from "next/image";

// Importing a custom SectionTitle component for displaying section titles and subtitles
import SectionTitle from "../Common/SectionTitle";

// Defining an SVG icon component for a checkmark
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// Functional component for the About section of the page
const AboutSectionOne = () => {
  // Defining a List component that renders a list item with an icon and text
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      {/* Wrapping the checkIcon in a styled span for layout and styling */}
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {/* Displaying the text passed as a prop */}
      {text}
    </p>
  );

  return (
    // Defining a section for the "About" part of the webpage
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {/* Adding a bottom border and padding to the section */}
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          {/* Creating a flex container to align child elements */}
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Defining a div that takes up full width on small screens and half width on large screens */}
            <div className="w-full px-4 lg:w-1/2">
              {/* Rendering the SectionTitle component with a title, paragraph, and bottom margin */}
              <SectionTitle
                title="We are a 10 year old organization that excels on,"
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                mb="44px"
              />

              {/* Adding a margin-bottom and a max-width to the div, with an animation delay */}
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                {/* Creating a flex container for the list items */}
                <div className="mx-[-12px] flex flex-wrap">
                  {/* Defining a div for the first column of list items */}
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Oracle JD Edwards" />
                    <List text="Oracle PeopleSoft" />
                    <List text="Oracle NetSuite" />
                    <List text="Full stack development" />
                  </div>

                  {/* The second column is commented out for now */}
                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Defining a div for the image section, taking up full width on small screens and half width on large screens */}
            <div className="w-full px-4 lg:w-1/2">
              {/* Wrapping the image in a relative container with specific aspect ratio and max width */}
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                {/* Rendering the Image component for the light theme */}
                <Image
                  src="/images/bg2.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                {/* Rendering the Image component for the dark theme */}
                <Image
                  src="/images/bg2.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the AboutSectionOne component as the default export
export default AboutSectionOne;
