import * as express from 'express';
import *  as pg from 'pg';
import * as strans from './strans';

export class spgdb {
    config = {
        host: '127.0.0.1',
        user: "postgres",
        database: "angulardb",
        password: "0000000",
        port: 5432,
        max: 100,
        idleTimeoutMillis: 3000
    };
    pool = new pg.Pool(this.config);
    trans = new strans.strans;
    sqlexe(para: any, res: express.Response) {
        para = this.trans.transql(para);
        this.pool
            .query(para.pa02)
            .then((result: { rows: any[]; }) =>
                this.getval(para, result.rows, res)
                //res.json(result.rows)
            )
            .catch((e: { stack: any; }) => console.error(e.stack)
            );
        // this.pool.end(); 
    }
    getval(para: any, rows: any, res: express.Response) {
        switch (para.pa01) {
            case 's01':
                if (rows[0].counter > 0) {
                    para.pa01 = 's02';
                    this.sqlexe(para, res);
                } else {
                    res.json(rows);
                }
                break;
            case 'i01':
                if (rows[0].counter == 0) {
                    para.pa01 = 'i02';
                    para.pa03.co001 = 10;
                    para = this.trans.transql(para);
                    this.sqlexe(para, res);
                } else {
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
    }
}

