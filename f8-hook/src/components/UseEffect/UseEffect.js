import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const UserEffect = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div style={{ margin: 20 }}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          style={tab === type ? { color: "white", background: "black" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserEffect;
