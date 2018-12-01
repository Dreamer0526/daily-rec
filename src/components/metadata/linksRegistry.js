export const linksRegistry = [{
    name: "register",
    path: "/register",
    label: "Sign Up"
  },
  {
    name: "login",
    path: "/login",
    label: "Sign In"
  }
];

export function findLinkConfig(name) {
  return linksRegistry.find(config => config.name === name) || {};
}
