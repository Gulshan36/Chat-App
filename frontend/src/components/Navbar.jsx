import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Bell } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide hidden sm:inline">Chatty</span>
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-1">
            {authUser && (
              <>
                {/* Notification Icon */}
                <button className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <Bell className="w-5 h-5 text-gray-300" />
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-xs text-white rounded-full px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center">3</span>
                </button>

                {/* Profile */}
                <Link
                  to="/profile"
                  className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <User className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                {/* Settings */}
                <Link
                  to="/settings"
                  className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <Settings className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>

                {/* Avatar */}
                <Link to="/profile" className="ml-2">
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="avatar"
                    className="w-9 h-9 rounded-full border-2 border-emerald-500 shadow-lg hover:border-emerald-400 transition-colors"
                  />
                </Link>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-colors ml-2"
                >
                  <LogOut className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}

            {!authUser && (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;