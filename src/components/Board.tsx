import * as React from 'react';
import List from './List';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { generateItems, move } from '../utils';
import { ListState, NUAI, NUANI, UAI, UANI } from '../constants';

const listIds = [NUAI, NUANI, UAI, UANI];

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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 300px)',
            gridTemplateRows: 'repeat(2, 40vh)',
            gridColumnGap: 16,
            gridRowGap: 16,
            height: '100vh',
            justifyContent: 'center',
            alignContent: 'center',
            background: '#F6F7F9'
          }}
        >
          {listIds.map(id => (
            <List key={id} droppableId={id} items={this.state[id]} />
          ))}
        </div>
      </DragDropContext>
    );
  }
}

export default Board;
