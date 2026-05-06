const STORAGE_KEY = "position-shift-space-v2";

const steps = [
  {
    id: "topic",
    label: "主題",
    hint: "選一件現在願意靠近的事",
    position: "選擇主題",
    starters: ["最近讓我卡住的是……", "我想整理的是……", "如果一句話說，是……"],
  },
  {
    id: "iFirst",
    label: "我",
    hint: "讓真實感受先被看見",
    position: "我的位置",
    starters: ["我覺得……", "我其實很……", "我最受不了的是……", "我現在最需要的是……"],
  },
  {
    id: "you",
    label: "你",
    hint: "對剛才的自己說話",
    position: "你的位置",
    starters: ["你已經……", "你會這樣感覺，是因為……", "你不用……", "你可以先……"],
  },
  {
    id: "observer",
    label: "他 / 她",
    hint: "從旁觀者角度觀看",
    position: "他 / 她的位置",
    starters: ["他正在……", "她其實不是……而是……", "如果從外面看，這件事……", "他 / 她現在可能需要……"],
  },
  {
    id: "iFinal",
    label: "回到我",
    hint: "帶著新的理解回來",
    position: "回到我",
    starters: ["我現在發現……", "我比較明白……", "我可以先……", "我想對自己說……"],
  },
  {
    id: "action",
    label: "小行動",
    hint: "選一件低壓力的下一步",
    position: "小行動",
    starters: ["我可以先休息一下", "我明天先做最小的一步", "我可以找人說明狀態", "我先把事情寫下來"],
  },
  {
    id: "summary",
    label: "整理",
    hint: "留下這次練習的紀錄",
    position: "整理紀錄",
    starters: [],
  },
];

const pageCopy = {
  topic: {
    title: "選一件現在願意靠近的事",
    prompt: "不用選最嚴重的事，選一件你現在願意稍微靠近的事就好。",
    action: "下一步",
  },
  iFirst: {
    title: "我的位置",
    prompt: "先不整理，也不修飾。讓真實感受在這一頁被看見。",
    action: "下一步",
  },
  you: {
    title: "你的位置",
    prompt: "想像剛才的自己坐在你面前，請用「你」對他說話。",
    action: "下一步",
  },
  observer: {
    title: "他 / 她的位置",
    prompt: "往後退一步，像旁觀者一樣觀看這個人正在經歷什麼。",
    action: "下一步",
  },
  iFinal: {
    title: "回到我",
    prompt: "這一次的我，已經看過你和他 / 她。請帶著新的理解回來。",
    action: "下一步",
  },
  action: {
    title: "可以先做的一件小事",
    prompt: "這個行動不需要解決整件事，只要讓你往照顧自己靠近一點點。",
    action: "下一步",
  },
  summary: {
    title: "完整位移紀錄",
    prompt: "從我、你、他 / 她，再回到我。這一頁是剛才移動過程留下的痕跡。",
    action: "已完成",
  },
};

const emotionWords = [
  "累",
  "疲憊",
  "焦慮",
  "怕",
  "害怕",
  "煩",
  "生氣",
  "憤怒",
  "委屈",
  "無助",
  "無力",
  "想逃",
  "沒力氣",
  "很悶",
  "壓力",
  "難過",
  "孤單",
  "慌",
  "撐不下去",
];

const needWords = [
  "休息",
  "理解",
  "支持",
  "陪伴",
  "空間",
  "安全",
  "被看見",
  "幫忙",
  "界線",
  "時間",
  "安靜",
];

const supportWords = [
  "努力",
  "不用",
  "慢慢來",
  "不是你的錯",
  "可以先",
  "值得",
  "陪你",
  "理解",
  "休息",
  "不要一個人",
];

const contextWords = [
  "主管",
  "工作",
  "家人",
  "伴侶",
  "朋友",
  "同學",
  "環境",
  "責任",
  "期待",
  "壓力",
  "時間",
  "關係",
  "制度",
  "溝通",
  "衝突",
];

const actionWords = [
  "休息",
  "睡",
  "寫下",
  "整理",
  "說明",
  "討論",
  "暫停",
  "深呼吸",
  "優先順序",
  "明天",
  "今天",
  "找人",
];

const crisisWords = [
  "自殺",
  "想死",
  "不想活",
  "結束生命",
  "傷害自己",
  "傷害別人",
  "殺了他",
  "殺了她",
  "殺人",
  "尋死",
  "輕生",
  "沒有活下去",
];

const emptyEntries = {
  topic: "",
  iFirst: "",
  you: "",
  observer: "",
  iFinal: "",
  action: "",
};

const chatLog = document.querySelector("#chatLog");
const messageForm = document.querySelector("#messageForm");
const messageInput = document.querySelector("#messageInput");
const starterRow = document.querySelector("#starterRow");
const stepList = document.querySelector("#stepList");
const currentPosition = document.querySelector("#currentPosition");
const progressFill = document.querySelector("#progressFill");
const resetButton = document.querySelector("#resetButton");
const downloadButton = document.querySelector("#downloadButton");
const copySummaryButton = document.querySelector("#copySummaryButton");
const landingPage = document.querySelector("#landingPage");
const writingPage = document.querySelector("#writingPage");
const startButton = document.querySelector("#startButton");
const pageTitle = document.querySelector("#pageTitle");
const pagePrompt = document.querySelector("#pagePrompt");
const sendButtonText = document.querySelector("#sendButtonText");
const prevButton = document.querySelector("#prevButton");
const sendButton = document.querySelector("#sendButton");

let state = loadState();
let isSending = false;

function makeId(prefix) {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createInitialState() {
  const now = new Date().toISOString();
  return {
    sessionId: makeId("session"),
    createdAt: now,
    started: false,
    activeStep: "topic",
    completed: false,
    summaryMarkdown: "",
    entries: { ...emptyEntries },
    analysis: {
      emotions: [],
      needs: [],
      supports: [],
      contexts: [],
      actions: [],
    },
    messages: [
      {
        role: "assistant",
        kind: "system",
        step: "topic",
        text:
          "我們會用「我、你、他 / 她」的方式，陪你看見現在的狀態。\n\n這不是要你立刻解決問題，而是先讓你從不同角度靠近自己。\n\n你可以不用寫得完整，也不用寫得漂亮，只要真實就好。\n\n請先選一件最近讓你卡住、煩惱、疲憊、委屈、焦慮或想逃避的事情。若要用一句話描述，會是什麼？",
      },
    ],
  };
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return createInitialState();

  try {
    const parsed = JSON.parse(raw);
    return {
      ...createInitialState(),
      ...parsed,
      started: parsed.started ?? true,
      entries: { ...emptyEntries, ...(parsed.entries || {}) },
      analysis: {
        emotions: [],
        needs: [],
        supports: [],
        contexts: [],
        actions: [],
        ...(parsed.analysis || {}),
      },
      messages: Array.isArray(parsed.messages) && parsed.messages.length ? parsed.messages : createInitialState().messages,
    };
  } catch {
    return createInitialState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function activeStepIndex() {
  return steps.findIndex((step) => step.id === state.activeStep);
}

function getStep(id = state.activeStep) {
  return steps.find((step) => step.id === id) || steps[0];
}

function addMessage(message) {
  state.messages.push({
    id: makeId("message"),
    at: new Date().toISOString(),
    ...message,
  });
}

function setStep(stepId) {
  state.activeStep = stepId;
}

function currentEntryKey() {
  return state.activeStep in state.entries ? state.activeStep : "";
}

function saveDraftToEntry() {
  const key = currentEntryKey();
  if (!key || !messageInput || state.completed) return;
  state.entries[key] = messageInput.value.trim();
}

function fillInputFromEntry() {
  const key = currentEntryKey();
  if (!messageInput || !key) return;
  messageInput.value = state.entries[key] || "";
}

function clearDownstreamFrom(stepId) {
  const index = steps.findIndex((step) => step.id === stepId);
  const downstreamIds = steps.slice(index + 1).map((step) => step.id);
  for (const id of downstreamIds) {
    if (id in state.entries) state.entries[id] = "";
  }
  state.summaryMarkdown = "";
  state.completed = false;
  state.messages = state.messages.filter(
    (message) => !(message.step === stepId && message.role === "user") && !downstreamIds.includes(message.step) && message.kind !== "report",
  );
}

function canGoPrevious() {
  return state.started && !state.completed && activeStepIndex() > 0 && state.activeStep !== "summary";
}

function goPreviousStep() {
  if (!canGoPrevious() || isSending) return;
  saveDraftToEntry();
  const previous = steps[activeStepIndex() - 1];
  if (!previous) return;
  state.completed = false;
  state.summaryMarkdown = "";
  setStep(previous.id);
  fillInputFromEntry();
  render();
  scrollToGuide();
}

function scrollToGuide() {
  blurActiveElement();
  requestAnimationFrame(() => {
    chatLog.scrollTop = 0;
    const target = document.querySelector(".writing-sheet") || chatLog || writingPage;
    if (target && typeof target.scrollIntoView === "function") {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function blurActiveElement() {
  const active = document.activeElement;
  if (active && typeof active.blur === "function") active.blur();
  if (messageInput && typeof messageInput.blur === "function") messageInput.blur();
  if (sendButton && typeof sendButton.blur === "function") sendButton.blur();
  if (prevButton && typeof prevButton.blur === "function") prevButton.blur();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function detectWords(text, words) {
  return unique(words.filter((word) => text.includes(word)));
}

function detectCrisis(text) {
  return detectWords(text, crisisWords).length > 0;
}

function shortText(text, max = 70) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max)}...` : clean;
}

function joinOrFallback(values, fallback) {
  return values.length ? values.join("、") : fallback;
}

function nudgeForI(text) {
  const emotions = detectWords(text, emotionWords);
  const needs = detectWords(text, needWords);
  state.analysis.emotions = unique([...state.analysis.emotions, ...emotions]);
  state.analysis.needs = unique([...state.analysis.needs, ...needs]);

  const emotionLine = emotions.length
    ? `這裡有幾個很明顯的感受：${emotions.join("、")}。`
    : "我先把它理解成：你正在承受一個不太容易單靠意志力撐過去的狀態。";
  const needLine = needs.length
    ? `同時也好像有一個需要被照顧的部分：${needs.join("、")}。`
    : "也許你現在需要的不是立刻解法，而是先讓這些感受被放在一個比較安全的位置。";

  return `我聽見你把自己放回「我」的位置，讓真實感受先出來。\n\n${emotionLine}\n${needLine}\n\n現在，我們先不要急著解決問題。請你想像剛才那個很累、很卡住的自己，就坐在你面前。\n\n接下來請用「你」開頭，對他說幾句話。`;
}

function nudgeForYou(text) {
  const supports = detectWords(text, supportWords);
  state.analysis.supports = unique([...state.analysis.supports, ...supports]);

  const supportLine = supports.length
    ? `我看到裡面有一些支持自己的聲音：${supports.join("、")}。`
    : "這一步已經在練習把自責稍微放下，讓自己有機會被自己回應。";

  return `這裡出現了一個重要的轉變：你不只是站在痛苦裡，也開始能夠對痛苦中的自己說話。\n\n${supportLine}\n\n現在我們再往後退一步。請你想像自己像一位旁觀者，正在看一個人經歷這件事。\n\n這個人就是剛才的你。請用「他」或「她」開頭，描述這個人正在經歷什麼。`;
}

function nudgeForObserver(text) {
  const contexts = detectWords(text, contextWords);
  state.analysis.contexts = unique([...state.analysis.contexts, ...contexts]);

  const contextLine = contexts.length
    ? `從旁觀者位置看，這件事不只在你身上，也牽涉到這些脈絡：${contexts.join("、")}。`
    : "從旁觀者位置看，這件事好像不只是個人能力問題，也包含長時間累積的壓力與限制。";

  return `${contextLine}\n\n他 / 她不是只等於眼前的困境，也不是只能用責備來理解。\n\n現在，請你慢慢回到「我」的位置。但這一次的「我」，已經看過剛才的「你」和「他 / 她」。\n\n請重新用「我」來寫幾句話：我現在發現什麼？我比較明白什麼？我想怎麼照顧自己？`;
}

function nudgeForIFinal(text) {
  const actions = detectWords(text, actionWords);
  state.analysis.actions = unique([...state.analysis.actions, ...actions]);

  const actionLine = actions.length
    ? `我也看到一些可以落地的方向：${actions.join("、")}。`
    : "現在先不用把問題全部解決，只要找一個很小、低壓力、今天或明天可以做的動作就好。";

  return `你剛剛的「我」和一開始的「我」已經不太一樣了。\n\n一開始比較像是被情緒困住，現在則多了一些理解與照顧自己的聲音。\n\n${actionLine}\n\n如果只選一件很小的事，作為接下來照顧自己的行動，你想先做什麼？`;
}

function nudgeForAction(text) {
  const actions = detectWords(text, actionWords);
  state.analysis.actions = unique([...state.analysis.actions, ...actions]);
  state.completed = true;
  return "今天不是要你把問題完全解決，而是陪你從一個被困住的位置，稍微移動到可以看見自己的地方。\n\n這個移動本身，就是一種開始。\n\n我已經幫你整理成一份紀錄。";
}

function safetyMessage() {
  return "我很重視你現在的安全。\n\n這個狀態已經不適合只靠書寫練習處理。請你現在先聯絡身邊可信任的人，或立即尋求當地緊急服務、心理諮商或醫療協助。\n\n如果你願意，也可以先做一件最小的安全動作：離開可能傷害自己的物品或場所，並告訴一個可以立刻聯絡的人：「我現在不安全，需要你陪我。」";
}

function buildTransition(text) {
  if (detectCrisis(text)) {
    return {
      fromStep: state.activeStep,
      toStep: state.activeStep,
      replyStep: state.activeStep,
      fallbackText: safetyMessage(),
      kind: "alert",
      skipLlm: true,
    };
  }

  switch (state.activeStep) {
    case "topic":
      state.entries.topic = text;
      setStep("iFirst");
      return {
        fromStep: "topic",
        toStep: "iFirst",
        step: "iFirst",
        replyStep: "iFirst",
        fallbackText:
          `好，我們就先把「${shortText(text, 54)}」放在這裡。\n\n現在請你用「我」開頭，寫下你在這件事裡的感受。\n\n你可以從這些句子開始：\n\n我覺得……\n我其實很……\n我最受不了的是……\n我不敢說的是……\n我現在最需要的是……`,
      };
    case "iFirst":
      state.entries.iFirst = text;
      setStep("you");
      return {
        fromStep: "iFirst",
        toStep: "you",
        step: "you",
        replyStep: "you",
        fallbackText: nudgeForI(text),
      };
    case "you":
      state.entries.you = text;
      setStep("observer");
      return {
        fromStep: "you",
        toStep: "observer",
        step: "observer",
        replyStep: "observer",
        fallbackText: nudgeForYou(text),
      };
    case "observer":
      state.entries.observer = text;
      setStep("iFinal");
      return {
        fromStep: "observer",
        toStep: "iFinal",
        step: "iFinal",
        replyStep: "iFinal",
        fallbackText: nudgeForObserver(text),
      };
    case "iFinal":
      state.entries.iFinal = text;
      setStep("action");
      return {
        fromStep: "iFinal",
        toStep: "action",
        step: "action",
        replyStep: "action",
        fallbackText: nudgeForIFinal(text),
      };
    case "action":
      state.entries.action = text;
      setStep("summary");
      return {
        fromStep: "action",
        toStep: "summary",
        step: "summary",
        replyStep: "summary",
        fallbackText: nudgeForAction(text),
        addReport: true,
      };
    case "summary":
      return {
        fromStep: "summary",
        toStep: "summary",
        step: "summary",
        replyStep: "summary",
        fallbackText: "這一輪練習已經完成。你可以複製或下載紀錄，也可以按左上方的重新開始，開一輪新的整理。",
        skipLlm: true,
      };
    default:
      setStep("topic");
      return null;
  }
}

async function handleStep(text) {
  const transition = buildTransition(text);
  if (!transition) return;

  addMessage({
    role: "assistant",
    kind: transition.kind,
    step: transition.replyStep,
    text: transition.fallbackText,
  });

  if (!transition.addReport) return;

  const localReport = buildMarkdownReport();
  state.summaryMarkdown = localReport;
  addMessage({
    role: "assistant",
    kind: "report",
    step: "summary",
    text: localReport,
  });
}

function buildMarkdownReport() {
  const emotionText = joinOrFallback(state.analysis.emotions, "尚未明確標記，也可能仍在整理中");
  const needsText = joinOrFallback(state.analysis.needs, "需要再多一點時間靠近");
  const supportText = state.entries.you ? state.entries.you : "這一段尚未填寫";
  const contextText = joinOrFallback(state.analysis.contexts, "事件脈絡仍可再觀察");
  const actionText = state.entries.action || joinOrFallback(state.analysis.actions, "先做一件低壓力的小事");
  const selfLine = extractSelfLine();

  return `# 心理位移整理紀錄

建立時間：${formatDateTime(state.createdAt)}

## 一、我原本的狀態

主題：${state.entries.topic || "尚未填寫"}

使用者一開始主要感受到：${emotionText}

可能需要：${needsText}

原始書寫：
${state.entries.iFirst || "尚未填寫"}

## 二、你的位置帶來的提醒

在「你」的位置中，出現了這些支持與理解：

${supportText}

## 三、他 / 她的位置帶來的觀察

從旁觀者角度來看，這件事可能包含：${contextText}

原始觀察：
${state.entries.observer || "尚未填寫"}

## 四、回到我之後的新發現

使用者重新回到「我」的位置後，看見：

${state.entries.iFinal || "尚未填寫"}

## 五、可以先做的一件小事

接下來可以嘗試：

${actionText}

## 六、給自己的話

> ${selfLine}`;
}

function extractSelfLine() {
  const source = state.entries.iFinal || state.entries.you || state.entries.action || "";
  const sentences = source
    .split(/[。！？\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
  const preferred = sentences.find((sentence) => sentence.includes("我想對自己說") || sentence.includes("慢慢來") || sentence.includes("可以"));
  return preferred || sentences[0] || "我可以慢慢來。";
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("zh-Hant", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderSteps() {
  const index = activeStepIndex();
  if (stepList) {
    stepList.innerHTML = steps
      .map((step, stepIndex) => {
        const classes = ["step-item"];
        if (stepIndex === index) classes.push("is-active");
        if (stepIndex < index || state.completed) classes.push("is-done");
        const marker = stepIndex < index || state.completed ? "✓" : stepIndex + 1;
        return `<li class="${classes.join(" ")}">
          <span class="step-index">${marker}</span>
          <span>
            <strong>${escapeHtml(step.label)}</strong>
            <span>${escapeHtml(step.hint)}</span>
          </span>
        </li>`;
      })
      .join("");
  }

  currentPosition.textContent = state.completed ? "整理完成" : getStep().position;
  const percent = state.completed ? 100 : Math.max(6, (index / (steps.length - 1)) * 100);
  progressFill.style.width = `${percent}%`;
}

function renderStarters() {
  const starters = getStep().starters || [];
  starterRow.innerHTML = starters
    .map((starter) => `<button class="starter-chip" type="button">${escapeHtml(starter)}</button>`)
    .join("");
}

function renderMessages() {
  chatLog.innerHTML = visibleMessages().map(renderMessage).join("");
  requestAnimationFrame(() => {
    chatLog.scrollTop = 0;
  });
}

function visibleMessages() {
  if (!state.started) return [];

  if (state.completed || state.activeStep === "summary") {
    const report = [...state.messages].reverse().find((message) => message.kind === "report");
    return report ? [report] : [];
  }

  const currentAssistant = [...state.messages]
    .reverse()
    .find((message) => message.role === "assistant" && message.step === state.activeStep);

  return currentAssistant ? [currentAssistant] : [];
}

function renderMessage(message) {
  const roleClass = message.role === "user" ? "user" : "assistant";
  const kindClass = message.kind ? ` ${message.kind}` : "";
  const label = message.role === "user" ? "你" : message.kind === "report" ? "整理紀錄" : "引導";
  const step = getStep(message.step);

  if (message.kind === "report") {
    return `<article class="message assistant report-message">
      <div class="message-meta"><span>${label}</span><span>${escapeHtml(step.label)}</span></div>
      <div class="message-bubble">${renderReport(message.text)}</div>
    </article>`;
  }

  return `<article class="message ${roleClass}${kindClass}">
    <div class="message-meta"><span>${label}</span><span>${escapeHtml(step.label)}</span></div>
    <div class="message-bubble">${escapeHtml(message.text)}</div>
  </article>`;
}

function renderReport(markdown) {
  const sections = parseReport(markdown);
  if (!sections.length) return `<pre>${escapeHtml(markdown)}</pre>`;
  const title = sections.shift();
  return `<div class="report">
    <h3>${escapeHtml(title.body.replace(/^#\s*/, ""))}</h3>
    ${sections
      .map(
        (section) => `<section class="report-section">
          <h4>${escapeHtml(section.title)}</h4>
          ${renderReportBody(section.body)}
        </section>`,
      )
      .join("")}
  </div>`;
}

function renderReportBody(body) {
  const normalized = body
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (!normalized.length) {
    return `<p class="report-empty">尚未填寫</p>`;
  }

  const blocks = [];
  let current = [];

  for (const line of normalized) {
    const isListLine = /^[-*]\s+/.test(line);
    const previous = current[current.length - 1] || "";
    const previousIsListLine = /^[-*]\s+/.test(previous);
    const shouldStartNewBlock = current.length && !isListLine && !previousIsListLine && line.length > 34;

    if (shouldStartNewBlock) {
      blocks.push(current);
      current = [line];
    } else {
      current.push(line);
    }
  }

  if (current.length) blocks.push(current);

  return blocks
    .map((block) => {
      const cleanBlock = block
        .map((line) => escapeHtml(line))
        .join("<br>");
      return `<p>${cleanBlock}</p>`;
    })
    .join("");
}

function parseReport(markdown) {
  const lines = markdown.split("\n");
  const sections = [];
  let current = { title: "", body: "" };

  for (const line of lines) {
    if (line.startsWith("# ")) {
      if (current.title || current.body) sections.push(current);
      current = { title: "title", body: line };
    } else if (line.startsWith("## ")) {
      if (current.title || current.body) sections.push(current);
      current = { title: line.replace(/^##\s*/, ""), body: "" };
    } else {
      current.body += `${line}\n`;
    }
  }

  if (current.title || current.body) sections.push(current);
  return sections.map((section) => ({
    title: section.title,
    body: section.body.trim(),
  }));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const activeCopy = pageCopy[state.activeStep] || pageCopy.topic;
  document.body.classList.toggle("is-landing", !state.started);
  document.body.classList.toggle("is-summary", state.completed || state.activeStep === "summary");
  if (landingPage) landingPage.hidden = state.started;
  if (writingPage) writingPage.hidden = !state.started;
  if (pageTitle) pageTitle.textContent = activeCopy.title;
  if (pagePrompt) pagePrompt.textContent = activeCopy.prompt;
  if (sendButtonText) sendButtonText.textContent = activeCopy.action;
  renderSteps();
  renderStarters();
  renderMessages();
  messageInput.disabled = state.completed || isSending;
  if (sendButton) sendButton.disabled = state.completed || isSending;
  if (prevButton) {
    prevButton.hidden = !canGoPrevious();
    prevButton.disabled = isSending;
  }
  if (isSending) {
    messageInput.placeholder = "正在整理下一頁引導...";
  } else if (state.completed) {
    messageInput.placeholder = "這一輪已完成。可以下載紀錄，或重新開始。";
  } else {
    messageInput.placeholder = "在這裡寫下現在浮現的話...";
  }
  saveState();
}

messageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!state.started || !text || state.completed || isSending) return;

  clearDownstreamFrom(state.activeStep);
  addMessage({
    role: "user",
    step: state.activeStep,
    text,
  });
  messageInput.value = "";
  isSending = true;
  render();

  try {
    await handleStep(text);
  } finally {
    isSending = false;
    render();
    scrollToGuide();
  }
});

starterRow.addEventListener("click", (event) => {
  const chip = event.target.closest(".starter-chip");
  if (!chip || state.completed) return;
  const current = messageInput.value.trim();
  messageInput.value = current ? `${current}\n${chip.textContent}` : chip.textContent;
  messageInput.focus();
});

if (prevButton) {
  prevButton.addEventListener("click", goPreviousStep);
}

resetButton.addEventListener("click", () => {
  const confirmed = window.confirm("要清除目前這一輪練習，重新開始嗎？");
  if (!confirmed) return;
  state = createInitialState();
  isSending = false;
  render();
  scrollToGuide();
});

downloadButton.addEventListener("click", () => {
  const markdown = state.summaryMarkdown || buildMarkdownReport();
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `心理位移整理紀錄-${new Date().toISOString().slice(0, 10)}.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

copySummaryButton.addEventListener("click", async () => {
  const markdown = state.summaryMarkdown || buildMarkdownReport();
  try {
    await navigator.clipboard.writeText(markdown);
    copySummaryButton.title = "已複製";
    setTimeout(() => {
      copySummaryButton.title = "複製整理";
    }, 1100);
  } catch {
    window.alert("目前瀏覽器不允許直接複製。你仍可以下載紀錄。");
  }
});

if (startButton) {
  startButton.addEventListener("click", () => {
    state.started = true;
    fillInputFromEntry();
    render();
    scrollToGuide();
  });
}

render();
