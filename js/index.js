    const CRITERIA = ["beginner","expert","stable","fresh","rolling","manual","automated","gaming","creative","developer","privacy","security","lightweight","modernDesktop","kde","gnome","xfce","tilingWM","wayland","keyboardDriven","nvidia","immutable","server","laptop","oldHardware","archLike","debianLike","rpmLike","sourceBased","commercialFriendly","minimal","community","windowsLike","customization","officeCompat","proWindowsApps","antiCheat","vendorUtilities","dualBootRecommended","webApps"];

    const distroLinks = {
      "Linux Mint": "https://linuxmint.com/",
      "Ubuntu": "https://ubuntu.com/desktop",
      "Kubuntu": "https://kubuntu.org/",
      "Debian": "https://www.debian.org/",
      "Fedora Workstation": "https://fedoraproject.org/workstation/",
      "Arch Linux": "https://archlinux.org/",
      "EndeavourOS": "https://endeavouros.com/",
      "CachyOS": "https://cachyos.org/",
      "Manjaro": "https://manjaro.org/",
      "Gentoo": "https://www.gentoo.org/",
      "MX Linux": "https://mxlinux.org/",
      "Pop!_OS": "https://pop.system76.com/",
      "Bazzite": "https://bazzite.gg/",
      "ChimeraOS": "https://chimeraos.org/",
      "Nobara": "https://nobaraproject.org/",
      "PikaOS": "https://pika-os.com/",
      "Fedora KDE Plasma": "https://fedoraproject.org/spins/kde/",
      "Fedora Silverblue/Kinoite": "https://fedoraproject.org/atomic-desktops/",
      "KDE neon": "https://neon.kde.org/",
      "openSUSE Tumbleweed": "https://get.opensuse.org/tumbleweed/",
      "openSUSE Leap": "https://get.opensuse.org/leap/",
      "Zorin OS": "https://zorin.com/os/",
      "elementary OS": "https://elementary.io/",
      "Garuda Linux": "https://garudalinux.org/",
      "NixOS": "https://nixos.org/",
      "Void Linux": "https://voidlinux.org/",
      "Alpine Linux": "https://www.alpinelinux.org/",
      "TUXEDO OS": "https://www.tuxedocomputers.com/en/TUXEDO-OS_1.tuxedo",
      "Solus": "https://getsol.us/"
    };

    const interfaceLinks = {
      "KDE Plasma": "https://kde.org/plasma-desktop/",
      "GNOME": "https://www.gnome.org/",
      "Xfce": "https://www.xfce.org/",
      "Cinnamon": "https://projects.linuxmint.com/cinnamon/",
      "MATE": "https://mate-desktop.org/",
      "Budgie": "https://buddiesofbudgie.org/",
      "Hyprland": "https://hyprland.org/",
      "Sway": "https://swaywm.org/",
      "niri": "https://github.com/YaLTeR/niri",
      "i3": "https://i3wm.org/"
    };

    const dualBootLink = "https://wiki.archlinux.org/title/Dual_boot_with_Windows";

    const distrosFallbackJson = "[{\"name\":\"Linux Mint\",\"desc\":\"Friendly Ubuntu-based desktop with conservative updates, excellent defaults, and a familiar workflow.\",\"tags\":[\"Beginner\",\"Stable\",\"Windows-like\",\"Cinnamon\"],\"p\":{\"beginner\":10,\"stable\":9,\"automated\":9,\"windowsLike\":9,\"debianLike\":8,\"laptop\":7,\"oldHardware\":7,\"privacy\":6,\"gaming\":5,\"developer\":5}},{\"name\":\"Ubuntu\",\"desc\":\"The mainstream default: huge documentation, broad vendor support, and polished releases.\",\"tags\":[\"Beginner\",\"Popular\",\"GNOME\",\"Vendor support\"],\"p\":{\"beginner\":9,\"stable\":8,\"automated\":8,\"gnome\":8,\"wayland\":6,\"debianLike\":8,\"laptop\":8,\"developer\":7,\"gaming\":6,\"commercialFriendly\":9,\"community\":9}},{\"name\":\"Kubuntu\",\"desc\":\"Ubuntu base with KDE Plasma for users who want a polished, highly configurable desktop.\",\"tags\":[\"Beginner\",\"KDE\",\"Stable\",\"Configurable\"],\"p\":{\"beginner\":8,\"stable\":8,\"kde\":10,\"customization\":9,\"debianLike\":8,\"automated\":8,\"laptop\":7,\"gaming\":6,\"windowsLike\":7}},{\"name\":\"Debian\",\"desc\":\"Extremely stable, community-run, flexible, and trusted for servers and desktops.\",\"tags\":[\"Stable\",\"Community\",\"Server\",\"Reliable\"],\"p\":{\"stable\":10,\"privacy\":8,\"server\":10,\"debianLike\":10,\"community\":9,\"lightweight\":7,\"manual\":5,\"developer\":7,\"oldHardware\":8,\"security\":8}},{\"name\":\"Fedora Workstation\",\"desc\":\"Modern GNOME experience with fresh tech, strong defaults, and a clean upstream-first approach.\",\"tags\":[\"Modern\",\"GNOME\",\"Fresh\",\"Developer\"],\"p\":{\"fresh\":8,\"stable\":7,\"gnome\":10,\"wayland\":9,\"developer\":9,\"rpmLike\":10,\"security\":8,\"laptop\":9,\"modernDesktop\":9,\"privacy\":7,\"community\":8}},{\"name\":\"Arch Linux\",\"desc\":\"A minimal rolling-release system for users who want full control and understand maintenance.\",\"tags\":[\"Rolling\",\"Expert\",\"Minimal\",\"DIY\"],\"p\":{\"expert\":10,\"rolling\":10,\"manual\":10,\"archLike\":10,\"minimal\":10,\"customization\":10,\"tilingWM\":10,\"wayland\":9,\"keyboardDriven\":9,\"fresh\":10,\"developer\":9,\"community\":8,\"privacy\":8}},{\"name\":\"EndeavourOS\",\"desc\":\"Arch made approachable: near-Arch experience with a friendly installer and community.\",\"tags\":[\"Arch-based\",\"Rolling\",\"Friendly\",\"Desktop\"],\"p\":{\"archLike\":10,\"rolling\":9,\"fresh\":9,\"customization\":8,\"tilingWM\":8,\"wayland\":8,\"keyboardDriven\":7,\"developer\":8,\"community\":8,\"manual\":6,\"gaming\":7,\"beginner\":5,\"kde\":7}},{\"name\":\"CachyOS\",\"desc\":\"Performance-focused Arch-based distro with optimized kernels, gaming tweaks, and modern packages.\",\"tags\":[\"Performance\",\"Arch-based\",\"Gaming\",\"Fresh\"],\"p\":{\"archLike\":9,\"rolling\":9,\"fresh\":10,\"gaming\":10,\"developer\":8,\"modernDesktop\":8,\"tilingWM\":7,\"wayland\":8,\"keyboardDriven\":6,\"nvidia\":8,\"customization\":7,\"expert\":7,\"manual\":5}},{\"name\":\"Manjaro\",\"desc\":\"Arch-inspired but more curated, with graphical tools and delayed package flow.\",\"tags\":[\"Arch-like\",\"Curated\",\"Beginner-ish\",\"Desktop\"],\"p\":{\"archLike\":7,\"beginner\":7,\"automated\":7,\"fresh\":7,\"rolling\":7,\"gaming\":7,\"kde\":7,\"nvidia\":7,\"community\":6,\"laptop\":7}},{\"name\":\"Gentoo\",\"desc\":\"Source-based Linux for deep customization, learning, and compile-time control.\",\"tags\":[\"Expert\",\"Source-based\",\"Custom\",\"Learning\"],\"p\":{\"expert\":10,\"sourceBased\":10,\"manual\":10,\"customization\":10,\"tilingWM\":8,\"keyboardDriven\":8,\"minimal\":9,\"privacy\":8,\"security\":7,\"developer\":8,\"fresh\":7,\"lightweight\":6}},{\"name\":\"MX Linux\",\"desc\":\"Debian-based, lightweight, practical, and strong on older hardware with useful GUI tools.\",\"tags\":[\"Lightweight\",\"Debian\",\"Old hardware\",\"Practical\"],\"p\":{\"beginner\":8,\"stable\":9,\"lightweight\":9,\"oldHardware\":10,\"xfce\":9,\"debianLike\":9,\"automated\":8,\"privacy\":7,\"windowsLike\":6}},{\"name\":\"Pop!_OS\",\"desc\":\"Creator and developer friendly Ubuntu-based distro with strong laptop and NVIDIA support.\",\"tags\":[\"Creators\",\"NVIDIA\",\"Developer\",\"Ubuntu-based\"],\"p\":{\"beginner\":8,\"developer\":8,\"creative\":9,\"nvidia\":10,\"laptop\":9,\"debianLike\":8,\"gaming\":8,\"automated\":8,\"modernDesktop\":8}},{\"name\":\"Bazzite\",\"desc\":\"Immutable Fedora-based gaming system inspired by SteamOS, great for handhelds and gaming PCs.\",\"tags\":[\"Gaming\",\"Immutable\",\"Fedora\",\"Steam Deck-like\"],\"p\":{\"gaming\":10,\"immutable\":10,\"automated\":9,\"rpmLike\":8,\"nvidia\":7,\"beginner\":7,\"stable\":7,\"modernDesktop\":8,\"security\":7}},{\"name\":\"ChimeraOS\",\"desc\":\"Console-first gaming distro for living-room PCs and handheld-style setups, with less general-desktop focus.\",\"tags\":[\"Console-like\",\"Gaming\",\"Immutable\",\"Living room\"],\"p\":{\"gaming\":10,\"immutable\":9,\"automated\":9,\"beginner\":6,\"modernDesktop\":5,\"stable\":7,\"rpmLike\":3}},{\"name\":\"Nobara\",\"desc\":\"Fedora-based desktop tuned for gaming, streaming, and content creation.\",\"tags\":[\"Gaming\",\"Creator\",\"Fedora-based\",\"Tweaked\"],\"p\":{\"gaming\":10,\"creative\":8,\"rpmLike\":8,\"fresh\":8,\"nvidia\":8,\"beginner\":7,\"modernDesktop\":8,\"automated\":7,\"developer\":6}},{\"name\":\"PikaOS\",\"desc\":\"Ubuntu-based gaming desktop with newer drivers and gaming-focused defaults for users who still want a normal desktop.\",\"tags\":[\"Gaming\",\"Ubuntu-based\",\"Desktop\",\"NVIDIA\"],\"p\":{\"gaming\":9,\"debianLike\":7,\"nvidia\":8,\"beginner\":7,\"automated\":7,\"fresh\":7,\"creative\":6,\"modernDesktop\":7}},{\"name\":\"Fedora KDE Plasma\",\"desc\":\"Fedora's fresh, upstream-focused base paired with KDE Plasma customization and a traditional desktop workflow.\",\"tags\":[\"Fedora\",\"KDE\",\"Fresh\",\"Developer\"],\"p\":{\"fresh\":8,\"stable\":7,\"kde\":10,\"wayland\":8,\"customization\":8,\"developer\":8,\"rpmLike\":10,\"laptop\":8,\"modernDesktop\":9,\"community\":8}},{\"name\":\"Fedora Silverblue/Kinoite\",\"desc\":\"Atomic Fedora desktop for users who like rollback-friendly updates, Flatpak apps, and reproducible workstation patterns.\",\"tags\":[\"Immutable\",\"Fedora\",\"Atomic\",\"Developer\"],\"p\":{\"immutable\":10,\"rpmLike\":9,\"security\":8,\"developer\":8,\"automated\":8,\"modernDesktop\":8,\"wayland\":9,\"gnome\":7,\"kde\":7,\"stable\":8}},{\"name\":\"KDE neon\",\"desc\":\"Ubuntu LTS base with very fresh KDE Plasma, best for users who specifically prioritize KDE updates.\",\"tags\":[\"KDE\",\"Ubuntu-based\",\"Fresh Plasma\",\"Desktop\"],\"p\":{\"kde\":10,\"debianLike\":7,\"fresh\":7,\"customization\":8,\"modernDesktop\":8,\"beginner\":6,\"automated\":6}},{\"name\":\"openSUSE Tumbleweed\",\"desc\":\"Rolling release with excellent snapshots, YaST tooling, and strong KDE support.\",\"tags\":[\"Rolling\",\"Snapshots\",\"KDE\",\"Reliable\"],\"p\":{\"rolling\":9,\"fresh\":9,\"stable\":8,\"kde\":9,\"rpmLike\":8,\"developer\":8,\"security\":8,\"automated\":7,\"expert\":6,\"customization\":8}},{\"name\":\"openSUSE Leap\",\"desc\":\"Conservative release model with YaST tooling and enterprise-flavored stability.\",\"tags\":[\"Stable\",\"KDE\",\"Enterprise-like\",\"YaST\"],\"p\":{\"stable\":9,\"kde\":8,\"rpmLike\":8,\"server\":8,\"automated\":7,\"security\":8,\"commercialFriendly\":8,\"beginner\":6}},{\"name\":\"Zorin OS\",\"desc\":\"Polished Ubuntu-based distro designed to feel comfortable for Windows/macOS switchers.\",\"tags\":[\"Beginner\",\"Polished\",\"Windows-like\",\"Ubuntu-based\"],\"p\":{\"beginner\":10,\"windowsLike\":10,\"stable\":8,\"automated\":9,\"debianLike\":8,\"laptop\":7,\"creative\":6,\"commercialFriendly\":7}},{\"name\":\"elementary OS\",\"desc\":\"Minimal, cohesive, macOS-like desktop focused on simplicity and visual polish.\",\"tags\":[\"Polished\",\"Simple\",\"macOS-like\",\"Ubuntu-based\"],\"p\":{\"beginner\":8,\"stable\":7,\"debianLike\":7,\"modernDesktop\":8,\"automated\":8,\"creative\":7,\"laptop\":8,\"minimal\":6}},{\"name\":\"Garuda Linux\",\"desc\":\"Flashy Arch-based desktop with gaming/performance presets and snapshot tooling.\",\"tags\":[\"Gaming\",\"Arch-based\",\"Flashy\",\"Rolling\"],\"p\":{\"gaming\":9,\"archLike\":9,\"rolling\":9,\"fresh\":9,\"kde\":8,\"customization\":9,\"nvidia\":8,\"beginner\":5,\"modernDesktop\":8}},{\"name\":\"NixOS\",\"desc\":\"Declarative, reproducible Linux for users who value configuration as code and rollbacks.\",\"tags\":[\"Declarative\",\"Expert\",\"Reproducible\",\"Unique\"],\"p\":{\"expert\":9,\"developer\":10,\"manual\":8,\"security\":8,\"privacy\":8,\"minimal\":8,\"customization\":9,\"tilingWM\":9,\"wayland\":8,\"keyboardDriven\":9,\"stable\":7,\"rolling\":7}},{\"name\":\"Void Linux\",\"desc\":\"Independent rolling distro with runit, simplicity, and strong appeal for experienced minimalists.\",\"tags\":[\"Independent\",\"Rolling\",\"Minimal\",\"Expert\"],\"p\":{\"expert\":9,\"rolling\":8,\"manual\":9,\"minimal\":9,\"lightweight\":9,\"privacy\":8,\"customization\":8,\"tilingWM\":8,\"keyboardDriven\":8,\"developer\":7,\"oldHardware\":7}},{\"name\":\"Alpine Linux\",\"desc\":\"Tiny, security-oriented distribution popular for containers, servers, and minimal systems.\",\"tags\":[\"Tiny\",\"Security\",\"Server\",\"Minimal\"],\"p\":{\"security\":10,\"lightweight\":10,\"minimal\":10,\"server\":9,\"expert\":8,\"privacy\":8,\"manual\":8,\"oldHardware\":7}},{\"name\":\"TUXEDO OS\",\"desc\":\"Ubuntu/KDE-based distro optimized for TUXEDO laptops, but solid for KDE laptop users too.\",\"tags\":[\"KDE\",\"Laptop\",\"Ubuntu-based\",\"Polished\"],\"p\":{\"kde\":9,\"laptop\":10,\"beginner\":8,\"stable\":8,\"automated\":8,\"debianLike\":8,\"modernDesktop\":8,\"nvidia\":7}},{\"name\":\"Solus\",\"desc\":\"Independent desktop-focused distro with curated rolling updates and a clean Budgie experience.\",\"tags\":[\"Desktop\",\"Curated\",\"Budgie\",\"Rolling-ish\"],\"p\":{\"beginner\":7,\"automated\":8,\"fresh\":7,\"modernDesktop\":8,\"laptop\":7,\"stable\":7,\"minimal\":5,\"community\":5}}]";
    const distros = () => JSON.parse(tr("index_data.distros_json", distrosFallbackJson));

    const interfacesFallbackJson = "[{\"name\":\"KDE Plasma\",\"kind\":\"Desktop environment\",\"desc\":\"Powerful, polished, Windows-like, and highly configurable without abandoning GUI tools.\",\"tags\":[\"KDE\",\"Customizable\",\"Traditional\"],\"p\":{\"kde\":10,\"customization\":8,\"windowsLike\":7,\"modernDesktop\":7,\"gaming\":4,\"beginner\":6,\"automated\":6}},{\"name\":\"GNOME\",\"kind\":\"Desktop environment\",\"desc\":\"Modern, focused, Wayland-first workflow with strong laptop polish and simple defaults.\",\"tags\":[\"GNOME\",\"Wayland\",\"Focused\"],\"p\":{\"gnome\":10,\"wayland\":9,\"modernDesktop\":9,\"laptop\":8,\"beginner\":7,\"automated\":7,\"minimal\":3}},{\"name\":\"Xfce\",\"kind\":\"Desktop environment\",\"desc\":\"Classic, lightweight, stable, and ideal for older hardware or users who prefer simple desktops.\",\"tags\":[\"Lightweight\",\"Classic\",\"Stable\"],\"p\":{\"xfce\":10,\"lightweight\":10,\"oldHardware\":9,\"stable\":7,\"windowsLike\":5,\"beginner\":6}},{\"name\":\"Cinnamon\",\"kind\":\"Desktop environment\",\"desc\":\"Familiar, comfortable, Windows-like desktop with friendly defaults, especially for switchers.\",\"tags\":[\"Familiar\",\"Beginner\",\"Windows-like\"],\"p\":{\"windowsLike\":10,\"beginner\":9,\"automated\":8,\"stable\":7,\"modernDesktop\":5,\"debianLike\":4}},{\"name\":\"MATE\",\"kind\":\"Desktop environment\",\"desc\":\"Traditional, efficient desktop for people who want a proven classic workflow without much overhead.\",\"tags\":[\"Classic\",\"Lightweight\",\"Traditional\"],\"p\":{\"lightweight\":8,\"oldHardware\":8,\"stable\":7,\"xfce\":7,\"beginner\":5,\"windowsLike\":5}},{\"name\":\"Budgie\",\"kind\":\"Desktop environment\",\"desc\":\"Clean, friendly desktop with a modern traditional layout and less complexity than KDE.\",\"tags\":[\"Clean\",\"Modern\",\"Desktop\"],\"p\":{\"modernDesktop\":7,\"beginner\":7,\"automated\":7,\"windowsLike\":5,\"customization\":4}},{\"name\":\"Hyprland\",\"kind\":\"Wayland window manager\",\"desc\":\"Flashy, highly configurable dynamic tiling WM for keyboard-driven users who like modern Wayland setups.\",\"tags\":[\"Wayland\",\"Tiling\",\"Ricing\"],\"p\":{\"tilingWM\":10,\"wayland\":10,\"keyboardDriven\":10,\"customization\":10,\"manual\":8,\"expert\":7,\"archLike\":7,\"fresh\":6,\"nvidia\":3}},{\"name\":\"Sway\",\"kind\":\"Wayland window manager\",\"desc\":\"i3-compatible Wayland tiling WM focused on reliability, keyboard control, and simple configuration.\",\"tags\":[\"Wayland\",\"Tiling\",\"i3-like\"],\"p\":{\"tilingWM\":9,\"wayland\":10,\"keyboardDriven\":10,\"customization\":8,\"manual\":8,\"expert\":6,\"minimal\":6,\"stable\":4}},{\"name\":\"niri\",\"kind\":\"Wayland window manager\",\"desc\":\"Scrollable-tiling Wayland compositor for users who want a fresh keyboard-first workflow.\",\"tags\":[\"Wayland\",\"Scrollable tiling\",\"Modern\"],\"p\":{\"tilingWM\":9,\"wayland\":10,\"keyboardDriven\":9,\"customization\":8,\"manual\":8,\"expert\":6,\"fresh\":8,\"modernDesktop\":4}},{\"name\":\"i3\",\"kind\":\"X11 window manager\",\"desc\":\"Mature, minimal keyboard-driven tiling WM with excellent documentation and predictable behavior.\",\"tags\":[\"Tiling\",\"Minimal\",\"Mature\"],\"p\":{\"tilingWM\":8,\"keyboardDriven\":10,\"customization\":8,\"manual\":8,\"expert\":6,\"minimal\":8,\"lightweight\":8,\"stable\":5}}]";
    const interfaces = () => JSON.parse(tr("index_data.interfaces_json", interfacesFallbackJson));

    const tr = (key, fallback, params) => window.DistroI18n?.t(key, params, fallback) || fallback;
    const questions = () => window.PuldistroQuizData.questions();

    const home = document.getElementById("home");
    const app = document.getElementById("app");
    const results = document.getElementById("results");
    const progress = document.getElementById("progress");
    const counter = document.getElementById("counter");
    const questionType = document.getElementById("questionType");
    const questionEl = document.getElementById("question");
    const hintEl = document.getElementById("hint");
    const answersEl = document.getElementById("answers");
    const backBtn = document.getElementById("backBtn");
    const restartBtn = document.getElementById("restartBtn");
    const againBtn = document.getElementById("againBtn");
    const resultGrid = document.getElementById("resultGrid");
    const compatNotes = document.getElementById("compatNotes");
    const otherMatches = document.getElementById("otherMatches");

    let activeQuestions = [];
    let activeMaxTier = 1;
    let index = 0;
    let history = [];
    let scores = Object.fromEntries(CRITERIA.map(c => [c, 0]));

    function refreshActiveQuestions() {
      activeQuestions = questions().filter(question => question.tier <= activeMaxTier);
      if (index >= activeQuestions.length) index = Math.max(0, activeQuestions.length - 1);
    }

    const glossaryFallbackJson = "{\"anti-cheat\":\"Game protection software used to stop cheating. Some anti-cheat systems do not allow Linux.\",\"Arch\":\"A Linux family known for user control, frequent updates, and hands-on maintenance.\",\"Btrfs\":\"A storage format that can support snapshots, which are saved restore points.\",\"Cinnamon\":\"A traditional desktop interface that feels familiar to many Windows users.\",\"codecs\":\"Small software components that let your computer play or create audio/video formats.\",\"compile\":\"Build software from source code instead of installing a ready-made app package.\",\"config files\":\"Text files that store system or app settings.\",\"containers\":\"Isolated environments for apps or development tools.\",\"Debian\":\"A Linux family known for stability, long history, and a large software base.\",\"desktop environment\":\"The full graphical interface: panels, menus, settings app, file manager, and window behavior.\",\"distro\":\"Short for Linux distribution: a complete Linux-based operating system you can install.\",\"dual-boot\":\"Keeping two operating systems installed, such as Windows and Linux, and choosing one when the computer starts.\",\"driver\":\"Software that lets the operating system talk to hardware like graphics cards, Wi‑Fi, and printers.\",\"firmware\":\"Small built-in software inside hardware devices.\",\"Flatpak\":\"An app format that works across many Linux systems, often installed through graphical app stores.\",\"GNOME\":\"A modern, simple Linux desktop interface with a focused workflow.\",\"GPU\":\"Graphics Processing Unit: the chip/card that handles graphics and games.\",\"headless\":\"A computer used without a monitor, keyboard, or regular graphical desktop.\",\"homelab\":\"A personal home server setup used for learning, storage, media, networking, or experiments.\",\"Hyprland\":\"A keyboard-focused interface that automatically tiles windows on screen.\",\"i3\":\"A keyboard-focused tiling window manager known for simplicity and documentation.\",\"immutable\":\"A system design where core system files are protected, making updates easier to undo.\",\"installer\":\"The setup program that installs the operating system onto your computer.\",\"kernel\":\"The core of the operating system that talks directly to hardware.\",\"KDE Plasma\":\"A highly customizable Linux desktop interface with a traditional Windows-like layout.\",\"Linux\":\"An open-source operating system family used on desktops, servers, phones, and embedded devices.\",\"Mesa\":\"Open-source graphics software used by many Linux systems, especially for AMD and Intel graphics.\",\"NVIDIA\":\"A graphics-card maker. Its Linux driver setup can be more sensitive than AMD or Intel.\",\"ProtonDB\":\"A community website that reports how well Windows games work on Linux through Steam Proton.\",\"rollback\":\"Going back to an earlier working state after an update or change breaks something.\",\"rolling\":\"An update style where software arrives continuously instead of in big version releases.\",\"sandboxed\":\"Isolated from the rest of the system to reduce risk and avoid dependency conflicts.\",\"server\":\"A computer mainly used to provide services, such as files, websites, media, or automation.\",\"Snap\":\"An app package format associated with Ubuntu/Canonical.\",\"snapshots\":\"Saved restore points of system files, useful for undoing changes.\",\"source code\":\"The human-readable instructions programmers write before software is built.\",\"stable\":\"Prioritizes reliability and fewer surprises, usually by changing software more slowly.\",\"Sway\":\"A keyboard-focused tiling interface for Wayland.\",\"terminal\":\"A text command window used to control the computer by typing commands.\",\"tiling\":\"A window layout style where windows automatically arrange themselves without overlapping.\",\"VM\":\"Virtual machine: a computer simulated inside your current computer, often used to run another operating system.\",\"Wayland\":\"A modern Linux display system that controls how apps draw windows and receive input.\",\"Xfce\":\"A lightweight traditional Linux desktop interface, often good for older computers.\",\"ZFS\":\"An advanced storage system with strong data-management features.\"}";
    const glossary = () => JSON.parse(tr("index_data.glossary_json", glossaryFallbackJson));
    const glossaryTerms = () => Object.keys(glossary()).sort((a, b) => b.length - a.length);

    function escapeHtml(value) {
      return value.replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[char]));
    }

    function explainTerms(value) {
      const terms = glossaryTerms();
      const pattern = new RegExp(`(?<![\\w-])(${terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?![\\w-])`, "gi");
      const entries = glossary();
      return escapeHtml(value).replace(pattern, match => {
        const key = terms.find(term => term.toLowerCase() === match.toLowerCase());
        return `<span class="term" tabindex="0" data-tip="${escapeHtml(entries[key])}">${match}</span>`;
      });
    }

    function start(mode) {
      activeMaxTier = mode === "simple" ? 1 : mode === "medium" ? 2 : 3;
      refreshActiveQuestions();
      index = 0;
      history = [];
      scores = Object.fromEntries(CRITERIA.map(c => [c, 0]));
      home.style.display = "none";
      results.style.display = "none";
      app.style.display = "flex";
      renderQuestion();
    }

    function renderQuestion() {
      const current = activeQuestions[index];
      progress.style.width = `${(index / activeQuestions.length) * 100}%`;
      counter.textContent = `${index + 1} / ${activeQuestions.length}`;
      questionType.textContent = current.category;
      questionEl.innerHTML = explainTerms(current.text);
      hintEl.innerHTML = explainTerms(current.hint);
      answersEl.innerHTML = "";
      current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "answer";
        button.innerHTML = explainTerms(answer.label);
        button.addEventListener("click", () => choose(answer));
        answersEl.appendChild(button);
      });
      backBtn.disabled = index === 0;
      backBtn.style.opacity = index === 0 ? .45 : 1;
    }

    function choose(answer) {
      history.push(answer.weights);
      Object.entries(answer.weights).forEach(([key, value]) => scores[key] = (scores[key] || 0) + value);
      index += 1;
      if (index >= activeQuestions.length) showResults(); else renderQuestion();
    }

    function goBack() {
      if (index === 0) return;
      const previousWeights = history.pop();
      Object.entries(previousWeights).forEach(([key, value]) => scores[key] = (scores[key] || 0) - value);
      index -= 1;
      renderQuestion();
    }

    function scoreProfile(profile) {
      const raw = CRITERIA.reduce((total, key) => total + (scores[key] || 0) * (profile.p[key] || 0), 0);
      const userMagnitude = Math.sqrt(CRITERIA.reduce((total, key) => total + Math.pow(scores[key] || 0, 2), 0));
      const profileMagnitude = Math.sqrt(CRITERIA.reduce((total, key) => total + Math.pow(profile.p[key] || 0, 2), 0));
      return profileMagnitude && userMagnitude ? raw / (userMagnitude * profileMagnitude) : 0;
    }

    function scoreDistro(distro) {
      const base = scoreProfile(distro);
      const blockerPressure = (scores.officeCompat || 0) + (scores.proWindowsApps || 0) + (scores.antiCheat || 0) + (scores.vendorUtilities || 0);
      if (!blockerPressure) return base;
      const safeDefaults = ((distro.p.stable || 0) + (distro.p.automated || 0) + (distro.p.commercialFriendly || 0) + (distro.p.windowsLike || 0) + (distro.p.debianLike || 0)) / 50;
      const riskyDefaults = ((distro.p.sourceBased || 0) + (distro.p.minimal || 0) + (distro.p.manual || 0)) / 40;
      return base + Math.min(.08, blockerPressure / 500) * safeDefaults - Math.min(.06, blockerPressure / 650) * riskyDefaults;
    }

    function interfaceCompatibility(distro, desktop) {
      const shared = ["kde", "gnome", "xfce", "tilingWM", "wayland", "keyboardDriven", "lightweight", "modernDesktop", "windowsLike", "customization"];
      const raw = shared.reduce((total, key) => total + (distro.p[key] || 0) * (desktop.p[key] || 0), 0);
      return raw / 100;
    }

    function recommendInterface(distro) {
      return interfaces()
        .map(desktop => ({...desktop, match: scoreProfile(desktop), combo: scoreProfile(desktop) + interfaceCompatibility(distro, desktop)}))
        .sort((a,b) => b.combo - a.combo)[0];
    }

    function compatibilityRecommendations() {
      const notes = [];
      if ((scores.proWindowsApps || 0) >= 6) notes.push({title:"Professional Windows apps", text:"Keep Windows available through dual boot, a dedicated Windows machine, or a VM. Adobe Creative Cloud, AutoCAD/SolidWorks/Revit, QuickBooks Desktop, tax tools, and internal company apps are often not painless on Linux."});
      if ((scores.officeCompat || 0) >= 5) notes.push({title:"Microsoft Office compatibility", text:"Use Microsoft 365 web, OnlyOffice, or LibreOffice for normal documents. If you need advanced Excel macros/VBA, Access, or exact formatting, keep a Windows fallback."});
      if ((scores.antiCheat || 0) >= 5) notes.push({title:"Anti-cheat games", text:"Before switching, check ProtonDB and AreWeAntiCheatYet for your exact games. If Valorant, Fortnite, Warzone/Call of Duty, Destiny 2, or similar titles are non-negotiable, plan for dual boot."});
      if ((scores.vendorUtilities || 0) >= 4) notes.push({title:"Vendor utilities", text:"Hardware may work, but RGB, fan, mouse macro, stream deck, audio interface, or printer vendor apps may need alternatives such as OpenRGB, Piper, Solaar, or a Windows fallback."});
      if ((scores.dualBootRecommended || 0) >= 5) notes.push({title:"Recommended migration path", text:`Do not wipe Windows immediately. Start with <a href="${dualBootLink}" target="_blank" rel="noopener noreferrer">dual boot</a> or a separate SSD, test your required apps/games/peripherals, then move fully only if the blockers are solved.`});
      if (!notes.length) notes.push({title:"Linux readiness", text:"Your answers do not show major Windows-only blockers. You can likely choose based on distro, desktop environment/window manager, update model, and hardware preferences."});
      return notes;
    }

    function topReasons(distro) {
      return CRITERIA
        .map(key => ({key, value: (scores[key] || 0) * (distro.p[key] || 0)}))
        .filter(item => item.value > 0)
        .sort((a,b) => b.value - a.value)
        .slice(0, 3)
        .map(item => item.key.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase()));
    }

    function showResults() {
      progress.style.width = "100%";
      const ranked = distros()
        .map(distro => ({...distro, match: scoreDistro(distro)}))
        .sort((a,b) => b.match - a.match);

      app.style.display = "none";
      results.style.display = "block";
      resultGrid.innerHTML = "";
      const notes = compatibilityRecommendations();
      compatNotes.innerHTML = `<h3>${tr("index.compatibility_title", "Compatibility recommendations")}</h3><div class="mini-list">${notes.map(note => `<div class="mini compat-note-item"><strong>${note.title}</strong><br><span class="compat-note-text">${note.text}</span></div>`).join("")}</div>`;
      ranked.slice(0, 3).forEach((distro, i) => {
        const desktop = recommendInterface(distro);
        const card = document.createElement("article");
        card.className = "distro glass";
        const percent = Math.max(1, Math.round(distro.match * 100));
        card.innerHTML = `
          <div class="rank">#${i + 1} ${tr("index.rank_match", "MATCH")}</div>
          <div class="score">${percent}%</div>
          <h3><a href="${distroLinks[distro.name] || '#'}" target="_blank" rel="noopener noreferrer">${distro.name} ↗</a></h3>
          <p class="desc">${distro.desc}</p>
          <div class="combo">
            <small>${tr("index.recommended_interface", "Recommended interface")}</small>
            <strong><a href="${interfaceLinks[desktop.name] || '#'}" target="_blank" rel="noopener noreferrer">${desktop.name} ↗</a> <span class="combo-kind">${desktop.kind}</span></strong>
            <span>${desktop.desc}</span>
          </div>
          <div class="tags">${[...distro.tags, ...desktop.tags, ...topReasons(distro)].slice(0, 8).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        `;
        resultGrid.appendChild(card);
      });

      otherMatches.innerHTML = "";
      ranked.slice(3, 11).forEach(distro => {
        const desktop = recommendInterface(distro);
        const row = document.createElement("div");
        row.className = "mini";
        row.innerHTML = `<span>${distro.name} + ${desktop.name}</span><strong>${Math.max(1, Math.round(distro.match * 100))}%</strong>`;
        otherMatches.appendChild(row);
      });
      window.scrollTo({top: 0, behavior: "smooth"});
    }

    function restart() {
      home.style.display = "grid";
      app.style.display = "none";
      results.style.display = "none";
      window.scrollTo({top: 0, behavior: "smooth"});
    }

    document.querySelectorAll(".mode").forEach(button => button.addEventListener("click", () => start(button.dataset.mode)));
    backBtn.addEventListener("click", goBack);
    restartBtn.addEventListener("click", restart);
    againBtn.addEventListener("click", restart);
    window.addEventListener("i18n:applied", () => {
      if (app.style.display === "flex" && activeQuestions.length) {
        refreshActiveQuestions();
        renderQuestion();
      }
      if (results.style.display === "block") showResults();
    });
