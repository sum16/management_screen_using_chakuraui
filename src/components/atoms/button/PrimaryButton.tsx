import { Button } from "@chakra-ui/react";
import { memo, VFC, ReactNode } from "react";
// React.memoを使うと親から子コンポーネントに渡している props が更新されない限り(後述する callback 関数とかは別)子コンポーネントは再レンダリングされない

type Props = {
  children: ReactNode;
  // inputに入力されていないと入力できないようにする
  disabled?: boolean;
  // ローディングを追加
  loading?: boolean;

  onClick: () => void;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      // chakraUi isLoading
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
