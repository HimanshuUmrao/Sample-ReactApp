import gql from 'graphql-tag';

export const USER_LIST= gql`
query{
    users{
        firstName,
        lastName,
        userName,
        email
    }
}`;


export const SIGN_UP = gql`
mutation signup($input: signup){
    signup(input: $input)
}`