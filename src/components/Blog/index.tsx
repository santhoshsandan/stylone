// Importing the SectionTitle component for rendering the section's title and subtitle
import SectionTitle from "../Common/SectionTitle";

// Importing the SingleBlog component for rendering individual blog entries
import SingleBlog from "./SingleBlog";

// Importing the blogData array, which contains data for each blog post
import blogData from "./blogData";

// Defining a functional component for the Blog section
const Blog = () => {
  return (
    // Defining a section for the blog, with padding on the top and bottom for different screen sizes, and background colors that change based on the theme
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        {/* Rendering the section title and subtitle using the SectionTitle component, with the title and paragraph text */}
        <SectionTitle
          title="We’ve Done Lot’s of Work, Let’s Check Some From Here"
          paragraph="We have the best experts to elevate your business to the next level, try us and you will see! We have the best experts to elevate your business."
          center // Centers the text within the SectionTitle component
        />

        {/* Creating a grid layout for the blog posts, with responsive gaps and column settings for different screen sizes */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {/* Mapping over the blogData array to render each blog post */}
          {blogData.map((blog) => (
            // Defining a div for each blog post with full width
            <div key={blog.id} className="w-full">
              {/* Rendering each blog post using the SingleBlog component and passing the blog data as a prop */}
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the Blog component as the default export
export default Blog;
