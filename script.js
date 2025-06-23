
const quotes = [
  "We don’t cut corners — we frame them straight.",
  "Built to code — and beyond it.",
  "If you want it done right — call JA Cota.",
  "Construction that earns trust.",
  "Build with pride. Build with Cota."
];
let i = 0;
setInterval(() => {
  document.getElementById("quote").textContent = quotes[i];
  i = (i + 1) % quotes.length;
}, 4000);
