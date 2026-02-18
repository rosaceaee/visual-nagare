import CodeblockWrapper from "./CodeblockWrapper";

const demoCode = `
function B() {
  const b = 2;
}
`;

const demoLanguage = "javascript";

export default function CodeBlockFunc2() {
  return <CodeblockWrapper code={demoCode} language={demoLanguage} />;
}
