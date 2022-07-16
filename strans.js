"use strict";
exports.__esModule = true;
exports.strans = void 0;
var strans = /** @class */ (function () {
    function strans() {
    }
    strans.prototype.transql = function (para) {
        switch (para.pa01) {
            case 's01':
                para.pa02 = 'select count(co001) as counter from comer ';
                return para;
                break;
            case 's02':
                para.pa02 = 'select * from comer desc';
                return para;
                break;
            default:
                return para;
        }
    };
    return strans;
}());
exports.strans = strans;
