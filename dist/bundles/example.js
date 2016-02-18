(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var a_1 = require('./foo/a');
exports.a = a_1.GetA();
exports.a.do();



},{"./foo/a":2}],2:[function(require,module,exports){
var b_1 = require('./b');
function GetA() {
    return new AImpl();
}
exports.GetA = GetA;
class AImpl {
    do() {
        let b = b_1.GetBFor(5);
        if (b.getNum() == 10) {
            throw new Error('This is a bad thing!');
        }
    }
}



},{"./b":3}],3:[function(require,module,exports){
function GetBFor(num) {
    return BImpl.getInstance(num);
}
exports.GetBFor = GetBFor;
class BImpl {
    constructor(_b) {
        this._b = _b;
    }
    static getInstance(num) {
        return new BImpl(num);
    }
    getNum() {
        return this._b;
    }
}



},{}]},{},[1])


//# sourceMappingURL=example.js.map
