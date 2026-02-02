import { useState } from "react";
import CreatePost from "../components/CreatePost.jsx";
import PostCard from "../components/PostCard.jsx";

const initialPosts = [
  {
    id: 1,
    author: "Avery Chen",
    category: "Design",
    content: "Just wrapped the new onboarding flows. Feels great seeing the community respond!",
    likes: 128,
    comments: 14,
    createdAt: new Date()
  },
  {
    id: 2,
    author: "Jordan Lee",
    category: "Engineering",
    content: "Our realtime chat prototype is live for internal testing. Drop any feedback!",
    likes: 96,
    comments: 8,
    createdAt: new Date(Date.now() - 1000 * 60 * 45)
  }
];

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleCreate = ({ content, category }) => {
    const newPost = {
      id: posts.length + 1,
      author: "You",
      category,
      content,
      likes: 0,
      comments: 0,
      createdAt: new Date()
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Community pulse</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">
          Keep up with the latest conversations from your network.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Social Pulse helps you catch highlights, share updates, and build connections with people
          who care about your work.
        </p>
      </section>

      <CreatePost onCreate={handleCreate} />

      <section className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
};

export default Home;
