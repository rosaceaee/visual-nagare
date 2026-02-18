import CodeblockWrapper from "./CodeblockWrapper";

const demoCode = `
function greet(name) {
  return "Hello, " + name + "!";
}
`;

const demoLanguage = "javascript";

export default function CodeblockBox() {
  return <CodeblockWrapper code={demoCode} language={demoLanguage} />;
}
