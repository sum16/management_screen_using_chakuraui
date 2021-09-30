// "/"以下のルーティングをまとめて作成

import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

// /home配下の３つの画面のルーティングを作成
export const HomeRoutes = [
  {
    // homeのpath 直ルートではないことに注意
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  // /home配下の４０４エラーのルーティング
  {
    path: "/*",
    exact: false,
    children: <Page404 />
  }
];
