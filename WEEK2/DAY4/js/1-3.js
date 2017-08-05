Object.prototype.x = 100;
function Fn() {
    this.x = 10;
    this.y = 20;
    this.minus = function () {
        console.log(this.x - this.y);
    }
}
Fn.prototype.y = 200;
Fn.prototype.sum = function () {
    console.log(this.x + this.y);
};
var f = new Fn;
var f2 = new Fn;