import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      styleCode
      colorCode
      styleName
      colorName
      image
      category
      description
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query Customers {
    customers {
      id
      name
      description
      logo
    }
  }
`;
