const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Jiarui Zhang";
pres.title = "Faculty Introduction — Jiarui Zhang";

const C = {
  navy: "0B1D3A", deepBlue: "065A82", teal: "1C7293", mint: "21D19F",
  light: "EAF4F8", white: "FFFFFF", offWhite: "F5F9FB", darkText: "1A1A2E",
  mutedText: "5A7184", accent: "FF6B35", codeGray: "2D3748",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 });

function addFooter(slide, num, total) {
  slide.addText(num + " / " + total, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.mutedText, align: "right" });
  slide.addText("Faculty Introduction", { x: 0.5, y: 5.15, w: 3, h: 0.35, fontSize: 10, color: C.mutedText, italic: true });
}

function addSectionHeader(slide, title) {
  slide.addText(title, { x: 0.6, y: 0.3, w: 8.8, h: 0.65, fontSize: 30, fontFace: "Georgia", bold: true, color: C.navy, margin: 0 });
}

const TOTAL = 12;

// SLIDE 1: Title
let s1 = pres.addSlide();
s1.background = { color: C.navy };
s1.addShape(pres.shapes.OVAL, { x: 6.8, y: -1.5, w: 5, h: 5, fill: { color: C.deepBlue, transparency: 40 } });
s1.addShape(pres.shapes.OVAL, { x: 7.8, y: 2.5, w: 4, h: 4, fill: { color: C.teal, transparency: 50 } });
s1.addText("Hello, I\u2019m", { x: 0.8, y: 0.75, w: 7, h: 0.65, fontSize: 28, fontFace: "Georgia", color: C.mint, margin: 0 });
s1.addText("Jiarui Zhang", { x: 0.8, y: 1.35, w: 7, h: 1.1, fontSize: 52, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.6, w: 2.5, h: 0.04, fill: { color: C.mint } });
s1.addText([
  { text: "Department of Computer Engineering", options: { fontSize: 16, bold: true, color: C.white, breakLine: true } },
  { text: "[Institution Name]", options: { fontSize: 13, color: C.mutedText } }
], { x: 0.8, y: 2.8, w: 5, h: 0.9 });
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: C.deepBlue, transparency: 30 } });
s1.addText("15-Minute Faculty Introduction", { x: 0.8, y: 5.2, w: 5, h: 0.42, fontSize: 11, color: C.teal });

// SLIDE 2: About Me + Photo Placeholder 1
let s2 = pres.addSlide();
s2.background = { color: C.offWhite };
addSectionHeader(s2, "About Me");
addFooter(s2, 2, TOTAL);
s2.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.1, w: 5.0, h: 3.9, fill: { color: C.white }, shadow: makeShadow() });
s2.addText([
  { text: "Education", options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
  { text: "B.Eng. in Computer Engineering", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: "M.Sc. / Ph.D. \u2014 [Institution, Year]", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "Where I\u2019m From", options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
  { text: "[City / Region] \u2014 shaped my curiosity about systems", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "Before This Role", options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
  { text: "Industry: [Company / project]", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: "Research: [Lab name / topic]", options: { fontSize: 13, color: C.mutedText, bullet: true } },
], { x: 0.85, y: 1.25, w: 4.55, h: 3.6 });
s2.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.1, w: 3.4, h: 3.9, fill: { color: C.light }, shadow: makeShadow() });
s2.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.1, w: 3.4, h: 0.06, fill: { color: C.teal } });
s2.addText("[ Photo 1 ]\nPersonal / Lab Photo", { x: 6.0, y: 1.1, w: 3.4, h: 3.9, fontSize: 15, color: C.mutedText, align: "center", valign: "middle", italic: true });
s2.addNotes("Introduce yourself personally: background, hometown, how you got into CS. A photo makes you approachable. ~90 seconds.");

// SLIDE 3: Teaching Experience
let s3 = pres.addSlide();
s3.background = { color: C.offWhite };
addSectionHeader(s3, "Teaching Experience");
addFooter(s3, 3, TOTAL);
[
  { num: "1", title: "Courses Taught", desc: "Data Structures & Algorithms \u00b7 Intro to CS \u00b7 Computer Networks / OS  \u2014  [Institution, Year]", color: C.deepBlue },
  { num: "2", title: "Teaching Philosophy", desc: "Active learning: think-pair-share, live coding. Bridge theory \u2194 real-world practice. Inclusive classroom \u2014 meet students where they are.", color: C.teal },
  { num: "3", title: "Recognition", desc: "[Teaching award / positive course-evaluation highlights / notable student feedback]", color: C.accent },
].forEach(function(p, i) {
  let y = 1.15 + i * 1.35;
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 8.8, h: 1.15, fill: { color: C.white }, shadow: makeShadow() });
  s3.addShape(pres.shapes.OVAL, { x: 0.85, y: y + 0.2, w: 0.75, h: 0.75, fill: { color: p.color } });
  s3.addText(p.num, { x: 0.85, y: y + 0.2, w: 0.75, h: 0.75, fontSize: 22, fontFace: "Georgia", bold: true, color: C.white, align: "center", valign: "middle" });
  s3.addText([
    { text: p.title, options: { fontSize: 18, bold: true, color: C.navy, breakLine: true } },
    { text: p.desc, options: { fontSize: 13, color: C.mutedText } },
  ], { x: 1.85, y: y + 0.1, w: 7.3, h: 0.95 });
});
s3.addNotes("~60 seconds. Students want to know your style, not a full CV. #2 sets expectations for this course.");

// SLIDE 4: Research + Photo Placeholder 2
let s4 = pres.addSlide();
s4.background = { color: C.offWhite };
addSectionHeader(s4, "Research Interests");
addFooter(s4, 4, TOTAL);
s4.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.1, w: 5.0, h: 3.9, fill: { color: C.white }, shadow: makeShadow() });
s4.addText([
  { text: "Primary Area", options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
  { text: "[e.g., Distributed Systems / Security / Edge Computing]", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "Selected Projects", options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
  { text: "Project A \u2014 [one-line description, outcome]", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: "Project B \u2014 [one-line description, outcome]", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "Publications", options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
  { text: "[Venue, Year] \u2014 paper title (brief)", options: { fontSize: 13, color: C.mutedText, breakLine: true, bullet: true } },
  { text: "[Venue, Year] \u2014 paper title (brief)", options: { fontSize: 13, color: C.mutedText, bullet: true } },
], { x: 0.85, y: 1.25, w: 4.55, h: 3.6 });
s4.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.1, w: 3.4, h: 3.9, fill: { color: C.light }, shadow: makeShadow() });
s4.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.1, w: 3.4, h: 0.06, fill: { color: C.teal } });
s4.addText("[ Photo 2 ]\nResearch / Demo Photo", { x: 6.0, y: 1.1, w: 3.4, h: 3.9, fontSize: 15, color: C.mutedText, align: "center", valign: "middle", italic: true });
s4.addNotes("60-second overview of your research. Students want to know what excites you and how it might connect to their future.");

// SLIDE 5: Part 2 Divider
let s5 = pres.addSlide();
s5.background = { color: C.navy };
s5.addShape(pres.shapes.OVAL, { x: -1.5, y: 3.5, w: 4, h: 4, fill: { color: C.deepBlue, transparency: 50 } });
s5.addShape(pres.shapes.OVAL, { x: 8.5, y: -1, w: 3, h: 3, fill: { color: C.teal, transparency: 50 } });
s5.addText("Part 2", { x: 0.6, y: 1.3, w: 8.8, h: 0.65, fontSize: 24, fontFace: "Georgia", color: C.mint, align: "center" });
s5.addText("Student Development,\nPlans & Work Framework", { x: 0.6, y: 1.95, w: 8.8, h: 1.6, fontSize: 36, fontFace: "Georgia", bold: true, color: C.white, align: "center" });
s5.addText("5 / " + TOTAL, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.teal, align: "right" });
s5.addNotes("Transition point. Invite any quick questions about Part 1 before continuing.");

// SLIDE 6: Vision for Student Development
let s6 = pres.addSlide();
s6.background = { color: C.offWhite };
addSectionHeader(s6, "Vision for Student Development");
addFooter(s6, 6, TOTAL);
[
  { num: "1", title: "Foundations First", desc: "Algorithms, math, and systems thinking. Students who understand WHY adapt to any language or framework.", color: C.deepBlue },
  { num: "2", title: "Practical Craft", desc: "Clean code, debugging discipline, tooling fluency. Real skills built through project-based learning.", color: C.teal },
  { num: "3", title: "Professional Growth", desc: "Communication, teamwork, and ethics. Graduates who can collaborate and lead, not just code.", color: C.accent },
].forEach(function(p, i) {
  let y = 1.15 + i * 1.2;
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 8.8, h: 1.0, fill: { color: C.white }, shadow: makeShadow() });
  s6.addShape(pres.shapes.OVAL, { x: 0.85, y: y + 0.13, w: 0.75, h: 0.75, fill: { color: p.color } });
  s6.addText(p.num, { x: 0.85, y: y + 0.13, w: 0.75, h: 0.75, fontSize: 22, fontFace: "Georgia", bold: true, color: C.white, align: "center", valign: "middle" });
  s6.addText([
    { text: p.title, options: { fontSize: 17, bold: true, color: C.navy, breakLine: true } },
    { text: p.desc, options: { fontSize: 13, color: C.mutedText } },
  ], { x: 1.85, y: y + 0.06, w: 7.3, h: 0.88 });
});
s6.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.65, w: 8.8, h: 0.5, fill: { color: C.navy } });
s6.addText("My measure of success: students tackle problems they\u2019ve never seen \u2014 and enjoy it.", { x: 0.8, y: 4.65, w: 8.4, h: 0.5, fontSize: 14, bold: true, color: C.mint, valign: "middle" });
s6.addNotes("Conversational — students want to know your values. Keep to ~60 seconds.");

// SLIDE 7: Course Plan (3-column)
let s7 = pres.addSlide();
s7.background = { color: C.offWhite };
addSectionHeader(s7, "Plan for This Course");
addFooter(s7, 7, TOTAL);
[
  { x: 0.6,  label: "Weeks 1\u20134",  color: C.deepBlue, items: ["Foundations & tooling", "Algorithm analysis", "First mini-project"] },
  { x: 3.75, label: "Weeks 5\u20139",  color: C.teal,     items: ["Core data structures", "Algorithm design", "Team project kick-off"] },
  { x: 6.9,  label: "Weeks 10\u201315", color: C.accent,   items: ["Advanced topics", "Real-world case studies", "Final project & demo"] },
].forEach(function(ph) {
  s7.addShape(pres.shapes.RECTANGLE, { x: ph.x, y: 1.15, w: 2.85, h: 3.85, fill: { color: C.white }, shadow: makeShadow() });
  s7.addShape(pres.shapes.RECTANGLE, { x: ph.x, y: 1.15, w: 2.85, h: 0.5, fill: { color: ph.color } });
  s7.addText(ph.label, { x: ph.x, y: 1.15, w: 2.85, h: 0.5, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  ph.items.forEach(function(item, i) {
    s7.addText("\u2022 " + item, { x: ph.x + 0.2, y: 1.85 + i * 0.8, w: 2.45, h: 0.7, fontSize: 14, color: C.darkText, wrap: true });
  });
});
s7.addNotes("60-second roadmap overview. Emphasize the project-based progression — each phase builds toward the final demo.");

// SLIDE 8: Understanding Where Students Are
let s8 = pres.addSlide();
s8.background = { color: C.offWhite };
addSectionHeader(s8, "Understanding Where Students Are");
addFooter(s8, 8, TOTAL);
s8.addText("My approach to learning who is in the room\u2026", { x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 14, italic: true, color: C.mutedText });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.65, w: 4.15, h: 2.9, fill: { color: C.white }, shadow: makeShadow() });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.65, w: 4.15, h: 0.5, fill: { color: C.deepBlue } });
s8.addText("DAY ONE", { x: 0.6, y: 1.65, w: 4.15, h: 0.5, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
s8.addText([
  { text: "Short diagnostic quiz + survey", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "\u201CWhat brought you to CS?\u201D", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "Learn motivations, gaps, and goals before teaching begins", options: { fontSize: 12, italic: true, color: C.mutedText } },
], { x: 0.85, y: 2.3, w: 3.65, h: 2.1 });
s8.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.65, w: 4.15, h: 2.9, fill: { color: C.white }, shadow: makeShadow() });
s8.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.65, w: 4.15, h: 0.5, fill: { color: C.teal } });
s8.addText("ONGOING", { x: 5.25, y: 1.65, w: 4.15, h: 0.5, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
s8.addText([
  { text: "Weekly exit tickets (2 Qs, anonymous)", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "Mid-semester small-group lunches", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "Open office hours \u2014 no agenda required", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "Adjust pacing if > 30% struggle on a concept", options: { fontSize: 12, italic: true, color: C.accent } },
], { x: 5.5, y: 2.3, w: 3.65, h: 2.1 });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.7, w: 8.8, h: 0.4, fill: { color: C.navy } });
s8.addText("Students notice when teachers actually adapt.", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 14, bold: true, color: C.mint, valign: "middle" });
s8.addNotes("Mention a real example where you changed course based on feedback — it builds trust immediately.");

// SLIDE 9: Work Framework (4 items)
let s9 = pres.addSlide();
s9.background = { color: C.offWhite };
addSectionHeader(s9, "How I Work \u2014 My Framework");
addFooter(s9, 9, TOTAL);
[
  { num: "P", title: "Preparation",  desc: "Lecture notes, code demos, and problem sets ready two weeks in advance. No improvising core material.", color: C.deepBlue },
  { num: "E", title: "Engagement",   desc: "Active recall and pair programming in class. No passive slides-only lectures.", color: C.teal },
  { num: "M", title: "Mentorship",   desc: "1-on-1 check-ins and clear research pathways for students who want to go deeper.", color: C.accent },
  { num: "C", title: "Collaboration",desc: "Cross-disciplinary projects and industry partner connections \u2014 students graduate with a network.", color: C.navy },
].forEach(function(f, i) {
  let y = 1.1 + i * 0.97;
  s9.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 8.8, h: 0.85, fill: { color: C.white }, shadow: makeShadow() });
  s9.addShape(pres.shapes.OVAL, { x: 0.85, y: y + 0.05, w: 0.72, h: 0.72, fill: { color: f.color } });
  s9.addText(f.num, { x: 0.85, y: y + 0.05, w: 0.72, h: 0.72, fontSize: 20, fontFace: "Georgia", bold: true, color: C.white, align: "center", valign: "middle" });
  s9.addText([
    { text: f.title, options: { fontSize: 17, bold: true, color: C.navy, breakLine: true } },
    { text: f.desc, options: { fontSize: 13, color: C.mutedText } },
  ], { x: 1.8, y: y + 0.04, w: 7.4, h: 0.77 });
});
s9.addNotes("P-E-M-C: your teaching operating model. ~45 seconds.");

// SLIDE 10: Highlight 1 — ICPC Competition Plan
let s10 = pres.addSlide();
s10.background = { color: C.navy };
s10.addShape(pres.shapes.OVAL, { x: -1.5, y: 3.5, w: 4, h: 4, fill: { color: C.deepBlue, transparency: 50 } });
s10.addShape(pres.shapes.OVAL, { x: 8.5, y: -1, w: 3, h: 3, fill: { color: C.accent, transparency: 60 } });
s10.addText("Highlight 1", { x: 0.6, y: 0.28, w: 8.8, h: 0.45, fontSize: 16, color: C.accent, italic: true });
s10.addText("ICPC Competition Plan", { x: 0.6, y: 0.68, w: 8.8, h: 0.72, fontSize: 34, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });
[
  "Semester 1 \u2014 Weekly training sessions; identify and recruit top students",
  "Semester 2 \u2014 Internal mock contest; select a team of 3 for regional",
  "Year 2     \u2014 Regional competition + structured post-analysis workshop",
].forEach(function(step, i) {
  let y = 1.65 + i * 0.65;
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 8.8, h: 0.55, fill: { color: C.deepBlue, transparency: 20 } });
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 0.06, h: 0.55, fill: { color: C.mint } });
  s10.addText(step, { x: 0.9, y: y, w: 8.3, h: 0.55, fontSize: 15, color: C.white, valign: "middle" });
});
s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.7, w: 8.8, h: 1.35, fill: { color: C.deepBlue, transparency: 15 } });
s10.addText("What students gain:", { x: 0.85, y: 3.77, w: 8.3, h: 0.38, fontSize: 14, bold: true, color: C.mint });
s10.addText("Deep algorithmic problem-solving under time pressure  \u2022  Team communication skills  \u2022  A standout credential recognized by top tech employers", { x: 0.85, y: 4.13, w: 8.3, h: 0.82, fontSize: 13, color: C.light, wrap: true });
s10.addText("10 / " + TOTAL, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.teal, align: "right" });
s10.addNotes("Describe the timeline concretely. Students and colleagues want to know this is a real plan, not a vague aspiration.");

// SLIDE 11: Highlight 2 — Why Competitions Still Matter in the AI Era
let s11 = pres.addSlide();
s11.background = { color: C.navy };
s11.addShape(pres.shapes.OVAL, { x: -1.5, y: -1, w: 4, h: 4, fill: { color: C.teal, transparency: 55 } });
s11.addShape(pres.shapes.OVAL, { x: 8, y: 3, w: 4, h: 4, fill: { color: C.deepBlue, transparency: 50 } });
s11.addText("Highlight 2", { x: 0.6, y: 0.28, w: 8.8, h: 0.45, fontSize: 16, color: C.mint, italic: true });
s11.addText("Why Competitions Still Matter in the AI Era", { x: 0.6, y: 0.68, w: 8.8, h: 0.72, fontSize: 28, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });
s11.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.55, w: 4.15, h: 3.35, fill: { color: C.deepBlue, transparency: 20 } });
s11.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.55, w: 4.15, h: 0.45, fill: { color: C.accent, transparency: 20 } });
s11.addText("LLMs can already\u2026", { x: 0.7, y: 1.55, w: 3.95, h: 0.45, fontSize: 14, bold: true, color: C.white, valign: "middle" });
s11.addText([
  { text: "Generate working code quickly", options: { fontSize: 13, color: C.light, breakLine: true, bullet: true } },
  { text: "Handle routine algorithm patterns", options: { fontSize: 13, color: C.light, breakLine: true, bullet: true } },
  { text: "Pass many OJ problems with prompting", options: { fontSize: 13, color: C.light, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "So why train humans to compete?", options: { fontSize: 13, italic: true, color: C.accent } },
], { x: 0.75, y: 2.1, w: 3.8, h: 2.65 });
s11.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.55, w: 4.15, h: 3.35, fill: { color: C.teal, transparency: 30 } });
s11.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.55, w: 4.15, h: 0.45, fill: { color: C.mint, transparency: 20 } });
s11.addText("Humans still need to\u2026", { x: 5.35, y: 1.55, w: 3.95, h: 0.45, fontSize: 14, bold: true, color: C.navy, valign: "middle" });
s11.addText([
  { text: "Verify, judge, and debug AI output", options: { fontSize: 13, color: C.white, breakLine: true, bullet: true } },
  { text: "Frame novel problems AI hasn\u2019t seen", options: { fontSize: 13, color: C.white, breakLine: true, bullet: true } },
  { text: "Apply combinatorial intuition under real constraints", options: { fontSize: 13, color: C.white, breakLine: true, bullet: true } },
  { text: "Build resilience and perseverance", options: { fontSize: 13, color: C.white, breakLine: true, bullet: true } },
  { text: " ", options: { fontSize: 8, breakLine: true } },
  { text: "The best engineers direct AI \u2014 not follow it.", options: { fontSize: 13, bold: true, color: C.mint } },
], { x: 5.4, y: 2.1, w: 3.8, h: 2.65 });
s11.addText("11 / " + TOTAL, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.teal, align: "right" });
s11.addNotes("Your most important intellectual argument. Acknowledge LLMs honestly. The key: competition training builds the meta-skills that make an engineer valuable *because* of AI, not despite it.");

// SLIDE 12: Closing
let s12 = pres.addSlide();
s12.background = { color: C.navy };
s12.addShape(pres.shapes.OVAL, { x: -1.5, y: 3.5, w: 4, h: 4, fill: { color: C.deepBlue, transparency: 50 } });
s12.addShape(pres.shapes.OVAL, { x: 8.5, y: -1, w: 3, h: 3, fill: { color: C.teal, transparency: 50 } });
s12.addText("What I Hope You\u2019ll Remember", { x: 0.6, y: 0.3, w: 8.8, h: 0.7, fontSize: 32, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });
[
  "Teaching is about building thinkers, not just coders",
  "ICPC training builds skills that AI cannot replace",
  "I adapt to my students \u2014 my door is always open",
  "I\u2019m excited to build something great with all of you",
].forEach(function(t, i) {
  let y = 1.3 + i * 0.75;
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 8.8, h: 0.6, fill: { color: C.deepBlue, transparency: 20 } });
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 0.06, h: 0.6, fill: { color: C.mint } });
  s12.addText(t, { x: 0.9, y: y, w: 8.3, h: 0.6, fontSize: 16, color: C.white, valign: "middle" });
});
s12.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.4, w: 8.8, h: 0.7, fill: { color: C.teal, transparency: 70 } });
s12.addText([
  { text: "[your.email@university.edu]  \u2022  ", options: { bold: true, color: C.mint } },
  { text: "Office [Room]  \u2022  Office Hours: [Days / Times]", options: { color: C.white } },
], { x: 0.85, y: 4.4, w: 8.3, h: 0.7, fontSize: 14, valign: "middle" });
s12.addText("12 / " + TOTAL, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.teal, align: "right" });
s12.addNotes("End with warmth and a clear invitation. Leave time for 2-3 questions.");

// Save
pres.writeFile({ fileName: "Faculty_Introduction.pptx" })
  .then(function() { console.log("DONE - Faculty_Introduction.pptx saved"); })
  .catch(function(err) { console.error(err); process.exit(1); });
