"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import pablo_image from "@/public/assets/images/pablo-sign-in 1.svg";
import { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response Status:", response.status); // Log response status

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Login failed:", errorText); // Log error
        throw new Error(`Login failed: ${errorText || "Unknown error"}`);
      }

      // Handle successful login
      const data = await response.json();
      console.log("Login successful:", data);
      router.push("/dashboard/users"); // Redirect to your dashboard page
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-white px-4 sm:px-8">
      <div className="flex flex-col w-full max-w-6xl gap-8">
        {/* Logo at the top left */}
        <div className="flex justify-start pt-8">
          <Image src={ logo } alt="Lendsqr Logo" width={120} height={30} />
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col lg:flex-row gap-24 items-center lg:items-stretch bg-white overflow-hidden">
          {/* Left Side - Image Section */}
          <div className="hidden lg:flex lg:w-1/2 justify-center items-center bg-white">
            <Image
              src={pablo_image}
              alt="Lendsqr Illustration"
              className="max-w-full"
              width={700}
              height={700}
            />
          </div>

          {/* Right Side - Login Form Section */}
          <div className="w-full p-8 lg:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-primary text-3xl font-bold mb-2 text-left">
              Welcome!
            </h1>
            <p className="text-secondary mb-6 text-left">
              Enter details to login.
            </p>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Error Message */}
            <form className="w-full max-w-sm" onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className={clsx(
                    "w-full p-3 border rounded focus:outline-none",
                    "border-gray-300 focus:border-primary"
                  )}
                  required
                />
              </div>

              <div className="mb-4 relative">
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className={clsx(
                    "w-full p-3 border rounded focus:outline-none",
                    "border-gray-300 focus:border-primary"
                  )}
                  required
                />
                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="absolute right-3 top-3 text-teal font-semibold"
                  aria-label={showPassword ? "Hide password" : "Show password"} // Accessibility
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>

              <div className="text-right mb-6">
                <a href="#" className="text-teal hover:underline">
                  FORGOT PASSWORD?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading} // Disable button while loading
                className={clsx(
                  "w-full py-3 text-white font-bold rounded transition duration-200",
                  "bg-teal hover:bg-primary",
                  { "opacity-50 cursor-not-allowed": loading } // Style when loading
                )}
              >
                {loading ? "LOGGING IN..." : "LOG IN"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
