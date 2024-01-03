import { forwardRef, useCallback, useRef, useState } from "react";
import { useApi } from "../hooks/useApi";

export default function InfiniteScroll() {
  const [page, setPage] = useState(1);
  const { isLoading, results, hasNextPage } = useApi(page);

  const intObserver = useRef();

  const lastPostObs = useCallback(
    (post) => {
      console.log(isLoading, 222222, post);
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();
      console.log(intObserver.current, 11111111, isLoading);

      intObserver.current = new IntersectionObserver(([entry]) => {
        console.log(entry);
        if (entry.isIntersecting && hasNextPage) {
          setPage((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  const content = results.map((res, i) => {
    if (results.length === i + 1) {
      console.log("last post");
      return <Post key={res.id} postContent={res} ref={lastPostObs} />;
    }

    return <Post key={res.id} postContent={res} />;
  });

  return (
    <div>
      <h2>Infinite Scroll</h2>
      {content}
      {isLoading && <h2>Loading |||||||||||| </h2>}
    </div>
  );
}

const Post = forwardRef(function ({ postContent }, ref) {
  const content = (
    <>
      <h2>{postContent.title}</h2>
      <p>{postContent.id}</p>
    </>
  );

  const article = ref ? (
    <article ref={ref}>{content}</article>
  ) : (
    <article>{content}</article>
  );

  return article;
});
