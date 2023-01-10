export const files = [
  {
    id: "10000",
    isDir: false,
    name: "package.json",
  },
  {
    id: "10001",
    isDir: false,
    name: "README.md",
  },
  {
    id: "10002",
    isDir: true,
    name: "src",
    files: [
      {
        id: "11000",
        isDir: false,
        name: "index.js",
      },
      {
        id: "11001",
        isDir: false,
        name: "header.js",
      },
      {
        id: "11002",
        isDir: false,
        name: "footer.js",
      },
      {
        id: "11003",
        isDir: false,
        name: "content.js",
      },
      {
        id: "11101",
        isDir: true,
        name: "assets",
        files: [
          {
            id: "11100",
            isDir: true,
            name: "images",
            files: [
              {
                id: "11100",
                isDir: true,
                name: "home",
              },
              {
                id: "11101",
                isDir: false,
                name: "user.webp",
              },
            ],
          },
          {
            id: "11101",
            isDir: false,
            name: "banner.svg",
          },
        ],
      },
    ],
  },
];
