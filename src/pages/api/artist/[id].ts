import type { APIRoute } from "astro"
import { prisma } from "../../../lib/prisma";

export const GET: APIRoute = async ({params, request}) => {

  const id = params.id;

  const artist = await prisma.artist.findFirst({
    where: {
      id: parseInt(id!)
    }
  });

  return new Response(
    JSON.stringify(artist),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}