/* eslint-disable react-hooks/exhaustive-deps */

// ユーザーを全て取得するカスタムフック

import axios from "axios";
import { useCallback, useState } from "react";

import { UserType } from "../../types/api/user";
import { useMessage } from "./useMessage";

export const UseAllUsers = () => {
  // カスタムフック外で使用できるようにreturnで返しておく
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<UserType>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      //取得するデータに型を指定
      .get<Array<UserType>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, loading, users };
};
