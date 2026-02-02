import { useState } from "react";

const CreatePost = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content.trim()) return;
    onCreate({ content, category });
    setContent("");
  };

  return (
    <form
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Create a post</h2>
        <select
          className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-200"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option>General</option>
          <option>Design</option>
          <option>Product</option>
          <option>Engineering</option>
        </select>
      </div>
      <textarea
        className="mt-4 min-h-[120px] w-full rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none"
        placeholder="Share something with your community..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <div className="mt-4 flex items-center justify-end">
        <button
          className="rounded-full bg-indigo-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-indigo-400"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
