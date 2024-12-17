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

function getUser()
{
    let links = getSheetRows('Users');
    return links;
}

function validUser(email , pass) {

}