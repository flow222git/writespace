/**
 * writespace-i18n.js
 * 心理位移書寫空間 — 多語系定義（中文為 DOM 原文，engine 記憶）
 * 載入後掛 window.JTE_I18N（en + ja）並定義 window.jteI18nApply。
 *
 * 注意：不觸碰任何加密/同步/儲存邏輯；只處理顯示字串。
 */

(function () {
  /* ------------------------------------------------------------------ */
  /* 1. 靜態 HTML 與動態 JS 共用的翻譯字典（zh 不需要填；engine 從 DOM 取） */
  /* ------------------------------------------------------------------ */

  window.JTE_I18N = {
    en: {
      /* --- page meta --- */
      page_title: "Position Shift Writing Space",

      /* --- landing --- */
      landing_kicker: "psychological position shift",
      landing_title: "Position Shift Writing Space",
      landing_words: "shift · switch · space",
      btn_start: "Begin Writing",
      btn_records: "Writing Archive",

      /* --- global toolbar --- */
      btn_copy_title: "Copy summary",
      btn_download_title: "Download record",
      btn_reset_title: "Start over",

      /* --- writing flow buttons --- */
      btn_prev: "Back",
      btn_start_writing: "Start Writing",
      btn_next: "Next",
      btn_done: "Done",

      /* --- input area --- */
      input_label: "Enter your response",
      input_placeholder: "Take your time and write here…",
      input_placeholder_sending: "Preparing the next prompt…",
      input_placeholder_done: "This round is complete. You may download or start over.",

      /* --- privacy line (dynamic, see wsRefreshPrivacyLine) --- */
      privacy_local: "Your writing stays on this device only — nothing is uploaded.",
      privacy_encrypted: "Encrypted sync enabled — even we can't read it.",
      privacy_link: "Privacy info",

      /* --- safety strip --- */
      safety_notice:
        "If you are in a severe crisis, or have thoughts of harming yourself or others, please pause this exercise and immediately contact someone you trust, local emergency services, or professional mental health / medical resources.",

      /* --- step position labels (currentPosition) --- */
      step_topic_position: "Choose a topic",
      step_iFirst_position: "My position (I)",
      step_you_position: "Your position (You)",
      step_observer_position: "Observer position (He / She)",
      step_iFinal_position: "Return to Me",
      step_action_position: "Small next step",
      step_summary_position: "Summary",
      step_completed_position: "Session complete",

      /* --- step page titles --- */
      step_topic_title: "Choose something you can gently approach right now",
      step_iFirst_title: "My Position",
      step_you_title: "Your Position",
      step_observer_title: "He / She — Observer Position",
      step_iFinal_title: "Return to Me",
      step_action_title: "One small thing you can do first",
      step_summary_title: "Full Position-Shift Record",

      /* --- step page prompts --- */
      step_topic_prompt:
        "It doesn't have to be the hardest thing. Choose something you feel willing to gently approach right now.",
      step_iFirst_prompt:
        "No need to organize or edit. Let your true feelings be seen on this page.",
      step_you_prompt:
        "Imagine your earlier self sitting in front of you. Speak to them using \"you.\"",
      step_observer_prompt:
        "Step back. Observe this person — what are they going through?",
      step_iFinal_prompt:
        'This version of "me\" has now seen both \"you\" and \"he / she." Return with fresh understanding.',
      step_action_prompt:
        "This action doesn't need to solve everything — just move you a little closer to taking care of yourself.",
      step_summary_prompt:
        "From I, to You, to He / She, and back to Me. This page holds the traces of the journey you just made.",

      /* --- step action button labels --- */
      step_action_next: "Next",
      step_action_done: "Done",

      /* --- step labels (sidebar / steps list) --- */
      step_label_topic: "Topic",
      step_label_iFirst: "I",
      step_label_you: "You",
      step_label_observer: "He / She",
      step_label_iFinal: "Return to Me",
      step_label_action: "Small step",
      step_label_summary: "Summary",

      /* --- step hints (sidebar) --- */
      step_hint_topic: "Choose something to approach",
      step_hint_iFirst: "Let true feelings be seen",
      step_hint_you: "Speak to your earlier self",
      step_hint_observer: "View from the outside",
      step_hint_iFinal: "Return with new understanding",
      step_hint_action: "One low-pressure next step",
      step_hint_summary: "Keep a record of this session",

      /* --- starter chips --- */
      starter_topic_0: "What's been stuck for me lately is…",
      starter_topic_1: "What I want to sort through is…",
      starter_topic_2: "In one sentence, it would be…",

      starter_iFirst_0: "I feel…",
      starter_iFirst_1: "I'm actually very…",
      starter_iFirst_2: "What I can't stand most is…",
      starter_iFirst_3: "What I need most right now is…",

      starter_you_0: "You have already…",
      starter_you_1: "You feel this way because…",
      starter_you_2: "You don't have to…",
      starter_you_3: "You can start by…",

      starter_observer_0: "He is…",
      starter_observer_1: "She isn't… she's actually…",
      starter_observer_2: "Looking from the outside, this situation…",
      starter_observer_3: "He / She might need…",

      starter_iFinal_0: "I've now realized…",
      starter_iFinal_1: "I understand a little better…",
      starter_iFinal_2: "I can start by…",
      starter_iFinal_3: "What I want to say to myself is…",

      starter_action_0: "I can start by resting",
      starter_action_1: "I'll take the smallest step tomorrow",
      starter_action_2: "I can let someone know where I'm at",
      starter_action_3: "I'll write things down first",

      /* --- guide panel buttons --- */
      guide_prev: "Back",
      guide_write: "Start Writing",

      /* --- footer --- */
      footer_note:
        "Content is saved in this browser only. You can download it as a Markdown file.",

      /* --- records panel --- */
      records_title: "Writing Archive",
      btn_close_records_title: "Close archive",
      records_empty_title: "No writing records yet.",
      records_empty_hint: "After completing a position-shift session, your record will be saved here automatically.",
      records_empty_compact_title: "No matching records found.",
      records_empty_compact_hint: "Try a different keyword, or browse all dates.",
      records_search_placeholder: "Search topics, content, or date…",
      records_result_all: "All records",
      records_result_search: "Search results",
      records_count_unit: "entries",
      btn_clear_search: "Clear search",
      btn_all_dates: "All dates",
      btn_prev_month: "Previous month",
      btn_next_month: "Next month",
      btn_view: "Read",
      btn_edit: "Edit",
      btn_delete: "Delete",
      btn_back_to_list: "Back to list",
      btn_cancel: "Cancel",
      btn_save_edit: "Save changes",

      /* --- record editor field labels / hints --- */
      field_topic_label: "Topic",
      field_topic_hint: "What you wanted to work through this time",
      field_iFirst_label: "My Position (I)",
      field_iFirst_hint: "How I felt about this",
      field_you_label: "Your Position (You)",
      field_you_hint: "Speaking to your earlier self",
      field_observer_label: "Observer Position (He / She)",
      field_observer_hint: "Viewing from the outside",
      field_iFinal_label: "Return to Me",
      field_iFinal_hint: "Returning with new understanding",
      field_action_label: "Small next step",
      field_action_hint: "One small thing you can do first",

      /* --- record item preview fallback --- */
      record_preview_fallback: "This record is quietly waiting for you to return.",
      record_untitled: "Untitled writing",

      /* --- calendar weekday headers --- */
      cal_sun: "Sun",
      cal_mon: "Mon",
      cal_tue: "Tue",
      cal_wed: "Wed",
      cal_thu: "Thu",
      cal_fri: "Fri",
      cal_sat: "Sat",

      /* --- dynamic nudge messages (system guide text) --- */
      /* These are sensitive therapeutic prompts — warm, supportive tone */
      sys_intro:
        "We'll use the perspectives of \"I,\" \"you,\" and \"he / she\" to help you gently see your current situation.\n\nThis isn't about solving the problem right away — it's about approaching yourself from different angles.\n\nYou don't need to write perfectly or completely. Just write honestly.\n\nPlease start by choosing something that has felt stuck, troubling, exhausting, unfair, anxious, or like you want to escape from lately. If you were to describe it in one sentence, what would it be?",

      nudge_topic_prefix: "Okay, let's hold ",
      nudge_topic_suffix:
        " here for now.\n\nNow, starting with \"I,\" write down how you feel about this.\n\nYou might start with:\n\nI feel…\nI'm actually very…\nWhat I can't stand most is…\nWhat I'm afraid to say is…\nWhat I need most right now is…",

      nudge_iFirst_opening:
        "I hear you placing yourself back in the \"I\" position and letting your true feelings come out.\n\n",
      nudge_iFirst_emotion_found: "There are a few feelings that come through clearly: ",
      nudge_iFirst_emotion_none:
        "I understand this as: you're carrying something that isn't easy to push through by willpower alone.",
      nudge_iFirst_need_found: "There also seems to be a part that needs care: ",
      nudge_iFirst_need_none:
        "Perhaps what you need right now isn't an immediate solution, but to let these feelings settle somewhere a little safer.",
      nudge_iFirst_closing:
        "\n\nFor now, let's not rush to solve anything. Imagine that tired, stuck version of yourself sitting in front of you.\n\nNow, starting with \"you,\" speak a few words to them.",

      nudge_you_opening:
        "Something important is shifting here: you're not only standing inside the pain — you're beginning to speak to the self who is in pain.\n\n",
      nudge_you_support_found: "I notice some supportive voices in there: ",
      nudge_you_support_none:
        "This step is already practicing letting go of self-blame a little, giving yourself a chance to be heard by yourself.",
      nudge_you_closing:
        "\n\nNow let's step back a little further. Imagine you are an observer watching a person going through this experience.\n\nThat person is the you from just now. Starting with \"he\" or \"she,\" describe what this person is going through.",

      nudge_observer_opening_found: "From the observer's position, this situation isn't only happening to you — it also involves: ",
      nudge_observer_opening_none:
        "From the observer's position, this situation seems to be not just a personal-ability issue, but also accumulated stress and constraints over time.",
      nudge_observer_closing:
        "\n\nHe / She is not only defined by the difficulty in front of them — they can't be understood through blame alone.\n\nNow, slowly return to the \"I\" position. But this version of \"I\" has already seen both \"you\" and \"he / she.\"\n\nWrite a few sentences again using \"I\": What do I notice now? What do I understand better? How do I want to take care of myself?",

      nudge_iFinal_opening:
        "The \"I\" you just wrote is already different from the \"I\" at the start.\n\nAt first, it felt more like being trapped in emotion. Now there's more understanding and a voice that wants to care for yourself.\n\n",
      nudge_iFinal_action_found: "I also see some grounded directions: ",
      nudge_iFinal_action_none:
        "You don't need to solve everything right now — just find one small, low-pressure action you could take today or tomorrow.",
      nudge_iFinal_closing:
        "\n\nIf you could choose just one small thing as your next act of self-care, what would you do first?",

      nudge_action_done:
        "Today wasn't about solving everything — it was about moving from a stuck place to somewhere you could see yourself more clearly.\n\nThat movement itself is a beginning.\n\nI've put together a record for you.",

      nudge_summary_already_done:
        "This round of practice is complete. You can copy or download the record, or press the restart button at the top left to begin a new session.",

      crisis_message:
        "I care deeply about your safety right now.\n\nThis state is beyond what a writing practice alone can address. Please reach out to someone you trust right now, or immediately contact local emergency services, a counselor, or medical support.\n\nIf you're willing, here is one minimal safe action: move away from anything that could cause harm, and tell someone you can reach immediately: \"I'm not safe right now — I need you with me.\"",

      /* --- report (markdown) labels --- */
      report_title: "Position-Shift Writing Record",
      report_created: "Created:",
      report_section1_title: "1. My Original State",
      report_section1_topic: "Topic:",
      report_section1_emotions: "Initial feelings:",
      report_section1_needs: "Possible needs:",
      report_section1_writing: "Original writing:",
      report_section2_title: "2. Insights from the You Position",
      report_section2_intro: "In the \"you\" position, these supportive voices emerged:",
      report_section3_title: "3. Observations from the He / She Position",
      report_section3_intro: "From the observer's perspective, this situation may involve:",
      report_section3_writing: "Original observation:",
      report_section4_title: "4. New Discoveries After Returning to Me",
      report_section4_intro: "After returning to the \"I\" position, I noticed:",
      report_section5_title: "5. One Small Thing to Do First",
      report_section5_intro: "A next step to try:",
      report_section6_title: "6. Words to Myself",
      report_fallback_emotions: "Not clearly marked yet — still settling.",
      report_fallback_needs: "A little more time to get closer.",
      report_fallback_you: "This section is not yet filled in.",
      report_fallback_context: "Context still worth observing.",
      report_fallback_action: "Start with one small, low-pressure thing.",
      report_fallback_writing: "Not yet filled in.",
      report_empty_fallback: "Not yet filled in.",
      report_self_fallback: "I can take it slowly.",

      /* --- message role labels --- */
      msg_label_user: "You",
      msg_label_guide: "Guide",
      msg_label_report: "Summary record",

      /* --- privacy bar states --- */
      priv_login_hint: "Log in to JTE to enable cross-device encrypted sync",
      priv_checking: "Private sync: checking…",
      priv_enable_btn: "🔒 Enable cross-device encrypted sync",
      priv_unlock_btn: "🔓 Unlock",
      priv_change_passphrase: "Change passphrase",
      priv_synced: "✓ Encrypted sync active (even we can't read it)",
      priv_lock: "Lock",

      /* --- confirm / alert dialogs --- */
      confirm_delete: "Delete this writing record?",
      confirm_delete_prefix: "Delete the record \"",
      confirm_delete_suffix: "\"?",
      confirm_reset: "Clear this session and start over?",
      alert_empty_record: "This record has no content yet. Please write at least one section.",
      alert_copy_fail: "Your browser doesn't allow direct copy. You can download the record instead.",
      copy_title_done: "Copied",

      /* --- misc / punctuation --- */
      records_date_suffix: " records",
      records_search_sr: "Search writing records",
      records_calendar_aria: "Writing records calendar",
      __list_sep: ", ",
    },

    /* ---------------------------------------------------------------- */
    /* Japanese translations — polite です/ます tone, warm and gentle     */
    /* ---------------------------------------------------------------- */
    ja: {
      /* --- page meta --- */
      page_title: "心理的位置移動の書き込みスペース",

      /* --- landing --- */
      landing_kicker: "psychological position shift",
      landing_title: "心理的位置移動の書き込みスペース",
      landing_words: "移動　切り替え　空間",
      btn_start: "書き始める",
      btn_records: "書き込み記録",

      /* --- global toolbar --- */
      btn_copy_title: "まとめをコピー",
      btn_download_title: "記録をダウンロード",
      btn_reset_title: "最初からやり直す",

      /* --- writing flow buttons --- */
      btn_prev: "前へ",
      btn_start_writing: "書き始める",
      btn_next: "次へ",
      btn_done: "完了",

      /* --- input area --- */
      input_label: "あなたの返答を入力してください",
      input_placeholder: "ゆっくりここに書いてください…",
      input_placeholder_sending: "次のガイドを準備しています…",
      input_placeholder_done: "このセッションは完了しました。ダウンロードするか、最初からやり直すことができます。",

      /* --- privacy line --- */
      privacy_local: "書き込みはこのデバイスにのみ保存されます。アップロードはされません。",
      privacy_encrypted: "暗号化された同期が有効です。私たちにも読むことはできません。",
      privacy_link: "プライバシーについて",

      /* --- safety strip --- */
      safety_notice:
        "深刻な危機状態にある方、または自分や他者を傷つけることを考えている方は、この練習をいったん止め、信頼できる人、地域の緊急サービス、または専門の心理・医療機関にすぐにご連絡ください。",

      /* --- step position labels --- */
      step_topic_position: "テーマを選ぶ",
      step_iFirst_position: "私の位置",
      step_you_position: "あなたの位置",
      step_observer_position: "観察者の位置（彼 / 彼女）",
      step_iFinal_position: "私に戻る",
      step_action_position: "小さな次のステップ",
      step_summary_position: "まとめ",
      step_completed_position: "セッション完了",

      /* --- step page titles --- */
      step_topic_title: "今少し近づいてみてもいいと思えることを選んでください",
      step_iFirst_title: "私の位置",
      step_you_title: "あなたの位置",
      step_observer_title: "彼 / 彼女の位置（観察者）",
      step_iFinal_title: "私に戻る",
      step_action_title: "まず一つできる小さなこと",
      step_summary_title: "位置移動の完全な記録",

      /* --- step page prompts --- */
      step_topic_prompt:
        "一番つらいことでなくていいです。今、少し近づいてみてもいいと思えることを選んでください。",
      step_iFirst_prompt:
        "整理しなくて大丈夫です。飾らなくて大丈夫です。このページで本当の気持ちを見てもらいましょう。",
      step_you_prompt:
        "少し前の自分が目の前に座っているところを想像してください。「あなた」という言葉でその人に話しかけてみてください。",
      step_observer_prompt:
        "一歩引いて、観察者のようにこの人が経験していることを見てみましょう。",
      step_iFinal_prompt:
        "今の「私」は、「あなた」と「彼 / 彼女」を見てきました。新しい理解を持って戻ってきてください。",
      step_action_prompt:
        "この行動はすべてを解決しなくていいです。少し自分のケアに近づくだけで十分です。",
      step_summary_prompt:
        "「私」から「あなた」へ、「彼 / 彼女」へ、そして「私」に戻ってきました。このページは今歩んだ旅の痕跡です。",

      /* --- step action button labels --- */
      step_action_next: "次へ",
      step_action_done: "完了",

      /* --- step labels (sidebar) --- */
      step_label_topic: "テーマ",
      step_label_iFirst: "私",
      step_label_you: "あなた",
      step_label_observer: "彼 / 彼女",
      step_label_iFinal: "私に戻る",
      step_label_action: "小さな一歩",
      step_label_summary: "まとめ",

      /* --- step hints --- */
      step_hint_topic: "近づけるものを選ぶ",
      step_hint_iFirst: "本当の気持ちを見てもらう",
      step_hint_you: "以前の自分に話しかける",
      step_hint_observer: "外から眺める",
      step_hint_iFinal: "新しい理解を持って戻る",
      step_hint_action: "プレッシャーの低い次の一歩",
      step_hint_summary: "今回の練習の記録を残す",

      /* --- starter chips --- */
      starter_topic_0: "最近つかえているのは…",
      starter_topic_1: "整理したいのは…",
      starter_topic_2: "一言で言うと…",

      starter_iFirst_0: "私は…と感じています",
      starter_iFirst_1: "実は私はとても…",
      starter_iFirst_2: "一番つらいのは…",
      starter_iFirst_3: "今一番必要なのは…",

      starter_you_0: "あなたはもう…",
      starter_you_1: "あなたがそう感じるのは…という理由があるから",
      starter_you_2: "あなたは…しなくていいです",
      starter_you_3: "あなたはまず…できます",

      starter_observer_0: "彼は…",
      starter_observer_1: "彼女は…ではなく、実は…",
      starter_observer_2: "外から見ると、この出来事は…",
      starter_observer_3: "彼 / 彼女が今必要としているのは…",

      starter_iFinal_0: "今わかったのは…",
      starter_iFinal_1: "少し理解できたのは…",
      starter_iFinal_2: "まず…できます",
      starter_iFinal_3: "自分に言いたいのは…",

      starter_action_0: "まず休憩します",
      starter_action_1: "明日、一番小さな一歩を踏み出します",
      starter_action_2: "今の状況を誰かに伝えます",
      starter_action_3: "まず書き出してみます",

      /* --- guide panel buttons --- */
      guide_prev: "前へ",
      guide_write: "書き始める",

      /* --- footer --- */
      footer_note:
        "内容はこのブラウザにのみ保存されます。Markdown ファイルとしてダウンロードできます。",

      /* --- records panel --- */
      records_title: "書き込み記録",
      btn_close_records_title: "記録を閉じる",
      records_empty_title: "書き込み記録はまだありません。",
      records_empty_hint: "位置移動のセッションを完了すると、ここに自動的に保存されます。",
      records_empty_compact_title: "一致する記録が見つかりませんでした。",
      records_empty_compact_hint: "別のキーワードで試すか、全日付で表示してください。",
      records_search_placeholder: "テーマ・内容・日付で検索…",
      records_result_all: "すべての記録",
      records_result_search: "検索結果",
      records_count_unit: "件",
      btn_clear_search: "検索をクリア",
      btn_all_dates: "全日付",
      btn_prev_month: "前の月",
      btn_next_month: "次の月",
      btn_view: "読む",
      btn_edit: "編集",
      btn_delete: "削除",
      btn_back_to_list: "一覧に戻る",
      btn_cancel: "キャンセル",
      btn_save_edit: "変更を保存",

      /* --- record editor field labels / hints --- */
      field_topic_label: "テーマ",
      field_topic_hint: "今回整理したかったこと",
      field_iFirst_label: "私の位置",
      field_iFirst_hint: "この出来事に対する私の気持ち",
      field_you_label: "あなたの位置",
      field_you_hint: "以前の自分への言葉",
      field_observer_label: "観察者の位置（彼 / 彼女）",
      field_observer_hint: "外から眺める視点",
      field_iFinal_label: "私に戻る",
      field_iFinal_hint: "新しい理解を持って戻る",
      field_action_label: "小さな次のステップ",
      field_action_hint: "まずできる一つのこと",

      /* --- record item preview fallback --- */
      record_preview_fallback: "この記録はそっとあなたが戻るのを待っています。",
      record_untitled: "タイトルなしの書き込み",

      /* --- calendar weekday headers --- */
      cal_sun: "日",
      cal_mon: "月",
      cal_tue: "火",
      cal_wed: "水",
      cal_thu: "木",
      cal_fri: "金",
      cal_sat: "土",

      /* --- dynamic nudge messages --- */
      sys_intro:
        "「私」「あなた」「彼 / 彼女」という三つの視点を使って、今の自分の状態をやさしく見ていきましょう。\n\nすぐに問題を解決しようとしなくていいです。違う角度から自分に近づくための時間です。\n\n完全に書けなくても、きれいに書けなくても大丈夫です。ただ正直に書いてください。\n\nまず、最近つかえている・悩んでいる・疲れている・理不尽に感じている・不安・逃げ出したいと思っていることを選んでください。一言で表すとしたら、どんなことですか？",

      nudge_topic_prefix: "では、「",
      nudge_topic_suffix:
        "」をここに置いておきましょう。\n\n今度は「私」から始めて、この出来事に対する気持ちを書いてください。\n\nこんな書き出しから始めてみてください：\n\n私は…と感じています\n実は私はとても…\n一番つらいのは…\n言えないでいるのは…\n今一番必要なのは…",

      nudge_iFirst_opening:
        "「私」の位置に戻り、本当の気持ちを出してくれてありがとうございます。\n\n",
      nudge_iFirst_emotion_found: "いくつかはっきりした感情が伝わってきます：",
      nudge_iFirst_emotion_none:
        "これは、意志の力だけでは乗り越えにくい重さを背負っている状態だと受け取っています。",
      nudge_iFirst_need_found: "また、ケアが必要な部分もあるようです：",
      nudge_iFirst_need_none:
        "今すぐ解決策が必要なのではなく、これらの気持ちを少し安全な場所に置くことが必要かもしれません。",
      nudge_iFirst_closing:
        "\n\n今は急いで解決しなくて大丈夫です。疲れてつかえていた自分が、目の前に座っているところを想像してください。\n\n次は「あなた」から始めて、その人に数言葉をかけてみてください。",

      nudge_you_opening:
        "ここで大切な変化が起きています。痛みの中にいるだけでなく、痛みの中にいる自分に語りかけ始めています。\n\n",
      nudge_you_support_found: "支えになる言葉が見えます：",
      nudge_you_support_none:
        "このステップは、少し自責を手放し、自分が自分に応答する機会を作る練習です。",
      nudge_you_closing:
        "\n\nもう少し後ろに引いてみましょう。観察者として、この出来事を経験している人を眺めてみてください。\n\nその人は、さっきのあなたです。「彼」または「彼女」から始めて、この人が経験していることを書いてください。",

      nudge_observer_opening_found: "観察者の位置から見ると、この出来事はあなただけの問題ではなく、こんなことも関わっています：",
      nudge_observer_opening_none:
        "観察者の位置から見ると、これは個人の能力の問題だけでなく、長い時間かけて積み重なったストレスや制約も含まれているようです。",
      nudge_observer_closing:
        "\n\n彼 / 彼女は、目の前の困難だけで定義されるのではありません。責めるだけでは理解できません。\n\nゆっくりと「私」の位置に戻ってきてください。でも今回の「私」は、「あなた」と「彼 / 彼女」を見てきた「私」です。\n\n改めて「私」で書いてみてください：今、何に気づきましたか？より理解できたことは何ですか？自分をどのようにケアしたいですか？",

      nudge_iFinal_opening:
        "今書いた「私」は、最初の「私」とは少し違います。\n\n最初は感情の中に閉じ込められているようでした。今は、理解と自分をケアしようとする声が少し増えています。\n\n",
      nudge_iFinal_action_found: "具体的な方向性も見えてきました：",
      nudge_iFinal_action_none:
        "今すべての問題を解決しなくていいです。小さく、プレッシャーが低く、今日か明日にできる行動を一つ見つけてください。",
      nudge_iFinal_closing:
        "\n\n次の自分へのケアとして、一つだけ小さなことを選ぶとしたら、まず何をしますか？",

      nudge_action_done:
        "今日は問題をすべて解決するためではなく、つかえていた場所から、自分を見ることができる場所へ少し動くための時間でした。\n\nこの動き自体が、一つの始まりです。\n\n記録をまとめました。",

      nudge_summary_already_done:
        "この回の練習は終了しました。記録をコピーまたはダウンロードするか、左上のリスタートボタンから新しいセッションを始めることができます。",

      crisis_message:
        "今のあなたの安全をとても大切に思っています。\n\nこの状態は、書き込みの練習だけで対応できるものではありません。今すぐ信頼できる人に連絡するか、地域の緊急サービス、カウンセラー、または医療機関にご連絡ください。\n\n可能であれば、まずこの一つの行動をしてみてください：自分を傷つける可能性のあるものから離れ、すぐに連絡できる人に「今安全ではありません。そばにいてほしいです」と伝えてください。",

      /* --- report labels --- */
      report_title: "心理的位置移動の記録",
      report_created: "作成日時：",
      report_section1_title: "一、最初の状態",
      report_section1_topic: "テーマ：",
      report_section1_emotions: "最初に感じた気持ち：",
      report_section1_needs: "必要と思われること：",
      report_section1_writing: "元の書き込み：",
      report_section2_title: "二、「あなた」の位置からの気づき",
      report_section2_intro: "「あなた」の位置に、こんなサポートや理解が現れました：",
      report_section3_title: "三、「彼 / 彼女」の位置からの観察",
      report_section3_intro: "観察者の視点から見ると、この出来事に含まれる可能性のあること：",
      report_section3_writing: "元の観察：",
      report_section4_title: "四、「私」に戻った後の新しい発見",
      report_section4_intro: "「私」の位置に戻った後、見えてきたこと：",
      report_section5_title: "五、まずできる一つのこと",
      report_section5_intro: "次に試せること：",
      report_section6_title: "六、自分への言葉",
      report_fallback_emotions: "まだ明確ではありません。少しずつ整理されていくかもしれません。",
      report_fallback_needs: "もう少し時間をかけて近づいていきましょう。",
      report_fallback_you: "この部分はまだ書かれていません。",
      report_fallback_context: "状況はまだ観察中です。",
      report_fallback_action: "まず小さく、プレッシャーの低いことをしてみましょう。",
      report_fallback_writing: "まだ書かれていません。",
      report_empty_fallback: "まだ書かれていません。",
      report_self_fallback: "ゆっくりでいいです。",

      /* --- message role labels --- */
      msg_label_user: "あなた",
      msg_label_guide: "ガイド",
      msg_label_report: "まとめ記録",

      /* --- privacy bar states --- */
      priv_login_hint: "JTE にログインしてクロスデバイス暗号化同期を有効にしてください",
      priv_checking: "プライベート同期：確認中…",
      priv_enable_btn: "🔒 クロスデバイス暗号化同期を有効にする",
      priv_unlock_btn: "🔓 ロック解除",
      priv_change_passphrase: "パスフレーズを変更",
      priv_synced: "✓ 暗号化同期が有効です（私たちにも読めません）",
      priv_lock: "ロック",

      /* --- confirm / alert dialogs --- */
      confirm_delete: "この書き込み記録を削除しますか？",
      confirm_delete_prefix: "「",
      confirm_delete_suffix: "」を削除しますか？",
      confirm_reset: "このセッションをクリアして最初からやり直しますか？",
      alert_empty_record: "この記録にはまだ内容がありません。少なくとも一つのセクションを書いてください。",
      alert_copy_fail: "ブラウザが直接コピーを許可していません。記録をダウンロードすることができます。",
      copy_title_done: "コピーしました",

      /* --- misc / punctuation --- */
      records_date_suffix: " の記録",
      records_search_sr: "書き込み記録を検索",
      records_calendar_aria: "書き込み記録カレンダー",
      __list_sep: "、",
    },
  };

  /* ------------------------------------------------------------------ */
  /* 2. jteI18nApply — engine が言語切替時に呼ぶフック                   */
  /*    ここで app.js の動的レンダリング済みコンテンツを再描画する。       */
  /* ------------------------------------------------------------------ */

  window.jteI18nApply = function (lang) {
    // Helper: get translated string (falls back to zh via jteT)
    var t = window.jteT || function (k, z) { return z != null ? z : k; };

    /* -- update <title> -- */
    if (document.title !== undefined) {
      document.title = t("page_title", "心理位移書寫空間");
    }

    /* -- update aria-labels that are set in HTML but not data-i18n -- */
    var writingSection = document.querySelector("#writingPage");
    if (writingSection) writingSection.setAttribute("aria-label", t("writing_page_aria", "心理位移書寫"));

    var globalActions = document.querySelector(".global-actions");
    if (globalActions) globalActions.setAttribute("aria-label", t("global_actions_aria", "工具操作"));

    var starterRowEl = document.querySelector("#starterRow");
    if (starterRowEl) starterRowEl.setAttribute("aria-label", t("starter_row_aria", "句子開頭"));

    /* -- update icon button title + aria-label (title/aria set by attr) -- */
    var copyBtn = document.querySelector("#copySummaryButton");
    if (copyBtn) {
      var copyTitle = t("btn_copy_title", "複製整理");
      copyBtn.title = copyTitle;
      copyBtn.setAttribute("aria-label", copyTitle);
    }
    var downloadBtn = document.querySelector("#downloadButton");
    if (downloadBtn) {
      var dlTitle = t("btn_download_title", "下載紀錄");
      downloadBtn.title = dlTitle;
      downloadBtn.setAttribute("aria-label", dlTitle);
    }
    var resetBtn = document.querySelector("#resetButton");
    if (resetBtn) {
      var resetTitle = t("btn_reset_title", "重新開始");
      resetBtn.title = resetTitle;
      resetBtn.setAttribute("aria-label", resetTitle);
    }
    var closeRecBtn = document.querySelector("#closeRecordsButton");
    if (closeRecBtn) {
      var crTitle = t("btn_close_records_title", "關閉記錄");
      closeRecBtn.title = crTitle;
      closeRecBtn.setAttribute("aria-label", crTitle);
    }

    /* -- update textarea placeholder based on current app state -- */
    var inputEl = document.querySelector("#messageInput");
    if (inputEl) {
      // Detect state from body classes (set by app.js render())
      var isSendingState = document.body.classList.contains("is-summary")
        ? false
        : (inputEl.placeholder && inputEl.placeholder === "正在整理下一頁引導...");
      if (document.body.classList.contains("is-summary")) {
        inputEl.placeholder = t("input_placeholder_done", "這一輪已完成。可以下載紀錄，或重新開始。");
      } else {
        inputEl.placeholder = t("input_placeholder", "在這裡慢慢寫下來...");
      }
    }

    /* -- refresh dynamic privacy line via existing app function -- */
    if (typeof window.wsRefreshPrivacyLine === "function") {
      window.wsRefreshPrivacyLine();
    }

    /* -- refresh the records panel if open (re-renders dynamic HTML) -- */
    if (typeof window.renderRecordsPanel === "function") {
      window.renderRecordsPanel();
    }

    /* -- re-render the main writing view (messages, steps, starters) -- */
    if (typeof window.render === "function") {
      window.render();
    }

    /* signal that i18n is applied */
    window.__jteI18nLoaded = true;
  };

  /* Signal readiness immediately (translations are available) */
  window.__jteI18nLoaded = true;

})();
