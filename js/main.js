document.querySelector('button').addEventListener('click', event => {
  pFreire.pFreireDiz()
})


const pFreire = {
  dizeresFreire: ["Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda", "Um pensar certo sobre a realidade se faz do respeito à unidade entre prática e teoria", "Ensinar não é transferir conhecimento, mas criar as possibilidades para sua produção", "O ato de estudar é uma atitude em frente ao mundo", "Estudar não é um ato de consumir ideias, mas de criá-las e recriá-las", "O que se deve opor à prática não é a teoria, mas o blá-blá-blá ou o falso pensar", "Me situo entre os que não aceitam a separação impossível entre prática e teoria", "A educação se fará tão mais verdadeira quanto mais estimule o desenvolvimento desta necessidade radical dos seres humanos, a de sua expressividade", "O domínio da linguagem oral e escrita constitui uma das dimensões do processo da expressividade", "Avaliação, não inspeção", "São manifestações culturais tanto as técnicas dos especialistas quanto o comportamento empírico dos camponeses", "Não há produção fora das relações homem-mundo", "O espírito tem necessidade de abstrair para alcançar o concreto", "A consciência não se transforma através de cursos e discursos ou de pregações eloquentes, mas na prática sobre a realidade", "A conscientização não é uma medicina mágica para a cura dos 'corações'", "Não há conscientização fora da práxis", "O esforço de conscientização não é possível no desrespeito ao 'viável histórico'"],
  pFreireDiz: "",

  yatesShuffle(array) {
    let m = array.length, t, i; 
    // while there remain elements to shuffle
    while (m) {
        //pick a remaining element
        i = Math.floor(Math.random() * m--);
        //and swap with the current element
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    } return array;
},

pFreireDiz() {
  this.falaPauloFreire = this.yatesShuffle(this.dizeresFreire).slice(0,1)
  document.getElementById("Freire-fala").innerHTML = `${this.falaPauloFreire[0]}`
}
}



// acao cultural para a liberdade


// document.querySelector('button').addEventListener('click', event => {
//   leon.leonSays()
// })


// const leon = {
//   leonSaysList: ["First tryyyyyyy", "We're baddies, we write bad code", "be a baddie", "blame it on the nuns", "go kiss some babies", "it's automagic", "thank you for the gifted subs", "we go get!", "don't get got", "you will make it to the other end", "it's a marathon, not a sprint", "you don't need to be a flexosaurus", "how's your Anki?", "get that spaced repetition", "Smurfs are here to listen", "I want a thousand", "who will carry the boats and logs?", "be Beyonce", "you are built different", "you will get through the trough of sorrow", "let me get spicy", "I'm here to get people jobs and I'm f* good at it", "I don't care about the system", "you're a software engineer", "I want to burn those structures to the ground", "just look at the solution!", "don't go full codewars"],
//   leonSays: "",

//   yatesShuffle(array) {
//     let m = array.length, t, i; 
//     // while there remain elements to shuffle
//     while (m) {
//         //pick a remaining element
//         i = Math.floor(Math.random() * m--);
//         //and swap with the current element
//         t = array[m];
//         array[m] = array[i];
//         array[i] = t;
//     } return array;
// },

// leonSays() {
//   this.leonSaysNow = this.yatesShuffle(this.leonSaysList).slice(0,1)
//   document.getElementById("leon-speaks").innerHTML = `${this.leonSaysNow[0]}`
// }
// }

