import authServices from "./authServices";
import TokenServices from "./tokenServices";
import ProfileServices from "./profileServices";
import RecordsServices from "./recordsServices";

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
      services = { ...services,
        "auth": new authServices()

      };
      return;

    case "token":
      services = { ...services,
        "token": new TokenServices()
      };
      return;

    case "profile":
      services = { ...services,
        "profile": new ProfileServices()
      };
      return;

    case "records":
      {
        services = { ...services,
          "records": new RecordsServices()
        }
      }
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
