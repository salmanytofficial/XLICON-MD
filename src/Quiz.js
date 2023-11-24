//PLUGIN CREDITS GOES TO excelottah6 OWNER OF IZUKU-MD

const { cmd, getRandomInt } = require('../lib');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Mars", "C. Venus"],
        correctAnswer: "B"
    },
    {
        question: "The first iPhone was made in what year?",
        options: ["A. 2004", "B. 2007", "C. 2012"],
        correctAnswer: "B"
    },

    {
        question: "WHO IS THE OWNER OF IZUKU?",
        options: ["A. EO", "B. SP", "C. SL"],
        correctAnswer: "A"
    },

    {
        question: "IZUKU IS MADE FROM WHAT LANGUAGE ?",
        options: ["A. NODE", "B. JAVA", "C. REACT"],
        correctAnswer: "A"
    },
    
    {
        question: "martin luther king jnr was who?",
        options: ["A. BLACK LIVES ACTIVIST", "B. CLEANER", "C. PORN ACTOR🤡"],
        correctAnswer: "A"
    },

    {
        question: "how old is excel😕?",
        options: ["A. 21", "B. 15", "C. 17"],
        correctAnswer: "C"
    },

    {
        question: "ANOTHER NAME FOR IZUKU IS?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    
    ];
let currentQuestionIndex = 0;
let userScore = 0;
let quizActive = false; // Add a flag to track if the quiz is active
let incorrectAnswers = []; // Store incorrect answers
const _0x26f3fe=_0x392b;(function(_0x26fdc5,_0x14a606){const _0x35ac69=_0x392b,_0x4aa2dd=_0x26fdc5();while(!![]){try{const _0x524eda=-parseInt(_0x35ac69(0x151))/0x1+parseInt(_0x35ac69(0x165))/0x2*(parseInt(_0x35ac69(0x153))/0x3)+-parseInt(_0x35ac69(0x15e))/0x4+parseInt(_0x35ac69(0x15b))/0x5*(-parseInt(_0x35ac69(0x15f))/0x6)+parseInt(_0x35ac69(0x161))/0x7+-parseInt(_0x35ac69(0x15d))/0x8*(parseInt(_0x35ac69(0x15a))/0x9)+parseInt(_0x35ac69(0x160))/0xa*(parseInt(_0x35ac69(0x168))/0xb);if(_0x524eda===_0x14a606)break;else _0x4aa2dd['push'](_0x4aa2dd['shift']());}catch(_0x1d615f){_0x4aa2dd['push'](_0x4aa2dd['shift']());}}}(_0x5357,0xcbf62),cmd({'pattern':_0x26f3fe(0x158),'info':'Start\x20a\x20quiz\x20game.','category':_0x26f3fe(0x164),'filepath':__filename},async(_0x31f696,_0x2578f0)=>{const _0x256cb6=_0x26f3fe;!quizActive?(userScore=0x0,currentQuestionIndex=0x0,quizActive=!![],incorrectAnswers=[],sendQuestion(_0x2578f0)):_0x2578f0[_0x256cb6(0x154)](_0x256cb6(0x159)+prefix+_0x256cb6(0x163));}));function sendQuestion(_0x39bbe7){const _0x2f29c0=_0x26f3fe;if(currentQuestionIndex<quizQuestions['length']){const _0x3e058d=quizQuestions[currentQuestionIndex],_0x5dfe87=_0x3e058d[_0x2f29c0(0x16a)]+'\x0a'+_0x3e058d['options']['join']('\x0a');_0x39bbe7[_0x2f29c0(0x154)](_0x5dfe87);}else quizActive=![],incorrectAnswers[_0x2f29c0(0x152)]>0x0?_0x39bbe7[_0x2f29c0(0x154)](_0x2f29c0(0x156)+userScore+'/'+quizQuestions[_0x2f29c0(0x152)]+_0x2f29c0(0x157)+incorrectAnswers['join']('\x0a')):_0x39bbe7[_0x2f29c0(0x154)]('[Quiz]\x20completed!\x20Your\x20score:\x20'+userScore+'/'+quizQuestions[_0x2f29c0(0x152)]),currentQuestionIndex=0x0;}function _0x392b(_0x1e059e,_0x5e6790){const _0x53572b=_0x5357();return _0x392b=function(_0x392b90,_0x10fd44){_0x392b90=_0x392b90-0x151;let _0x58eec9=_0x53572b[_0x392b90];return _0x58eec9;},_0x392b(_0x1e059e,_0x5e6790);}function _0x5357(){const _0x837104=['5216744vNWUpS','5131684Ydalnv','1164HdRngM','25804210ogfFdR','9863973bjfvET','resetquiz','delquiz\x20To\x20Abort\x20It_*','games','2082118IJZwuI','Reset\x20and\x20delete\x20the\x20quiz\x20game.','correctAnswer','11saSGDN','push','question','No\x20quiz\x20is\x20currently\x20running.','1661689FSgMxB','length','3aUaRyi','reply','trim','[Quiz]\x20completed!\x20Your\x20score:\x20','\x0aIncorrect\x20Answers:\x0a','startquiz','*_The\x20Quiz\x20Game\x20IS\x20Already\x20Running_*\x0a*_Use\x20','9FEKIyV','15425UoiHAg','toUpperCase'];_0x5357=function(){return _0x837104;};return _0x5357();}cmd({'on':'text'},async(_0x3554fa,_0x5e9ff4)=>{const _0x449905=_0x26f3fe,_0x18b8a1=quizQuestions[currentQuestionIndex];if(_0x18b8a1&&quizActive){const _0x767d21=_0x5e9ff4['text']||'',_0x4fe3ef=_0x767d21[_0x449905(0x155)]()[_0x449905(0x15c)]();(_0x4fe3ef==='A'||_0x4fe3ef==='B'||_0x4fe3ef==='C')&&(_0x4fe3ef===_0x18b8a1[_0x449905(0x167)]?userScore++:incorrectAnswers[_0x449905(0x169)](_0x18b8a1[_0x449905(0x16a)]+'\x20(Your\x20Answer:\x20'+_0x4fe3ef+',\x20Correct\x20Answer:\x20'+_0x18b8a1['correctAnswer']+')'),currentQuestionIndex++,sendQuestion(_0x5e9ff4));}}),cmd({'pattern':_0x26f3fe(0x162),'info':_0x26f3fe(0x166),'category':_0x26f3fe(0x164),'filepath':__filename},async(_0x48d739,_0x3a43a7)=>{const _0x132b33=_0x26f3fe;quizActive?(quizActive=![],currentQuestionIndex=0x0,userScore=0x0,incorrectAnswers=[],_0x3a43a7[_0x132b33(0x154)]('[Quiz]\x20game\x20reset.\x20You\x20can\x20start\x20a\x20new\x20game\x20by\x20using\x20the\x20!quiz\x20command.')):_0x3a43a7[_0x132b33(0x154)](_0x132b33(0x16b));});
 //====================================================================================================
 const flagPairs = [
   { flag: "🇺🇸", country: "United States" },
   { flag: "🇬🇧", country: "United Kingdom" },
   { flag: "🇫🇷", country: "France" },
   { flag: "🇩🇪", country: "Germany" },
   { flag: "🇨🇦", country: "Canada" },
   { flag: "🇦🇺", country: "Australia" },
   { flag: "🇯🇵", country: "Japan" },
   { flag: "🇮🇳", country: "India" },
   { flag: "🇮🇹", country: "Italy" },
   { flag: "🇪🇸", country: "Spain" },
   { flag: "🇷🇺", country: "Russia" },
   { flag: "🇧🇷", country: "Brazil" },
   { flag: "🇨🇳", country: "China" },
   { flag: "🇲🇽", country: "Mexico" },
   { flag: "🇿🇦", country: "South Africa" },
   { flag: "🇰🇷", country: "South Korea" },
   { flag: "🇸🇦", country: "Saudi Arabia" },
   { flag: "🇸🇬", country: "Singapore" },
   { flag: "🇸🇪", country: "Sweden" },
   { flag: "🇨🇭", country: "Switzerland" },
   { flag: "🇦🇷", country: "Argentina" },
   { flag: "🇦🇹", country: "Austria" },
   { flag: "🇧🇪", country: "Belgium" },
   { flag: "🇨🇱", country: "Chile" },
   { flag: "🇨🇴", country: "Colombia" },
   { flag: "🇨🇿", country: "Czech Republic" },
   { flag: "🇩🇰", country: "Denmark" },
   { flag: "🇪🇬", country: "Egypt" },
   { flag: "🇫🇮", country: "Finland" },
   { flag: "🇬🇷", country: "Greece" },
   { flag: "🇭🇺", country: "Hungary" },
   { flag: "🇮🇩", country: "Indonesia" },
   { flag: "🇮🇪", country: "Ireland" },
   { flag: "🇮🇱", country: "Israel" },
   { flag: "🇯🇴", country: "Jordan" },
   { flag: "🇰🇿", country: "Kazakhstan" },
   { flag: "🇱🇧", country: "Lebanon" },
   { flag: "🇲🇾", country: "Malaysia" },
   { flag: "🇲🇻", country: "Maldives" },
   { flag: "🇳🇱", country: "Netherlands" },
   { flag: "🇳🇿", country: "New Zealand" },
   { flag: "🇳🇴", country: "Norway" },
   { flag: "🇵🇰", country: "Pakistan" },
   { flag: "🇵🇱", country: "Poland" },
   { flag: "🇵🇹", country: "Portugal" },
   { flag: "🇶🇦", country: "Qatar" },
   { flag: "🇷🇴", country: "Romania" },
   { flag: "🇷🇸", country: "Serbia" },
 ];

 let currentFlagIndex = 0;
 let score = 0;

 function _0x3c2f(_0x2727bf,_0x1297b5){const _0x44e449=_0x44e4();return _0x3c2f=function(_0x3c2fd5,_0x37b2df){_0x3c2fd5=_0x3c2fd5-0xef;let _0x27d4a1=_0x44e449[_0x3c2fd5];return _0x27d4a1;},_0x3c2f(_0x2727bf,_0x1297b5);}function _0x44e4(){const _0x278dab=['6810WsUPwl','1886892VPsPwv','No\x20flag\x20guessing\x20game\x20is\x20currently\x20running.','length','Moving\x20on\x20to\x20the\x20next\x20flag...','266HBfaJq','7146aeHCBq','country','trim','toLowerCase','\x22\x20is\x20correct!\x20🎉','reply','5796612JYlXiV','1804554JtgCjx','10oihhqF','Guess\x20the\x20country\x20of\x20this\x20flag:\x20','285008zuBuhj','flaganswer','flag','3750244TZWvRa','game','Game\x20over!\x20Your\x20final\x20score\x20is\x20','3127236jJMLBY','Check\x20your\x20answer\x20for\x20the\x20flag\x20guessing\x20game.','Sorry,\x20your\x20answer\x20\x22'];_0x44e4=function(){return _0x278dab;};return _0x44e4();}const _0x2dd397=_0x3c2f;(function(_0x5cd8ab,_0xaf2d41){const _0x70e664=_0x3c2f,_0x2c338d=_0x5cd8ab();while(!![]){try{const _0x42d933=parseInt(_0x70e664(0xfe))/0x1+-parseInt(_0x70e664(0xfa))/0x2+parseInt(_0x70e664(0xf1))/0x3+parseInt(_0x70e664(0xf7))/0x4+parseInt(_0x70e664(0xfd))/0x5*(-parseInt(_0x70e664(0x103))/0x6)+-parseInt(_0x70e664(0x102))/0x7*(-parseInt(_0x70e664(0xf4))/0x8)+parseInt(_0x70e664(0xf0))/0x9*(-parseInt(_0x70e664(0xf2))/0xa);if(_0x42d933===_0xaf2d41)break;else _0x2c338d['push'](_0x2c338d['shift']());}catch(_0x1f8a50){_0x2c338d['push'](_0x2c338d['shift']());}}}(_0x44e4,0xe7eab),cmd({'pattern':_0x2dd397(0xf6),'desc':'Display\x20the\x20next\x20flag.','category':_0x2dd397(0xf8)},(_0x169d28,_0x122723)=>{const _0x3e1deb=_0x2dd397;currentFlagIndex>=flagPairs[_0x3e1deb(0x100)]&&(currentFlagIndex=0x0);const _0x6987d0=flagPairs[currentFlagIndex],_0x375686=addFancyBorder(_0x6987d0['flag']);_0x122723['reply'](_0x3e1deb(0xf3)+_0x375686),currentFlagIndex++;}),cmd({'pattern':_0x2dd397(0xf5),'desc':_0x2dd397(0xfb),'category':_0x2dd397(0xf8)},(_0x3ea272,_0x1625c4,_0x35c5ba)=>{const _0xf2e941=_0x2dd397;if(currentFlagIndex===0x0)return _0x1625c4['reply'](_0xf2e941(0xff));const _0x53d3d7=_0x35c5ba[_0xf2e941(0x105)]()[_0xf2e941(0x106)](),_0x48a12a=flagPairs[currentFlagIndex-0x1],_0xec5831=_0x48a12a[_0xf2e941(0x104)][_0xf2e941(0x106)]();_0x53d3d7===_0xec5831?(_0x1625c4['reply']('Congratulations!\x20Your\x20answer\x20\x22'+_0x35c5ba+_0xf2e941(0x107)),score++):_0x1625c4[_0xf2e941(0xef)](_0xf2e941(0xfc)+_0x35c5ba+'\x22\x20is\x20incorrect.\x20Try\x20again!');_0x1625c4['reply'](_0xf2e941(0x101));if(currentFlagIndex>=flagPairs[_0xf2e941(0x100)]){currentFlagIndex=0x0,_0x1625c4[_0xf2e941(0xef)](_0xf2e941(0xf9)+score+'/'+flagPairs[_0xf2e941(0x100)]+'.'),score=0x0;return;}const _0x490aff=flagPairs[currentFlagIndex],_0x109b6a=addFancyBorder(_0x490aff[_0xf2e941(0xf6)]);_0x1625c4['reply']('Guess\x20the\x20country\x20of\x20this\x20flag:\x20'+_0x109b6a),currentFlagIndex++;}));function addFancyBorder(_0x4384fa){const _0x25e236='•';return''+_0x25e236+_0x4384fa+_0x25e236;}
