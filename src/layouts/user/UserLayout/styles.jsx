import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  .outlet {
    max-width: calc(100% - var(--sidebar-app-width));
  }
  /* display: grid;
  grid-template-columns:  var(--sidebar-app-width) 1fr;
  .item-1 {
    grid-column: 1/2;
  }
  .item-2 {
    grid-column: 2/4;
  } */
`;
