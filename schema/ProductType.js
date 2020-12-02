import graphql from 'graphql';
import ProductGroupType from './ProductGroupType.js';
import GameGenero from '../models/GameGenero.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Game',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        author: {type: GraphQLString},
        imageUrl: {type: GraphQLString},
        themeColor: {type: GraphQLString},
        description:{type: GraphQLString},
        filePath: {type: GraphQLString},
        gameGenero: {
            type: ProductGroupType,
            resolve(parent, args){
                return GameGenero.findById(parent.gameGeneroId);
            }
        }
    })
});

export default ProductType;
