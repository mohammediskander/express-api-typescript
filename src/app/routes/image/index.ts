import { RouteInterface } from "../../../@utils/routes";
import post from "./post";
import get from "./get";
import gets from "./gets";

const routes: RouteInterface[] = [
  {
    path: "/image/upload.aspx",
    enabled: true,
    access: "public",
    description: "Upload image",
    function: post,
    method: "post",
  },
  {
    path: "/image/all.aspx",
    enabled: true,
    access: "public",
    description: "get all photos",
    function: gets,
    method: "get",
  },
  {
    path: "/image/:_id",
    enabled: true,
    access: "public",
    description: "Upload image",
    function: get,
    method: "get",
  },
];

export default routes;
