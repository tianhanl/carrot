import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Item } from '../constants';

interface ItemBoxComponentProps {
  providedDraggable: DraggableProvided;
  snapshotDraggable: DraggableStateSnapshot;
  item: Item;
}

const grid: number = 8;

const getItemStyle = (draggableStyle: any, isDragging: boolean): {} => ({
  userSelect: 'none',
  padding: 2 * grid,
  margin: `0 0 ${grid}px 0`,
  borderRadius: 5,
  background: isDragging ? '#F07883' : '#FFFFFF',
  transition: 'all 0.1ms',
  width: 200,
  ...draggableStyle
});

class ItemBox extends React.Component<ItemBoxComponentProps, {}> {
  public render() {
    const { providedDraggable, snapshotDraggable, item } = this.props;
    return (
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
    );
  }
}

export default ItemBox;
