(function () {
  // Prevent duplicate injection
  if (window.__appAWidgetLoaded) return;
  window.__appAWidgetLoaded = true;

  const APP_A_URL = "https://keyclient1.onmogaming.com";

  // Create button
  const btn = document.createElement("button");
  btn.innerText = "App A";

  // Styles
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "12px 16px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    background: "#555",
    color: "#fff",
    fontSize: "14px",
    zIndex: "9999",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.2s ease",
  });

  // Hover behavior
  btn.addEventListener("mouseenter", function () {
    btn.innerText = "← Go to App A";
    btn.style.background = "#333";
  });

  btn.addEventListener("mouseleave", function () {
    btn.innerText = "App A";
    btn.style.background = "#555";
  });

  // Click behavior
  btn.addEventListener("click", function () {
    window.location.href = APP_A_URL;
  });

  // Append to body
  document.body.appendChild(btn);
})();
