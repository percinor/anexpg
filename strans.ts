export class strans {
    transql(para: any) {
        switch (para.pa01) {
            case 's01':
                para.pa02 = 'select count(co001) as counter from comer ';
                return para;
                break;
            case 's02':
                para.pa02 = 'select * from comer desc';
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
                break
            case 'i03':
                para.pa02 = ' select max(co001)+1 as maxer from comer  ';
                return para
            case 'i04':
                para.pa02 = ' insert into  comer (co001,co002,co003) values (';
                para.pa02 = para.pa02 + this.tranjson(para.pa03) + '  returning co001,co002,co003';
                return para;
                break
            default:
                return para;
        }
    }
    tranjson(para: any) {
        let last = Object.keys(para);
        let lastkey = last.length - 1;
        let staer = '';
        for (let i in para) {
            if (i === last[lastkey]) {
                staer += "'" + para[i] + "' )";
            } else {
                staer += "'" + para[i] + "',";
            }
        }
        //console.log(staer);
        return staer;
    }
}
