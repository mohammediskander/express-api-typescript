import { RouteInterface } from "../../../@utils/routes";
import gets from "./gets";
import post from "./post";
import update from "./update";
import get from "./get";
import _delete from "./delete";

const routes: RouteInterface[] = [
  {
    path: "/stream/all",
    enabled: true,
    access: "public",
    description: "get streams",
    function: gets,
    method: "get",
  },
  {
    path: "/stream/new",
    enabled: true,
    access: "public",
    description: "create new stream",
    function: post,
    method: "post",
  },
  {
    path: "/stream/:_id",
    enabled: true,
    access: "public",
    description: "update stream",
    function: update,
    method: "patch",
  },
  {
    path: "/stream/:_id",
    enabled: true,
    access: "public",
    description: "get stream",
    function: get,
    method: "get",
  },
  {
    path: "/stream/:_id",
    enabled: true,
    access: "public",
    description: "delete stream",
    function: _delete,
    method: "delete",
  },
];

export default routes;
