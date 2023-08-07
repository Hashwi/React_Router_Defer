import { useLoaderData, defer, Await } from "react-router-dom";

import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";
import { Suspense } from "react";

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>

      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading Blog Posts.</p>}>

            {(loadedPosts)=> <Posts blogPosts={loadedPosts}/>}
          </Await>
      </Suspense>
      {/* <Posts blogPosts={loaderData} /> */}
    </>
  );
}

export default DeferredBlogPostsPage;

export async function loader() {
  return defer({ posts: getSlowPosts() });
}
