// Importing necessary modules and types
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

// SingleBlog component: Displays an individual blog post with its title, image, summary, author, tags, and publish date.
const SingleBlog = ({ blog }: { blog: Blog }) => {
  // Destructuring the blog properties for easier access
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <>
      {/* Blog post container with hover effects and dark mode support */}
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        {/* Link to the blog details page, wrapping the blog image */}
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          {/* Tag displayed in the top-right corner of the blog image */}
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          {/* Blog image */}
          <Image src={image} alt="image" fill />
        </Link>
        {/* Blog content: title, summary, author, and publish date */}
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          {/* Blog title with a link to the blog details page */}
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          {/* Blog summary paragraph */}
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          {/* Author information and publish date */}
          <div className="flex items-center">
            {/* Author details: image, name, and designation */}
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                {/* Author's profile picture */}
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              {/* Author's name and designation */}
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            {/* Publish date of the blog post */}
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Exporting the SingleBlog component as the default export
export default SingleBlog;
