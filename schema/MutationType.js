import graphql from 'graphql';
import Game from '../models/Game.js';
import ProductGroup from '../models/ProductGroup.js';

import ProductGroupType from './ProductGroupType.js';
import ProductType from './ProductType.js';
import UserType from './UserType.js';
import AddressType from './AddressType.js';
import User from '../models/User.js';
import Address from '../models/Address.js';
import OrderType from './OrderType.js';
import Order from '../models/Order.js';
import SaleType from './SaleType.js';
import Sale from '../models/Sale.js';

const {GraphQLID, GraphQLString, GraphQLFloat,GraphQLObjectType} = graphql;


const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //Game
        addGame: {
            type: ProductType,
            args: {
                name: {type: GraphQLString},
                author: {type: GraphQLString},
                genero: {type: GraphQLString},
                imageUrl: {type:GraphQLString},
                themeColor: {type:GraphQLString},
                description: {type: GraphQLString},
                productGroupId: {type: GraphQLID}
            },
            resolve(parent, args){
                let game = new Game(args);
                return game.save();
            }
        },
        editGame: {
            type: ProductType,
            args:{
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                author: {type: GraphQLString},
                genero: {type: GraphQLString},
                imageUrl: {type:GraphQLString},
                themeColor: {type:GraphQLString},
                description: {type: GraphQLString},
                productGroupId: {type: GraphQLID}
            },
            resolve(parent, args){

                return Game.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGame: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Game.findByIdAndRemove(args.id);
            }
        },
        //Game group
        addProductGroup: {
            type: ProductGroupType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                const productGroup = new ProductGroup(args);
                return productGroup.save();
            }
        },
        editProductGroup: {
            type: ProductGroupType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent, args){

                return ProductGroup.findByIdAndUpdate(args.id, args);
            }
        },
        deleteProductGroup: {
            type: ProductGroupType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return ProductGroup.findByIdAndRemove(args.id);
            }
        },
        //User
        addUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                secondName: {type: GraphQLString},
                phoneNumber: {type: GraphQLString},
                birthDay: {type: GraphQLString},
                email: {type: GraphQLString},
                addressId: {type: GraphQLID}
            },
            resolve(parent, args){
                const user = new User(args);
                return user.save();
            }
        },
        //Address
        addAddress: {
            type: AddressType,
            args: {
                streetName: {type: GraphQLString},
                city: {type: GraphQLString},
                cpNumber: {type: GraphQLString},
                userId: {type: GraphQLID}
            },
            resolve(parent, args){
                const address = new Address(args);
                return address.save();
            }
        },
        //orders
        addOrder: {
            type: OrderType,
            args:{userId: {type: GraphQLID}},
            resolve(parent, args){
                const order = new Order(args);
                return order.save();
            }
        },
        //sales
        addSales: {
            type: SaleType,
            args: {
                productId: {type: GraphQLID},
                orderId: {type: GraphQLID},
                timeStamp: {type: GraphQLString}
            },
            resolve(parent, args){
                const sale = new Sale(args);
                return sale.save();
            }
        }
    }
});

export default MutationType;