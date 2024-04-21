import React, { useState, SyntheticEvent } from "react";
import { VirtualListProps } from "./types";
import { ItemContainer } from "./list-item";

export const VirtualList: React.FC<VirtualListProps<any>> = (props) => {
  const { data, itemSize, height, width } = props;

  const [startIndex, setStartIndex] = useState(0);

  const showingItems = Math.ceil(height / itemSize) + 1;
  const endIndex = Math.min(startIndex + showingItems, data.length);

  const handleScroll = (e: SyntheticEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    const newStartIndex = Math.floor(scrollTop / itemSize);
    setStartIndex(newStartIndex);
  };

  const builder = () => {
    const blocks = [];
    for (let index = startIndex; index < endIndex; index++) {
      blocks.push(<ItemContainer key={index} index={index} {...props} />);
    }
    return blocks;
  };

  return (
    <div style={{ height: height, width: width, overflow: "auto" }} onScroll={handleScroll}>
      <ul
        style={{
          height: `${data.length * itemSize}px`,
          position: "relative",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        {builder()}
      </ul>
    </div>
  );
};
