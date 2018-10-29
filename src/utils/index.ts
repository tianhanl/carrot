import produce from 'immer';
import { DraggableLocation } from 'react-beautiful-dnd';
import { Item, ListState } from '../constants/index';

export const generateItems = (length: number, offset: number = 0): Item[] => {
  return Array.from({ length }).map((v, i) => ({
    id: `item-${i + offset}`,
    content: `item ${i + offset}`
  }));
};

export const move = (
  originalListState: ListState,
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
): ListState => {
  const targetElement: Item =
    originalListState[droppableSource.droppableId][droppableSource.index];
  return produce<ListState>(originalListState, draft => {
    draft[droppableSource.droppableId].splice(droppableSource.index, 1);
    draft[droppableDestination.droppableId].splice(
      droppableDestination.index,
      0,
      targetElement
    );
  });
};
