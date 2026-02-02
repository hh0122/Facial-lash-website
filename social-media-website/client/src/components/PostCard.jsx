import { formatDate } from "../utils/formatDate.js";

const PostCard = ({ post }) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{post.author}</h3>
          <p className="text-xs text-slate-400">{formatDate(post.createdAt)}</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
          {post.category}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-200">{post.content}</p>
      <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
        <span>❤️ {post.likes} likes</span>
        <span>💬 {post.comments} comments</span>
      </div>
    </article>
  );
};

export default PostCard;
