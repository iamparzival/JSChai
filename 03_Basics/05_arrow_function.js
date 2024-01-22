//Arrow Functions
//This Keyword -- tell us about current context(current key value pairs)

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`); //to access username, we use this keyword i.e to access variables of current context we use this keyword
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();
// console.log(this); //{} empty object because there is no context in global. In node env., we get {} Empty Object in return
//+++++++++++++ Note ++++++++++++++++
//If we do console.log(this) in browser env., we get window{} object in return. In browser we have global object window{} object.

/*
function chai(){
    let username = "hitesh"
    console.log(this.username); //undefined //So we can't access username using this as we do in object topic
    console.log(this); //here we get global object  in return with some methods we can use
}
chai()
*/
