import styled, {css} from 'styled-components';

const sizeCSS ={
  'full': css`
    width: 100%;
    height: 40px;
    line-height: 40px;
  `,
  'small': css`
    width: 66px;
    height: 28px;
    line-height: 28px;
  `
};

const variantCSS = {
  'primary': css`
    background-color: #333;
    `,
  'secondary': css`
    background-color: aliceblue;
    `
}

export const Button = styled.button`
  ${(size) => sizeCSS.size}
  ${(variant) => variantCSS.variant}
  color: #222;
  text-align: center;
`