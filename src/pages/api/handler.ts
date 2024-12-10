import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    body: 'Nueva función como Servicio - La virtualización es genial!!! v1 (en español)',
    query: request.query,
  });
}