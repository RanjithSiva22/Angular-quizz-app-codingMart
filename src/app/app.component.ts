import { Component } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "local-storage-app";
  isSubmitted = false;
  questionList = [
    {
      question: "Question 1",
      options: ["option1", "option2", "option3", "option4"],
      answer: ""
    },
    {
      question: "Question 2",
      options: ["option1", "option2", "option3", "option4"],
      answer: ""
    },
    {
      question: "Question 3",
      options: ["option1", "option2", "option3", "option4"],
      answer: ""
    },
    {
      question: "Question 4",
      options: ["option1", "option2", "option3", "option4"],
      answer: ""
    }
  ];
  constructor(private localStorageService: LocalStorageService) {}

  public questions: Array<any> = this.questionList;

  public status: Boolean = this.isSubmitted;

  public update() {
    this.localStorageService.setItem(
      `questions`,
      JSON.stringify(this.questionList)
    );
    this.status = true;
  }

  public onItemChange(item: string, index: any) {
    let updatedList = this.questionList;

    updatedList[index].answer = item;

    this.questionList = updatedList;
  }
}
