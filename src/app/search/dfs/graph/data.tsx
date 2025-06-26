import { type TreeNode } from "./page";

export const data: TreeNode = {
  name: "A",
  children: [
    {
      name: "B",
      children: [
        {
          name: "D",
          children: [
            {
              name: "H",
              children: [],
            },
            {
              name: "I",
              children: [],
            },
          ],
        },
        {
          name: "E",
          children: [
            {
              name: "J",
              children: [],
            },
            {
              name: "K",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "C",
      children: [
        {
          name: "F",
          children: [
            {
              name: "L",
              children: [],
            },
            {
              name: "M",
              children: [],
            },
          ],
        },
        {
          name: "G",
          children: [
            {
              name: "N",
              children: [],
            },
            {
              name: "O",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
