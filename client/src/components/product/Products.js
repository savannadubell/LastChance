import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import PageWrapper from '../shop/PageWrapper';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
  padding: 40px;
  @media (max-width: 650px) {
    padding: 20px;
  }
`;
PageWrapper
const Products = ({ config }) => {
  return (
    <PageWrapper>
      <Paper>
        <Wrapper>
          <h2 style={{ marginTop: 0, fontWeight: 600 }}>All Products</h2>
          <ProductList config={config} />
        </Wrapper>
      </Paper>
    </PageWrapper>
  );
};
export default Products;
