import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
      link
        authors
        image
        description
        title
      }
    }
  }
`;

// https://graphql.org/learn/queries/
