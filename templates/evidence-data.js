/* 自動生成 — 手動編集不可 */
/*
 * ビューアー（viewer.html）はこのファイルを読み込み、
 * files 配列内の content フィールドを直接表示する。
 * ファイルシステムへのアクセスは行わない。
 *
 * 【必須フィールド】
 *   name        : ファイル名            例) "autopsy_report.txt"
 *   displayName : プレイヤー向け表示名  例) "司法解剖速報レポート"
 *   ext         : 拡張子               例) "txt" / "md" / "html"
 *   content     : ファイルの全文字列   ← 省略するとクリックしても何も表示されない
 *
 * 【任意フィールド】
 *   category    : "interview" にすると聴取メモタブに分類される（省略時は証拠タブ）
 *   character   : category が "interview" の場合のみ使用
 *
 * 【再生成時の手順】
 *   1. saves/<セーブ名>/evidence/ 内の全ファイルを読む（viewer.html は除く）
 *   2. 各ファイルの内容を content に埋め込む（テンプレートリテラル推奨）
 *   3. files 配列を全件上書き保存する
 *
 * 【例】
 *   {
 *     name: "autopsy_report.txt",
 *     displayName: "司法解剖速報レポート",
 *     ext: "txt",
 *     content: `...ファイルの中身...`
 *   }
 */
window.EVIDENCE_DATA = {
  theme: {
    accent: "#8b0000",
    bg_tint: "#0d0d0f",
    text_primary: "#d4c8b0",
    font: "Georgia, serif",
    label: "Victorian"
  },
  files: []
};
