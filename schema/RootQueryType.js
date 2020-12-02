import graphql from 'graphql';

import Game from '../models/Game.js';
import GameGenero from '../models/GameGenero.js';
//import PicsDemos from '../models/PicsDemos.js';


import ProductGroupType from './ProductGroupType.js';
import ProductType from './ProductType.js';
//import PicsDemosType from './PicsDemosType.js';

import FileUpload from '../models/FileUpload.js';
import FileUploadType from './FileUploadType.js';





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
        filesuploads: {
            type: new GraphQLList(FileUploadType),
            resolve(parent, args){
                return FileUpload.find();
            }
        }
        /*picsdemos: {
            type: new GraphQLList(PicsDemosType),
            resolve(parent, args)
            {
                return PicsDemos.find();
            }
        }*/

    }   
});

export default RootQueryType;