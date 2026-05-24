(() => {
  const root = document.documentElement;
  const langStorageKey = "puldistro-language";
  const langUrlParam = "lang";
  const languageChannelName = "puldistro-language";
  const defaultLanguage = "en";
  const supportedLanguages = ["en", "de"];
  const scriptBaseUrl = new URL(".", document.currentScript?.src || window.location.href);
  const localeBaseUrl = new URL("../locales/", scriptBaseUrl);
  let translations = {};
  let currentLanguage = defaultLanguage;
  let loadRequestId = 0;

  const getPath = (object, path) => path.split(".").reduce((value, key) => value && value[key], object);

  const parseValue = (raw) => {
    const value = raw.trim();
    if (value.startsWith('"""') && value.endsWith('"""')) return value.slice(3, -3);
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }
    if (value === "true") return true;
    if (value === "false") return false;
    if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
    return value;
  };

  const parseToml = (toml) => {
    const result = {};
    let section = result;
    let multiline = null;

    const setSection = (path) => {
      section = result;
      path.split(".").forEach((part) => {
        section[part] ||= {};
        section = section[part];
      });
    };

    const setKey = (line) => {
      const separator = line.indexOf("=");
      if (separator === -1) return;
      const key = line.slice(0, separator).trim();
      const raw = line.slice(separator + 1).trim();
      if (raw === '"""') {
        multiline = { key, lines: [] };
        return;
      }
      if (raw.startsWith('"""') && !raw.endsWith('"""')) {
        multiline = { key, lines: [raw.slice(3)] };
        return;
      }
      section[key] = parseValue(raw);
    };

    toml.split(/\r?\n/).forEach((sourceLine) => {
      const line = sourceLine.trim();
      if (multiline) {
        if (line.endsWith('"""')) {
          multiline.lines.push(sourceLine.replace(/"""\s*$/, ""));
          section[multiline.key] = multiline.lines.join("\n");
          multiline = null;
        } else {
          multiline.lines.push(sourceLine);
        }
        return;
      }
      if (!line || line.startsWith("#")) return;
      const sectionMatch = line.match(/^\[([^\]]+)\]$/);
      if (sectionMatch) {
        setSection(sectionMatch[1].trim());
        return;
      }
      setKey(line);
    });

    return result;
  };

  const getStoredLanguage = () => {
    try {
      const stored = localStorage.getItem(langStorageKey);
      return supportedLanguages.includes(stored) ? stored : null;
    } catch {
      return null;
    }
  };

  const getUrlLanguage = () => {
    try {
      const language = new URL(window.location.href).searchParams.get(langUrlParam);
      return supportedLanguages.includes(language) ? language : null;
    } catch {
      return null;
    }
  };

  const detectLanguage = () => {
    const urlLanguage = getUrlLanguage();
    if (urlLanguage) return urlLanguage;
    const stored = getStoredLanguage();
    if (stored) return stored;
    const browserLanguage = (navigator.language || defaultLanguage).split("-")[0];
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : defaultLanguage;
  };

  const interpolate = (value, params = {}) => String(value).replace(/\{(\w+)\}/g, (_, key) => params[key] ?? `{${key}}`);

  const t = (key, params, fallback = "") => {
    const value = getPath(translations, key);
    if (value === undefined || value === null) return interpolate(fallback || key, params);
    return interpolate(value, params);
  };

  const applyElement = (element) => {
    const textKey = element.dataset.i18n;
    if (textKey) element.textContent = t(textKey, undefined, element.textContent);

    const htmlKey = element.dataset.i18nHtml;
    if (htmlKey) element.innerHTML = t(htmlKey, undefined, element.innerHTML);

    Object.entries(element.dataset).forEach(([name, key]) => {
      if (!name.startsWith("i18nAttr")) return;
      const attribute = name.slice("i18nAttr".length).replace(/^[A-Z]/, c => c.toLowerCase()).replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
      element.setAttribute(attribute, t(key, undefined, element.getAttribute(attribute) || ""));
    });
  };

  const updateUrlLanguage = () => {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get(langUrlParam) === currentLanguage) return;
      url.searchParams.set(langUrlParam, currentLanguage);
      history.replaceState(history.state, "", url);
    } catch {}
  };

  const updateLocalizedLinks = () => {
    document.querySelectorAll("a[href]").forEach((link) => {
      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || /^[a-z][a-z\d+.-]*:/i.test(rawHref)) return;
      try {
        const url = new URL(rawHref, window.location.href);
        if (!url.pathname.endsWith(".html") && !url.pathname.endsWith("/")) return;
        const [hrefWithoutHash, hash = ""] = rawHref.split("#", 2);
        const [path, query = ""] = hrefWithoutHash.split("?", 2);
        const params = new URLSearchParams(query);
        params.set(langUrlParam, currentLanguage);
        link.setAttribute("href", `${path}?${params.toString()}${hash ? `#${hash}` : ""}`);
      } catch {}
    });
  };

  const applyTranslations = () => {
    root.lang = currentLanguage;
    updateUrlLanguage();
    updateLocalizedLinks();
    document.querySelectorAll("[data-i18n], [data-i18n-html], [data-i18n-attr-title], [data-i18n-attr-aria-label], [data-i18n-attr-placeholder]").forEach(applyElement);
    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.value = currentLanguage;
    });
    window.dispatchEvent(new CustomEvent("i18n:applied", { detail: { language: currentLanguage } }));
  };

  const broadcastLanguage = () => {
    try { languageChannel?.postMessage({ language: currentLanguage }); } catch {}
  };

  let languageChannel = null;
  try { languageChannel = new BroadcastChannel(languageChannelName); } catch {}

  const loadLanguage = async (language = detectLanguage(), options = {}) => {
    const requestedLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
    const requestId = ++loadRequestId;
    currentLanguage = requestedLanguage;

    let nextTranslations = {};
    try {
      const cacheBust = Date.now();
      const response = await fetch(new URL(`${requestedLanguage}.toml?v=${cacheBust}`, localeBaseUrl), { cache: "no-store" });
      if (!response.ok) throw new Error(`Could not load locale ${requestedLanguage}: ${response.status}`);
      nextTranslations = parseToml(await response.text());
    } catch (error) {
      console.warn("Could not load live locale file. Serve the site over http:// instead of file:// so locales/*.toml can be loaded.", error);
    }

    if (requestId !== loadRequestId) return translations;
    translations = nextTranslations;
    currentLanguage = requestedLanguage;
    try { localStorage.setItem(langStorageKey, currentLanguage); } catch {}
    applyTranslations();
    if (options.broadcast !== false) broadcastLanguage();
    return translations;
  };

  window.DistroI18n = {
    ready: loadLanguage(),
    loadLanguage,
    applyTranslations,
    t,
    get language() { return currentLanguage; },
    get translations() { return translations; },
  };

  const syncStoredLanguage = () => {
    const stored = getStoredLanguage();
    if (stored && stored !== currentLanguage) loadLanguage(stored, { broadcast: false });
  };

  const handleLanguageSelect = (event) => {
    const select = event.target?.closest?.("[data-language-select]");
    if (!select) return;
    loadLanguage(select.value);
  };

  if (languageChannel) {
    languageChannel.addEventListener("message", (event) => {
      const language = event.data?.language;
      if (supportedLanguages.includes(language) && language !== currentLanguage) loadLanguage(language, { broadcast: false });
    });
  }

  document.addEventListener("change", handleLanguageSelect);
  document.addEventListener("input", handleLanguageSelect);

  window.addEventListener("storage", (event) => {
    if (event.key === langStorageKey) syncStoredLanguage();
  });
  window.addEventListener("focus", syncStoredLanguage);
  window.addEventListener("pageshow", syncStoredLanguage);

  window.addEventListener("DOMContentLoaded", () => {
    window.DistroI18n.ready.then(applyTranslations);
  });
})();
