// Add this code at the end of your main.js file
function showProjectDetails(event) {
  event.preventDefault();
  console.log("showProjectDetails")
  const projectId = event.target.dataset.project;
  const projectDetails = document.getElementById(projectId);
  // Hide all project details
  document.querySelectorAll('.project-details').forEach(details => {
    details.style.display = 'none';
  });
  // Show the selected project details
  projectDetails.style.display = 'block';
}

function replaceVowelsWithSymbol(text) {
  if (typeof text !== 'string') {
    return text;
  }
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const symbolMap = {
    'a': '𝑎',
    'e': '𝑒',
    'i': '𝑖',
    'o': '𝑜',
    'u': '𝑢',
    'A': '𝐴',
    'E': '𝐸',
    'I': '𝐼',
    'O': '𝑂',
    'U': '𝑈'
  };
  return text.split('').map(char => {
    if (vowels.includes(char) && Math.random() < 0.2) { // 20% chance to replace each vowel
      return symbolMap[char];
    }
    return char;
  }).join('');
}
function replaceTextWithSymbols(element) {
  if (element.nodeType === Node.TEXT_NODE && element.textContent.trim().length > 0) {
    element.textContent = replaceVowelsWithSymbol(element.textContent);
  } else {
    element.childNodes.forEach(replaceTextWithSymbols);
  }
}
function glitchText() {
  document.querySelectorAll('h2, p, a').forEach(replaceTextWithSymbols);
}
window.onload = () => {
  glitchText();

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', showProjectDetails);
  });
}
