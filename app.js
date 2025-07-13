const questions =[{
    'que':'which of the following is a markup language?',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'php',
    'correct':'a'
},
{
  'que':'what year was javascript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of above',
    'correct':'b'  
},
{
    'que':'what dose css stands for?',
    'a':'hypertext markup language',
    'b':'cascading style sheet',
    'c':'javascript',
    'd':'hyper power',
    'correct':'b',

}
]
let index =0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion = () => {
    const date = questions[index]
    console.log(data)
    quesbox.innertext = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innertext = data.a;
    optionInputs[1].nextElementSibling.innertext = data.b;
    optionInputs[2].nextElementSibling.innertext = data.c;
    optionInputs[3].nextElementSibling.innertext = data.d;
}

//inital call
loadquestion();
