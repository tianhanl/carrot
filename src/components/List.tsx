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

class List extends React.Component<ListComponentProps, {}> {
  public render() {
    const { droppableId, items } = this.props;
    return (
      <Droppable droppableId={droppableId}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ border: 'black 1px solid', height: 300, width: '20%' }}
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
