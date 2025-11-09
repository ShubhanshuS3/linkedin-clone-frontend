import React, { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const res = await API.get("/posts");
      setPosts(res.data);
    })();
  }, []);

  const addPost = (post) => setPosts((prev) => [post, ...prev]);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <h2>Welcome, {user?.name || "Guest"}</h2>
      {user && <CreatePost user={user} onPosted={addPost} />}
      {posts.map((p) => (
        <PostCard key={p._id} post={p} />
      ))}
    </div>
  );
}
