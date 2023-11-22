import type { APIRoute } from "astro"
import { prisma } from "../../../lib/prisma";

export const GET: APIRoute = async ({params, request}) => {

  const id = params.id || "0";

  const song = await prisma.song.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      album: true,
      artist: true
    }
  });

  return new Response(
    JSON.stringify(song),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}