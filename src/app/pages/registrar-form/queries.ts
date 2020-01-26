import gql from "graphql-tag";
export const ADD_USUARIO = gql`
  mutation addUsuario($params: UsuarioInput) {
    addUsuario(params: $params) {
      respuesta
    }
  }
`;
