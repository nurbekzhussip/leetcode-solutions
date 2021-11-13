//#226
//https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  if (!root) {
    return null;
  } else {
    invertTree(root.left);
    invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }

  return root;
};































// common

1. Questionnaire controller architecture

Create a Questionnaire UI controller.
validation should be on each step: 
- ‘text’ answer type - optional answer
- ‘multiChoice’ - 1 answer required
- ‘singleChoice’ - 1 answer required
send answers to BE after all steps are completed
after reload questionnaire starts from scratch



enum QuestionCategory {
covid = 1,
other = 2
}

type QuestionId = number;

interface QuestionAnswer {
id: string; 
text: string; 
nextQuestionId?: QuestionId;
}

type QuestionAnswerType = ‘text’ | ‘multiChoice’ | ‘singleChoice’;

interface Question {
	isFirst?: boolean;
id: QuestionId;
	text: string;
answearType: QuestionAnswerType;
category: QuestionCategory;
answers?: Array<QuestionAnswer>;
nextQuestionId?: QuestionId;
}

GET questions from BE: Array<Question>;

type AnswerValue = string; // id, free text 

POST:
Array<{ [questionId: string]: AnswerValue | Array<AnswerValue> }>

2. Dynamic layout architecture
https://www.ixbt.com/img/n1/news/2020/0/1/Facebook_tmavy%CC%81_rez%CC%8Cim_large.jpg

Changing layout structure dynamically (show, hide header, sidebar, change header buttons, background color) if plenty of pages (50+)

