import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../gql/Query';

type Product = {
  name: string;
  id: string;
};

const useProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState<Product[]>([]);

  // Set products from the gql query
  useEffect(() => {
    if (!data) return;
    const products: Product[] = data.products;
    setProducts(products);
  }, [data]);

  return { loading, error, products };
};

export default useProducts;
