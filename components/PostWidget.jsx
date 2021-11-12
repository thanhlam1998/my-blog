// @ts-nocheck
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import Link from "next/link";
import Image from "next/image"
import moment from "moment";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, []);

  return (
    <div className="bg-white shadow-l rounded-lg p-8 mb-8 shadow-md">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post?.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              src={post.featuredImagePost.url}
              alt={post.title}
              className="align-middle rounded-full"
              width="60px"
              height="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link key={post.title} href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
