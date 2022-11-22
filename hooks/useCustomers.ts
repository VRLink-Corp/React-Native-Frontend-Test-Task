import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../gql/Query';

type Customer = {
  name: string;
  id: string;
};

const useCustomers = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  const [customers, setCustomers] = useState<Customer[]>([]);

  // Set customers from the gql query
  useEffect(() => {
    if (!data) return;
    const customers: Customer[] = data.customers;
    setCustomers(customers);
  }, [data]);

  return { loading, error, customers };
};

export default useCustomers;
