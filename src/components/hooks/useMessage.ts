import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error"; //4つのどれかしか受け取れない
};

// カスタムフック
export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true
      });
    },
    [toast]
  );
  return { showMessage };
};
