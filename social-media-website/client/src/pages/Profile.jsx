import { useAuth } from "../context/AuthContext.jsx";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col px-6 py-12">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Profile</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">{user?.name ?? "Guest"}</h1>
        <p className="mt-2 text-sm text-slate-300">{user?.email ?? "guest@socialpulse.dev"}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { label: "Followers", value: "1.2k" },
            { label: "Following", value: "318" },
            { label: "Posts", value: "48" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Profile;
