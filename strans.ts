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
            default:
                return para;
        }
    }
}
