const dotenv = require("dotenv");
dotenv.config();

var Airtable = require("airtable");
Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY,
});
var base = Airtable.base("appxVDi54fHsOkrp3");

base("Ramp's VC & Angel Email Database")
    .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 300,
        view: "Grid view",
    })
    .eachPage(
        function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
                console.log("Retrieved", record.get("Investor Name"));
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        },
        function done(err) {
            if (err) {
                console.error(err);
                return;
            }
        }
    );
