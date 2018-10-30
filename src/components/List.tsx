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

interface ListComponentProps {
  droppableId: string;
  items: [Item];
}

const grid: number = 8;

const getItemStyle = (draggableStyle: any, isDragging: boolean): {} => ({
  userSelect: 'none',
  padding: 2 * grid,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean): {} => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 300,
  minHeight: 400
});

class List extends React.Component<ListComponentProps, {}> {
  public render() {
    const { droppableId, items } = this.props;
    return (
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
                  <div>
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                      style={getItemStyle(
                        providedDraggable.draggableProps.style,
                        snapshotDraggable.isDragging
                      )}
                    >
                      {item.content}
                    </div>
                    {providedDraggable.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default List;
