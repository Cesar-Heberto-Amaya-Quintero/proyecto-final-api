import graphql from 'graphql';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const FileType = new GraphQLObjectType({
    name: 'UploadsFiles',
    fields: ()=>({
        id: {type: GraphQLID},
        lenght: {type: GraphQLString},
        chunkSize: {type: GraphQLString},
        uploadDate: {type: GraphQLString},
        filename: {type: GraphQLString},
        md5: {type: GraphQLString},
        contentType: {type: GraphQLString}
        })
});

export default FileType;