import * as React from 'react';
import List from './List';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { generateItems, move } from '../utils';
import { ListState, NUAI, NUANI, UAI, UANI } from '../constants';

class Board extends React.Component<{}, ListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      UAI: generateItems(10, 0),
      NUAI: generateItems(10, 10),
      UANI: generateItems(10, 20),
      NUANI: generateItems(10, 30)
    };
  }
  public onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    this.setState(move(this.state, source, destination));
  };
  public render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <List droppableId={UAI} items={this.state[UAI]} />
        <List droppableId={UANI} items={this.state[UANI]} />
        <List droppableId={NUAI} items={this.state[NUAI]} />
        <List droppableId={NUANI} items={this.state[NUANI]} />
      </DragDropContext>
    );
  }
}

export default Board;
