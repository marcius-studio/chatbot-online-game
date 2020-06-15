import Vue from 'vue'
import VueApollo from 'vue-apollo'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SubscriptionClient } from 'subscriptions-transport-ws';

// Install the vue plugin
Vue.use(VueApollo)

const GRAPHQL_ENDPOINT = (process.env.NODE_ENV == 'production') ? 'wss://chatbot.marcius.co/api' : 'ws://localhost:3000/graphql'

const link = new SubscriptionClient(GRAPHQL_ENDPOINT, {
	reconnect: true,
})

export const apolloClient = new ApolloClient({
	link,
	cache: new InMemoryCache(),
})


export const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})