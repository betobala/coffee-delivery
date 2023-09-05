import { styled } from 'styled-components'

export const RequestDetailsContainer = styled.div`
  padding-bottom: 10rem;

  h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};

    font-family: Baloo 2;
    font-size: 1.125rem;

    font-weight: 700;
    line-height: 130%;
  }

  form {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`

export const FinishRequestSection = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .delivery-address-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['base-card']};
    padding: 2.5rem;

    .title {
      display: flex;
      flex-direction: column;

      .delivery-address-title {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;

        h2 {
          color: ${(props) => props.theme.colors['base-subtitle']};
          font-family: Roboto;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
        }
      }

      span {
        grid-area: subtitle;
        color: ${(props) => props.theme.colors['base-text']};
        font-family: Roboto;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;

        margin-left: 31px;
      }
    }
  }

  .payment-method-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['base-card']};
    padding: 2.5rem;

    .title {
      display: flex;
      flex-direction: column;

      .payment-method-title {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;

        h2 {
          color: ${(props) => props.theme.colors['base-subtitle']};
          font-family: Roboto;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
        }
      }

      span {
        grid-area: subtitle;
        color: ${(props) => props.theme.colors['base-text']};
        font-family: Roboto;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;

        margin-left: 31px;
      }
    }
    .select-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }
  }
`
export const SelectedProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 448px;

  .products-and-price {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    border-radius: 6px 44px;
    background: ${(props) => props.theme.colors['base-card']};

    .products {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      .line {
        width: 100%;
        border: 1px solid ${(props) => props.theme.colors['base-button']};
      }
    }

    .price {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      text-align: right;
      font-family: Roboto;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme.colors['base-text']};

      .total-items {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .delivery-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .total-price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: ${(props) => props.theme.colors['base-subtitle']};
        text-align: right;
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 130%;
      }
    }
  }
`
