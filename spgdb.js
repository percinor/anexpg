"use strict";
exports.__esModule = true;
exports.spgdb = void 0;
var pg = require("pg");
var strans = require("./strans");
var spgdb = /** @class */ (function () {
    function spgdb() {
        this.config = {
            host: '198.52.117.196',
            user: "postgres",
            database: "angulardb",
            password: "post999999",
            port: 5432,
            max: 100,
            idleTimeoutMillis: 3000
        };
        this.pool = new pg.Pool(this.config);
        this.trans = new strans.strans;
    }
    spgdb.prototype.sqlexe = function (para, res) {
        var _this = this;
        para = this.trans.transql(para);
        this.pool
            .query(para.pa02)
            .then(function (result) {
            return _this.getval(para, result.rows, res);
        }
        //res.json(result.rows)
        )["catch"](function (e) { return console.error(e.stack); });
        // this.pool.end(); 
    };
    spgdb.prototype.getval = function (para, rows, res) {
        switch (para.pa01) {
            case 's01':
                if (rows[0].counter > 0) {
                    para.pa01 = 's02';
                    this.sqlexe(para, res);
                }
                else {
                    res.json(rows);
                }
                break;
            case 'i01':
                if (rows[0].counter == 0) {
                    para.pa01 = 'i02';
                    para.pa03.co001 = 10;
                    para = this.trans.transql(para);
                    this.sqlexe(para, res);
                }
                else {
                    para.pa01 = 'i03';
                    para = this.trans.transql(para);
                    this.sqlexe(para, res);
                }
                break;
            case 'i03':
                para.pa01 = 'i04';
                para.pa03.co001 = rows[0].maxer;
                para = this.trans.transql(para);
                this.sqlexe(para, res);
                break;
            default:
                res.json(rows);
        }
    };
    return spgdb;
}());
exports.spgdb = spgdb;
