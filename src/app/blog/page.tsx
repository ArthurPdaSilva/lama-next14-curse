import PostCard from "@/components/PostCard";
import styles from "./blog.module.css";

const Blog = async () => {
  // title: string;
  //   body: string;
  //   img: string;
  //   slug: string;
  //   createdAt: string;
  const posts = [
    {
      id: 1,
      title: "Post 1",
      body: "This is the body of post 1",
      img: "/post1.jpg",
      slug: "post-1",
      createdAt: "2021-08-01",
    },
    {
      id: 2,
      title: "Post 2",
      body: "This is the body of post 2",
      img: "/post2.jpg",
      slug: "post-2",
      createdAt: "2021-08-02",
    },
    {
      id: 3,
      title: "Post 3",
      body: "This is the body of post 3",
      img: "/post3.jpg",
      slug: "post-3",
      createdAt: "2021-08-03",
    },
  ];

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
