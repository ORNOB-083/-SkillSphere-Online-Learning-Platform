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
        <div className="text-[#b79c8d] animate-pulse">Loading profile...</div>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#1a2438] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-[#4a3d34] bg-[#1a2438] p-8">
          <h1 className="text-3xl font-bold text-[#b79c8d] mb-6 text-center">
            My Profile
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#4a3d34]">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User Avatar"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#4a3d34] text-[#b79c8d]">
                  <BiUser className="w-12 h-12" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#b79c8d]">
                {user.name || "User"}
              </h2>
              <p className="text-[#8b756c]">{user.email}</p>
              <p className="text-sm text-[#8b756c] mt-1">
                Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/profile/update" className="w-full">
              <Button className="w-full bg-[#4a3d34] text-[#b79c8d] hover:bg-[#8b756c]">
                <BiEdit className="mr-2" />
                Update Profile
              </Button>
            </Link>
            
            <Button 
              onClick={async () => {
                await authClient.signOut();
                router.push('/signin');
              }}
              className="w-full border border-[#4a3d34] text-[#b79c8d] hover:bg-[#4a3d34]"
              variant="bordered"
            >
              Sign Out
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}