import type { APIRoute } from "astro"
import { prisma } from "../../../lib/prisma";

export const GET: APIRoute = async ({params, request}) => {

  const artists = await prisma.artist.findMany();

  return new Response(
    JSON.stringify(artists),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}