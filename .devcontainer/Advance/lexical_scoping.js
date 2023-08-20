function outer(){
    let username="jomin"
    // console.log(secret); //you cant even access secret externally from internal functon 
    function inner() {
        let secret="abc123"
        console.log(username); //you can access the variables from outer function
        function moreinnter() {
            console.log(username);
        }
        moreinnter()
    }
    function inner2() {
        // console.log(secret); //you cant access secret variable
        console.log(username);
    }
    inner()
    inner2()

}

outer()