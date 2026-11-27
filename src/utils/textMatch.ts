// Shared answer normalization and soft typo checking (Levenshtein distance)

export function normalizeAnswer(s: string): string {
  if (!s) return "";
  const v = s.normalize ? s.normalize("NFKC") : s;
  try {
    return v
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  } catch {
    return v
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
}

export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const prev = new Array<number>(b.length + 1);
  const curr = new Array<number>(b.length + 1);

  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j];
  }

  return prev[b.length];
}

export interface AnswerCheckResult {
  isCorrect: boolean;
  isTypoAccepted: boolean;
  matchedExpected: string;
}

export function evaluateTextAnswer(
  userInput: string,
  expectedRaw: string,
): AnswerCheckResult {
  const userNorm = normalizeAnswer(userInput);
  const candidates = expectedRaw
    .split(/[|/;]/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (!userNorm || candidates.length === 0) {
    return { isCorrect: false, isTypoAccepted: false, matchedExpected: candidates[0] || expectedRaw };
  }

  // 1. Exact normalized match
  for (const cand of candidates) {
    if (normalizeAnswer(cand) === userNorm) {
      return { isCorrect: true, isTypoAccepted: false, matchedExpected: cand };
    }
  }

  // 2. Soft typo tolerance (1 edit for >= 5 chars, 2 edits for >= 14 chars)
  for (const cand of candidates) {
    const candNorm = normalizeAnswer(cand);
    const maxDist = candNorm.length >= 14 ? 2 : candNorm.length >= 5 ? 1 : 0;
    if (maxDist > 0 && levenshteinDistance(userNorm, candNorm) <= maxDist) {
      return { isCorrect: true, isTypoAccepted: true, matchedExpected: cand };
    }
  }

  return { isCorrect: false, isTypoAccepted: false, matchedExpected: candidates[0] };
}
