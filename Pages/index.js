import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-80">
        <h1 className="text-2xl font-bold text-primary mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="w-full bg-primary text-white py-2 rounded">
            Login
          </button>
        </form>
        <p
          className="text-sm text-center mt-4 text-blue-600 cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          Don’t have an account? Sign up
        </p>
      </div>
    </div>
  );
}