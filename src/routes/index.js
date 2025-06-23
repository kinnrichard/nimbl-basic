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
    children: [
      {
        hash: "about",
        component: "about-page",
      },
    ],
    children: [
      {
        hash: "services",
        component: "service-page",
      },
    ],
    children: [
      {
        hash: "contact",
        component: "contact-page",
      },
    ]
  },
];
