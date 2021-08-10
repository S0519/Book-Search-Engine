import gql from 'graphql-tag';

export const GET_USER = gql`
  {
    me {
      _id
			bookCount
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