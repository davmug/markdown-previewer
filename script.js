const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function updatePreview() {
  const markdownText = editor.value;
  const htmlText = marked.parse(markdownText, { gfm: true, breaks: true });
  preview.innerHTML = htmlText;
}

const defaultMarkdown = `
# Main Title (H1)

## Subtitle (H2)

[Link](#)

\`Inline Code\`

\`\`\`javascript
// Code Block
function greet(name) {
console.log('Hello, ' + name + '!');
}
greet('World');
\`\`\`

- Bulleted List
  - Sub-Element 1
    - Sub-Element A
  - Sub-Element 2
    - Sub-Element B
- Other Element

1. Ordered List 1
1. Ordered List 2
1. Ordered List 3
> Quote: "Simplicity is the ultimate sophistication." - Leonardo da Vinci

![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) <!-- Image placeholder -->

**Bold text**
_Italic text_
`;

editor.value = defaultMarkdown;
updatePreview();

editor.addEventListener("input", updatePreview);
