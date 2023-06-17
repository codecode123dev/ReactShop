import react from "react";

const routesConfig = [
  {
    path: "/test/",
    component: () => "Users (/users)",
    exact: true
  },
  {
    path: "/users/john",
    component: () => "John (/users/john)"
  },
  {
    path: "/users/mike",
    component: () => "Mike (/users/Mike)"
  }
];

export default routesConfig;
