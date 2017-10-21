/**
 * @class Greeter [This class handles the greeting message]
 */
var Greeter = /** @class */ (function () {
    /**
     * [constructor: This function sets the instace variable 'message']
     * @param {string} message [This is the message used for greeting the user]
     * no return value
     */
    function Greeter(message) {
        this.message = message;
    }
    /**
     * [greet: This function returns the greeting message]
     * no parameters
     * @return {string} [The instance variable 'message' is returned]
     */
    Greeter.prototype.greet = function () {
        return this.message;
    };
    return Greeter;
}());
// Creation of a new Greeter object
var greeter = new Greeter("Greetings. Welcome to the website!");
// Getting the greeting message and displaying it
document.getElementById("demo").innerHTML = greeter.greet();
