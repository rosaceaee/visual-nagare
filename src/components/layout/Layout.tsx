import { useMemo, useReducer } from "react";
import Left from "./Left";
import Right from "./Right";
import { blocksReducer, initialBlocksState } from "../reducer";
import type { BlockType } from "../types";

type LayoutProps = {
  title: string;
};

export default function Layout({ title }: LayoutProps) {
  const [state, dispatch] = useReducer(blocksReducer, initialBlocksState);

  const detected = useMemo(() => {
    const has = (t: BlockType) => state.blocks.some((b) => b.type === t);

    return {
      block1: has("block1"),
      block2: has("block2"),
      block3: has("block3"),
      count: state.blocks.length,
    };
  }, [state.blocks]);

  return (
    <div className="layout">
      <div className="layout__left">
        <h2 className="layout__title">{title}</h2>

        <Left state={state} dispatch={dispatch} />
      </div>

      <div className="layout__right">
        <Right state={state} detected={detected} dispatch={dispatch} />
      </div>
    </div>
  );
}
