export type dataType = {
    date : Date ,
    subject : string ,
    amount : number ,
    type : string ,
    typeOfType : string ,
    previousMonthAmount : number , 
    profit : number , 
    officeIncome : number ,
    barrowedAmount : number ,
    collectedFromHelp  :number ,
    officeExpence : number ,
    personalExpence  : number ,
    returnBarrowed : number ,
    helpAmount : number ,
    totalExpence : number ,
    helpingAmount : number ,
    collectedAmount : number ,
    balanceWantToCollect : number ,
    investment : number ,
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
        returnBarrowed: number  ,//// S
        helpAmount: number  ,///// D
        investment : number ,
        total: number  ,
    } 
     
    secondObject : {
        officeIncome: number  ,
        barrowedAmount: number  ,///// A
        collectedFromHelp: number  ,
        total: number  ,
    } ,
    
    thirdObject : {
        helpAmount: number  ,//// D
        collectedAmount: number  ,
        balanceWantToCollect: number  ,    
    }
    
    fourthObject : {
        barrowedAmount: number  , ///// A
        returnBarrowed: number  , //// S
        wantToPay: number  ,
    }   
}

export type studentForm = {
    joiningDate : Date ,
    name : string , 
    course : string ,
    batchNumber : string ,
    referenceNumber : string ,
    phoneNumber : number ,
    email : string ,
    isGotCertification : string
}