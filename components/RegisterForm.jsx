"use client"; // This tells Next.js that this component will run on the client-side

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !password || !email) {
            setError("All fields are necessary.");
            return;
        }
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
            } else {
                console.log("User registration failed");
            }
        } catch (error) {
            console.log("Error during registration", error);
        }
    };

    return (
        <div className="grid place-items-center mt-20">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-600">
                <h1 className="text-2xl font-bold my-4">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2">
                        Register
                    </button>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}
                    <Link className="text-sm mt-1 mb-1 text-right" href="/">
                        Already have an account? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
