import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    body: 'Nueva función lambda - FaaS is great!',
    query: request.query,
  });
}