export const files = [
  {
    id: "10000",
    isDir: false,
    name: "layer1a.js",
  },
  {
    id: "10001",
    isDir: false,
    name: "layer1b.css",
  },
  {
    id: "10002",
    isDir: true,
    name: "layer1b.ts",
    files: [
      {
        id: "11000",
        isDir: false,
        name: "layer2a.js",
      },
      {
        id: "11001",
        isDir: false,
        name: "layer2b.css",
      },
      {
        id: "11101",
        isDir: true,
        name: "layer1b.css",
        files: [
          {
            id: "11100",
            isDir: true,
            name: "layer2a.js",
            files: [
              {
                id: "11100",
                isDir: true,
                name: "layer3a.js",
              },
              {
                id: "11101",
                isDir: false,
                name: "layer3b.css",
              },
            ],
          },
          {
            id: "11101",
            isDir: false,
            name: "layer2b.css",
          },
        ],
      },
    ],
  },
];
