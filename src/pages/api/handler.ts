import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    body: 'Función Publicada en Vivo',
    query: request.query,
  });
}