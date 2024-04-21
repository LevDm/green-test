type Age = number | "empty";
type Name = string | "empty";

type TreeNode = {
  name?: Name;
  age?: Age;
  [tree_i: string]: Readonly<TreeNode[] | undefined> | (Age | Name);
};

export const data: TreeNode = {
  tree: [
    {
      name: "name1",
      tree_1: [
        { name: "name2" },
        { name: "name3" },
        {
          name: "name4",
          tree_2: [
            { name: "name5" },
            { name: "name6" },
            {
              tree_3: [
                { name: undefined },
                { name: "name7", age: 20 },
                { name: "name8", age: 15 },
                { name: "name9", age: 31 },
                { name: "name10", age: 30 },
                { name: undefined, age: undefined },
                { name: "empty", age: "empty" },
              ],
            },
          ],
        },
        { name: "name11" },
      ],
    },
    {
      name: "name12",
      tree_4: [{ name: "name3" }],
    },
  ],
};

export const findTree = (treeName: string, tree: TreeNode | TreeNode[]): TreeNode[] | undefined => {
  if (Array.isArray(tree)) {
    for (const item of tree) {
      const result = findTree(treeName, item);
      if (result) return result;
    }
  } else if (typeof tree === "object") {
    for (const [key, value] of Object.entries(tree)) {
      if (typeof value === "object") {
        const node = value as unknown as TreeNode[];

        if (key === treeName) return node;

        const result = findTree(treeName, node);
        if (result) return result;
      }
    }
  }
  return;
};

type PickRequired<T, R extends keyof T> = T & Required<Pick<T, R>>;

export const getCleanTree = (treeName: string) => {
  const tree = findTree(treeName, data);

  const filtredTree = tree?.filter((node) => node.name !== undefined && node.name !== "empty") as
    | PickRequired<TreeNode, "name">[]
    | undefined;

  const sortedTree = filtredTree?.sort((a, b) =>
    b.name.localeCompare(a.name, "en", { numeric: true })
  );

  return sortedTree;
};
