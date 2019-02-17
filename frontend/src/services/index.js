import authServices from "./auth/authServices";
import TokenServices from "./token/tokenServices";
import ProfileServices from "./profile/profileServices";
import RecordsServices from "./records/recordsServices";

let services = {
  "auth": null,
  "token": null,
  "profile": null,
  "records": null
}

function findService(service) {
  if (services[service]) return

  switch (service) {
    case "auth":
      services = {
        ...services,
        "auth": new authServices()

      };
      return;

    case "token":
      services = {
        ...services,
        "token": new TokenServices()
      };
      return;

    case "profile":
      services = {
        ...services,
        "profile": new ProfileServices()
      };
      return;

    case "records":
      services = {
        ...services,
        "records": new RecordsServices()
      }
      break;

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
