import React, { useState } from "react";
import { useCreatePost } from "@lens-protocol/react-web";

export function CreatePost({ owner, onSuccess }: { owner: string; onSuccess?: () => void }) {
    const { execute, loading, error } = useCreatePost();
    const [post, setPost] = useState<string>("");
    const [to, setTo] = useState<string>(owner);
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlZWIwMjNhZS0yZGU5LTRhMDEtYjU4Ni1kYmZkMDliNjVmYjkiLCJlbWFpbCI6ImJ1cmJpbmFnb21lekBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMTg4ZWJiNjYzYjFjOWY4YjdiNjEiLCJzY29wZWRLZXlTZWNyZXQiOiI0ZmM4NGEyYWI0ZTU2YWJjMmM3NzczZTg3ZWU4OGNkMDAyMDRhOGEyNDljOTc5NjBlODU2MTQ3ZmFlNzZhMGFmIiwiaWF0IjoxNzE2NDMyMjA2fQ.DTSv9LJ80kjM6-hVxY7qxAYLfrBeGMwKJDwRK80qT5M"

    const handleSubmit = async () => {
        try {
            const uri = await uploadToIpfs(metadata);
            const result = await execute({ 
                metadata: uri
             });
            if (onSuccess) onSuccess();
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <input
                type="text"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                placeholder="Post"
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Loading..." : "Sign Up"}
            </button>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}

