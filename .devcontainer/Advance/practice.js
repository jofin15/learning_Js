fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json()

}).then(function (data) {
   console.log(data);
})
.catch(function (error) {
    console.log(error);
})

async function callingData() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

callingData()