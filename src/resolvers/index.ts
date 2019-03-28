import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { AuthPayload } from './AuthPayload'
import { Post } from './Post'

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  Post,
  Subscription,
  AuthPayload,
}
