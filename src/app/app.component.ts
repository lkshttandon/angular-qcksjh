import { Component, ElementRef, ViewChild } from "@angular/core";
import * as XLSX from "xlsx";
import { Quest } from "./Questonnaire";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "User";
  fileName = "ExcelSheet.xlsx";
  Qt: Quest;
  Qtp: Quest[] = [];
  Opt1: string;
  Question: string;
  Opt2: string;
  Opt3: string;
  Opt4: string;
  Answer: string;
  Hint: string;
  Exp: string;
  options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalseparator: ".",
    showLabels: false,
    headers: [
      "Question",
      "Option1",
      "Option2",
      "Option3",
      "Option4",
      "Answer",
      "Hint",
      "Explanation"
    ],
    showTitle: true,
    title: "Questionnnaire",
    useBom: false,
    removeNewLines: true,
    keys: [
      "Quest",
      "Option1",
      "Option2",
      "Option3",
      "Option4",
      "Answer",
      "Hint",
      "Explanation"
    ]
  };

  SubmitQ(): void {
    this.Qt = new Quest(
      this.Question,
      this.Opt1,
      this.Opt2,
      this.Opt3,
      this.Opt4,
      this.Answer,
      this.Hint,
      this.Exp
    );
    this.Qtp.push(this.Qt);
    this.reset();
  }
  reset(): void {
    this.Question = "";
    this.Opt1 = "";
    this.Opt2 = "";
    this.Opt3 = "";
    this.Opt4 = "";
    (this.Answer = ""), (this.Hint = ""), (this.Exp = "");
  }
  @ViewChild("table") table: ElementRef;

  ExportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */
    XLSX.writeFile(wb, "SheetJS.xlsx");
  }
}
