// * ログイン画面にはヘッダーを出さず、/homeには出す *
import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

// React.memoを使うと親から子コンポーネントに渡している props が更新されない限り(後述する callback 関数とかは別)子コンポーネントは再レンダリングされない
// props の型定義で、明示的に children の型情報を指定するには、次のように React.ReactNode を使う
type Props = {
  children: ReactNode;
};
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

// Router.tsxの/home配下にHeaderLayoutを配置する
