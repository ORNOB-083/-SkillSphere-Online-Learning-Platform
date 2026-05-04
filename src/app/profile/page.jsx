"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export default function ProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await authClient.getSession();
        if (error || !data) {
          router.push('/signin');
          return;
        }
        setSession(data);
      } catch (error) {
        console.error("Session check failed:", error);
        router.push('/signin');
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a2438] flex items-center justify-center">
        <div className="text-[#b79c8d] animate-pulse flex flex-col items-center gap-2">
          <div className="w-12 h-12 border-4 border-[#b79c8d] border-t-transparent rounded-full animate-spin"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#1a2438] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-[#4a3d34] bg-[#1a2438] p-8 sm:p-10 shadow-xl">
          <div className="text-center mb-10 relative">
            <h1 className="text-4xl p-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b79c8d] to-[#4a3d34]">
              My Profile
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b79c8d] to-[#4a3d34] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 mb-10">

            <div className="relative">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#b79c8d]/50 shadow-lg shadow-[#b79c8d]/10">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User Avatar"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#4a3d34] text-[#b79c8d]">
                    <BiUser className="w-16 h-16" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#b79c8d] mb-2">
                {user.name || "User"}
              </h2>
              <p className="text-[#8b756c] text-lg">{user.email}</p>
              <p className="text-sm text-[#8b756c] mt-3 inline-block px-3 py-1 rounded-full border border-[#4a3d34]">
                Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/profile/update" className="w-full sm:w-auto">
              <Button 
                className="w-full bg-[#b79c8d] text-[#1a2438] hover:bg-[#8b756c] hover:scale-105 transition-transform duration-200 font-semibold text-lg px-8 py-6"
                startContent={<BiEdit className="text-xl" />}
              >
                Update Profile
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}