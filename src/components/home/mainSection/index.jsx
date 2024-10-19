import React from "react";
import Header from "./header";
import Post from "./post";
import PostCard from "./postCard";

const MainContent = () => {
  return (
    <>
      <Header />
      <div className="h-[92vh] overflow-y-scroll " style={{scrollbarWidth:"none"}}>
        <Post />
        {Array?.from({ length: 5 }).map((_, i) => (
          <PostCard />
        ))}
      </div>
    </>
  );
};

export default MainContent;
