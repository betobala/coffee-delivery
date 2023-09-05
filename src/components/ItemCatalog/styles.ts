import { styled } from 'styled-components'

export const ItemContainer = styled.div``

export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 2.5rem;
  width: 16rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['base-card']};

  padding: 1.25rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    #tag {
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;

      color: ${(props) => props.theme.colors['yellow-dark']};

      border-radius: 100px;
      background: ${(props) => props.theme.colors['yellow-light']};

      padding: 0 0.5rem;
      margin-bottom: 1.25rem;
    }
  }

  .price-section {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.4rem;

    .input-and-button {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;
    }
  }

  #name {
    font-family: Baloo 2;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;

    color: ${(props) => props.theme.colors['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  #description {
    font-size: 0.875rem;
    text-align: center;

    color: ${(props) => props.theme.colors['base-label']};

    margin-bottom: 2rem;
  }

  .price {
    font-size: 0.875rem;
    text-align: right;
    display: flex;
    align-items: baseline;
    gap: 0.15rem;

    color: ${(props) => props.theme.colors['base-text']};

    #price {
      font-family: Baloo 2;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`
export const CartItemContainer = styled.div`
  width: 23rem;
  display: grid;
  grid-row-gap: 0.5rem;

  grid-template-areas:
    'image name price'
    'image input input';
  grid-template-columns: 5.2rem auto auto;

  max-width: 23rem;
  padding: 0.5rem 0.25rem;

  background: ${(props) => props.theme.colors['base-card']};

  img {
    grid-area: image;

    width: 4rem;
  }

  #name {
    grid-area: name;

    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme.colors['base-subtitle']};
  }
  #price {
    grid-area: price;

    font-family: Roboto;
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    text-align: right;

    color: ${(props) => props.theme.colors['base-text']};
  }

  .input-and-button {
    grid-area: input;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: left;

    gap: 0.5rem;
  }
`
