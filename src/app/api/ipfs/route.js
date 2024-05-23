// pages/api/uploadToIPFS.js
import { uploadToIPFS } from "@pinata/sdk";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const pinataApiKey = process.env.PINATA_API_KEY;
    const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;

    if (!pinataApiKey || !pinataSecretApiKey) {
      return res.status(500).json({ error: "Pinata API keys not provided" });
    }

    const pinata = create(pinataApiKey, pinataSecretApiKey);

    try {
      const { body } = req;
      const result = await pinata.pinJSONToIPFS(body);
      return res.status(200).json({ uri: result. });
    } catch (error) {
      return res.status(500).json({ error: "Error uploading to IPFS" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
