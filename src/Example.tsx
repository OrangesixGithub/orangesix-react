import React from "react";
import { POST } from "./utils/request";
import { GET_CEP } from "./utils/helper";

const body = {
    title: "foo",
    body: "bar",
    userId: 1,
};

export function Example() {
    POST<typeof body>("", body, { url: "https://jsonplaceholder.typicode.com/posts/" })
        .then(response => console.log(response));
    GET_CEP("37048060")
        .then(value => console.log(value));

    return (
        <div></div>
    );
}