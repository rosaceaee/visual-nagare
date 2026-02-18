import type { Dispatch } from "react";
import type { BlocksAction, BlocksState, BlockType } from "../types";

type LeftProps = {
  state: BlocksState;
  dispatch: Dispatch<BlocksAction>;
};

const blockTypes: BlockType[] = ["block1", "block2", "block3"];

// 메모리 블록 5개
export default function Right({ state, dispatch }: LeftProps) {
  return (
    <div className="box">
      <p className="box__label">Right</p>

      <div className="box__row">
        {blockTypes.map((t) => (
          <button
            key={t}
            className="box__button"
            onClick={() =>
              dispatch({ type: "ADD_BLOCK", payload: { blockType: t } })
            }
          >
            + {t.toUpperCase()}
          </button>
        ))}

        <button
          className="box__button box__button--ghost"
          onClick={() => dispatch({ type: "CLEAR_ALL" })}
        >
          Reset
        </button>
      </div>

      <div className="box__list">
        {state.blocks.length === 0 ? (
          <p className="box__muted">아직 없음</p>
        ) : (
          state.blocks.map((b) => (
            <div className="block" key={b.id}>
              <span className={`block__dot block__dot--${b.type}`} />
              <span className="block__text">{b.type}</span>

              <button
                className="block__remove"
                onClick={() =>
                  dispatch({ type: "REMOVE_BLOCK", payload: { id: b.id } })
                }
                aria-label="Remove"
                title="Remove"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
