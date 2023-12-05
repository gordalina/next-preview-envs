const { prisma } = await import("@/lib/prisma");

export const dynamic = "force-dynamic";

export async function GET(_request) {
  return Response.json(await prisma.todo.findMany());
}
