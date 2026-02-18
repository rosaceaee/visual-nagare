import type { BlocksAction, BlocksState } from "./types";

export const initialBlocksState: BlocksState = {
  blocks: [],
};

export function blocksReducer(
  state: BlocksState,
  action: BlocksAction
): BlocksState {
  switch (action.type) {
    case "ADD_BLOCK": {
      const newBlock = {
        id: crypto.randomUUID(),
        type: action.payload.blockType,
        createdAt: Date.now(),
      };

      return {
        ...state,
        blocks: [...state.blocks, newBlock],
      };
    }

    case "REMOVE_BLOCK": {
      return {
        ...state,
        blocks: state.blocks.filter((b) => b.id !== action.payload.id),
      };
    }

    case "CLEAR_ALL": {
      return {
        ...state,
        blocks: [],
      };
    }

    default: {
      // TS 안전장치 (action 추가했는데 reducer에 반영 안 하면 에러나게)
      const _exhaustiveCheck: never = action;
      return state;
    }
  }
}
