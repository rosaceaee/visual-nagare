import CodeblockWrapper from "./CodeblockWrapper";

const demoCode = `
    function asdf() {
        console.log(2);
        return 1;
    }
`;

const demoLanguage = "javascript";

export default function CodeBlockFunc2() {
  return <CodeblockWrapper code={demoCode} language={demoLanguage} />;
}
