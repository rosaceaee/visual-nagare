export type BlockType = "block1" | "block2" | "block3";

export type Block = {
  id: string;
  type: BlockType;
  createdAt: number;
};

export type BlocksState = {
  blocks: Block[];
};

export type BlocksAction =
  | { type: "ADD_BLOCK"; payload: { blockType: BlockType } }
  | { type: "REMOVE_BLOCK"; payload: { id: string } }
  | { type: "CLEAR_ALL" };
