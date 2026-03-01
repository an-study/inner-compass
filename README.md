
# INNER COMPASS — Landing (Vite + React + Tailwind + i18n)

このリポジトリは指示書に基づいて作成された Vite + React + TypeScript + Tailwind のスキャフォールドです。

## ローカル実行手順

1. 依存インストール
   ```bash
   cd /Users/an/work_innerCompass
   npm install --legacy-peer-deps
   ```

2. 開発サーバ起動
   ```bash
   npm run dev
   ```

ブラウザで `http://localhost:5173` を開いてください。

## フォント
- UI は丸ゴシック（`M PLUS Rounded 1c`）を優先するよう設定してあります。見出し・本文ともに丸い柔らかい印象になります。

## 画像（ローカルで差し替え）
画像はプレースホルダーを用いており、`/public/images` に画像ファイルを置くだけで置換されます。プロジェクトのルートに `public/images/` フォルダを作成し、以下のファイル名で画像を置いてください：

- `public/images/hero-mockup.png` — ヒーロー右側のモックアップ（想定 1080×1440）
- `public/images/spread-mockup.png` — Features セクションのスプレッド（想定 1920×1080）

配置後にページをリロードすると、該当箇所が自動で画像に差し替わります。

もし別名を使いたい場合は、該当コンポーネント（`src/components/Hero.tsx`, `src/components/Features.tsx`）の `src` 属性を編集してください。

## 変更点の要約
- `src/styles/theme.css`, `src/styles/fonts.css` — 丸フォント優先の設定を追加
- `tailwind.config.cjs` — Tailwind のフォント設定を更新
- `src/components/ImagePlaceholder.tsx` — 画像差し替え用ユーティリティを追加
- `src/components/Hero.tsx`, `src/components/Features.tsx` — モックアップ領域をプレースホルダーに置換

必要なら、別名のファイルをサポートする短い設定（env や設定ファイル）も追加できます。ご希望があれば教えてください。
