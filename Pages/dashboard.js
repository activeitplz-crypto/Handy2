import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/");
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h1 className="text-2xl font-bold text-primary">Welcome!</h1>
        {user && (
          <p className="mt-2 text-lg">
            Hello, <span className="font-semibold">{user.user_metadata.name}</span>
          </p>
        )}
      </div>
    </div>
  );
}