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
      {
        hash: "about",
        component: "about-page",
      },
      {
        hash: "services",
        component: "service-page",
      },
      {
        hash: "contact",
        component: "contact-page",
      },
    ],
  },
];
