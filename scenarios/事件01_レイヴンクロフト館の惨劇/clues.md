# 証拠定義

各証拠の取得条件・コピーコマンド・演出テキストを定義します。
AIはこのファイルを参照して、条件が満たされたときにファイルをコピーします。

---

```yaml
clues:

  - id: crime_scene_note
    file: source-evidence/crime_scene_note.txt
    display_name: 現場状況メモ
    description: 現場を調査した際のドクター・ハントによる状況メモ
    condition:
      location: 書斎
      action: 遺体・現場の状況を確認する
    sets_flag: crime_scene_visited
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/crime_scene_note.txt
    copy_dest: evidence/crime_scene_note.txt
    flavor_text: "書斎の机の上に、ドクター・ハントが書き記した現場状況のメモが残されていました。"
    hint_level: medium
    supports:
      - 毒殺の可能性

  - id: suicide_note
    file: source-evidence/suicide_note.txt
    display_name: 遺書（便箋）
    description: 遺書。走り書きで「疲れた。もう限界だ」とある。
    condition:
      location: 書斎
      action: 遺書・便箋を確認する
    sets_flag: suicide_note_found
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/suicide_note.txt
    copy_dest: evidence/suicide_note.txt
    flavor_text: "机の上の便箋を手に取ります。走り書きで数行——あなたはエレナの違和感の意味を考えながら、それを evidence/ に収めました。"
    hint_level: low
    supports:
      - 遺書偽造の可能性（単独では証明力が低い）

  - id: medical_report
    file: source-evidence/medical_report.html
    description: ドクター・ハントによる検死レポート（HTML形式）。毒物反応の可能性を指摘。
    display_name: 検死レポート
    condition:
      flag_required: hunt_poison_theory
      action: ハント医師に検査結果を持ってきてもらう・検死レポートを受け取る
    sets_flag: medical_report_obtained
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/medical_report.html
    copy_dest: evidence/medical_report.html
    flavor_text: "ドクター・ハントが検査結果をまとめた書類を持ってきました。「こちらをご確認ください」と彼は静かに言い、書類を差し出します。"
    hint_level: high
    supports:
      - 毒殺
      - アコニチン中毒

  - id: brandy_evidence
    file: source-evidence/brandy_analysis.txt
    display_name: ブランデー残液分析報告
    description: ブランデーグラスの残留物分析結果。アコニチン系毒物の反応あり。
    condition:
      flag_required: brandy_examined
      flag_required_2: hunt_poison_theory
      action: ブランデーグラスを詳しく調べる・ハント医師に分析を依頼する
    sets_flag: brandy_evidence_found
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/brandy_analysis.txt
    copy_dest: evidence/brandy_analysis.txt
    flavor_text: "ドクター・ハントがグラスの残液を分析してくれました。「やはり……」と彼は静かに言いました。"
    hint_level: high
    supports:
      - 毒殺
      - 犯行方法（ブランデーへの毒混入）

  - id: account_ledger
    file: source-evidence/account_ledger.txt
    display_name: 資産管理帳簿
    description: 館の帳簿。過去10年間にわたる不自然な出入金の記録がある。
    condition:
      location: 図書室
      action: 帳簿棚を調べる・帳簿を確認する
    sets_flag: ledger_found
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/account_ledger.txt
    copy_dest: evidence/account_ledger.txt
    flavor_text: "図書室の棚の奥に、古い帳簿が並んでいます。ひとつを開くと——数字の羅列の中に、奇妙なパターンが見えてきます。"
    hint_level: high
    supports:
      - グレイの動機（横領）

  - id: window_scratch
    file: source-evidence/window_scratch.txt
    display_name: 窓枠調査メモ
    description: 書斎の窓枠の外側に細い針金の引っかき傷。密室トリックの痕跡。
    condition:
      flag_required: window_examined
      flag_required_2: garden_visited
      action: 窓の外から窓枠・掛け金周りを丁寧に調べる
    sets_flag: window_trick_discovered
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/window_scratch.txt
    copy_dest: evidence/window_scratch.txt
    flavor_text: "窓の外側の枠をよく見ると——かすかな金属の引っかき傷。あなたは息をのみました。これは、外から掛け金を操作した痕跡ではないか？"
    hint_level: high
    supports:
      - 密室トリック（針金による外部施錠）

  - id: victim_diary
    file: source-evidence/victim_diary.txt
    display_name: 故人の日記
    description: 被害者の日記。グレイへの不信感が芽生えていた記録がある。
    condition:
      location: 当主の寝室
      action: 日記・手帳を探す
    sets_flag: victim_diary_found
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/victim_diary.txt
    copy_dest: evidence/victim_diary.txt
    flavor_text: "寝室のベッドサイドテーブルの引き出しに、革表紙の日記帳がありました。最後の数ページに、あなたは目を止めます。"
    hint_level: high
    supports:
      - 被害者とグレイの関係悪化
      - グレイの動機

  - id: solicitor_letter
    file: source-evidence/solicitor_letter.txt
    display_name: 弁護士からの通知書
    description: 弁護士からの手紙。帳簿の正式な監査を翌週に行う旨の通知。
    condition:
      location: グレイの部屋
      affinity_gray: 50
      action: 引き出し・書類を調べる
    sets_flag: solicitor_letter_found
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/solicitor_letter.txt
    copy_dest: evidence/solicitor_letter.txt
    flavor_text: "グレイの部屋の引き出しの奥——折り畳まれた封書。差出人は「ホワイト法律事務所」。開封すると、来週月曜に帳簿監査を行うという通知が……"
    hint_level: high
    supports:
      - グレイの動機（発覚の危機）
      - 犯行の緊急性

  - id: poison_bottle
    file: source-evidence/poison_bottle.txt
    display_name: 毒物の小瓶
    description: 厨房の薬棚の奥に隠されていたアコニチンの小瓶（中身は減っている）。
    condition:
      location: 厨房
      flag_required: hunt_poison_theory
      action: 薬棚・引き出しを細かく調べる
    sets_flag: ~
    copy_source: scenarios/事件01_レイヴンクロフト館の惨劇/source-evidence/poison_bottle.txt
    copy_dest: evidence/poison_bottle.txt
    flavor_text: "薬棚の最奥、調味料の陰に小さな茶色の瓶。ラベルを読んで、あなたの手が止まりました。"
    hint_level: high
    supports:
      - 毒殺
      - 犯行手段（アコニチン）
      - グレイが毒物を入手していた証拠
```
