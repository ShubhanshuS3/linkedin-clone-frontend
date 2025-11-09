import React, { useState } from "react";
import API from "../services/api";

export default function CreatePost({ user, onPosted }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    const res = await API.post("/posts", { content, authorName: user.name });
    onPosted(res.data);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}
