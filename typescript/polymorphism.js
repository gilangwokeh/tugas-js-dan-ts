var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zoom = /** @class */ (function () {
    function Zoom(animal, bluebird) {
        this.animal = animal;
        this.bluebird = bluebird;
    }
    Zoom.prototype.printZoom = function () {
        return this.animal, this.bluebird;
    };
    return Zoom;
}());
var Reward = /** @class */ (function (_super) {
    __extends(Reward, _super);
    function Reward(animal, bluebird, sound) {
        var _this = _super.call(this, animal, bluebird) || this;
        _this.sound = sound;
        return _this;
    }
    Reward.prototype.printZoom = function () {
        return "".concat(this.animal, ",").concat(this.bluebird, " have ").concat(this.sound);
    };
    return Reward;
}(Zoom));
var maroon = new Zoom("Zebra", "scorpion");
var boy = new Reward("elepant", "crocodile", "tiger");
console.log(maroon);
console.log(maroon.bluebird);
console.log(boy.sound);
console.log(maroon.animal);
