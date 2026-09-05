import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { getCurrentUser, logout } from "../../../services/auth";
function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const data = await getCurrentUser();
      setUser(data);
      setLoading(false);
    }

    loadUser();
  }, []);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await logout();
      window.location.href = "/";
    } catch {
      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <div className="text-gray-500">
        Loading account...
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold">
        Account
      </h2>

      <div className="mt-6 rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm">
        <div>
          <p className="text-sm text-gray-500">
            Username
          </p>

          <p className="mt-1 text-lg font-semibold">
            {user?.username}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">
            Email
          </p>

          <p className="mt-1 text-lg font-semibold">
            {user?.email}
          </p>
        </div>

        <div className="mt-6 border-t border-black/10 pt-6">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <LogOut className="h-5 w-5" />
            {loggingOut ? "Logging out..." : "Log out"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;