import * as S from './style';

function Button(props) {
  const {size, variant, children, ...rest } = props;

  return (
    <>
      <S.Button variant={variant} size={size} {...rest}>
        {children}
      </S.Button>
    </>
  )
}

export default Button;