import type { ButtonProps } from 'antd';
import  type { ButtonType } from 'antd/lib/button';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import { StyledButton } from './style';

interface Props extends ButtonProps {
  name?: string;
  size?: SizeType;
  type?: ButtonType;
  htmlType?: 'button' | 'submit' | 'reset';
  danger?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;  
  children?: React.ReactNode;
}

export const Button = (props: Props) => {
  const {
    loading,
    disabled,
    name,
    size = 'large',
    type = 'default',
    htmlType = 'button', 
    danger = false,
    className,
    icon,
    onClick,
    block= false,
    children,
  } = props;
  return (
    <StyledButton
      icon={icon}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={className}
      htmlType={htmlType}
      danger={danger}
      type={type}
      size={size}
      block={block}
    >
      {children ?? name}
    </StyledButton>
  )
}