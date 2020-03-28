import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("games");
//.csv file extensions is automactially added during the constructor process
// //the source file MUST be from root

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log("man united has won " + manUnitedWins + " matches");
