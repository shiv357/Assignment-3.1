/**
 * @class Greeter [This class handles the greeting message]
 */
class Greeter {

    message: string;

    /**
     * [constructor: This function sets the instace variable 'message']
     * @param {string} message [This is the message used for greeting the user]
     * no return value
     */
    constructor ( message: string ) {

        this.message = message;

    }

    /**
     * [greet: This function returns the greeting message]
     * no parameters
     * @return {string} [The instance variable 'message' is returned]
     */
    greet(): string {

        return this.message;

    }

}

// Creation of a new Greeter object
let greeter = new Greeter("Greetings. Welcome to the website!");

// Getting the greeting message and displaying it
document.getElementById("demo").innerHTML = greeter.greet();
