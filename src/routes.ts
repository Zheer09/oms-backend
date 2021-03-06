

export const Routes = [{
    method: "get",
    route: "/users",

    action: "all"
}, {
    method: "get",
    route: "/users/:id",

    action: "one"
}, {
    method: "post",
    route: "/users",

    action: "save"
}, {
    method: "delete",
    route: "/users/:id",

    action: "remove"
}]