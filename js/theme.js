(() => {
  const root = document.documentElement;
  const storageKey = "puldistro-theme";
  const validThemes = new Set(["light", "dark"]);

  const getStoredTheme = () => {
    try {
      const stored = localStorage.getItem(storageKey);
      return validThemes.has(stored) ? stored : null;
    } catch {
      return null;
    }
  };

  const getPreferredTheme = () => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  const setTheme = (theme, persist = true) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // Theme still changes for the current page when storage is unavailable.
      }
    }

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      const i18n = window.DistroI18n;
      const nextLabel = i18n?.t(`common.${nextTheme}`, undefined, nextTheme) || nextTheme;
      const labelText = i18n?.t(`common.${theme === "dark" ? "light" : "dark"}`, undefined, theme === "dark" ? "Light" : "Dark") || (theme === "dark" ? "Light" : "Dark");
      const title = i18n?.t("common.switch_to_mode", { theme: nextLabel }, `Switch to ${nextTheme} mode`) || `Switch to ${nextTheme} mode`;
      button.setAttribute("aria-label", title);
      button.setAttribute("title", title);
      button.setAttribute("aria-pressed", String(theme === "dark"));
      const icon = button.querySelector(".theme-icon");
      const label = button.querySelector(".theme-label");
      if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
      if (label) label.textContent = labelText;
    });
  };

  setTheme(getPreferredTheme(), false);

  window.addEventListener("DOMContentLoaded", () => {
    setTheme(getPreferredTheme(), false);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        setTheme(root.dataset.theme === "dark" ? "light" : "dark");
      });
    });
  });

  window.addEventListener("i18n:applied", () => setTheme(getPreferredTheme(), false));
})();
