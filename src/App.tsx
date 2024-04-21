import { getCleanTree } from "./utils";
import { VirtualList } from "./components";
import type { RenderItem } from "./components";

const listData = Array.from(Array(100), (_, i) => 1 + i);

const render: RenderItem<number> = (item, index) => {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      {`Элемент массива - ${item} с индексом ${index}`}
    </div>
  );
};

function App() {
  return (
    <main
      style={{
        display: "grid",
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <h1>Задание 1</h1>
      <button
        onClick={() => {
          const res = getCleanTree("tree_3");
          console.log(res);
        }}
      >
        Рекурсивный поиск
      </button>

      <h1>Задание 2</h1>
      <VirtualList data={listData} height={400} itemSize={100} width={600} renderItem={render} />
    </main>
  );
}

export default App;
