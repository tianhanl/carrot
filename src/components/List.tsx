import * as React from 'react';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from 'react-beautiful-dnd';
import { Item } from '../constants';
import ItemBox from './ItemBox';

interface ListComponentProps {
  droppableId: string;
  items: [Item];
  title?: string;
}

const grid: number = 8;

const getListStyle = (isDraggingOver: boolean): {} => ({
  overflow: 'scroll'
});

class List extends React.Component<ListComponentProps, {}> {
  public render() {
    const { droppableId, items, title = 'empty list' } = this.props;
    return (
      <div
        style={{
          padding: grid,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h3>{title}</h3>
        <Droppable droppableId={droppableId}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(
                    providedDraggable: DraggableProvided,
                    snapshotDraggable: DraggableStateSnapshot
                  ) => (
                    <ItemBox
                      providedDraggable={providedDraggable}
                      snapshotDraggable={snapshotDraggable}
                      item={item}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default List;
