let sheetId = "1jCnDJXB6JaES-WW6D8KtzzWkjZiYzxnHXdEsEra6x3g";
const sheet = SpreadsheetApp.openById(sheetId);

function doGet( request ) 
{
    const template = HtmlService.createTemplateFromFile('dist/ui/index')
        .evaluate()
        .setTitle('Monthly Expense')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0");
    return template;
}

function getSheetRows(sheetName) 
{
    let sheetData = sheet.getSheetByName(sheetName).getDataRange().getDisplayValues();
    let headers = sheetData[0];
    let data = sheetData.slice(1).reduce(function (acc, item, i) 
    {
        const info = item.reduce((obj, value, index) => 
        {
            obj[headers[index].replace(/\s/g, '')] = value;
            return obj;
        }, {});
        info['row'] = i + 2;
        acc.push(info);
        return acc;
    }, []);
    return data;
}

function getUser(userEmail, userPassword) {
    let links = getSheetRows('Users');

    if (links[0].Email == userEmail && links[0].Password == userPassword) {
        sheet.getSheetByName('Users').getRange(2, 3).setValue(new Date());
        return true;
    }
    return false;
}

function getData() {
    let data = [];
    let sheetNames = ['Data', 'Help', 'Barrowed'];
    sheetNames.forEach((element) => {
        let value = getLastRowWithHeaders(element)
        data.push(value);
    });

    return JSON.stringify(data);;
}

function getLastRowWithHeaders(sheetName) {
    let targetSheet = sheet.getSheetByName(sheetName);
    let headers = targetSheet.getRange(1, 1, 1, targetSheet.getLastColumn()).getValues()[0];
    let lastRowNum = targetSheet.getLastRow();
    let lastRowData = targetSheet.getRange(lastRowNum, 1, 1, targetSheet.getLastColumn()).getValues()[0];
    let rowDataWithHeaders = {};
    headers.forEach((header, index) => {
        rowDataWithHeaders[header] = lastRowData[index] || null;
    });
    return rowDataWithHeaders;
}