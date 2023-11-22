import type { APIRoute } from "astro"
import { prisma } from "../../../lib/prisma";

export const GET: APIRoute = async ({params, request}) => {

  const id = params.id || "0";

  const album = await prisma.album.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      artist: true,
      song: true
    }
  });

  return new Response(
    JSON.stringify(album),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}