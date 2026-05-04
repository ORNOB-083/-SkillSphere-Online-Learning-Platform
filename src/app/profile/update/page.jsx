"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "lucide-react";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        console.error("Update failed:", error);
        alert("Update failed: " + error.message);
      } else {
        router.push('/profile');
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("An error occurred while updating.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a2438] flex items-center justify-center">
        <div className="text-[#b79c8d] animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#1a2438] py-12 px-4">
      <div className="max-w-md mx-auto">
        <Card className="border border-[#4a3d34] bg-[#1a2438] p-8">
          <h1 className="text-3xl font-bold text-[#b79c8d] mb-6 text-center">
            Update Profile
          </h1>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text" defaultValue={user.name || ""}>
              <Label className="text-[#b79c8d]">Full Name</Label>
              <Input
                placeholder="Enter your full name"
                className="bg-[#4a3d34] text-[#b79c8d] border-[#8b756c] focus:border-[#b79c8d]"
              />
              <FieldError className="text-red-400" />
            </TextField>

            <TextField isRequired name="image" type="text" defaultValue={user.image || ""}>
              <Label className="text-[#b79c8d]">Profile Image URL</Label>
              <Input
                placeholder="Enter the URL of your profile image"
                className="bg-[#4a3d34] text-[#b79c8d] border-[#8b756c] focus:border-[#b79c8d]"
              />
              <FieldError className="text-red-400" />
            </TextField>

            <div className="flex gap-2 mt-2">
              <Button
                type="submit"
                className="flex-1 bg-[#b79c8d] text-[#1a2438] hover:bg-[#8b756c]"
                disabled={updating}
              >
                <Check className="mr-2 h-4 w-4" />
                {updating ? "Updating..." : "Update Information"}
              </Button>
              <Button
                type="button"
                onClick={() => router.push('/profile')}
                variant="bordered"
                className="border-[#4a3d34] text-[#b79c8d] hover:bg-[#4a3d34]"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}