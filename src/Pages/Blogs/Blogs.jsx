
import Blog_BlogInbox from "../../Components/Blog_BlogInbox/Blog_BlogInbox";
import Blogs_Cards from "../../Components/Blogs_Cards/Blogs_Cards";
import Blogs_Banner from "../../Components/Blogs_Component/Blogs_Banner";


const Blogs = () => {
    return (
        <div>
            <Blogs_Banner/>
            <Blogs_Cards/>
          <Blog_BlogInbox/>
        </div>
    );
};

export default Blogs;