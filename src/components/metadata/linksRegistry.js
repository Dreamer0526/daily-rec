export const linksRegistry = [{
    type: "register",
    path: "/register",
    label: "Sign Up"
  },
  {
    type: "login",
    path: "/login",
    label: "Sign In"
  }
];

export function findLinkConfig(type) {
  return linksRegistry.find(config => config.type === type) || {};
}
