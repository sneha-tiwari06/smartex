import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

export default function ReadMore() {
  const [post, setPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/posts/${id}`
        );
        setPost(response.data);
        console.log("This is the post data:", response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    async function fetchRecentPosts() {
      try {
        const response = await axios.get(`http://localhost:8800/api/posts`);
        const activeRecentPosts = response.data.filter(post => post.active && post.id !== parseInt(id)).slice(0, 5);
        setRecentPosts(activeRecentPosts);
        console.log("This is the recent posts data:", activeRecentPosts);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    }

    fetchPost();
    fetchRecentPosts();
  }, [id]);

  const baseURL = 'http://localhost:3000/upload/';
  const url = `${baseURL}${post.img}`;

  return (
    <div className="Read1">
      <Navbar />
      <Nav2 />
      <div className="w-100 insiadebanner padding">
        <h5 style={{ textAlign: "center", fontSize: "2rem" }}>{post.title}</h5>
      </div>
      <div className="w-100 float-left bg-inside padding">
        <div className="container">
          <div className="row inside-blog justify-content-between">
            <div className="col-lg-8">
              <div className="blog-content mt-3">
                <h1 style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "16px" }}>
                    <img alt={post.title} src={url} />
                  </span>
                </h1>
                <p style={{ textAlign: "justify" }}>&nbsp;</p>
                <p style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.desc),
                  }}
                ></p>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="topRatedProjectShowcase mt-0">
                <div className="heading">
                  <h6 className="mb-0 text-green">Recent Posts</h6>
                </div>
                <div className="topRatedProjectsContainer">
                  {recentPosts.map((recentPost) => (
                    <div className="topRatedProjectBox" key={recentPost.id}>
                      <div className="inner">
                        <div className="img-fluid">
                          <img src={`${baseURL}${recentPost.img}`} alt={recentPost.title} />
                        </div>
                        <div className="boxDetails">
                          <Link to={`/posts/${recentPost.id}`}>{recentPost.title}</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
