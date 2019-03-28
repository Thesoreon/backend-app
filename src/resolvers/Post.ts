import { PostResolvers } from 'src/generated/graphqlgen'

export const Post: Partial<PostResolvers.Type> = {
  votes(_parent, _args, ctx) {
    return ctx.prisma.votes({
      where: {
        post: {
          id: _parent.id,
        },
      },
    })
  },
}
