const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Jiarui Zhang";
pres.title = "Introduction: Jiarui Zhang";

// --- Color Palette: Ocean Deep ---
const C = {
  navy:      "0B1D3A",
  deepBlue:  "065A82",
  teal:      "1C7293",
  mint:      "21D19F",
  light:     "EAF4F8",
  white:     "FFFFFF",
  offWhite:  "F5F9FB",
  darkText:  "1A1A2E",
  mutedText: "5A7184",
  accent:    "FF6B35",
  gold:      "F4C430",
};

const TOTAL = 12;

function addFooter(slide, num, label) {
  slide.addText(num + " / " + TOTAL, {
    x: 8.8, y: 5.15, w: 1, h: 0.35,
    fontSize: 10, color: C.mutedText, align: "right",
  });
  slide.addText(label || "Jiarui Zhang — Faculty Introduction", {
    x: 0.5, y: 5.15, w: 4, h: 0.35,
    fontSize: 10, color: C.mutedText, italic: true,
  });
}

function sectionTitle(slide, title) {
  slide.addText(title, {
    x: 0.6, y: 0.28, w: 8.8, h: 0.62,
    fontSize: 28, fontFace: "Georgia", bold: true, color: C.navy,
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.9, w: 8.8, h: 0.03, fill: { color: C.teal },
  });
}

function bullet(text, level, bold) {
  return { text, options: { bullet: { indent: 15 }, indentLevel: level || 0, fontSize: 19, bold: !!bold, color: C.darkText, breakLine: true } };
}

function sub(text) {
  return { text, options: { bullet: { indent: 20 }, indentLevel: 1, fontSize: 16, color: C.mutedText, breakLine: true } };
}

// ============================================================
// SLIDE 1: Title / Cover
// ============================================================
let s1 = pres.addSlide();
s1.background = { color: C.navy };
s1.addShape(pres.shapes.OVAL, { x: 6.5, y: -1.2, w: 5.5, h: 5.5, fill: { color: C.deepBlue, transparency: 40 } });
s1.addShape(pres.shapes.OVAL, { x: 7.5, y: 2.8, w: 4,   h: 4,   fill: { color: C.teal,     transparency: 55 } });

s1.addText("Hello, I'm Jiarui Zhang", {
  x: 0.7, y: 0.85, w: 7.5, h: 1.0,
  fontSize: 42, fontFace: "Georgia", bold: true, color: C.white,
});
s1.addText("Faculty Introduction", {
  x: 0.7, y: 1.85, w: 6, h: 0.6,
  fontSize: 24, fontFace: "Georgia", color: C.mint,
});
s1.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.6, w: 2.5, h: 0.04, fill: { color: C.mint } });

s1.addText([
  { text: "Department of Computer Engineering", options: { fontSize: 15, color: C.light, breakLine: true } },
  { text: "15-Minute Introduction • " + new Date().getFullYear(), options: { fontSize: 13, color: C.mutedText } },
], { x: 0.7, y: 2.75, w: 6, h: 0.9 });

// ============================================================
// SLIDE 2: About Me — Background & Journey  (Photo placeholder 1)
// ============================================================
let s2 = pres.addSlide();
s2.background = { color: C.offWhite };
sectionTitle(s2, "About Me");

// Left column — text
s2.addText([
  bullet("Education", 0, true),
  sub("B.Eng. in Computer Engineering"),
  sub("M.Sc. / Ph.D. — [Institution, Year]"),
  { text: "", options: { breakLine: true } },
  bullet("Where I'm From", 0, true),
  sub("[City / Region] — shaped my curiosity about systems"),
  { text: "", options: { breakLine: true } },
  bullet("Before This Role", 0, true),
  sub("Industry: [Company / project]"),
  sub("Research lab: [Lab name / topic]"),
], { x: 0.55, y: 1.05, w: 5.2, h: 4.0, fontSize: 18, color: C.darkText });

// Right column — photo placeholder
s2.addShape(pres.shapes.RECTANGLE, {
  x: 6.1, y: 1.05, w: 3.3, h: 3.4,
  fill: { color: C.light }, line: { color: C.teal, width: 2 },
});
s2.addText("[ Photo 1 ]\nPersonal / Lab Photo", {
  x: 6.1, y: 1.05, w: 3.3, h: 3.4,
  fontSize: 15, color: C.mutedText, align: "center", valign: "middle", italic: true,
});

addFooter(s2, 2);

// ============================================================
// SLIDE 3: Teaching Experience
// ============================================================
let s3 = pres.addSlide();
s3.background = { color: C.offWhite };
sectionTitle(s3, "Teaching Experience");

s3.addText([
  bullet("Courses Taught", 0, true),
  sub("Data Structures & Algorithms  —  [Institution, Year]"),
  sub("Introduction to Computer Science  —  [Institution, Year]"),
  sub("Computer Networks / OS  —  [Institution, Year]"),
  { text: "", options: { breakLine: true } },
  bullet("Teaching Philosophy", 0, true),
  sub("Active learning: think-pair-share, live coding"),
  sub("Bridge theory ↔ real-world practice"),
  sub("Inclusive classroom; meet students where they are"),
  { text: "", options: { breakLine: true } },
  bullet("Recognition", 0, true),
  sub("[Award / positive feedback / course evaluation highlights]"),
], { x: 0.55, y: 1.05, w: 9.0, h: 4.1, fontSize: 18, color: C.darkText });

addFooter(s3, 3);

// ============================================================
// SLIDE 4: Research Interests  (Photo placeholder 2)
// ============================================================
let s4 = pres.addSlide();
s4.background = { color: C.offWhite };
sectionTitle(s4, "Research Interests");

// Left column
s4.addText([
  bullet("Primary Area", 0, true),
  sub("[e.g., Distributed Systems / Security / Edge Computing]"),
  { text: "", options: { breakLine: true } },
  bullet("Selected Projects", 0, true),
  sub("Project A — [one-line description, outcome]"),
  sub("Project B — [one-line description, outcome]"),
  { text: "", options: { breakLine: true } },
  bullet("Publications", 0, true),
  sub("[Venue, Year] — paper title (brief)"),
  sub("[Venue, Year] — paper title (brief)"),
], { x: 0.55, y: 1.05, w: 5.2, h: 4.0, fontSize: 18, color: C.darkText });

// Right column — photo placeholder
s4.addShape(pres.shapes.RECTANGLE, {
  x: 6.1, y: 1.05, w: 3.3, h: 3.4,
  fill: { color: C.light }, line: { color: C.teal, width: 2 },
});
s4.addText("[ Photo 2 ]\nResearch / Demo Photo", {
  x: 6.1, y: 1.05, w: 3.3, h: 3.4,
  fontSize: 15, color: C.mutedText, align: "center", valign: "middle", italic: true,
});

addFooter(s4, 4);

// ============================================================
// SLIDE 5: Part-Two Divider
// ============================================================
let s5 = pres.addSlide();
s5.background = { color: C.navy };
s5.addShape(pres.shapes.OVAL, { x: -1, y: -1, w: 5, h: 5, fill: { color: C.deepBlue, transparency: 50 } });
s5.addShape(pres.shapes.OVAL, { x: 7,  y: 3,  w: 5, h: 5, fill: { color: C.teal,     transparency: 55 } });

s5.addText("Part 2", {
  x: 1, y: 1.5, w: 8, h: 0.8,
  fontSize: 22, fontFace: "Georgia", color: C.mint, align: "center",
});
s5.addText("Student Development,\nPlans & Work Framework", {
  x: 1, y: 2.2, w: 8, h: 1.6,
  fontSize: 36, fontFace: "Georgia", bold: true, color: C.white, align: "center",
});

addFooter(s5, 5);

// ============================================================
// SLIDE 6: Vision for Student Development
// ============================================================
let s6 = pres.addSlide();
s6.background = { color: C.offWhite };
sectionTitle(s6, "Vision for Student Development");

s6.addText([
  bullet("Core Goal", 0, true),
  sub("Produce graduates who can think, not just code"),
  { text: "", options: { breakLine: true } },
  bullet("Three Pillars", 0, true),
  sub("Foundations first — algorithms, math, systems thinking"),
  sub("Practical craft — clean code, debugging, tooling"),
  sub("Professional growth — communication, teamwork, ethics"),
  { text: "", options: { breakLine: true } },
  bullet("How I Measure Success", 0, true),
  sub("Students tackle problems they've never seen before"),
  sub("Alumni credit the course 3 years after graduating"),
], { x: 0.55, y: 1.05, w: 9.0, h: 4.1, fontSize: 18, color: C.darkText });

addFooter(s6, 6);

// ============================================================
// SLIDE 7: Plan for This Course
// ============================================================
let s7 = pres.addSlide();
s7.background = { color: C.offWhite };
sectionTitle(s7, "Plan for This Course");

// Three-column cards
const cols = [
  { x: 0.4,  label: "Weeks 1–4",  color: C.deepBlue, items: ["Foundations & tooling", "Algorithm analysis", "First mini-project"] },
  { x: 3.55, label: "Weeks 5–9",  color: C.teal,     items: ["Core data structures", "Algorithm design", "Team project kick-off"] },
  { x: 6.7,  label: "Weeks 10–15",color: C.accent,   items: ["Advanced topics", "Real-world case studies", "Final project & demo"] },
];

cols.forEach(col => {
  s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: col.x, y: 1.05, w: 2.9, h: 3.9,
    fill: { color: col.color }, line: { color: col.color },
    rectRadius: 0.12,
  });
  s7.addText(col.label, {
    x: col.x + 0.1, y: 1.15, w: 2.7, h: 0.5,
    fontSize: 16, bold: true, color: C.white, align: "center",
  });
  s7.addShape(pres.shapes.RECTANGLE, { x: col.x + 0.1, y: 1.65, w: 2.7, h: 0.02, fill: { color: C.white, transparency: 60 } });
  col.items.forEach((item, i) => {
    s7.addText("• " + item, {
      x: col.x + 0.2, y: 1.85 + i * 0.8, w: 2.5, h: 0.7,
      fontSize: 14, color: C.white, wrap: true,
    });
  });
});

addFooter(s7, 7);

// ============================================================
// SLIDE 8: Understanding Where Students Are
// ============================================================
let s8 = pres.addSlide();
s8.background = { color: C.offWhite };
sectionTitle(s8, "Understanding Where Students Are");

s8.addText([
  bullet("My First Step", 0, true),
  sub("Short diagnostic quiz + survey in Week 1"),
  sub("\"What brought you to CS?\" — learn motivations"),
  { text: "", options: { breakLine: true } },
  bullet("Ongoing Feedback Loops", 0, true),
  sub("Weekly exit tickets (2 questions, anonymous)"),
  sub("Mid-semester small-group lunches"),
  sub("Open office hours with no agenda required"),
  { text: "", options: { breakLine: true } },
  bullet("Adapting in Real Time", 0, true),
  sub("Adjust pacing if > 30 % struggle on a concept"),
  sub("Offer optional deep-dive sessions for advanced students"),
], { x: 0.55, y: 1.05, w: 9.0, h: 4.1, fontSize: 18, color: C.darkText });

addFooter(s8, 8);

// ============================================================
// SLIDE 9: Work Framework (How I Operate)
// ============================================================
let s9 = pres.addSlide();
s9.background = { color: C.offWhite };
sectionTitle(s9, "How I Work — Framework & Collaboration");

// Four quadrant boxes
const quadrants = [
  { x: 0.4,  y: 1.1,  color: C.deepBlue, label: "Preparation",    body: "Lecture notes, code demos\nand problem sets ready\n2 weeks in advance" },
  { x: 5.0,  y: 1.1,  color: C.teal,     label: "Engagement",     body: "Active recall, pair\nprogramming in class,\nno passive slides-only lectures" },
  { x: 0.4,  y: 3.15, color: C.accent,   label: "Mentorship",     body: "1-on-1 check-ins;\nclear research pathways\nfor interested students" },
  { x: 5.0,  y: 3.15, color: C.navy,     label: "Collaboration",  body: "Cross-disciplinary projects;\nconnect students with\nindustry partners" },
];

quadrants.forEach(q => {
  s9.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: q.x, y: q.y, w: 4.3, h: 1.9,
    fill: { color: q.color }, line: { color: q.color }, rectRadius: 0.1,
  });
  s9.addText(q.label, {
    x: q.x + 0.15, y: q.y + 0.1, w: 4.0, h: 0.45,
    fontSize: 16, bold: true, color: C.white,
  });
  s9.addText(q.body, {
    x: q.x + 0.15, y: q.y + 0.55, w: 4.0, h: 1.25,
    fontSize: 13, color: C.light, wrap: true,
  });
});

addFooter(s9, 9);

// ============================================================
// SLIDE 10: Highlight 1 — ICPC Competition Plan
// ============================================================
let s10 = pres.addSlide();
s10.background = { color: C.offWhite };

// Accent banner
s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.accent } });
s10.addText("Highlight 1: ICPC Competition Plan", {
  x: 0.6, y: 0.1, w: 9, h: 0.75,
  fontSize: 26, fontFace: "Georgia", bold: true, color: C.white,
});
s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 1.0, w: 10, h: 0.03, fill: { color: C.gold } });

s10.addText([
  bullet("Goal", 0, true),
  sub("Field a competitive team at ACM-ICPC Regional within 2 years"),
  { text: "", options: { breakLine: true } },
  bullet("Roadmap", 0, true),
  sub("Semester 1 — Weekly training sessions; recruit top 20 students"),
  sub("Semester 2 — Internal mock contest; select team of 3"),
  sub("Year 2     — Regional competition + post-analysis"),
  { text: "", options: { breakLine: true } },
  bullet("What Students Gain", 0, true),
  sub("Deep algorithmic problem-solving under time pressure"),
  sub("Team communication and division-of-labor skills"),
  sub("A standout credential recognized by top tech employers"),
], { x: 0.55, y: 1.12, w: 9.0, h: 3.95, fontSize: 18, color: C.darkText });

addFooter(s10, 10);

// ============================================================
// SLIDE 11: Highlight 2 — Why Competitions Still Matter in the AI Era
// ============================================================
let s11 = pres.addSlide();
s11.background = { color: C.offWhite };

s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.deepBlue } });
s11.addText("Highlight 2: Why Competitions Still Matter in the AI Era", {
  x: 0.5, y: 0.1, w: 9.2, h: 0.75,
  fontSize: 22, fontFace: "Georgia", bold: true, color: C.white,
});
s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 1.0, w: 10, h: 0.03, fill: { color: C.mint } });

// Two-column layout
s11.addText("LLMs can solve many\ncompetition problems…", {
  x: 0.5, y: 1.15, w: 4.5, h: 0.7,
  fontSize: 17, bold: true, color: C.accent, italic: true,
});
s11.addText("…so why train humans to do it?", {
  x: 5.0, y: 1.15, w: 4.5, h: 0.7,
  fontSize: 17, bold: true, color: C.teal, italic: true,
});

// Divider
s11.addShape(pres.shapes.RECTANGLE, { x: 4.85, y: 1.1, w: 0.03, h: 4.0, fill: { color: C.mutedText, transparency: 50 } });

// Left bullets — what AI does
s11.addText([
  bullet("Generates working code quickly", 0),
  bullet("Handles routine algorithm patterns", 0),
  bullet("Passes many OJ problems with prompting", 0),
], { x: 0.5, y: 1.85, w: 4.2, h: 2.6, fontSize: 16, color: C.darkText });

// Right bullets — why humans still need it
s11.addText([
  bullet("Verify, judge & debug AI output", 0, true),
  bullet("Novel problem formulation — AI needs a human to frame the problem", 0),
  bullet("Combinatorial intuition under constraints AI hasn't seen", 0),
  bullet("Competitions build resilience, not just code", 0),
  bullet("The best engineers direct AI, not follow it", 0, true),
], { x: 5.1, y: 1.85, w: 4.4, h: 3.1, fontSize: 15, color: C.darkText });

addFooter(s11, 11);

// ============================================================
// SLIDE 12: Closing — Let's Build Together
// ============================================================
let s12 = pres.addSlide();
s12.background = { color: C.navy };
s12.addShape(pres.shapes.OVAL, { x: 6.5, y: -1, w: 5, h: 5, fill: { color: C.deepBlue, transparency: 45 } });
s12.addShape(pres.shapes.OVAL, { x: 7.2, y: 3,  w: 4, h: 4, fill: { color: C.teal,     transparency: 55 } });

s12.addText("Let's Build Together", {
  x: 0.8, y: 0.9, w: 7, h: 1.0,
  fontSize: 42, fontFace: "Georgia", bold: true, color: C.white,
});
s12.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.0, w: 2.5, h: 0.04, fill: { color: C.mint } });

s12.addText([
  { text: "My door is open.", options: { fontSize: 20, bold: true, color: C.mint, breakLine: true } },
  { text: " ", options: { fontSize: 10, breakLine: true } },
  { text: "Questions, ideas, collaborations —", options: { fontSize: 17, color: C.light, breakLine: true } },
  { text: "I'm excited to meet every one of you.", options: { fontSize: 17, color: C.light, breakLine: true } },
  { text: " ", options: { fontSize: 12, breakLine: true } },
  { text: "[your.email@university.edu]", options: { fontSize: 14, color: C.mutedText, breakLine: true } },
  { text: "Office: [Room Number] — Office Hours: [Days/Times]", options: { fontSize: 14, color: C.mutedText } },
], { x: 0.8, y: 2.2, w: 7, h: 3.0 });

addFooter(s12, 12);

// ============================================================
// Save
// ============================================================
pres.writeFile({ fileName: "Faculty_Introduction.pptx" })
  .then(() => console.log("Saved: Faculty_Introduction.pptx"))
  .catch(err => { console.error(err); process.exit(1); });
