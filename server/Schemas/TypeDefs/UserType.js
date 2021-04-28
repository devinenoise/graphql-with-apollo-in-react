const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');


// defining the type definition
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

module.exports = UserType;
