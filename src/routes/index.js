export const routes = [
  {
    hash: "#/*",
    component: "app-container",
    cache: true,
    children: [
      {
        hash: "home",
        component: "home-page",
      },
    ],
  },
];
