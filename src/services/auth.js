import { useMutation, gql } from '@apollo/client';

const MUTATION_LOGIN_OR_CREATE_USER = gql`
  mutation {
    loginOrCreateUser(data: { username: "alireza" }) {
      token
      user {
        id
      }
    }
  }
`;

const loginOrCreateUser = () => {
  console.log('call query');
  return useMutation(MUTATION_LOGIN_OR_CREATE_USER, {
    enabled: false,
  });
};

export { loginOrCreateUser };
