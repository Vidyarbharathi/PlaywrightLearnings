
import path from "path";
import fs from 'fs'
import { test } from "../fixture/mycustomFixture";
import { parse } from "csv-parse/sync";
import { expect } from "@playwright/test";

const loginData = parse(fs.readFileSync(path.join(__dirname, "../data/credentials.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

for (const data of loginData) {
test(`Login test Functionality ${data.testcaseId}`,async({loginPage,welcomePage,homePage,leadsPage})=>{
  await loginPage.navigate();
  await loginPage.enterCredentials(data.username,data.password);
  await loginPage.clickLogin();       
})

}