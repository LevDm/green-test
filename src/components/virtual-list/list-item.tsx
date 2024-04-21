import React from "react";
import { ItemContainerProps } from "./types";

export const ItemContainer: React.FC<ItemContainerProps<any>> = React.memo((props) => {
  const { index, data, itemSize, renderItem } = props;
  return (
    <li
      style={{
        height: `${itemSize}px`,
        width: "100%",
        position: "absolute",
        left: 0,
        top: index * itemSize,
      }}
    >
      {renderItem(data[index], index)}
    </li>
  );
});
