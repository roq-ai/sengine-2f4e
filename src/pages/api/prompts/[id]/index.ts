import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { promptValidationSchema } from 'validationSchema/prompts';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.prompt
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getPromptById();
    case 'PUT':
      return updatePromptById();
    case 'DELETE':
      return deletePromptById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPromptById() {
    const data = await prisma.prompt.findFirst(convertQueryToPrismaUtil(req.query, 'prompt'));
    return res.status(200).json(data);
  }

  async function updatePromptById() {
    await promptValidationSchema.validate(req.body);
    const data = await prisma.prompt.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deletePromptById() {
    const data = await prisma.prompt.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
