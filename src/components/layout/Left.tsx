import type { Dispatch } from "react";
import { CodeBlock } from "react-code-block";
import CodeblockBox from "../blocks/CodeBlockBox";
import CodeblockFunc1 from "../blocks/CodeblockFunc1";
import CodeblockFunc2 from "../blocks/CodeblockFunc2";
import CodeblockFunc3 from "../blocks/CodeblockFunc3";

import type { BlocksAction, BlocksState, BlockType } from "../types";

type LeftProps = {
  state: BlocksState;
  dispatch: Dispatch<BlocksAction>;
};

// const blockTypes: BlockType[] = ["block1", "block2", "block3"];
const blockButtons: Array<{
  type: BlockType;
  Component: React.ComponentType;
}> = [
  { type: "block1", Component: CodeblockFunc1 },
  { type: "block2", Component: CodeblockFunc2 },
  { type: "block3", Component: CodeblockFunc3 },
];

export default function Left({ state, dispatch }: LeftProps) {
  return (
    <div className="box">
      <p className="box__label">LEFT</p>
      {/* <div className="bg-white p-6 my-4 rounded-xl shadow-lg text-left">
        <CodeblockBox />
        <CodeblockFunc2 />
      </div> */}

      <div className="box__row">
        {blockButtons.map(({ type, Component }) => (
          <button
            key={type}
            className="box__button"
            onClick={() =>
              dispatch({ type: "ADD_BLOCK", payload: { blockType: type } })
            }
          >
            <Component />
          </button>
        ))}
      </div>

      <button
        className="box__button box__button--ghost"
        onClick={() => dispatch({ type: "CLEAR_ALL" })}
      >
        Reset
      </button>
    </div>
  );
}
