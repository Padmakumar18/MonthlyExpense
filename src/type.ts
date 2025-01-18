export type dataType = {
    date: Date;
    subject: string;
    amount: number;
    income_or_expense: string;
    type_two: string;
    office_expense: number;
    personal_expense: number;
    return_barrowed: number;
    help_amount: number;
    total: number;
    office_income: number;
    barrowed_amount: number;
    collected_from_help: number;
    profit: number;
    total_expense: number;
    balance: number;
};

export type tableFormValue = {
    firstObject :  {
        officeExpence: number  ,
        personalExpence: number  ,
        investment : number ,
        total: number  ,
    } 
     
    secondObject : {
        officeIncome: number  ,
        collectedFromHelp: number  ,
        total: number  ,
    } ,
    
    thirdObject : {
        helpAmount: number  ,
        collectedAmount: number  ,
        balanceWantToCollect: number  ,    
    }
    
    fourthObject : {
        barrowedAmount: number  ,
        returnBarrowed: number  ,
        wantToPay: number  ,
    }   
}

export type homeFormValues = {
    date : Date ,
    subject : string ,
    amount : number ,
    type : string ,
    typeOfType : string
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