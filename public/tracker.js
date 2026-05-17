console.log("TRACKER LOADED");
(function () {
  let sessionId = localStorage.getItem("tf_session");

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    localStorage.setItem(
      "tf_session",
      sessionId
    );
  }

  const params = new URLSearchParams(
    window.location.search
  );

  const payload = {
    session_id: sessionId,

    current_url: window.location.href,

    referrer: document.referrer,

    timestamp: new Date().toISOString(),

    user_agent: navigator.userAgent,

    language: navigator.language,

    screen_width: window.screen.width,
    screen_height: window.screen.height,

    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
  };

  console.log("TRACK PAYLOAD:");
  console.log(payload);

  const startTime = Date.now();

  window.addEventListener("beforeunload", () => {
    const timeSpent = Math.floor(
      (Date.now() - startTime) / 1000
    );

    console.log("TIME SPENT:");
    console.log({
      session_id: sessionId,
      time_spent_seconds: timeSpent,
    });
  });
})();