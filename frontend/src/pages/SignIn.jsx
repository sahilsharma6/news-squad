import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [focusedInput, setFocusedInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const [confirmation, setConfirmation] = useState(""); //for future use to show confirmation message

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = (inputName) => {
    if (inputName === "email" && email === "") {
      setFocusedInput("");
    }
    if (inputName === "password" && password === "") {
      setFocusedInput("");
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/api/auth/signin", {
        email,
        password,
      });

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        setConfirmation({ status: "success" });
        alert("Sign In successfully, Redirecting...")
        navigateTo("/");
      } else {
        setConfirmation({ status: "fail", message: response.data.message });
      }

      setEmail("");
      setPassword("");
      setFocusedInput("");
    } catch (err) {
      setEmail("");
      setPassword("");
      setFocusedInput("");
      setConfirmation({
        status: "fail",
        message:
          err.response?.data?.message || "An error occurred. Please try again.",
      });

    
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center min-h-screen bg-gray-100">
      <div className="m-[5vw] w-full max-w-md p-8 space-y-10 bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-medium text-center">
          Sign In to NewsSquad
        </h2>

        <form onSubmit={handleSignInSubmit} className="space-y-4">
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              required
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              id="password"
              required
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              className={`block w-full mb-5 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-blue-600`}
            />
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-200 ${
                focusedInput === "password" || password
                  ? "-top-5 text-blue-500 text-sm"
                  : "top-3 text-gray-500"
              }`}
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
        {confirmation && confirmation.status === "fail" && (
          <p className="mt-4 text-sm text-center text-red-600">
            {confirmation.message}
          </p>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-lg text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
