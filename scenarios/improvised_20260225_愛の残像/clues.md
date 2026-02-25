# 証拠定義

```yaml
clues:

  # ── 初期配布 ──────────────────────────────────

  - id: case_briefing
    file: source-evidence/case_briefing.txt
    description: 事件の初期概要。発見状況・被害者情報・警察の見解をまとめた捜査ブリーフィング。
    condition:
      action: セッション開始時に自動配布
    initial: true
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/case_briefing.txt
    copy_dest: evidence/case_briefing.txt
    flavor_text: "水無瀬が手早くタブレットにファイルを転送する。「大学側から届きました。まずここから始めましょう」"
    display_name: "捜査ブリーフィング"
    hint_level: low
    supports:
      - "被害者の特定"
      - "死亡発見状況"

  # ── ラウンジ現場 ──────────────────────────────

  - id: crime_scene_memo
    file: source-evidence/crime_scene_memo.txt
    description: 現場に残されていた手書きメモ。「もう疲れた。消えたい」と書かれているが、筆跡鑑定の結果が添付されている。
    condition:
      location: ラウンジ棟（現場）
      action: 便箋を調べる、または床のメモに触れる
    sets_flag: crime_memo_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/crime_scene_memo.txt
    copy_dest: evidence/crime_scene_memo.txt
    flavor_text: "「これ……莉央さんの字じゃないかもしれませんよ」水無瀬がそっとメモを袋に収める。「筆跡、後で鑑定に出します」"
    display_name: "現場の便箋（筆跡鑑定付）"
    hint_level: high
    supports:
      - P5

  # ── 解剖レポート ─────────────────────────────

  - id: autopsy_report
    file: source-evidence/autopsy_report.txt
    description: 司法解剖の速報レポート。死因はアコニチン（トリカブト由来毒物）による心停止。ドリンクボトルから同成分を検出。
    condition:
      location: 解剖・鑑識レポート（大学提供）
      action: レポートを確認する、または鑑識結果を聞く
    sets_flag: autopsy_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/autopsy_report.txt
    copy_dest: evidence/autopsy_report.txt
    flavor_text: "報告書をスクロールした水無瀬の手が止まる。「……アコニチン。先生、これ自然に摂取できる量じゃないです」"
    display_name: "司法解剖速報レポート"
    hint_level: high
    supports:
      - P1
      - P5

  # ── セキュリティ管理室 ────────────────────────

  - id: campus_access_log
    file: source-evidence/campus_access_log.txt
    description: 大学ラウンジ棟の入退室電子ログ。3月13日22時台の記録。さくらの退出がカードリーダーでなく非常用通路アラームに残っていることが判明。
    condition:
      location: セキュリティ管理室
      action: 入退室ログを請求する
      flag_required: check_access_log
    sets_flag: campus_access_log_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/campus_access_log.txt
    copy_dest: evidence/campus_access_log.txt
    flavor_text: "セキュリティ担当者がプリントアウトを差し出す。「22:34、非常用通路のアラームが1秒鳴ってます。カードは通ってない——つまり内側から開けて出た人がいる」"
    display_name: "ラウンジ棟 入退室ログ（3/13）"
    hint_level: high
    supports:
      - P2
      - P4

  # ── 莉央の自室 ────────────────────────────────

  - id: rion_diary
    file: source-evidence/rion_diary.txt
    description: 莉央の手書き日記の該当ページ。さくらへの「重い」感情と、縁を切ろうとしていた記述がある。
    condition:
      location: 莉央の自室（大学寮）
      action: 机の引き出しを調べる、または日記を探す
      flag_required: rion_room_visited
    sets_flag: rion_diary_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/rion_diary.txt
    copy_dest: evidence/rion_diary.txt
    flavor_text: "引き出しの奥から薄いノートが出てきた。開くと莉央の几帳面な字が並んでいる——読むうちに水無瀬が静かに息を呑む。"
    display_name: "莉央の日記（3月分）"
    hint_level: high
    supports:
      - P3

  # ── さくらの自室 ──────────────────────────────

  - id: herb_analysis
    file: source-evidence/herb_analysis.txt
    description: さくらのベランダのプランターから採取したサンプルの分析結果。トリカブト（Aconitum属）の葉・根の残留物を検出。
    condition:
      location: さくらの自室（大学寮）
      action: ベランダのプランターを調べる
      flag_required: sakura_room_visited
    sets_flag: herb_analysis_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/herb_analysis.txt
    copy_dest: evidence/herb_analysis.txt
    flavor_text: "「これ……ラベンダーじゃないですよ」水無瀬が葉をライトに透かす。「鑑定に出します。絶対に出します」"
    display_name: "プランター植物サンプル 鑑定結果"
    hint_level: high
    supports:
      - P1
      - P4

  - id: sakura_room_search
    file: source-evidence/sakura_room_search.txt
    description: さくらの部屋の捜索記録。壁一面の莉央の写真、莉央との思い出の品々、そして鍵のかかった引き出しの内容物リスト。
    condition:
      location: さくらの自室（大学寮）
      action: 部屋全体を捜索する
      flag_required: sakura_room_visited
    sets_flag: sakura_room_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/sakura_room_search.txt
    copy_dest: evidence/sakura_room_search.txt
    flavor_text: "部屋に入った水無瀬が絶句した。壁いっぱいの莉央の写真——プリントアウト、雑誌の切り抜き、手書きのメモ……「先生、これは……」"
    display_name: "さくらの部屋 捜索記録"
    hint_level: medium
    supports:
      - P3
      - P4

  # ── SNSアーカイブ ─────────────────────────────

  - id: sakura_sns_archive
    file: source-evidence/sakura_sns_archive.txt
    description: さくらのSNS投稿の抜粋。時系列でまとめた投稿ログ。莉央への言及が徐々に執着的になっていく変化が読み取れる。
    condition:
      location: SNSアーカイブ（オンライン調査）
      action: さくらのSNSを調査する
      flag_required: sns_investigated
    sets_flag: sakura_sns_found
    copy_source: scenarios/improvised_20260225_愛の残像/source-evidence/sakura_sns_archive.txt
    copy_dest: evidence/sakura_sns_archive.txt
    flavor_text: "水無瀬がスクロールしながら顔をしかめる。「……投稿の雰囲気、途中から変わってます。2年前と今とで、同じ人が書いたとは思えない」"
    display_name: "日向さくら SNS投稿ログ（抜粋）"
    hint_level: medium
    supports:
      - P3
```
