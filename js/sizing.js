const screenWidth = document.documentElement.clientWidth;
const baseFontSize = 16;
const designerScreenWidth = 1440;
const fontSize = baseFontSize * (screenWidth / designerScreenWidth);
document.documentElement.style.fontSize = Math.max(fontSize, 12) + 'px';