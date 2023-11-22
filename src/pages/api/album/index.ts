import type { APIRoute } from "astro"
import { prisma } from "../../../lib/prisma";

export const GET: APIRoute = async ({params, request}) => {

  const albums = await prisma.album.findMany({
    include: {
      artist: true,
      song: true
    }
  });

  return new Response(
    JSON.stringify(albums),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}