import { ApolloServer, gql } from 'apollo-server'

import './config'
import './db'
import { schema } from './api/schema'

const server = new ApolloServer({ schema })

server.listen({ port: 3000 }).then(({ url }) => {
	console.log('\x1b[35m', `🚀 Subscription server ws://localhost:3000/graphql`)
})