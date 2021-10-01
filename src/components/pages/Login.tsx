import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../hooks/UseAuth";
// React.memoを使うと親から子コンポーネントに渡している props が更新されない限り(後述する callback 関数とかは別)子コンポーネントは再レンダリングされない

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  // useAuthカスタムフックを作成し、ここで使用 useAuth.ts
  const { login, loading } = useAuth();
  // テキストボックスはeventを受け取れる
  // ChangeEvent<HTMLInputElement>  テキストイベントの型指定
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理画面
        </Heading>
        <Divider my={4} />
        {/* Stack ~囲った要素を問等間隔で配置 */}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
