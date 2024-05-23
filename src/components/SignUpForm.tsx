
import React, { useState } from "react";
import { useCreateProfile } from "@lens-protocol/react-web";

export function SignUpForm({ owner, onSuccess }: { owner: string; onSuccess?: () => void }) {
    const { execute, loading, error } = useCreateProfile();
    const [localName, setLocalName] = useState<string>("");
    const [to, setTo] = useState<string>(owner);

    const handleSubmit = async () => {
        try {
            const result = await execute({ localName, to });
            if (onSuccess) onSuccess();
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <input
                type="text"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                placeholder="Local Name"
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Loading..." : "Sign Up"}
            </button>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}

