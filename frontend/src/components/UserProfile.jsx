import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pencil, User, X } from "lucide-react"; 
import apiClient from "@/services/apiClient";
import { ToastProvider } from "@radix-ui/react-toast";
import { toast } from "@/hooks/use-toast";

function EditForm({username, email, phone,setUser,user,setIsEditing}) {
  const [focusedInput, setFocusedInput] = useState("");
 const handleUpdateSubmit=(e)=>{
  e.preventDefault()
    const updateUserProfile = async () => {
      try {
        const response = await apiClient.put("/user/profile", {
          username: user.username,
          email:user.email,
         phone:user. phone,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
          });
        
        console.log(response.data);
        setIsEditing(false)
        toast({
          title: "Profile Updated",
          description: "Your profile has been updated successfully.",
        })
        
        // setUser(response.data);
      } catch (error) {
        console.error("Error updating user profile:", error);
      }
    };
    updateUserProfile();
 }
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = (inputName) => {
    if (inputName === "username" && username === "") {
      setFocusedInput("");
    }
    if (inputName === "email" && email === "") {
      setFocusedInput("");
    }
    if (inputName === "phone" && phone === "") {
      setFocusedInput("");
    }
  };
  console.log(user);
  
  return (
    <form onSubmit={handleUpdateSubmit} className="space-y-4">
    <div className="relative mb-4">
      <input
        type="text"
        id="username"
        required
        placeholder=" "
        value={username}
        onChange={(e) =>setUser({...user, username: e.target.value})}
        onFocus={() => handleFocus("username")}
        onBlur={() => handleBlur("username")}
        className={`block mb-6 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-blue-500`}
      />
      <label
        htmlFor="username"
        className={`absolute left-4 transition-all duration-200 ${
          focusedInput === "username" || username
            ? "-top-4 text-blue-500 text-xs"
            : "top-3 text-gray-500"
        }`}
      >
        Username
      </label>
    </div>

    <div className="relative mb-4">
      <input
        type="email"
        id="email"
        required
        placeholder=" "
        value={email}
        onChange={(e) =>  setUser({...user, email: e.target.value})}
        onFocus={() => handleFocus("email")}
        onBlur={() => handleBlur("email")}
        className={`block mb-6 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-blue-500`}
      />
      <label
        htmlFor="email"
        className={`absolute left-4 transition-all duration-200 ${
          focusedInput === "email" || email
            ? "-top-4 text-blue-500 text-xs"
            : "top-3 text-gray-500"
        }`}
      >
        Email
      </label>
    </div>

    <div className="relative mb-4">
      <input
        type="text"
        id="phone"
        required
        placeholder=" "
        value={phone}
        onChange={(e) => setUser({...user, phone: e.target.value})} 
        onFocus={() => handleFocus("phone")}
        onBlur={() => handleBlur("phone")}
        className={`block mb-6 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-blue-500`}
      />
      <label
        htmlFor="phone"
        className={`absolute left-4 transition-all duration-200 ${
          focusedInput === "phone" || phone
            ? "-top-4 text-blue-500 text-xs"
            : "top-3 text-gray-500"
        }`}
      >
        Phone Number
      </label>
    </div>

    <button
      type="submit"
      className="w-full py-2 mt-4 text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Update
    </button>
    
  </form>
  )
}
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing,setIsEditing]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await apiClient.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load user profile.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-black">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <ToastProvider >
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            <span className="material-icons-outlined"></span>
            <ArrowLeft />
          </button>
          <h1 className="text-3xl font-semibold">User Profile</h1>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-600">
            <User />
          </div>
          {!isEditing? <Pencil className="hover:bg-slate-200 w-8 h-8 p-2 cursor-pointer rounded-lg transition-all delay-75"onClick={()=>setIsEditing(true)} /> : <X className="hover:bg-slate-200 w-8 h-8 p-2 cursor-pointer rounded-lg transition-all delay-75"onClick={()=>setIsEditing(false)} />}
        </div>

      {!isEditing ?  <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Username:</span>
            <span className="text-gray-600">{user.username}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Phone Number:</span>
            <span className="text-gray-600">{user.phone || "Not provided"}</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="font-medium text-gray-700">Role:</span>
            <span className="text-gray-600">{user.role}</span>
          </div> */}
        </div> : <EditForm user={user} username={user.username} phone={user.phone} setUser={setUser} email={user.email} setIsEditing={setIsEditing}/>
}
      </div>
    </div></ToastProvider>
  );
};

export default UserProfile;
