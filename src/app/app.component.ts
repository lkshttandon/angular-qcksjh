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
  Qnum: number = 0;
  updateBtn: boolean = true;
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
  Edit(Q: number): any {
    console.log("Edit called for", Q);
    var x;
    for (x in this.Qtp) {
      console.log(x);
      if (this.Qtp[x].Qnum == Q) {
        console.log("Satisfied", Q);
        this.Qnum = this.Qtp[x].Qnum;
        this.Question = this.Qtp[x].Quest;
        this.Opt1 = this.Qtp[x].Option1;
        this.Opt2 = this.Qtp[x].Option2;
        this.Opt3 = this.Qtp[x].Option3;
        this.Opt4 = this.Qtp[x].Option4;
        this.Answer = this.Qtp[x].Answer;
        this.Hint = this.Qtp[x].Hint;
        this.Exp = this.Qtp[x].Explanation;
      }
    }
    this.updateBtn = false;
  }
  SubmitQ(): void {
    ++this.Qnum;
    this.Qt = new Quest(
      this.Qnum,
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
    console.log(this.Qtp);
    this.updateBtn = true;
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
  Update(Q: number): void {
    var x;
    for (x in this.Qtp) {
      if (this.Qtp[x].Qnum == Q) {
        this.Qtp[x].Qnum = this.Qnum;
        this.Qtp[x].Quest = this.Question;
        this.Qtp[x].Option1 = this.Opt1;
        this.Qtp[x].Option2 = this.Opt2;
        this.Qtp[x].Option3 = this.Opt3;
        this.Qtp[x].Option4 = this.Opt4;
        this.Qtp[x].Answer = this.Answer;
        this.Qtp[x].Hint = this.Hint;
        this.Qtp[x].Explanation = this.Exp;
      }
      this.updateBtn = true;
      this.reset();
    }
  }
}
