export class Quest {
  Qnum: number;
  Quest: string;
  Option1: string;
  Option2: string;
  Option3: string;
  Option4: string;
  Answer: string;
  Hint: string;
  Explanation: string;

  constructor(
    Qnum: number,
    Quest: string,
    Option1: string,
    Option2: string,
    Option3: string,
    Option4: string,
    Answer: string,
    Hint: string,
    Explanation: string
  ) {
    this.Qnum = Qnum;
    this.Quest = Quest;
    this.Option1 = Option1;
    this.Option2 = Option2;
    this.Option3 = Option3;
    this.Option4 = Option4;
    this.Answer = Answer;
    this.Hint = Hint;
    this.Explanation = Explanation;
  }
}
