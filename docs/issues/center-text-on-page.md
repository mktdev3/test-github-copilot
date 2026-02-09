# ようこそ、Test Pageの文言をページの中央に配置

## 概要
メインページのテキスト「ようこそ、Test Page」を画面の中央（水平および垂直）に配置する。

## 問題
- テキストが水平方向には中央揃えされていたが、垂直方向には上部から固定パディング（`pt-20`）で押し下げられていた
- ページ全体の中央に配置されていなかった

## 解決方法
`app/page.tsx`の`main`要素のスタイルを修正：
- 変更前: `className="flex items-center justify-center pt-20"`
- 変更後: `className="flex items-center justify-center h-[calc(100vh-64px)]"`

### 技術的詳細
- `h-[calc(100vh-64px)]`: ビューポート全体の高さからヘッダーの高さ（約64px）を引いた高さを設定
- これにより、既存の`items-center justify-center`が垂直・水平両方向で正しく機能する
- Flexboxレイアウトにより、コンテンツが残りのビューポート領域の中央に配置される

## 影響範囲
- 変更ファイル: `app/page.tsx`
- 変更行数: 1行のみ

## 検証
- ✅ ビジュアル確認: テキストが画面中央に配置されることを確認
- ✅ ビルド: TypeScriptエラーなし
- ✅ コードレビュー: 問題なし
- ✅ セキュリティチェック（CodeQL）: 脆弱性なし

## スクリーンショット
変更後のページ表示:
![Centered Text](https://github.com/user-attachments/assets/28abc194-341c-4741-a205-2313cd693cec)

## 関連リンク
- PR: #[PR番号]
- Commit: 614370e
