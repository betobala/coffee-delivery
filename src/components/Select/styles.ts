import { styled } from 'styled-components'

interface SelectContainerProps {
  $ischecked: boolean
}

export const SelectContainer = styled.button<SelectContainerProps>`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;

  border-radius: 6px;
  border: none;

  background: ${(props) =>
    props.$ischecked
      ? props.theme.colors['purple-light']
      : props.theme.colors['base-button']};
  border: 1px solid
    ${(props) => (props.$ischecked ? props.theme.colors.purple : 'transparent')};

  padding: 1rem;
  padding-bottom: 0.85rem;

  gap: 0.6rem;

  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  span {
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    text-align: left;
    color: ${(props) =>
      props.$ischecked
        ? props.theme.colors['base-text']
        : props.theme.colors['base-text']};
  }

  &:hover {
    background: ${(props) =>
      props.$ischecked
        ? props.theme.colors['purple-light']
        : props.theme.colors['base-hover']};
  }

  svg {
    margin-bottom: 2px;
  }
`
