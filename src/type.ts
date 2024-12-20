export type dataType = {
    date : Date ,
    subject : string ,
    amount : number ,
    type : string ,
    typeOfType : string ,
    previousMonthAmount : number , 
    profit : number , 
    officeIncome : number ,
    barrowedAmount_1 : number ,
    collectedFromHelp  :number ,
    officeExpence : number ,
    personalExpence  : number ,
    returnBarrowed : number ,
    helpAmount : number ,
    totalExpence : number ,
    helpingAmount : number ,
    collectedAmount : number ,
    balanceWantToCollect : number ,
    barrowedAmount_2  :number ,
    returnedAmount : number ,
    wantToPay : number ,
}

export type homeFormValues = {
    date : Date ,
    subject : string ,
    amount : number ,
    type : string ,
    typeOfType : string
}

export type tableFormValue = {
    firstObject :  {
        officeExpence: number  ,
        personalExpence: number  ,
        returnBarrowed: number  ,
        helpAmount: number  ,
        total_1: number  ,
    } 
     
    secondObject : {
        officeIncome: number  ,
        barrowedAmount_1: number  ,
        collectedFromHelp: number  ,
        total_2: number  ,
    } ,
    
    thirdObject : {
        helpingAmount: number  ,
        collectedAmount: number  ,
        balanceWantToCollect: number  ,    
    }
    
    fourthObject : {
        barrowedAmount_2: number  ,
        returnedAmount: number  ,
        wantToPay: number  ,
    }   
}