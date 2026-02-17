var User = /** @class */ (function () {
    function User(age) {
        this._age = age;
    }
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                console.log("Age can't be negative");
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User(25);
console.log(user.age); // Output: 25
// Using the setter with valid data
user.age = 30;
// Using the setter with invalid data
user.age = -5; // Output: "Age can't be negative"
