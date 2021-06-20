window.onload = () => {
  const app = document.querySelector('.app');

  const maxDepth = (elem, level) => {
    if (elem.children.length == 0) return level;
    let max = level;
    Array.from(elem.children).forEach(element => {
      max = Math.max(max, maxDepth(element, level + 1));
    });
    return max;
  }
  console.log(maxDepth(app, 0));
}