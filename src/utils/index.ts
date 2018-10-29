import produce from 'immer';
import { DraggableLocation } from 'react-beautiful-dnd';
import {
  Item,
  ListState
  } from '../constants/index';


export const generateItems = (length: number, offset: number = 0): Item[] => {
  return Array.from({ length }).map((v, i) => ({
    id: `item-${i + offset}`,
    content: `item ${i + offset}`
  }));
};

export const reorder = (
  list: [Item],
  startIndex: number,
  endIndex: number
): [Item] => {
  const targetElement: Item = list[startIndex];
  return produce<[Item]>(list, draft => {
    draft.splice(startIndex, 1);
    draft.splice(endIndex, 0, targetElement);
  });
};

export const move = (originalListState: ListState, droppableSource: DraggableLocation, droppableDestination: DraggableLocation): => {
  const targetElement: Item = originalListState[droppableSource.droppableId][droppableSource];
  return produce<ListState>(originalListState, draft => {
    draft[droppableSource.droppableId].splice(droppableSource.index, 1);
    draft[droppableDestination.droppableId].splice(droppableDestination.index, 0,targetElement)
  })
}