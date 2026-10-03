
function openPractice(){
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("practiceScreen").classList.add("active");
  window.scrollTo(0,0);
}
function closePractice(){
  document.getElementById("practiceScreen").classList.remove("active");
  document.getElementById("menuScreen").classList.remove("hidden");
  document.querySelectorAll(".flip-card").forEach(card => card.classList.remove("flipped"));
  window.scrollTo(0,0);
}

const quizQuestions = [
  {type:"📖 Meaning → Word", q:"Which word means: “Bright, colourful lights that explode in the sky during celebrations.”", opts:["candy","special meal","fireworks","invitation"], a:2},
  {type:"📖 Meaning → Word", q:"Which word means: “To say ‘yes’ to an invitation or offer.”", opts:["accept","refuse","dress up","have lunch"], a:0},
  {type:"📖 Meaning → Word", q:"Which phrase means: “A meal you eat in the morning.”", opts:["have dinner","special meal","have lunch","have breakfast"], a:3},
  {type:"📖 Meaning → Word", q:"Which word means: “A card or message asking someone to come to an event.”", opts:["candy","invitation","fireworks","accept"], a:1},
  {type:"📖 Meaning → Word", q:"Which word means: “To say ‘no’ to an invitation or offer.”", opts:["dress up","accept","refuse","invitation"], a:2},
  {type:"📖 Meaning → Word", q:"Which word means: “Sweet food made with sugar.”", opts:["special meal","fireworks","invitation","candy"], a:3},
  {type:"📖 Meaning → Word", q:"Which phrase means: “A meal you eat in the evening.”", opts:["have dinner","have breakfast","have lunch","dress up"], a:0},
  {type:"📖 Meaning → Word", q:"Which phrase means: “To wear nice or special clothes.”", opts:["have lunch","refuse","dress up","accept"], a:2},
  {type:"📖 Meaning → Word", q:"Which phrase means: “A meal prepared for a celebration or important occasion.”", opts:["have breakfast","special meal","candy","have dinner"], a:1},
  {type:"📖 Meaning → Word", q:"Which phrase means: “A meal you eat in the middle of the day.”", opts:["special meal","have dinner","have breakfast","have lunch"], a:3},

  {type:"💬 Sentence → Word", q:"Mia wants her friends to come to her birthday party, so she sends them an ______.", opts:["fireworks","invitation","candy","special meal"], a:1},
  {type:"💬 Sentence → Word", q:"It is 12:30 p.m. The children are hungry, so they stop to ______.", opts:["have breakfast","have dinner","have lunch","dress up"], a:2},
  {type:"💬 Sentence → Word", q:"After the party, Dad gives each child some sweet food to take home. He gives them ______.", opts:["candy","fireworks","an invitation","a special meal"], a:0},
  {type:"💬 Sentence → Word", q:"Leo cannot go to the party because he is visiting his grandparents. He has to ______ the invitation.", opts:["accept","dress up","have lunch","refuse"], a:3},
  {type:"💬 Sentence → Word", q:"At the end of the celebration, everyone looks up and sees colourful lights exploding in the sky. They are watching ______.", opts:["candy","fireworks","a special meal","an invitation"], a:1},
  {type:"💬 Sentence → Word", q:"Every morning before school, Emma sits at the table with her family to ______.", opts:["have dinner","have lunch","have breakfast","dress up"], a:2},
  {type:"💬 Sentence → Word", q:"The family is going to a wedding, so they put on their nicest clothes. They ______ for the celebration.", opts:["have lunch","accept","refuse","dress up"], a:3},
  {type:"💬 Sentence → Word", q:"It is 7:00 p.m. and the family sits around the table to ______ together.", opts:["have dinner","have breakfast","have lunch","dress up"], a:0},
  {type:"💬 Sentence → Word", q:"Ella gets a party invitation and says, ‘Yes, I’d love to come!’ She decides to ______ it.", opts:["refuse","accept","dress up","have dinner"], a:1},
  {type:"💬 Sentence → Word", q:"For Grandpa’s birthday, the family prepares his favourite foods and eats together. They have a ______.", opts:["candy","invitation","special meal","fireworks"], a:2},

  {type:"🧠 Read & Think", html:"<div class='reading-card'><strong>🎉 YOU’RE INVITED!</strong><br><br>Come and celebrate Mia’s birthday!<br>We will have a ______ together and then watch fireworks.</div><span class='reading-question'>Which phrase completes the invitation best?</span>", opts:["special meal","invitation","refuse","dress up"], a:0},
  {type:"🧠 Read & Think", html:"<div class='reading-card'><strong>💬 Party Message</strong><br><br><b>Leo:</b> Would you like to come to my party on Saturday?<br><b>Ben:</b> Sorry, Leo. I am visiting my grandparents that day.</div><span class='reading-question'>What does Ben do?</span>", opts:["He accepts the invitation.","He refuses the invitation.","He has lunch.","He dresses up."], a:1},
  {type:"🧠 Read & Think", html:"<div class='reading-card'><strong>🎊 OUR CELEBRATION</strong><br><br>6:00 — Put on our nice clothes<br>7:00 — Eat together<br>9:00 — Watch colourful lights in the sky</div><span class='reading-question'>What will they probably do at 9:00?</span>", opts:["have breakfast","eat candy","accept an invitation","watch fireworks"], a:3},
  {type:"🧠 Read & Think", html:"<div class='reading-card'><strong>🎈 PARTY NOTE</strong><br><br>Please wear your nicest clothes.<br>The celebration starts at 5:00 p.m.</div><span class='reading-question'>What should the guests do before they arrive?</span>", opts:["dress up","have breakfast","refuse","watch fireworks"], a:0},
  {type:"🧠 Read & Think", html:"<div class='reading-card'><strong>🍽️ FAMILY CELEBRATION</strong><br><br>8:00 a.m. — Have breakfast<br>12:30 p.m. — Have lunch<br>7:00 p.m. — ______ with the whole family</div><span class='reading-question'>Which phrase completes the evening plan?</span>", opts:["accept an invitation","have breakfast","have lunch","have dinner"], a:3}
];
let quizIndex = 0;
const quizAnswers = new Array(quizQuestions.length).fill(null);

function openQuiz(){
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("practiceScreen").classList.remove("active");
  document.getElementById("quizScreen").classList.add("active");
  renderQuiz();
  window.scrollTo(0,0);
}
function closeQuiz(){
  document.getElementById("quizScreen").classList.remove("active");
  document.getElementById("menuScreen").classList.remove("hidden");
  window.scrollTo(0,0);
}
function renderQuiz(){
  const item = quizQuestions[quizIndex];
  const saved = quizAnswers[quizIndex];
  document.getElementById("quizProgress").textContent = `Question ${quizIndex + 1} / ${quizQuestions.length}`;
  document.getElementById("quizType").textContent = item.type;
  const questionBox = document.getElementById("quizQuestion");
  if(item.html){ questionBox.innerHTML = item.html; } else { questionBox.textContent = item.q; }
  const letters=["A","B","C","D"];
  document.getElementById("quizOptions").innerHTML=item.opts.map((option,i)=>{
    let cls="option";
    if(saved!==null){ if(i===item.a) cls+=" correct"; if(i===saved && saved!==item.a) cls+=" wrong"; }
    return `<button class="${cls}" type="button" ${saved!==null?"disabled":""} onclick="answerQuiz(${i})"><b>${letters[i]}.</b> ${option}</button>`;
  }).join("");
  const fb=document.getElementById("quizFeedback");
  fb.className="feedback"; fb.textContent="";
  if(saved!==null){
    if(saved===item.a){ const good=["🎉 Great job!","⭐ Amazing!","😊 Excellent!"]; fb.textContent=good[quizIndex%good.length]; fb.classList.add("good"); }
    else { fb.textContent=`❌ Oops! 😊 The correct answer is: ${letters[item.a]}. ${item.opts[item.a]}`; fb.classList.add("bad"); }
  }
  document.getElementById("quizPrev").disabled=quizIndex===0;
  document.getElementById("quizNext").disabled=quizIndex===quizQuestions.length-1;
}
function answerQuiz(choice){ if(quizAnswers[quizIndex]!==null) return; quizAnswers[quizIndex]=choice; renderQuiz(); }
function moveQuiz(direction){ const next=quizIndex+direction; if(next<0||next>=quizQuestions.length)return; quizIndex=next; renderQuiz(); window.scrollTo(0,0); }


const unscrambleItems = [
  {answer:"fireworks"}, {answer:"have lunch"}, {answer:"accept"}, {answer:"special meal"}, {answer:"invitation"},
  {answer:"have dinner"}, {answer:"candy"}, {answer:"dress up"}, {answer:"have breakfast"}, {answer:"refuse"}
];
let unscrambleIndex=0;
function answerLetters(answer){return answer.replaceAll(" ","").split("");}
function makeLetterOrder(answer){const letters=answerLetters(answer).map((letter,id)=>({letter,id}));for(let i=letters.length-1;i>0;i--){const j=(i*7+3)%(i+1);[letters[i],letters[j]]=[letters[j],letters[i]];}if(letters.map(x=>x.letter).join("")===answer.replaceAll(" ",""))letters.reverse();return letters;}
let unscrambleState=unscrambleItems.map(item=>Array(answerLetters(item.answer).length).fill(null));
let letterOrders=unscrambleItems.map(item=>makeLetterOrder(item.answer));
const week3HintImages={
 "invitation":"images/week3/invitation.jpg","special meal":"images/week3/special-meal.jpg","fireworks":"images/week3/fireworks.jpg","candy":"images/week3/candy.jpg","accept":"images/week3/accept.jpg","refuse":"images/week3/refuse.jpg","dress up":"images/week3/dress-up.jpg","have lunch":"images/week3/have-lunch.jpg","have breakfast":"images/week3/have-breakfast.jpg","have dinner":"images/week3/have-dinner.jpg"
};
function showUnscrambleHint(){const answer=unscrambleItems[unscrambleIndex].answer;const src=week3HintImages[answer];if(!src)return;const wrap=document.getElementById("hintImageWrap");const img=document.getElementById("hintImage");img.src=src;wrap.classList.add("show");}
function hideUnscrambleHint(){const wrap=document.getElementById("hintImageWrap");if(wrap)wrap.classList.remove("show");}
function openUnscramble(){document.getElementById("menuScreen").classList.add("hidden");document.getElementById("practiceScreen").classList.remove("active");document.getElementById("quizScreen").classList.remove("active");document.getElementById("unscrambleScreen").classList.add("active");renderUnscramble();window.scrollTo(0,0);}
function closeUnscramble(){hideUnscrambleHint();document.getElementById("unscrambleScreen").classList.remove("active");document.getElementById("menuScreen").classList.remove("hidden");window.scrollTo(0,0);}
function renderUnscramble(){const item=unscrambleItems[unscrambleIndex],words=item.answer.split(" "),state=unscrambleState[unscrambleIndex];document.getElementById("unscrambleCount").textContent=`Word ${unscrambleIndex+1} / ${unscrambleItems.length}`;let pos=0;document.getElementById("wordSlots").innerHTML=words.map(word=>{const slots=[...word].map(()=>{const placed=state[pos],idx=pos++;return `<span class="letter-space">${placed?`<button class="placed-letter" type="button" onclick="returnLetter(${idx})">${placed.letter.toUpperCase()}</button>`:""}</span>`;}).join("");return `<div class="word-slot">${slots}</div>`;}).join("");const used=new Set(state.filter(Boolean).map(x=>x.id));document.getElementById("letterBank").innerHTML=letterOrders[unscrambleIndex].map(o=>`<button class="letter-tile ${used.has(o.id)?"used":""}" type="button" onclick="placeLetter(${o.id})">${o.letter.toUpperCase()}</button>`).join("");const msg=document.getElementById("unscrambleMessage");msg.textContent="";msg.className="unscramble-message";document.getElementById("unscramblePrev").disabled=unscrambleIndex===0;document.getElementById("unscrambleNext").disabled=unscrambleIndex===unscrambleItems.length-1;}
function placeLetter(id){const state=unscrambleState[unscrambleIndex],obj=letterOrders[unscrambleIndex].find(x=>x.id===id),empty=state.findIndex(x=>!x);if(empty===-1||!obj)return;state[empty]=obj;renderUnscramble();}
function returnLetter(i){unscrambleState[unscrambleIndex][i]=null;renderUnscramble();}
function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}}
function shuffleUnscramble(){unscrambleState[unscrambleIndex]=Array(answerLetters(unscrambleItems[unscrambleIndex].answer).length).fill(null);shuffleArray(letterOrders[unscrambleIndex]);renderUnscramble();}
function checkUnscramble(){const item=unscrambleItems[unscrambleIndex],state=unscrambleState[unscrambleIndex],expected=item.answer.replaceAll(" ",""),built=state.map(x=>x?x.letter:"").join(""),msg=document.getElementById("unscrambleMessage");if(state.filter(Boolean).length<expected.length){msg.textContent="😊 Keep going! Use all the letters.";msg.className="unscramble-message bad";}else if(built===expected){msg.textContent="🎉 Great job! That's correct!";msg.className="unscramble-message good";}else{msg.textContent="❌ Not quite. Try again!";msg.className="unscramble-message bad";}}
function moveUnscramble(d){const next=unscrambleIndex+d;if(next<0||next>=unscrambleItems.length)return;unscrambleIndex=next;hideUnscrambleHint();renderUnscramble();window.scrollTo(0,0);}


// ===== GUESS THE WORD =====
const guessItems=[
 {answer:"fireworks",image:"images/week3/fireworks.jpg",clues:["You can see this at a celebration.","It happens outside, usually at night.","Bright, colourful lights explode in the sky."]},
 {answer:"invitation",image:"images/week3/invitation.jpg",clues:["You may get this before a party or special event.","It asks you to come somewhere.","It can be a card or a message."]},
 {answer:"accept",image:"images/week3/accept.jpg",clues:["You do this when someone gives you an invitation or offer.","It means you want to say yes.","It is the opposite of refuse."]},
 {answer:"special meal",image:"images/week3/special-meal.jpg",clues:["People may enjoy this on an important day.","It is prepared for a celebration or special occasion.","It is food that people eat together to celebrate."]},
 {answer:"dress up",image:"images/week3/dress-up.jpg",clues:["You may do this before a party or celebration.","You put on nice or special clothes.","It is two words and starts with D."]}
];
let guessIndex=0;
let guessClueLevel=1;
function openGuess(){document.getElementById("menuScreen").classList.add("hidden");document.getElementById("practiceScreen").classList.remove("active");document.getElementById("quizScreen").classList.remove("active");document.getElementById("unscrambleScreen").classList.remove("active");document.getElementById("guessScreen").classList.add("active");renderGuess();window.scrollTo(0,0);}
function closeGuess(){document.getElementById("guessScreen").classList.remove("active");document.getElementById("menuScreen").classList.remove("hidden");window.scrollTo(0,0);}
function renderGuess(){const item=guessItems[guessIndex];document.getElementById("guessCount").textContent=`Word ${guessIndex+1} / ${guessItems.length}`;document.getElementById("guessClues").innerHTML=item.clues.slice(0,guessClueLevel).map((c,i)=>`<div class="clue-line"><strong>Clue ${i+1}:</strong> ${c}</div>`).join("");document.getElementById("clue2Btn").disabled=guessClueLevel>=2;document.getElementById("clue3Btn").disabled=guessClueLevel>=3;document.getElementById("pictureHintBtn").classList.toggle("show",guessClueLevel>=3);document.getElementById("guessPictureHint").classList.remove("show");document.getElementById("guessInput").value="";const f=document.getElementById("guessFeedback");f.textContent="";f.className="guess-feedback";document.getElementById("guessResult").classList.remove("show");document.getElementById("guessPrev").disabled=guessIndex===0;document.getElementById("guessNext").disabled=guessIndex===guessItems.length-1;}
function showGuessClue(level){if(level>guessClueLevel)guessClueLevel=level;renderGuessCluesOnly();}
function renderGuessCluesOnly(){const item=guessItems[guessIndex];document.getElementById("guessClues").innerHTML=item.clues.slice(0,guessClueLevel).map((c,i)=>`<div class="clue-line"><strong>Clue ${i+1}:</strong> ${c}</div>`).join("");document.getElementById("clue2Btn").disabled=guessClueLevel>=2;document.getElementById("clue3Btn").disabled=guessClueLevel>=3;document.getElementById("pictureHintBtn").classList.toggle("show",guessClueLevel>=3);}
function showGuessPictureHint(){const item=guessItems[guessIndex];document.getElementById("guessHintImage").src=item.image;document.getElementById("guessPictureHint").classList.add("show");}
function normaliseGuess(v){return v.trim().toLowerCase().replace(/\s+/g," ");}
function checkGuess(){const item=guessItems[guessIndex],value=normaliseGuess(document.getElementById("guessInput").value),f=document.getElementById("guessFeedback"),result=document.getElementById("guessResult");if(!value){f.textContent="✏️ Type your answer first!";f.className="guess-feedback bad";return;}if(value===item.answer){f.textContent="🎉 Perfect! You got it! ✨";f.className="guess-feedback good";document.getElementById("guessImage").src=item.image;document.getElementById("guessPerfect").textContent=`🌟 ${item.answer.toUpperCase()} 🌟`;result.classList.add("show");}else{f.textContent="🤔 Not quite. Try again or open another clue!";f.className="guess-feedback bad";result.classList.remove("show");}}
function moveGuess(d){const next=guessIndex+d;if(next<0||next>=guessItems.length)return;guessIndex=next;guessClueLevel=1;renderGuess();window.scrollTo(0,0);}

