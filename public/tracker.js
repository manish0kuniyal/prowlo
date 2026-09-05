(function () {
  const script = document.currentScript;

  if (!script) return;

  const projectId = script.getAttribute("data-project-id");

  if (!projectId) {
    console.error("Prowlo: Missing data-project-id");
    return;
  }

  let sessionId = localStorage.getItem(`prowlo_session_${projectId}`);

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    localStorage.setItem(
      `prowlo_session_${projectId}`,
      sessionId
    );
  }

  const params = new URLSearchParams(
    window.location.search
  );

  const baseData = {
    project_id: projectId,
    session_id: sessionId,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
  };

  function createEvent(type, data = {}) {
    return {
      ...baseData,
      event: type,
      url: window.location.href,
      pathname: window.location.pathname,
      title: document.title,
      timestamp: new Date().toISOString(),
      ...data,
    };
  }

  function sendEvent(eventData) {
    console.log("Prowlo Event:", eventData);
  }

  sendEvent(
    createEvent("page_view")
  );

  const startTime = Date.now();

  const scrollMilestones = new Set();

  function handleScroll() {
    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    if (documentHeight <= 0) return;

    const scrollPercentage = Math.round(
      (window.scrollY / documentHeight) * 100
    );

    [25, 50, 75, 100].forEach((milestone) => {
      if (
        scrollPercentage >= milestone &&
        !scrollMilestones.has(milestone)
      ) {
        scrollMilestones.add(milestone);

        sendEvent(
          createEvent("scroll", {
            depth: milestone,
          })
        );
      }
    });
  }

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  document.addEventListener("click", (event) => {
    const element = event.target.closest(
      "a, button"
    );

    if (!element) return;

    sendEvent(
      createEvent("click", {
        element: element.tagName.toLowerCase(),
        text: element.innerText?.trim().slice(0, 100) || null,
        href: element.href || null,
      })
    );
  });

  function sendPageExit() {
    const timeSpent = Math.floor(
      (Date.now() - startTime) / 1000
    );

    sendEvent(
      createEvent("page_exit", {
        time_spent_seconds: timeSpent,
      })
    );
  }

  window.addEventListener(
    "pagehide",
    sendPageExit
  );

  let currentUrl = window.location.href;

  function checkUrlChange() {
    if (window.location.href !== currentUrl) {
      currentUrl = window.location.href;

      scrollMilestones.clear();

      sendEvent(
        createEvent("page_view")
      );
    }
  }

  const originalPushState =
    history.pushState;

  history.pushState = function () {
    originalPushState.apply(
      history,
      arguments
    );

    checkUrlChange();
  };

  const originalReplaceState =
    history.replaceState;

  history.replaceState = function () {
    originalReplaceState.apply(
      history,
      arguments
    );

    checkUrlChange();
  };

  window.addEventListener(
    "popstate",
    checkUrlChange
  );

  console.log(
    "Prowlo tracker loaded:",
    projectId
  );
})();