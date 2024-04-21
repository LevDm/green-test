export type RenderItem<T> = (item: T, index: number) => React.ReactNode;

export interface VirtualListProps<T> {
  data: T[];
  itemSize: number;
  height: number;
  width: number;
  renderItem: RenderItem<T>;
}

export interface ItemContainerProps<T> extends VirtualListProps<T> {
  index: number;
}
