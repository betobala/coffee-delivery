import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6.5rem;

  margin: 5.875rem auto 2rem auto;
  padding-bottom: 10rem;
`

export const SloganSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'text image'
    'items image';
  column-gap: 5rem;
  row-gap: 4.125rem;

  .main-text {
    grid-area: text;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme.colors['base-title']};
      font-family: Baloo 2;
      font-size: 3rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }

    h2 {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-family: Roboto;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 130%;
    }
  }

  .items {
    grid-area: items;
    display: grid;
    grid-template-columns: 17rem 19rem;
    grid-template-rows: 2rem 2rem;
    row-gap: 1.25rem;
  }

  img {
    grid-area: image;
  }
`

export const ProductsSection = styled.div`
  h1 {
    font-family: Baloo 2;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme.colors['base-subtitle']};

    margin-bottom: 3rem;
  }
`

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
