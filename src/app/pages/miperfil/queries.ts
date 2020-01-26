import gql from "graphql-tag";
export const GET_USUARIO = gql`
  query getUsuario($username: String!) {
    usuario(username: $username) {
      id
      username
      extra
    }
  }
`;
