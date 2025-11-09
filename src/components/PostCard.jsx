export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px 0", padding: "10px" }}>
      <strong>{post.authorName}</strong>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}
