import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
// React.memoを使うと親から子コンポーネントに渡している props が更新されない限り(後述する callback 関数とかは別)子コンポーネントは再レンダリングされない

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理画面
        </Heading>
        <Divider my={4} />
        {/* Stack ~囲った要素を問等間隔で配置 */}
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
