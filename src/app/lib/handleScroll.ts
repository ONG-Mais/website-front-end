export function handleScroll() {
  document.documentElement.style.overflowY =
    document.documentElement.style.overflowY === "hidden" ? "scroll" : "hidden";
  document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "auto" : "hidden";
}
