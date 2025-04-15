import { createContext, useContext, useState } from "react";

// const { useEffect, useState, createContext } = require("react");
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 1) CREATING CONTEXT
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually
  // be displayed

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
        onAddPost: handleAddPost,
        createRandomPost: createRandomPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function UsePost() {
  const context = useContext(PostContext);
  return context;
}

export { UsePost, PostProvider };
