import { styled } from 'styled-components'

export const ItemContainer = styled.div``

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
