const url = "https://jsonplaceholder.typicode.com/users";
import fetch from "node-fetch";

async function getData() {
    let data = [];

    try {
        let rawData = await fetch(url);
        data = await rawData.json();   
    } catch (error) {
        console.log("error");
    }

    console.log(data);
}

getData();