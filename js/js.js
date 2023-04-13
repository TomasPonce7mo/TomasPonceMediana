function calculardoblemediana(c, n){
    let ns = n.split(" "), mac = 0, mec = 0, med = 0;
    for(let i=0;i<ns.length;i++){
        ns[i] = parseInt(ns[i]);
    }
    for(let i=0;i<ns.length;i++){
        for(let ic=0;ic<ns.length;ic++){
            if(ns[ic]>ns[i]){
                mac += 1;
            }
            if(ns[ic]<ns[i]){
                mec += 1;
            }
        }
    if(c % 2 == 0){
        if(mac == mec + 1){
            med = ns[i] + ns[i+1];
            i = ns.length;
        }
    }  
    else {
        if(mac == mec && mac != 0){
            med = ns[i] * 2;
            i = ns.length;
        }
    }

    mac = 0;
    mec = 0;
}
    return med;
}