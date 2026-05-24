    (() => {
      try {
        const stored = localStorage.getItem("distropicker-theme");
        const theme = stored === "light" || stored === "dark"
          ? stored
          : (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch {
        document.documentElement.dataset.theme = "dark";
      }
    })();
