/* eslint-disable react-hooks/exhaustive-deps */
// Wrap レスポンシブ
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UseAllUsers } from "../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserModalDetail } from "../organisms/user/UserModalDetail";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useDisclosure chakraUiのカスタムフック

  // ユーザーをクリックしたときにModalを実装
  // useCallbackでメモ化
  const onClickUser = useCallback(() => onOpen(), []);

  // 第２引数を[]にすることで初回のレンダリングのみで呼ばれる
  useEffect(() => getUsers, []);
  console.log(users);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                onClick={onClickUser}
                imageUrl="https://source.unsplash.com/random"
                profession={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModalDetail isOpen={isOpen} onClose={onClose} />
    </>
  );
});
