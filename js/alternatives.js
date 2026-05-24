    const categoriesFallbackJson = "[\"All\",\"Office\",\"Creative\",\"CAD/Engineering\",\"Gaming\",\"Business\",\"Hardware\",\"Music\",\"Dev\",\"Communication\"]";
    const categories = () => JSON.parse(tr("alternatives_data.categories_json", categoriesFallbackJson));

    const itemsFallbackJson = "[{\"category\":\"Office\",\"windows\":\"Microsoft Office / Microsoft 365 desktop\",\"difficulty\":\"medium\",\"summary\":\"The web apps work, but full desktop Word/Excel/PowerPoint/Outlook are not native on Linux. Advanced Excel macros, VBA, Access, and exact formatting can require Windows.\",\"alternatives\":[[\"OnlyOffice\",\"Best for Microsoft document compatibility among native-feeling Linux office suites.\"],[\"LibreOffice\",\"Powerful open-source suite; excellent for open formats, sometimes imperfect for complex DOCX/XLSX.\"],[\"Microsoft 365 Web\",\"Good if you can work in the browser and do not need full desktop features.\"],[\"Windows VM / dual boot\",\"Recommended for Access, VBA-heavy Excel, or strict corporate templates.\"]],\"tags\":[\"Word\",\"Excel\",\"PowerPoint\",\"Outlook\",\"VBA\"]},{\"category\":\"Creative\",\"windows\":\"Adobe Photoshop\",\"difficulty\":\"hard\",\"summary\":\"Modern Photoshop/Creative Cloud is not a painless native Linux workflow. Wine hacks may exist, but are not a reliable recommendation for normal users.\",\"alternatives\":[[\"Krita\",\"Excellent for digital painting and illustration.\"],[\"GIMP\",\"Strong photo/image editor, but different workflow and weaker PSD compatibility.\"],[\"Photopea\",\"Browser-based Photoshop-like editor for lighter work.\"],[\"Windows dual boot/VM\",\"Best for professional Photoshop-dependent workflows.\"]],\"tags\":[\"Adobe\",\"PSD\",\"Photo editing\",\"Design\"]},{\"category\":\"Creative\",\"windows\":\"Adobe Illustrator / InDesign\",\"difficulty\":\"hard\",\"summary\":\"Professional Adobe publishing/vector workflows are difficult to replace exactly on Linux, especially with client files and print pipelines.\",\"alternatives\":[[\"Inkscape\",\"Great open-source vector editor; good for SVG and many illustration workflows.\"],[\"Scribus\",\"Open-source desktop publishing for layout work.\"],[\"Penpot / Figma web\",\"Good for interface and collaborative design work.\"],[\"Windows/macOS fallback\",\"Recommended for Adobe-native professional pipelines.\"]],\"tags\":[\"Adobe\",\"Vector\",\"Publishing\",\"Print\"]},{\"category\":\"Creative\",\"windows\":\"Adobe Premiere Pro / After Effects\",\"difficulty\":\"medium\",\"summary\":\"Adobe video tools are not native, but Linux has serious video editing options. Motion graphics and plugin-heavy workflows may still need Adobe.\",\"alternatives\":[[\"DaVinci Resolve\",\"Professional editor/color tool available on Linux; hardware/codec setup can matter.\"],[\"Kdenlive\",\"Friendly open-source video editor.\"],[\"Blender\",\"Useful for motion graphics, compositing, and 3D.\"],[\"Windows fallback\",\"Best if you rely on Adobe plugins or project exchange.\"]],\"tags\":[\"Video\",\"Motion graphics\",\"Adobe\",\"Resolve\"]},{\"category\":\"CAD/Engineering\",\"windows\":\"AutoCAD / Revit / Inventor\",\"difficulty\":\"hard\",\"summary\":\"Autodesk desktop apps are generally Windows/macOS-first and not painless on Linux. Professional architecture/engineering users should plan a Windows fallback.\",\"alternatives\":[[\"FreeCAD\",\"Open-source parametric CAD; improving but not a drop-in AutoCAD/Revit replacement.\"],[\"LibreCAD\",\"2D CAD option for simpler drafting.\"],[\"Onshape\",\"Browser-based CAD that works well on Linux.\"],[\"Dual boot / Windows workstation\",\"Recommended for professional Autodesk workflows.\"]],\"tags\":[\"AutoCAD\",\"Revit\",\"Inventor\",\"BIM\",\"Drafting\"]},{\"category\":\"CAD/Engineering\",\"windows\":\"SolidWorks\",\"difficulty\":\"hard\",\"summary\":\"SolidWorks is not a normal native Linux app. Wine/VM attempts are fragile for production work and GPU acceleration can be a problem.\",\"alternatives\":[[\"FreeCAD\",\"Best open-source local alternative for parametric modeling.\"],[\"Onshape\",\"Strong browser CAD alternative, especially for collaboration.\"],[\"Fusion/Autodesk web workflows\",\"May help for some workflows, but not full SolidWorks replacement.\"],[\"Windows machine\",\"Most reliable choice if SolidWorks is required.\"]],\"tags\":[\"Mechanical CAD\",\"Engineering\",\"3D modeling\"]},{\"category\":\"Gaming\",\"windows\":\"Steam games without anti-cheat blockers\",\"difficulty\":\"easy\",\"summary\":\"Many games work very well through Steam Proton, especially single-player and non-invasive multiplayer titles.\",\"alternatives\":[[\"Steam + Proton\",\"Enable Proton and check ProtonDB for game-specific notes.\"],[\"Heroic Games Launcher\",\"Good for Epic/GOG/Amazon libraries.\"],[\"Lutris\",\"Flexible launcher for non-Steam games.\"],[\"Bottles\",\"GUI for managing Wine prefixes for games/apps.\"]],\"tags\":[\"Steam\",\"Proton\",\"Lutris\",\"Heroic\"]},{\"category\":\"Gaming\",\"windows\":\"Valorant / Fortnite / Warzone / Destiny 2-style anti-cheat games\",\"difficulty\":\"hard\",\"summary\":\"Kernel anti-cheat is one of the biggest Linux gaming blockers. Some games work, some do not, and status changes over time.\",\"alternatives\":[[\"Check ProtonDB\",\"Verify the exact game and recent reports.\"],[\"AreWeAntiCheatYet\",\"Quick anti-cheat compatibility reference.\"],[\"Dual boot Windows\",\"Best option if these games are non-negotiable.\"],[\"Cloud gaming\",\"May work for some titles depending on region/service.\"]],\"tags\":[\"Anti-cheat\",\"Vanguard\",\"BattlEye\",\"EAC\",\"Ricochet\"]},{\"category\":\"Business\",\"windows\":\"QuickBooks Desktop / Sage / tax tools / company ERP clients\",\"difficulty\":\"hard\",\"summary\":\"Many business tools are Windows-only or browser-compatible only in newer versions. Local databases, plugins, and government/country-specific tax software can be blockers.\",\"alternatives\":[[\"Web version of the same product\",\"Often the cleanest Linux-compatible route if available.\"],[\"Odoo\",\"Open-source ERP/CRM/accounting option for some businesses.\"],[\"GnuCash\",\"Good personal/small-business accounting alternative.\"],[\"Windows VM / remote desktop\",\"Recommended for required legacy business software.\"]],\"tags\":[\"Accounting\",\"ERP\",\"Tax\",\"Company apps\"]},{\"category\":\"Hardware\",\"windows\":\"Logitech G Hub / Razer Synapse / Corsair iCUE / SteelSeries GG\",\"difficulty\":\"medium\",\"summary\":\"The devices often work, but vendor configuration apps usually do not. RGB, macros, DPI profiles, firmware updates, and headset features vary.\",\"alternatives\":[[\"Piper\",\"Mouse configuration for many gaming mice.\"],[\"Solaar\",\"Great for Logitech Unifying/Bolt devices.\"],[\"OpenRGB\",\"Cross-vendor RGB control for many devices.\"],[\"Windows fallback\",\"Useful for firmware updates or vendor-only features.\"]],\"tags\":[\"RGB\",\"Mouse\",\"Keyboard\",\"Headset\",\"Firmware\"]},{\"category\":\"Hardware\",\"windows\":\"Elgato Stream Deck / capture / streaming utilities\",\"difficulty\":\"medium\",\"summary\":\"Streaming hardware can work, but official companion apps are often Windows/macOS-first. Check each device before switching.\",\"alternatives\":[[\"OBS Studio\",\"Excellent native Linux streaming/recording app.\"],[\"streamdeck-ui / Boatswain\",\"Community Stream Deck control options.\"],[\"v4l2 tools\",\"Useful for camera/capture troubleshooting.\"],[\"Windows fallback\",\"Recommended if your setup depends on vendor plugins.\"]],\"tags\":[\"OBS\",\"Streaming\",\"Capture\",\"Stream Deck\"]},{\"category\":\"Music\",\"windows\":\"FL Studio / Ableton Live / commercial VST plugins\",\"difficulty\":\"medium\",\"summary\":\"Linux audio can be excellent, but Windows/macOS DAWs, plugins, iLok/DRM, and audio interface utilities can be difficult.\",\"alternatives\":[[\"Bitwig Studio\",\"Professional DAW with native Linux support.\"],[\"REAPER\",\"Powerful DAW available on Linux.\"],[\"Ardour\",\"Open-source DAW for recording/mixing.\"],[\"yabridge\",\"Can bridge many Windows VST plugins, but requires setup.\"]],\"tags\":[\"DAW\",\"VST\",\"Audio\",\"Plugins\",\"iLok\"]},{\"category\":\"Dev\",\"windows\":\"Visual Studio / .NET desktop / SQL Server tooling\",\"difficulty\":\"medium\",\"summary\":\"General development is excellent on Linux, but full Visual Studio, some .NET desktop workloads, and Microsoft enterprise tooling may still prefer Windows.\",\"alternatives\":[[\"VS Code\",\"Excellent cross-platform editor with huge extension ecosystem.\"],[\"JetBrains IDEs\",\"Strong Linux support across many languages.\"],[\".NET SDK\",\"Modern .NET development works well; check desktop workload needs.\"],[\"Dev containers\",\"Good way to isolate project environments.\"]],\"tags\":[\"Visual Studio\",\".NET\",\"VS Code\",\"JetBrains\"]},{\"category\":\"Communication\",\"windows\":\"Teams / Discord / Zoom / Slack\",\"difficulty\":\"easy\",\"summary\":\"Most mainstream communication apps have Linux clients or good web versions, though screen sharing and Wayland support can vary by app and desktop.\",\"alternatives\":[[\"Native Linux clients\",\"Discord, Slack, Zoom, and others have Linux builds.\"],[\"Web apps\",\"Often the most stable option for business tools.\"],[\"Flatpak versions\",\"Convenient app delivery across distros.\"],[\"GNOME/KDE Wayland sessions\",\"Usually best-supported modern desktop paths.\"]],\"tags\":[\"Teams\",\"Discord\",\"Zoom\",\"Slack\",\"Wayland\"]}]";
    const items = () => JSON.parse(tr("alternatives_data.items_json", itemsFallbackJson));

    const appLinks = {
      "OnlyOffice": "https://www.onlyoffice.com/",
      "LibreOffice": "https://www.libreoffice.org/",
      "Microsoft 365 Web": "https://www.microsoft365.com/",
      "Krita": "https://krita.org/",
      "GIMP": "https://www.gimp.org/",
      "Photopea": "https://www.photopea.com/",
      "Windows dual boot/VM": "https://wiki.archlinux.org/title/Dual_boot_with_Windows",
      "Windows VM / dual boot": "https://wiki.archlinux.org/title/Dual_boot_with_Windows",
      "Windows/macOS fallback": "fallback.html",
      "Windows fallback": "fallback.html",
      "Dual boot / Windows workstation": "fallback.html",
      "Dual boot Windows": "fallback.html",
      "Windows VM / remote desktop": "fallback.html",
      "Inkscape": "https://inkscape.org/",
      "Scribus": "https://www.scribus.net/",
      "Penpot / Figma web": "https://penpot.app/",
      "DaVinci Resolve": "https://www.blackmagicdesign.com/products/davinciresolve",
      "Kdenlive": "https://kdenlive.org/",
      "Blender": "https://www.blender.org/",
      "FreeCAD": "https://www.freecad.org/",
      "LibreCAD": "https://librecad.org/",
      "Onshape": "https://www.onshape.com/",
      "Steam + Proton": "https://store.steampowered.com/",
      "Heroic Games Launcher": "https://heroicgameslauncher.com/",
      "Lutris": "https://lutris.net/",
      "Bottles": "https://usebottles.com/",
      "Check ProtonDB": "https://www.protondb.com/",
      "AreWeAntiCheatYet": "https://areweanticheatyet.com/",
      "Cloud gaming": "https://www.xbox.com/play/",
      "Odoo": "https://www.odoo.com/",
      "GnuCash": "https://www.gnucash.org/",
      "Piper": "https://github.com/libratbag/piper",
      "Solaar": "https://pwr-solaar.github.io/Solaar/",
      "OpenRGB": "https://openrgb.org/",
      "OBS Studio": "https://obsproject.com/",
      "streamdeck-ui / Boatswain": "https://github.com/streamdeck-linux-gui/streamdeck-linux-gui",
      "v4l2 tools": "https://linuxtv.org/wiki/index.php/V4l-utils",
      "Bitwig Studio": "https://www.bitwig.com/",
      "REAPER": "https://www.reaper.fm/",
      "Ardour": "https://ardour.org/",
      "yabridge": "https://github.com/robbert-vdh/yabridge",
      "VS Code": "https://code.visualstudio.com/",
      "JetBrains IDEs": "https://www.jetbrains.com/",
      ".NET SDK": "https://dotnet.microsoft.com/",
      "Dev containers": "https://containers.dev/",
      "Native Linux clients": "https://flathub.org/",
      "Web apps": "https://flathub.org/apps/search?q=webapp",
      "Flatpak versions": "https://flathub.org/",
      "GNOME/KDE Wayland sessions": "https://wayland.freedesktop.org/",
      "Fusion/Autodesk web workflows": "https://www.autodesk.com/products/fusion-360/overview",
      "Web version of the same product": "fallback.html",
      "Windows machine": "fallback.html",
      "Windows Dual-Boot/VM": "https://wiki.archlinux.org/title/Dual_boot_with_Windows",
      "Windows VM / Dual-Boot": "https://wiki.archlinux.org/title/Dual_boot_with_Windows",
      "Windows-/macOS-Fallback": "fallback.html",
      "Windows-Fallback": "fallback.html",
      "Dual-Boot / Windows-Workstation": "fallback.html",
      "Dual-Boot Windows": "fallback.html",
      "Windows-VM / Remote Desktop": "fallback.html",
      "Windows-Rechner": "fallback.html",
      "ProtonDB prüfen": "https://www.protondb.com/",
      "Cloud-Gaming": "https://www.xbox.com/play/",
      "Fusion-/Autodesk-Web-Workflows": "https://www.autodesk.com/products/fusion-360/overview",
      "Webversion desselben Produkts": "fallback.html",
      "v4l2 Werkzeuge": "https://linuxtv.org/wiki/index.php/V4l-utils",
      "Dev-Container": "https://containers.dev/",
      "Native Linux-Clients": "https://flathub.org/",
      "Web Apps": "https://flathub.org/apps/search?q=webapp",
      "Flatpak-Versionen": "https://flathub.org/",
      "GNOME-/KDE-Wayland-Sitzungen": "https://wayland.freedesktop.org/"
    };

    const grid = document.getElementById("grid");
    const empty = document.getElementById("empty");
    const search = document.getElementById("search");
    const difficulty = document.getElementById("difficulty");
    const filters = document.getElementById("filters");
    let activeCategory = "All";

    const tr = (key, fallback, params) => window.DistroI18n?.t(key, params, fallback) || fallback;
    const allCategory = () => categories()[0] || "All";
    const isAllCategory = (category) => category === "All" || category === allCategory();

    function statusLabel(level) {
      return level === "easy"
        ? tr("alternatives.difficulty_easy", "Easy switch")
        : level === "medium"
          ? tr("alternatives.difficulty_medium", "Some compromises")
          : tr("alternatives.difficulty_hard", "Windows fallback likely");
    }

    function renderFilters() {
      filters.innerHTML = "";
      categories().forEach(category => {
        const button = document.createElement("button");
        button.className = `chip ${category === activeCategory || (isAllCategory(category) && isAllCategory(activeCategory)) ? "active" : ""}`;
        button.textContent = isAllCategory(category) ? tr("alternatives.all_categories", "All categories") : category;
        button.addEventListener("click", () => {
          activeCategory = category;
          renderFilters();
          render();
        });
        filters.appendChild(button);
      });
    }

    function matches(item) {
      const term = search.value.trim().toLowerCase();
      const haystack = [item.category, item.windows, item.summary, ...item.tags, ...item.alternatives.flat()].join(" ").toLowerCase();
      const categoryOk = isAllCategory(activeCategory) || item.category === activeCategory;
      const difficultyOk = difficulty.value === "all" || item.difficulty === difficulty.value;
      const searchOk = !term || haystack.includes(term);
      return categoryOk && difficultyOk && searchOk;
    }

    function render() {
      const visible = items().filter(matches);
      grid.innerHTML = "";
      visible.forEach(item => {
        const card = document.createElement("article");
        card.className = "card glass";
        card.innerHTML = `
          <div class="card-top">
            <div class="category">${item.category}</div>
            <div class="status ${item.difficulty}">${statusLabel(item.difficulty)}</div>
          </div>
          <h2>${item.windows}</h2>
          <p class="summary">${item.summary}</p>
          <div class="apps">
            ${item.alternatives.map(([name, desc]) => {
              const url = appLinks[name];
              const title = url ? `<a class="app-name" href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a>` : `<span class="app-name disabled">${name}</span>`;
              return `<div class="app">${title}<span class="app-desc">${desc}</span></div>`;
            }).join("")}
          </div>
          <div class="tag-row">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        `;
        grid.appendChild(card);
      });
      empty.style.display = visible.length ? "none" : "block";
    }

    search.addEventListener("input", render);
    difficulty.addEventListener("change", render);
    renderFilters();
    render();
    window.addEventListener("i18n:applied", () => {
      if (!categories().includes(activeCategory) && !isAllCategory(activeCategory)) activeCategory = allCategory();
      renderFilters();
      render();
    });
