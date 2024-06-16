import Image from "next/image";
import { useRouter } from "next/router";
import { Suspense } from "react";
import styles from "./singlePost.module.css";

type Params = {
  slug: string;
};

const post = {
  id: 1,
  title: "Post 1",
  body: "This is the body of post 1",
  img: "/post1.jpg",
  slug: "post-1",
  createdAt: "2021-08-01",
  desc: "This is the description of post 1",
};

const SinglePostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              {/* <PostUser userId={post.userId} /> */}
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
