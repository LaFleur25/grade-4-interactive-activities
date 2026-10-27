/* SW401–SW406; Grade 4 PTS practice questions. */
window.PTS_DATA = {
  "version": 2,
  "vocabularyScope": "SW401–SW406",
  "vocabulary": {
    "SW401": [
      "have breakfast",
      "wake up",
      "read a book",
      "take a shower",
      "get dressed",
      "do homework",
      "brush my teeth",
      "comb my hair",
      "go to school",
      "go to bed"
    ],
    "SW402": [
      "feed a pet",
      "tidy up your room",
      "pack your bag",
      "study for a test",
      "catch the bus",
      "visit grandparents",
      "take a picture",
      "put on pyjamas",
      "turn off the alarm",
      "dry my hair"
    ],
    "SW403": [
      "invitation",
      "special meal",
      "fireworks",
      "sweets",
      "accept",
      "refuse",
      "dress up",
      "have lunch",
      "have breakfast",
      "have dinner"
    ],
    "SW404": [
      "passenger",
      "sweater",
      "circus",
      "hat",
      "stage",
      "trousers",
      "unusual",
      "jacket",
      "railway",
      "dress"
    ],
    "SW405": [
      "angry",
      "bored",
      "excited",
      "happy",
      "nervous",
      "scared",
      "surprised",
      "tired",
      "upset",
      "worried"
    ],
    "SW406": [
      "born",
      "graduate",
      "retire",
      "die",
      "teenager",
      "adult",
      "older adult",
      "child",
      "get a job",
      "start school"
    ]
  },
  "sets": [
    {
      "id": "training-1",
      "mode": "training",
      "title": "Practice Set 1",
      "sources": {
        "r": {
          "type": "reading",
          "title": "Tom's school mornings",
          "text": "Tom wakes up at seven. He has breakfast and brushes his teeth before school. He walks to school on four days. On Wednesdays, he catches the bus."
        },
        "t": {
          "type": "table",
          "title": "Lucy's reading week",
          "headers": [
            "Activity",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri"
          ],
          "rows": [
            [
              "Read a book",
              "✓",
              "—",
              "✓",
              "—",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no",
          "compact": true
        },
        "c": {
          "type": "dialogue",
          "title": "Feeding a pet",
          "turns": [
            {
              "name": "Ben",
              "text": "How often do you feed your dog?"
            },
            {
              "name": "Harry",
              "text": "Every morning and every evening."
            }
          ]
        },
        "p": {
          "type": "poster",
          "title": "Sophie's bedtime",
          "icon": "🌙",
          "facts": [
            {
              "icon": "🪥",
              "label": "Brush my teeth",
              "value": "Every night"
            },
            {
              "icon": "🛏️",
              "label": "Then",
              "value": "Go to bed"
            }
          ]
        },
        "d": {
          "type": "timeline",
          "title": "Oliver's morning",
          "steps": [
            {
              "icon": "👕",
              "time": "First",
              "action": "Get dressed"
            },
            {
              "icon": "🥣",
              "time": "Then",
              "action": "Have breakfast"
            },
            {
              "icon": "🪥",
              "time": "Next",
              "action": "Brush teeth"
            },
            {
              "icon": "🎒",
              "time": "Last",
              "action": "Pack bag"
            }
          ]
        },
        "photo": {
          "type": "reading",
          "title": "Lily yesterday at seven",
          "text": "Lily's brother wanted to play. Lily said, “Wait a minute! I want to finish this page.” Look at her picture.",
          "image": "images/reading.jpg",
          "alt": "Lily is reading an open book on a beanbag."
        },
        "story": {
          "type": "scene",
          "title": "A special meal",
          "intro": "Yesterday at six, Grace and Harry were at home.",
          "people": [
            {
              "name": "Grace",
              "icon": "🍽️",
              "action": "was having dinner"
            },
            {
              "name": "Harry",
              "icon": "👔",
              "action": "was dressing up"
            }
          ],
          "end": "Harry wanted to wear his best clothes for the special meal."
        }
      },
      "questions": [
        {
          "source": "r",
          "kind": "reading",
          "prompt": "What does Tom do before school?",
          "explanation": "Tom has breakfast before school.",
          "id": "training-1-q1",
          "topic": "routines",
          "group": "sharedRoutine",
          "options": [
            "He has breakfast.",
            "He goes to bed.",
            "He has dinner.",
            "He watches fireworks."
          ],
          "answer": 0
        },
        {
          "source": "r",
          "kind": "inference",
          "prompt": "Which sentence matches Tom's week?",
          "explanation": "Tom walks on four days and catches the bus on Wednesday.",
          "id": "training-1-q2",
          "topic": "frequency",
          "group": "sharedRoutine",
          "options": [
            "He always catches the bus.",
            "He never walks to school.",
            "He usually walks to school.",
            "He catches the bus every day."
          ],
          "answer": 2
        },
        {
          "source": "t",
          "kind": "table",
          "prompt": "How often does Lucy read a book?",
          "explanation": "There are three ticks: Monday, Wednesday and Friday.",
          "id": "training-1-q3",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She reads a book every day.",
            "She reads a book three times this week.",
            "She reads a book twice this week.",
            "She reads a book once this week."
          ],
          "answer": 1
        },
        {
          "source": "c",
          "kind": "dialogue",
          "prompt": "How often does Harry feed his pet?",
          "explanation": "Morning and evening means twice a day.",
          "id": "training-1-q4",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "He feeds his pet once a day.",
            "He feeds his pet twice a week.",
            "He feeds his pet only on Sundays.",
            "He feeds his pet twice a day."
          ],
          "answer": 3
        },
        {
          "source": "p",
          "kind": "poster",
          "prompt": "Which sentence matches Sophie's bedtime habit?",
          "explanation": "Every night means she always does it at bedtime.",
          "id": "training-1-q5",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She always brushes her teeth before bed.",
            "She sometimes brushes her teeth before bed.",
            "She never brushes her teeth before bed.",
            "She rarely brushes her teeth before bed."
          ],
          "answer": 0
        },
        {
          "source": "photo",
          "kind": "picture",
          "prompt": "What was Lily doing at seven?",
          "explanation": "The picture shows Lily reading a book.",
          "id": "training-1-q6",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "She was packing her bag.",
            "She was combing her hair.",
            "She was reading a book.",
            "She was feeding a pet."
          ],
          "answer": 2
        },
        {
          "source": "photo",
          "kind": "inference",
          "prompt": "Why did Lily ask her brother to wait?",
          "explanation": "Lily says she wants to finish the page first.",
          "id": "training-1-q7",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "She wanted to have breakfast.",
            "She could not find her bag.",
            "She was getting dressed.",
            "She wanted to finish a page."
          ],
          "answer": 3
        },
        {
          "source": "d",
          "kind": "timeline",
          "prompt": "What does Oliver do after breakfast?",
          "explanation": "The next step after breakfast is brushing his teeth.",
          "id": "training-1-q8",
          "topic": "routines",
          "group": "routine",
          "options": [
            "He gets dressed.",
            "He brushes his teeth.",
            "He packs his bag.",
            "He has dinner."
          ],
          "answer": 1
        },
        {
          "source": "story",
          "kind": "scene",
          "prompt": "What was Grace doing yesterday at six?",
          "explanation": "Grace's card says she was having dinner.",
          "id": "training-1-q9",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "She was having dinner.",
            "She was dressing up.",
            "She was brushing her teeth.",
            "She was going to bed."
          ],
          "answer": 0
        },
        {
          "source": "story",
          "kind": "inference",
          "prompt": "Why was Harry dressing up?",
          "explanation": "Harry wanted to wear his best clothes for the meal.",
          "id": "training-1-q10",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "He wanted to take a shower.",
            "He was getting ready for a special meal.",
            "He wanted to go to bed.",
            "He wanted to feed his pet."
          ],
          "answer": 1
        }
      ]
    },
    {
      "id": "training-2",
      "mode": "training",
      "title": "Practice Set 2",
      "sources": {
        "r": {
          "type": "reading",
          "title": "Emily after school",
          "text": "Emily does her homework after school. She always packs her bag before bed. Every Sunday, she visits her grandparents and has lunch with them."
        },
        "t": {
          "type": "table",
          "title": "Harry visits his grandparents",
          "headers": [
            "Activity",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri"
          ],
          "rows": [
            [
              "Visit",
              "—",
              "✓",
              "—",
              "✓",
              "—"
            ]
          ],
          "note": "✓ = yes   — = no",
          "compact": true
        },
        "c": {
          "type": "dialogue",
          "title": "Charlie's journey",
          "turns": [
            {
              "name": "Jane",
              "text": "Do you ever catch the school bus?"
            },
            {
              "name": "Charlie",
              "text": "No. I always walk to school."
            }
          ]
        },
        "p": {
          "type": "poster",
          "title": "Lucy's family lunch",
          "icon": "🍽️",
          "facts": [
            {
              "icon": "🗓️",
              "label": "When",
              "value": "Every Sunday"
            },
            {
              "icon": "👵",
              "label": "With",
              "value": "My grandparents"
            }
          ]
        },
        "d": {
          "type": "timeline",
          "title": "Daniel gets ready",
          "steps": [
            {
              "icon": "⏰",
              "time": "7:00",
              "action": "Wake up"
            },
            {
              "icon": "🥣",
              "time": "7:15",
              "action": "Have breakfast"
            },
            {
              "icon": "🪥",
              "time": "7:35",
              "action": "Brush teeth"
            },
            {
              "icon": "🏫",
              "time": "7:45",
              "action": "Go to school"
            }
          ]
        },
        "photo": {
          "type": "reading",
          "title": "Jack yesterday at six",
          "text": "Jack's dog was hungry. Mum took this picture before dinner. Look at what Jack was doing.",
          "image": "images/feeding.jpg",
          "alt": "Jack is pouring pet food into his dog's bowl."
        },
        "story": {
          "type": "scene",
          "title": "Fireworks last night",
          "intro": "At eight last night, Ben and Emily were outside.",
          "people": [
            {
              "name": "Ben",
              "icon": "🎆",
              "action": "was watching fireworks"
            },
            {
              "name": "Emily",
              "icon": "🙉",
              "action": "was covering her ears"
            }
          ],
          "end": "The fireworks were very loud. Emily felt scared."
        }
      },
      "questions": [
        {
          "source": "photo",
          "kind": "picture",
          "prompt": "What was Jack doing before dinner?",
          "explanation": "The picture shows Jack feeding his dog.",
          "id": "training-2-q1",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "He was doing homework.",
            "He was having lunch.",
            "He was drying his hair.",
            "He was feeding his pet."
          ],
          "answer": 3
        },
        {
          "source": "photo",
          "kind": "inference",
          "prompt": "Why was Jack giving food to his dog?",
          "explanation": "The short text says his dog was hungry.",
          "id": "training-2-q2",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "The dog was tired.",
            "The dog was hungry.",
            "Jack was going to school.",
            "Mum wanted a new pet."
          ],
          "answer": 1
        },
        {
          "source": "t",
          "kind": "table",
          "prompt": "Which sentence matches Harry's visits?",
          "explanation": "Tuesday and Thursday have ticks: two visits.",
          "id": "training-2-q3",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "He visits twice a week.",
            "He visits every day.",
            "He never visits on Thursday.",
            "He visits only on Monday."
          ],
          "answer": 0
        },
        {
          "source": "c",
          "kind": "dialogue",
          "prompt": "Which sentence is true about Charlie?",
          "explanation": "Charlie says he always walks and does not catch the bus.",
          "id": "training-2-q4",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "He always catches the school bus.",
            "He catches it on Fridays.",
            "He never catches the school bus.",
            "He never walks to school."
          ],
          "answer": 2
        },
        {
          "source": "p",
          "kind": "poster",
          "prompt": "How often does Lucy have lunch with her grandparents?",
          "explanation": "The lunch card says Every Sunday.",
          "id": "training-2-q5",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She has lunch with her grandparents every school day.",
            "She has lunch with her grandparents every evening.",
            "She has lunch with her grandparents every Saturday.",
            "She has lunch with her grandparents every Sunday."
          ],
          "answer": 3
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "When does Emily pack her school bag?",
          "explanation": "She packs her bag before bed.",
          "id": "training-2-q6",
          "topic": "routines",
          "group": "sharedRoutine",
          "options": [
            "She packs her bag before lunch.",
            "She packs her bag before bed.",
            "She packs her bag at school.",
            "She packs her bag after breakfast."
          ],
          "answer": 1
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "How often does Emily visit her grandparents?",
          "explanation": "She visits every Sunday, so she goes once a week.",
          "id": "training-2-q7",
          "topic": "frequency",
          "group": "sharedRoutine",
          "options": [
            "She visits her grandparents once a week.",
            "She visits her grandparents every school day.",
            "She visits her grandparents twice a week.",
            "She visits her grandparents once a month."
          ],
          "answer": 0
        },
        {
          "source": "story",
          "kind": "scene",
          "prompt": "What was Ben doing at eight last night?",
          "explanation": "Ben's card shows he was watching fireworks.",
          "id": "training-2-q8",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "He was taking a shower.",
            "He was packing his bag.",
            "He was watching fireworks.",
            "He was combing his hair."
          ],
          "answer": 2
        },
        {
          "source": "story",
          "kind": "inference",
          "prompt": "Why was Emily covering her ears?",
          "explanation": "The loud fireworks scared Emily.",
          "id": "training-2-q9",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "Her hair was wet.",
            "She was bored at school.",
            "She wanted some lunch.",
            "The fireworks were loud."
          ],
          "answer": 3
        },
        {
          "source": "d",
          "kind": "timeline",
          "prompt": "What does Daniel do at 7:35?",
          "explanation": "Brushing his teeth is beside 7:35.",
          "id": "training-2-q10",
          "topic": "routines",
          "group": "routine",
          "options": [
            "He wakes up.",
            "He has breakfast.",
            "He brushes his teeth.",
            "He goes to school."
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": "training-3",
      "mode": "training",
      "title": "Practice Set 3",
      "isNew": true,
      "sources": {
        "s1": {
          "type": "table",
          "title": "Lucy's after-school activities",
          "headers": [
            "Day",
            "Activity"
          ],
          "rows": [
            [
              "Monday",
              "🎨 Art club"
            ],
            [
              "Tuesday",
              "⚽ Football"
            ],
            [
              "Wednesday",
              "📚 Library"
            ]
          ]
        },
        "s2": {
          "type": "dialogue",
          "title": "After school",
          "turns": [
            {
              "name": "Jack: ",
              "text": "Hi, Emily! Would you like to play football after school?"
            },
            {
              "name": "Emily: ",
              "text": "I’d love to, but I have a piano lesson today."
            },
            {
              "name": "Jack: ",
              "text": "____________________"
            }
          ]
        },
        "s3": {
          "type": "timeline",
          "title": "Ben’s morning",
          "steps": [
            {
              "icon": "🛏️",
              "time": "First",
              "action": "Get up"
            },
            {
              "icon": "🪥",
              "time": "Then",
              "action": "Brush teeth"
            },
            {
              "icon": "🥣",
              "time": "Next",
              "action": "Have breakfast"
            },
            {
              "icon": "🚌",
              "time": "Last",
              "action": "Catch the bus"
            }
          ]
        },
        "s4": {
          "type": "table",
          "title": "Sophie’s morning routine",
          "headers": [
            "Time",
            "Activity"
          ],
          "rows": [
            [
              "7:00",
              "🛏️ Gets up"
            ],
            [
              "7:15",
              "🥣 Has breakfast"
            ],
            [
              "7:30",
              "🪥 Brushes her teeth"
            ],
            [
              "7:45",
              "🎒 Goes to school"
            ]
          ]
        },
        "s5": {
          "type": "table",
          "title": "Tom and Grace’s jobs",
          "headers": [
            "Activity",
            "Tom",
            "Grace"
          ],
          "rows": [
            [
              "Feeds a pet",
              "✓",
              "—"
            ],
            [
              "Waters the plants",
              "—",
              "✓"
            ],
            [
              "Makes the bed",
              "✓",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no"
        },
        "s6": {
          "type": "table",
          "title": "Oliver’s weekly activities",
          "headers": [
            "Day",
            "Activity"
          ],
          "rows": [
            [
              "Monday",
              "🏊 Swimming"
            ],
            [
              "Tuesday",
              "📖 Reading"
            ],
            [
              "Wednesday",
              "🏊 Swimming"
            ],
            [
              "Thursday",
              "📖 Reading"
            ],
            [
              "Friday",
              "🏊 Swimming"
            ],
            [
              "Saturday",
              "🎨 Art club"
            ],
            [
              "Sunday",
              "🚲 Cycling"
            ]
          ]
        },
        "s7": {
          "type": "reading",
          "title": "At the park yesterday",
          "text": "Yesterday at four, the children were at the park. Lily is the girl with red hair.",
          "image": "images/park-activities.jpg",
          "alt": "Four children in a park: a red-haired girl reading, a boy cycling, a boy playing with a ball and a girl painting."
        },
        "s8": {
          "type": "dialogue",
          "title": "Walking to school",
          "turns": [
            {
              "name": "Daniel: ",
              "text": "How often do you walk to school?"
            },
            {
              "name": "Charlie: ",
              "text": "I walk to school every day."
            },
            {
              "name": "Daniel: ",
              "text": "So, you __________ walk to school."
            }
          ]
        },
        "s9": {
          "type": "reading",
          "title": "Lily’s message",
          "text": "Hi Grace, I can’t play outside today. It’s raining, so I’m making a cake with my mum. See you tomorrow! — Lily"
        },
        "s10": {
          "type": "timeline",
          "title": "Harry’s afternoon",
          "steps": [
            {
              "icon": "📖",
              "time": "5:00",
              "action": "Harry starts reading"
            },
            {
              "icon": "🏠",
              "time": "5:30",
              "action": "Mum comes home"
            },
            {
              "icon": "📚",
              "time": "6:00",
              "action": "Harry finishes reading"
            }
          ]
        }
      },
      "questions": [
        {
          "source": "s1",
          "kind": "table",
          "prompt": "What does Lucy do after school on Tuesday?",
          "explanation": "The table shows football on Tuesday.",
          "id": "training-3-q1",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She goes to art club.",
            "She plays football.",
            "She goes to the library.",
            "She plays tennis."
          ],
          "answer": 1
        },
        {
          "source": "s2",
          "kind": "dialogue",
          "prompt": "What does Jack say next?",
          "explanation": "Emily has a piano lesson today, so Jack suggests tomorrow.",
          "id": "training-3-q2",
          "topic": "routines",
          "group": "routines",
          "options": [
            "My piano is in the living room.",
            "Yes, I play football every day.",
            "I had lunch at school yesterday.",
            "That’s OK. We can play tomorrow."
          ],
          "answer": 3
        },
        {
          "source": "s3",
          "kind": "timeline",
          "prompt": "What does Ben do before he has breakfast?",
          "explanation": "Ben brushes his teeth before breakfast.",
          "id": "training-3-q3",
          "topic": "routines",
          "group": "routines",
          "options": [
            "He gets on the bus.",
            "He goes to bed.",
            "He brushes his teeth.",
            "He plays football."
          ],
          "answer": 2
        },
        {
          "source": "s4",
          "kind": "table",
          "prompt": "What does Sophie do after breakfast?",
          "explanation": "Sophie brushes her teeth after breakfast.",
          "id": "training-3-q4",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She goes to school.",
            "She gets up.",
            "She brushes her teeth.",
            "She has dinner."
          ],
          "answer": 2
        },
        {
          "source": "s5",
          "kind": "table",
          "prompt": "Which activity do Tom and Grace both do?",
          "explanation": "Both Tom and Grace have a tick next to makes the bed.",
          "id": "training-3-q5",
          "topic": "routines",
          "group": "routines",
          "options": [
            "They feed a pet.",
            "They make the bed.",
            "They water the plants.",
            "They wash the car."
          ],
          "answer": 1
        },
        {
          "source": "s6",
          "kind": "table",
          "prompt": "Which sentence is correct?",
          "explanation": "Oliver swims three days a week and goes to art club once.",
          "id": "training-3-q6",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Oliver goes swimming more often than he goes to art club.",
            "Oliver goes swimming every day.",
            "Oliver never goes to art club.",
            "Oliver goes to art club three times a week."
          ],
          "answer": 0
        },
        {
          "source": "s7",
          "kind": "picture",
          "prompt": "What was Lily doing?",
          "explanation": "Lily, the red-haired girl, was reading a book.",
          "id": "training-3-q7",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "She was riding a bike.",
            "She was playing with a ball.",
            "She was painting a picture.",
            "She was reading a book."
          ],
          "answer": 3
        },
        {
          "source": "s8",
          "kind": "dialogue",
          "prompt": "Choose the best word.",
          "explanation": "Every day means always.",
          "id": "training-3-q8",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "never",
            "sometimes",
            "always",
            "often"
          ],
          "answer": 2
        },
        {
          "source": "s9",
          "kind": "reading",
          "prompt": "Why is Lily staying inside?",
          "explanation": "Lily says it is raining.",
          "id": "training-3-q9",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She has a test.",
            "It is raining.",
            "She is tired.",
            "It is snowing."
          ],
          "answer": 1
        },
        {
          "source": "s10",
          "kind": "timeline",
          "prompt": "What was Harry doing when Mum came home?",
          "explanation": "Harry started reading before Mum came home and finished after she arrived.",
          "id": "training-3-q10",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "He was reading a book.",
            "He was eating dinner.",
            "He was playing football.",
            "He was going to school."
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": "challenge-1",
      "mode": "challenge",
      "title": "Challenge Set 1",
      "sources": {
        "r": {
          "type": "reading",
          "title": "Ben and Lucy's week",
          "text": "Ben is a teenager. His sister Lucy is ten. They pack their bags every evening. They read a book on Monday, Wednesday and Friday. On the other days, they play together."
        },
        "t": {
          "type": "table",
          "title": "Sunday visits",
          "headers": [
            "Sunday",
            "Lily",
            "Grace"
          ],
          "rows": [
            [
              "1",
              "✓",
              "✓"
            ],
            [
              "2",
              "✓",
              "—"
            ],
            [
              "3",
              "✓",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no",
          "compact": false
        },
        "c": {
          "type": "dialogue",
          "title": "A weekend job",
          "turns": [
            {
              "name": "Oliver",
              "text": "When do you feed your pet?"
            },
            {
              "name": "Sophie",
              "text": "On Saturday and Sunday. My brother feeds it on school days."
            }
          ]
        },
        "p": {
          "type": "poster",
          "title": "Grandma's special meal",
          "icon": "💌",
          "facts": [
            {
              "icon": "🗓️",
              "label": "When",
              "value": "Every Saturday"
            },
            {
              "icon": "🍽️",
              "label": "Meal",
              "value": "Lunch"
            },
            {
              "icon": "🧥",
              "label": "Bring",
              "value": "Your jacket"
            }
          ]
        },
        "d": {
          "type": "timeline",
          "title": "Jane's bedtime routine",
          "steps": [
            {
              "icon": "🚿",
              "time": "First",
              "action": "Take a shower"
            },
            {
              "icon": "💨",
              "time": "Then",
              "action": "Dry my hair"
            },
            {
              "icon": "🌙",
              "time": "Next",
              "action": "Put on pyjamas"
            },
            {
              "icon": "🛏️",
              "time": "Last",
              "action": "Go to bed"
            }
          ]
        },
        "photo": {
          "type": "reading",
          "title": "Emily yesterday afternoon",
          "text": "Lucy was coming to visit. Emily wanted a tidy room for her friend. Look at Emily's picture.",
          "image": "images/tidying.jpg",
          "alt": "Emily is tidying her room and putting clothes in a box."
        },
        "story": {
          "type": "scene",
          "title": "Yesterday's school show",
          "intro": "Yesterday at four, Lily and Charlie were at a school show.",
          "people": [
            {
              "name": "Lily",
              "icon": "🎤",
              "action": "was singing on the stage"
            },
            {
              "name": "Charlie",
              "icon": "📷",
              "action": "was taking a picture"
            }
          ],
          "end": "Charlie wanted a picture of Lily in her new dress."
        }
      },
      "questions": [
        {
          "source": "t",
          "kind": "table",
          "prompt": "Who visits on all three Sundays?",
          "explanation": "Lily has a tick on all three Sundays.",
          "id": "challenge-1-q1",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Grace visits on all three Sundays.",
            "Lily visits on all three Sundays.",
            "Both children visit on all three Sundays.",
            "Neither child visits on any of these Sundays."
          ],
          "answer": 1
        },
        {
          "source": "c",
          "kind": "dialogue",
          "prompt": "How often does Sophie feed her pet?",
          "explanation": "She feeds it on Saturday and Sunday.",
          "id": "challenge-1-q2",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She feeds her pet every day.",
            "She feeds her pet five times a week.",
            "She feeds her pet once a month.",
            "She feeds her pet twice a week."
          ],
          "answer": 3
        },
        {
          "source": "p",
          "kind": "poster",
          "prompt": "How often is Grandma's special lunch?",
          "explanation": "The invitation says Every Saturday.",
          "id": "challenge-1-q3",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Grandma has her special lunch every day.",
            "Grandma has her special lunch twice a week.",
            "Grandma has her special lunch once a week.",
            "Grandma has her special lunch once a month."
          ],
          "answer": 2
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "What do Ben and Lucy do every evening?",
          "explanation": "They pack their bags every evening.",
          "id": "challenge-1-q4",
          "topic": "routines",
          "group": "sharedRoutine",
          "options": [
            "They pack their bags.",
            "They watch fireworks.",
            "They visit grandparents.",
            "They dress up for a meal."
          ],
          "answer": 0
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "How often do Ben and Lucy read a book together?",
          "explanation": "They read on Monday, Wednesday and Friday.",
          "id": "challenge-1-q5",
          "topic": "frequency",
          "group": "sharedRoutine",
          "options": [
            "They read a book together every day.",
            "They read a book together three times a week.",
            "They read a book together once a week.",
            "They read a book together twice a week."
          ],
          "answer": 1
        },
        {
          "source": "story",
          "kind": "scene",
          "prompt": "Where was Lily singing yesterday?",
          "explanation": "Lily's card says she was singing on the stage.",
          "id": "challenge-1-q6",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "She was singing on a railway.",
            "She was singing in her bedroom.",
            "She was singing on the bus.",
            "She was singing on the stage."
          ],
          "answer": 3
        },
        {
          "source": "story",
          "kind": "inference",
          "prompt": "Why was Charlie using his camera?",
          "explanation": "Charlie wanted a picture of Lily in her new dress.",
          "id": "challenge-1-q7",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "He wanted to feed his pet.",
            "He wanted to read an invitation.",
            "He wanted to take a picture of Lily.",
            "He wanted to buy a new jacket."
          ],
          "answer": 2
        },
        {
          "source": "d",
          "kind": "timeline",
          "prompt": "What does Jane do after drying her hair?",
          "explanation": "Putting on pyjamas is the next step.",
          "id": "challenge-1-q8",
          "topic": "routines",
          "group": "routine",
          "options": [
            "She puts on her pyjamas.",
            "She takes a shower.",
            "She goes to school.",
            "She has breakfast."
          ],
          "answer": 0
        },
        {
          "source": "photo",
          "kind": "picture",
          "prompt": "What was Emily doing in her bedroom?",
          "explanation": "The picture shows Emily putting clothes away.",
          "id": "challenge-1-q9",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "She was reading a book.",
            "She was tidying her room.",
            "She was taking a shower.",
            "She was having dinner."
          ],
          "answer": 1
        },
        {
          "source": "photo",
          "kind": "inference",
          "prompt": "Why did Emily want a tidy room?",
          "explanation": "She was getting the room ready for Lucy.",
          "id": "challenge-1-q10",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "She wanted to go to bed.",
            "She was starting school.",
            "Her grandfather was retiring.",
            "Her friend was coming to visit."
          ],
          "answer": 3
        }
      ]
    },
    {
      "id": "challenge-2",
      "mode": "challenge",
      "title": "Challenge Set 2",
      "sources": {
        "r": {
          "type": "reading",
          "title": "Oliver and Grandpa",
          "text": "Grandpa is an older adult. He retired last year. Every Sunday, Oliver has lunch with him. Before lunch, they always take a picture together. Oliver keeps the pictures in a book."
        },
        "t": {
          "type": "table",
          "title": "Reading after school",
          "headers": [
            "Child",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri"
          ],
          "rows": [
            [
              "Sophie",
              "✓",
              "✓",
              "✓",
              "✓",
              "✓"
            ],
            [
              "Jack",
              "✓",
              "—",
              "✓",
              "—",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no",
          "compact": false
        },
        "c": {
          "type": "dialogue",
          "title": "Getting dressed",
          "turns": [
            {
              "name": "Emily",
              "text": "Do you always wear a sweater to school?"
            },
            {
              "name": "Charlie",
              "text": "Only on cold days. On warm days, I wear a shirt."
            }
          ]
        },
        "p": {
          "type": "poster",
          "title": "Jane's pet care",
          "icon": "🐈",
          "facts": [
            {
              "icon": "🥣",
              "label": "Feed my pet",
              "value": "Every morning"
            },
            {
              "icon": "🥣",
              "label": "Feed my pet again",
              "value": "Every evening"
            }
          ]
        },
        "d": {
          "type": "timeline",
          "title": "Grace's morning",
          "steps": [
            {
              "icon": "⏰",
              "time": "7:00",
              "action": "Turn off the alarm"
            },
            {
              "icon": "🚿",
              "time": "7:10",
              "action": "Take a shower"
            },
            {
              "icon": "👕",
              "time": "7:25",
              "action": "Get dressed"
            },
            {
              "icon": "🥣",
              "time": "7:35",
              "action": "Have breakfast"
            }
          ]
        },
        "photo": {
          "type": "reading",
          "title": "Ben yesterday at seven",
          "text": "“My English test is tomorrow,” Ben said. He felt nervous, so he asked Mum for help. Look at what he was doing.",
          "image": "images/homework.jpg",
          "alt": "Ben is working in a school notebook with a pencil."
        },
        "story": {
          "type": "scene",
          "title": "At the station",
          "intro": "It was cold at the station at eight yesterday.",
          "people": [
            {
              "name": "Lucy",
              "icon": "🧥",
              "action": "was putting on her jacket"
            },
            {
              "name": "Harry",
              "icon": "📖",
              "action": "was reading a book"
            }
          ],
          "end": "The two passengers were waiting for their train."
        }
      },
      "questions": [
        {
          "source": "story",
          "kind": "scene",
          "prompt": "What was Harry doing at the station?",
          "explanation": "Harry's card says he was reading a book.",
          "id": "challenge-2-q1",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "He was putting on a jacket.",
            "He was taking a shower.",
            "He was reading a book.",
            "He was feeding a pet."
          ],
          "answer": 2
        },
        {
          "source": "story",
          "kind": "inference",
          "prompt": "Why was Lucy putting on her jacket?",
          "explanation": "The story says it was cold at the station.",
          "id": "challenge-2-q2",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "The weather was cold.",
            "She wanted to go to bed.",
            "Her book was missing.",
            "She was having breakfast."
          ],
          "answer": 0
        },
        {
          "source": "d",
          "kind": "timeline",
          "prompt": "What does Grace do after her shower?",
          "explanation": "The step after 7:10 is getting dressed.",
          "id": "challenge-2-q3",
          "topic": "routines",
          "group": "routine",
          "options": [
            "She turns off the alarm.",
            "She has breakfast.",
            "She catches the bus.",
            "She gets dressed."
          ],
          "answer": 3
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "What do Oliver and Grandpa do before lunch?",
          "explanation": "They always take a picture before lunch.",
          "id": "challenge-2-q4",
          "topic": "routines",
          "group": "sharedRoutine",
          "options": [
            "They go to bed.",
            "They take a picture.",
            "They take a shower.",
            "They go to school."
          ],
          "answer": 1
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "How often does Oliver have lunch with Grandpa?",
          "explanation": "He visits for lunch every Sunday.",
          "id": "challenge-2-q5",
          "topic": "frequency",
          "group": "sharedRoutine",
          "options": [
            "He has lunch with Grandpa every school day.",
            "He has lunch with Grandpa twice a week.",
            "He has lunch with Grandpa once a week.",
            "He has lunch with Grandpa once a month."
          ],
          "answer": 2
        },
        {
          "source": "photo",
          "kind": "picture",
          "prompt": "What was Ben doing for his English test?",
          "explanation": "The test is tomorrow, and Ben is working in his notebook.",
          "id": "challenge-2-q6",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "He was studying for a test.",
            "He was feeding his pet.",
            "He was combing his hair.",
            "He was having a special meal."
          ],
          "answer": 0
        },
        {
          "source": "photo",
          "kind": "inference",
          "prompt": "Why did Ben ask Mum for help?",
          "explanation": "Ben felt nervous about his English test.",
          "id": "challenge-2-q7",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "He wanted a new sweater.",
            "He was hungry after lunch.",
            "He wanted to catch a train.",
            "He felt nervous about the test."
          ],
          "answer": 3
        },
        {
          "source": "t",
          "kind": "table",
          "prompt": "Who reads on every school day shown?",
          "explanation": "Sophie has five ticks, one for each school day.",
          "id": "challenge-2-q8",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Jack reads on every school day shown.",
            "Sophie reads on every school day shown.",
            "Both children read on every school day shown.",
            "Neither child reads on any school day shown."
          ],
          "answer": 1
        },
        {
          "source": "c",
          "kind": "dialogue",
          "prompt": "Which sentence matches Charlie's clothes?",
          "explanation": "He wears a sweater on cold days but not on warm days.",
          "id": "challenge-2-q9",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "He always wears a sweater.",
            "He never wears a sweater.",
            "He sometimes wears a sweater.",
            "He only wears a shirt on cold days."
          ],
          "answer": 2
        },
        {
          "source": "p",
          "kind": "poster",
          "prompt": "How often does Jane feed her pet each day?",
          "explanation": "She feeds it in the morning and again in the evening.",
          "id": "challenge-2-q10",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She feeds her pet twice a day.",
            "She feeds her pet once a day.",
            "She feeds her pet three times a day.",
            "She feeds her pet four times a day."
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": "mock-1",
      "mode": "mock",
      "title": "Mock Exam 1",
      "sources": {
        "r": {
          "type": "reading",
          "title": "Jane's school week",
          "text": "Jane always has breakfast before school. Then she brushes her teeth and combs her hair. She visits her grandparents on Monday and Thursday. On the other school days, she goes straight home."
        },
        "t": {
          "type": "table",
          "title": "Tom feeds his pet",
          "headers": [
            "Activity",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri"
          ],
          "rows": [
            [
              "Feeds his pet",
              "✓",
              "✓",
              "✓",
              "✓",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no",
          "compact": true
        },
        "c": {
          "type": "dialogue",
          "title": "Emily's alarm",
          "turns": [
            {
              "name": "Oscar",
              "text": "Do you turn off your alarm in the morning?"
            },
            {
              "name": "Emily",
              "text": "Yes, every morning. Then I wake up and get dressed."
            }
          ]
        },
        "p": {
          "type": "poster",
          "title": "A family invitation",
          "icon": "💌",
          "facts": [
            {
              "icon": "🗓️",
              "label": "When",
              "value": "Every Friday"
            },
            {
              "icon": "🍽️",
              "label": "What",
              "value": "A special dinner"
            },
            {
              "icon": "👨‍👩‍👧",
              "label": "Who",
              "value": "Adults and children"
            }
          ]
        },
        "d": {
          "type": "timeline",
          "title": "Charlie's morning jobs",
          "steps": [
            {
              "icon": "🐕",
              "time": "First",
              "action": "Feed my pet"
            },
            {
              "icon": "🥣",
              "time": "Then",
              "action": "Have breakfast"
            },
            {
              "icon": "🪥",
              "time": "Next",
              "action": "Brush my teeth"
            },
            {
              "icon": "🎒",
              "time": "Last",
              "action": "Pack my bag"
            }
          ]
        },
        "photo": {
          "type": "reading",
          "title": "Sophie yesterday at 12:30",
          "text": "After lunch, Sophie's class was going to the circus. Sophie felt excited. Look at what she was doing at 12:30.",
          "image": "images/lunch.jpg",
          "alt": "Sophie is sitting at a table and eating a sandwich for lunch."
        },
        "story": {
          "type": "scene",
          "title": "Grandpa's party",
          "intro": "Grandpa retired last week. Yesterday, the family had a party for him.",
          "people": [
            {
              "name": "Grandpa",
              "icon": "🍽️",
              "action": "was having a special meal"
            },
            {
              "name": "Grace",
              "icon": "🍬",
              "action": "was putting sweets on a plate"
            }
          ],
          "end": "Everyone was happy to celebrate with Grandpa."
        }
      },
      "questions": [
        {
          "source": "d",
          "kind": "timeline",
          "prompt": "What is Charlie's last morning job?",
          "explanation": "Packing his bag is the final step.",
          "id": "mock-1-q1",
          "topic": "routines",
          "group": "routine",
          "options": [
            "He packs his bag.",
            "He feeds his pet.",
            "He has breakfast.",
            "He brushes his teeth."
          ],
          "answer": 0
        },
        {
          "source": "photo",
          "kind": "picture",
          "prompt": "What was Sophie doing at 12:30 yesterday?",
          "explanation": "The picture shows Sophie eating lunch.",
          "id": "mock-1-q2",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "She was watching fireworks.",
            "She was getting dressed.",
            "She was visiting the circus.",
            "She was having lunch."
          ],
          "answer": 3
        },
        {
          "source": "photo",
          "kind": "inference",
          "prompt": "Why was Sophie excited about the afternoon?",
          "explanation": "Her class was going to the circus after lunch.",
          "id": "mock-1-q3",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "She had to study for a test.",
            "She lost her lunch.",
            "She was going to the circus.",
            "She needed to brush her teeth."
          ],
          "answer": 2
        },
        {
          "source": "t",
          "kind": "table",
          "prompt": "Which sentence describes Tom's pet care?",
          "explanation": "Each school day has a tick.",
          "id": "mock-1-q4",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "He feeds his pet only on Friday.",
            "He feeds his pet every school day.",
            "He never feeds his pet on Monday.",
            "He feeds his pet twice this week."
          ],
          "answer": 1
        },
        {
          "source": "c",
          "kind": "dialogue",
          "prompt": "Which sentence matches Emily's alarm habit?",
          "explanation": "Emily turns it off every morning.",
          "id": "mock-1-q5",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She always turns off her alarm in the morning.",
            "She sometimes turns off her alarm in the morning.",
            "She never turns off her alarm in the morning.",
            "She rarely turns off her alarm in the morning."
          ],
          "answer": 0
        },
        {
          "source": "p",
          "kind": "poster",
          "prompt": "How often is the family's special dinner?",
          "explanation": "Every Friday means once a week.",
          "id": "mock-1-q6",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "They have a special dinner every day.",
            "They have a special dinner twice a week.",
            "They have a special dinner once a month.",
            "They have a special dinner once a week."
          ],
          "answer": 3
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "What does Jane always do before school?",
          "explanation": "Jane always has breakfast before school.",
          "id": "mock-1-q7",
          "topic": "routines",
          "group": "sharedRoutine",
          "options": [
            "She has dinner.",
            "She has breakfast.",
            "She dresses up for a party.",
            "She watches fireworks."
          ],
          "answer": 1
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "How often does Jane visit her grandparents in her school week?",
          "explanation": "She visits on Monday and Thursday: twice.",
          "id": "mock-1-q8",
          "topic": "frequency",
          "group": "sharedRoutine",
          "options": [
            "She visits her grandparents every school day.",
            "She visits her grandparents three times a week.",
            "She visits her grandparents twice a week.",
            "She visits her grandparents once a week."
          ],
          "answer": 2
        },
        {
          "source": "story",
          "kind": "scene",
          "prompt": "What was Grace doing at Grandpa's party?",
          "explanation": "Grace's card shows her putting sweets on a plate.",
          "id": "mock-1-q9",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "She was putting sweets on a plate.",
            "She was having a shower.",
            "She was reading a book.",
            "She was packing her bag."
          ],
          "answer": 0
        },
        {
          "source": "story",
          "kind": "inference",
          "prompt": "Why did the family have a party for Grandpa?",
          "explanation": "The family was celebrating Grandpa's retirement.",
          "id": "mock-1-q10",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "It was his birthday.",
            "He got a new job.",
            "He was going on holiday.",
            "He retired last week."
          ],
          "answer": 3
        }
      ]
    },
    {
      "id": "mock-2",
      "mode": "mock",
      "title": "Mock Exam 2",
      "sources": {
        "r": {
          "type": "reading",
          "title": "Harry gets ready",
          "text": "Harry wakes up at seven. He takes a shower, dries his hair and gets dressed. He always reads a book before bed. His baby sister was born last month."
        },
        "t": {
          "type": "table",
          "title": "Emily's weekly activities",
          "headers": [
            "Activity",
            "Mon",
            "Wed",
            "Fri"
          ],
          "rows": [
            [
              "📖 Read a book",
              "✓",
              "✓",
              "✓"
            ],
            [
              "📷 Take a picture",
              "—",
              "✓",
              "—"
            ]
          ],
          "note": "✓ = yes   — = no",
          "compact": false
        },
        "c": {
          "type": "dialogue",
          "title": "Aunt Jane's invitations",
          "turns": [
            {
              "name": "Jack",
              "text": "Do you always accept Aunt Jane's dinner invitations?"
            },
            {
              "name": "Lucy",
              "text": "Not always. Sometimes we are busy and refuse."
            }
          ]
        },
        "p": {
          "type": "poster",
          "title": "School graduation party",
          "icon": "🎓",
          "facts": [
            {
              "icon": "🗓️",
              "label": "When",
              "value": "Every June"
            },
            {
              "icon": "🎤",
              "label": "Where",
              "value": "On the school stage"
            },
            {
              "icon": "👨‍🎓",
              "label": "Who",
              "value": "Students who graduate"
            }
          ]
        },
        "d": {
          "type": "timeline",
          "title": "Ben goes to school",
          "steps": [
            {
              "icon": "🥣",
              "time": "7:20",
              "action": "Have breakfast"
            },
            {
              "icon": "🪥",
              "time": "7:35",
              "action": "Brush teeth"
            },
            {
              "icon": "🧥",
              "time": "7:45",
              "action": "Put on a jacket"
            },
            {
              "icon": "🚌",
              "time": "8:00",
              "action": "Catch the bus"
            }
          ]
        },
        "photo": {
          "type": "reading",
          "title": "Daniel yesterday at three",
          "text": "Tom was standing behind Daniel. “I don't want to be in your picture!” Tom said. Look at Daniel's picture.",
          "image": "images/photos.jpg",
          "alt": "Daniel is taking a picture with a camera near a lake."
        },
        "story": {
          "type": "scene",
          "title": "Getting ready for school",
          "intro": "Yesterday at six, Lucy and her brother were at home.",
          "people": [
            {
              "name": "Lucy",
              "icon": "🎒",
              "action": "was packing her bag"
            },
            {
              "name": "Tom",
              "icon": "🪮",
              "action": "was combing his hair"
            }
          ],
          "end": "Lucy starts school tomorrow. She feels happy and excited."
        }
      },
      "questions": [
        {
          "source": "r",
          "kind": "reading",
          "prompt": "What does Harry do after his shower?",
          "explanation": "He showers, dries his hair and then gets dressed.",
          "id": "mock-2-q1",
          "topic": "routines",
          "group": "sharedRoutine",
          "options": [
            "He reads a book.",
            "He goes to bed.",
            "He has dinner.",
            "He dries his hair."
          ],
          "answer": 3
        },
        {
          "source": "r",
          "kind": "reading",
          "prompt": "Which sentence matches Harry's bedtime habit?",
          "explanation": "The text says he always reads before bed.",
          "id": "mock-2-q2",
          "topic": "frequency",
          "group": "sharedRoutine",
          "options": [
            "He always reads before bed.",
            "He never reads before bed.",
            "He reads only on Sundays.",
            "He reads only on Fridays."
          ],
          "answer": 0
        },
        {
          "source": "story",
          "kind": "scene",
          "prompt": "What was Lucy doing yesterday at six?",
          "explanation": "Lucy's card says she was packing her bag.",
          "id": "mock-2-q3",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "She was combing her hair.",
            "She was packing her bag.",
            "She was having lunch.",
            "She was feeding a pet."
          ],
          "answer": 1
        },
        {
          "source": "story",
          "kind": "inference",
          "prompt": "Why was Lucy getting her school bag ready?",
          "explanation": "Lucy is preparing for her first day at school.",
          "id": "mock-2-q4",
          "topic": "pastContinuous",
          "group": "pastStory2",
          "options": [
            "She is visiting her grandparents.",
            "She is going to the circus.",
            "She starts school tomorrow.",
            "She is having a special meal."
          ],
          "answer": 2
        },
        {
          "source": "t",
          "kind": "table",
          "prompt": "How often does Emily take a picture in the days shown?",
          "explanation": "Only Wednesday has a tick for taking a picture.",
          "id": "mock-2-q5",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "She takes a picture three times in the days shown.",
            "She takes a picture twice in the days shown.",
            "She takes a picture every day shown.",
            "She takes a picture once in the days shown."
          ],
          "answer": 3
        },
        {
          "source": "c",
          "kind": "dialogue",
          "prompt": "Which sentence is true about Lucy's family?",
          "explanation": "Sometimes they are busy, so they refuse.",
          "id": "mock-2-q6",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "They sometimes refuse invitations.",
            "They always refuse invitations.",
            "They never accept invitations.",
            "They always accept every invitation."
          ],
          "answer": 0
        },
        {
          "source": "p",
          "kind": "poster",
          "prompt": "How often does the school have this graduation party?",
          "explanation": "Every June means the party is held once each year.",
          "id": "mock-2-q7",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "The school has this graduation party once a week.",
            "The school has this graduation party every day.",
            "The school has this graduation party once a year.",
            "The school has this graduation party twice a month."
          ],
          "answer": 2
        },
        {
          "source": "photo",
          "kind": "picture",
          "prompt": "What was Daniel doing yesterday at three?",
          "explanation": "The picture shows Daniel using a camera.",
          "id": "mock-2-q8",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "He was studying for a test.",
            "He was taking a picture.",
            "He was combing his hair.",
            "He was having dinner."
          ],
          "answer": 1
        },
        {
          "source": "photo",
          "kind": "inference",
          "prompt": "Why was Tom behind Daniel?",
          "explanation": "Tom says he does not want to appear in the picture.",
          "id": "mock-2-q9",
          "topic": "pastContinuous",
          "group": "pastStory1",
          "options": [
            "He wanted to feed a pet.",
            "He was going to bed.",
            "He wanted to wear a hat.",
            "He did not want to be in the picture."
          ],
          "answer": 3
        },
        {
          "source": "d",
          "kind": "timeline",
          "prompt": "What does Ben do at 7:35?",
          "explanation": "Brushing his teeth is shown at 7:35.",
          "id": "mock-2-q10",
          "topic": "routines",
          "group": "routine",
          "options": [
            "He brushes his teeth.",
            "He catches the bus.",
            "He has breakfast.",
            "He puts on his jacket."
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": "challenge-3",
      "mode": "challenge",
      "title": "Challenge Set 3",
      "isNew": true,
      "sources": {
        "s1": {
          "type": "table",
          "title": "Grace’s school mornings",
          "headers": [
            "Time",
            "Activity"
          ],
          "rows": [
            [
              "7:00",
              "Get up"
            ],
            [
              "7:15",
              "Have breakfast"
            ],
            [
              "7:30",
              "Brush teeth"
            ],
            [
              "7:45",
              "Catch the bus"
            ]
          ]
        },
        "s2": {
          "type": "table",
          "title": "Tom’s pet care",
          "headers": [
            "Day",
            "Feed the dog",
            "Walk the dog"
          ],
          "rows": [
            [
              "Monday",
              "✓",
              "✓"
            ],
            [
              "Tuesday",
              "✓",
              "—"
            ],
            [
              "Wednesday",
              "✓",
              "✓"
            ],
            [
              "Thursday",
              "✓",
              "—"
            ],
            [
              "Friday",
              "✓",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no"
        },
        "s3": {
          "type": "dialogue",
          "title": "At home yesterday",
          "turns": [
            {
              "name": "Lucy: ",
              "text": "What were you doing when Dad came home?"
            },
            {
              "name": "Ben: ",
              "text": "I was making a sandwich. My sister was reading."
            },
            {
              "name": "Lucy: ",
              "text": "Who was reading?"
            }
          ]
        },
        "s4": {
          "type": "reading",
          "title": "A busy afternoon",
          "text": "Yesterday at four, Lily was at the park. Lily is the girl with red hair.",
          "image": "images/park-activities.jpg",
          "alt": "A red-haired girl reading and three other children cycling, painting and playing football in a park."
        },
        "s5": {
          "type": "timeline",
          "title": "Oliver’s evening",
          "steps": [
            {
              "icon": "🍽️",
              "time": "First",
              "action": "Have dinner"
            },
            {
              "icon": "🎒",
              "time": "Then",
              "action": "Pack school bag"
            },
            {
              "icon": "🪥",
              "time": "Next",
              "action": "Brush teeth"
            },
            {
              "icon": "🛏️",
              "time": "Last",
              "action": "Go to bed"
            }
          ]
        },
        "s6": {
          "type": "reading",
          "title": "A rainy morning",
          "text": "Emily usually walks to school. Today it is raining, so her dad takes her to school by car."
        },
        "s7": {
          "type": "table",
          "title": "Jack’s reading",
          "headers": [
            "Day",
            "Reads a book"
          ],
          "rows": [
            [
              "Monday",
              "✓"
            ],
            [
              "Tuesday",
              "—"
            ],
            [
              "Wednesday",
              "✓"
            ],
            [
              "Thursday",
              "—"
            ],
            [
              "Friday",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no"
        },
        "s8": {
          "type": "dialogue",
          "title": "A phone call",
          "turns": [
            {
              "name": "Harry: ",
              "text": "I called you at six. Were you playing football?"
            },
            {
              "name": "Daniel: ",
              "text": "No, I wasn’t. I was feeding my dog."
            },
            {
              "name": "Harry: ",
              "text": "Oh, was your dog hungry?"
            },
            {
              "name": "Daniel: ",
              "text": "Yes, he was!"
            }
          ]
        },
        "s9": {
          "type": "timeline",
          "title": "Saturday at home",
          "steps": [
            {
              "icon": "🧹",
              "time": "10:00",
              "action": "Lily starts tidying her room"
            },
            {
              "icon": "📞",
              "time": "10:15",
              "action": "Grace calls Lily"
            },
            {
              "icon": "✅",
              "time": "10:30",
              "action": "Lily finishes tidying her room"
            }
          ]
        },
        "s10": {
          "type": "reading",
          "title": "Before school",
          "text": "Sophie puts her books in her bag every evening. In the morning, her bag is ready for school."
        }
      },
      "questions": [
        {
          "source": "s1",
          "kind": "table",
          "prompt": "What does Grace do between breakfast and catching the bus?",
          "explanation": "Grace brushes her teeth at 7:30.",
          "id": "challenge-3-q1",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She brushes her teeth.",
            "She gets up.",
            "She has dinner.",
            "She goes to bed."
          ],
          "answer": 0
        },
        {
          "source": "s2",
          "kind": "table",
          "prompt": "Which sentence is correct?",
          "explanation": "Tom feeds his dog on all five days in the table.",
          "id": "challenge-3-q2",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Tom walks the dog every day shown.",
            "Tom feeds the dog every day shown.",
            "Tom never feeds the dog.",
            "Tom walks the dog on Tuesday."
          ],
          "answer": 1
        },
        {
          "source": "s3",
          "kind": "dialogue",
          "prompt": "What is the best answer to Lucy’s question?",
          "explanation": "Ben says his sister was reading.",
          "id": "challenge-3-q3",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "Dad was reading.",
            "Ben was reading.",
            "Ben’s sister was reading.",
            "Lucy was reading."
          ],
          "answer": 2
        },
        {
          "source": "s4",
          "kind": "picture",
          "prompt": "What was Lily doing?",
          "explanation": "The red-haired girl is reading a book.",
          "id": "challenge-3-q4",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "She was cycling.",
            "She was painting.",
            "She was playing football.",
            "She was reading."
          ],
          "answer": 3
        },
        {
          "source": "s5",
          "kind": "timeline",
          "prompt": "What does Oliver do just before he brushes his teeth?",
          "explanation": "Packing his school bag comes just before brushing his teeth.",
          "id": "challenge-3-q5",
          "topic": "routines",
          "group": "routines",
          "options": [
            "He packs his school bag.",
            "He goes to bed.",
            "He has breakfast.",
            "He gets dressed."
          ],
          "answer": 0
        },
        {
          "source": "s6",
          "kind": "inference",
          "prompt": "Why does Emily go to school by car today?",
          "explanation": "Emily goes by car because it is raining.",
          "id": "challenge-3-q6",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She is going swimming.",
            "It is raining.",
            "She is walking with her dad.",
            "It is Saturday."
          ],
          "answer": 1
        },
        {
          "source": "s7",
          "kind": "table",
          "prompt": "How often does Jack read a book on the days shown?",
          "explanation": "The table shows three reading days: Monday, Wednesday and Friday.",
          "id": "challenge-3-q7",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "He reads every day.",
            "He never reads.",
            "He reads on three days.",
            "He reads on one day."
          ],
          "answer": 2
        },
        {
          "source": "s8",
          "kind": "dialogue",
          "prompt": "What was Daniel doing at six?",
          "explanation": "Daniel says he was feeding his dog.",
          "id": "challenge-3-q8",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "He was playing football.",
            "He was calling Harry.",
            "He was eating dinner.",
            "He was feeding his dog."
          ],
          "answer": 3
        },
        {
          "source": "s9",
          "kind": "timeline",
          "prompt": "What was Lily doing when Grace called?",
          "explanation": "Grace called between the start and the end of Lily’s tidying.",
          "id": "challenge-3-q9",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "She was tidying her room.",
            "She was going to bed.",
            "She was riding a bike.",
            "She was having lunch."
          ],
          "answer": 0
        },
        {
          "source": "s10",
          "kind": "inference",
          "prompt": "Why is Sophie’s bag ready in the morning?",
          "explanation": "Sophie puts her books in her bag every evening.",
          "id": "challenge-3-q10",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She buys new books every morning.",
            "She packs her bag every evening.",
            "She leaves her books at school.",
            "She never takes books to school."
          ],
          "answer": 1
        }
      ]
    },
    {
      "id": "mock-3",
      "mode": "mock",
      "title": "Mock Exam 3",
      "isNew": true,
      "sources": {
        "s1": {
          "type": "table",
          "title": "Emily’s week",
          "headers": [
            "Day",
            "After school"
          ],
          "rows": [
            [
              "Monday",
              "📚 Library"
            ],
            [
              "Tuesday",
              "🏊 Swimming"
            ],
            [
              "Wednesday",
              "🎨 Art club"
            ]
          ]
        },
        "s2": {
          "type": "dialogue",
          "title": "A school morning",
          "turns": [
            {
              "name": "Sophie: ",
              "text": "Do you walk to school every day?"
            },
            {
              "name": "Jack: ",
              "text": "No. I walk on Monday and Tuesday. On the other days, I catch the bus."
            }
          ]
        },
        "s3": {
          "type": "timeline",
          "title": "Grace’s bedtime",
          "steps": [
            {
              "icon": "🚿",
              "time": "First",
              "action": "Take a shower"
            },
            {
              "icon": "🪥",
              "time": "Then",
              "action": "Brush teeth"
            },
            {
              "icon": "👕",
              "time": "Next",
              "action": "Put on pyjamas"
            },
            {
              "icon": "🛏️",
              "time": "Last",
              "action": "Go to bed"
            }
          ]
        },
        "s4": {
          "type": "reading",
          "title": "Yesterday in the kitchen",
          "text": "Yesterday at six, Emily was helping at home. Look at the picture.",
          "image": "images/dishes.jpg",
          "alt": "A girl washing dishes in the kitchen."
        },
        "s5": {
          "type": "reading",
          "title": "An evening at home",
          "text": "Yesterday at seven, Tom was doing his homework. His brother was feeding their cat."
        },
        "s6": {
          "type": "table",
          "title": "Lucy’s breakfast",
          "headers": [
            "Day",
            "Has breakfast"
          ],
          "rows": [
            [
              "Monday",
              "✓"
            ],
            [
              "Tuesday",
              "✓"
            ],
            [
              "Wednesday",
              "✓"
            ],
            [
              "Thursday",
              "✓"
            ],
            [
              "Friday",
              "✓"
            ]
          ],
          "note": "✓ = yes"
        },
        "s7": {
          "type": "dialogue",
          "title": "After school",
          "turns": [
            {
              "name": "Ben: ",
              "text": "Would you like to play football now?"
            },
            {
              "name": "Harry: ",
              "text": "I can’t now. I’m doing my homework."
            },
            {
              "name": "Ben: ",
              "text": "That’s OK. We can play later."
            }
          ]
        },
        "s8": {
          "type": "timeline",
          "title": "Yesterday afternoon",
          "steps": [
            {
              "icon": "📖",
              "time": "4:00",
              "action": "Daniel starts reading"
            },
            {
              "icon": "🚪",
              "time": "4:15",
              "action": "Mum comes home"
            },
            {
              "icon": "✅",
              "time": "4:30",
              "action": "Daniel finishes reading"
            }
          ]
        },
        "s9": {
          "type": "table",
          "title": "Tom and Oliver’s routines",
          "headers": [
            "Activity",
            "Tom",
            "Oliver"
          ],
          "rows": [
            [
              "Make the bed",
              "✓",
              "✓"
            ],
            [
              "Feed a pet",
              "✓",
              "—"
            ],
            [
              "Walk to school",
              "—",
              "✓"
            ]
          ],
          "note": "✓ = yes   — = no"
        },
        "s10": {
          "type": "reading",
          "title": "A wet day",
          "text": "It is raining outside. Lily takes her umbrella before she walks to school."
        }
      },
      "questions": [
        {
          "source": "s1",
          "kind": "table",
          "prompt": "What does Emily do after school on Wednesday?",
          "explanation": "The table shows art club on Wednesday.",
          "id": "mock-3-q1",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She goes swimming.",
            "She goes to the library.",
            "She goes to art club.",
            "She plays football."
          ],
          "answer": 2
        },
        {
          "source": "s2",
          "kind": "dialogue",
          "prompt": "Which sentence is correct?",
          "explanation": "Jack walks on two days and catches the bus on the others.",
          "id": "mock-3-q2",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Jack never walks to school.",
            "Jack always walks to school.",
            "Jack catches the bus every day.",
            "Jack sometimes walks to school."
          ],
          "answer": 3
        },
        {
          "source": "s3",
          "kind": "timeline",
          "prompt": "What does Grace do after brushing her teeth?",
          "explanation": "Putting on pyjamas comes after brushing teeth.",
          "id": "mock-3-q3",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She puts on her pyjamas.",
            "She takes a shower.",
            "She goes to school.",
            "She has breakfast."
          ],
          "answer": 0
        },
        {
          "source": "s4",
          "kind": "picture",
          "prompt": "What was Emily doing?",
          "explanation": "The picture shows Emily washing the dishes.",
          "id": "mock-3-q4",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "She was reading a book.",
            "She was washing the dishes.",
            "She was painting a picture.",
            "She was playing football."
          ],
          "answer": 1
        },
        {
          "source": "s5",
          "kind": "reading",
          "prompt": "What was Tom’s brother doing?",
          "explanation": "Tom’s brother was feeding their cat.",
          "id": "mock-3-q5",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "He was doing homework.",
            "He was reading a book.",
            "He was feeding the cat.",
            "He was having breakfast."
          ],
          "answer": 2
        },
        {
          "source": "s6",
          "kind": "table",
          "prompt": "Which sentence matches the table?",
          "explanation": "There is a tick for every day shown.",
          "id": "mock-3-q6",
          "topic": "frequency",
          "group": "frequency",
          "options": [
            "Lucy never has breakfast.",
            "Lucy has breakfast on Monday only.",
            "Lucy has breakfast on three days.",
            "Lucy has breakfast every day shown."
          ],
          "answer": 3
        },
        {
          "source": "s7",
          "kind": "dialogue",
          "prompt": "Why can’t Harry play now?",
          "explanation": "Harry says he is doing his homework.",
          "id": "mock-3-q7",
          "topic": "routines",
          "group": "routines",
          "options": [
            "He is doing his homework.",
            "He is feeding his dog.",
            "He is at the library.",
            "He is going to bed."
          ],
          "answer": 0
        },
        {
          "source": "s8",
          "kind": "timeline",
          "prompt": "What was Daniel doing when Mum came home?",
          "explanation": "Mum came home while Daniel was reading.",
          "id": "mock-3-q8",
          "topic": "pastContinuous",
          "group": "pastContinuous",
          "options": [
            "He was eating lunch.",
            "He was reading.",
            "He was playing tennis.",
            "He was taking a shower."
          ],
          "answer": 1
        },
        {
          "source": "s9",
          "kind": "table",
          "prompt": "What do both boys do?",
          "explanation": "Both boys have a tick for making the bed.",
          "id": "mock-3-q9",
          "topic": "routines",
          "group": "routines",
          "options": [
            "They feed a pet.",
            "They walk to school.",
            "They make the bed.",
            "They catch the bus."
          ],
          "answer": 2
        },
        {
          "source": "s10",
          "kind": "inference",
          "prompt": "Why does Lily take an umbrella?",
          "explanation": "An umbrella helps Lily stay dry in the rain.",
          "id": "mock-3-q10",
          "topic": "routines",
          "group": "routines",
          "options": [
            "She wants to play tennis.",
            "She is going swimming.",
            "She wants to read a book.",
            "She wants to stay dry."
          ],
          "answer": 3
        }
      ]
    }
  ]
};
