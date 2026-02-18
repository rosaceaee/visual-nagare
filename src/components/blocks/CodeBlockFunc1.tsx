import CodeblockWrapper from "./CodeblockWrapper";

const demoCode = `
  function A() {
    const a = 1;
    B();
  }
`;

const demoLanguage = "javascript";

export default function CodeBlockFunc2() {
  return <CodeblockWrapper code={demoCode} language={demoLanguage} />;
}
