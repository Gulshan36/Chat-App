import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-10 border border-white/20">
            {/* Header */}
            <div className="text-center mb-8 pt-6 pb-4 border-b border-gray-300/30">
              <h1 className="text-3xl font-bold text-white">Your Profile</h1>
              <p className="text-gray-300 mt-2">Manage your personal information and account details</p>
            </div>

            {/* Avatar Section */}
            <div className="flex flex-col items-center mb-10">
              <div className="relative group">
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover border-4 border-white/30 shadow-lg transition-transform group-hover:scale-105"
                />
                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-1 right-1 bg-indigo-600 p-3 rounded-full cursor-pointer 
                    hover:bg-indigo-700 transition-all duration-300 shadow-md
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                {isUpdatingProfile ? "Uploading..." : "Click the camera to update your photo"}
              </p>
            </div>

            {/* Profile and Account Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <i data-lucide="user" className="w-5 h-5 text-gray-300"></i>
                    <div>
                      <span className="text-sm text-gray-400">Full Name</span>
                      <p className="text-white font-medium">{authUser?.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <i data-lucide="mail" className="w-5 h-5 text-gray-300"></i>
                    <div>
                      <span className="text-sm text-gray-400">Email Address</span>
                      <p className="text-white font-medium">{authUser?.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Account Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm text-gray-400">Member Since</span>
                    <span className="text-white">{authUser.createdAt?.split("T")[0]}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm text-gray-400">Account Status</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center">
              <button
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md"
                onClick={() => alert("Edit profile functionality to be implemented")}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
  );
};
export default ProfilePage;