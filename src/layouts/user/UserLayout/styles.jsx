import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  min-height: calc(100vh - var(--header-height));

  /* display: flex;
  .outlet {
    max-width: calc(100% - var(--sidebar-app-width));
    flex: 1;
  } */
  display: grid;
  grid-template-columns: var(--sidebar-app-width) 1fr;
  .sidebar {
    grid-column: 1/2;
  }
  .oulet {
    grid-column: 2/3;
  }

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    .sidebar {
      /* display: none; */
    }
    .oulet {
      grid-column: 1/2;
      
    }
  }
`;
