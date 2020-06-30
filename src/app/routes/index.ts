import test from "./test";
import { RouteInterface } from "../../@utils/routes";

const routes: RouteInterface[] = [
  {
    access: "public",
    description: "TESTING",
    enabled: true,
    function: test,
    method: "post",
    path: "/request",
  },
];

export default routes;
