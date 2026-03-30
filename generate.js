const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Jiarui Zhang";
pres.title = "Hashing: From Passwords to Blockchain";

// --- Color Palette: Ocean Deep ---
const C = {
  navy: "0B1D3A",
  deepBlue: "065A82",
  teal: "1C7293",
  mint: "21D19F",
  light: "EAF4F8",
  white: "FFFFFF",
  offWhite: "F5F9FB",
  darkText: "1A1A2E",
  mutedText: "5A7184",
  accent: "FF6B35",
  codeGray: "2D3748",
};

// --- Helpers ---
const makeShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 });

function addFooter(slide, num, total) {
  slide.addText(num + " / " + total, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.mutedText, align: "right" });
  slide.addText("Intro to Computer Science", { x: 0.5, y: 5.15, w: 3, h: 0.35, fontSize: 10, color: C.mutedText, italic: true });
}

function addSectionHeader(slide, title) {
  slide.addText(title, { x: 0.6, y: 0.3, w: 8.8, h: 0.65, fontSize: 30, fontFace: "Georgia", bold: true, color: C.navy, margin: 0 });
}

const TOTAL = 10;

// ============================================================
// SLIDE 1: Title Slide
// ============================================================
let s1 = pres.addSlide();
s1.background = { color: C.navy };
s1.addShape(pres.shapes.OVAL, { x: 6.8, y: -1.5, w: 5, h: 5, fill: { color: C.deepBlue, transparency: 40 } });
s1.addShape(pres.shapes.OVAL, { x: 7.8, y: 2.5, w: 4, h: 4, fill: { color: C.teal, transparency: 50 } });
s1.addText("Hashing", { x: 0.8, y: 1.0, w: 7, h: 1.2, fontSize: 52, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });
s1.addText("From Passwords to Blockchain", { x: 0.8, y: 2.1, w: 7, h: 0.7, fontSize: 26, fontFace: "Georgia", color: C.mint, margin: 0 });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.0, w: 2.5, h: 0.04, fill: { color: C.mint } });
s1.addText([
  { text: "Jiarui Zhang", options: { fontSize: 16, bold: true, color: C.white, breakLine: true } },
  { text: "Department of Computer Engineering", options: { fontSize: 13, color: C.mutedText } }
], { x: 0.8, y: 3.3, w: 5, h: 0.9 });
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: C.deepBlue, transparency: 30 } });
s1.addText("15-Minute Teaching Demo", { x: 0.8, y: 5.2, w: 4, h: 0.42, fontSize: 11, color: C.teal });

// ============================================================
// SLIDE 2: Motivation
// ============================================================
let s2 = pres.addSlide();
s2.background = { color: C.offWhite };
addSectionHeader(s2, "A Question to Start");
addFooter(s2, 2, TOTAL);

s2.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.2, w: 8.8, h: 2.2, fill: { color: C.white }, shadow: makeShadow() });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.2, w: 0.08, h: 2.2, fill: { color: C.accent } });
s2.addText("When you type your password to log in, does the website compare it to a stored copy of your password?", {
  x: 1.0, y: 1.35, w: 8.1, h: 1.0, fontSize: 22, fontFace: "Georgia", color: C.navy, italic: true
});
s2.addText([
  { text: "Think about it: ", options: { bold: true, color: C.deepBlue } },
  { text: "If a hacker breaks into the database, would they get everyone\u2019s passwords?" }
], { x: 1.0, y: 2.4, w: 8.1, h: 0.7, fontSize: 16, color: C.darkText });

s2.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.7, w: 4.15, h: 1.2, fill: { color: C.white }, shadow: makeShadow() });
s2.addText([
  { text: "A)  Yes \u2014 direct comparison", options: { fontSize: 16, bold: true, color: C.deepBlue, breakLine: true } },
  { text: "The server stores your actual password", options: { fontSize: 13, color: C.mutedText } }
], { x: 0.9, y: 3.85, w: 3.6, h: 0.9 });

s2.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 3.7, w: 4.15, h: 1.2, fill: { color: C.white }, shadow: makeShadow() });
s2.addText([
  { text: "B)  No \u2014 something cleverer", options: { fontSize: 16, bold: true, color: C.mint, breakLine: true } },
  { text: "The server never sees your password", options: { fontSize: 13, color: C.mutedText } }
], { x: 5.55, y: 3.85, w: 3.6, h: 0.9 });

s2.addNotes("ENGAGE: Ask students to raise hands for A or B. Most will guess A. Reveal: The answer is B! Websites store a fingerprint of your password, not the password itself. This fingerprint is called a HASH. Transition: Let us learn what that means.");

// ============================================================
// SLIDE 3: What Is a Hash Function?
// ============================================================
let s3 = pres.addSlide();
s3.background = { color: C.offWhite };
addSectionHeader(s3, "What Is a Hash Function?");
addFooter(s3, 3, TOTAL);

s3.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 8.8, h: 1.3, fill: { color: C.navy }, shadow: makeShadow() });
s3.addText("A hash function takes any input and produces a fixed-size output (the \u201Chash\u201D or \u201Cdigest\u201D) that looks random.", {
  x: 0.9, y: 1.25, w: 8.2, h: 1.1, fontSize: 17, fontFace: "Georgia", color: C.white
});

// Input box
s3.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.85, w: 2.5, h: 1.6, fill: { color: C.white }, shadow: makeShadow() });
s3.addText([
  { text: "INPUT", options: { fontSize: 11, bold: true, color: C.teal, breakLine: true } },
  { text: '"hello"', options: { fontSize: 15, color: C.darkText, fontFace: "Consolas", breakLine: true } },
  { text: "Any size: text, file,\nimage, number\u2026", options: { fontSize: 11, color: C.mutedText } }
], { x: 0.7, y: 2.95, w: 2.3, h: 1.4, valign: "middle", align: "center" });

s3.addText("\u2192", { x: 3.15, y: 3.2, w: 0.6, h: 0.8, fontSize: 36, color: C.teal, align: "center", valign: "middle" });

// Hash function box
s3.addShape(pres.shapes.RECTANGLE, { x: 3.75, y: 2.85, w: 2.5, h: 1.6, fill: { color: C.deepBlue }, shadow: makeShadow() });
s3.addText([
  { text: "HASH FUNCTION", options: { fontSize: 12, bold: true, color: C.mint, breakLine: true } },
  { text: "h(x)", options: { fontSize: 24, color: C.white, fontFace: "Georgia", bold: true, breakLine: true } },
  { text: "e.g., SHA-256", options: { fontSize: 11, color: C.teal } }
], { x: 3.85, y: 2.95, w: 2.3, h: 1.4, valign: "middle", align: "center" });

s3.addText("\u2192", { x: 6.3, y: 3.2, w: 0.6, h: 0.8, fontSize: 36, color: C.teal, align: "center", valign: "middle" });

// Output box
s3.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 2.85, w: 2.5, h: 1.6, fill: { color: C.white }, shadow: makeShadow() });
s3.addText([
  { text: "OUTPUT", options: { fontSize: 11, bold: true, color: C.accent, breakLine: true } },
  { text: "2cf24d...71e2", options: { fontSize: 14, color: C.darkText, fontFace: "Consolas", breakLine: true } },
  { text: "Always fixed size\n(e.g., 256 bits)", options: { fontSize: 11, color: C.mutedText } }
], { x: 7.0, y: 2.95, w: 2.3, h: 1.4, valign: "middle", align: "center" });

s3.addNotes("Walk through the diagram: any input goes in, a fixed-size digest comes out. Analogy: Think of it like a blender. You can put anything in, but you always get a smoothie. You cannot un-blend it back to the original fruit.");

// ============================================================
// SLIDE 4: Three Key Properties
// ============================================================
let s4 = pres.addSlide();
s4.background = { color: C.offWhite };
addSectionHeader(s4, "Three Key Properties");
addFooter(s4, 4, TOTAL);

const props = [
  { num: "1", title: "Deterministic", desc: "Same input always produces the same output. \"hello\" \u2192 2cf24d\u2026 every single time.", color: C.deepBlue },
  { num: "2", title: "One-Way (Pre-image Resistant)", desc: "Given a hash, it is computationally infeasible to recover the original input. You cannot un-hash.", color: C.teal },
  { num: "3", title: "Collision Resistant", desc: "It is extremely hard to find two different inputs that produce the same hash output.", color: C.accent }
];

props.forEach(function(p, i) {
  let yPos = 1.15 + i * 1.4;
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yPos, w: 8.8, h: 1.2, fill: { color: C.white }, shadow: makeShadow() });
  s4.addShape(pres.shapes.OVAL, { x: 0.85, y: yPos + 0.22, w: 0.75, h: 0.75, fill: { color: p.color } });
  s4.addText(p.num, { x: 0.85, y: yPos + 0.22, w: 0.75, h: 0.75, fontSize: 22, fontFace: "Georgia", bold: true, color: C.white, align: "center", valign: "middle" });
  s4.addText([
    { text: p.title, options: { fontSize: 18, bold: true, color: C.navy, breakLine: true } },
    { text: p.desc, options: { fontSize: 13, color: C.mutedText } }
  ], { x: 1.85, y: yPos + 0.1, w: 7.3, h: 1.0 });
});

s4.addNotes("Emphasize each property with a real-world analogy: (1) Deterministic = like a fingerprint, always the same for the same person. (2) One-way = like baking a cake, you cannot get eggs back from a cake. (3) Collision resistant = finding two people with the same fingerprint is nearly impossible.");

// ============================================================
// SLIDE 5: The Avalanche Effect
// ============================================================
let s5 = pres.addSlide();
s5.background = { color: C.offWhite };
addSectionHeader(s5, "The Avalanche Effect");
addFooter(s5, 5, TOTAL);

s5.addText("A tiny change in input \u2192 completely different hash output", {
  x: 0.6, y: 1.1, w: 8.8, h: 0.5, fontSize: 15, color: C.mutedText, italic: true
});

const examples = [
  { input: '"hello"', hash: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824' },
  { input: '"Hello"', hash: '185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969' },
  { input: '"hello!"', hash: 'ce06092fb948d9ffac7d1a376e404b26b7575bcc11ee05a4615fef4fec3a308b' }
];

examples.forEach(function(ex, i) {
  let yPos = 1.8 + i * 1.15;
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yPos, w: 8.8, h: 0.95, fill: { color: C.codeGray }, shadow: makeShadow() });
  s5.addText("SHA-256( " + ex.input + " )", { x: 0.85, y: yPos + 0.08, w: 4, h: 0.4, fontSize: 14, fontFace: "Consolas", color: C.mint, bold: true });
  s5.addText("= " + ex.hash.substring(0, 24) + "...", { x: 0.85, y: yPos + 0.48, w: 8.3, h: 0.4, fontSize: 13, fontFace: "Consolas", color: "A0AEC0" });
});

s5.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.55, w: 8.8, h: 0.5, fill: { color: C.accent, transparency: 85 } });
s5.addText("Just changing \u2018h\u2019 to \u2018H\u2019 changes every character of the hash!", {
  x: 0.8, y: 4.55, w: 8.4, h: 0.5, fontSize: 14, bold: true, color: C.accent, valign: "middle"
});

s5.addNotes("DEMO OPPORTUNITY: If time allows, open a terminal or online SHA-256 tool and hash hello live. Then change one letter and show how completely different the output is. Students love seeing this live. Key point: This is NOT encryption, you cannot reverse it.");

// ============================================================
// SLIDE 6: Application 1 - Password Storage
// ============================================================
let s6 = pres.addSlide();
s6.background = { color: C.offWhite };
addSectionHeader(s6, "Application: Password Storage");
addFooter(s6, 6, TOTAL);

s6.addText("Answering our opening question\u2026", { x: 0.6, y: 1.05, w: 8, h: 0.4, fontSize: 14, italic: true, color: C.mutedText });

const steps = [
  { num: "1", title: "You sign up", desc: "Server hashes your password and stores only the hash.", color: C.deepBlue },
  { num: "2", title: "You log in", desc: "Server hashes what you typed and compares hashes.", color: C.teal },
  { num: "3", title: "Database breach?", desc: "Attacker sees hashes, NOT passwords. Cannot reverse them!", color: C.accent }
];

steps.forEach(function(st, i) {
  let xPos = 0.6 + i * 3.15;
  s6.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.65, w: 2.85, h: 2.6, fill: { color: C.white }, shadow: makeShadow() });
  s6.addShape(pres.shapes.OVAL, { x: xPos + 1.05, y: 1.85, w: 0.75, h: 0.75, fill: { color: st.color } });
  s6.addText(st.num, { x: xPos + 1.05, y: 1.85, w: 0.75, h: 0.75, fontSize: 22, bold: true, color: C.white, align: "center", valign: "middle", fontFace: "Georgia" });
  s6.addText([
    { text: st.title, options: { fontSize: 16, bold: true, color: C.navy, breakLine: true } },
    { text: st.desc, options: { fontSize: 13, color: C.mutedText } }
  ], { x: xPos + 0.2, y: 2.75, w: 2.45, h: 1.3, align: "center" });
});

s6.addText("\u2192", { x: 3.45, y: 2.5, w: 0.4, h: 0.5, fontSize: 28, color: C.teal, align: "center", valign: "middle" });
s6.addText("\u2192", { x: 6.6, y: 2.5, w: 0.4, h: 0.5, fontSize: 28, color: C.teal, align: "center", valign: "middle" });

s6.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.5, w: 8.8, h: 0.55, fill: { color: C.navy } });
s6.addText("Key insight: The server never needs to know your actual password!", {
  x: 0.8, y: 4.5, w: 8.4, h: 0.55, fontSize: 15, bold: true, color: C.mint, valign: "middle"
});

s6.addNotes("Connect back to the opening question! This is why the answer was B. Walk through the 3 steps carefully. Mention that real systems also use salting, adding random data before hashing, but that is a topic for a security course.");

// ============================================================
// SLIDE 7: Application 2 - Data Integrity
// ============================================================
let s7 = pres.addSlide();
s7.background = { color: C.offWhite };
addSectionHeader(s7, "Application: Data Integrity");
addFooter(s7, 7, TOTAL);

s7.addText("How do you know a downloaded file has not been tampered with?", {
  x: 0.6, y: 1.1, w: 8.8, h: 0.45, fontSize: 15, italic: true, color: C.mutedText
});

// Left column: Sender
s7.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.75, w: 4.15, h: 2.8, fill: { color: C.white }, shadow: makeShadow() });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.75, w: 4.15, h: 0.5, fill: { color: C.deepBlue } });
s7.addText("SENDER", { x: 0.6, y: 1.75, w: 4.15, h: 0.5, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
s7.addText([
  { text: "1. Computes hash of file", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "2. Publishes file + hash", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Example: Software download pages show SHA-256 checksums", options: { fontSize: 12, italic: true, color: C.mutedText } }
], { x: 0.85, y: 2.4, w: 3.65, h: 2.0 });

// Right column: Receiver
s7.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.75, w: 4.15, h: 2.8, fill: { color: C.white }, shadow: makeShadow() });
s7.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.75, w: 4.15, h: 0.5, fill: { color: C.teal } });
s7.addText("RECEIVER", { x: 5.25, y: 1.75, w: 4.15, h: 0.5, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
s7.addText([
  { text: "1. Downloads the file", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "2. Computes hash locally", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "3. Compares: Match? \u2192 Safe!", options: { fontSize: 14, color: C.darkText, breakLine: true, bullet: true } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Any tampering changes the hash completely (avalanche effect!)", options: { fontSize: 12, italic: true, color: C.accent } }
], { x: 5.5, y: 2.4, w: 3.65, h: 2.0 });

s7.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.7, w: 8.8, h: 0.4, fill: { color: C.navy } });
s7.addText("This same idea scales up to protect entire blockchains\u2026", {
  x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 14, bold: true, color: C.mint, valign: "middle"
});

s7.addNotes("Relatable example: Have you ever downloaded software and seen a SHA-256 checksum on the page? This bridges nicely into the blockchain slide. Emphasize: the avalanche effect means even one flipped bit changes the entire hash.");

// ============================================================
// SLIDE 8: From Hashing to Blockchain
// ============================================================
let s8 = pres.addSlide();
s8.background = { color: C.offWhite };
addSectionHeader(s8, "From Hashing to Blockchain & Edge");
addFooter(s8, 8, TOTAL);

s8.addText("What if we chain hashes together?", { x: 0.6, y: 1.1, w: 8, h: 0.4, fontSize: 14, italic: true, color: C.mutedText });

const blocks = [
  { label: "Block 1", data: "Tx: Alice\u2192Bob $10", hash: "Hash: 3a7f...", prevHash: "Prev: 0000..." },
  { label: "Block 2", data: "Tx: Bob\u2192Carol $5", hash: "Hash: 9b2e...", prevHash: "Prev: 3a7f..." },
  { label: "Block 3", data: "Tx: Carol\u2192Dave $3", hash: "Hash: c41d...", prevHash: "Prev: 9b2e..." }
];

blocks.forEach(function(b, i) {
  let xPos = 0.4 + i * 3.3;
  s8.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.55, w: 2.8, h: 1.9, fill: { color: C.white }, shadow: makeShadow() });
  s8.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.55, w: 2.8, h: 0.4, fill: { color: C.deepBlue } });
  s8.addText(b.label, { x: xPos, y: 1.55, w: 2.8, h: 0.4, fontSize: 13, bold: true, color: C.white, align: "center", valign: "middle" });
  s8.addText([
    { text: b.prevHash, options: { fontSize: 10, fontFace: "Consolas", color: C.accent, breakLine: true } },
    { text: b.data, options: { fontSize: 11, color: C.darkText, breakLine: true } },
    { text: b.hash, options: { fontSize: 10, fontFace: "Consolas", color: C.teal, bold: true } }
  ], { x: xPos + 0.15, y: 2.0, w: 2.5, h: 1.35, valign: "middle" });

  if (i < 2) {
    s8.addText("\u2192", { x: xPos + 2.75, y: 2.15, w: 0.6, h: 0.5, fontSize: 24, color: C.teal, align: "center", valign: "middle" });
  }
});

s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.6, w: 8.8, h: 0.5, fill: { color: C.accent, transparency: 88 } });
s8.addText([
  { text: "Tamper with Block 1? ", options: { bold: true, color: C.accent } },
  { text: "Its hash changes \u2192 Block 2\u2019s \u2018Prev Hash\u2019 mismatches \u2192 entire chain breaks!", options: { color: C.darkText } }
], { x: 0.8, y: 3.6, w: 8.4, h: 0.5, fontSize: 12, valign: "middle" });

// Edge Computing section
s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.2, w: 8.8, h: 0.95, fill: { color: C.navy }, shadow: makeShadow() });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.2, w: 0.08, h: 0.95, fill: { color: C.mint } });
s8.addText([
  { text: "Extending to Edge Computing", options: { fontSize: 14, bold: true, color: C.mint, breakLine: true } },
  { text: "IoT devices and edge nodes generate data far from the cloud. Hashing lets edge devices verify data integrity locally without trusting a central server \u2014 blockchain + hashing enables tamper-proof, decentralized trust at the network edge.", options: { fontSize: 11, color: C.light } }
], { x: 0.9, y: 4.25, w: 8.3, h: 0.85, valign: "middle" });

s8.addNotes("KEY SLIDE: Connect everything together. Each block includes the hash of the previous block. If anyone changes data in Block 1, the hash changes, which breaks Block 2 reference, and so on. This is the core insight of blockchain security. NEW: Edge computing extension \u2014 explain that IoT sensors, autonomous vehicles, and smart devices at the network edge need to verify data without always reaching the cloud. Hashing provides lightweight integrity checks, and when combined with blockchain, creates a decentralized trust model. Edge nodes can hash sensor readings and chain them into a local ledger, making tampering detectable even without cloud connectivity. Mention: This connects to my own research on how blockchain architectures can secure edge computing systems.");

// ============================================================
// SLIDE 9: Think-Pair-Share Exercise
// ============================================================
let s9 = pres.addSlide();
s9.background = { color: C.navy };

s9.addText("Quick Exercise", { x: 0.6, y: 0.3, w: 8.8, h: 0.7, fontSize: 32, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });
s9.addText("Think \u2013 Pair \u2013 Share  (2 minutes)", { x: 0.6, y: 0.95, w: 5, h: 0.4, fontSize: 14, color: C.teal, italic: true });

s9.addText("9 / " + TOTAL, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.teal, align: "right" });

const questions = [
  { q: "If two students submit the same homework file, will their hashes match?", hint: "Think about Property #1\u2026", num: "Q1" },
  { q: "Can a hash function be used to compress files so you can decompress them later? Why or why not?", hint: "Think about Property #2\u2026", num: "Q2" }
];

questions.forEach(function(item, i) {
  let yPos = 1.6 + i * 1.7;
  s9.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yPos, w: 8.8, h: 1.45, fill: { color: C.deepBlue } });
  s9.addText(item.num, { x: 0.85, y: yPos + 0.15, w: 0.7, h: 0.5, fontSize: 18, bold: true, color: C.mint, fontFace: "Georgia" });
  s9.addText(item.q, { x: 1.5, y: yPos + 0.1, w: 7.6, h: 0.75, fontSize: 16, color: C.white });
  s9.addText(item.hint, { x: 1.5, y: yPos + 0.85, w: 7.6, h: 0.45, fontSize: 13, italic: true, color: C.teal });
});

s9.addNotes("Give students 1 minute to think individually, then 1 minute to discuss with a neighbor. Q1 Answer: YES, deterministic! Same input gives same hash. Q2 Answer: NO, hashing is one-way (lossy). You cannot get the original data back from the hash. Compression is reversible; hashing is not. If students are confused, use the blender analogy again.");

// ============================================================
// SLIDE 10: Summary & Takeaways
// ============================================================
let s10 = pres.addSlide();
s10.background = { color: C.navy };

s10.addShape(pres.shapes.OVAL, { x: -1.5, y: 3.5, w: 4, h: 4, fill: { color: C.deepBlue, transparency: 50 } });
s10.addShape(pres.shapes.OVAL, { x: 8.5, y: -1, w: 3, h: 3, fill: { color: C.teal, transparency: 50 } });

s10.addText("Key Takeaways", { x: 0.6, y: 0.3, w: 8.8, h: 0.7, fontSize: 32, fontFace: "Georgia", bold: true, color: C.white, margin: 0 });

const takeaways = [
  "A hash function maps any input to a fixed-size output",
  "Three properties: deterministic, one-way, collision resistant",
  "Used everywhere: passwords, file integrity, blockchain",
  "Changing one bit of input changes the entire hash (avalanche effect)"
];

takeaways.forEach(function(t, i) {
  let yPos = 1.3 + i * 0.75;
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yPos, w: 8.8, h: 0.6, fill: { color: C.deepBlue, transparency: 20 } });
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yPos, w: 0.06, h: 0.6, fill: { color: C.mint } });
  s10.addText(t, { x: 0.9, y: yPos, w: 8.3, h: 0.6, fontSize: 16, color: C.white, valign: "middle" });
});

s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.4, w: 8.8, h: 0.7, fill: { color: C.teal, transparency: 70 } });
s10.addText([
  { text: "Next class: ", options: { bold: true, color: C.mint } },
  { text: "Encryption vs. Hashing \u2014 What\u2019s the difference?", options: { color: C.white } }
], { x: 0.85, y: 4.4, w: 8.3, h: 0.7, fontSize: 15, valign: "middle" });

s10.addText("10 / " + TOTAL, { x: 8.8, y: 5.15, w: 1, h: 0.35, fontSize: 10, color: C.teal, align: "right" });

s10.addNotes("Recap the journey: We started with a password question, learned what hash functions are, saw their properties, explored applications in passwords and data integrity, and connected it all to blockchain. Tease the next lecture. Thank the audience.");

// Write file
pres.writeFile({ fileName: "/home/user/ppttest/Hashing_Teaching_Demo.pptx" })
  .then(function() { console.log("DONE - File saved to /home/user/ppttest/Hashing_Teaching_Demo.pptx"); })
  .catch(function(err) { console.error(err); });
