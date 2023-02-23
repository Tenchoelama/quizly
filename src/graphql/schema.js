// Import required info from graphql
const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const mutations = require('./mutations')

// Import queries
const queries = require('./queries')

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'This type holds all of my queries',
    fields: queries
})

// Define MutationType
const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'This type holds all of my mutations',
    fields: mutations
})

// add mutation to exports
module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

