const dotenv = require("dotenv");
const fs = require("fs");
const csv = require("csv-parser");
dotenv.config();

let result = [];

let final = [];

fs.createReadStream("./source.csv")
    .pipe(csv())
    .on("data", (data) => {
        result.push(data);
    })
    .on("end", () => {
        for (var index in result) {
            let vc = result[index];

            let row = {};

            // Investor Name
            row.name = vc["Investor Name"];

            // description
            row.description = vc["Fund Description"];

            // AUM
            row.aum = 0;

            // investment mandate
            let mandate = {};

            mandate.fundingStages = vc["Fund Stage"];
            mandate.targetRegion = vc[""];

            break;
        }
    });

// var Airtable = require("airtable");
// Airtable.configure({
//     endpointUrl: "https://api.airtable.com",
//     apiKey: process.env.AIRTABLE_API_KEY,
// });
// var base = Airtable.base("appxVDi54fHsOkrp3");
// s;
// base("Ramp's VC & Angel Email Database")
//     .select({
//         // Selecting the first 3 records in Grid view:
//         maxRecords: 300,
//         view: "Grid view",
//     })
//     .eachPage(
//         function page(records, fetchNextPage) {
//             // This function (`page`) will get called for each page of records.

//             records.forEach(function (record) {
//                 console.log("Retrieved", record.get("Investor Name"));
//             });

//             // To fetch the next page of records, call `fetchNextPage`.
//             // If there are more records, `page` will get called again.
//             // If there are no more records, `done` will get called.
//             fetchNextPage();
//         },
//         function done(err) {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//         }
//     );
