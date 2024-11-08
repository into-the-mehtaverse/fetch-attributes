/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

async function postingProduct () {
    fetch ("/products", {
        method: "POST",
        headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    })
}

postingProduct();



/* ============================== Phase 2 ============================== */

// Your code here



/* ============================== Phase 3 ============================== */

async function ayo () {
    await fetch ("/products", {
        method: "POST",
        headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
                    name: "Caribbean Delight Coffee",
                    description: "Made by Manatee Coffee",
                    price: 11.99,
                    categories: "grocery"
})
    })
    .then(response => {
        console.log(response.status);
        console.log(response.headers.get("Content-Type"));
        console.log(response.url);
        console.log(response.redirected);
    })
}

ayo();
