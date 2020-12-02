import graphql from 'graphql';
import Game from '../models/Game.js';
import GameGenero from '../models/GameGenero.js';

import ProductGroupType from './ProductGroupType.js';
import ProductType from './ProductType.js';

import FileUpload from '../models/FileUpload.js';
import FileUploadType from './FileUploadType.js';



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
                imageUrl: {type:GraphQLString},
                themeColor: {type:GraphQLString},
                description: {type: GraphQLString},
                filePath: {type: GraphQLString},
                gameGeneroId: {type: GraphQLID}
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
                imageUrl: {type:GraphQLString},
                themeColor: {type:GraphQLString},
                description: {type: GraphQLString},
                filePath: {type: GraphQLString},
                gameGeneroId: {type: GraphQLID}
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
        addGameGenero: {
            type: ProductGroupType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                const gameGenero = new GameGenero(args);
                return gameGenero.save();
            }
        },
        editGameGenero: {
            type: ProductGroupType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent, args){

                return GameGenero.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGameGenero: {
            type: ProductGroupType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return GameGenero.findByIdAndRemove(args.id);
            }
        },
        addFile: {
            type: FileUploadType,
            args: {
                name: {type: GraphQLString},
                path: {type: GraphQLString}
            },
            resolve(parent, args){
                const fileUpload = new FileUpload(args);
                return fileUpload.save();
            }
        }

    },

});

export default MutationType;