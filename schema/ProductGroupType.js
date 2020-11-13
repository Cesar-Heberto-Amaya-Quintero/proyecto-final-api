import graphql from 'graphql';
import ProductType from './ProductType.js';
import Game from '../models/Game.js';

const {GraphQLID, GraphQLString, GraphQLObjectType, GraphQLList} = graphql;


const GameGeneroType = new GraphQLObjectType({
    name: 'GameGenero',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        games: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Game.find({gameGeneroId: parent.id});
            }
        }
    })
});

export default GameGeneroType;