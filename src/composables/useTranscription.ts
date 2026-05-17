export function useTranscription() {
  function ruIpa(text: string): string {
    const words = text.split(/\s+/);
    const result: string[] = [];

    for (const raw of words) {
      const w = raw.replace(/[.,!?;:()\[\]""''«»—]/g, "");
      if (!w) continue;

      const ipa: string[] = [];
      let i = 0;
      while (i < w.length) {
        const ch = w[i].toLowerCase();
        const next = w[i + 1]?.toLowerCase() || "";

        if (ch === "н" && next === "г") {
          ipa.push("ŋ");
          i += 2;
          continue;
        }

        if (ch === "н" && next === "ь") {
          ipa.push("nʲ");
          i += 2;
          continue;
        }

        const cmap: Record<string, string> = {
          б: "b", в: "v", г: "ɡ", д: "d", ж: "ʐ", з: "z", й: "j",
          к: "k", л: "l", м: "m", н: "n", п: "p", р: "r", с: "s",
          т: "t", ф: "f", х: "x", ц: "ts", ч: "tɕ", ш: "ʂ", щ: "ɕː",
        };
        if (cmap[ch]) {
          ipa.push(cmap[ch]);
          i++;
          continue;
        }

        if (ch === "ь") {
          if ("еёюяи".includes(next)) {
            ipa.push("j");
          } else {
            ipa.push("ʲ");
          }
          i++;
          continue;
        }

        if (ch === "ъ") {
          i++;
          continue;
        }

        const vmap: Record<string, string> = {
          у: "u", е: "jɛ", ы: "ɨ", а: "a", о: "o", э: "ɛ",
          я: "ja", и: "i", ю: "ju",
        };
        if (vmap[ch]) {
          ipa.push(vmap[ch]);
          i++;
          continue;
        }

        ipa.push(ch);
        i++;
      }

      const joined = ipa.join("");
      if (joined) result.push("/" + joined + "/");
    }

    return result.join(" ");
  }

  function idIpa(text: string): string {
    const words = text.split(/\s+/);
    const result: string[] = [];

    for (const raw of words) {
      const w = raw.replace(/[.,!?;:()\[\]""''«»—]/g, "");
      if (!w) continue;

      const ipa: string[] = [];
      let i = 0;
      while (i < w.length) {
        const ch = w[i].toLowerCase();
        const d = (w[i] + (w[i + 1] || "")).toLowerCase();

        if (d === "ng") {
          ipa.push("ŋ");
          i += 2;
          continue;
        }
        if (d === "ny") {
          ipa.push("ɲ");
          i += 2;
          continue;
        }
        if (d === "sy") {
          ipa.push("ʃ");
          i += 2;
          continue;
        }
        if (d === "kh") {
          ipa.push("x");
          i += 2;
          continue;
        }

        const cmap: Record<string, string> = {
          b: "b", c: "tʃ", d: "d", f: "f", g: "ɡ", h: "h",
          j: "dʒ", k: "k", l: "l", m: "m", n: "n", p: "p",
          q: "k", r: "r", s: "s", t: "t", v: "v", w: "w",
          x: "ks", y: "j", z: "z",
        };

        if (cmap[ch]) {
          if (ch === "k" && i === w.length - 1) {
            ipa.push("ʔ");
          } else {
            ipa.push(cmap[ch]);
          }
          i++;
          continue;
        }

        if (ch === "e") {
          ipa.push("ə");
          i++;
          continue;
        }

        if ("aiuoé".includes(ch)) {
          ipa.push(ch === "é" ? "e" : ch);
          i++;
          continue;
        }

        ipa.push(ch);
        i++;
      }

      const joined = ipa.join("");
      if (joined) result.push("/" + joined + "/");
    }

    return result.join(" ");
  }

  function transcribe(text: string, lang: "ru" | "id"): string {
    if (lang === "ru") {
      // Check if text is Russian
      const hasCyrillic = /[а-яё]/i.test(text);
      if (hasCyrillic) return ruIpa(text);
    }
    return idIpa(text);
  }

  return { transcribe, ruIpa, idIpa };
}
