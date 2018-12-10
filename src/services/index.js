import authServices from "./authServices";
import TokenServices from "./tokenServices";


let services = {
  "auth": null,
  "token": null
}

function findService(service) {
  if (services[service]) return

  switch (service) {
    case "auth":
      services = { ...services,
        "auth": new authServices()

      };
      return;

    case "token":
      services = { ...services,
        "token": new TokenServices()
      };
      return;

    default:
      return;
  }
}

const withServices = (...params) => {
  let result = {};

  params.forEach(param => {
    findService(param);
    result[param] = services[param]
  });

  return result
}

export default withServices;