import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link className="text-xl font-semibold text-white" to="/">
          Social Pulse
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-200">
          <Link className="hover:text-white" to="/">
            Home
          </Link>
          {user ? (
            <>
              <Link className="hover:text-white" to="/profile">
                Profile
              </Link>
              <button
                className="rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-wide text-slate-100 hover:border-slate-500"
                onClick={logout}
                type="button"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link className="hover:text-white" to="/login">
                Login
              </Link>
              <Link className="hover:text-white" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
