import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      styleName
      colorName
      image
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query Customers {
    customers {
      id
      name
    }
  }
`;
