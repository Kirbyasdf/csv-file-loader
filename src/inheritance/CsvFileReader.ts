import fs from "fs";

export abstract class CsvFileReader<T> {
  //treat generatics like args
  //abstract implies it is meant for its child classes

  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(`./${this.filename}.csv`, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow); // pass by reference
  }
}
