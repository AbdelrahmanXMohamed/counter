import { gql } from "apollo-boost";
export const GET_COUNT = gql`
  query {
    count
  }
`;
export const INCREMENT = gql`
  mutation {
    increment
  }
`;
