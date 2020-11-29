import graphql from 'graphql';
import ProductGroupType from './ProductGroupType.js';
import GameGenero from '../models/GameGenero.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const picsdemoType = new GraphQLObjectType({
    name: 'picsdemo',
    fields: ()=>({
        id: {type: GraphQLID},
        picpath: {type: GraphQLString}
    })
});

export default picsdemoType;
