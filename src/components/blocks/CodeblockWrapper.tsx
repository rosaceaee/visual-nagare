import { CodeBlock } from "react-code-block";

type CodeBlockProps = {
  code: string;
  language: string;
};

export default function CodeBlockView({ code, language }: CodeBlockProps) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 my-4 rounded-xl shadow-lg text-left">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
