import { environment as base } from "./environment";
import { extend } from "lodash";

export var environment = extend(base, {
  production: true,
  apiEndpoint: "http://127.0.0.1:6666/api/",
  // appTitle: "Empowerment Material",
});
