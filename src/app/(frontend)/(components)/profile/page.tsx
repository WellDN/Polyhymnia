"use client"
import { useAuth } from "@/app/context/authContext";
import Link from "next/link";

export default function Profile() {
  const { user } = useAuth();
  
  if (!user) {
      // return an error here if its not user redirect to registration path
      return <p>Please log in to view your profile.</p>;
  }
    return (
      <div>
        <Link href="/">Polyhymnia</Link>
        <h2>Your Profile</h2>
        <p>Email: {user.email}</p>
      </div>
    );
}
