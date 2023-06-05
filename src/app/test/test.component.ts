import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor( private Appservice: AppService, private router:Router) { }

  ngOnInit(): void {
  }

  correct:number=0;
  incorrect:number=0;
  attempted: number=0;
  bgColor: string= 'none';

  optionClicked(option:any,$event:any,question:any){
    //console.log(option);
    if(!question.attempted){
        if(option.correct){
            this.correct+=1;
            $event.target.style.backgroundColor = 'rgb(0,255,0,0.4)';
        }else{
            this.incorrect+=1;
            $event.target.style.backgroundColor = 'rgb(255,0,0,0.4)';
        }
        this.attempted+=1;
        question.attempted = true;
    }
  }

  submitQuiz(){
    let data ={
        userEmail : this.Appservice.userData.email,
        result :{
                attempted : this.attempted,
                correct : this.correct,
                incorrect : this.incorrect,
            }
    }
    this.Appservice.submitQuizResponse(data).subscribe((Response)=>{
        if(Response['success']){
            this.router.navigate(['/']);
        }else{
            setTimeout(this.submitQuiz,2000);
        }
    })
  }
  // ==============* QUESTIONS * START ===========================
    literacyQuestions = [{
            questionText: "What is another word for amazed?",
            options: [{
                    text: "Surprised",
                    correct: true
                },
                {
                    text: "Mesmerised"
                },
                {
                    text: "shocked"
                },
                {
                    text: "confused"
                }
            ],
            attempted:false,
        },
        {
          questionText: "What is the plural form a knife",
            options: [{
                    text: "Nives"
                },
                {
                    text: "Nifes"
                },
                {
                    text: "Knifes"
                },
                {
                    text: "Knives",
                    correct: true
                }
            ],
            attempted:false,
        },
        {
            "questionText": "What is the verb in the following sentence. 'I set the glass on the table.'",
            options: [{
                    text: "Glass"   
                },
                {
                    text: "Set",
                    correct: true
                },
                {
                    text: "On"
                },
                {
                    text: "Table"
                }
            ],
            attempted:false,
        },
        {
            "questionText": "______ are ten students in my class.",
            options: [{
                    text: "Their"
                },
                {
                    text: "There",
                    correct: true
                },
                {
                    text: "They're"
                },
                {
                    text: "These"
                }
            ],
            attempted:false,
        },
        {
            "questionText": "Here ______ Sarah. Let's tell her all the news.",
            options: [{
                    text: "Comes",
                    correct: true
                },
                {
                    text: "Coming"
                },
                {
                    text: "Will come"
                },
                {
                    text: "Is coming"
                }
            ],
            attempted:false,
        },
        {
            "questionText": "Which words shows an action in the sentence below? Ben dived down on stretched wings.",
            options: [{
                    text: "Ben"
                },
                {
                    text: "Down"
                },
                {
                    text: "Wings"
                },
                {
                    text: "Dived",
                    correct: true
                }
            ],
            attempted:false,
        },
        {
            "questionText": "Mark the correct proverb:",
            options: [{
                    text: "Right is might."
                },
                {
                    text: "Might is quiet."
                    
                },
                {
                    text: "Might is right.",
                    correct: true
                },
                {
                    text: "Which is right that is might."
                }
            ],
            attempted:false,
        },
        {
            "questionText": "These flowers look so lovely, __________?",
            options: [{
                    text: "don't they",
                    correct: true
                },
                {
                    text: "do they"
                },
                {
                    text: "aren't they"
                },
                {
                    text: "did they"
                }
            ],
            attempted:false,
        },
        {
            "questionText": "Arrange the letters of the word to form a meaningful sentence 'SINTA'",
            options: [{
                    text: "Saint",
                    correct: true
                },
                {
                    text: "Sinat"
                },
                {
                    text: "Siant"
                },
                {
                    text: "Tinas"
                }
            ],
            attempted:false,
        }
    ]
  // ==============* QUESTIONS * END ===========================
}
