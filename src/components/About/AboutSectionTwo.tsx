// Importing the Next.js Image component for optimized image handling
import Image from "next/image";

// Defining a functional component for the second About section
const AboutSectionTwo = () => {
  return (
    // Defining a section with padding on the top and bottom for different screen sizes
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Creating a flex container to align child elements, with negative margin to adjust spacing */}
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* Defining a div that takes up full width on small screens and half width on large screens */}
          <div className="w-full px-4 lg:w-1/2">
            {/* Adding a relative container for the image, centered on small screens and aligned on larger ones */}
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Displaying the image for the light theme using Next.js Image component */}
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              {/* Displaying the image for the dark theme using Next.js Image component */}
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Defining a div for the text content, taking up full width on small screens and half width on large screens */}
          <div className="w-full px-4 lg:w-1/2">
            {/* Setting a maximum width for the text container */}
            <div className="max-w-[470px]">
              {/* Defining a container for the heading and introductory paragraph */}
              <div className="mb-9">
                {/* Adding a heading with responsive text size and styling for different screen sizes */}
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  We have a development centre in Bengaluru, India and office in USA to ensure proximity to your business needs. We are able to fully bring you the cost advantage as also the assurance of responsiveness.
                </h3>
                {/* Adding a paragraph with responsive text size and line height for better readability */}
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are focused on the MSME organizations that appreciate value in their IT project spends. We bring the following strengths:
                </p>
              </div>

              {/* Creating a flex container for the list items */}
              <div className="mx-[-12px] flex flex-wrap">
                {/* Defining a div for the unordered list, taking up full width on small screens and half width on large screens */}
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  {/* Adding a bulleted list with spacing between items */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Exhaustive technical expertise</li>
                    <li>Wide domain knowledge</li>
                    <li>Proven process</li>
                    <li>Long time industry presence</li>
                    <li>Established customer experience models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the AboutSectionTwo component as the default export
export default AboutSectionTwo;
