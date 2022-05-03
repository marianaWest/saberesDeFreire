document.querySelector('button').addEventListener('click', event => {
  pFreire.pFreireDiz()
})


const pFreire = {
  dizeresFreire: ["Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda", "Um pensar certo sobre a realidade se faz do respeito à unidade entre prática e teoria", "Ensinar não é transferir conhecimento, mas criar as possibilidades para sua produção", "O ato de estudar é uma atitude em frente ao mundo", "Estudar não é um ato de consumir ideias, mas de criá-las e recriá-las", "O que se deve opor à prática não é a teoria, mas o blá-blá-blá ou o falso pensar", "Me situo entre os que não aceitam a separação impossível entre prática e teoria", "A educação se fará tão mais verdadeira quanto mais estimule o desenvolvimento desta necessidade radical dos seres humanos, a de sua expressividade", "O domínio da linguagem oral e escrita constitui uma das dimensões do processo da expressividade", "Avaliação, não inspeção", "São manifestações culturais tanto as técnicas dos especialistas quanto o comportamento empírico dos camponeses", "Não há produção fora das relações homem-mundo", "O espírito tem necessidade de abstrair para alcançar o concreto", "A consciência não se transforma através de cursos e discursos ou de pregações eloquentes, mas na prática sobre a realidade", "A conscientização não é uma medicina mágica para a cura dos 'corações'", "Não há conscientização fora da práxis", "O esforço de conscientização não é possível no desrespeito ao 'viável histórico'", "Não sou esperançoso por pura teimosia mas por imperativo existencial e histórico", "A desesperança nos imobiliza e nos faz sucumbir no fatalismo onde não é possível juntar as forças indispensáveis ao embate recriador do mundo", "Minha esperança é necessária mas não é suficiente. Ela, só, não ganha a luta, mas sem ela a luta fraqueja e titubeia.", "Precisamos da herança crítica, como o peixe necessita da água despoluída.", "Desesperança e desespero, consquência e razão de ser da inação ou do imobilismo.", "Carregamos conosco a memória de muitas tramas, o corpo molhado de nossa história, de nossa cultura."],
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
//pedagogia da esperança, p. 17

