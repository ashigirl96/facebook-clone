import "../styles/globals.css";
import { Provider } from "next-auth/client";
import React from "react";
import { AppProps } from "next/app";

// Appコンポーネントは、ページの初期化をしてくれる
// - ページが変化するたびにレウアウトを保持する
// - ページ遷移時にStateを保持
// - componentDidCatchを使って独自のエラーハンドリングできる
// - ページに追加の情報を注入できる
// - グローバルCSSを追加できる

// pagePropsはデータ取得メソッドの 1 つによってプリロードされた初期 props を持つオブジェクトです。
// そうでなければ空のオブジェクトになります。
const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
