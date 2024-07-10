import Blog_BlogInbox from "../../Components/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "../../Components/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "../../Components/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "../../Components/Latest_Blogs";


const Single_Blog = () => {
    return (
        <div>
            <BlogSingle_Banner/>
            <BlogSingle/>
            <Blog_BlogInbox/>
            <Latest_Blogs/>
        </div>
    );
};

export default Single_Blog;