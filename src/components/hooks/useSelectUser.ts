import { useCallback, useState } from "react";
import { UserType } from "../../types/api/user";

type Props = {
  id: number;
  users: Array<UserType>;
};

export const useSelectUser = () => {
  // 型は usersまたはnull 初期値は未選択を想定してnullをいれる
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  // クリックされたときにどのユーザーかを特定する関数を定義
  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    // idとユーザーのidが一致するものを探し、setSelectedUserを更新
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
  }, []);

  // 選択されたユーザーの情報を返す
  return { onSelectUser, selectedUser };
};

// 配列.find →条件に一致する最初の要素を返す
// ??  左辺がundifindまたはnullの時に右辺を実行する 今回の場合は明示的にnullを設定している
