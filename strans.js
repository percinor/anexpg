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
                para.pa02 = 'select * from comer dsec ';
                return para;
                break;
            case 'i01':
                para.pa02 = 'select count(co001) as counter from comer ';
                return para;
                break;
            case 'i02':
                para.pa02 = ' insert into  comer (co001,co002,co003) values (';
                para.pa02 = para.pa02 + this.tranjson(para.pa03) + '  returning co001,co002,co003';
                return para;
                break;
            case 'i03':
                para.pa02 = ' select max(co001)+1 as maxer from comer  ';
                return para;
            case 'i04':
                para.pa02 = ' insert into  comer (co001,co002,co003) values (';
                para.pa02 = para.pa02 + this.tranjson(para.pa03) + '  returning co001,co002,co003';
                return para;
                break;
            default:
                return para;
        }
    };
    strans.prototype.tranjson = function (para) {
        var last = Object.keys(para);
        var lastkey = last.length - 1;
        var staer = '';
        for (var i in para) {
            if (i === last[lastkey]) {
                staer += "'" + para[i] + "' )";
            }
            else {
                staer += "'" + para[i] + "',";
            }
        }
        //console.log(staer);
        return staer;
    };
    return strans;
}());
exports.strans = strans;
