var path = require("path");
var moment = require("moment");

export const addFileDocumentation = (fileName: string, date: Date = new Date(), author: string = "Michael Wong") => {
    return `
/*******************************************************************************
 * NAME                     : ${path.basename(fileName)}
 * 
 * VERSION                  : 0.1.0
 * 
 * DATE                     : ${moment(date).format("DD-MMM-YYYY")}
 * 
 * DESCRIPTION              : C# file that defines endpoints for the actions of
 *                            the AdvertisementRegister Controller
 * 
 * MODIFICATION HISTORY
 * Name                       Date         Description
 * =========================  ============ ====================================
 * ${author.padEnd(25)}  ${moment(date).format("DD-MMM-YYYY")}  Initialial Version
 ******************************************************************************/


`
}

export const addFuncDocumentation = (numOfSpace: number, line: string) => {

    return `
${"".padEnd(numOfSpace)}/**
${"".padEnd(numOfSpace)} * @param {string[]} Args list.
${"".padEnd(numOfSpace)} * @param {function(Error=,Object=)} Callback (when writting is finished)
${"".padEnd(numOfSpace)} */
`;
}