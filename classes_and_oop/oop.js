const user = {
    username: "Inder",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Inder", 12, true)
const userTwo = new User("Sachin", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);

/*

    ----------------------NOTES-----------------------

    STEP 1: Crate a empty object
    STEP 2: Constructor function is called by "new" KeyWord
    STEP 3: by "this" keyWord inject the argument in object
    STEP 4: give it all argument in function
*/