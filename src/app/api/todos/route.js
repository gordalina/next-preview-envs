const { prisma } = await import("@/lib/prisma");

export const dynamic = "force-dynamic";

export async function GET(_request) {
  const todos = await prisma.todo.findMany({
    where: {
      hide: false,
    },
  });

  return Response.json(todos);
}
