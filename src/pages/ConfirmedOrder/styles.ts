import { styled } from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6.3rem;

  .details-section {
    h1 {
      color: var(--brand-yellow-dark, #c47f17);
      /* Title/Title L */
      font-family: Baloo 2;
      font-size: 32px;
      font-style: normal;
      font-weight: 800;
      line-height: 130%; /* 41.6px */

      margin-bottom: 0.2rem;
    }
    h2 {
      color: var(--base-subtitle, #403937);
      /* Text/Regular L */
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */

      margin-bottom: 2.5rem;
    }

    span {
      color: var(--base-text, #574f4d);
      /* Text/Regular M */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
    }

    #bold {
      font-weight: 700;
    }

    .order-details {
      width: 32rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.5rem;

      border-radius: 6px 36px;
      border: 1px solid #dbac2c;

      .text {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
export const SloganItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.colors['base-text']};
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

interface IconContainerProps {
  defaultValue: string
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${({ defaultValue }) => defaultValue};
  padding: 0.5rem;
  border-radius: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
`
