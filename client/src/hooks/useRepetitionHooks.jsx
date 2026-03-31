import { useEffect, useState } from "react";
// for getting multiple practice reps in

export async function getData(params) {
    const csrfToken = "get from cookies";

    const response = fetch('/', {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials:"include",

        body: JSON.stringify(params);
    })

    if (!response.ok){
        throw new Error("response not ok");
    }

    const res = response.json();
    return res;
}