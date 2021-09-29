import { memo, VFC } from "react";
// React.memoを使うと親から子コンポーネントに渡している props が更新されない限り(後述する callback 関数とかは別)子コンポーネントは再レンダリングされない

export const Login: VFC = memo(() => {
  return <p>ログインページ</p>;
});
