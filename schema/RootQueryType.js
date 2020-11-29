import graphql from 'graphql';

import Game from '../models/Game.js';
import GameGenero from '../models/GameGenero.js';
import UploadsFiles from '../models/UploadsFiles.js';
import User from '../models/User.js';
import Address from '../models/Address.js';
import picsdemo from '../models/picsdemo.js';

import ProductGroupType from './ProductGroupType.js';
import ProductType from './ProductType.js';
import FileType from './FileType.js';
import UserType from './UserType.js';
import AddressType from './AddressType.js';
import picsdemoType from './picsdemoType.js';

import OrderType from './OrderType.js';
import Order from '../models/Order.js';


const {GraphQLID, GraphQLObjectType, GraphQLList} = graphql;


const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        //Obtener un producto por id
        game: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Game.findById(args.id);
            }
        },
        //Obrtener la lista de productos
        games: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Game.find();
            }
        },
        getGamesByGroupId:{
            type: new GraphQLList(ProductType),
            args: {groupId: {type: GraphQLID}},
            resolve(parent, args){
                return Game.find({productGroupId: args.groupId});
            }
        },
        gameGenero: {
            type: ProductGroupType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return GameGenero.findById(args.id);
            }
        },
        gameGeneros: {
            type: new GraphQLList(ProductGroupType),
            resolve(parent, args){
                return GameGenero.find();
            }
        },
        file: {
            type: FileType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return UploadsFiles.findById(args.id);
            }
        },
        files: {
            type: new GraphQLList(FileType),
            args: {groupId: {type: GraphQLID}},
            resolve(parent, args){
                return UploadsFiles.find();
            }
        },

        //users
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find();
            }
        },
        //addresses
        addresses: {
            type: new GraphQLList(AddressType),
            resolve(parent, args){
                return Address.find();
            }
        },
        //orders
        order: {
            type: OrderType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Order.findById(args.id);
            }
        },
        orders: {
            type: new GraphQLList(OrderType),
            resolve(parent, args){
                return Order.find();
            }
        }
    }   
});

export default RootQueryType;