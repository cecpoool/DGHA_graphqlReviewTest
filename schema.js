import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User{
        userID:ID
        username: String
        email: String
    }

    input UserInput{
        id:ID
        username: String
        email: String
    }

    type Mutation{
        createUser(input:UserInput):User
        createBusiness(input:BusinessInput):Business
        createReview(input:ReviewInput):Review
    }

    type Query{
        getUser(userID: ID): User
        getBus(BusID: ID): Business
        getRev(RevID: ID): Review
    }

    type Business{
        busID:ID
        name: String
        address: String
        rating: Int
    }

    input BusinessInput{
        name: String
        address: String
        rating: Int
    }

    type Review{
        reviewID: ID
        user: String
        business: String
        accessibility: Int
        dogAccess: Int
        otherStuff: Int
        freeTextReview: String
    }

    
    input ReviewInput{
        user: String
        business: String
        accessibility: Int
        dogAccess: Int
        otherStuff: Int
        freeTextReview: String
    }

`);

export default schema;
