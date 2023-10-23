import { Button, ButtonProps } from "@chakra-ui/react";

interface MeuBotaoProps extends ButtonProps {
  onClick: () => void;
}

export const MeuBotao: React.FC<MeuBotaoProps> = ({ onClick, children, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

