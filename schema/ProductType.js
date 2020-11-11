import graphql from 'graphql';
import ProductGroupType from './ProductGroupType.js';
import ProductGroup from '../models/ProductGroup.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Game',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        author: {type: GraphQLString},
        genero: {type: GraphQLString},
        imageUrl: {type: GraphQLString},
        themeColor: {type: GraphQLString},
        description:{type: GraphQLString},
        productGroup: {
            type: ProductGroupType,
            resolve(parent, args){
                return ProductGroup.findById(parent.productGroupId);
            }
        }
    })
});

export default ProductType;
