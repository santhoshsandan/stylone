// Importing the Image component from Next.js for optimized image loading
import Image from "next/image";

// Importing the Link component from Next.js for client-side navigation
import Link from "next/link";

// Defining the RelatedPost component, which displays a related blog post with its image, title, and date
// The component takes in props: image, slug, title, and date, all of which are strings
const RelatedPost = ({
  image,  // Path to the related post's image
  slug,   // URL path to the related post
  title,  // Title of the related post
  date,   // Date of the related post
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    // Main container with responsive flexbox layout that changes based on screen size
    <div className="flex items-center lg:block xl:flex">
      {/* Container for the image with margin adjustments for different screen sizes */}
      <div className="mr-5 lg:mb-3 xl:mb-0">
        {/* Wrapper for the image with specific height, width, and border radius */}
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          {/* Rendering the image using the Next.js Image component, with the fill prop to cover the container */}
          <Image src={image} alt={title} fill />
        </div>
      </div>
      {/* Container for the title and date */}
      <div className="w-full">
        {/* Title of the related post, wrapped in a Link component for navigation */}
        <h5>
          <Link
            href={slug}  // Linking to the post using the slug prop
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary" // Styling for the title with hover effects
          >
            {title}
          </Link>
        </h5>
        {/* Displaying the date of the related post with additional styling */}
        <p className="text-xs font-medium text-body-color">{date}</p>
      </div>
    </div>
  );
};

// Exporting the RelatedPost component as the default export
export default RelatedPost;
