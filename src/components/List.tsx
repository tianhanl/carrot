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
  title?: string;
}

const grid: number = 8;

const getItemStyle = (draggableStyle: any, isDragging: boolean): {} => ({
  userSelect: 'none',
  padding: 2 * grid,
  margin: `0 0 ${grid}px 0`,
  borderRadius: 5,
  background: isDragging ? '#F07883' : '#FFFFFF',
  ...draggableStyle
});

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
          width: 300,
          display: 'flex',
          flexDirection: 'column'
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
      </div>
    );
  }
}

export default List;
