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
import { useSelectUser } from "../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserModalDetail } from "../organisms/user/UserModalDetail";
import { useLoginUser } from "../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers();
  // useDisclosure chakraUiのカスタムフック
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { LoginUser } = useLoginUser();
  console.log(selectedUser);

  // ユーザーをクリックしたときにModalを実装
  // useCallbackでメモ化
  const onClickUser = useCallback(
    (id: number) => {
      console.log(id);
      onSelectUser({ id, users });

      onOpen();
    },
    [users, onSelectUser, onOpen]
  );

  // 第２引数を[]にすることで初回のレンダリングのみで呼ばれる
  useEffect(() => getUsers, []);
  // console.log(users);
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
                id={user.id}
                onClick={onClickUser}
                imageUrl="https://source.unsplash.com/random"
                profession={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModalDetail user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
