

// Learning Paths Data Structure
// This contains structured learning paths for Mississippi College- and Career-Readiness Standards (MCCRS)
// Enhanced with 3-8 questions per grade level, aligned with Mississippi standards

class LearningPathData {
  constructor() {
    this.paths = {
      'Pre-K': {
        'Math': [
          {
            id: 'math-prek-1',
            title: 'Counting and Numbers',
            description: 'Learn to count and recognize numbers 1-10. Students will develop number sense through hands-on counting activities and number recognition exercises. This foundational skill prepares children for more advanced mathematical concepts.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.PK.1 - Count to 10',
                content: '<h3>Learning to Count</h3><p>Let\'s count from 1 to 10 together! Counting is one of the first math skills we learn. When we count, we say each number in order. Practice counting every day with toys, snacks, or your fingers. The more you practice, the better you\'ll get at counting!</p><p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How many fingers are on one hand?', options: ['3', '5', '7', '10'], correctAnswer: '5', hints: ['Count your fingers', 'Five']},
                  { id: 'q2', type: 'multiple-choice', question: 'How many toes are on one foot?', options: ['3', '5', '7', '10'], correctAnswer: '5', hints: ['Count your toes', 'Five toes']},
                  { id: 'q3', type: 'multiple-choice', question: 'What comes after 7?', options: ['6', '8', '9', '10'], correctAnswer: '8', hints: ['Count up', 'Next number']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Count the stars: ⭐⭐ How many?', correctAnswer: '2', hints: ['Count the stars', 'Two stars']},
                  { id: 'q5', type: 'multiple-choice', question: 'If you have 4 toys and get 1 more, how many toys?', options: ['3', '4', '5', '6'], correctAnswer: '5', hints: ['Count up', '4 + 1']},
                  { id: 'q6', type: 'multiple-choice', question: 'What number comes before 5?', options: ['3', '4', '5', '6'], correctAnswer: '4', hints: ['Count backwards', 'One less']},
                  { id: 'q7', type: 'multiple-choice', question: 'Count the circles: ⭕⭕⭕ How many?', options: ['2', '3', '4', '5'], correctAnswer: '3', hints: ['Count each circle', 'Three circles']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the biggest number: 3, 7, or 10?', options: ['3', '7', '10', 'All same'], correctAnswer: '10', hints: ['Count to find the highest', 'Ten is biggest']}
                ],
                activity: { type: 'interactive-practice', description: 'Count objects', instruction: 'Count items together'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.PK.2 - Recognize numbers',
                content: '<h3>Number Recognition</h3><p>Let\'s learn to recognize the numbers 1, 2, 3, 4, and 5. Each number has its own special shape. When you see a number, you can say its name. Numbers help us count things and tell how many we have. Practice looking at numbers and saying their names out loud. Soon you\'ll recognize all the numbers from 1 to 10!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which number comes after 3?', options: ['2', '4', '5', '6'], correctAnswer: '4', hints: ['Next number', 'After three']},
                  { id: 'q2', type: 'multiple-choice', question: 'What number looks like this: 2?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Two', hints: ['Count to two', 'Number 2']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which number is the biggest: 1, 3, or 5?', options: ['1', '3', '5', 'All same'], correctAnswer: '5', hints: ['Count up', 'Highest number']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Point to the number 3. What is it?', correctAnswer: '3 or three', hints: ['After two', 'Before four']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which number comes before 4?', options: ['2', '3', '5', '6'], correctAnswer: '3', hints: ['Before four', 'One less than 4']},
                  { id: 'q6', type: 'multiple-choice', question: 'What number is this: 1?', options: ['Zero', 'One', 'Two', 'Three'], correctAnswer: 'One', hints: ['First number', 'One']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which number is smallest: 2, 5, or 1?', options: ['2', '5', '1', 'All same'], correctAnswer: '1', hints: ['Count from smallest', 'One is smallest']}
                ],
                activity: { type: 'interactive-practice', description: 'Find numbers', instruction: 'Point to numbers'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.PK.3 - Count objects',
                content: '<h3>Counting Objects</h3><p>Let\'s count real objects like toys and blocks! When we count objects, we point to each one and say a number. We start with 1 and count up. Make sure to count each object only once. Counting objects helps us know how many things we have. Try counting your favorite toys at home!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'If you have 3 apples and get 1 more, how many do you have?', correctAnswer: '4', hints: ['Count up', '3 + 1']},
                  { id: 'q2', type: 'multiple-choice', question: 'Count: 🧸🧸🧸 How many bears?', options: ['2', '3', '4', '5'], correctAnswer: '3', hints: ['Count them', 'Three']},
                  { id: 'q3', type: 'multiple-choice', question: 'Count: ⚽⚽ How many balls?', options: ['1', '2', '3', '4'], correctAnswer: '2', hints: ['Count the balls', 'Two']},
                  { id: 'q4', type: 'fill-in-blank', question: 'If you have 2 blocks and add 2 more, how many blocks?', correctAnswer: '4', hints: ['Count them all', '2 + 2']},
                  { id: 'q5', type: 'multiple-choice', question: 'If you count 5 toys, which number did you count to?', options: ['3', '4', '5', '6'], correctAnswer: '5', hints: ['You counted to five', 'Five toys']},
                  { id: 'q6', type: 'multiple-choice', question: 'Count: 🍎 How many apples?', options: ['0', '1', '2', '3'], correctAnswer: '1', hints: ['Only one apple', 'One']},
                  { id: 'q7', type: 'multiple-choice', question: 'Count: 🚗🚗🚗🚗 How many cars?', options: ['3', '4', '5', '6'], correctAnswer: '4', hints: ['Count each car', 'Four cars']},
                  { id: 'q8', type: 'fill-in-blank', question: 'If you have 1 cookie and get 3 more, how many cookies?', correctAnswer: '4', hints: ['Add them together', '1 + 3']}
                ],
                activity: { type: 'interactive-practice', description: 'Count toys', instruction: 'Count your toys'}
              },
              {
                id: 'lesson-4',
                objective: 'MCCRS.Math.PK.4 - Understand more and less',
                content: '<h3>More and Less</h3><p>Let\'s learn about "more" and "less"! When one group has more, it has a bigger number of things. When one group has less, it has a smaller number of things. We can compare two groups by counting them. The group with the bigger number has more. Understanding more and less helps us compare amounts in everyday life!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is more: 3 or 5?', options: ['3', '5', 'Same', 'Neither'], correctAnswer: '5', hints: ['Count higher', 'Five is more']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is less: 2 or 4?', options: ['2', '4', 'Same', 'Neither'], correctAnswer: '2', hints: ['Smaller number', 'Two is less']},
                  { id: 'q3', type: 'multiple-choice', question: 'Do you have more if you have 4 apples or 1 apple?', options: ['4 apples', '1 apple', 'Same', 'Cannot tell'], correctAnswer: '4 apples', hints: ['Which number is bigger?', 'Four is more than one']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which group has less: ⭐⭐ or ⭐⭐⭐⭐?', options: ['Two stars', 'Four stars', 'Same', 'Neither'], correctAnswer: 'Two stars', hints: ['Count each group', 'Two is less']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which is more: 7 or 3?', options: ['7', '3', 'Same', 'Neither'], correctAnswer: '7', hints: ['Seven is bigger', 'Count up to seven']},
                  { id: 'q6', type: 'multiple-choice', question: 'If you have 5 crayons and your friend has 2, who has more?', options: ['You', 'Friend', 'Same', 'Cannot tell'], correctAnswer: 'You', hints: ['Compare 5 and 2', 'Five is more than two']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which is less: 6 or 10?', options: ['6', '10', 'Same', 'Neither'], correctAnswer: '6', hints: ['Six is smaller', 'Less than ten']}
                ],
                activity: { type: 'interactive-practice', description: 'Compare amounts', instruction: 'Find more and less'}
              }
            ]
          },
          {
            id: 'math-prek-2',
            title: 'Shapes and Patterns',
            description: 'Identify and create basic shapes and patterns. Students will explore circles, squares, triangles, and rectangles while learning to recognize and extend simple patterns. These visual and spatial skills are essential building blocks for geometry and logical thinking.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.PK.5 - Identify shapes',
                content: '<h3>Basic Shapes</h3><p>Let\'s learn about shapes! Shapes are all around us. A circle is round like a ball or the sun. A square has four equal sides like a box. A triangle has three sides and three points. A rectangle has four sides with two long sides and two short sides. Look for these shapes in your classroom and at home!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which shape is round?', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Circle', hints: ['Like a ball', 'Round shape']},
                  { id: 'q2', type: 'multiple-choice', question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], correctAnswer: '3', hints: ['Count the sides', 'Three sides']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which shape has 4 equal sides?', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Square', hints: ['All sides same length', 'Four equal sides']},
                  { id: 'q4', type: 'multiple-choice', question: 'What shape is a door?', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Rectangle', hints: ['Tall and wide', 'Four sides, not all equal']},
                  { id: 'q5', type: 'multiple-choice', question: 'How many corners does a circle have?', options: ['0', '1', '3', '4'], correctAnswer: '0', hints: ['Round shape', 'No corners']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which shape is like a pizza slice?', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Triangle', hints: ['Three sides', 'Pointy']},
                  { id: 'q7', type: 'multiple-choice', question: 'How many corners does a square have?', options: ['2', '3', '4', '5'], correctAnswer: '4', hints: ['Count the corners', 'Four corners']}
                ],
                activity: { type: 'interactive-practice', description: 'Find shapes', instruction: 'Identify shapes around you'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.PK.6 - Create patterns',
                content: '<h3>Making Patterns</h3><p>Let\'s make patterns! A pattern is when something repeats over and over. We can make patterns with colors, shapes, or sounds. A simple pattern might be red, blue, red, blue, red, blue. Another pattern could be clap, stomp, clap, stomp. When you understand the pattern, you can tell what comes next. Patterns are everywhere in math, music, and nature!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What comes next: ⭐🌙⭐🌙⭐___?', options: ['⭐', '🌙', '☀️', '🌍'], correctAnswer: '🌙', hints: ['Look at the pattern', 'Moon comes next']},
                  { id: 'q2', type: 'multiple-choice', question: 'What comes next: red, blue, red, blue, red, ___?', options: ['red', 'blue', 'green', 'yellow'], correctAnswer: 'blue', hints: ['Pattern repeats', 'Blue is next']},
                  { id: 'q3', type: 'multiple-choice', question: 'What comes next: ⭕🔺⭕🔺___?', options: ['⭕', '🔺', '⬛', '⬜'], correctAnswer: '⭕', hints: ['Circle and triangle', 'Circle next']},
                  { id: 'q4', type: 'multiple-choice', question: 'What comes next: 1, 2, 1, 2, 1, ___?', options: ['1', '2', '3', '4'], correctAnswer: '2', hints: ['Number pattern', 'Two comes next']},
                  { id: 'q5', type: 'multiple-choice', question: 'What comes next: big, small, big, small, big, ___?', options: ['big', 'small', 'medium', 'tiny'], correctAnswer: 'small', hints: ['Size pattern', 'Small is next']},
                  { id: 'q6', type: 'multiple-choice', question: 'What comes next: 🍎🍌🍎🍌___?', options: ['🍎', '🍌', '🍇', '🍊'], correctAnswer: '🍎', hints: ['Apple and banana', 'Apple next']},
                  { id: 'q7', type: 'multiple-choice', question: 'What comes next: clap, clap, stomp, clap, clap, ___?', options: ['clap', 'stomp', 'jump', 'spin'], correctAnswer: 'stomp', hints: ['Two claps then stomp', 'Stomp is next']},
                  { id: 'q8', type: 'multiple-choice', question: 'What comes next: ⬛⬜⬜⬛⬜⬜___?', options: ['⬛', '⬜', '🔵', '🔴'], correctAnswer: '⬛', hints: ['One black, two white', 'Black next']}
                ],
                activity: { type: 'interactive-practice', description: 'Create patterns', instruction: 'Make your own patterns'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-prek-1',
            title: 'Letters and Sounds',
            description: 'Recognize letters and their sounds. Children will learn to identify both uppercase and lowercase letters while connecting each letter to its beginning sound. This phonemic awareness is crucial for early reading development and literacy skills.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RF.PK.1 - Recognize letters',
                content: '<h3>Learning Letters</h3><p>Let\'s learn the alphabet! There are 26 letters in the alphabet. Each letter has two forms: a big letter (uppercase) and a small letter (lowercase). The letter A can look like A or a. Letters make up words, and words tell us things. Learning your letters is the first step to reading! Practice saying the alphabet song every day.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the first letter of the alphabet?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A', hints: ['Start of alphabet', 'Letter A']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which letter comes after B?', options: ['A', 'C', 'D', 'E'], correctAnswer: 'C', hints: ['After B', 'Letter C']},
                  { id: 'q3', type: 'multiple-choice', question: 'What letter does "apple" start with?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A', hints: ['First sound', 'Letter A']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is an uppercase letter?', options: ['a', 'B', 'c', 'd'], correctAnswer: 'B', hints: ['Big letter', 'Capital B']},
                  { id: 'q5', type: 'multiple-choice', question: 'What letter does "dog" start with?', options: ['C', 'D', 'E', 'F'], correctAnswer: 'D', hints: ['Dog sound', 'Letter D']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which letter comes before D?', options: ['A', 'B', 'C', 'E'], correctAnswer: 'C', hints: ['Right before D', 'Letter C']},
                  { id: 'q7', type: 'multiple-choice', question: 'What letter does "ball" start with?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'B', hints: ['Ball sound', 'Letter B']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which is a lowercase letter?', options: ['A', 'B', 'c', 'D'], correctAnswer: 'c', hints: ['Small letter', 'Little c']}
                ],
                activity: { type: 'interactive-practice', description: 'Letter recognition', instruction: 'Find and name letters'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RF.PK.2 - Identify sounds',
                content: '<h3>Letter Sounds</h3><p>Every letter makes a sound! When we put sounds together, we make words. The letter S makes a "sss" sound like a snake. The letter M makes a "mmm" sound. Listen carefully to the beginning sound of words. When you hear "cat," the first sound is "c." Learning letter sounds helps you read new words. Practice making letter sounds out loud!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What sound does S make?', options: ['"sss"', '"mmm"', '"fff"', '"zzz"'], correctAnswer: '"sss"', hints: ['Like a snake', 'S sound']},
                  { id: 'q2', type: 'multiple-choice', question: 'What letter makes the "mmm" sound?', options: ['N', 'M', 'L', 'K'], correctAnswer: 'M', hints: ['M sound', 'Letter M']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the first sound in "sun"?', options: ['"s"', '"u"', '"n"', '"a"'], correctAnswer: '"s"', hints: ['Beginning sound', 'S sound']},
                  { id: 'q4', type: 'multiple-choice', question: 'What letter makes the "t" sound in "top"?', options: ['P', 'T', 'S', 'R'], correctAnswer: 'T', hints: ['First sound', 'Letter T']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the first sound in "fish"?', options: ['"f"', '"i"', '"s"', '"h"'], correctAnswer: '"f"', hints: ['Beginning sound', 'F sound']},
                  { id: 'q6', type: 'multiple-choice', question: 'What letter makes the "p" sound in "pig"?', options: ['B', 'P', 'D', 'G'], correctAnswer: 'P', hints: ['First sound', 'Letter P']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is the first sound in "red"?', options: ['"r"', '"e"', '"d"', '"b"'], correctAnswer: '"r"', hints: ['Beginning sound', 'R sound']}
                ],
                activity: { type: 'interactive-practice', description: 'Sound matching', instruction: 'Match letters to sounds'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RF.PK.3 - Recognize own name',
                content: '<h3>Your Name</h3><p>Your name is special! It tells people who you are. Your name is made up of letters. The first letter of your name is usually a big letter (uppercase). The other letters are usually small letters (lowercase). Can you find your name when you see it written down? Learning to recognize your name is an important reading skill. Practice writing your name every day!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the first letter of a name usually?', options: ['Small letter', 'Big letter', 'Number', 'Shape'], correctAnswer: 'Big letter', hints: ['Capital letter', 'Uppercase']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why is your name important?', options: ['It tells who you are', 'It is pretty', 'It is long', 'It has colors'], correctAnswer: 'It tells who you are', hints: ['Your identity', 'Who you are']},
                  { id: 'q3', type: 'multiple-choice', question: 'What are names made of?', options: ['Letters', 'Numbers', 'Colors', 'Shapes'], correctAnswer: 'Letters', hints: ['Alphabet', 'Letters make names']},
                  { id: 'q4', type: 'multiple-choice', question: 'Should you practice writing your name?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Practice helps', 'Yes, practice']},
                  { id: 'q5', type: 'multiple-choice', question: 'What kind of letter comes after the first letter in most names?', options: ['Big letters', 'Small letters', 'Numbers', 'Symbols'], correctAnswer: 'Small letters', hints: ['Lowercase', 'Small letters']},
                  { id: 'q6', type: 'multiple-choice', question: 'Can you find your name when it is written?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Recognize your name', 'Yes, you can']},
                  { id: 'q7', type: 'multiple-choice', question: 'What should the first letter of your name be?', options: ['Lowercase', 'Uppercase', 'Number', 'Symbol'], correctAnswer: 'Uppercase', hints: ['Capital letter', 'Big letter']}
                ],
                activity: { type: 'interactive-practice', description: 'Name recognition', instruction: 'Find and write your name'}
              }
            ]
          },
          {
            id: 'ela-prek-2',
            title: 'Listening and Speaking',
            description: 'Develop communication skills through listening and speaking. Students will learn to follow simple directions, answer questions, and express their thoughts clearly. These foundational communication skills support all areas of learning and social interaction.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.SL.PK.1 - Follow directions',
                content: '<h3>Following Directions</h3><p>Let\'s practice following directions! When someone gives you directions, you need to listen carefully. Directions tell you what to do. Simple directions might be "Put your book on the table" or "Stand in line." When you follow directions, you show that you are listening and paying attention. Following directions helps you learn and stay safe. Always listen when your teacher or parent gives directions!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'When someone gives directions, what should you do first?', options: ['Talk', 'Listen', 'Run', 'Sleep'], correctAnswer: 'Listen', hints: ['Pay attention', 'Listen carefully']},
                  { id: 'q2', type: 'multiple-choice', question: 'If teacher says "sit down," what do you do?', options: ['Stand up', 'Sit down', 'Run around', 'Jump'], correctAnswer: 'Sit down', hints: ['Follow direction', 'Do what teacher says']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is following directions important?', options: ['It helps you learn', 'It is fun', 'It is loud', 'It is quiet'], correctAnswer: 'It helps you learn', hints: ['Important for learning', 'Helps you learn']},
                  { id: 'q4', type: 'multiple-choice', question: 'If teacher says "line up," where should you go?', options: ['To the line', 'Outside', 'Home', 'To sleep'], correctAnswer: 'To the line', hints: ['Make a line', 'Stand in line']},
                  { id: 'q5', type: 'multiple-choice', question: 'What does "be quiet" mean?', options: ['Yell', 'Talk softly', 'Stop talking', 'Sing'], correctAnswer: 'Stop talking', hints: ['No talking', 'Silent']},
                  { id: 'q6', type: 'multiple-choice', question: 'If someone says "raise your hand," what do you do?', options: ['Put hand down', 'Raise your hand up', 'Clap', 'Wave'], correctAnswer: 'Raise your hand up', hints: ['Hand goes up', 'Raise hand']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why should you listen to directions?', options: ['To stay safe', 'To be silly', 'To be loud', 'To run'], correctAnswer: 'To stay safe', hints: ['Safety and learning', 'Keep safe']}
                ],
                activity: { type: 'interactive-practice', description: 'Direction following', instruction: 'Practice following simple directions'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.SL.PK.2 - Answer questions',
                content: '<h3>Answering Questions</h3><p>Let\'s practice answering questions! A question is when someone asks you something. Questions often start with words like "what," "who," "where," "when," or "why." When someone asks you a question, think about the answer before you speak. Try to give a complete answer. For example, if someone asks "What is your favorite color?" you can say "My favorite color is blue." Answering questions helps you share your ideas and show what you know!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What word often starts a question?', options: ['What', 'The', 'And', 'Is'], correctAnswer: 'What', hints: ['Question word', 'Starts with What']},
                  { id: 'q2', type: 'multiple-choice', question: 'When someone asks you a question, what should you do?', options: ['Ignore them', 'Answer', 'Run away', 'Sleep'], correctAnswer: 'Answer', hints: ['Respond', 'Give an answer']},
                  { id: 'q3', type: 'multiple-choice', question: 'If someone asks "What is your name?" what should you say?', options: ['Your name', 'A color', 'A number', 'Nothing'], correctAnswer: 'Your name', hints: ['Tell your name', 'Say your name']},
                  { id: 'q4', type: 'multiple-choice', question: 'What does "who" ask about?', options: ['A person', 'A place', 'A time', 'A color'], correctAnswer: 'A person', hints: ['People', 'Who is a person']},
                  { id: 'q5', type: 'multiple-choice', question: 'If teacher asks "Where is your book?" what are they asking?', options: ['The location', 'The color', 'The size', 'The number'], correctAnswer: 'The location', hints: ['Where means place', 'Location']},
                  { id: 'q6', type: 'multiple-choice', question: 'Should you think before you answer a question?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Think first', 'Yes, think']},
                  { id: 'q7', type: 'multiple-choice', question: 'What word asks about a time?', options: ['What', 'Who', 'When', 'Where'], correctAnswer: 'When', hints: ['Time question', 'When']},
                  { id: 'q8', type: 'multiple-choice', question: 'Why do we answer questions?', options: ['To share ideas', 'To be quiet', 'To sleep', 'To run'], correctAnswer: 'To share ideas', hints: ['Communication', 'Share what you know']}
                ],
                activity: { type: 'interactive-practice', description: 'Question and answer', instruction: 'Practice asking and answering questions'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-prek-1',
            title: 'Exploring the Senses and Living Things',
            description: 'Engage in hands-on exploration using the five senses, observe basic properties of objects, and distinguish between living and non-living things. These foundational science skills foster curiosity and observation.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.PK.1 - Use Senses to Observe',
                content: '<h3>The Five Senses</h3><p>We use our five senses—sight, hearing, smell, taste, and touch—to explore the world! Scientists always use their senses to make careful observations. We can look at colors, listen to sounds, smell flowers, taste sweet and sour things, and touch smooth or rough objects. Using all our senses helps us learn about the properties of everything around us!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which sense do you use to tell if something is rough or smooth?', options: ['Sight', 'Hearing', 'Touch', 'Smell'], correctAnswer: 'Touch', hints: ['Use your hands', 'Touch']},
                  { id: 'q2', type: 'multiple-choice', question: 'What sense do you use to see the color of an apple?', options: ['Sight', 'Taste', 'Smell', 'Hearing'], correctAnswer: 'Sight', hints: ['Use your eyes', 'Sight']},
                  { id: 'q3', type: 'multiple-choice', question: 'A loud sound is heard with your:', options: ['Nose', 'Ears', 'Eyes', 'Mouth'], correctAnswer: 'Ears', hints: ['Sense of hearing', 'Ears']}
                ],
                activity: { type: 'sensory-bin', description: 'Explore items with different textures and smells.', instruction: 'Blindfold and guess objects using only touch and smell.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.PK.2 - Living vs. Non-Living',
                content: '<h3>Living and Non-Living Things</h3><p>Things are either **living** or **non-living**. Living things need food, water, and air; they grow and can move on their own (like plants, animals, and people). Non-living things do not need food or water and do not grow (like rocks, toys, and tables). Scientists classify things to understand the world. Can you name a living thing in your classroom?</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Does a pet dog need food and water to grow?', options: ['Yes', 'No, it just needs food', 'No, it just needs water', 'No'], correctAnswer: 'Yes', hints: ['Dogs are living things', 'Needs food and water']},
                  { id: 'q2', type: 'multiple-choice', question: 'Is a toy car a living thing?', options: ['Yes, it moves', 'No, it does not grow', 'Yes, if it has batteries', 'Only if it is red'], correctAnswer: 'No, it does not grow', hints: ['It does not need food/water', 'Non-living']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which of these is a living thing?', options: ['A rock', 'A cloud', 'A flower', 'A pencil'], correctAnswer: 'A flower', hints: ['It grows and needs water', 'Flower']}
                ],
                activity: { type: 'classification-game', description: 'Sort pictures of animals, plants, and objects.', instruction: 'Identify and sort 5 living and 5 non-living things in the classroom.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.PK.3 - Basic Properties (Color, Shape, Size)',
                content: '<h3>Sorting by Properties</h3><p>We can describe objects by their **properties**! Properties are features like color, shape (round, square, long), and size (big, small). Practice using descriptive words to compare things. For example, a ball is round and big, while a block is square and small. This observation skill is crucial for all science learning.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which shape describes a banana?', options: ['Round', 'Square', 'Long and curved', 'Triangle'], correctAnswer: 'Long and curved', hints: ['Its form', 'Long and curved']},
                  { id: 'q2', type: 'multiple-choice', question: 'If you put two blocks together, they are now:', options: ['One', 'Bigger', 'Smaller', 'Round'], correctAnswer: 'Bigger', hints: ['Changing size', 'Bigger']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the color of the grass outside?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Green', hints: ['Use your sight', 'Green']}
                ],
                activity: { type: 'property-match', description: 'Match objects to their shape outlines.', instruction: 'Find an object that is both red and round.' }
              }
            ]
          },
          {
            id: 'science-prek-2',
            title: 'Weather and Earth Observation',
            description: 'Observe and describe simple weather phenomena, cycles of day and night, and compare the properties of water.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.PK.4 - Basic Weather',
                content: '<h3>Sunny, Rainy, Cloudy</h3><p>**Weather** is what the air outside is like right now. It can be sunny (warm, bright), rainy (water falling), or cloudy (sky covered by clouds). We check the weather to know if we need a jacket, boots, or sunglasses. Practice describing the weather outside right now!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If you need an umbrella, the weather is probably:', options: ['Sunny', 'Windy', 'Rainy', 'Cloudy'], correctAnswer: 'Rainy', hints: ['Protection from water', 'Rainy']},
                  { id: 'q2', type: 'multiple-choice', question: 'When the sun is shining brightly, the weather is:', options: ['Cold', 'Snowy', 'Sunny', 'Dark'], correctAnswer: 'Sunny', hints: ['Bright and often warm', 'Sunny']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is made of tiny water droplets in the sky?', options: ['Sun', 'Clouds', 'Wind', 'Air'], correctAnswer: 'Clouds', hints: ['White or gray masses', 'Clouds']}
                ],
                activity: { type: 'weather-dress-up', description: 'Choose the correct clothing for different weather scenarios (e.g., snow, beach).', instruction: 'Draw a picture of your favorite type of weather.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.PK.5 - Day and Night Cycle',
                content: '<h3>Day and Night</h3><p>The Earth spins like a top, giving us a cycle of **day** and **night**. During the **day**, the sun is shining, it is bright, and we are awake. At **night**, the sun is on the other side of the Earth, so it is dark, and we see the moon and stars, and we go to sleep. This simple cycle happens every day!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What do we see in the sky during the day?', options: ['Stars and Moon', 'Sun and Clouds', 'Planets', 'Comets'], correctAnswer: 'Sun and Clouds', hints: ['Bright objects', 'Sun and Clouds']},
                  { id: 'q2', type: 'multiple-choice', question: 'When is it usually dark outside?', options: ['Morning', 'Noon', 'Night', 'Afternoon'], correctAnswer: 'Night', hints: ['Time for sleep', 'Night']},
                  { id: 'q3', type: 'multiple-choice', question: 'The pattern of day and night is caused by the Earth:', options: ['Moving closer to the Sun', 'Spinning (rotating)', 'Getting bigger', 'Getting smaller'], correctAnswer: 'Spinning (rotating)', hints: ['Turning on its axis', 'Spinning']}
                ],
                activity: { type: 'sun-moon-draw', description: 'Draw a picture of what you do during the day and what you see at night.', instruction: 'Explain why the moon is sometimes visible during the day.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.PK.6 - Water Properties',
                content: '<h3>Water, Water Everywhere</h3><p>**Water** is a liquid that flows and takes the shape of its container. It is clear and has no smell or taste. Water is essential for living things. We can observe water doing different things, like pouring, splashing, and freezing into ice (a solid). Water is a very special liquid!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What shape is liquid water?', options: ['Round', 'Square', 'It takes the shape of its container', 'It has no shape'], correctAnswer: 'It takes the shape of its container', hints: ['Property of liquid', 'Takes container shape']},
                  { id: 'q2', type: 'multiple-choice', question: 'What happens when water gets very, very cold?', options: ['It turns into gas (steam)', 'It turns into solid (ice)', 'It disappears', 'It gets hot'], correctAnswer: 'It turns into solid (ice)', hints: ['Freezing point', 'Ice']},
                  { id: 'q3', type: 'multiple-choice', question: 'Does clean water have a strong taste?', options: ['Yes, very salty', 'Yes, very sweet', 'No, it is tasteless', 'It tastes like sugar'], correctAnswer: 'No, it is tasteless', hints: ['Pure water', 'No taste']}
                ],
                activity: { type: 'water-experiment', description: 'Pour water into different shaped containers (cup, bowl, tray).', instruction: 'Describe how the water\'s shape changes in each container.' }
              }
            ]
          },
          {
            id: 'science-prek-3',
            title: 'Pushing, Pulling, and Movement',
            description: 'Explore simple forces (pushes and pulls) and how they cause objects to start, stop, or change direction. Students will observe the relationship between force and motion.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.PK.7 - Forces: Push and Pull',
                content: '<h3>Moving Things with Push and Pull</h3><p>We use **force** to make things move. A **push** moves something away from you, and a **pull** moves something toward you. When you push a wagon, it moves away. When you pull a toy on a string, it moves closer. Pushing and pulling can start things moving, stop them, or make them change direction. Force is needed to make any object move!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which action is a **push**?', options: ['Opening a closed door', 'Kicking a ball', 'Tugging on a rope', 'Zipping a coat'], correctAnswer: 'Kicking a ball', hints: ['Moving away', 'Kicking']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which action is a **pull**?', options: ['Pushing a swing', 'Throwing a ball', 'Opening a drawer toward you', 'Shoving a chair'], correctAnswer: 'Opening a drawer toward you', hints: ['Moving toward you', 'Opening a drawer']},
                  { id: 'q3', type: 'multiple-choice', question: 'What makes a toy car start moving?', options: ['Color', 'Shape', 'A push or a pull', 'Size'], correctAnswer: 'A push or a pull', hints: ['Requires force', 'A push or a pull']}
                ],
                activity: { type: 'force-game', description: 'Play a game where students identify if an action is a push or a pull (e.g., rolling a ball, lifting a toy).', instruction: 'Demonstrate a push and a pull on an object.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.PK.8 - Speed and Distance',
                content: '<h3>Fast and Slow Movement</h3><p>Objects can move **fast** or **slow**. When something moves a long way, it covers a large **distance**. A rabbit runs fast, and a snail moves slow. We can make a toy car move faster by giving it a bigger push. Comparing speeds and distances helps us describe motion accurately.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If you run far away from the class, you are covering a large:', options: ['Time', 'Distance', 'Color', 'Sound'], correctAnswer: 'Distance', hints: ['Length of travel', 'Distance']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is an example of **fast** movement?', options: ['A turtle walking', 'A ball rolling slowly', 'A cheetah running', 'A clock ticking'], correctAnswer: 'A cheetah running', hints: ['High speed animal', 'Cheetah']},
                  { id: 'q3', type: 'multiple-choice', question: 'How can you make a toy move faster?', options: ['Give it a bigger push', 'Give it a smaller push', 'Talk to it', 'Ignore it'], correctAnswer: 'Give it a bigger push', hints: ['More force means more speed', 'Bigger push']}
                ],
                activity: { type: 'race-cars', description: 'Race two toy cars and observe which is faster and which covers more distance.', instruction: 'Describe the movement of the faster car.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.PK.9 - Cause and Effect of Movement',
                content: '<h3>Force Causes Change</h3><p>Every time an object moves, something caused it! This is **cause and effect**. The **cause** is the push or pull, and the **effect** is the change in motion. If the cause is a big push, the effect is fast movement. If the cause is stopping the push, the effect is the object slowing down. Understanding cause and effect helps us predict how things will move.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Cause: You kick a ball. What is the **effect**?', options: ['The ball gets smaller', 'The ball moves', 'The ball turns red', 'The ball sings'], correctAnswer: 'The ball moves', hints: ['The result of the push', 'The ball moves']},
                  { id: 'q2', type: 'multiple-choice', question: 'Effect: A toy stops moving. What was the most likely **cause**?', options: ['It got heavier', 'The pushing force stopped', 'It got taller', 'It started glowing'], correctAnswer: 'The pushing force stopped', hints: ['No force means no motion', 'Force stopped']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is the **cause** in "The wind pushed the leaves, so they flew away?"', options: ['The wind pushed the leaves', 'The leaves flew away', 'The color of the leaves', 'The leaves were heavy'], correctAnswer: 'The wind pushed the leaves', hints: ['The action that happened first', 'The wind pushed']}
                ],
                activity: { type: 'prediction-game', description: 'Predict the effect of a specific push or pull on a rolling object.', instruction: 'Explain why a smaller push has a smaller effect.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-prek-1',
            title: 'Self, Family, and Classroom Community',
            description: 'Begin to understand personal identity, family structure, and the roles of people in the community. Students will learn about classroom rules, local community helpers, and basic concepts of citizenship and cooperation.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.PK.1 - Personal Identity and Rules',
                content: '<h3>All About Me and My Rules</h3><p>Your name, your favorite color, and your family make you unique! It is important to know who you are. We are all members of a community, and every community—even our classroom—needs rules. **Rules** help everyone stay safe and learn together. Following rules, like sharing and taking turns, shows that you are a good citizen.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What makes you unique?', options: ['Having the same favorite color as everyone', 'Your name and interests', 'Having no rules', 'Not sharing'], correctAnswer: 'Your name and interests', hints: ['What makes you special', 'Identity']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why do we need rules in the classroom?', options: ['To be mean', 'To stay safe and learn', 'To be noisy', 'To run inside'], correctAnswer: 'To stay safe and learn', hints: ['Safety and learning', 'Rules help']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is a good rule for sharing toys?', options: ['Keep them all', 'Saying "mine" loudly', 'Taking turns', 'Hiding them'], correctAnswer: 'Taking turns', hints: ['Cooperation', 'Taking turns']}
                ],
                activity: { type: 'identity-poster', description: 'Create an "All About Me" poster with drawings and words.', instruction: 'Share your favorite thing with the class.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.PK.2 - Family Roles and Structures',
                content: '<h3>My Family is Special</h3><p>Families are groups of people who love and care for each other. Every family is different! Some families have one parent, and some have two. Some live with grandparents or siblings. Everyone in the family has a **role** or a job, like cooking, cleaning, or taking care of pets. Recognizing that all families are unique teaches respect for diversity.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a **role** someone might have in a family?', options: ['Going to the moon', 'Cooking dinner', 'Building a bridge', 'Flying a plane'], correctAnswer: 'Cooking dinner', hints: ['A job at home', 'Cooking dinner']},
                  { id: 'q2', type: 'multiple-choice', question: 'Are all families exactly the same?', options: ['Yes', 'No, they are all unique', 'Only sometimes', 'Only if they have pets'], correctAnswer: 'No, they are all unique', hints: ['Families come in many forms', 'Unique']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the most important thing families do for each other?', options: ['Ignore each other', 'Yell loudly', 'Love and care for each other', 'Buy a new house'], correctAnswer: 'Love and care for each other', hints: ['Emotional support', 'Love and care']}
                ],
                activity: { type: 'family-drawing', description: 'Draw a picture of your family and describe one job each person does.', instruction: 'Explain why your family is special to you.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.PK.3 - Cooperation and Citizenship',
                content: '<h3>Being a Good Citizen</h3><p>A good **citizen** is someone who helps their community. Even in the classroom, we are citizens! We show good citizenship by **cooperating** (working together), sharing toys, using kind words, and cleaning up messes. When everyone cooperates, the community is happier and works better!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does **cooperate** mean?', options: ['Fighting', 'Working alone', 'Working together', 'Ignoring friends'], correctAnswer: 'Working together', hints: ['Teamwork', 'Working together']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which action shows good citizenship?', options: ['Hitting a friend', 'Helping a friend clean up', 'Breaking toys', 'Crying loudly'], correctAnswer: 'Helping a friend clean up', hints: ['Helpful behavior', 'Helping friend']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is it important to use kind words?', options: ['It makes friends happy', 'It makes friends sad', 'It helps them learn math', 'It makes you hungry'], correctAnswer: 'It makes friends happy', hints: ['Shows respect', 'Makes friends happy']}
                ],
                activity: { type: 'cooperation-task', description: 'Complete a puzzle or building task that requires two students to work together.', instruction: 'Discuss what made the task easier (e.g., talking, sharing pieces).' }
              }
            ]
          },
          {
            id: 'ss-prek-2',
            title: 'Community Helpers and Simple Rules',
            description: 'Identify the jobs of community helpers and understand that different people have different roles. Learn about simple authority figures and the need for basic laws.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.PK.4 - Community Helpers',
                content: '<h3>People Who Help Us</h3><p>A **community helper** is someone whose job is to keep people safe, healthy, and educated. Examples include firefighters, doctors, and teachers. Every helper has a different job, and we rely on them every day. Firefighters put out fires; doctors help us when we are sick. Being thankful for community helpers is important!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who helps you learn in the classroom?', options: ['Firefighter', 'Doctor', 'Teacher', 'Mail carrier'], correctAnswer: 'Teacher', hints: ['Helps with education', 'Teacher']},
                  { id: 'q2', type: 'multiple-choice', question: 'Who helps you feel better when you are sick?', options: ['Doctor', 'Librarian', 'Mail carrier', 'Police officer'], correctAnswer: 'Doctor', hints: ['Medical help', 'Doctor']},
                  { id: 'q3', type: 'multiple-choice', question: 'Who brings letters to your house?', options: ['Firefighter', 'Police officer', 'Mail carrier', 'Doctor'], correctAnswer: 'Mail carrier', hints: ['Delivers mail', 'Mail carrier']}
                ],
                activity: { type: 'helper-match', description: 'Match pictures of community helpers to their tools (e.g., firefighter $\to$ hose, doctor $\to$ stethoscope).', instruction: 'Act out the job of a police officer (e.g., crossing guard).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.PK.5 - Authority Figures',
                content: '<h3>Listening to Authority</h3><p>An **authority figure** is someone who is in charge and whose directions we should follow, like parents, teachers, and principals. They are in charge because they keep us safe and help us learn. It is important to listen carefully when an authority figure speaks. This shows respect and helps us stay out of trouble.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who is an authority figure at school?', options: ['Your friend', 'The principal', 'The janitor', 'The playground equipment'], correctAnswer: 'The principal', hints: ['The leader of the school', 'Principal']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why should we listen to the teacher?', options: ['They are always wrong', 'They help you stay safe and learn', 'They want you to cry', 'They are quiet'], correctAnswer: 'They help you stay safe and learn', hints: ['Their role is guidance and safety', 'Help learn and stay safe']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is a way to show respect to an adult?', options: ['Ignoring them', 'Interrupting them', 'Listening quietly', 'Yelling at them'], correctAnswer: 'Listening quietly', hints: ['Paying attention', 'Listening quietly']}
                ],
                activity: { type: 'direction-game', description: 'Play "Simon Says" to practice listening carefully to an authority figure.', instruction: 'Ask students to repeat a simple, two-step instruction given by the teacher.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.PK.6 - Following Simple Instructions',
                content: '<h3>Following Directions</h3><p>Directions are instructions that tell us what to do. Following directions is essential for safety, and it shows respect for others. When given a direction, you should: $1.$ **Listen** carefully. $2.$ **Think** about what to do. $3.$ **Do** the direction. Simple directions might be "Line up" or "Put the book on the shelf."</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the first step when given directions?', options: ['Run away', 'Listen carefully', 'Start talking', 'Ignore the speaker'], correctAnswer: 'Listen carefully', hints: ['Need to hear them first', 'Listen']},
                  { id: 'q2', type: 'multiple-choice', question: 'If the teacher says, "Put your hands on your head," what should you do?', options: ['Put hands on knees', 'Put hands on head', 'Wiggle toes', 'Clap'], correctAnswer: 'Put hands on head', hints: ['Do what is said', 'Hands on head']},
                  { id: 'q3', type: 'multiple-choice', question: 'Following directions helps us:', options: ['Cause trouble', 'Be noisy', 'Stay safe', 'Go home early'], correctAnswer: 'Stay safe', hints: ['Safety is a key reason', 'Stay safe']}
                ],
                activity: { type: 'two-step-directions', description: 'Give students two-step directions (e.g., "Clap once, then stand up").', instruction: 'Have one student give the class a direction.' }
              }
            ]
          },
          {
            id: 'ss-prek-3',
            title: 'Time and Place Awareness',
            description: 'Develop a basic sense of time (past, present, future) and place (here, there, school, home). Learn to identify and appreciate national symbols.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.PK.7 - Basic Time Concepts',
                content: '<h3>Yesterday, Today, Tomorrow</h3><p>We use words to talk about time! **Today** is what is happening right now. **Yesterday** is the day that is already finished. **Tomorrow** is the day that is coming next. We can talk about the **past** (long ago) and the **present** (now). Understanding these time concepts helps us remember the order of events.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the day that is happening right now?', options: ['Yesterday', 'Tomorrow', 'Last week', 'Today'], correctAnswer: 'Today', hints: ['The current day', 'Today']},
                  { id: 'q2', type: 'multiple-choice', question: 'If you went to the park on Tuesday, and today is Wednesday, which day was the park trip?', options: ['Tomorrow', 'Today', 'Yesterday', 'Next week'], correctAnswer: 'Yesterday', hints: ['The day before today', 'Yesterday']},
                  { id: 'q3', type: 'multiple-choice', question: 'What word describes something that happened long ago?', options: ['Past', 'Present', 'Future', 'Now'], correctAnswer: 'Past', hints: ['Already finished', 'Past']}
                ],
                activity: { type: 'daily-schedule', description: 'Review the classroom schedule, identifying activities that happened "yesterday" and what will happen "tomorrow."', instruction: 'Name one thing they did this morning (Past).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.PK.8 - Location and Place',
                content: '<h3>Where I Am</h3><p>We need words to describe **where** things are! **Here** means right where we are. **There** means another place. We spend a lot of time at **home** and at **school**. We can describe locations using simple words like *over, under, next to, inside*. Being able to describe place helps us understand maps later!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Where do you eat dinner and sleep with your family?', options: ['School', 'Park', 'Home', 'Store'], correctAnswer: 'Home', hints: ['Where you live', 'Home']},
                  { id: 'q2', type: 'multiple-choice', question: 'Where is the teacher sitting if they are on a chair?', options: ['Over the chair', 'Under the chair', 'Next to the chair', 'On the chair'], correctAnswer: 'On the chair', hints: ['Sitting position', 'On the chair']},
                  { id: 'q3', type: 'multiple-choice', question: 'What word means the opposite of **here**?', options: ['Up', 'Down', 'There', 'Near'], correctAnswer: 'There', hints: ['A different location', 'There']}
                ],
                activity: { type: 'spatial-practice', description: 'Play a game where students follow directions using spatial words (e.g., "Put the block under the table").', instruction: 'Describe the location of the classroom door relative to their desk.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.PK.9 - National Symbols',
                content: '<h3>Our Country\'s Symbols</h3><p>Every country has special **symbols** that represent it. In the United States, our flag is a very important symbol. It has stripes and stars. The Bald Eagle is our national bird. Learning these symbols helps us feel connected to our country. We show respect when we look at the flag during the Pledge of Allegiance.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the symbol with stripes and stars?', options: ['A car', 'The American Flag', 'A shoe', 'A house'], correctAnswer: 'The American Flag', hints: ['A national symbol', 'The American Flag']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the national bird of the United States?', options: ['Chicken', 'Bluebird', 'Bald Eagle', 'Parrot'], correctAnswer: 'Bald Eagle', hints: ['Large, powerful bird', 'Bald Eagle']},
                  { id: 'q3', type: 'multiple-choice', question: 'When should we stand quietly and look at the flag?', options: ['During lunch', 'During playtime', 'During the Pledge of Allegiance', 'When sleeping'], correctAnswer: 'During the Pledge of Allegiance', hints: ['Showing respect', 'Pledge']}
                ],
                activity: { type: 'flag-coloring', description: 'Color an outline of the American Flag using the correct colors (red, white, and blue).', instruction: 'Practice reciting the Pledge of Allegiance.' }
              }
            ]
          }
        ]
      },
      'Kindergarten': {
        'Math': [
          {
            id: 'math-k-1',
            title: 'Numbers and Counting to 20',
            description: 'Master counting, number recognition, and basic addition and subtraction within 20. Students will develop strong number sense by counting objects, comparing quantities, and solving simple word problems. These skills form the foundation for all future mathematics learning.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.K.CC.1 - Count to 100',
                content: '<h3>Counting to 100</h3><p>Now that you can count to 20, let\'s go even higher! Counting to 100 is an important skill. When we count, we say the numbers in order: 1, 2, 3, 4, and so on. After 20 comes 21, 22, 23, and we keep going. The pattern repeats every ten numbers. Practice counting by ones, and soon you\'ll be able to count all the way to 100! You can also practice counting by tens: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. This makes counting to 100 faster!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What number comes after 19?', options: ['18', '20', '21', '30'], correctAnswer: '20', hints: ['Next number', 'Twenty']},
                  { id: 'q2', type: 'multiple-choice', question: 'What number comes before 50?', options: ['48', '49', '51', '60'], correctAnswer: '49', hints: ['One less', 'Forty-nine']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Count by tens: 10, 20, 30, ___, 50', correctAnswer: '40', hints: ['Next ten', 'Forty']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which number is bigger: 67 or 76?', options: ['67', '76', 'Same', 'Cannot tell'], correctAnswer: '76', hints: ['Compare digits', 'Seventy-six']},
                  { id: 'q5', type: 'multiple-choice', question: 'What comes after 89?', options: ['88', '90', '99', '100'], correctAnswer: '90', hints: ['Next number', 'Ninety']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What number is between 54 and 56?', correctAnswer: '55', hints: ['In the middle', 'Fifty-five']},
                  { id: 'q7', type: 'multiple-choice', question: 'If you count to 100, what is the last number?', options: ['99', '100', '101', '110'], correctAnswer: '100', hints: ['Last number', 'One hundred']},
                  { id: 'q8', type: 'multiple-choice', question: 'Count by tens: 30, 40, 50, ___?', options: ['51', '55', '60', '70'], correctAnswer: '60', hints: ['Next ten', 'Sixty']}
                ],
                activity: { type: 'interactive-practice', description: 'Counting practice', instruction: 'Count to 100 by ones and tens'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.K.OA.1 - Addition within 10',
                content: '<h3>Adding Numbers</h3><p>Let\'s learn to add! Addition means putting groups together to find out how many you have in total. When we add, we use the plus sign (+). For example, if you have 3 apples and get 2 more apples, you add 3 + 2 = 5. You now have 5 apples total. The answer to an addition problem is called the sum. You can use your fingers, draw pictures, or count objects to help you add. Addition is everywhere in real life!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 2 + 3?', correctAnswer: '5', hints: ['Count up', 'Five']},
                  { id: 'q2', type: 'fill-in-blank', question: 'If you have 4 toys and get 1 more, how many do you have?', correctAnswer: '5', hints: ['Add them', '4 + 1']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 5 + 3?', options: ['6', '7', '8', '9'], correctAnswer: '8', hints: ['Add together', 'Eight']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 1 + 1?', correctAnswer: '2', hints: ['Simple addition', 'Two']},
                  { id: 'q5', type: 'multiple-choice', question: 'If you have 6 crayons and get 2 more, how many crayons?', options: ['6', '7', '8', '9'], correctAnswer: '8', hints: ['6 + 2', 'Eight']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is 3 + 3?', correctAnswer: '6', hints: ['Double three', 'Six']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is 7 + 2?', options: ['7', '8', '9', '10'], correctAnswer: '9', hints: ['Count up', 'Nine']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 4 + 4?', correctAnswer: '8', hints: ['Double four', 'Eight']}
                ],
                activity: { type: 'interactive-practice', description: 'Addition practice', instruction: 'Solve addition problems'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.K.OA.2 - Subtraction within 10',
                content: '<h3>Subtracting Numbers</h3><p>Let\'s learn to subtract! Subtraction means taking away to find out how many are left. When we subtract, we use the minus sign (−). For example, if you have 5 cookies and eat 2 cookies, you subtract 5 − 2 = 3. You have 3 cookies left. The answer to a subtraction problem is called the difference. You can count backwards, use your fingers, or cross out pictures to help you subtract. Subtraction helps us solve many everyday problems!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 5 − 2?', correctAnswer: '3', hints: ['Take away two', 'Three']},
                  { id: 'q2', type: 'multiple-choice', question: 'If you have 7 apples and eat 3, how many are left?', options: ['3', '4', '5', '6'], correctAnswer: '4', hints: ['7 − 3', 'Four']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is 6 − 1?', correctAnswer: '5', hints: ['One less', 'Five']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is 10 − 5?', options: ['4', '5', '6', '7'], correctAnswer: '5', hints: ['Take away five', 'Five']},
                  { id: 'q5', type: 'fill-in-blank', question: 'If you have 8 balloons and 2 pop, how many are left?', correctAnswer: '6', hints: ['8 − 2', 'Six']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 9 − 4?', options: ['4', '5', '6', '7'], correctAnswer: '5', hints: ['Count back', 'Five']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 4 − 4?', correctAnswer: '0', hints: ['All gone', 'Zero']},
                  { id: 'q8', type: 'multiple-choice', question: 'If you have 6 pencils and give away 2, how many do you have?', options: ['2', '3', '4', '5'], correctAnswer: '4', hints: ['6 − 2', 'Four']}
                ],
                activity: { type: 'interactive-practice', description: 'Subtraction practice', instruction: 'Solve subtraction problems'}
              },
              {
                id: 'lesson-4',
                objective: 'MCCRS.Math.K.CC.6 - Compare numbers',
                content: '<h3>Comparing Numbers</h3><p>Let\'s compare numbers to see which is greater and which is less! When we compare numbers, we use special symbols. The greater than symbol (>) points to the smaller number, like a hungry alligator eating the bigger number. For example, 8 > 5 means 8 is greater than 5. The less than symbol (<) points to the larger number. For example, 3 < 7 means 3 is less than 7. The equal sign (=) means both sides are the same. Comparing numbers helps us understand size and quantity!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is greater: 8 or 5?', options: ['8', '5', 'Same', 'Cannot tell'], correctAnswer: '8', hints: ['Bigger number', 'Eight']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is less: 3 or 9?', options: ['3', '9', 'Same', 'Cannot tell'], correctAnswer: '3', hints: ['Smaller number', 'Three']},
                  { id: 'q3', type: 'multiple-choice', question: 'Is 7 greater than or less than 4?', options: ['Greater than', 'Less than', 'Equal to', 'Cannot tell'], correctAnswer: 'Greater than', hints: ['7 is bigger', 'Greater']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which symbol means "greater than"?', options: ['<', '>', '=', '+'], correctAnswer: '>', hints: ['Hungry alligator', 'Points to smaller']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which number is between 4 and 8?', options: ['3', '6', '9', '10'], correctAnswer: '6', hints: ['In the middle', 'Six']},
                  { id: 'q6', type: 'multiple-choice', question: 'Is 10 > 6 true or false?', options: ['True', 'False', 'Maybe', 'Cannot tell'], correctAnswer: 'True', hints: ['10 is bigger', 'True']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which is the smallest: 2, 7, or 5?', options: ['2', '7', '5', 'All same'], correctAnswer: '2', hints: ['Smallest', 'Two']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which is the largest: 4, 9, or 6?', options: ['4', '9', '6', 'All same'], correctAnswer: '9', hints: ['Largest', 'Nine']}
                ],
                activity: { type: 'interactive-practice', description: 'Number comparison', instruction: 'Compare numbers using <, >, ='}
              }
            ]
          },
          {
            id: 'math-k-2',
            title: 'Geometry and Measurement',
            description: 'Explore 2D and 3D shapes and basic measurement concepts. Students will identify, describe, and compare shapes while learning about attributes like size, position, and length. These spatial reasoning skills are essential for understanding the world around us.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.K.G.2 - Name shapes',
                content: '<h3>Identifying Shapes</h3><p>Let\'s identify shapes all around us! Shapes have special names and properties. A circle is perfectly round with no corners. A square has 4 equal sides and 4 corners. A triangle has 3 sides and 3 corners. A rectangle has 4 sides and 4 corners, but only opposite sides are equal. Shapes can be different sizes but still have the same name. Look around your classroom and home to find these shapes. Learning about shapes helps us describe and understand objects in our world!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], correctAnswer: '3', hints: ['Three sides', 'Triangle']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which shape has no corners?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], correctAnswer: 'Circle', hints: ['Round shape', 'Circle']},
                  { id: 'q3', type: 'multiple-choice', question: 'How many corners does a square have?', options: ['2', '3', '4', '5'], correctAnswer: '4', hints: ['Four corners', 'Square']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which shape has 4 equal sides?', options: ['Circle', 'Triangle', 'Square', 'Rectangle'], correctAnswer: 'Square', hints: ['All sides same', 'Square']},
                  { id: 'q5', type: 'multiple-choice', question: 'What shape is a stop sign?', options: ['Circle', 'Square', 'Triangle', 'Octagon'], correctAnswer: 'Octagon', hints: ['Eight sides', 'Octagon']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which shape is a book?', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Rectangle', hints: ['Four sides, not all equal', 'Rectangle']},
                  { id: 'q7', type: 'multiple-choice', question: 'How many sides does a rectangle have?', options: ['2', '3', '4', '5'], correctAnswer: '4', hints: ['Four sides', 'Rectangle']},
                  { id: 'q8', type: 'multiple-choice', question: 'What shape is a slice of pizza?', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Triangle', hints: ['Three sides', 'Triangle']}
                ],
                activity: { type: 'interactive-practice', description: 'Shape identification', instruction: 'Find and name shapes'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.K.MD.1 - Compare length',
                content: '<h3>Measuring Length</h3><p>Let\'s learn about length! Length tells us how long something is from one end to the other. We can compare the length of two objects to see which is longer and which is shorter. A pencil might be longer than a crayon. Your arm is longer than your finger. We can also say two things are the same length if they are equal. To compare length, we line up the objects at one end and see which one goes farther. Understanding length helps us describe and compare objects!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is longer: a pencil or a crayon?', options: ['Pencil', 'Crayon', 'Same', 'Cannot tell'], correctAnswer: 'Pencil', hints: ['Usually longer', 'Pencil']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is shorter: your arm or your finger?', options: ['Arm', 'Finger', 'Same', 'Cannot tell'], correctAnswer: 'Finger', hints: ['Smaller', 'Finger']},
                  { id: 'q3', type: 'multiple-choice', question: 'What does "longer" mean?', options: ['Shorter', 'Taller', 'Goes farther', 'Heavier'], correctAnswer: 'Goes farther', hints: ['More length', 'Extends more']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is longer: a school bus or a car?', options: ['School bus', 'Car', 'Same', 'Cannot tell'], correctAnswer: 'School bus', hints: ['Bigger vehicle', 'Bus']},
                  { id: 'q5', type: 'multiple-choice', question: 'If two objects are the same length, we say they are?', options: ['Different', 'Equal', 'Opposite', 'Wrong'], correctAnswer: 'Equal', hints: ['Same', 'Equal']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is shorter: a book or a piece of paper?', options: ['Book', 'Paper', 'Same', 'Cannot tell'], correctAnswer: 'Paper', hints: ['Smaller', 'Paper']},
                  { id: 'q7', type: 'multiple-choice', question: 'To compare length, where should you line up the objects?', options: ['At one end', 'In the middle', 'At different places', 'Anywhere'], correctAnswer: 'At one end', hints: ['Start together', 'One end']}
                ],
                activity: { type: 'interactive-practice', description: 'Length comparison', instruction: 'Compare lengths of objects'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-k-1',
            title: 'Phonics and Word Recognition',
            description: 'Master letter-sound relationships and decode simple words. Students will learn to blend sounds to read words, recognize common sight words, and understand basic phonics patterns. These decoding skills are essential for becoming independent readers.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RF.K.2 - Phonemic awareness',
                content: '<h3>Sounds in Words</h3><p>Let\'s explore the sounds in words! Every word is made up of individual sounds called phonemes. For example, the word "cat" has three sounds: /c/ /a/ /t/. When we blend these sounds together quickly, we say "cat." This skill is called blending. We can also break words apart into their sounds, which is called segmenting. When you can hear and work with these sounds, you are developing phonemic awareness. This is a super important skill for learning to read! Practice listening for the sounds in simple words every day.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'How many sounds are in the word "dog"?', correctAnswer: '3', hints: ['/d/ /o/ /g/', 'Three sounds']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the first sound in "sun"?', options: ['/s/', '/u/', '/n/', '/a/'], correctAnswer: '/s/', hints: ['Beginning sound', '/s/']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the last sound in "cat"?', options: ['/c/', '/a/', '/t/', '/s/'], correctAnswer: '/t/', hints: ['Ending sound', '/t/']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Blend these sounds: /b/ /i/ /g/. What word?', correctAnswer: 'big', hints: ['Put sounds together', 'big']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the middle sound in "pen"?', options: ['/p/', '/e/', '/n/', '/a/'], correctAnswer: '/e/', hints: ['Middle sound', '/e/']},
                  { id: 'q6', type: 'fill-in-blank', question: 'How many sounds in "hat"?', correctAnswer: '3', hints: ['/h/ /a/ /t/', 'Three']},
                  { id: 'q7', type: 'multiple-choice', question: 'What word is /m/ /a/ /p/?', options: ['mat', 'map', 'mop', 'man'], correctAnswer: 'map', hints: ['Blend sounds', 'map']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the first sound in "fish"?', options: ['/f/', '/i/', '/sh/', '/s/'], correctAnswer: '/f/', hints: ['Beginning', '/f/']}
                ],
                activity: { type: 'interactive-practice', description: 'Sound blending', instruction: 'Blend and segment sounds'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RF.K.3 - Decode words',
                content: '<h3>Reading Words</h3><p>Let\'s learn to read words! When we see letters, we can use our knowledge of letter sounds to figure out words. This is called decoding. Start by looking at the first letter and making its sound. Then blend all the sounds together to read the word. For example, when you see the letters c-a-t, you say /c/ /a/ /t/ and blend them to read "cat." Some words we see so often that we learn to recognize them immediately without sounding them out. These are called sight words, like "the," "and," and "is." Reading words gets easier with practice!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What word is this: c-a-n?', options: ['cat', 'can', 'cap', 'car'], correctAnswer: 'can', hints: ['Blend sounds', 'can']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a sight word?', options: ['A word we know instantly', 'A word we sound out', 'A long word', 'A color word'], correctAnswer: 'A word we know instantly', hints: ['Recognize quickly', 'Know instantly']},
                  { id: 'q3', type: 'multiple-choice', question: 'What word is this: d-o-g?', options: ['dig', 'dog', 'dot', 'den'], correctAnswer: 'dog', hints: ['Blend sounds', 'dog']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a sight word you should know?', options: ['the', 'cat', 'jump', 'yellow'], correctAnswer: 'the', hints: ['Common word', 'the']},
                  { id: 'q5', type: 'multiple-choice', question: 'What word is this: s-i-t?', options: ['sat', 'sit', 'set', 'sun'], correctAnswer: 'sit', hints: ['Blend sounds', 'sit']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should you do when you see a new word?', options: ['Skip it', 'Sound it out', 'Guess', 'Give up'], correctAnswer: 'Sound it out', hints: ['Decode', 'Sound it out']},
                  { id: 'q7', type: 'multiple-choice', question: 'What word is this: r-u-n?', options: ['run', 'ran', 'red', 'rug'], correctAnswer: 'run', hints: ['Blend sounds', 'run']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which is a sight word?', options: ['and', 'bug', 'fox', 'zip'], correctAnswer: 'and', hints: ['Common word', 'and']}
                ],
                activity: { type: 'interactive-practice', description: 'Word reading', instruction: 'Decode CVC words'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RF.K.4 - Read with fluency',
                content: '<h3>Reading Smoothly</h3><p>Let\'s practice reading smoothly! When we read fluently, we read words correctly and at a good pace. Fluent readers don\'t have to stop and sound out every word. They recognize many words quickly and can focus on understanding what they read. To build fluency, practice reading the same book or sentence several times. Each time you read it, try to read a little faster and smoother. Reading with expression makes reading more fun! The more you practice reading, the more fluent you will become.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does fluent reading mean?', options: ['Reading smoothly', 'Reading slowly', 'Reading loudly', 'Reading backwards'], correctAnswer: 'Reading smoothly', hints: ['Smooth reading', 'Good pace']},
                  { id: 'q2', type: 'multiple-choice', question: 'How can you build reading fluency?', options: ['Practice reading', 'Never read', 'Only read once', 'Read too fast'], correctAnswer: 'Practice reading', hints: ['Practice helps', 'Read often']},
                  { id: 'q3', type: 'multiple-choice', question: 'Should you read with expression?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Makes it interesting', 'Yes']},
                  { id: 'q4', type: 'multiple-choice', question: 'What should fluent readers focus on?', options: ['Understanding', 'Going fast', 'Being loud', 'Stopping'], correctAnswer: 'Understanding', hints: ['Comprehension', 'Understanding']},
                  { id: 'q5', type: 'multiple-choice', question: 'If you read the same book many times, you will read it:', options: ['Worse', 'Slower', 'Faster and smoother', 'Backwards'], correctAnswer: 'Faster and smoother', hints: ['Practice improves', 'Better']},
                  { id: 'q6', type: 'multiple-choice', question: 'What makes reading more fun?', options: ['Reading with expression', 'Reading slowly', 'Stopping a lot', 'Skipping words'], correctAnswer: 'Reading with expression', hints: ['Use your voice', 'Expression']},
                  { id: 'q7', type: 'multiple-choice', question: 'Do fluent readers sound out every word?', options: ['Yes', 'No', 'Sometimes', 'Always'], correctAnswer: 'No', hints: ['Know words quickly', 'No']}
                ],
                activity: { type: 'interactive-practice', description: 'Fluency practice', instruction: 'Read passages smoothly'}
              }
            ]
          },
          {
            id: 'ela-k-2',
            title: 'Reading Comprehension',
            description: 'Understand and discuss stories and texts. Students will learn to identify story elements, make predictions, and answer questions about what they read. Comprehension skills help readers gain meaning from text and engage with stories.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.K.1 - Ask and answer questions',
                content: '<h3>Understanding Stories</h3><p>Let\'s learn to understand what we read! When you read or listen to a story, it\'s important to think about what is happening. You can ask questions like "Who is in the story?" "What happened?" and "Where does it take place?" Asking and answering questions helps you remember important details from the story. Good readers also answer questions using information from the text. They can point to pictures or words to show their answer. Understanding stories makes reading more enjoyable and meaningful!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What question helps you know who is in the story?', options: ['Who?', 'What?', 'Where?', 'When?'], correctAnswer: 'Who?', hints: ['People or animals', 'Who?']},
                  { id: 'q2', type: 'multiple-choice', question: 'What should you do if you don\'t understand something you read?', options: ['Give up', 'Ask questions', 'Skip it', 'Stop reading'], correctAnswer: 'Ask questions', hints: ['Ask for help', 'Questions']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where can you find answers to questions about a story?', options: ['In the text or pictures', 'Outside', 'In math', 'Nowhere'], correctAnswer: 'In the text or pictures', hints: ['Look at book', 'Text and pictures']},
                  { id: 'q4', type: 'multiple-choice', question: 'What question helps you know what happened in the story?', options: ['Who?', 'What?', 'Why?', 'How?'], correctAnswer: 'What?', hints: ['Events', 'What?']},
                  { id: 'q5', type: 'multiple-choice', question: 'Why is it good to ask questions when reading?', options: ['Helps you understand', 'Makes noise', 'Wastes time', 'Is confusing'], correctAnswer: 'Helps you understand', hints: ['Better comprehension', 'Understanding']},
                  { id: 'q6', type: 'multiple-choice', question: 'What question helps you know where the story happens?', options: ['Who?', 'What?', 'Where?', 'Why?'], correctAnswer: 'Where?', hints: ['Location', 'Where?']},
                  { id: 'q7', type: 'multiple-choice', question: 'Good readers use what to answer questions?', options: ['Guesses', 'Details from text', 'Their opinion only', 'Nothing'], correctAnswer: 'Details from text', hints: ['Text evidence', 'From the story']},
                  { id: 'q8', type: 'multiple-choice', question: 'What makes reading more enjoyable?', options: ['Understanding the story', 'Skipping words', 'Reading too fast', 'Not paying attention'], correctAnswer: 'Understanding the story', hints: ['Comprehension', 'Understanding']}
                ],
                activity: { type: 'interactive-practice', description: 'Story comprehension', instruction: 'Answer questions about stories'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.K.3 - Identify characters and settings',
                content: '<h3>Story Elements</h3><p>Let\'s learn about the parts of a story! Every story has characters, which are the people or animals in the story. The main character is the most important one. Every story also has a setting, which is where and when the story takes place. The setting might be a school, a forest, a castle, or anywhere else. Some stories happen in modern times, and some happen long ago. Understanding characters and settings helps you picture the story in your mind. When you read, pay attention to who is in the story and where they are!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are characters?', options: ['People or animals in the story', 'Places', 'Times', 'Objects'], correctAnswer: 'People or animals in the story', hints: ['Who is in story', 'People/animals']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a setting?', options: ['Where and when story happens', 'The characters', 'The problem', 'The ending'], correctAnswer: 'Where and when story happens', hints: ['Place and time', 'Where and when']},
                  { id: 'q3', type: 'multiple-choice', question: 'Who is the most important character called?', options: ['Side character', 'Main character', 'Setting', 'Plot'], correctAnswer: 'Main character', hints: ['Most important', 'Main character']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is an example of a setting?', options: ['A school', 'A boy named Tom', 'Being happy', 'Running fast'], correctAnswer: 'A school', hints: ['A place', 'School']},
                  { id: 'q5', type: 'multiple-choice', question: 'Can animals be characters?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Characters can be animals', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'Why is it important to know the setting?', options: ['Helps you picture the story', 'Not important', 'Just for fun', 'No reason'], correctAnswer: 'Helps you picture the story', hints: ['Visualize', 'Picture it']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which is a character: the forest OR the rabbit?', options: ['The forest', 'The rabbit', 'Both', 'Neither'], correctAnswer: 'The rabbit', hints: ['Animal in story', 'Rabbit']},
                  { id: 'q8', type: 'multiple-choice', question: 'Can a setting be a time, like "long ago"?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Time and place', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Identify story elements', instruction: 'Find characters and settings'}
              }
            ]
          },
          {
            id: 'ela-k-3',
            title: 'Writing Basics',
            description: 'Begin writing letters, words, and simple sentences. Students will practice forming letters correctly, spelling simple words, and expressing their ideas in writing. These foundational writing skills support communication and self-expression.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.L.K.1 - Print letters',
                content: '<h3>Writing Letters</h3><p>Let\'s learn to write letters! Writing letters clearly is an important skill. Every letter has a specific way it should be formed. Uppercase letters are the big letters we use at the beginning of names and sentences. Lowercase letters are the small letters we use most of the time. When writing, start at the top of the letter and follow the correct stroke order. Hold your pencil correctly with your thumb and first two fingers. Practice writing letters on lined paper to keep them the right size. The more you practice, the better your handwriting will become!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are uppercase letters?', options: ['Big letters', 'Small letters', 'Numbers', 'Shapes'], correctAnswer: 'Big letters', hints: ['Capital letters', 'Big letters']},
                  { id: 'q2', type: 'multiple-choice', question: 'What are lowercase letters?', options: ['Big letters', 'Small letters', 'Numbers', 'Shapes'], correctAnswer: 'Small letters', hints: ['Little letters', 'Small letters']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where should you start when writing a letter?', options: ['Bottom', 'Top', 'Middle', 'Anywhere'], correctAnswer: 'Top', hints: ['Start at top', 'Top']},
                  { id: 'q4', type: 'multiple-choice', question: 'What helps your handwriting improve?', options: ['Practice', 'Never writing', 'Rushing', 'Not caring'], correctAnswer: 'Practice', hints: ['Practice makes perfect', 'Practice']},
                  { id: 'q5', type: 'multiple-choice', question: 'When do we use uppercase letters?', options: ['Start of names and sentences', 'Every word', 'Never', 'Only numbers'], correctAnswer: 'Start of names and sentences', hints: ['Capitals', 'Names and sentences']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should you use to keep letters the right size?', options: ['Lined paper', 'Blank paper', 'No paper', 'Colored paper'], correctAnswer: 'Lined paper', hints: ['Lines help', 'Lined paper']},
                  { id: 'q7', type: 'multiple-choice', question: 'How should you hold your pencil?', options: ['With thumb and two fingers', 'With your fist', 'With one finger', 'In your mouth'], correctAnswer: 'With thumb and two fingers', hints: ['Proper grip', 'Three fingers']}
                ],
                activity: { type: 'interactive-practice', description: 'Letter formation', instruction: 'Practice writing letters'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.W.K.2 - Write simple sentences',
                content: '<h3>Writing Sentences</h3><p>Let\'s learn to write sentences! A sentence is a group of words that tells a complete thought. Every sentence starts with a capital letter and ends with a punctuation mark, usually a period (.). A simple sentence has a subject (who or what) and a verb (action). For example: "The dog runs." The dog is the subject, and runs is the verb. Start by writing short sentences about things you know, like "I like apples" or "The sun is hot." Remember to use spaces between your words. Writing sentences helps you share your ideas!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What should every sentence start with?', options: ['Capital letter', 'Small letter', 'Number', 'Space'], correctAnswer: 'Capital letter', hints: ['Uppercase', 'Capital letter']},
                  { id: 'q2', type: 'multiple-choice', question: 'What should every sentence end with?', options: ['Capital letter', 'Punctuation mark', 'Space', 'Nothing'], correctAnswer: 'Punctuation mark', hints: ['Period, question mark, etc.', 'Punctuation']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is a subject in a sentence?', options: ['Who or what', 'The action', 'The ending', 'The period'], correctAnswer: 'Who or what', hints: ['Person, place, or thing', 'Who or what']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is a verb?', options: ['A person', 'An action word', 'A place', 'A thing'], correctAnswer: 'An action word', hints: ['What someone does', 'Action']},
                  { id: 'q5', type: 'multiple-choice', question: 'Should you put spaces between words?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Need spaces', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'What does a sentence tell?', options: ['A complete thought', 'Just one word', 'A number', 'A color'], correctAnswer: 'A complete thought', hints: ['Complete idea', 'Complete thought']},
                  { id: 'q7', type: 'multiple-choice', question: 'In "The cat sleeps," what is the subject?', options: ['The', 'cat', 'sleeps', 'The cat'], correctAnswer: 'The cat', hints: ['Who or what', 'The cat']},
                  { id: 'q8', type: 'multiple-choice', question: 'In "Birds fly," what is the verb?', options: ['Birds', 'fly', 'Birds fly', 'None'], correctAnswer: 'fly', hints: ['Action word', 'fly']}
                ],
                activity: { type: 'interactive-practice', description: 'Sentence writing', instruction: 'Write complete sentences'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-k-1',
            title: 'Weather, Seasons, and Earth Observation',
            description: 'Observe and describe daily weather patterns, identify the four seasons, and compare basic features of Earth\'s land and water.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.K.1 - Observe and Record Weather',
                content: '<h3>Observing the Weather</h3><p>Weather changes every day! It can be sunny, rainy, cloudy, or snowy. We can observe the weather by looking outside, feeling the temperature, and seeing if the wind is blowing. Scientists record weather patterns using charts and calendars. Recognizing daily weather helps us choose what to wear and plan our activities.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which tool tells us how hot or cold it is?', options: ['Ruler', 'Thermometer', 'Clock', 'Scale'], correctAnswer: 'Thermometer', hints: ['Measures temperature', 'Thermometer']},
                  { id: 'q2', type: 'multiple-choice', question: 'What kind of weather is best for flying a kite?', options: ['Very still air', 'A lot of wind', 'Rain', 'Snow'], correctAnswer: 'A lot of wind', hints: ['Kites need wind to fly', 'Windy']},
                  { id: 'q3', type: 'multiple-choice', question: 'What usually falls from the sky during a rain shower?', options: ['Hail', 'Water', 'Snowflakes', 'Rocks'], correctAnswer: 'Water', hints: ['Rain is liquid water', 'Water']}
                ],
                activity: { type: 'weather-chart', description: 'Start a daily weather chart using pictures and symbols.', instruction: 'Record and discuss the weather for one week.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.K.2 - Identify the Four Seasons',
                content: '<h3>The Changing Seasons</h3><p>We have four **seasons** in a year: **Spring** (flowers grow), **Summer** (hot, long days), **Fall/Autumn** (leaves change color and fall), and **Winter** (cold, sometimes snow). Each season has unique weather and activities. Knowing the seasons helps us understand changes in nature and how animals and plants adapt.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In which season do leaves change color and fall off trees?', options: ['Spring', 'Summer', 'Fall', 'Winter'], correctAnswer: 'Fall', hints: ['Autumn', 'Fall']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which season is the hottest, with the longest days?', options: ['Spring', 'Summer', 'Fall', 'Winter'], correctAnswer: 'Summer', hints: ['Time for swimming', 'Summer']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the season right after Winter, when flowers begin to bloom?', options: ['Spring', 'Summer', 'Fall', 'Winter'], correctAnswer: 'Spring', hints: ['Time for rebirth and growth', 'Spring']}
                ],
                activity: { type: 'season-sort', description: 'Sort pictures of clothing and activities into the four different seasons.', instruction: 'Describe one characteristic of the current season.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.K.3 - Landforms and Water',
                content: '<h3>Land and Water on Earth</h3><p>Our Earth is covered in **land** and **water**. Examples of **landforms** include hills, mountains (very tall hills), and flat plains. Examples of **water bodies** include ponds, lakes, and oceans (very big, salty water). Water takes up more space than land. We can observe different landforms and bodies of water near our community.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is an example of a **water body**?', options: ['A hill', 'A mountain', 'An ocean', 'A flat plain'], correctAnswer: 'An ocean', hints: ['Large body of water', 'Ocean']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a very tall landform called?', options: ['A river', 'A lake', 'A mountain', 'A valley'], correctAnswer: 'A mountain', hints: ['Highest landform', 'Mountain']},
                  { id: 'q3', type: 'multiple-choice', question: 'Does land or water cover more of the Earth\'s surface?', options: ['Land', 'Water', 'They cover the same amount', 'Neither'], correctAnswer: 'Water', hints: ['Most of the planet is covered in oceans', 'Water']}
                ],
                activity: { type: 'earth-model-sort', description: 'Use playdough or blocks to model a hill, a flat plain, and a pond.', instruction: 'Identify an example of a water body in your state.' }
              }
            ]
          },
          {
            id: 'science-k-2',
            title: 'Basic Needs of Living Things',
            description: 'Identify and compare the basic needs of plants and animals for growth and survival, and examine animal movement.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.K.4 - Needs of Plants',
                content: '<h3>What Plants Need to Live</h3><p>Plants are living things and need specific things to grow. They need **sunlight** (for energy), **water**, and **air**. They usually grow in **soil** which gives them support and nutrients. If a plant is missing one of these needs, it cannot grow big and strong. Practice giving a plant exactly what it needs!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which provides energy for a plant?', options: ['Darkness', 'The moon', 'Sunlight', 'Rocks'], correctAnswer: 'Sunlight', hints: ['Source of energy', 'Sunlight']},
                  { id: 'q2', type: 'multiple-choice', question: 'What do plants need from the air?', options: ['Smoke', 'Carbon dioxide', 'Food', 'Sugar'], correctAnswer: 'Carbon dioxide', hints: ['Used for growth', 'Carbon dioxide']},
                  { id: 'q3', type: 'multiple-choice', question: 'A plant will stop growing if it does not get enough:', options: ['Toys', 'Music', 'Water', 'Hats'], correctAnswer: 'Water', hints: ['Essential for life', 'Water']}
                ],
                activity: { type: 'plant-needs-setup', description: 'Set up an experiment where one plant gets water and light, and another gets no light.', instruction: 'Predict which plant will grow the tallest.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.K.5 - Needs of Animals',
                content: '<h3>What Animals Need to Live</h3><p>Animals are living things too, and they have three major needs: **food**, **water**, and **shelter** (a safe place to live). Different animals eat different types of food (meat, plants, or both). Animals need shelter to protect them from weather and danger. These basic needs are why animals move around and build homes.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What do all animals need to have for survival?', options: ['A large house', 'A car', 'Food and water', 'A sweater'], correctAnswer: 'Food and water', hints: ['Basic biological needs', 'Food and water']},
                  { id: 'q2', type: 'multiple-choice', question: 'A safe place for an animal to live is called:', options: ['A light source', 'Shelter', 'Food', 'Water'], correctAnswer: 'Shelter', hints: ['Protection from weather and predators', 'Shelter']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which animal eats only meat?', options: ['A rabbit', 'A cow', 'A lion', 'A deer'], correctAnswer: 'A lion', hints: ['Carnivore', 'Lion']}
                ],
                activity: { type: 'animal-habitat-match', description: 'Match pictures of animals to their correct shelter (e.g., bird $\to$ nest, bear $\to$ cave).', instruction: 'Describe the shelter used by a common household pet.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.K.6 - Animal Movement',
                content: '<h3>How Animals Move</h3><p>Animals move in many different ways: they can walk, run, hop, swim, or fly. The way an animal moves often depends on where it lives. Fish **swim** in water. Birds **fly** in the air. Rabbits **hop** on land. The different types of movement help them find food, escape danger, and find shelter.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How do fish mainly move?', options: ['Fly', 'Walk', 'Swim', 'Crawl'], correctAnswer: 'Swim', hints: ['In water', 'Swim']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which animal **flies**?', options: ['A horse', 'A bird', 'A snake', 'A whale'], correctAnswer: 'A bird', hints: ['Uses wings', 'Bird']},
                  { id: 'q3', type: 'multiple-choice', question: 'The way an animal moves is most related to its:', options: ['Color', 'Habitat (where it lives)', 'Size only', 'Sound'], correctAnswer: 'Habitat (where it lives)', hints: ['Movement is adapted to environment', 'Habitat']}
                ],
                activity: { type: 'movement-imitation', description: 'Imitate the movement of different animals (e.g., slithering snake, hopping frog, flying bird).', instruction: 'Compare how a snake moves versus how a dog moves.' }
              }
            ]
          },
          {
            id: 'science-k-3',
            title: 'Materials and Force',
            description: 'Explore and classify objects based on the materials they are made of and their properties. Students will investigate how forces affect an object\'s movement.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.K.7 - Classify by Properties and Material',
                content: '<h3>Sorting Materials</h3><p>Everything is made of **matter**, and matter has **properties** that we can observe. We can sort objects by their properties, like color, size, shape, and the **material** they are made of (e.g., wood, plastic, metal, and fabric). Scientists sort and classify objects to help them understand how things work and what they are best used for.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What material is a drinking cup usually made of?', options: ['Metal', 'Wood', 'Plastic', 'Water'], correctAnswer: 'Plastic', hints: ['Lightweight and waterproof', 'Plastic']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which of these is the **softest** material?', options: ['Rock', 'Metal spoon', 'Cotton ball', 'Wood block'], correctAnswer: 'Cotton ball', hints: ['Easily compressed', 'Cotton']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which material is best for making a **window**?', options: ['Wood', 'Metal', 'Cloth', 'Glass'], correctAnswer: 'Glass', hints: ['Transparent, lets light through', 'Glass']}
                ],
                activity: { type: 'sorting-game', description: 'Sort objects into groups of metal, plastic, and paper.', instruction: 'Describe one object using three different properties (e.g., smooth, red, plastic).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.K.8 - Simple Forces',
                content: '<h3>Pushing and Pulling to Move</h3><p>A **force** is a push or a pull. You need a force to make an object start moving, stop moving, or change direction. When you roll a ball across the floor, you **push** it. When you open a door, you usually **pull** it. The strength of your push or pull affects how quickly or how far the object moves.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is needed to make a swing start moving?', options: ['Only the sun', 'A push or a pull (force)', 'The color of the swing', 'Only gravity'], correctAnswer: 'A push or a pull (force)', hints: ['Requires energy transfer', 'Push or pull']},
                  { id: 'q2', type: 'multiple-choice', question: 'To close a door that opens toward you, you must:', options: ['Push it', 'Pull it', 'Lift it', 'Ignore it'], correctAnswer: 'Push it', hints: ['Moving away from you', 'Push it']},
                  { id: 'q3', type: 'multiple-choice', question: 'A stronger push will make a toy car move:', options: ['Slower', 'Faster', 'Stay the same', 'Move backward'], correctAnswer: 'Faster', hints: ['More force equals more acceleration', 'Faster']}
                ],
                activity: { type: 'force-investigation', description: 'Roll a toy car, observing how a push starts it and how a pull stops it.', instruction: 'Demonstrate how to change the car\'s direction using a push.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.K.9 - Gravity and Movement',
                content: '<h3>Gravity: The Downward Pull</h3><p>**Gravity** is an invisible **pull** that brings everything down toward the ground. When you jump up, gravity pulls you back down. When you drop a ball, gravity makes it fall. Gravity is a natural force that keeps things from floating away and is why things always fall down, not up.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What makes a dropped apple fall to the ground?', options: ['A push', 'A pull (gravity)', 'Wind', 'It has no mass'], correctAnswer: 'A pull (gravity)', hints: ['The force pulling things down', 'Gravity']},
                  { id: 'q2', type: 'multiple-choice', question: 'If you throw a ball up, what brings it back down?', options: ['The thrower\'s arm', 'Gravity', 'The sky', 'The wind'], correctAnswer: 'Gravity', hints: ['It always pulls down', 'Gravity']},
                  { id: 'q3', type: 'multiple-choice', question: 'Gravity pulls objects:', options: ['Up', 'Down', 'Sideways', 'In a circle'], correctAnswer: 'Down', hints: ['Towards the center of the Earth', 'Down']}
                ],
                activity: { type: 'gravity-drop', description: 'Drop various objects (feather, ball, paper) and observe that they all fall due to gravity.', instruction: 'Explain why the ball hits the floor before the feather (Air resistance is the cause).' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-k-1',
            title: 'Civics and Citizenship',
            description: 'Understand the difference between a school and community, identify the importance of rules and laws, and introduce basic concepts of good citizenship, voting, and the American Flag.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.K.1 - Rules, Laws, and Community',
                content: '<h3>Rules and My Community</h3><p>We learn about our world through our **community**. Our classroom is a community, and our town or city is a community. Both need **rules and laws** to keep people safe and help them get along. Rules in the classroom might be about sharing. Laws in the town might be about stopping at red lights. Following the rules is part of being a good citizen!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who is a community helper that puts out fires?', options: ['Teacher', 'Doctor', 'Firefighter', 'Librarian'], correctAnswer: 'Firefighter', hints: ['Helps in emergencies', 'Firefighter']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why are laws important in a town?', options: ['To make people sad', 'To make people safe', 'To be confusing', 'To make things messy'], correctAnswer: 'To make people safe', hints: ['Keeps order and safety', 'Safety']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is an example of a good citizen action?', options: ['Littering', 'Tattling', 'Following rules', 'Yelling'], correctAnswer: 'Following rules', hints: ['Shows respect for the community', 'Follow rules']}
                ],
                activity: { type: 'community-role-play', description: 'Act out the roles of different community helpers (e.g., police, doctor, teacher).', instruction: 'Draw a picture of your favorite community helper and explain their job.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.K.2 - Voting and Decision Making',
                content: '<h3>How We Make Choices</h3><p>A good way to make a decision when a group disagrees is through **voting**. Everyone gets one vote. We count the votes, and the choice with the most votes **wins**. This is a simple form of **democracy**. We can vote on what book to read or what game to play. Voting is a fair way to decide.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'When a group is voting, how many votes does each person get?', options: ['Zero', 'One', 'Two', 'Five'], correctAnswer: 'One', hints: ['Equal say', 'One vote']},
                  { id: 'q2', type: 'multiple-choice', question: 'In a vote, which choice wins?', options: ['The choice with the least votes', 'The choice with the most votes', 'The loudest choice', 'The fastest choice'], correctAnswer: 'The choice with the most votes', hints: ['The majority', 'Most votes']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is a fair way to choose a class helper?', options: ['The teacher decides', 'Only the oldest can be chosen', 'Flipping a coin', 'Voting'], correctAnswer: 'Voting', hints: ['Democratic way to choose', 'Voting']}
                ],
                activity: { type: 'class-vote', description: 'Hold a class vote on two simple choices (e.g., apple vs. banana, red vs. blue).', instruction: 'Count the votes and announce the winning choice.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.K.3 - The American Flag',
                content: '<h3>The American Flag and Patriotism</h3><p>The American Flag is a symbol of our country. It has **50 stars** (one for each state) and **13 stripes** (one for each original colony). **Patriotism** is showing love and respect for your country. We show patriotism by saying the Pledge of Allegiance and respecting the flag. It is important to treat all national symbols with respect.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How many stars are on the American Flag?', options: ['13', '50', '25', '100'], correctAnswer: '50', hints: ['One for each state', 'Fifty stars']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does each star on the flag represent?', options: ['A president', 'A holiday', 'A state', 'A city'], correctAnswer: 'A state', hints: ['Represents a unit of the country', 'A state']},
                  { id: 'q3', type: 'multiple-choice', question: 'Showing love and respect for your country is called:', options: ['Cooperation', 'Patriotism', 'Voting', 'Geography'], correctAnswer: 'Patriotism', hints: ['Feeling of national pride', 'Patriotism']}
                ],
                activity: { type: 'flag-assembly', description: 'Color and assemble a simple model of the American Flag, focusing on the correct number of stars and stripes.', instruction: 'Explain why we stand during the National Anthem.' }
              }
            ]
          },
          {
            id: 'ss-k-2',
            title: 'Basic Geography and Time',
            description: 'Locate their country, state, and city on a map or globe. Understand the difference between the past and present.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.K.4 - Map and Globe Location',
                content: '<h3>Finding My Place</h3><p>We can use a **map** or **globe** to find where we live. We live in the city of [Student\'s City/Nearest Major City], in the state of **Mississippi**, in the country called the **United States of America**. The globe shows the whole Earth, and a map shows a smaller, flat area. Learning to locate these places helps us understand our world.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the name of our state?', options: ['Texas', 'Mississippi', 'Florida', 'New York'], correctAnswer: 'Mississippi', hints: ['Our home state', 'Mississippi']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is a model of the entire Earth?', options: ['A street map', 'A globe', 'A picture of a city', 'A book'], correctAnswer: 'A globe', hints: ['A sphere representing Earth', 'Globe']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where is the United States of America located?', options: ['Africa', 'Asia', 'North America', 'Australia'], correctAnswer: 'North America', hints: ['Our continent', 'North America']}
                ],
                activity: { type: 'location-puzzle', description: 'Assemble a simple puzzle map of the United States and locate Mississippi.', instruction: 'Point to the United States on a classroom globe.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.K.5 - Past vs. Present',
                content: '<h3>Long Ago and Now</h3><p>**Past** means long ago—it is already finished (like when you were a baby). **Present** means what is happening right now (**today**). We study the past to learn from history. People in the past wore different clothes and used different tools than they do now in the present. Comparing the past and the present helps us see how things change over time.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If you are talking about what you did yesterday, you are talking about the:', options: ['Past', 'Present', 'Future', 'Now'], correctAnswer: 'Past', hints: ['The time that is finished', 'Past']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which picture shows something from the **past**?', options: ['A cell phone', 'A horse and carriage', 'A modern car', 'A flat-screen TV'], correctAnswer: 'A horse and carriage', hints: ['Technology from long ago', 'Horse and carriage']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which word means **now**?', options: ['Past', 'Yesterday', 'Present', 'Tomorrow'], correctAnswer: 'Present', hints: ['Current time', 'Present']}
                ],
                activity: { type: 'past-present-sort', description: 'Sort images of old objects (e.g., rotary phone) and modern objects (e.g., smartphone).', instruction: 'Identify one tool used by their grandparents that they do not use now.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.K.6 - Historical Figures',
                content: '<h3>People Who Made a Difference</h3><p>Some people in the past made a big difference in history. These **historical figures** are important to remember. For example, **George Washington** was the first President of the United States. **Martin Luther King Jr.** worked hard for equal rights for all people. Learning about them teaches us about courage, leadership, and making the world better.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'Martin Luther King Jr.', 'George Washington', 'Barack Obama'], correctAnswer: 'George Washington', hints: ['The first leader', 'George Washington']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which historical figure is known for fighting for equal rights for all people?', options: ['Martin Luther King Jr.', 'Christopher Columbus', 'Thomas Jefferson', 'King George'], correctAnswer: 'Martin Luther King Jr.', hints: ['Civil rights leader', 'MLK Jr.']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is it important to learn about historical figures?', options: ['It is fun to see old pictures', 'They teach us lessons about the past', 'They are all alive today', 'They did not matter'], correctAnswer: 'They teach us lessons about the past', hints: ['Learning from the past', 'Learn lessons']}
                ],
                activity: { type: 'figure-story', description: 'Listen to a short, simple story about George Washington or MLK Jr.', instruction: 'Draw a picture representing a brave action taken by the figure.' }
              }
            ]
          },
          {
            id: 'ss-k-3',
            title: 'Basic Economic Concepts',
            description: 'Understand the role of people as producers and consumers. Identify the basic needs that all people share.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.K.7 - Producers and Consumers',
                content: '<h3>Makers and Buyers</h3><p>In our community, people are either **producers** (people who **make** or **sell** things) or **consumers** (people who **buy** and **use** things). A baker who makes bread is a producer. You, when you buy the bread, are a consumer. We are often both! A good economy happens when producers make what consumers want.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'A farmer who grows apples is a:', options: ['Consumer', 'Buyer', 'Producer', 'Teacher'], correctAnswer: 'Producer', hints: ['Making or growing a product', 'Producer']},
                  { id: 'q2', type: 'multiple-choice', question: 'When you buy a toy at the store, you are acting as a:', options: ['Producer', 'Seller', 'Consumer', 'Maker'], correctAnswer: 'Consumer', hints: ['Using or buying a product', 'Consumer']},
                  { id: 'q3', type: 'multiple-choice', question: 'Are you only a consumer, only a producer, or both?', options: ['Only a consumer', 'Only a producer', 'Both', 'Neither'], correctAnswer: 'Both', hints: ['You buy things, and you also make things (like drawings)', 'Both']}
                ],
                activity: { type: 'role-play-market', description: 'Set up a simple "market" in the classroom where students can role-play being a producer and a consumer.', instruction: 'Identify the producer and consumer in the classroom market.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.K.8 - Basic Needs',
                content: '<h3>What Everyone Needs</h3><p>All people, no matter where they live, share the same **basic needs**. These include **food**, **water**, and **shelter** (a home to be safe in). If a person has all of their basic needs met, they can live a healthy life. If they do not have these things, they cannot survive.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a universal basic need?', options: ['A new video game', 'A big house', 'A supply of clean water', 'A bicycle'], correctAnswer: 'A supply of clean water', hints: ['Required for survival', 'Water']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is another word for **shelter**?', options: ['A toy', 'A home', 'A food', 'A car'], correctAnswer: 'A home', hints: ['A safe place to live', 'A home']},
                  { id: 'q3', type: 'multiple-choice', question: 'Do people in all countries need food to survive?', options: ['No, only some countries', 'Yes, all people need food', 'Only if it is cold', 'Only if it is hot'], correctAnswer: 'Yes, all people need food', hints: ['Universal biological need', 'Yes, all people']}
                ],
                activity: { type: 'needs-picture-collage', description: 'Create a collage using pictures of food, water, and homes.', instruction: 'Discuss why one need (e.g., water) is more important than a want (e.g., soda).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.K.9 - Use of Money',
                content: '<h3>The Purpose of Money</h3><p>**Money** is anything that people use to buy things. We use money (**dollars and coins**) to buy **goods** (things we can touch) and **services** (work people do for us). Money makes trade easier than trying to trade items directly. It helps us get what we need and want.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What do we use to buy goods and services?', options: ['Leaves', 'Rocks', 'Money', 'Shoes'], correctAnswer: 'Money', hints: ['Medium of exchange', 'Money']},
                  { id: 'q2', type: 'multiple-choice', question: 'A haircut is an example of a:', options: ['Good', 'Product', 'Service', 'Want'], correctAnswer: 'Service', hints: ['Work done for someone', 'Service']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which coin is worth the least amount?', options: ['Dime (10¢)', 'Quarter (25¢)', 'Nickel (5¢)', 'Penny (1¢)'], correctAnswer: 'Penny (1¢)', hints: ['Lowest value coin', 'Penny']}
                ],
                activity: { type: 'money-identification', description: 'Practice identifying the penny, nickel, dime, and quarter by name and value.', instruction: 'Role-play buying a pencil for 5 cents using a nickel.' }
              }
            ]
          }
        ]
      },
      '1st Grade': {
        'Math': [
          {
            id: 'math-1st-1',
            title: 'Addition and Subtraction within 20',
            description: 'Master addition and subtraction facts within 20 using various strategies. Students will learn to solve word problems, use mental math strategies, and understand the relationship between addition and subtraction. These fundamental operations are the building blocks for all future mathematical learning.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.1.OA.1 - Addition strategies',
                content: '<h3>Addition Strategies</h3><p>Let\'s learn smart strategies for addition! Instead of counting by ones, we can use helpful strategies to add faster. One strategy is "counting on" - start with the bigger number and count up. For example, to solve 8 + 3, start at 8 and count up three: 9, 10, 11. Another strategy is "making ten" - if you have 7 + 5, you can think: 7 needs 3 to make 10, so take 3 from the 5, making 10 + 2 = 12. You can also use doubles: if you know 6 + 6 = 12, then 6 + 7 is just one more, which equals 13. Using strategies makes math easier and faster!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 9 + 4?', correctAnswer: '13', hints: ['Count on from 9', 'Thirteen']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which strategy helps you add 8 + 7?', options: ['Counting all', 'Making ten', 'Guessing', 'Skipping'], correctAnswer: 'Making ten', hints: ['8 + 2 + 5', 'Make 10']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is 7 + 6?', correctAnswer: '13', hints: ['Near double 7+7', 'Thirteen']},
                  { id: 'q4', type: 'multiple-choice', question: 'If you know 5 + 5 = 10, what is 5 + 6?', options: ['10', '11', '12', '13'], correctAnswer: '11', hints: ['One more than double', 'Eleven']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 8 + 8?', correctAnswer: '16', hints: ['Double 8', 'Sixteen']},
                  { id: 'q6', type: 'multiple-choice', question: 'To add 9 + 5, you can count on from:', options: ['5', '9', '1', '0'], correctAnswer: '9', hints: ['Start with bigger number', 'Nine']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 6 + 9?', correctAnswer: '15', hints: ['Make ten strategy', 'Fifteen']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is 7 + 7?', options: ['12', '13', '14', '15'], correctAnswer: '14', hints: ['Double seven', 'Fourteen']}
                ],
                activity: { type: 'interactive-practice', description: 'Addition practice', instruction: 'Use strategies to add'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.1.OA.4 - Subtraction strategies',
                content: '<h3>Subtraction Strategies</h3><p>Let\'s learn smart strategies for subtraction! One strategy is "counting back" - start at the bigger number and count backwards. For example, to solve 12 - 3, start at 12 and count back three: 11, 10, 9. Another strategy is "counting up" - start at the smaller number and count up until you reach the bigger number. To solve 13 - 8, start at 8 and count up: 9, 10, 11, 12, 13 - that\'s 5 jumps! You can also think about related addition facts. If you know 6 + 7 = 13, then 13 - 7 = 6. Using subtraction strategies helps you solve problems quickly!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 15 - 6?', correctAnswer: '9', hints: ['Count up or back', 'Nine']},
                  { id: 'q2', type: 'multiple-choice', question: 'If 8 + 5 = 13, what is 13 - 5?', options: ['7', '8', '9', '10'], correctAnswer: '8', hints: ['Related fact', 'Eight']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is 14 - 7?', correctAnswer: '7', hints: ['Half of 14', 'Seven']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which strategy can help with 11 - 9?', options: ['Counting up', 'Guessing', 'Adding more', 'Multiplying'], correctAnswer: 'Counting up', hints: ['From 9 to 11', 'Count up']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 16 - 8?', correctAnswer: '8', hints: ['Half of 16', 'Eight']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 12 - 4?', options: ['6', '7', '8', '9'], correctAnswer: '8', hints: ['Count back', 'Eight']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If 7 + 6 = 13, what is 13 - 6?', correctAnswer: '7', hints: ['Related addition fact', 'Seven']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is 17 - 9?', options: ['6', '7', '8', '9'], correctAnswer: '8', hints: ['Count up from 9', 'Eight']}
                ],
                activity: { type: 'interactive-practice', description: 'Subtraction practice', instruction: 'Use strategies to subtract'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.1.OA.2 - Word problems',
                content: '<h3>Solving Word Problems</h3><p>Let\'s solve word problems! Word problems tell a story with numbers and ask you to find an answer. First, read the problem carefully and think about what\'s happening. Are things being put together (addition) or taken away (subtraction)? Look for key words like "in all" (add) or "left" (subtract). Next, identify the numbers in the problem. Then decide whether to add or subtract. Finally, solve the problem and check if your answer makes sense. Drawing pictures or using objects can help you visualize the problem. Word problems show us how we use math in real life!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Sara has 5 apples. She gets 7 more. How many apples does she have in all?', correctAnswer: '12', hints: ['Add them together', 'Twelve']},
                  { id: 'q2', type: 'multiple-choice', question: 'Tom had 14 toys. He gave 6 to his friend. How many toys does he have left?', options: ['6', '7', '8', '9'], correctAnswer: '8', hints: ['Subtract', 'Eight']},
                  { id: 'q3', type: 'fill-in-blank', question: 'There are 8 birds on a tree. 5 more birds join them. How many birds are there now?', correctAnswer: '13', hints: ['Add the birds', 'Thirteen']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which word usually means to subtract?', options: ['In all', 'Left', 'Together', 'Total'], correctAnswer: 'Left', hints: ['Taking away', 'Left over']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Jake has 11 stickers. He uses 4 stickers. How many stickers does he have now?', correctAnswer: '7', hints: ['Subtract', 'Seven']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which word usually means to add?', options: ['Left', 'Remaining', 'In all', 'Less'], correctAnswer: 'In all', hints: ['Total', 'In all']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Emma sees 6 cats and 9 dogs at the park. How many animals does she see?', correctAnswer: '15', hints: ['Add both groups', 'Fifteen']},
                  { id: 'q8', type: 'multiple-choice', question: 'What should you do first when solving a word problem?', options: ['Guess the answer', 'Read carefully', 'Write any number', 'Skip it'], correctAnswer: 'Read carefully', hints: ['Understand the problem', 'Read carefully']}
                ],
                activity: { type: 'interactive-practice', description: 'Word problems', instruction: 'Solve real-world math problems'}
              },
              {
                id: 'lesson-4',
                objective: 'MCCRS.Math.1.OA.6 - Fact fluency',
                content: '<h3>Addition and Subtraction Fact Fluency</h3><p>Let\'s practice our math facts until we know them quickly! Fact fluency means you can solve basic addition and subtraction problems fast and correctly without counting on your fingers or using objects. When you know your facts fluently, you can solve harder problems more easily. Practice the same facts many times until you can answer automatically. Start with easier facts like doubles (4 + 4, 5 + 5) and near doubles (4 + 5, 6 + 7). Then work on facts that make 10 (7 + 3, 8 + 2). The more you practice, the faster you\'ll become! Knowing your math facts helps you in all areas of math.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Quick! What is 6 + 6?', correctAnswer: '12', hints: ['Double six', 'Twelve']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Quick! What is 10 - 3?', correctAnswer: '7', hints: ['Count back from 10', 'Seven']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Quick! What is 7 + 3?', correctAnswer: '10', hints: ['Makes ten', 'Ten']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Quick! What is 15 - 5?', correctAnswer: '10', hints: ['Take away five', 'Ten']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Quick! What is 9 + 9?', correctAnswer: '18', hints: ['Double nine', 'Eighteen']},
                  { id: 'q6', type: 'fill-in-blank', question: 'Quick! What is 12 - 6?', correctAnswer: '6', hints: ['Half of 12', 'Six']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Quick! What is 8 + 2?', correctAnswer: '10', hints: ['Makes ten', 'Ten']},
                  { id: 'q8', type: 'fill-in-blank', question: 'Quick! What is 11 - 1?', correctAnswer: '10', hints: ['One less', 'Ten']}
                ],
                activity: { type: 'interactive-practice', description: 'Timed fact practice', instruction: 'Practice for speed and accuracy'}
              }
            ]
          },
          {
            id: 'math-1st-2',
            title: 'Place Value and Number Sense',
            description: 'Understand place value for two-digit numbers and compare quantities. Students will learn that two-digit numbers represent tens and ones, compare numbers using <, >, and =, and count by 2s, 5s, and 10s. Place value understanding is crucial for all future work with larger numbers and operations.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.1.NBT.2 - Understand place value',
                content: '<h3>Tens and Ones</h3><p>Let\'s learn about place value! Every two-digit number has two parts: tens and ones. The tens digit tells you how many groups of ten, and the ones digit tells you how many extra ones. For example, the number 47 has 4 tens (which equals 40) and 7 ones. So 47 = 40 + 7. We can show this using base-ten blocks: ten-sticks for tens and small cubes for ones. Understanding place value helps you see that 47 is much bigger than 7 because it has tens! When you understand place value, you can read, write, and work with bigger numbers. This is one of the most important math concepts you\'ll learn!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'How many tens are in 36?', correctAnswer: '3', hints: ['First digit', 'Three']},
                  { id: 'q2', type: 'fill-in-blank', question: 'How many ones are in 52?', correctAnswer: '2', hints: ['Second digit', 'Two']},
                  { id: 'q3', type: 'multiple-choice', question: 'What number is 4 tens and 8 ones?', options: ['48', '84', '12', '40'], correctAnswer: '48', hints: ['Tens first, ones second', 'Forty-eight']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is the value of the 7 in 73?', correctAnswer: '70', hints: ['Tens place', 'Seventy']},
                  { id: 'q5', type: 'multiple-choice', question: 'What number is 6 tens and 0 ones?', options: ['6', '60', '16', '61'], correctAnswer: '60', hints: ['Six groups of ten', 'Sixty']},
                  { id: 'q6', type: 'fill-in-blank', question: 'How many tens are in 90?', correctAnswer: '9', hints: ['Nine tens', 'Nine']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is 50 + 4?', options: ['9', '45', '54', '504'], correctAnswer: '54', hints: ['Five tens and four ones', 'Fifty-four']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is the value of the 2 in 28?', correctAnswer: '20', hints: ['Tens place', 'Twenty']}
                ],
                activity: { type: 'interactive-practice', description: 'Place value practice', instruction: 'Identify tens and ones'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.1.NBT.3 - Compare numbers',
                content: '<h3>Comparing Two-Digit Numbers</h3><p>Let\'s learn to compare two-digit numbers! When comparing numbers, we use three symbols: greater than (>), less than (<), and equal to (=). To compare two numbers, first look at the tens place. The number with more tens is greater. If the tens are the same, then look at the ones place. For example, to compare 47 and 52, we see that 5 tens is more than 4 tens, so 52 > 47. To compare 63 and 68, the tens are the same (both have 6), but 8 ones is more than 3 ones, so 68 > 63. Remember, the greater than symbol points to the smaller number like a hungry alligator wanting to eat the bigger number!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is greater: 54 or 45?', options: ['54', '45', 'Same', 'Cannot tell'], correctAnswer: '54', hints: ['Compare tens first', 'Fifty-four']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which symbol goes between: 37 ___ 41?', options: ['<', '>', '=', '+'], correctAnswer: '<', hints: ['37 is less than 41', 'Less than']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is greater: 68 or 62?', options: ['68', '62', 'Same', 'Cannot tell'], correctAnswer: '68', hints: ['Same tens, compare ones', 'Sixty-eight']},
                  { id: 'q4', type: 'multiple-choice', question: 'Is 75 > 57 true or false?', options: ['True', 'False', 'Maybe', 'Cannot tell'], correctAnswer: 'True', hints: ['7 tens vs 5 tens', 'True']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which symbol goes between: 89 ___ 89?', options: ['<', '>', '=', '-'], correctAnswer: '=', hints: ['Same number', 'Equal']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is less: 23 or 32?', options: ['23', '32', 'Same', 'Cannot tell'], correctAnswer: '23', hints: ['2 tens vs 3 tens', 'Twenty-three']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which symbol goes between: 91 ___ 88?', options: ['<', '>', '=', '+'], correctAnswer: '>', hints: ['91 is greater', 'Greater than']},
                  { id: 'q8', type: 'multiple-choice', question: 'Put in order from least to greatest: 45, 54, 39', options: ['39, 45, 54', '54, 45, 39', '45, 39, 54', '39, 54, 45'], correctAnswer: '39, 45, 54', hints: ['Start with smallest', '39, 45, 54']}
                ],
                activity: { type: 'interactive-practice', description: 'Number comparison', instruction: 'Compare two-digit numbers'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.1.NBT.5 - Skip counting',
                content: '<h3>Skip Counting</h3><p>Let\'s learn to skip count! Skip counting means counting by numbers other than 1. When we skip count by 2s, we say 2, 4, 6, 8, 10, and so on. When we skip count by 5s, we say 5, 10, 15, 20, 25, and continue. When we skip count by 10s, we say 10, 20, 30, 40, up to 100. Skip counting is faster than counting by ones and helps us get ready for multiplication. You can skip count to count groups of objects quickly. For example, if you have 5 groups of 2 apples, you can count by 2s: 2, 4, 6, 8, 10 apples! Practice skip counting forwards and backwards to become really good at it.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Count by 2s: 2, 4, 6, ___, 10', correctAnswer: '8', hints: ['Next even number', 'Eight']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Count by 5s: 5, 10, 15, ___, 25', correctAnswer: '20', hints: ['Add five', 'Twenty']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Count by 10s: 10, 20, 30, ___, 50', correctAnswer: '40', hints: ['Next ten', 'Forty']},
                  { id: 'q4', type: 'multiple-choice', question: 'What comes after 16 when counting by 2s?', options: ['17', '18', '19', '20'], correctAnswer: '18', hints: ['Add two', 'Eighteen']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Count by 5s: 30, 35, 40, ___, 50', correctAnswer: '45', hints: ['Add five', 'Forty-five']},
                  { id: 'q6', type: 'multiple-choice', question: 'What comes before 60 when counting by 10s?', options: ['40', '50', '59', '70'], correctAnswer: '50', hints: ['One ten before', 'Fifty']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Count by 2s: 12, 14, ___, 18, 20', correctAnswer: '16', hints: ['Between 14 and 18', 'Sixteen']},
                  { id: 'q8', type: 'multiple-choice', question: 'If you count by 5s from 0 to 20, how many numbers do you say?', options: ['3', '4', '5', '6'], correctAnswer: '5', hints: ['0, 5, 10, 15, 20', 'Five numbers']}
                ],
                activity: { type: 'interactive-practice', description: 'Skip counting', instruction: 'Practice counting by 2s, 5s, and 10s'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-1st-1',
            title: 'Reading Foundations',
            description: 'Develop strong phonics skills and reading fluency with multi-syllable words. Students will decode words with various vowel patterns, read with expression and accuracy, and build a strong sight word vocabulary. These skills enable students to become confident, independent readers.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RF.1.2 - Vowel patterns',
                content: '<h3>Long and Short Vowels</h3><p>Let\'s learn about vowel sounds! The vowels are A, E, I, O, and U. Each vowel can make two sounds: a short sound and a long sound. Short vowels make their quick sound, like the "a" in "cat," the "e" in "bed," the "i" in "sit," the "o" in "hot," and the "u" in "cup." Long vowels say their own name, like the "a" in "cake," the "e" in "feet," the "i" in "bike," the "o" in "rope," and the "u" in "cute." Often, when a word has a silent e at the end, the vowel before it says its long sound. This is called the "magic e" or "silent e" rule. Understanding vowel patterns helps you read and spell many words correctly!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Does "cat" have a short or long "a" sound?', options: ['Short', 'Long', 'Neither', 'Both'], correctAnswer: 'Short', hints: ['Quick sound', 'Short a']},
                  { id: 'q2', type: 'multiple-choice', question: 'Does "cake" have a short or long "a" sound?', options: ['Short', 'Long', 'Neither', 'Both'], correctAnswer: 'Long', hints: ['Says its name', 'Long a']},
                  { id: 'q3', type: 'multiple-choice', question: 'What sound does "e" make in "bed"?', options: ['Short e', 'Long e', 'No sound', 'Both'], correctAnswer: 'Short e', hints: ['Quick sound', 'Short e']},
                  { id: 'q4', type: 'multiple-choice', question: 'What does the "e" at the end of "bike" do?', options: ['Makes "i" long', 'Makes "i" short', 'Nothing', 'Makes it plural'], correctAnswer: 'Makes "i" long', hints: ['Magic e', 'Makes it long']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which word has a long "o" sound?', options: ['hot', 'rope', 'dog', 'mom'], correctAnswer: 'rope', hints: ['Has silent e', 'Rope']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which word has a short "u" sound?', options: ['cute', 'cup', 'use', 'tube'], correctAnswer: 'cup', hints: ['No silent e', 'Cup']},
                  { id: 'q7', type: 'multiple-choice', question: 'What sound does "ee" usually make in words like "feet"?', options: ['Short e', 'Long e', 'Short i', 'Long i'], correctAnswer: 'Long e', hints: ['Says e name', 'Long e']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which word has a long "a" sound?', options: ['hat', 'make', 'cat', 'bat'], correctAnswer: 'make', hints: ['Has silent e', 'Make']}
                ],
                activity: { type: 'interactive-practice', description: 'Vowel practice', instruction: 'Identify vowel sounds in words'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RF.1.3 - Decode multi-syllable words',
                content: '<h3>Breaking Words into Syllables</h3><p>Let\'s learn about syllables! A syllable is a word part that has one vowel sound. Some words have one syllable like "cat," and some have multiple syllables like "bas-ket" (2 syllables) or "din-o-saur" (3 syllables). To read longer words, we can break them into syllables, read each part, and then blend them together. You can clap syllables to help you hear them. Every syllable must have at least one vowel sound. When you see a big word, don\'t be scared! Just break it apart, read each chunk, and put it back together. This strategy will help you read bigger and bigger words as you grow!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'How many syllables in "rabbit"?', correctAnswer: '2', hints: ['rab-bit', 'Two']},
                  { id: 'q2', type: 'fill-in-blank', question: 'How many syllables in "fantastic"?', correctAnswer: '3', hints: ['fan-tas-tic', 'Three']},
                  { id: 'q3', type: 'multiple-choice', question: 'What must every syllable have?', options: ['A consonant', 'A vowel sound', 'Two letters', 'A silent e'], correctAnswer: 'A vowel sound', hints: ['Vowel is required', 'Vowel sound']},
                  { id: 'q4', type: 'fill-in-blank', question: 'How many syllables in "elephant"?', correctAnswer: '3', hints: ['el-e-phant', 'Three']},
                  { id: 'q5', type: 'multiple-choice', question: 'How can you count syllables?', options: ['By clapping', 'By guessing', 'By colors', 'By size'], correctAnswer: 'By clapping', hints: ['Clap each part', 'Clap']},
                  { id: 'q6', type: 'fill-in-blank', question: 'How many syllables in "napkin"?', correctAnswer: '2', hints: ['nap-kin', 'Two']},
                  { id: 'q7', type: 'multiple-choice', question: 'To read a long word, you should:', options: ['Skip it', 'Break it into syllables', 'Guess randomly', 'Give up'], correctAnswer: 'Break it into syllables', hints: ['Divide and conquer', 'Break it up']},
                  { id: 'q8', type: 'fill-in-blank', question: 'How many syllables in "understanding"?', correctAnswer: '4', hints: ['un-der-stan-ding', 'Four']}
                ],
                activity: { type: 'interactive-practice', description: 'Syllable practice', instruction: 'Break words into syllables'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RF.1.4 - Read with fluency',
                content: '<h3>Reading Fluently</h3><p>Let\'s become fluent readers! Reading fluency means reading smoothly, accurately, and with good expression. Fluent readers recognize most words automatically without having to sound them out. They read at a good pace - not too fast and not too slow. They also use expression, changing their voice to match what\'s happening in the story. When a character is excited, they might read with excitement! When reading a question, their voice goes up at the end. To build fluency, practice reading the same text multiple times. Each time you read it, try to read more smoothly and with better expression. Fluent reading helps you understand and enjoy what you read!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does reading with fluency mean?', options: ['Reading smoothly and accurately', 'Reading very slowly', 'Stopping after each word', 'Reading backwards'], correctAnswer: 'Reading smoothly and accurately', hints: ['Smooth and correct', 'Smooth reading']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is expression in reading?', options: ['Reading in a robot voice', 'Changing your voice to match the text', 'Reading silently', 'Reading very fast'], correctAnswer: 'Changing your voice to match the text', hints: ['Use different voices', 'Match the mood']},
                  { id: 'q3', type: 'multiple-choice', question: 'How can you build reading fluency?', options: ['Never practice', 'Read the same text multiple times', 'Only read once', 'Skip hard words'], correctAnswer: 'Read the same text multiple times', hints: ['Repeated reading', 'Practice same text']},
                  { id: 'q4', type: 'multiple-choice', question: 'How should your voice sound at the end of a question?', options: ['Go down', 'Go up', 'Stay flat', 'Stop'], correctAnswer: 'Go up', hints: ['Questions go up', 'Voice rises']},
                  { id: 'q5', type: 'multiple-choice', question: 'Do fluent readers sound out every word?', options: ['Yes', 'No', 'Sometimes', 'Always'], correctAnswer: 'No', hints: ['Recognize automatically', 'No']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is a good reading pace?', options: ['Very slow', 'Very fast', 'Not too fast, not too slow', 'Stopping after each word'], correctAnswer: 'Not too fast, not too slow', hints: ['Just right', 'Steady pace']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why is fluent reading important?', options: ['Helps you understand better', 'Makes you sleepy', 'Not important', 'Just for show'], correctAnswer: 'Helps you understand better', hints: ['Better comprehension', 'Understanding']},
                  { id: 'q8', type: 'multiple-choice', question: 'If a character is sad, how should you read their words?', options: ['With excitement', 'With a sad voice', 'Very fast', 'Very loud'], correctAnswer: 'With a sad voice', hints: ['Match the emotion', 'Sad voice']}
                ],
                activity: { type: 'interactive-practice', description: 'Fluency practice', instruction: 'Read passages with expression'}
              }
            ]
          },
          {
            id: 'ela-1st-2',
            title: 'Reading Comprehension',
            description: 'Understand story elements and make connections while reading. Students will identify characters, settings, plot events, main ideas, and supporting details. They will also learn to retell stories in sequence, ask and answer questions about texts, and make predictions. Strong comprehension skills ensure students gain meaning from what they read.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.1.3 - Story elements',
                content: '<h3>Characters, Setting, and Plot</h3><p>Let\'s explore the parts of a story! Every story has three main elements: characters, setting, and plot. Characters are the people or animals in the story - they can be heroes, villains, or anyone in between. The setting is where and when the story happens - it might be a school, a forest, a castle, or outer space, and it could be today, long ago, or in the future. The plot is what happens in the story - the events that take place from beginning to end. The plot usually includes a problem that characters need to solve and a solution at the end. Understanding these story elements helps you follow along and remember what you read. When you can identify these parts, you truly understand the story!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are characters?', options: ['People or animals in the story', 'Where the story happens', 'What happens in the story', 'The author'], correctAnswer: 'People or animals in the story', hints: ['Who is in story', 'People/animals']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the setting?', options: ['The characters', 'Where and when the story happens', 'The ending', 'The problem'], correctAnswer: 'Where and when the story happens', hints: ['Place and time', 'Where and when']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the plot?', options: ['The characters', 'The setting', 'What happens in the story', 'The pictures'], correctAnswer: 'What happens in the story', hints: ['The events', 'What happens']},
                  { id: 'q4', type: 'multiple-choice', question: 'What does the plot usually include?', options: ['Only happy things', 'A problem and solution', 'Just the ending', 'Only the beginning'], correctAnswer: 'A problem and solution', hints: ['Problem and how it\'s solved', 'Problem and solution']},
                  { id: 'q5', type: 'multiple-choice', question: 'Can the setting be in the future?', options: ['Yes', 'No', 'Only past', 'Only present'], correctAnswer: 'Yes', hints: ['Any time', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a story is about a brave knight in a castle, who is the character?', options: ['The castle', 'The brave knight', 'The time period', 'The problem'], correctAnswer: 'The brave knight', hints: ['Person in story', 'The knight']},
                  { id: 'q7', type: 'multiple-choice', question: 'If a story happens in a forest, what is the forest?', options: ['A character', 'The setting', 'The plot', 'The problem'], correctAnswer: 'The setting', hints: ['Where it happens', 'The setting']},
                  { id: 'q8', type: 'multiple-choice', question: 'Why is it important to identify story elements?', options: ['Not important', 'Helps you understand the story', 'Just for fun', 'Wastes time'], correctAnswer: 'Helps you understand the story', hints: ['Better comprehension', 'Understanding']}
                ],
                activity: { type: 'interactive-practice', description: 'Story elements', instruction: 'Identify characters, setting, and plot'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.1.2 - Retell stories',
                content: '<h3>Retelling Stories</h3><p>Let\'s learn to retell stories! Retelling means telling the story again in your own words after you\'ve read it or heard it. When you retell a story, include the important parts: the beginning, middle, and end. Start with who the characters are and where they are (the beginning). Then tell about the problem and what the characters did (the middle). Finally, tell how the problem was solved (the end). Remember to tell events in the right order - what happened first, next, and last. You don\'t need to include every tiny detail, just the main events. Retelling shows that you understood the story and helps you remember it better. It also helps you become a better storyteller yourself!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does retelling mean?', options: ['Reading again', 'Telling the story in your own words', 'Forgetting the story', 'Skipping parts'], correctAnswer: 'Telling the story in your own words', hints: ['Your own words', 'Your words']},
                  { id: 'q2', type: 'multiple-choice', question: 'What three parts should you include when retelling?', options: ['Only beginning', 'Only ending', 'Beginning, middle, and end', 'Just the middle'], correctAnswer: 'Beginning, middle, and end', hints: ['All three parts', 'Beginning, middle, end']},
                  { id: 'q3', type: 'multiple-choice', question: 'What should you tell first when retelling?', options: ['The ending', 'The middle', 'The beginning', 'The solution'], correctAnswer: 'The beginning', hints: ['Start at start', 'Beginning']},
                  { id: 'q4', type: 'multiple-choice', question: 'Do you need to include every tiny detail when retelling?', options: ['Yes', 'No', 'Sometimes', 'Always'], correctAnswer: 'No', hints: ['Just main events', 'No']},
                  { id: 'q5', type: 'multiple-choice', question: 'What should you tell about in the middle of a retelling?', options: ['Only characters', 'The problem and what happened', 'Nothing', 'Only the setting'], correctAnswer: 'The problem and what happened', hints: ['Problem and events', 'Problem and events']},
                  { id: 'q6', type: 'multiple-choice', question: 'Why is retelling important?', options: ['Not important', 'Shows you understood', 'Wastes time', 'Just for fun'], correctAnswer: 'Shows you understood', hints: ['Proves comprehension', 'Understanding']},
                  { id: 'q7', type: 'multiple-choice', question: 'What should you tell at the end of a retelling?', options: ['The beginning', 'The middle', 'How the problem was solved', 'New information'], correctAnswer: 'How the problem was solved', hints: ['The solution', 'Solution']},
                  { id: 'q8', type: 'multiple-choice', question: 'Should events be retold in order?', options: ['Yes', 'No', 'Doesn\'t matter', 'Never'], correctAnswer: 'Yes', hints: ['Sequence matters', 'Yes, in order']}
                ],
                activity: { type: 'interactive-practice', description: 'Retelling practice', instruction: 'Retell stories in sequence'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RI.1.2 - Main idea and details',
                content: '<h3>Finding the Main Idea</h3><p>Let\'s learn to find the main idea! The main idea is what a text is mostly about. It\'s the most important point the author wants you to know. Supporting details are the smaller pieces of information that tell you more about the main idea. For example, if you read a book about dogs, the main idea might be "Dogs make great pets." The supporting details might tell you that dogs are friendly, they protect your home, and they love to play. To find the main idea, ask yourself: "What is this mostly about?" Don\'t confuse a detail with the main idea - details are specific facts, while the main idea is the big, overall message. Understanding main ideas helps you remember the most important information from what you read!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the main idea?', options: ['A small detail', 'What the text is mostly about', 'The first sentence', 'The last sentence'], correctAnswer: 'What the text is mostly about', hints: ['Overall message', 'Mostly about']},
                  { id: 'q2', type: 'multiple-choice', question: 'What are supporting details?', options: ['The main idea', 'Facts that tell more about the main idea', 'The title', 'The pictures'], correctAnswer: 'Facts that tell more about the main idea', hints: ['Support main idea', 'More information']},
                  { id: 'q3', type: 'multiple-choice', question: 'If a book is mostly about cats, what is the main idea?', options: ['Cats have whiskers', 'Cats can climb', 'Cats', 'Cats drink milk'], correctAnswer: 'Cats', hints: ['Overall topic', 'Cats']},
                  { id: 'q4', type: 'multiple-choice', question: 'To find the main idea, ask yourself:', options: ['"Who wrote this?"', '"What is this mostly about?"', '"How many pages?"', '"What color is it?"'], correctAnswer: '"What is this mostly about?"', hints: ['Main question', 'Mostly about']},
                  { id: 'q5', type: 'multiple-choice', question: 'Is "Dogs bark" a main idea or a detail?', options: ['Main idea', 'Detail', 'Both', 'Neither'], correctAnswer: 'Detail', hints: ['Specific fact', 'Detail']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is more general: main idea or detail?', options: ['Detail', 'Main idea', 'Same', 'Neither'], correctAnswer: 'Main idea', hints: ['Big picture', 'Main idea']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why is finding the main idea important?', options: ['Not important', 'Helps remember key information', 'Just for tests', 'Wastes time'], correctAnswer: 'Helps remember key information', hints: ['Key information', 'Remember important stuff']},
                  { id: 'q8', type: 'multiple-choice', question: 'Where can you often find the main idea?', options: ['Only at the end', 'Beginning or end', 'Never stated', 'Only in pictures'], correctAnswer: 'Beginning or end', hints: ['Often near start or finish', 'Beginning or end']}
                ],
                activity: { type: 'interactive-practice', description: 'Main idea practice', instruction: 'Identify main ideas and details'}
              }
            ]
          },
          {
            id: 'ela-1st-3',
            title: 'Writing Fundamentals',
            description: 'Write narratives, opinions, and informative texts with proper sentence structure. Students will learn to write complete sentences with correct capitalization and punctuation, organize their ideas, and use descriptive details. These writing skills help students communicate their thoughts clearly and effectively.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.W.1.3 - Write narratives',
                content: '<h3>Writing Stories</h3><p>Let\'s learn to write stories! A narrative is a story that tells about events that happened. When you write a narrative, you need to include important story elements. Start by introducing your characters and telling where and when the story happens (setting). Then write about what happened - the events in order from beginning to end. Include details that help readers picture what\'s happening. Use words like "first," "next," "then," and "finally" to show the order of events. Your story should have a beginning that hooks the reader, a middle where something happens, and an ending that wraps things up. Don\'t forget to include how characters feel! Writing narratives helps you share your experiences and imagination with others.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a narrative?', options: ['A story about events', 'A list', 'A poem', 'A letter'], correctAnswer: 'A story about events', hints: ['Tells what happened', 'A story']},
                  { id: 'q2', type: 'multiple-choice', question: 'What should you introduce at the beginning?', options: ['The ending', 'Characters and setting', 'Only details', 'Nothing'], correctAnswer: 'Characters and setting', hints: ['Who and where', 'Characters and setting']},
                  { id: 'q3', type: 'multiple-choice', question: 'What words help show the order of events?', options: ['Color words', 'First, next, then, finally', 'Size words', 'Number words'], correctAnswer: 'First, next, then, finally', hints: ['Sequence words', 'Order words']},
                  { id: 'q4', type: 'multiple-choice', question: 'What three parts should a narrative have?', options: ['Only beginning', 'Only ending', 'Beginning, middle, and end', 'Just middle'], correctAnswer: 'Beginning, middle, and end', hints: ['Three parts', 'Beginning, middle, end']},
                  { id: 'q5', type: 'multiple-choice', question: 'Should you include details in your narrative?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Details help readers picture it', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should the beginning of a narrative do?', options: ['End the story', 'Hook the reader', 'List details only', 'Confuse readers'], correctAnswer: 'Hook the reader', hints: ['Grab attention', 'Hook the reader']},
                  { id: 'q7', type: 'multiple-choice', question: 'Should you include how characters feel?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Feelings are important', 'Yes']},
                  { id: 'q8', type: 'multiple-choice', question: 'What should happen in the middle of your story?', options: ['Nothing', 'Events and actions', 'Only introduction', 'Only ending'], correctAnswer: 'Events and actions', hints: ['What happens', 'Events']}
                ],
                activity: { type: 'interactive-practice', description: 'Narrative writing', instruction: 'Write a story with beginning, middle, end'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.1.2 - Capitalization and punctuation',
                content: '<h3>Capitals and Punctuation</h3><p>Let\'s learn the rules for capitals and punctuation! Every sentence must start with a capital letter. We also use capital letters for the names of people (Maria, John), places (Texas, Chicago), days of the week (Monday, Friday), months (January, June), and the pronoun "I." Every sentence must end with a punctuation mark. Most sentences end with a period (.), questions end with a question mark (?), and sentences showing strong feeling end with an exclamation point (!). For example: "The dog ran fast." "Where is my book?" "Watch out!" Using correct capitalization and punctuation makes your writing clear and easy to read. These rules help readers understand your meaning!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What should every sentence start with?', options: ['Small letter', 'Capital letter', 'Number', 'Space'], correctAnswer: 'Capital letter', hints: ['Uppercase', 'Capital']},
                  { id: 'q2', type: 'multiple-choice', question: 'What mark ends most sentences?', options: ['Question mark', 'Period', 'Exclamation point', 'Comma'], correctAnswer: 'Period', hints: ['Regular sentences', 'Period']},
                  { id: 'q3', type: 'multiple-choice', question: 'What mark ends a question?', options: ['Period', 'Question mark', 'Exclamation point', 'Comma'], correctAnswer: 'Question mark', hints: ['For questions', 'Question mark']},
                  { id: 'q4', type: 'multiple-choice', question: 'Should names of people start with a capital?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Proper nouns', 'Yes']},
                  { id: 'q5', type: 'multiple-choice', question: 'What mark shows strong feeling?', options: ['Period', 'Question mark', 'Exclamation point', 'Comma'], correctAnswer: 'Exclamation point', hints: ['Strong emotion', 'Exclamation point']},
                  { id: 'q6', type: 'multiple-choice', question: 'Should "Monday" have a capital letter?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Days of week', 'Yes']},
                  { id: 'q7', type: 'multiple-choice', question: 'Should the word "I" always be capitalized?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Always capital', 'Yes']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which sentence is correct?', options: ['the cat ran', 'The cat ran.', 'the cat ran.', 'The cat ran'], correctAnswer: 'The cat ran.', hints: ['Capital and period', 'The cat ran.']}
                ],
                activity: { type: 'interactive-practice', description: 'Punctuation practice', instruction: 'Fix capitalization and punctuation'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.W.1.1 - Write opinion pieces',
                content: '<h3>Sharing Your Opinion</h3><p>Let\'s learn to write opinion pieces! An opinion is what you think or feel about something. In an opinion piece, you state your opinion and give reasons why you think that way. Start with a clear topic sentence that tells your opinion, like "Dogs are the best pets" or "Summer is my favorite season." Then give at least two or three reasons to support your opinion. Use words like "because," "also," and "another reason" to connect your ideas. End with a concluding sentence that restates your opinion. For example: "Dogs make wonderful pets because they are loyal, fun to play with, and they protect your family." When you write opinion pieces, you practice persuading others and sharing your voice!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is an opinion?', options: ['A fact', 'What you think or feel', 'A story', 'A question'], correctAnswer: 'What you think or feel', hints: ['Your thoughts', 'What you think']},
                  { id: 'q2', type: 'multiple-choice', question: 'What should you include in an opinion piece?', options: ['Only your opinion', 'Your opinion and reasons', 'Only facts', 'Nothing'], correctAnswer: 'Your opinion and reasons', hints: ['Support your opinion', 'Opinion and reasons']},
                  { id: 'q3', type: 'multiple-choice', question: 'How many reasons should you give?', options: ['Zero', 'At least two or three', 'One', 'One hundred'], correctAnswer: 'At least two or three', hints: ['Multiple reasons', 'Two or three']},
                  { id: 'q4', type: 'multiple-choice', question: 'What word can you use to give a reason?', options: ['Because', 'The', 'And', 'But'], correctAnswer: 'Because', hints: ['Explains why', 'Because']},
                  { id: 'q5', type: 'multiple-choice', question: 'What should the first sentence state?', options: ['A fact', 'Your opinion', 'Someone else\'s opinion', 'Nothing'], correctAnswer: 'Your opinion', hints: ['Topic sentence', 'Your opinion']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should the ending do?', options: ['Introduce new ideas', 'Restate your opinion', 'Ask questions', 'Give facts only'], correctAnswer: 'Restate your opinion', hints: ['Conclude', 'Restate opinion']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which is an opinion?', options: ['Dogs are animals', 'Dogs have four legs', 'Dogs are the best pets', 'Dogs have fur'], correctAnswer: 'Dogs are the best pets', hints: ['Personal belief', 'Best pets']},
                  { id: 'q8', type: 'multiple-choice', question: 'What word connects additional reasons?', options: ['Also', 'The', 'Is', 'Was'], correctAnswer: 'Also', hints: ['Adds more', 'Also']}
                ],
                activity: { type: 'interactive-practice', description: 'Opinion writing', instruction: 'Write opinions with supporting reasons'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-1st-1',
            title: 'Light, Sound, and Energy',
            description: 'Investigate how light and sound travel, explore basic concepts of energy and heat, and compare materials that are transparent and opaque.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.1.1 - Light and Shadows',
                content: '<h3>Exploring Light and Shadows</h3><p>**Light** travels in a straight line from a source, like the sun. When an object blocks the path of light, it casts a **shadow**. The size and shape of the shadow depend on how close the object is to the light source. **Opaque** materials (like wood) block all light, making dark shadows. **Transparent** materials (like clear glass) let almost all light pass through.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is created when an opaque object blocks light?', options: ['A reflection', 'A sound wave', 'A shadow', 'A source of light'], correctAnswer: 'A shadow', hints: ['Formed by light blockage', 'Shadow']},
                  { id: 'q2', type: 'multiple-choice', question: 'A material that lets almost all light pass through is:', options: ['Opaque', 'Translucent', 'Transparent', 'Shadowy'], correctAnswer: 'Transparent', hints: ['Clear glass is an example', 'Transparent']},
                  { id: 'q3', type: 'multiple-choice', question: 'If you move a flashlight closer to a block, the block\'s shadow will get:', options: ['Smaller', 'Bigger', 'Stay the same', 'Disappear'], correctAnswer: 'Bigger', hints: ['Angle of light changes size', 'Bigger']}
                ],
                activity: { type: 'shadow-experiment', description: 'Use a flashlight and a wall to make shadows. Move objects closer and farther from the light.', instruction: 'Explain why you can see through glass (transparent) but not a brick (opaque).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.1.2 - Sound and Vibration',
                content: '<h3>Sound is Vibration</h3><p>**Sound** is a form of energy made by **vibrations** (quick back-and-forth movements). When you hit a drum, the surface vibrates, making sound waves travel to your ear. **Pitch** is how high or low a sound is; faster vibrations make a higher pitch. **Volume** is how loud or quiet a sound is; bigger vibrations make a louder volume. Sound needs matter (like air or water) to travel.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How is sound primarily produced?', options: ['By things staying still', 'By vibrations', 'By blocking light', 'By heating up'], correctAnswer: 'By vibrations', hints: ['Rapid movement', 'Vibrations']},
                  { id: 'q2', type: 'multiple-choice', question: 'What property of sound means how high or low it is?', options: ['Volume', 'Vibration', 'Pitch', 'Shadow'], correctAnswer: 'Pitch', hints: ['Frequency of the sound wave', 'Pitch']},
                  { id: 'q3', type: 'multiple-choice', question: 'A larger vibration usually results in a **louder**:', options: ['Pitch', 'Vibration', 'Volume', 'Shadow'], correctAnswer: 'Volume', hints: ['Amplitude of the wave', 'Volume']}
                ],
                activity: { type: 'string-instrument', description: 'Make a simple string instrument (e.g., rubber bands on a box) to explore pitch and volume.', instruction: 'Demonstrate how tightening the string changes the pitch (higher).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.1.3 - Forms of Energy',
                content: '<h3>Energy: Heat and Light</h3><p>**Energy** is the ability to do work or cause change. **Light energy** is what we see. **Heat energy** (thermal energy) makes things warmer. The sun is the main source of both light and heat energy for Earth. Energy can change form (e.g., a stove changes electrical energy to heat energy). It is always present, driving change and movement.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which form of energy makes things warmer?', options: ['Light energy', 'Sound energy', 'Heat energy', 'Chemical energy'], correctAnswer: 'Heat energy', hints: ['Thermal energy', 'Heat energy']},
                  { id: 'q2', type: 'multiple-choice', question: 'Where does most of Earth\'s light and heat energy come from?', options: ['Friction', 'The moon', 'The sun', 'Batteries'], correctAnswer: 'The sun', hints: ['The primary source', 'The sun']},
                  { id: 'q3', type: 'multiple-choice', question: 'When you rub your hands together quickly, you create:', options: ['Light', 'Sound and Heat', 'Only sound', 'Only light'], correctAnswer: 'Sound and Heat', hints: ['Friction creates thermal energy and sound', 'Sound and Heat']}
                ],
                activity: { type: 'heat-absorption', description: 'Place a light-colored paper and a dark-colored paper in the sun. Predict which will feel warmer.', instruction: 'Explain why dark colors absorb more heat (thermal energy).' }
              }
            ]
          },
          {
            id: 'science-1st-2',
            title: 'Plant and Animal Survival',
            description: 'Identify the basic needs of plants and animals for survival and growth. Explore how environmental factors affect living things.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.1.4 - Plant Needs for Growth',
                content: '<h3>Caring for Plants</h3><p>Plants need **sunlight**, **water**, and **nutrients** from the soil to perform photosynthesis (make their own food). The roots take in water, the leaves take in sunlight and air. If a plant is given all its needs, it will grow taller and healthier. If it is missing light or water, it will struggle and die. Plants are the producers of our ecosystem.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is NOT needed for a plant to grow?', options: ['Sunlight', 'Water', 'Shelter (a dog house)', 'Soil'], correctAnswer: 'Shelter (a dog house)', hints: ['Shelter is for animals', 'Not needed for plants']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which part of the plant takes in water and nutrients?', options: ['Leaves', 'Flowers', 'Roots', 'Stem'], correctAnswer: 'Roots', hints: ['Anchors the plant and absorbs', 'Roots']},
                  { id: 'q3', type: 'multiple-choice', question: 'The process where a plant makes its own food is called:', options: ['Consumption', 'Hibernation', 'Photosynthesis', 'Erosion'], correctAnswer: 'Photosynthesis', hints: ['Using light to make food', 'Photosynthesis']}
                ],
                activity: { type: 'plant-needs-variable', description: 'Grow three seeds: one with light, one with water, one with both.', instruction: 'Compare the results to see which variable is most important for plant growth.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.1.5 - Animal Needs and Habitat',
                content: '<h3>Animal Needs and Shelter</h3><p>Animals need **food**, **water**, and **shelter** to survive. A **habitat** is the natural environment where an animal lives. An animal\'s shelter protects it from predators and harsh weather. Different habitats (forests, deserts, oceans) provide different types of food and shelter, which is why different animals live in different places.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The natural environment where an animal lives is its:', options: ['School', 'Shelter', 'Habitat', 'Garden'], correctAnswer: 'Habitat', hints: ['Its natural home', 'Habitat']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why does an animal need shelter?', options: ['To hide from its friends', 'To protect itself from weather and predators', 'To fly faster', 'To change its color'], correctAnswer: 'To protect itself from weather and predators', hints: ['Safety and survival', 'Protection']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which animal is likely adapted to a desert habitat?', options: ['Polar bear', 'Camel', 'Fish', 'Monkey'], correctAnswer: 'Camel', hints: ['Can survive heat and lack of water', 'Camel']}
                ],
                activity: { type: 'habitat-diorama', description: 'Create a simple diorama of a forest or ocean habitat, including an animal and its shelter.', instruction: 'Describe one challenge a desert animal faces.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.1.6 - Offspring Resemble Parents',
                content: '<h3>Parent and Offspring Traits</h3><p>**Offspring** (babies) look very much like their **parents**. This is because they inherit **traits** (characteristics) from them. A human baby will have eyes, hair, and height similar to its parents. A puppy will look like its dog parents. While offspring are not exactly the same, they have the recognizable characteristics of their species and parents. This is called **heredity**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a characteristic passed from parent to offspring called?', options: ['A toy', 'A trait', 'A location', 'A shadow'], correctAnswer: 'A trait', hints: ['A feature or quality', 'Trait']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why does a baby bird have wings and feathers?', options: ['It learned it from a book', 'It inherited the traits from its parents', 'It grew them by eating seeds', 'The wind gave them wings'], correctAnswer: 'It inherited the traits from its parents', hints: ['Genetic instruction', 'Inherited traits']},
                  { id: 'q3', type: 'multiple-choice', question: 'Are offspring exactly the same as their parents?', options: ['Yes, always', 'No, they have slight variations', 'Only sometimes', 'Only for plants'], correctAnswer: 'No, they have slight variations', hints: ['Combination of genes and variations', 'Slight variations']}
                ],
                activity: { type: 'family-tree-photos', description: 'Compare pictures of students to their parents, pointing out shared traits (e.g., hair color, height).', instruction: 'Identify one trait they share with a parent and one trait that is unique to them.' }
              }
            ]
          },
          {
            id: 'science-1st-3',
            title: 'Motion and Design',
            description: 'Explore simple forces (pushes and pulls) and how they cause objects to start, stop, or change direction. Learn the basics of engineering design by planning and testing solutions.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.1.7 - Investigating Forces',
                content: '<h3>Changing Motion</h3><p>An object will not move unless you apply a **force** (**push or pull**). If an object is already moving, a push or pull can make it speed up, slow down, or change direction. For example, a tennis racquet **pushes** a ball to make it change direction and speed up. A small push on a heavy box will do little, but a big push will make it move far.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is needed to change an object\'s direction?', options: ['Only its color', 'Only its size', 'A push or pull', 'Nothing'], correctAnswer: 'A push or pull', hints: ['Force is required to change motion', 'Push or pull']},
                  { id: 'q2', type: 'multiple-choice', question: 'If you want a ball to slow down, you can give it a pull in which direction?', options: ['Same direction it is moving', 'Opposite direction it is moving', 'Sideways', 'Straight up'], correctAnswer: 'Opposite direction it is moving', hints: ['Force against the motion', 'Opposite direction']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which requires a **greater** push to move a short distance?', options: ['A feather', 'A marble', 'A large, heavy desk', 'A pencil'], correctAnswer: 'A large, heavy desk', hints: ['More mass requires more force', 'Heavy desk']}
                ],
                activity: { type: 'force-challenge', description: 'Use a rubber band to apply a force to a small block and measure the distance it travels.', instruction: 'Compare the distance traveled when using one rubber band versus two rubber bands.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.1.8 - Engineering Design Process: Plan',
                content: '<h3>Solving Problems: The Plan Stage</h3><p>The **Engineering Design Process** helps people solve problems by building things. The first steps are **Ask** (identify the problem) and **Imagine** (think of ideas). The next step is **Plan**. In the Plan stage, you **draw and label a design** of what you want to build. Planning helps you think about what materials you need and how to put them together *before* you start building.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the goal of the **Ask** stage?', options: ['To build it', 'To identify the problem', 'To improve the design', 'To play a game'], correctAnswer: 'To identify the problem', hints: ['First step: defining the goal', 'Identify problem']},
                  { id: 'q2', type: 'multiple-choice', question: 'What should you do in the **Plan** stage?', options: ['Build a rough model', 'Draw a labeled design', 'Test the strength', 'Give up'], correctAnswer: 'Draw a labeled design', hints: ['Creating a blueprint', 'Draw design']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is planning important in engineering?', options: ['It makes the job take longer', 'It saves materials and time', 'It is only for experts', 'It stops you from building'], correctAnswer: 'It saves materials and time', hints: ['Efficiency', 'Saves time and materials']}
                ],
                activity: { type: 'design-planning', description: 'Draw a detailed plan for a small bridge made of paper that must hold a toy car.', instruction: 'Label the materials needed on the drawing.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.1.9 - Engineering Design Process: Create and Improve',
                content: '<h3>Building and Making Better</h3><p>After planning, you **Create** (build the design). When you are finished, you must **Test** the design to see if it solves the problem. If it fails or could be better, you **Improve** it! The **Improve** stage is where you redesign, rebuild, and retest to make your solution better. Engineers rarely get it right the first time; improvement is key to success.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What happens immediately after the **Create** stage?', options: ['Ask', 'Imagine', 'Test the design', 'Draw a new plan'], correctAnswer: 'Test the design', hints: ['Check if it works', 'Test the design']},
                  { id: 'q2', type: 'multiple-choice', question: 'If your paper bridge holds 5 blocks but you want it to hold 10, what stage do you go to next?', options: ['Ask', 'Imagine', 'Create', 'Improve'], correctAnswer: 'Improve', hints: ['Redesign and retest', 'Improve']},
                  { id: 'q3', type: 'multiple-choice', question: 'In the engineering process, failure during a test is actually a way to:', options: ['Give up', 'Learn how to make it better', 'Blame others', 'Start over completely'], correctAnswer: 'Learn how to make it better', hints: ['Provides data for improvement', 'Learn and improve']}
                ],
                activity: { type: 'building-and-testing', description: 'Build the paper bridge from the Plan lesson and test it with small blocks.', instruction: 'Identify one change to the original plan that would make the bridge stronger.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-1st-1',
            title: 'Basic Economics and Citizen Roles',
            description: 'Understand the difference between needs and wants, goods and services, and the role of money. Identify characteristics of a good citizen (honesty, fairness, respect).',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.1.1 - Needs, Wants, and Scarcity',
                content: '<h3>Needs and Wants</h3><p>A **need** is something you must have to survive (like food, water, and shelter). A **want** is something you would like to have but can live without (like a new toy or a fancy snack). Sometimes we cannot have everything we want because of **scarcity** (limited resources). This forces us to make choices.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a **need**?', options: ['A video game', 'A glass of water', 'A new shirt', 'Candy'], correctAnswer: 'A glass of water', hints: ['Necessary for survival', 'Water']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is it called when there are not enough resources for everyone to have everything they want?', options: ['A choice', 'A want', 'Scarcity', 'A good'], correctAnswer: 'Scarcity', hints: ['Limited resources', 'Scarcity']},
                  { id: 'q3', type: 'multiple-choice', question: 'If you have to choose between a book and a ball, that is a:', options: ['Need', 'Want', 'Choice', 'Service'], correctAnswer: 'Choice', hints: ['Opportunity to pick', 'Choice']}
                ],
                activity: { type: 'needs-vs-wants-sort', description: 'Cut out pictures and sort them into "Need" and "Want" categories.', instruction: 'Explain why water is a need while juice is a want.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.1.2 - Goods and Services',
                content: '<h3>Goods and Services</h3><p>**Goods** are physical items you can touch, buy, and use (like a book, a pencil, or food). **Services** are jobs or work people do for others (like a hairdresser giving a haircut, or a teacher giving a lesson). People pay money for both goods and services. The exchange of money for goods and services makes up our economy.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'A book is an example of a:', options: ['Service', 'Want', 'Need', 'Good'], correctAnswer: 'Good', hints: ['A physical object you can buy', 'Good']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is an example of a **service**?', options: ['A new toy', 'A trip to the park', 'A doctor giving a check-up', 'A new pair of shoes'], correctAnswer: 'A doctor giving a check-up', hints: ['Work done for someone else', 'Doctor check-up']},
                  { id: 'q3', type: 'multiple-choice', question: 'A baker who sells bread is providing a:', options: ['Service', 'Good', 'Want', 'Need'], correctAnswer: 'Good', hints: ['The bread is a physical item', 'Good']}
                ],
                activity: { type: 'good-service-identification', description: 'Identify and draw five different goods and five different services seen in their community.', instruction: 'Explain who provides the service of teaching at school.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.1.3 - Being a Good Citizen',
                content: '<h3>Good Citizenship</h3><p>A **good citizen** is someone who acts respectfully and responsibly in their community. Key traits include **honesty** (telling the truth), **fairness** (treating everyone equally), and **respect** (being kind to people and property). Citizens follow rules, help others, and keep their community clean. These actions make the community strong.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does **fairness** mean?', options: ['Treating everyone differently', 'Treating everyone equally', 'Ignoring people', 'Only helping friends'], correctAnswer: 'Treating everyone equally', hints: ['Equal treatment', 'Equally']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is an example of showing **respect** for property?', options: ['Drawing on a wall', 'Breaking a toy', 'Cleaning up a spill', 'Running inside'], correctAnswer: 'Cleaning up a spill', hints: ['Taking care of things', 'Cleaning up']},
                  { id: 'q3', type: 'multiple-choice', question: 'Telling the truth is an example of:', options: ['Respect', 'Fairness', 'Honesty', 'Scarcity'], correctAnswer: 'Honesty', hints: ['Telling the truth', 'Honesty']}
                ],
                activity: { type: 'trait-role-play', description: 'Act out scenarios showing honesty (e.g., admitting they broke something) and fairness (e.g., sharing equally).', instruction: 'Explain why an honest apology is better than a lie.' }
              }
            ]
          },
          {
            id: 'ss-1st-2',
            title: 'Geographical Features and Maps',
            description: 'Use maps to identify major landforms and water bodies. Understand the relationship between different places (school, home, neighborhood).',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.1.4 - Landforms and Water Bodies',
                content: '<h3>Earth\'s Surface</h3><p>The Earth\'s surface is made up of different **landforms** and **water bodies**. A **hill** is a raised area of land, and a **mountain** is a very tall hill. A **river** is a long stream of water, and an **ocean** is a large body of salt water. Knowing these names helps us describe the geography of our world.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a large, tall, raised area of land?', options: ['A river', 'A lake', 'A mountain', 'A flat plain'], correctAnswer: 'A mountain', hints: ['Very tall landform', 'Mountain']},
                  { id: 'q2', type: 'multiple-choice', question: 'A long, flowing body of water that usually goes into a bigger lake or ocean is a:', options: ['Ocean', 'Pond', 'River', 'Mountain'], correctAnswer: 'River', hints: ['Flowing water', 'River']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is the biggest type of water body?', options: ['Pond', 'River', 'Lake', 'Ocean'], correctAnswer: 'Ocean', hints: ['Vast, salty water', 'Ocean']}
                ],
                activity: { type: 'landform-model', description: 'Use clay or sand to build a simple model showing a river flowing between two mountains and into an ocean/lake.', instruction: 'Identify the difference between a lake and a river.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.1.5 - Reading Simple Maps',
                content: '<h3>Maps and Symbols</h3><p>A **map** is a drawing of a place. Maps use **symbols** to represent real things, like a square for a school or a line for a road. The **key** (or legend) tells you what each symbol means. A **compass rose** shows the directions: North, South, East, West. Learning to read symbols and directions helps us follow maps to find locations.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What part of a map explains what the symbols mean?', options: ['The title', 'The scale', 'The key', 'The direction'], correctAnswer: 'The key', hints: ['The legend', 'Key']},
                  { id: 'q2', type: 'multiple-choice', question: 'What shows the directions (North, South, East, West)?', options: ['A key', 'A scale', 'A compass rose', 'A symbol'], correctAnswer: 'A compass rose', hints: ['The direction indicator', 'Compass rose']},
                  { id: 'q3', type: 'multiple-choice', question: 'A small picture of a house on a map is a:', options: ['Direction', 'Key', 'Symbol', 'Scale'], correctAnswer: 'Symbol', hints: ['Stands for a real object', 'Symbol']}
                ],
                activity: { type: 'classroom-map', description: 'Draw a simple map of the classroom, using symbols for desks, doors, and the teacher\'s area.', instruction: 'Trade maps and practice locating one item using the key.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.1.6 - Neighborhood Geography',
                content: '<h3>My Neighborhood</h3><p>Your **neighborhood** is the area where you live. It has important places like your **home**, the **school**, parks, and stores. We can describe how far or near things are to our home. Understanding our neighborhood helps us feel safe and know where to find the goods and services we need.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is the most important place in your neighborhood?', options: ['The biggest tree', 'Your home', 'The fastest road', 'The tallest building'], correctAnswer: 'Your home', hints: ['Your main residence', 'Your home']},
                  { id: 'q2', type: 'multiple-choice', question: 'If the park is next to the school, what word describes their locations?', options: ['Far away', 'Near or close', 'Behind', 'Under'], correctAnswer: 'Near or close', hints: ['Close proximity', 'Near or close']},
                  { id: 'q3', type: 'multiple-choice', question: 'What do neighbors often do for each other?', options: ['Fight', 'Help and cooperate', 'Ignore each other', 'Steal'], correctAnswer: 'Help and cooperate', hints: ['Community support', 'Help and cooperate']}
                ],
                activity: { type: 'neighborhood-drawing', description: 'Draw a map of their block or neighborhood, showing the relative location of their home and school.', instruction: 'Identify one service (e.g., fire station) found in their neighborhood.' }
              }
            ]
          },
          {
            id: 'ss-1st-3',
            title: 'Time and American Holidays',
            description: 'Understand the concept of time (days, weeks, months) and identify the purpose of major American holidays.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.1.7 - Units of Time',
                content: '<h3>Measuring Time</h3><p>We measure time using **days**, **weeks**, and **months**. There are 7 days in a week. There are about 4 weeks in a month, and 12 months in a year. We use a **calendar** to keep track of the days and months. Knowing the calendar helps us plan for special events like birthdays and holidays!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How many days are in one week?', options: ['5', '7', '10', '12'], correctAnswer: '7', hints: ['The standard unit of a week', 'Seven']},
                  { id: 'q2', type: 'multiple-choice', question: 'What tool do we use to see all the days and months in a year?', options: ['A clock', 'A ruler', 'A calendar', 'A map'], correctAnswer: 'A calendar', hints: ['Shows the date', 'Calendar']},
                  { id: 'q3', type: 'multiple-choice', question: 'How many months are in a year?', options: ['4', '7', '10', '12'], correctAnswer: '12', hints: ['The full cycle of the year', 'Twelve']}
                ],
                activity: { type: 'calendar-practice', description: 'Identify the current day, week, and month on a classroom calendar.', instruction: 'Name the month of their birthday.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.1.8 - Celebrating Holidays (Historical)',
                content: '<h3>Historical Holidays</h3><p>We celebrate holidays to remember important people and events from the past. **Presidents\' Day** honors our country\'s leaders, like George Washington. The **Fourth of July** celebrates our country\'s birthday (Independence Day). **Thanksgiving** is a holiday to remember the early American settlers and their feast. These holidays connect us to our history.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What historical event does the Fourth of July celebrate?', options: ['The invention of the phone', 'The end of the Civil War', 'American Independence', 'The start of school'], correctAnswer: 'American Independence', hints: ['Our country\'s birthday', 'Independence']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the purpose of Presidents\' Day?', options: ['To honor all animals', 'To honor past U.S. Presidents', 'To plant trees', 'To go swimming'], correctAnswer: 'To honor past U.S. Presidents', hints: ['Honoring leaders', 'Honor Presidents']},
                  { id: 'q3', type: 'multiple-choice', question: 'Thanksgiving is a holiday that celebrates:', options: ['The coming of snow', 'A feast between settlers and natives', 'The first day of spring', 'Getting gifts'], correctAnswer: 'A feast between settlers and natives', hints: ['Historical feast', 'Feast']}
                ],
                activity: { type: 'holiday-story', description: 'Listen to a book about the first Thanksgiving or the signing of the Declaration of Independence.', instruction: 'Identify one traditional food eaten on Thanksgiving.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.1.9 - Recognizing MLK Jr. Day',
                content: '<h3>Honoring Martin Luther King Jr.</h3><p>**Martin Luther King Jr.** was a great leader who worked for **equal rights** and **fairness** for all people in the United States. He believed in peaceful protest. We celebrate his birthday every year (**MLK Jr. Day**) to remember his dream that all people should be judged by their character, not by the color of their skin. His message of kindness and equality is still important today.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What did MLK Jr. fight for?', options: ['Longer holidays', 'More toys', 'Equal rights for all people', 'Shorter school days'], correctAnswer: 'Equal rights for all people', hints: ['His life\'s work', 'Equal rights']},
                  { id: 'q2', type: 'multiple-choice', question: 'How did MLK Jr. believe change should happen?', options: ['Through violence', 'Through shouting', 'Through peaceful protests', 'Through wars'], correctAnswer: 'Through peaceful protests', hints: ['Non-violence', 'Peaceful protests']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is a message from MLK Jr. that we still use?', options: ['Be mean to others', 'Be judged by the color of your clothes', 'Be kind and fair to everyone', 'Never speak up'], correctAnswer: 'Be kind and fair to everyone', hints: ['Equality and kindness', 'Kind and fair']}
                ],
                activity: { type: 'i-have-a-dream', description: 'Students draw a picture representing their own "dream" for a better, fairer community.', instruction: 'Share their dream with the class using a positive sentence (e.g., "I dream that everyone can play together").' }
              }
            ]
          }
        ]
      },
      '2nd Grade': {
        'Math': [
          {
            id: 'math-2nd-1',
            title: 'Addition and Subtraction within 100',
            description: 'Develop fluency with two-digit addition and subtraction using place value strategies. Students will add and subtract within 100, solve word problems involving addition and subtraction, and understand the relationship between operations. Mental math strategies and number sense are emphasized throughout this module.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.2.NBT.5 - Add and subtract within 100',
                content: '<h3>Two-Digit Addition and Subtraction</h3><p>Let\'s master adding and subtracting two-digit numbers! When adding numbers like 47 + 38, you can use different strategies. One way is to add the tens first (40 + 30 = 70), then add the ones (7 + 8 = 15), and combine them (70 + 15 = 85). Another strategy is to break numbers apart to make friendly numbers. For subtraction like 82 - 37, you can count up from 37 to 82, or subtract the tens and ones separately. You can also use mental math by adjusting numbers to make them easier - for example, 49 + 23 can be thought of as 50 + 22. Understanding place value helps you choose the best strategy! Practice these different methods to become fast and accurate with two-digit operations.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 45 + 32?', correctAnswer: '77', hints: ['Add tens, then ones', 'Seventy-seven']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 68 - 24?', correctAnswer: '44', hints: ['Subtract tens, then ones', 'Forty-four']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 53 + 29?', options: ['72', '82', '92', '102'], correctAnswer: '82', hints: ['Make 54 + 28', 'Eighty-two']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 71 - 38?', correctAnswer: '33', hints: ['Count up or subtract', 'Thirty-three']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is 64 + 27?', options: ['81', '91', '71', '101'], correctAnswer: '91', hints: ['6 tens + 2 tens, 4 + 7', 'Ninety-one']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is 85 - 47?', correctAnswer: '38', hints: ['Subtract or count up', 'Thirty-eight']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is 49 + 51?', options: ['90', '100', '110', '99'], correctAnswer: '100', hints: ['Makes 100', 'One hundred']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 93 - 58?', correctAnswer: '35', hints: ['Count up from 58', 'Thirty-five']}
                ],
                activity: { type: 'interactive-practice', description: 'Two-digit operations', instruction: 'Practice addition and subtraction'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.2.OA.1 - Word problems',
                content: '<h3>Multi-Step Word Problems</h3><p>Let\'s solve word problems with more than one step! Some problems require you to do two operations to find the answer. You might need to add, then subtract, or do two additions. First, read the problem carefully and identify what information you have and what you need to find. Look for key words that tell you what operations to use. Draw pictures or write number sentences to help organize your thinking. For example: "Sam had 25 marbles. He got 15 more, then gave away 12. How many does he have now?" You would add first (25 + 15 = 40), then subtract (40 - 12 = 28). Breaking complex problems into steps makes them easier to solve!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Lisa has 32 stickers. She gets 18 more, then uses 15. How many does she have?', correctAnswer: '35', hints: ['Add first, then subtract', 'Thirty-five']},
                  { id: 'q2', type: 'multiple-choice', question: 'Tom had 45 cards. He gave 12 to Sue and 8 to Mike. How many does Tom have left?', options: ['25', '35', '20', '30'], correctAnswer: '25', hints: ['Subtract both amounts', 'Twenty-five']},
                  { id: 'q3', type: 'fill-in-blank', question: 'There are 28 birds in a tree. 14 more fly in. Then 9 fly away. How many birds now?', correctAnswer: '33', hints: ['Add then subtract', 'Thirty-three']},
                  { id: 'q4', type: 'multiple-choice', question: 'Emma has 20 pencils. She buys 15 more and gets 10 from her teacher. How many total?', options: ['35', '45', '55', '25'], correctAnswer: '45', hints: ['Add all amounts', 'Forty-five']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Jake has 50 toys. He gives 18 to his brother and 12 to his friend. How many left?', correctAnswer: '20', hints: ['Subtract both', 'Twenty']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should you do first when solving a word problem?', options: ['Guess', 'Read carefully', 'Write the answer', 'Skip it'], correctAnswer: 'Read carefully', hints: ['Understand the problem', 'Read carefully']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Sara has 35 books. She gets 25 more, then donates 18. How many books now?', correctAnswer: '42', hints: ['Add then subtract', 'Forty-two']},
                  { id: 'q8', type: 'multiple-choice', question: 'How can drawings help with word problems?', options: ['They don\'t help', 'They organize your thinking', 'They waste time', 'They confuse you'], correctAnswer: 'They organize your thinking', hints: ['Visualize the problem', 'Organize thinking']}
                ],
                activity: { type: 'interactive-practice', description: 'Multi-step problems', instruction: 'Solve complex word problems'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.2.NBT.9 - Mental math strategies',
                content: '<h3>Mental Math Strategies</h3><p>Let\'s develop mental math skills! Mental math means solving problems in your head without writing them down or using a calculator. One strategy is to make friendly numbers - numbers that are easy to work with like 10, 20, 50, or 100. For example, to add 38 + 27, you can think: "38 is close to 40, so I\'ll add 40 + 27 = 67, then subtract the 2 I added: 67 - 2 = 65." Another strategy is compensation - moving amounts between numbers to make calculation easier. You can also break numbers into parts: 45 + 32 can be thought of as (40 + 30) + (5 + 2) = 70 + 7 = 77. Practicing mental math makes you faster and improves your number sense!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 29 + 31? (Hint: Use 30 + 30)', correctAnswer: '60', hints: ['Make friendly numbers', 'Sixty']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is 48 + 22? Think: 50 + 20', options: ['60', '70', '80', '65'], correctAnswer: '70', hints: ['Adjust to 50 + 20', 'Seventy']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is 56 - 29? Think: 56 - 30 + 1', correctAnswer: '27', hints: ['Subtract 30, add back 1', 'Twenty-seven']},
                  { id: 'q4', type: 'multiple-choice', question: 'What makes a "friendly number"?', options: ['Any number', 'Numbers like 10, 20, 50, 100', 'Odd numbers', 'Big numbers'], correctAnswer: 'Numbers like 10, 20, 50, 100', hints: ['Easy to work with', 'Round numbers']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 35 + 35? (Think: Double 35)', correctAnswer: '70', hints: ['2 × 35', 'Seventy']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 67 - 38? Think: 67 - 40 + 2', options: ['29', '39', '19', '49'], correctAnswer: '29', hints: ['Adjust', 'Twenty-nine']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 44 + 36? Break it: (40+30) + (4+6)', correctAnswer: '80', hints: ['70 + 10', 'Eighty']},
                  { id: 'q8', type: 'multiple-choice', question: 'Why is mental math important?', options: ['Not important', 'Makes you faster', 'Just for fun', 'Too hard'], correctAnswer: 'Makes you faster', hints: ['Improves speed', 'Makes you faster']}
                ],
                activity: { type: 'interactive-practice', description: 'Mental math', instruction: 'Practice solving in your head'}
              },
              {
                id: 'lesson-4',
                objective: 'MCCRS.Math.2.OA.2 - Fact fluency to 20',
                content: '<h3>Mastering Math Facts</h3><p>Let\'s become fluent with addition and subtraction facts to 20! Fact fluency means you can answer basic math problems quickly and accurately without having to count or use objects. Knowing your facts automatically frees up your brain to solve harder problems. Practice facts that make 10 (like 7 + 3, 8 + 2) and doubles (like 6 + 6, 7 + 7, 8 + 8). Learn near doubles too (like 6 + 7 is just one more than 6 + 6). Use fact families to practice - if you know 8 + 5 = 13, you also know 5 + 8 = 13, 13 - 8 = 5, and 13 - 5 = 8. Practice every day for a few minutes and you\'ll master all the facts!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Quick! What is 9 + 7?', correctAnswer: '16', hints: ['Near 10 + 6', 'Sixteen']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Quick! What is 14 - 6?', correctAnswer: '8', hints: ['Think: 6 + ? = 14', 'Eight']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Quick! What is 8 + 8?', correctAnswer: '16', hints: ['Double 8', 'Sixteen']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Quick! What is 17 - 9?', correctAnswer: '8', hints: ['Count up from 9', 'Eight']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Quick! What is 7 + 8?', correctAnswer: '15', hints: ['Near double', 'Fifteen']},
                  { id: 'q6', type: 'fill-in-blank', question: 'Quick! What is 13 - 7?', correctAnswer: '6', hints: ['7 + ? = 13', 'Six']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Quick! What is 9 + 9?', correctAnswer: '18', hints: ['Double 9', 'Eighteen']},
                  { id: 'q8', type: 'fill-in-blank', question: 'Quick! What is 16 - 8?', correctAnswer: '8', hints: ['Half of 16', 'Eight']}
                ],
                activity: { type: 'interactive-practice', description: 'Fact practice', instruction: 'Speed drills for fluency'}
              }
            ]
          },
          {
            id: 'math-2nd-2',
            title: 'Measurement and Data',
            description: 'Measure lengths, tell time, work with money, and represent data using graphs. Students will estimate and measure using standard units, tell time to the nearest five minutes, solve money problems, and create picture graphs and bar graphs. These practical skills connect mathematics to everyday life.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.2.MD.1 - Measure length',
                content: '<h3>Measuring with Standard Units</h3><p>Let\'s learn to measure length using inches, feet, centimeters, and meters! When measuring, line up the object with zero on the ruler and read the number at the other end. An inch is about the length of a large paper clip. A foot equals 12 inches and is about the length of a ruler. A centimeter is smaller than an inch - about the width of your pinky finger. A meter equals 100 centimeters and is a little longer than a yard. Always use the right tool for the job - use inches or centimeters for small objects and feet or meters for longer distances. Estimation before measuring helps you know if your measurement makes sense. Measuring accurately is an important life skill!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How many inches in a foot?', options: ['10', '12', '15', '20'], correctAnswer: '12', hints: ['A dozen', 'Twelve']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which unit is best for measuring a pencil?', options: ['Feet', 'Meters', 'Inches', 'Miles'], correctAnswer: 'Inches', hints: ['Small object', 'Inches']},
                  { id: 'q3', type: 'fill-in-blank', question: 'How many centimeters in a meter?', correctAnswer: '100', hints: ['One hundred', '100']},
                  { id: 'q4', type: 'multiple-choice', question: 'What should you line up with when measuring?', options: ['The end of ruler', 'Zero on ruler', 'The middle', 'Anywhere'], correctAnswer: 'Zero on ruler', hints: ['Start at zero', 'Zero']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which is longer: a centimeter or an inch?', options: ['Centimeter', 'Inch', 'Same', 'Cannot tell'], correctAnswer: 'Inch', hints: ['Inch is bigger', 'Inch']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which unit is best for measuring your height?', options: ['Inches', 'Centimeters', 'Feet or meters', 'Miles'], correctAnswer: 'Feet or meters', hints: ['Taller measurements', 'Feet or meters']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why should you estimate before measuring?', options: ['Not important', 'To check if answer makes sense', 'Waste time', 'Confusing'], correctAnswer: 'To check if answer makes sense', hints: ['Verify measurement', 'Check answer']},
                  { id: 'q8', type: 'multiple-choice', question: 'About how long is a meter?', options: ['Length of pencil', 'Length of finger', 'Little longer than a yard', 'Length of room'], correctAnswer: 'Little longer than a yard', hints: ['A bit more than yard', 'Yard-ish']}
                ],
                activity: { type: 'interactive-practice', description: 'Measuring practice', instruction: 'Measure objects with rulers'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.2.MD.7 - Tell time',
                content: '<h3>Telling Time to Five Minutes</h3><p>Let\'s master telling time! An analog clock has two hands: the short hand shows the hour, and the long hand shows the minutes. When the minute hand (long hand) points to 12, it\'s o\'clock. Each number on the clock represents 5 minutes: 1 = 5 minutes, 2 = 10 minutes, 3 = 15 minutes, and so on. When the minute hand points to 3, it\'s 15 minutes past the hour, which we call "quarter past." When it points to 6, it\'s 30 minutes past, called "half past." When it points to 9, it\'s 45 minutes past, called "quarter to" the next hour. Practice reading both analog and digital clocks. Knowing how to tell time helps you be punctual and manage your day!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which hand shows the hour?', options: ['Long hand', 'Short hand', 'Both hands', 'No hand'], correctAnswer: 'Short hand', hints: ['Short = hour', 'Short hand']},
                  { id: 'q2', type: 'multiple-choice', question: 'When the long hand points to 12, what time is it?', options: ['Half past', 'Quarter past', 'O\'clock', 'Quarter to'], correctAnswer: 'O\'clock', hints: ['Top of hour', 'O\'clock']},
                  { id: 'q3', type: 'fill-in-blank', question: 'How many minutes does each number represent?', correctAnswer: '5', hints: ['Count by 5s', 'Five']},
                  { id: 'q4', type: 'multiple-choice', question: 'When the long hand points to 6, how many minutes past?', options: ['15', '20', '30', '45'], correctAnswer: '30', hints: ['Half the hour', 'Thirty']},
                  { id: 'q5', type: 'multiple-choice', question: 'What do we call 3:15?', options: ['Half past', 'Quarter past', 'Quarter to', 'O\'clock'], correctAnswer: 'Quarter past', hints: ['15 minutes past', 'Quarter past']},
                  { id: 'q6', type: 'multiple-choice', question: 'When the long hand points to 3, how many minutes?', options: ['3', '5', '10', '15'], correctAnswer: '15', hints: ['3 × 5', 'Fifteen']},
                  { id: 'q7', type: 'multiple-choice', question: 'What do we call 4:30?', options: ['Quarter past', 'Half past', 'Quarter to', 'O\'clock'], correctAnswer: 'Half past', hints: ['30 minutes', 'Half past']},
                  { id: 'q8', type: 'multiple-choice', question: 'If the short hand is between 2 and 3, and long hand is on 6, what time?', options: ['2:30', '3:30', '2:06', '6:30'], correctAnswer: '2:30', hints: ['Past 2, at 30', '2:30']}
                ],
                activity: { type: 'interactive-practice', description: 'Time practice', instruction: 'Read clocks to 5 minutes'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.2.MD.8 - Money problems',
                content: '<h3>Counting and Using Money</h3><p>Let\'s learn to work with money! U.S. coins include pennies (1¢), nickels (5¢), dimes (10¢), and quarters (25¢). Bills include dollars in various amounts. When counting money, start with the largest coins or bills and count up. For example, if you have 2 quarters, 1 dime, and 3 pennies, count: 25, 50 (quarters), 60 (dime), 61, 62, 63 (pennies) = 63¢. The dollar sign ($) shows dollars and the cent sign (¢) shows cents. One dollar equals 100 cents, written as $1.00. When solving money problems, you might need to find totals, make change, or compare amounts. Understanding money helps you make smart purchasing decisions and manage your finances!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'How many cents in a quarter?', correctAnswer: '25', hints: ['Twenty-five', '25']},
                  { id: 'q2', type: 'fill-in-blank', question: 'How many cents in a dime?', correctAnswer: '10', hints: ['Ten', '10']},
                  { id: 'q3', type: 'multiple-choice', question: 'How many cents in a dollar?', options: ['10', '25', '50', '100'], correctAnswer: '100', hints: ['One hundred', '100']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is the value of 3 dimes?', correctAnswer: '30 or 30¢', hints: ['10 + 10 + 10', 'Thirty cents']},
                  { id: 'q5', type: 'multiple-choice', question: 'How many nickels equal a quarter?', options: ['3', '4', '5', '10'], correctAnswer: '5', hints: ['5 × 5 = 25', 'Five']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is 2 quarters + 1 dime?', correctAnswer: '60 or 60¢', hints: ['50 + 10', 'Sixty cents']},
                  { id: 'q7', type: 'multiple-choice', question: 'You have 75¢. How many quarters is that?', options: ['2', '3', '4', '5'], correctAnswer: '3', hints: ['25 + 25 + 25', 'Three']},
                  { id: 'q8', type: 'multiple-choice', question: 'What coin is worth 5 cents?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correctAnswer: 'Nickel', hints: ['5¢', 'Nickel']}
                ],
                activity: { type: 'interactive-practice', description: 'Money practice', instruction: 'Count and solve money problems'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-2nd-1',
            title: 'Reading and Comprehension',
            description: 'Read with increased fluency and comprehension, analyzing story structure and author\'s purpose. Students will identify themes, compare characters, understand story morals, and distinguish between fact and opinion. These advanced comprehension skills help students think critically about texts.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.2.2 - Identify theme and moral',
                content: '<h3>Theme and Moral of Stories</h3><p>Let\'s learn about themes and morals! The theme is the big idea or message of a story - what the author wants you to learn or think about. Common themes include friendship, courage, honesty, and perseverance. The moral is the lesson the story teaches, often found in fables. For example, in "The Tortoise and the Hare," the moral is "Slow and steady wins the race," which teaches us not to give up even when things are hard. To find the theme, think about what the characters learned and what the story is really about beyond just the plot. Ask yourself: "What lesson did the characters learn?" and "What is the author trying to teach me?" Understanding themes helps you connect stories to your own life!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a theme?', options: ['A character\'s name', 'The big idea of the story', 'The setting', 'A picture'], correctAnswer: 'The big idea of the story', hints: ['Main message', 'Big idea']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a moral?', options: ['The beginning', 'The ending', 'The lesson the story teaches', 'A character'], correctAnswer: 'The lesson the story teaches', hints: ['What you learn', 'Lesson']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is an example of a theme?', options: ['The story is long', 'The boy\'s name is Tom', 'Friendship is important', 'The setting is a forest'], correctAnswer: 'Friendship is important', hints: ['Big idea', 'Friendship']},
                  { id: 'q4', type: 'multiple-choice', question: 'To find the theme, you should think about:', options: ['The pictures only', 'What characters learned', 'The number of pages', 'The author\'s name'], correctAnswer: 'What characters learned', hints: ['What they learned', 'Character lessons']},
                  { id: 'q5', type: 'multiple-choice', question: 'Where are morals often found?', options: ['In fables', 'In phone books', 'In dictionaries', 'In newspapers'], correctAnswer: 'In fables', hints: ['Animal stories with lessons', 'Fables']},
                  { id: 'q6', type: 'multiple-choice', question: 'Why should you identify themes?', options: ['Not important', 'Connects stories to your life', 'Waste time', 'Too hard'], correctAnswer: 'Connects stories to your life', hints: ['Personal connection', 'Life connection']},
                  { id: 'q7', type: 'multiple-choice', question: 'Is "Always be honest" a theme or a plot?', options: ['Plot', 'Theme', 'Setting', 'Character'], correctAnswer: 'Theme', hints: ['Big idea/lesson', 'Theme']},
                  { id: 'q8', type: 'multiple-choice', question: 'Can different people find different themes in the same story?', options: ['Yes', 'No', 'Never', 'Not possible'], correctAnswer: 'Yes', hints: ['Different interpretations', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Theme identification', instruction: 'Find themes and morals in stories'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.2.3 - Compare characters',
                content: '<h3>Comparing and Contrasting Characters</h3><p>Let\'s learn to compare characters! When we compare, we look for similarities - how things are alike. When we contrast, we look for differences. Characters might be similar in what they want (their goals) or how they feel, but different in how they act or what they look like. You can use a Venn diagram to show comparisons: put similarities in the overlapping middle section and differences in the outer sections. Think about characters\' personalities - are they brave or fearful? Kind or mean? Patient or impatient? Also consider their actions - what they do shows who they are. Comparing characters helps you understand them better and makes reading more interesting. Ask yourself: "How are these characters alike? How are they different?"</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does compare mean?', options: ['Find differences', 'Find similarities', 'Find characters', 'Find settings'], correctAnswer: 'Find similarities', hints: ['How they\'re alike', 'Similarities']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does contrast mean?', options: ['Find similarities', 'Find differences', 'Find themes', 'Find plots'], correctAnswer: 'Find differences', hints: ['How they\'re different', 'Differences']},
                  { id: 'q3', type: 'multiple-choice', question: 'What tool helps show comparisons?', options: ['Ruler', 'Venn diagram', 'Clock', 'Map'], correctAnswer: 'Venn diagram', hints: ['Overlapping circles', 'Venn diagram']},
                  { id: 'q4', type: 'multiple-choice', question: 'Where do you put similarities in a Venn diagram?', options: ['Left side only', 'Right side only', 'Overlapping middle', 'Outside'], correctAnswer: 'Overlapping middle', hints: ['Where circles overlap', 'Middle']},
                  { id: 'q5', type: 'multiple-choice', question: 'What can you compare about characters?', options: ['Only names', 'Only looks', 'Personalities and actions', 'Nothing'], correctAnswer: 'Personalities and actions', hints: ['Many things', 'Traits and actions']},
                  { id: 'q6', type: 'multiple-choice', question: 'If two characters both want to win a race, is that a similarity or difference?', options: ['Similarity', 'Difference', 'Neither', 'Both'], correctAnswer: 'Similarity', hints: ['Both want same thing', 'Similarity']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why compare characters?', options: ['Not useful', 'Helps understand them better', 'Wastes time', 'Confusing'], correctAnswer: 'Helps understand them better', hints: ['Better understanding', 'Understand better']},
                  { id: 'q8', type: 'multiple-choice', question: 'What do a character\'s actions show?', options: ['Nothing', 'Who they are', 'The setting', 'The theme'], correctAnswer: 'Who they are', hints: ['Reveals personality', 'Who they are']}
                ],
                activity: { type: 'interactive-practice', description: 'Character comparison', instruction: 'Compare and contrast characters'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RI.2.6 - Author\'s purpose',
                content: '<h3>Understanding Author\'s Purpose</h3><p>Let\'s learn why authors write! Authors have different reasons for writing, called their purpose. The three main purposes are to persuade (convince you to think or do something), to inform (teach you facts and information), or to entertain (make you enjoy the story). An advertisement tries to persuade you to buy something. A science book informs you about animals or space. A funny story entertains you. Sometimes authors have more than one purpose - a story can entertain AND teach a lesson. To identify the author\'s purpose, think about what the text does: Does it try to change your mind? Does it teach you something new? Does it make you laugh or feel excited? Understanding the author\'s purpose helps you read more critically!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are the three main purposes for writing?', options: ['Read, write, speak', 'Persuade, inform, entertain', 'Beginning, middle, end', 'Happy, sad, angry'], correctAnswer: 'Persuade, inform, entertain', hints: ['PIE', 'Persuade, inform, entertain']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does "persuade" mean?', options: ['Teach facts', 'Convince someone', 'Tell a funny story', 'Describe something'], correctAnswer: 'Convince someone', hints: ['Change mind', 'Convince']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the purpose of a science textbook?', options: ['Persuade', 'Inform', 'Entertain', 'Confuse'], correctAnswer: 'Inform', hints: ['Teaches facts', 'Inform']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is the purpose of a funny story?', options: ['Persuade', 'Inform', 'Entertain', 'Scare'], correctAnswer: 'Entertain', hints: ['Make you laugh', 'Entertain']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the purpose of an advertisement?', options: ['Inform', 'Entertain', 'Persuade', 'Teach'], correctAnswer: 'Persuade', hints: ['Convince to buy', 'Persuade']},
                  { id: 'q6', type: 'multiple-choice', question: 'Can an author have more than one purpose?', options: ['Yes', 'No', 'Never', 'Not possible'], correctAnswer: 'Yes', hints: ['Multiple purposes', 'Yes']},
                  { id: 'q7', type: 'multiple-choice', question: 'To find author\'s purpose, ask:', options: ['"How long is it?"', '"What does the text do?"', '"Who wrote it?"', '"What color is it?"'], correctAnswer: '"What does the text do?"', hints: ['What\'s it trying to do', 'What it does']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the purpose of a recipe?', options: ['Persuade', 'Inform', 'Entertain', 'Scare'], correctAnswer: 'Inform', hints: ['Teaches how to cook', 'Inform']}
                ],
                activity: { type: 'interactive-practice', description: 'Purpose identification', instruction: 'Identify author\'s purpose in texts'}
              }
            ]
          },
          {
            id: 'ela-2nd-2',
            title: 'Writing and Grammar',
            description: 'Write narratives, informative texts, and opinions with proper grammar and conventions. Students will use complete sentences, proper punctuation, correct verb tenses, and descriptive language. They will also learn to revise and edit their work for improvement.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.W.2.3 - Narrative writing',
                content: '<h3>Writing Detailed Narratives</h3><p>Let\'s write engaging stories! A good narrative includes a clear sequence of events, detailed descriptions, and character dialogue. Start with a strong opening that grabs the reader\'s attention. Describe the setting so readers can picture where your story happens. Develop your characters by showing how they look, act, and feel. Use transition words like "first," "then," "next," "after that," and "finally" to show the order of events. Include sensory details - what characters see, hear, smell, taste, and touch. Add dialogue (what characters say) to make your story come alive. End with a satisfying conclusion that wraps up the story. Remember to use temporal words to show when things happen: "yesterday," "later," "soon." Great narratives make readers feel like they\'re part of the story!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What should a narrative include?', options: ['Only facts', 'Sequence of events', 'Math problems', 'Nothing'], correctAnswer: 'Sequence of events', hints: ['Order of what happens', 'Sequence']},
                  { id: 'q2', type: 'multiple-choice', question: 'What are temporal words?', options: ['Color words', 'Time words', 'Size words', 'Number words'], correctAnswer: 'Time words', hints: ['Show when', 'Time words']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is dialogue?', options: ['The setting', 'What characters say', 'The theme', 'The plot'], correctAnswer: 'What characters say', hints: ['Speech', 'What they say']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a sensory detail?', options: ['The chapter number', 'The sweet smell of cookies', 'The page count', 'The author\'s name'], correctAnswer: 'The sweet smell of cookies', hints: ['Uses senses', 'Smell']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which word shows sequence?', options: ['Beautiful', 'Blue', 'Then', 'Happy'], correctAnswer: 'Then', hints: ['Order word', 'Then']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should the opening do?', options: ['End the story', 'Grab attention', 'List facts', 'Be boring'], correctAnswer: 'Grab attention', hints: ['Hook reader', 'Grab attention']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why include setting details?', options: ['Not important', 'Help readers picture it', 'Fill space', 'Confuse readers'], correctAnswer: 'Help readers picture it', hints: ['Visualize', 'Picture it']},
                  { id: 'q8', type: 'multiple-choice', question: 'What should the conclusion do?', options: ['Start new story', 'Wrap up the story', 'Leave hanging', 'Confuse'], correctAnswer: 'Wrap up the story', hints: ['End satisfyingly', 'Wrap up']}
                ],
                activity: { type: 'interactive-practice', description: 'Story writing', instruction: 'Write detailed narratives'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.2.1 - Verb tenses and sentences',
                content: '<h3>Using Correct Grammar</h3><p>Let\'s master grammar rules! Verbs show action, and they change based on when the action happens. Past tense verbs tell about actions that already happened, often ending in -ed: "walked," "played," "jumped." Present tense verbs tell about actions happening now: "walk," "play," "jump." Future tense verbs tell about actions that will happen, using "will": "will walk," "will play," "will jump." Some verbs are irregular and don\'t follow the -ed pattern: "run" becomes "ran," not "runned." Every sentence needs a subject (who or what) and a predicate (what they do). Use complete sentences, not fragments. Remember to match your verb tense throughout your writing - if you start in past tense, stay in past tense! Correct grammar makes your writing clear and professional.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does a verb show?', options: ['A person', 'Action', 'A place', 'A thing'], correctAnswer: 'Action', hints: ['What someone does', 'Action']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which verb is past tense?', options: ['walk', 'walked', 'will walk', 'walking'], correctAnswer: 'walked', hints: ['Already happened', 'Walked']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which shows future tense?', options: ['She ran', 'She runs', 'She will run', 'She running'], correctAnswer: 'She will run', hints: ['Uses "will"', 'Will run']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is the past tense of "run"?', options: ['runned', 'ran', 'running', 'runs'], correctAnswer: 'ran', hints: ['Irregular verb', 'Ran']},
                  { id: 'q5', type: 'multiple-choice', question: 'What two parts does every sentence need?', options: ['Two verbs', 'Subject and predicate', 'Two subjects', 'Two periods'], correctAnswer: 'Subject and predicate', hints: ['Who and what they do', 'Subject and predicate']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is "I eat lunch" an example of?', options: ['Past tense', 'Present tense', 'Future tense', 'No tense'], correctAnswer: 'Present tense', hints: ['Happening now', 'Present']},
                  { id: 'q7', type: 'multiple-choice', question: 'Should you mix verb tenses in one story?', options: ['Yes, always', 'No, stay consistent', 'Doesn\'t matter', 'Always mix'], correctAnswer: 'No, stay consistent', hints: ['Keep same tense', 'Stay consistent']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the predicate in "The dog barked"?', options: ['The', 'dog', 'barked', 'The dog'], correctAnswer: 'barked', hints: ['What dog did', 'Barked']}
                ],
                activity: { type: 'interactive-practice', description: 'Grammar practice', instruction: 'Use correct verb tenses'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.W.2.5 - Revise and edit',
                content: '<h3>Revising and Editing Writing</h3><p>Let\'s learn to improve our writing! Revising and editing are two different steps. Revising means changing your ideas - you might add more details, take out parts that don\'t fit, move sentences around, or replace boring words with more exciting ones. Ask yourself: "Does this make sense? Is it interesting? Did I include enough details?" Editing means fixing mistakes in grammar, spelling, capitalization, and punctuation. Use a checklist: Did I capitalize the first word of each sentence? Did I end sentences with punctuation? Did I spell words correctly? Did I use correct grammar? Reading your work out loud helps you catch mistakes. Good writers always revise and edit - even professional authors do it! Taking time to improve your writing makes it clearer and more enjoyable to read.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is revising?', options: ['Fixing spelling', 'Changing ideas', 'Adding periods', 'Capitalizing'], correctAnswer: 'Changing ideas', hints: ['Improve content', 'Ideas']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is editing?', options: ['Adding details', 'Moving sentences', 'Fixing grammar and spelling', 'Changing topic'], correctAnswer: 'Fixing grammar and spelling', hints: ['Fix mistakes', 'Grammar and spelling']},
                  { id: 'q3', type: 'multiple-choice', question: 'When revising, you might:', options: ['Only fix commas', 'Add more details', 'Only check spelling', 'Do nothing'], correctAnswer: 'Add more details', hints: ['Improve content', 'Add details']},
                  { id: 'q4', type: 'multiple-choice', question: 'What helps you catch mistakes?', options: ['Skipping it', 'Reading out loud', 'Not checking', 'Guessing'], correctAnswer: 'Reading out loud', hints: ['Hear mistakes', 'Read aloud']},
                  { id: 'q5', type: 'multiple-choice', question: 'Do professional authors revise and edit?', options: ['Yes', 'No', 'Never', 'Rarely'], correctAnswer: 'Yes', hints: ['All writers do it', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'When editing, you check:', options: ['Only ideas', 'Capitalization and punctuation', 'Only details', 'Nothing'], correctAnswer: 'Capitalization and punctuation', hints: ['Mechanics', 'Capitalization and punctuation']},
                  { id: 'q7', type: 'multiple-choice', question: 'Why revise and edit?', options: ['Not important', 'Makes writing better', 'Wastes time', 'Boring'], correctAnswer: 'Makes writing better', hints: ['Improves quality', 'Better writing']},
                  { id: 'q8', type: 'multiple-choice', question: 'What should you ask when revising?', options: ['"Is it long enough?"', '"Does this make sense?"', '"How many words?"', '"What color pen?"'], correctAnswer: '"Does this make sense?"', hints: ['Check clarity', 'Makes sense']}
                ],
                activity: { type: 'interactive-practice', description: 'Revision practice', instruction: 'Revise and edit writing'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-2nd-1',
            title: 'Earth Processes and Habitats',
            description: 'Explore slow and fast changes to the Earth\'s surface (weathering and erosion) and compare the features of different habitats (e.g., forest, desert, ocean). Students will learn how animal behaviors are related to their environment.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.2.1 - Earth Changes (Weathering and Erosion)',
                content: '<h3>Changes to Earth\'s Surface</h3><p>The Earth\'s surface is always changing! Some changes are slow, like **weathering**, where rock is broken down by wind and rain. **Erosion** is when wind, water, or ice moves soil and rock from one place to another. Over a very long time, these processes can create huge canyons or move sand to form beaches. Some changes, like earthquakes, are very fast.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The process of moving soil and rock from one place to another is called:', options: ['Weathering', 'Erosion', 'Volcano', 'Planting'], correctAnswer: 'Erosion', hints: ['Movement of earth material', 'Erosion']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which natural event is a **fast** change to Earth\'s surface?', options: ['A canyon forming', 'A volcano erupting', 'Weathering of a rock', 'A river moving soil slowly'], correctAnswer: 'A volcano erupting', hints: ['Happens quickly', 'Volcano']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which natural force is constantly causing rocks to break down into smaller pieces (weathering)?', options: ['People walking', 'Water and wind', 'Animals eating', 'The sun only'], correctAnswer: 'Water and wind', hints: ['Natural forces cause breaking down', 'Water and wind']}
                ],
                activity: { type: 'erosion-model', description: 'Create a small-scale model to demonstrate how water causes erosion on bare soil versus soil with plants.', instruction: 'Compare the amount of soil moved in each model.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.2.2 - Water on Earth',
                content: '<h3>Where is Water Found?</h3><p>Water is essential for life and is found all over Earth in different forms. Most of the Earth\'s water is in salty **oceans**. Fresh water is found in **rivers**, **lakes**, and under the ground (**groundwater**). Water can be a solid (ice), liquid (water), or gas (steam/water vapor). The constant movement of water between these forms is called the **water cycle**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Where is most of the Earth\'s water located?', options: ['Rivers', 'Lakes', 'Oceans', 'Groundwater'], correctAnswer: 'Oceans', hints: ['Large, salty bodies of water', 'Oceans']},
                  { id: 'q2', type: 'multiple-choice', question: 'When water goes up into the air as water vapor, this part of the water cycle is called:', options: ['Condensation', 'Precipitation', 'Erosion', 'Evaporation'], correctAnswer: 'Evaporation', hints: ['Liquid turning to gas', 'Evaporation']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is an example of water in a **solid** state?', options: ['Rain', 'Steam', 'Ice', 'Fog'], correctAnswer: 'Ice', hints: ['Frozen water', 'Ice']}
                ],
                activity: { type: 'water-cycle-model', description: 'Draw the water cycle, labeling evaporation, condensation, and precipitation.', instruction: 'Explain where the rain comes from (Condensation of water vapor).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.2.3 - Comparing Habitats',
                content: '<h3>Life in Different Habitats</h3><p>A **habitat** is where an animal or plant naturally lives. Habitats have different features that living things adapt to. A **desert** is very dry and hot, so animals (like a camel) store water. A **forest** has many trees for shelter. An **ocean** is salty and deep, supporting marine life. Animals and plants must have the right features (**adaptations**) to survive in their specific habitat.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which habitat is defined by a very dry and hot climate?', options: ['Forest', 'Ocean', 'Desert', 'Wetland'], correctAnswer: 'Desert', hints: ['Little water, high temperature', 'Desert']},
                  { id: 'q2', type: 'multiple-choice', question: 'An adaptation is a trait that helps an organism:', options: ['Change the weather', 'Survive in its habitat', 'Grow very large', 'Only sleep'], correctAnswer: 'Survive in its habitat', hints: ['Survival mechanism', 'Survive']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which habitat provides a large amount of salt water?', options: ['Pond', 'River', 'Ocean', 'Swamp'], correctAnswer: 'Ocean', hints: ['Largest body of salty water', 'Ocean']}
                ],
                activity: { type: 'habitat-investigation', description: 'Research and compare the basic needs of a desert plant (cactus) and a forest plant (oak tree).', instruction: 'Identify one adaptation that helps a fish live in water.' }
              }
            ]
          },
          {
            id: 'science-2nd-2',
            title: 'Engineering and Design',
            description: 'Introduce the basic concepts of engineering. Students will learn the steps of the engineering design process: Ask, Imagine, Plan, Create, and Improve. They will use this process to solve a simple problem.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.2.4 - Engineering Design Process: Ask, Imagine, Plan',
                content: '<h3>The First Steps to Solving Problems</h3><p>**Engineers** use the **Design Process** to solve problems. First, **Ask**: Define the problem and the goals. Second, **Imagine**: Brainstorm many different possible solutions. Third, **Plan**: Choose the best solution and draw a clear, labeled design. Never skip the planning step, as it prevents mistakes later and helps organize materials.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the goal of the **Ask** stage?', options: ['To improve the design', 'To identify the problem', 'To guess the answer', 'To skip the plan'], correctAnswer: 'To identify the problem', hints: ['Need to know the goal first', 'Identify problem']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which stage involves brainstorming and listing many different ideas?', options: ['Ask', 'Imagine', 'Plan', 'Create'], correctAnswer: 'Imagine', hints: ['Generating creative solutions', 'Imagine']},
                  { id: 'q3', type: 'multiple-choice', question: 'In the **Plan** stage, what should you create?', options: ['The final product', 'A written summary', 'A labeled drawing or blueprint', 'A new problem'], correctAnswer: 'A labeled drawing or blueprint', hints: ['Creating a guide for building', 'Drawing design']}
                ],
                activity: { type: 'design-planning', description: 'Plan a solution for a problem (e.g., how to carry 5 books easily using only paper, string, and glue).', instruction: 'Draw a labeled plan of the solution.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.2.5 - Engineering Design Process: Create and Improve',
                content: '<h3>Building, Testing, and Refining</h3><p>After planning, you **Create** (build the solution). Then you **Test** the solution to see if it meets the goals set in the Ask stage. If it doesn\'t work perfectly, or if it can be made better, you go to the **Improve** stage. **Improve** is essential: you analyze the test results, redesign part of the solution, and test again. This continuous cycle makes a design better.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What happens immediately after the **Create** stage?', options: ['Ask', 'Imagine', 'Test the design', 'Draw a new plan'], correctAnswer: 'Test the design', hints: ['Check if it works', 'Test the design']},
                  { id: 'q2', type: 'multiple-choice', question: 'Why is the **Improve** stage so important in engineering?', options: ['It is fun', 'It is the only way to get a perfect design', 'It allows the engineer to learn from failures and refine the solution', 'It is mandatory'], correctAnswer: 'It allows the engineer to learn from failures and refine the solution', hints: ['Learning and refinement', 'Learn from failures']},
                  { id: 'q3', type: 'multiple-choice', question: 'If a design fails the test, an engineer should not:', options: ['Redesign the faulty part', 'Try a new material', 'Blame the test equipment', 'Return to the Imagine stage'], correctAnswer: 'Blame the test equipment', hints: ['Must accept results and improve the design', 'Take responsibility']}
                ],
                activity: { type: 'building-and-testing', description: 'Build the carrying device from the Plan lesson and test how many books it can hold.', instruction: 'Identify the weakest point of the design and suggest an improvement (Improve Stage).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.2.6 - Technology and Society',
                content: '<h3>Technology in Our Lives</h3><p>**Technology** is anything people create to solve a problem or make life easier. It is not just computers; simple things like a pencil, a wheel, or a spoon are technology. We use technology every day. Understanding technology helps us appreciate how engineering improves society, but also consider the social impact of new tools (e.g., fast cars are convenient but cause pollution).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The basic definition of technology is:', options: ['Only computers and phones', 'Anything invented to solve a problem', 'Anything made of plastic', 'Anything from the past'], correctAnswer: 'Anything invented to solve a problem', hints: ['Broad definition of invention', 'Solve problem']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is an example of simple technology?', options: ['The internet', 'A pencil', 'Robots', 'Electric cars'], correctAnswer: 'A pencil', hints: ['A tool for writing', 'Pencil']},
                  { id: 'q3', type: 'multiple-choice', question: 'A benefit of modern technology like vaccines is:', options: ['It costs a lot of money', 'It makes people sick', 'It helps people stay healthy', 'It causes traffic'], correctAnswer: 'It helps people stay healthy', hints: ['Improves health', 'Stay healthy']}
                ],
                activity: { type: 'technology-inventory', description: 'List five pieces of technology used in the classroom and what problem each one solves.', instruction: 'Describe how technology is used to communicate with family members who are far away.' }
              }
            ]
          },
          {
            id: 'science-2nd-3',
            title: 'Properties of Materials',
            description: 'Investigate the properties of different materials and determine if they are solids or liquids. Explore how materials can be combined and separated.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.2.7 - Solids and Liquids',
                content: '<h3>Comparing Solids and Liquids</h3><p>**Matter** is anything that has mass and takes up space. **Solids** have a definite shape (like a block) and volume. **Liquids** take the shape of their container (like water in a cup) but keep the same volume. Knowing these properties helps us use materials correctly; we put liquids in sealed containers and build things out of strong solids.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which state of matter takes the shape of its container?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctAnswer: 'Liquid', hints: ['Property of water, juice, etc.', 'Liquid']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which object is a **solid**?', options: ['Milk', 'Water', 'A rock', 'Juice'], correctAnswer: 'A rock', hints: ['Definite shape', 'Rock']},
                  { id: 'q3', type: 'multiple-choice', question: 'If you pour milk from a small glass into a large bowl, the milk\'s volume:', options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'], correctAnswer: 'Stays the same', hints: ['Volume is conserved in liquids', 'Stays the same']}
                ],
                activity: { type: 'solid-liquid-test', description: 'Test several objects to determine if they are solid or liquid by pouring or squishing them.', instruction: 'Explain why a solid block cannot be poured like liquid water.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.2.8 - Combining and Separating Materials',
                content: '<h3>Mixtures</h3><p>When you put different materials together, you create a **mixture**. For example, sand and water are a mixture. Sometimes, a material **dissolves** (like sugar in water) to create a solution, but it is still a mixture. We can often separate mixtures using physical methods, like sifting, stirring, or using a magnet. Separating materials is important in cooking and recycling.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'A combination of two or more substances that can be easily separated is called a:', options: ['Compound', 'Element', 'Mixture', 'Gas'], correctAnswer: 'Mixture', hints: ['Not chemically combined', 'Mixture']},
                  { id: 'q2', type: 'multiple-choice', question: 'When salt disappears in water, it has:', options: ['Melted', 'Dissolved', 'Vaporized', 'Chemicalized'], correctAnswer: 'Dissolved', hints: ['Broken down into tiny pieces in the liquid', 'Dissolved']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which tool could you use to separate iron filings from sand?', options: ['A sieve', 'A funnel', 'A magnet', 'A spoon'], correctAnswer: 'A magnet', hints: ['Iron is magnetic', 'Magnet']}
                ],
                activity: { type: 'mixture-separation', description: 'Create a mixture of sand and small paperclips. Practice separating the items using different methods (e.g., magnet, sifting).', instruction: 'Explain which method worked best and why.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.2.9 - Using Material Properties',
                content: '<h3>Choosing the Right Material</h3><p>Engineers and builders choose materials based on their **properties**. You would use **metal** (strong, durable) to build a car frame, and **plastic** (lightweight, waterproof) to make a water bottle. You would use **cloth** (soft, flexible) to make clothes. Using the correct material ensures the product is strong, safe, and effective for its purpose.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What property makes plastic good for a rain umbrella?', options: ['It is soft', 'It is waterproof', 'It is heavy', 'It is magnetic'], correctAnswer: 'It is waterproof', hints: ['Repels water', 'Waterproof']},
                  { id: 'q2', type: 'multiple-choice', question: 'What material should you use if you need something to be transparent (see through)?', options: ['Wood', 'Metal', 'Glass', 'Clay'], correctAnswer: 'Glass', hints: ['Lets light pass through', 'Glass']},
                  { id: 'q3', type: 'multiple-choice', question: 'What property makes metal a good choice for a hammer?', options: ['It is soft', 'It is light', 'It is strong and hard', 'It is colorful'], correctAnswer: 'It is strong and hard', hints: ['Durable and dense', 'Strong and hard']}
                ],
                activity: { type: 'material-design-challenge', description: 'Design a way to carry hot soup, choosing between paper, plastic, or metal for the container.', instruction: 'Justify the choice based on the material\'s properties (e.g., heat resistance).' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-2nd-1',
            title: 'Geography and Local History',
            description: 'Use maps and globes to locate places and understand directions. Explore local history, important holidays, and significant historical figures in American history.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.2.1 - Maps, Globes, and Directions',
                content: '<h3>Reading Maps and Globes</h3><p>**Geography** is the study of the Earth. A **globe** is a model of the Earth and shows the true shape and size of continents and oceans. A **map** is a flat drawing of an area. Both use a **compass rose** to show directions: **North, South, East, and West**. Maps use **legends** or **keys** to explain what symbols mean. Understanding these tools helps us find places and travel efficiently.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the most accurate model of the Earth?', options: ['A street map', 'A globe', 'A flat picture', 'A compass rose'], correctAnswer: 'A globe', hints: ['Sphere shape is closest to reality', 'Globe']},
                  { id: 'q2', type: 'multiple-choice', question: 'What are the four main directions on a compass rose?', options: ['Up, Down, Left, Right', 'North, South, East, West', 'Here, There, Near, Far', 'In, Out, Over, Under'], correctAnswer: 'North, South, East, West', hints: ['Cardinal directions', 'N, S, E, W']},
                  { id: 'q3', type: 'multiple-choice', question: 'What part of a map explains the symbols used?', options: ['Title', 'Compass Rose', 'Legend or Key', 'Scale'], correctAnswer: 'Legend or Key', hints: ['Explains symbols', 'Key']}
                ],
                activity: { type: 'map-making', description: 'Draw a map of the classroom or school and include a compass rose and key.', instruction: 'Give a friend directions from one point on the map to another.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.2.2 - Local and State History',
                content: '<h3>Our State and Community</h3><p>Every place has a history! Our state, **Mississippi**, has its own unique past. **Local history** includes the story of our town, the important buildings, and the people who lived here long ago. Learning our history helps us understand why our community looks and works the way it does today. Historians use **artifacts** (old objects) and stories to learn about the past.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the capital of Mississippi?', options: ['Memphis', 'Mobile', 'Jackson', 'New Orleans'], correctAnswer: 'Jackson', hints: ['The center of state government', 'Jackson']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is an **artifact**?', options: ['A new toy', 'An object from the past', 'A cloud', 'A song'], correctAnswer: 'An object from the past', hints: ['Evidence used by historians', 'Object from past']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is it important to learn local history?', options: ['To confuse people', 'To understand how our community changed', 'To ignore the past', 'To travel quickly'], correctAnswer: 'To understand how our community changed', hints: ['Explains the present', 'How community changed']}
                ],
                activity: { type: 'local-history-interview', description: 'Interview a parent or grandparent about a change they have seen in the local community over time.', instruction: 'Share one interesting fact learned from the interview.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.2.3 - Global Connections',
                content: '<h3>The World Around Us</h3><p>We are connected to people all over the **world**. People in different countries have different **cultures** (languages, food, traditions). We receive **goods** from other countries (e.g., cars, toys). Understanding different cultures helps us appreciate diversity and be better global citizens. The world is getting smaller due to communication and trade.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is **culture**?', options: ['The weather', 'The traditions and beliefs of a group of people', 'The name of a town', 'The food you eat once'], correctAnswer: 'The traditions and beliefs of a group of people', hints: ['Shared way of life', 'Traditions and beliefs']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is an example of a **good** we might get from another country?', options: ['A haircut', 'A piece of fruit', 'A lesson', 'A hug'], correctAnswer: 'A piece of fruit', hints: ['Physical product', 'Fruit']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is it good to learn about other cultures?', options: ['To ignore them', 'To laugh at them', 'To appreciate differences', 'To stay home'], correctAnswer: 'To appreciate differences', hints: ['Respect and understanding', 'Appreciate differences']}
                ],
                activity: { type: 'cultural-food-sampling', description: 'Sample simple foods from two different cultures (e.g., tacos from Mexico, pasta from Italy).', instruction: 'Identify the country of origin for two goods in the classroom.' }
              }
            ]
          },
          {
            id: 'ss-2nd-2',
            title: 'Civics: Branches and Rights',
            description: 'Introduce the three branches of U.S. government. Understand the basic rights and responsibilities of citizens.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.2.4 - Three Branches of Government',
                content: '<h3>Who Runs the Country?</h3><p>The U.S. government is divided into three parts (**branches**). The **Legislative Branch** (Congress) **makes** laws. The **Executive Branch** (President) **enforces** laws. The **Judicial Branch** (Courts) **interprets** laws. This is called **Separation of Powers**, and it makes sure no single person or group has too much power.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which branch is responsible for **making laws**?', options: ['Executive', 'Judicial', 'Legislative', 'Local'], correctAnswer: 'Legislative', hints: ['The branch with Congress', 'Legislative']},
                  { id: 'q2', type: 'multiple-choice', question: 'The President belongs to which branch?', options: ['Judicial', 'Executive', 'Legislative', 'Military'], correctAnswer: 'Executive', hints: ['Enforces laws', 'Executive']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which branch decides if a law is fair?', options: ['Executive', 'Judicial', 'Legislative', 'School'], correctAnswer: 'Judicial', hints: ['Courts and judges', 'Judicial']}
                ],
                activity: { type: 'branch-role-play', description: 'Act out a simple scenario where each branch has a role (e.g., Congress writes a "no running" rule, President enforces it, Judge decides a consequence).', instruction: 'Name the leader of the Executive Branch (The President).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.2.5 - Citizen Rights',
                content: '<h3>Our Basic Rights</h3><p>**Rights** are freedoms guaranteed to all citizens. The **Bill of Rights** gives us many important rights, like **freedom of speech** (saying what you think) and **freedom of religion** (choosing how to worship). Rights are protected by the government. Knowing your rights is key to using your voice in a democracy.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which document lists the first ten basic rights of American citizens?', options: ['The Constitution', 'The Bill of Rights', 'The Preamble', 'The State Law'], correctAnswer: 'The Bill of Rights', hints: ['The first ten amendments', 'Bill of Rights']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is **freedom of speech**?', options: ['Freedom to hit others', 'Freedom to say what you think', 'Freedom to ignore laws', 'Freedom to only listen'], correctAnswer: 'Freedom to say what you think', hints: ['Ability to express ideas', 'Say what you think']},
                  { id: 'q3', type: 'multiple-choice', question: 'A right is a freedom that is protected by the:', options: ['School', 'Government', 'Store', 'Friends'], correctAnswer: 'Government', hints: ['Legal protection', 'Government']}
                ],
                activity: { type: 'rights-discussion', description: 'Discuss a time when they used their freedom of speech (e.g., sharing an opinion on a book).', instruction: 'Explain why freedom of speech does not include yelling "fire" in a crowded place.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.2.6 - Citizen Responsibilities',
                content: '<h3>Our Responsibilities</h3><p>**Responsibilities** are duties or things citizens should do for the good of the community. Examples include **obeying laws**, **paying taxes** (when you are an adult), and **voting** (when you are an adult). Even now, your responsibility is to follow school rules and be a good, helpful student. Rights come with responsibilities!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a major responsibility for adult citizens?', options: ['Breaking laws', 'Ignoring neighbors', 'Obeying laws', 'Staying silent'], correctAnswer: 'Obeying laws', hints: ['Required duty', 'Obeying laws']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a responsibility students have at school?', options: ['Making up rules', 'Following school rules', 'Yelling at teachers', 'Skipping class'], correctAnswer: 'Following school rules', hints: ['Duty to the school community', 'Following school rules']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why do we need to obey laws?', options: ['To be mean', 'To keep the community safe and orderly', 'To confuse police', 'To waste time'], correctAnswer: 'To keep the community safe and orderly', hints: ['Purpose of law', 'Safe and orderly']}
                ],
                activity: { type: 'responsibility-chart', description: 'List three rights they enjoy and three responsibilities they have at home and school.', instruction: 'Discuss why voting is a responsibility (Duty to choose good leaders).' }
              }
            ]
          },
          {
            id: 'ss-2nd-3',
            title: 'Economics: Producers and Money',
            description: 'Explore the concept of specialization and its role in the economy. Understand the role of money and the basic costs and benefits of choices.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.2.7 - Specialization of Labor',
                content: '<h3>Why People Have Different Jobs</h3><p>**Specialization** means focusing on one job and doing it very well. A baker specializes in making bread. A doctor specializes in helping sick people. Because people specialize, they must rely on others for different **goods and services**. This reliance on others is called **interdependence**. Specialization makes the economy more efficient!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does a person do when they **specialize**?', options: ['Do all jobs', 'Focus on one job and do it well', 'Buy everything', 'Ignore work'], correctAnswer: 'Focus on one job and do it well', hints: ['Specific skill set', 'Focus on one job']},
                  { id: 'q2', type: 'multiple-choice', question: 'Because of specialization, the baker needs the farmer, and the farmer needs the baker. This is called:', options: ['Independence', 'Government', 'Interdependence', 'Scarcity'], correctAnswer: 'Interdependence', hints: ['Relying on others', 'Interdependence']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is an example of specialization?', options: ['A person who does every job in a town', 'A teacher who only teaches math', 'A person who only buys things', 'A person who never works'], correctAnswer: 'A teacher who only teaches math', hints: ['Focus on one area', 'Specific focus']}
                ],
                activity: { type: 'specialization-web', description: 'Draw a small web connecting three specialized jobs (e.g., baker, doctor, teacher) to show interdependence.', instruction: 'Identify the producer and consumer in the doctor-patient relationship.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.2.8 - Making Economic Choices',
                content: '<h3>Costs and Benefits</h3><p>When you make an economic **choice**, there are **costs** and **benefits**. The **benefit** is what you gain from the choice (e.g., getting a new toy). The **cost** is what you give up (e.g., spending your money, or the time spent working). Every time you choose one thing, you give up another—that is the **opportunity cost**. Smart choices happen when the benefits are greater than the costs.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What you **gain** from a choice is the:', options: ['Cost', 'Opportunity', 'Benefit', 'Scarcity'], correctAnswer: 'Benefit', hints: ['The positive outcome', 'Benefit']},
                  { id: 'q2', type: 'multiple-choice', question: 'What you **give up** to make a choice is the:', options: ['Benefit', 'Cost', 'Gain', 'Profit'], correctAnswer: 'Cost', hints: ['What you lose', 'Cost']},
                  { id: 'q3', type: 'multiple-choice', question: 'If you choose to read a book instead of playing outside, what is the **opportunity cost**?', options: ['Reading the book', 'Playing outside', 'The cost of the book', 'The time spent inside'], correctAnswer: 'Playing outside', hints: ['The next best alternative missed', 'Playing outside']}
                ],
                activity: { type: 'cost-benefit-scenario', description: 'Analyze a scenario (e.g., saving money vs. spending it now) and list the costs and benefits of each choice.', instruction: 'Explain why saving money has an opportunity cost.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.2.9 - Forms of Money',
                content: '<h3>Coins, Bills, and Value</h3><p>The U.S. uses **coins** (pennies, nickels, dimes, quarters) and **bills** (paper money). Each has a different **value**. Learning to count and compare the value of different coins is important for making purchases. Money allows us to save up for bigger items and helps us trade goods and services fairly and easily.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which coin is worth 10 cents?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correctAnswer: 'Dime', hints: ['Smallest coin, 10 cents', 'Dime']},
                  { id: 'q2', type: 'multiple-choice', question: 'How many pennies equal one dime (10 cents)?', options: ['5', '10', '25', '1'], correctAnswer: '10', hints: ['10 cents total', 'Ten pennies']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is a piece of paper money called?', options: ['Coin', 'Bill', 'Penny', 'Check'], correctAnswer: 'Bill', hints: ['Paper currency', 'Bill']}
                ],
                activity: { type: 'money-counting', description: 'Practice counting combinations of coins to reach specific dollar amounts (e.g., 50 cents, 75 cents).', instruction: 'Identify which is more valuable: 5 nickels or 2 dimes.' }
              }
            ]
          }
        ]
      },
      '3rd Grade': {
        'Math': [
          {
            id: 'math-3rd-1',
            title: 'Multiplication and Division',
            description: 'Master multiplication and division facts, solve word problems, and understand the relationship between operations. Students will learn strategies for memorizing facts, apply operations to real-world situations, and use arrays and equal groups. These foundational skills prepare students for multi-digit computation and algebraic thinking.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.3.OA.1 - Multiplication strategies',
                content: '<h3>Understanding Multiplication</h3><p>Let\'s learn multiplication! Multiplication is repeated addition. When you see 4 × 3, it means "4 groups of 3" or 3 + 3 + 3 + 3 = 12. You can also think of it as an array - 4 rows with 3 in each row. The order doesn\'t matter: 4 × 3 = 3 × 4 (this is called the commutative property). Start by learning your doubles (2 × 2, 3 × 3) and multiplying by 10 (which just adds a zero). Use skip counting: for 5 × 4, count 5, 10, 15, 20. Understanding multiplication deeply helps you solve problems faster!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 6 × 3?', correctAnswer: '18', hints: ['Six groups of 3', 'Eighteen']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 4 × 5?', correctAnswer: '20', hints: ['Four groups of 5', 'Twenty']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 7 × 2?', options: ['12', '14', '16', '18'], correctAnswer: '14', hints: ['Double 7', 'Fourteen']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 8 × 3?', correctAnswer: '24', hints: ['Skip count by 3s', 'Twenty-four']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is 9 × 4?', options: ['32', '34', '36', '38'], correctAnswer: '36', hints: ['Nine groups of 4', 'Thirty-six']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is 7 × 7?', correctAnswer: '49', hints: ['Seven times seven', 'Forty-nine']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is 6 × 6?', options: ['30', '32', '34', '36'], correctAnswer: '36', hints: ['Six squared', 'Thirty-six']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 5 × 8?', correctAnswer: '40', hints: ['Skip count by 5', 'Forty']}
                ],
                activity: { type: 'interactive-practice', description: 'Multiplication practice', instruction: 'Master multiplication facts'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.3.OA.2 - Division concepts',
                content: '<h3>Understanding Division</h3><p>Division is splitting into equal groups or finding how many groups you can make. When you see 12 ÷ 3, it asks "How many groups of 3 are in 12?" or "If 12 items are split into 3 groups, how many in each?" The answer is 4 either way. Division is the opposite of multiplication - if you know 4 × 3 = 12, then you know 12 ÷ 3 = 4 and 12 ÷ 4 = 3. This relationship is called a fact family. Use your multiplication facts to help with division!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 20 ÷ 4?', correctAnswer: '5', hints: ['4 × ? = 20', 'Five']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 18 ÷ 3?', correctAnswer: '6', hints: ['3 × ? = 18', 'Six']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 24 ÷ 6?', options: ['3', '4', '5', '6'], correctAnswer: '4', hints: ['6 × 4', 'Four']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 35 ÷ 5?', correctAnswer: '7', hints: ['5 × ? = 35', 'Seven']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is 48 ÷ 8?', options: ['5', '6', '7', '8'], correctAnswer: '6', hints: ['8 × 6', 'Six']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is 42 ÷ 7?', correctAnswer: '6', hints: ['7 × ? = 42', 'Six']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is 36 ÷ 9?', options: ['3', '4', '5', '6'], correctAnswer: '4', hints: ['9 × 4', 'Four']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 56 ÷ 8?', correctAnswer: '7', hints: ['8 × ? = 56', 'Seven']}
                ],
                activity: { type: 'interactive-practice', description: 'Division practice', instruction: 'Practice division facts'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.3.OA.3 - Word problems with operations',
                content: '<h3>Multi-Step Word Problems</h3><p>Word problems help us use math in real life! Read carefully to understand what\'s happening. Look for keywords: "times" or "groups of" suggest multiplication, "split" or "shared" suggest division, "total" or "altogether" suggest addition, "left" or "difference" suggest subtraction. Some problems need more than one step - you might multiply then add, or divide then subtract. Draw pictures or diagrams to help visualize the problem. Always check if your answer makes sense!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Sam has 5 bags with 6 apples in each. How many apples total?', correctAnswer: '30', hints: ['Multiply', 'Thirty']},
                  { id: 'q2', type: 'multiple-choice', question: 'There are 24 students in 4 equal groups. How many in each group?', options: ['4', '5', '6', '7'], correctAnswer: '6', hints: ['Divide', 'Six']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A box has 7 rows of cookies with 4 in each row. How many cookies?', correctAnswer: '28', hints: ['Multiply rows by columns', 'Twenty-eight']},
                  { id: 'q4', type: 'multiple-choice', question: 'Maria has 3 packs of 8 crayons. She gives away 5. How many left?', options: ['19', '20', '21', '22'], correctAnswer: '19', hints: ['Multiply then subtract', 'Nineteen']},
                  { id: 'q5', type: 'fill-in-blank', question: '40 chairs are arranged in 5 equal rows. How many chairs per row?', correctAnswer: '8', hints: ['Divide', 'Eight']},
                  { id: 'q6', type: 'multiple-choice', question: 'Jake buys 4 packs of 6 pencils. Emma buys 3 packs of 6. How many total?', options: ['36', '40', '42', '48'], correctAnswer: '42', hints: ['Add both products', 'Forty-two']},
                  { id: 'q7', type: 'fill-in-blank', question: 'There are 9 teams with 6 players each. How many players total?', correctAnswer: '54', hints: ['Multiply', 'Fifty-four']},
                  { id: 'q8', type: 'multiple-choice', question: 'A baker makes 8 trays with 5 cookies each. He sells 12. How many left?', options: ['26', '28', '30', '32'], correctAnswer: '28', hints: ['Multiply then subtract', 'Twenty-eight']}
                ],
                activity: { type: 'interactive-practice', description: 'Word problems', instruction: 'Solve real-world problems'}
              },
              {
                id: 'lesson-4',
                objective: 'MCCRS.Math.3.OA.7 - Fact fluency',
                content: '<h3>Mastering Multiplication and Division Facts</h3><p>Knowing your multiplication and division facts by heart is essential! Practice until you can answer automatically without counting or using strategies. This is called fact fluency. Start with easier facts (2s, 5s, 10s) and gradually work on harder ones (7s, 8s, 9s). Use flashcards, online games, or practice with a partner. When you know facts fluently, you can solve complex problems without getting stuck on basic calculations. Set a goal to master all facts 0-10!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Quick! 7 × 8 = ?', correctAnswer: '56', hints: ['56', 'Fifty-six']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Quick! 9 × 6 = ?', correctAnswer: '54', hints: ['54', 'Fifty-four']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Quick! 72 ÷ 9 = ?', correctAnswer: '8', hints: ['9 × 8', 'Eight']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Quick! 8 × 8 = ?', correctAnswer: '64', hints: ['64', 'Sixty-four']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Quick! 63 ÷ 7 = ?', correctAnswer: '9', hints: ['7 × 9', 'Nine']},
                  { id: 'q6', type: 'fill-in-blank', question: 'Quick! 6 × 9 = ?', correctAnswer: '54', hints: ['54', 'Fifty-four']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Quick! 49 ÷ 7 = ?', correctAnswer: '7', hints: ['7 × 7', 'Seven']},
                  { id: 'q8', type: 'fill-in-blank', question: 'Quick! 9 × 9 = ?', correctAnswer: '81', hints: ['81', 'Eighty-one']}
                ],
                activity: { type: 'interactive-practice', description: 'Fact fluency', instruction: 'Timed practice for speed'}
              }
            ]
          },
          {
            id: 'math-3rd-2',
            title: 'Fractions',
            description: 'Understand fractions as parts of a whole, compare fractions, and represent fractions on number lines. Students will learn that fractions represent equal parts, identify equivalent fractions, and compare fractions with like and unlike denominators. This foundational fraction sense supports all future work with rational numbers.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.3.NF.1 - Understanding fractions',
                content: '<h3>What Are Fractions?</h3><p>Fractions represent parts of a whole! When you cut a pizza into 8 equal slices and take 3, you have 3/8 of the pizza. The top number (numerator) tells how many parts you have. The bottom number (denominator) tells how many equal parts make the whole. The denominator can never be zero! Fractions can represent parts of shapes, parts of groups, or parts of lengths. Each part must be equal in size - if they\'re not equal, it\'s not a proper fraction. Understanding fractions helps you share fairly and measure accurately!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does the denominator tell you?', options: ['Parts you have', 'Total equal parts', 'Whole number', 'Nothing'], correctAnswer: 'Total equal parts', hints: ['Bottom number', 'Total parts']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does the numerator tell you?', options: ['Total parts', 'Parts you have', 'Whole', 'Denominator'], correctAnswer: 'Parts you have', hints: ['Top number', 'Parts you have']},
                  { id: 'q3', type: 'multiple-choice', question: 'In 3/4, what is the numerator?', options: ['3', '4', '7', '12'], correctAnswer: '3', hints: ['Top number', 'Three']},
                  { id: 'q4', type: 'multiple-choice', question: 'In 5/8, what is the denominator?', options: ['5', '8', '13', '40'], correctAnswer: '8', hints: ['Bottom number', 'Eight']},
                  { id: 'q5', type: 'multiple-choice', question: 'If a pie is cut into 6 equal pieces and you eat 2, what fraction did you eat?', options: ['2/4', '2/6', '6/2', '4/6'], correctAnswer: '2/6', hints: ['2 out of 6', '2/6']},
                  { id: 'q6', type: 'multiple-choice', question: 'Must the parts be equal for a fraction?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Must be equal', 'Yes']},
                  { id: 'q7', type: 'multiple-choice', question: 'Can the denominator be zero?', options: ['Yes', 'No', 'Sometimes', 'Always'], correctAnswer: 'No', hints: ['Cannot divide by zero', 'No']},
                  { id: 'q8', type: 'multiple-choice', question: 'What fraction is shaded if 3 out of 5 boxes are colored?', options: ['3/5', '5/3', '3/2', '5/8'], correctAnswer: '3/5', hints: ['3 of 5', '3/5']}
                ],
                activity: { type: 'interactive-practice', description: 'Fraction basics', instruction: 'Identify and represent fractions'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.3.NF.3 - Compare fractions',
                content: '<h3>Comparing Fractions</h3><p>Let\'s compare fractions to see which is greater! When fractions have the same denominator, compare the numerators - the larger numerator means the larger fraction. For example, 3/8 > 2/8 because 3 > 2. When fractions have the same numerator but different denominators, the smaller denominator is actually the larger fraction! Think about pizza: 1/2 of a pizza is more than 1/4 of the same pizza. You can also compare to benchmarks like 1/2 - is the fraction more or less than half? Use models, number lines, or find common denominators to compare different fractions!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is greater: 3/8 or 5/8?', options: ['3/8', '5/8', 'Same', 'Cannot tell'], correctAnswer: '5/8', hints: ['Same denominator', '5/8']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is greater: 1/2 or 1/4?', options: ['1/2', '1/4', 'Same', 'Cannot tell'], correctAnswer: '1/2', hints: ['Bigger pieces', '1/2']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is less: 2/6 or 4/6?', options: ['2/6', '4/6', 'Same', 'Cannot tell'], correctAnswer: '2/6', hints: ['Smaller numerator', '2/6']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is greater: 1/3 or 1/5?', options: ['1/3', '1/5', 'Same', 'Cannot tell'], correctAnswer: '1/3', hints: ['Bigger pieces', '1/3']},
                  { id: 'q5', type: 'multiple-choice', question: 'Is 4/8 equal to 1/2?', options: ['Yes', 'No', 'Maybe', 'Cannot tell'], correctAnswer: 'Yes', hints: ['Both equal half', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is greater: 7/10 or 3/10?', options: ['7/10', '3/10', 'Same', 'Cannot tell'], correctAnswer: '7/10', hints: ['Larger numerator', '7/10']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which is less: 1/6 or 1/3?', options: ['1/6', '1/3', 'Same', 'Cannot tell'], correctAnswer: '1/6', hints: ['Smaller pieces', '1/6']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which is greater: 2/3 or 1/3?', options: ['2/3', '1/3', 'Same', 'Cannot tell'], correctAnswer: '2/3', hints: ['More parts', '2/3']}
                ],
                activity: { type: 'interactive-practice', description: 'Fraction comparison', instruction: 'Compare fractions using <, >, ='}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.3.NF.2 - Fractions on number line',
                content: '<h3>Fractions on the Number Line</h3><p>Number lines help us see where fractions are located! On a number line from 0 to 1, we can divide the space into equal parts. If we split it into 4 equal parts, each part represents 1/4. Starting at 0 and moving right, we count: 1/4, 2/4, 3/4, 4/4 (which equals 1). Notice that 2/4 is in the middle, same as 1/2! The number line shows that fractions are numbers too, not just pieces of pie. We can place any fraction on a number line by dividing the space into the right number of equal parts. This visual helps us understand fraction size and equivalence!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Where is 1/2 on a number line from 0 to 1?', options: ['At the beginning', 'In the middle', 'At the end', 'Not on it'], correctAnswer: 'In the middle', hints: ['Halfway', 'Middle']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does 4/4 equal?', options: ['0', '1/2', '1', '4'], correctAnswer: '1', hints: ['Whole', 'One']},
                  { id: 'q3', type: 'multiple-choice', question: 'If a number line is divided into 6 equal parts, each part represents?', options: ['1/6', '6/1', '1', '6'], correctAnswer: '1/6', hints: ['One of six', '1/6']},
                  { id: 'q4', type: 'multiple-choice', question: 'Is 3/3 the same as 1?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Whole', 'Yes']},
                  { id: 'q5', type: 'multiple-choice', question: 'Where is 3/4 on a number line from 0 to 1?', options: ['Beginning', 'Near beginning', 'Near end', 'At end'], correctAnswer: 'Near end', hints: ['Three quarters', 'Near end']},
                  { id: 'q6', type: 'multiple-choice', question: 'What comes after 2/5 on a number line divided into fifths?', options: ['1/5', '3/5', '4/5', '5/5'], correctAnswer: '3/5', hints: ['Next fifth', '3/5']},
                  { id: 'q7', type: 'multiple-choice', question: 'Is 2/4 the same as 1/2?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Equivalent', 'Yes']},
                  { id: 'q8', type: 'multiple-choice', question: 'Where is 0/3 on a number line?', options: ['At 0', 'At 1/2', 'At 1', 'Not on it'], correctAnswer: 'At 0', hints: ['Zero parts', 'At zero']}
                ],
                activity: { type: 'interactive-practice', description: 'Number line fractions', instruction: 'Place fractions on number lines'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-3rd-1',
            title: 'Reading Comprehension and Analysis',
            description: 'Analyze literature and informational texts, identify key details, determine main ideas, and make inferences. Students will ask and answer questions using text evidence, distinguish their point of view from the author\'s, and compare themes across texts. These analytical skills deepen comprehension and critical thinking.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.3.1 - Use text evidence',
                content: '<h3>Finding Text Evidence</h3><p>Good readers support their answers with evidence from the text! When answering questions about a story, don\'t just guess or use only your opinion - point to specific words, sentences, or paragraphs that prove your answer. Text evidence can be explicit (directly stated) or implicit (you have to infer from clues). When writing about reading, cite the text by using quotation marks around exact words from the book. You might say, "The author states..." or "In the text it says..." Using text evidence makes your answers stronger and more convincing. It shows you truly understand what you read!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is text evidence?', options: ['Your opinion', 'Proof from the text', 'A guess', 'The title'], correctAnswer: 'Proof from the text', hints: ['Support from book', 'Proof']},
                  { id: 'q2', type: 'multiple-choice', question: 'What are quotation marks used for?', options: ['Any words', 'Exact words from text', 'Your ideas', 'Titles'], correctAnswer: 'Exact words from text', hints: ['Direct quotes', 'Exact words']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is explicit evidence?', options: ['Hidden clues', 'Directly stated', 'Your guess', 'Not in text'], correctAnswer: 'Directly stated', hints: ['Clearly stated', 'Direct']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is implicit evidence?', options: ['Directly stated', 'You infer from clues', 'Not in text', 'The title'], correctAnswer: 'You infer from clues', hints: ['Read between lines', 'Inferred']},
                  { id: 'q5', type: 'multiple-choice', question: 'Why use text evidence?', options: ['Not important', 'Makes answers stronger', 'Wastes time', 'Confusing'], correctAnswer: 'Makes answers stronger', hints: ['Proves answer', 'Stronger']},
                  { id: 'q6', type: 'multiple-choice', question: 'When should you cite the text?', options: ['Never', 'When answering about it', 'Only sometimes', 'Only in science'], correctAnswer: 'When answering about it', hints: ['Support answers', 'Always']},
                  { id: 'q7', type: 'multiple-choice', question: 'What phrase introduces text evidence?', options: ['"I think"', '"The text states"', '"Maybe"', '"I wonder"'], correctAnswer: '"The text states"', hints: ['Citing text', '"The text states"']},
                  { id: 'q8', type: 'multiple-choice', question: 'Can text evidence be from different parts of the text?', options: ['Yes', 'No', 'Never', 'Only one spot'], correctAnswer: 'Yes', hints: ['Throughout text', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Evidence practice', instruction: 'Find and cite text evidence'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.3.2 - Determine central message',
                content: '<h3>Finding the Central Message</h3><p>The central message, or theme, is the important lesson or big idea in a story. It\'s what the author wants you to learn or think about. Unlike the topic (what the story is about), the message is what the story means. For example, a story about a race might have the message "Don\'t give up, even when things are hard." To find it, think about what the characters learned, how they changed, and what the story teaches. The message usually applies to real life - it\'s something you can use in your own experiences. Many stories have universal themes like friendship, honesty, or courage.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the central message?', options: ['The title', 'The main lesson', 'A character', 'The setting'], correctAnswer: 'The main lesson', hints: ['Big idea', 'Lesson']},
                  { id: 'q2', type: 'multiple-choice', question: 'How is theme different from topic?', options: ['No difference', 'Theme is the meaning', 'Topic is meaning', 'Same thing'], correctAnswer: 'Theme is the meaning', hints: ['Message vs subject', 'Theme = meaning']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where can you find clues about the message?', options: ['Only title', 'What characters learned', 'Only pictures', 'Author name'], correctAnswer: 'What characters learned', hints: ['Character growth', 'What learned']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a universal theme?', options: ['Tuesday', 'Blue', 'Courage', 'Three'], correctAnswer: 'Courage', hints: ['Applies to everyone', 'Courage']},
                  { id: 'q5', type: 'multiple-choice', question: 'Does the central message apply to real life?', options: ['Yes', 'No', 'Never', 'Sometimes'], correctAnswer: 'Yes', hints: ['Universal lesson', 'Yes']},
                  { id: 'q6', type: 'multiple-choice', question: 'To find the message, think about:', options: ['Page numbers', 'How characters changed', 'Font size', 'Chapter titles'], correctAnswer: 'How characters changed', hints: ['Character growth', 'Changes']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which is a theme?', options: ['A dog', 'Green', 'Friendship matters', 'School'], correctAnswer: 'Friendship matters', hints: ['Life lesson', 'Friendship']},
                  { id: 'q8', type: 'multiple-choice', question: 'Can one story have multiple themes?', options: ['Yes', 'No', 'Never', 'Not possible'], correctAnswer: 'Yes', hints: ['Multiple messages', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Theme identification', instruction: 'Identify central messages'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RI.3.2 - Main idea and details',
                content: '<h3>Main Idea and Supporting Details</h3><p>In informational text, the main idea is the most important point the author makes. It\'s what the whole text is about. Supporting details are facts, examples, or explanations that tell more about the main idea. The main idea is like an umbrella - it covers all the details underneath. To find the main idea, ask "What is this mostly about?" Details answer questions like who, what, when, where, why, and how. A strong reader can separate main ideas from details and use details to support their understanding of the main idea.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the main idea?', options: ['A small detail', 'The most important point', 'The first sentence', 'The last word'], correctAnswer: 'The most important point', hints: ['Biggest point', 'Most important']},
                  { id: 'q2', type: 'multiple-choice', question: 'What are supporting details?', options: ['The main idea', 'Facts that explain main idea', 'The title', 'Pictures'], correctAnswer: 'Facts that explain main idea', hints: ['Support main idea', 'Facts']},
                  { id: 'q3', type: 'multiple-choice', question: 'To find main idea, ask:', options: ['"What color?"', '"What is this mostly about?"', '"How long?"', '"Who wrote it?"'], correctAnswer: '"What is this mostly about?"', hints: ['Big picture', 'Mostly about']},
                  { id: 'q4', type: 'multiple-choice', question: 'The main idea is like:', options: ['A leaf', 'An umbrella covering details', 'A pencil', 'A shoe'], correctAnswer: 'An umbrella covering details', hints: ['Covers details', 'Umbrella']},
                  { id: 'q5', type: 'multiple-choice', question: 'What do details answer?', options: ['Nothing', 'Who, what, when, where, why, how', 'Only math', 'Colors'], correctAnswer: 'Who, what, when, where, why, how', hints: ['Question words', '5 Ws and H']},
                  { id: 'q6', type: 'multiple-choice', question: 'Where is main idea often found?', options: ['In trash', 'Beginning or end', 'Never stated', 'Pictures only'], correctAnswer: 'Beginning or end', hints: ['Common locations', 'Start or finish']},
                  { id: 'q7', type: 'multiple-choice', question: 'Are all details equally important?', options: ['Yes', 'No, some are more important', 'All same', 'No details matter'], correctAnswer: 'No, some are more important', hints: ['Some key, some minor', 'Different importance']},
                  { id: 'q8', type: 'multiple-choice', question: 'What supports the main idea?', options: ['Nothing', 'Details and examples', 'Only opinions', 'Guesses'], correctAnswer: 'Details and examples', hints: ['Evidence', 'Details']}
                ],
                activity: { type: 'interactive-practice', description: 'Main idea practice', instruction: 'Identify main ideas and details'}
              }
            ]
          },
          {
            id: 'ela-3rd-2',
            title: 'Writing and Language',
            description: 'Write narratives, informative texts, and opinion pieces with clear organization and supporting details. Students will use correct grammar, including subject-verb agreement, pronouns, and complex sentences. They will also expand vocabulary and use context clues to determine word meanings. Strong writing and language skills support effective communication.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.W.3.1 - Opinion writing',
                content: '<h3>Writing Strong Opinion Pieces</h3><p>Let\'s write convincing opinions! An opinion piece states what you believe and gives reasons with evidence. Start with a clear opinion statement in your introduction. Then write body paragraphs with different reasons supporting your opinion. Each reason needs evidence - facts, examples, or expert opinions that prove your point. Use linking words like "because," "therefore," "for example," and "in addition" to connect your ideas. Address counterarguments by explaining why someone might disagree, then showing why your opinion is still stronger. End with a conclusion that restates your opinion and summarizes your best reasons. Persuasive writing is powerful!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What should an opinion piece start with?', options: ['A question', 'Clear opinion statement', 'A story', 'Nothing'], correctAnswer: 'Clear opinion statement', hints: ['State opinion', 'Opinion statement']},
                  { id: 'q2', type: 'multiple-choice', question: 'What supports your reasons?', options: ['Nothing', 'Evidence and examples', 'More opinions', 'Guesses'], correctAnswer: 'Evidence and examples', hints: ['Proof', 'Evidence']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which word connects ideas?', options: ['Color', 'Because', 'Happy', 'Fast'], correctAnswer: 'Because', hints: ['Linking word', 'Because']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is a counterargument?', options: ['Your opinion', 'Opposite viewpoint', 'A fact', 'Your reason'], correctAnswer: 'Opposite viewpoint', hints: ['Other side', 'Opposite view']},
                  { id: 'q5', type: 'multiple-choice', question: 'What should the conclusion do?', options: ['Introduce new ideas', 'Restate opinion', 'Ask questions', 'Give up'], correctAnswer: 'Restate opinion', hints: ['Wrap up', 'Restate']},
                  { id: 'q6', type: 'multiple-choice', question: 'How many reasons should you give?', options: ['Zero', 'At least two or three', 'One', 'One hundred'], correctAnswer: 'At least two or three', hints: ['Multiple reasons', 'Several']},
                  { id: 'q7', type: 'multiple-choice', question: 'What type of evidence is strongest?', options: ['Opinions', 'Facts and expert opinions', 'Guesses', 'Nothing'], correctAnswer: 'Facts and expert opinions', hints: ['Reliable sources', 'Facts']},
                  { id: 'q8', type: 'multiple-choice', question: 'Why address counterarguments?', options: ['Not needed', 'Makes argument stronger', 'Wastes space', 'Confuses reader'], correctAnswer: 'Makes argument stronger', hints: ['Shows both sides', 'Stronger']}
                ],
                activity: { type: 'interactive-practice', description: 'Opinion writing', instruction: 'Write persuasive essays'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.3.1 - Grammar and conventions',
                content: '<h3>Mastering Grammar</h3><p>Let\'s improve our grammar! Subjects and verbs must agree in number. If the subject is singular (one), use a singular verb: "She walks." If the subject is plural (more than one), use a plural verb: "They walk." Pronouns replace nouns and must match in number and gender. Use "he," "she," or "it" for one person or thing, and "they" for more than one. Form possessives correctly: add apostrophe-s for singular (dog\'s) or just apostrophe for plural (dogs\'). Use commas in addresses, dates, and to separate items in a list. Create complex sentences by combining simple sentences with conjunctions like "because," "although," or "while." Good grammar makes writing clear!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is correct?', options: ['She walk', 'She walks', 'They walks', 'She are walk'], correctAnswer: 'She walks', hints: ['Singular subject', 'She walks']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is correct?', options: ['They runs', 'They run', 'They is run', 'They runs'], correctAnswer: 'They run', hints: ['Plural subject', 'They run']},
                  { id: 'q3', type: 'multiple-choice', question: 'What pronoun replaces "the dogs"?', options: ['He', 'She', 'It', 'They'], correctAnswer: 'They', hints: ['Plural', 'They']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which shows singular possessive?', options: ['dogs\'', 'dog\'s', 'dogs', 'dog'], correctAnswer: 'dog\'s', hints: ['One dog owns', 'dog\'s']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which is a complex sentence?', options: ['"I ran."', '"I ran because I was late."', '"I ran and jumped."', '"I ran fast."'], correctAnswer: '"I ran because I was late."', hints: ['Has conjunction', 'Because']},
                  { id: 'q6', type: 'multiple-choice', question: 'Where do commas go in a list?', options: ['No commas', 'Between items', 'At beginning', 'At end'], correctAnswer: 'Between items', hints: ['Separate items', 'Between']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which shows plural possessive?', options: ['dog\'s', 'dogs\'', 'dog', 'dogs'], correctAnswer: 'dogs\'', hints: ['Many dogs own', 'dogs\'']},
                  { id: 'q8', type: 'multiple-choice', question: 'What connects clauses in complex sentences?', options: ['Periods', 'Conjunctions', 'Commas only', 'Nothing'], correctAnswer: 'Conjunctions', hints: ['Connecting words', 'Conjunctions']}
                ],
                activity: { type: 'interactive-practice', description: 'Grammar practice', instruction: 'Use correct grammar'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.L.3.4 - Vocabulary and context clues',
                content: '<h3>Building Vocabulary</h3><p>Let\'s expand our vocabulary! When you encounter an unknown word, use context clues - hints in the surrounding text. Definition clues directly state the meaning: "The enormous, or very large, elephant..." Example clues give examples: "Reptiles, such as snakes and lizards..." Synonym clues use a similar word: "The child was elated, or happy." Antonym clues use an opposite word: "Unlike her quiet sister, Maria was loud." Also, break words into parts: prefix (beginning), root (middle), and suffix (ending). Knowing that "un-" means "not" helps you figure out "unhappy" means "not happy." Dictionary skills are important too!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are context clues?', options: ['The answers', 'Hints in surrounding text', 'Pictures only', 'Nothing'], correctAnswer: 'Hints in surrounding text', hints: ['Text hints', 'Surrounding text']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a prefix?', options: ['End of word', 'Beginning of word', 'Middle', 'Whole word'], correctAnswer: 'Beginning of word', hints: ['Word beginning', 'Beginning']},
                  { id: 'q3', type: 'multiple-choice', question: 'What does "un-" mean?', options: ['Very', 'Not', 'Again', 'Before'], correctAnswer: 'Not', hints: ['Opposite', 'Not']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is a suffix?', options: ['Beginning', 'End of word', 'Middle', 'First letter'], correctAnswer: 'End of word', hints: ['Word ending', 'End']},
                  { id: 'q5', type: 'multiple-choice', question: 'In "The frigid, or freezing, water," what is frigid?', options: ['Hot', 'Cold', 'Wet', 'Deep'], correctAnswer: 'Cold', hints: ['Definition clue', 'Cold']},
                  { id: 'q6', type: 'multiple-choice', question: 'What does "re-" often mean?', options: ['Not', 'Again', 'Before', 'After'], correctAnswer: 'Again', hints: ['Repeat', 'Again']},
                  { id: 'q7', type: 'multiple-choice', question: 'In "Unlike the tiny mouse, the elephant was huge," what is huge?', options: ['Small', 'Large', 'Fast', 'Slow'], correctAnswer: 'Large', hints: ['Opposite of tiny', 'Large']},
                  { id: 'q8', type: 'multiple-choice', question: 'What tool defines words?', options: ['Ruler', 'Dictionary', 'Calculator', 'Compass'], correctAnswer: 'Dictionary', hints: ['Word reference', 'Dictionary']}
                ],
                activity: { type: 'interactive-practice', description: 'Vocabulary practice', instruction: 'Use context clues and word parts'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-3rd-1',
            title: 'Inheritance and Life Cycles',
            description: 'Understand that organisms inherit traits from their parents. Students will analyze the life cycles of plants and animals and identify how certain traits help organisms survive in specific environments.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.3.1 - Inheritance and Traits',
                content: '<h3>Inherited Traits and Survival</h3><p>**Inheritance** is when offspring receive characteristics (**traits**) from their parents. These traits, like eye color, fur color, or a plant\'s height, can help an organism survive. A **variation** in traits (different colors or sizes) helps a species survive when the environment changes. An **adaptation** is a trait that helps an organism survive in its specific environment.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Where do baby animals get their physical traits from?', options: ['Their neighbors', 'Their parents', 'The food they eat', 'The weather'], correctAnswer: 'Their parents', hints: ['Passed down genetically', 'Parents']},
                  { id: 'q2', type: 'multiple-choice', question: 'A plant has thick waxy leaves. This is an **adaptation** for which environment?', options: ['Wet rainforest', 'Cold snowy area', 'Dry desert', 'Shallow pond'], correctAnswer: 'Dry desert', hints: ['Waxy leaves hold water in dry places', 'Desert']},
                  { id: 'q3', type: 'multiple-choice', question: 'The passing of traits from parent to offspring is called:', options: ['Adaptation', 'Reproduction', 'Inheritance', 'Metamorphosis'], correctAnswer: 'Inheritance', hints: ['Receiving characteristics', 'Inheritance']}
                ],
                activity: { type: 'trait-comparison-chart', description: 'Compare a picture of a baby animal to its parent, listing three shared traits.', instruction: 'Explain how camouflage is an important adaptation for a rabbit.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.3.2 - Life Cycles',
                content: '<h3>Life Cycles of Plants and Animals</h3><p>Every living thing goes through a **life cycle**, a sequence of growth and reproduction. Plants start as a **seed**, grow into a plant, produce **flowers** (for reproduction), and then new seeds. Animals go through stages too. **Metamorphosis** is a dramatic change in form (e.g., a caterpillar changing to a butterfly). Understanding life cycles helps us track population growth.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the change in form from a caterpillar to a butterfly called?', options: ['Adaptation', 'Inheritance', 'Metamorphosis', 'Photosynthesis'], correctAnswer: 'Metamorphosis', hints: ['Dramatic change in form', 'Metamorphosis']},
                  { id: 'q2', type: 'multiple-choice', question: 'The stage of a plant\'s life cycle that creates new seeds is the:', options: ['Root', 'Stem', 'Leaf', 'Flower'], correctAnswer: 'Flower', hints: ['Reproductive part', 'Flower']},
                  { id: 'q3', type: 'multiple-choice', question: 'The sequence of growth and reproduction of an organism is its:', options: ['Life path', 'Life cycle', 'Habitat', 'Trait'], correctAnswer: 'Life cycle', hints: ['Stages of life', 'Life cycle']}
                ],
                activity: { type: 'life-cycle-diagram', description: 'Draw and label the life cycle of a frog or a flowering plant.', instruction: 'Compare the plant life cycle to the human life cycle (birth, growth, reproduction).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.3.3 - Environmental Impact on Traits',
                content: '<h3>Environment Shapes Traits</h3><p>The environment can influence how an organism\'s inherited traits are expressed. For example, a plant may have genes for being tall, but if it doesn\'t get enough sunlight or water (environmental factors), it will be short. Similarly, a person\'s height is influenced by their **diet** and **health** (environmental factors) as well as their genes. This shows the interaction between **nature (genes)** and **nurture (environment)**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is an **environmental** factor that influences a plant\'s growth?', options: ['The color of its parent', 'The amount of sunlight it receives', 'The shape of its leaves', 'The number of petals'], correctAnswer: 'The amount of sunlight it receives', hints: ['External factor', 'Sunlight']},
                  { id: 'q2', type: 'multiple-choice', question: 'A person\'s potential height is inherited, but what can limit their actual height (nurture)?', options: ['The time of day', 'Poor diet and health', 'Their eye color', 'Their shoe size'], correctAnswer: 'Poor diet and health', hints: ['Lack of nutrients or care', 'Poor diet']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the term for the traits passed down genetically?', options: ['Nurture', 'Nature', 'Environment', 'Habitat'], correctAnswer: 'Nature', hints: ['Innate, genetic traits', 'Nature']}
                ],
                activity: { type: 'environmental-variable-test', description: 'Research how a lack of water affects the growth of a bean plant.', instruction: 'Explain why keeping a dog inside changes its coat length (an environmental effect).' }
              }
            ]
          },
          {
            id: 'science-3rd-2',
            title: 'Force, Energy, and Magnets',
            description: 'Explore the relationship between forces (pushes and pulls) and motion. Investigate magnetic forces and the transfer of energy (heat and light).',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.3.4 - Force and Motion',
                content: '<h3>Force, Motion, and Friction</h3><p>A **force** is a push or a pull, and it changes an object\'s motion. **Motion** is the change in an object\'s position. **Friction** is a force that works against motion when two objects rub together (e.g., a ball slowing down on the grass). Rough surfaces create more friction than smooth surfaces. We need force to start motion and friction to stop it!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What force slows a ball down as it rolls across the grass?', options: ['Gravity', 'Magnetism', 'Friction', 'Sound'], correctAnswer: 'Friction', hints: ['Resistance to motion', 'Friction']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which surface creates the most friction?', options: ['Smooth ice', 'Polished wood', 'Rough sandpaper', 'Wet glass'], correctAnswer: 'Rough sandpaper', hints: ['Roughness increases friction', 'Rough sandpaper']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the change in an object\'s position called?', options: ['Force', 'Mass', 'Motion', 'Energy'], correctAnswer: 'Motion', hints: ['Movement', 'Motion']}
                ],
                activity: { type: 'friction-test', description: 'Roll a toy car over three different surfaces (tile, carpet, sandpaper) and measure the distance traveled.', instruction: 'Identify which surface created the most friction and why.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.3.5 - Magnetic Force',
                content: '<h3>The Power of Magnets</h3><p>**Magnetism** is an invisible force that attracts (pulls) or repels (pushes away) certain materials, primarily iron and steel. All magnets have two ends called **poles** (**North and South**). Opposite poles attract, and like poles repel. Magnets are used in everything from refrigerators to speakers to computers. The magnetic force works even without touching the object.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What happens when the North Pole of one magnet is placed near the South Pole of another?', options: ['They repel (push away)', 'They attract (pull together)', 'Nothing happens', 'They turn to iron'], correctAnswer: 'They attract (pull together)', hints: ['Opposites attract', 'Attract']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which material is strongly attracted to a magnet?', options: ['Wood', 'Plastic', 'Iron (Steel)', 'Glass'], correctAnswer: 'Iron (Steel)', hints: ['Ferromagnetic material', 'Iron (Steel)']},
                  { id: 'q3', type: 'multiple-choice', question: 'The force of magnetism can be felt:', options: ['Only by touching the objects', 'Only through wood', 'Even without touching the objects', 'Only in water'], correctAnswer: 'Even without touching the objects', hints: ['Action at a distance', 'Without touching']}
                ],
                activity: { type: 'magnetic-sort', description: 'Test various classroom objects to see which materials are magnetic.', instruction: 'Demonstrate how two magnets can be used to repel one another.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.3.6 - Energy Transfer (Heat and Light)',
                content: '<h3>Heating and Cooling</h3><p>**Heat energy** (thermal energy) always moves from warmer objects to cooler objects. When you touch a cold metal doorknob, heat moves from your warm hand to the cold knob. **Insulators** (like cloth or plastic) slow down the movement of heat. **Conductors** (like metal) allow heat to move quickly. Understanding this helps us choose the right materials for warming our homes or cooking food.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Heat energy always moves from:', options: ['Cold to warm', 'Cooler to warmer', 'Warmer to cooler', 'Side to side'], correctAnswer: 'Warmer to cooler', hints: ['Direction of heat flow', 'Warmer to cooler']},
                  { id: 'q2', type: 'multiple-choice', question: 'A material that slows down the transfer of heat is an:', options: ['Conductor', 'Insulator', 'Magnet', 'Metal'], correctAnswer: 'Insulator', hints: ['Used to keep things warm or cool', 'Insulator']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why does a metal spoon quickly get hot when left in soup?', options: ['It is a good insulator', 'It is a good conductor', 'It reflects the heat', 'It has low mass'], correctAnswer: 'It is a good conductor', hints: ['Allows heat to pass easily', 'Conductor']}
                ],
                activity: { type: 'insulator-test', description: 'Wrap three hot cups (one in paper, one in foil, one left uncovered). Check the temperature after 10 minutes.', instruction: 'Identify which material was the best insulator.' }
              }
            ]
          },
          {
            id: 'science-3rd-3',
            title: 'Weather and Climate',
            description: 'Understand the difference between weather and climate. Investigate simple methods of weather forecasting and describe the basic components of the water cycle.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.3.7 - Weather vs. Climate',
                content: '<h3>Weather and Climate</h3><p>**Weather** is what the atmosphere is doing right now or today (e.g., sunny, raining, windy). **Climate** is the typical weather pattern of a region over a very long time (e.g., Mississippi has a hot, humid climate). Climate affects the plants and animals that can live in an area. We plan our day based on the weather, but we plan our lifestyle based on the climate.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which describes the **weather**?', options: ['Mississippi is generally hot', 'It is snowing outside right now', 'The desert is dry', 'The North Pole is cold'], correctAnswer: 'It is snowing outside right now', hints: ['A short-term event', 'Right now']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which describes the **climate**?', options: ['It will rain tomorrow', 'It is very cold this winter', 'The Sahara Desert is hot and dry every year', 'It is windy today'], correctAnswer: 'The Sahara Desert is hot and dry every year', hints: ['Long-term pattern', 'Long-term pattern']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the difference between weather and climate?', options: ['They are the same', 'Climate is short-term, weather is long-term', 'Weather is short-term, climate is long-term', 'Weather is in the past, climate is now'], correctAnswer: 'Weather is short-term, climate is long-term', hints: ['Time scale difference', 'Time scale']}
                ],
                activity: { type: 'weather-log', description: 'Track the daily weather (temperature, rain) for two weeks and compare it to the expected climate of the region.', instruction: 'Identify one clothing item suitable for the region\'s climate.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.3.8 - Water Cycle Review',
                content: '<h3>The Water Cycle</h3><p>The **water cycle** is the process that moves water around Earth. Water **evaporates** (turns to gas/vapor) from lakes and oceans. The vapor cools and undergoes **condensation** (forms clouds). When the clouds get heavy, water falls back as **precipitation** (rain, snow, hail). This cycle cleans and redistributes water essential for all living things.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is it called when water vapor cools and forms clouds?', options: ['Evaporation', 'Precipitation', 'Condensation', 'Friction'], correctAnswer: 'Condensation', hints: ['Gas turning back to liquid', 'Condensation']},
                  { id: 'q2', type: 'multiple-choice', question: 'Rain, snow, and hail are all forms of:', options: ['Evaporation', 'Condensation', 'Precipitation', 'Transpiration'], correctAnswer: 'Precipitation', hints: ['Water falling from the sky', 'Precipitation']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where does water **evaporate** from?', options: ['Only the clouds', 'Oceans, lakes, and rivers', 'Only the mountains', 'Only the air'], correctAnswer: 'Oceans, lakes, and rivers', hints: ['Liquid surface turns to vapor', 'Oceans, lakes, rivers']}
                ],
                activity: { type: 'water-cycle-terrarium', description: 'Create a small sealed terrarium to observe condensation and precipitation in a closed system.', instruction: 'Explain where the water droplets on the inside of the jar come from.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.3.9 - Simple Weather Forecasting',
                content: '<h3>Predicting the Weather</h3><p>We use tools to help us **forecast** (predict) the weather. A **thermometer** measures temperature. A **barometer** measures air pressure. Scientists, called meteorologists, use computer models and data from weather balloons to make their predictions. Simple signs, like dark clouds or strong winds, can also help us predict rain or storms.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who is a scientist who studies and predicts the weather?', options: ['Geologist', 'Biologist', 'Meteorologist', 'Historian'], correctAnswer: 'Meteorologist', hints: ['Weather expert', 'Meteorologist']},
                  { id: 'q2', type: 'multiple-choice', question: 'What tool measures air pressure, which helps predict storms?', options: ['Thermometer', 'Barometer', 'Ruler', 'Clock'], correctAnswer: 'Barometer', hints: ['Measures atmospheric pressure', 'Barometer']},
                  { id: 'q3', type: 'multiple-choice', question: 'If the air pressure is dropping quickly, the weather is most likely to:', options: ['Stay clear', 'Become stormy', 'Get very sunny', 'Stay the same'], correctAnswer: 'Become stormy', hints: ['Low pressure often means bad weather', 'Become stormy']}
                ],
                activity: { type: 'forecast-challenge', description: 'Use a thermometer and simple cloud observations to make a short-term weather prediction for the next day.', instruction: 'Explain why a sunny morning does not guarantee a sunny afternoon.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-3rd-1',
            title: 'World Geography and Culture',
            description: 'Explore the seven continents and four oceans, identifying their relative locations. Compare and contrast different cultures and traditions around the world. Understand how geography affects human settlement.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.3.1 - Continents and Oceans',
                content: '<h3>Mapping the World</h3><p>The Earth is mostly covered in water, separated by large landmasses. The large landmasses are called **continents** (North America, South America, Europe, Asia, Africa, Australia, Antarctica). The large bodies of salt water are called **oceans** (Pacific, Atlantic, Indian, Arctic). Understanding world geography helps us understand different cultures.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'How many continents are there on Earth?', options: ['5', '7', '10', '4'], correctAnswer: '7', hints: ['The major landmasses', 'Seven']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which ocean is the largest?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 'Pacific', hints: ['Covers the largest area', 'Pacific Ocean']},
                  { id: 'q3', type: 'multiple-choice', question: 'The United States is located on which continent?', options: ['Europe', 'Asia', 'Africa', 'North America'], correctAnswer: 'North America', hints: ['Where the USA is found', 'North America']}
                ],
                activity: { type: 'world-map-labeling', description: 'Label the seven continents and four oceans on a world map outline.', instruction: 'Name a country located on the continent of Asia.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.3.2 - Culture and Tradition',
                content: '<h3>Understanding Culture</h3><p>**Culture** includes the traditions, language, food, music, and beliefs of a group of people. Culture is learned and passed down from one generation to the next. For example, people in Japan often eat with chopsticks, while people in the U.S. use a fork. Learning about different cultures helps us appreciate human diversity and communicate better with others.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is **culture**?', options: ['The weather in a place', 'The shared traditions and beliefs of a group', 'The type of government', 'The number of people in a city'], correctAnswer: 'The shared traditions and beliefs of a group', hints: ['Shared way of life', 'Traditions and beliefs']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which country\'s culture traditionally uses chopsticks for eating?', options: ['Germany', 'Brazil', 'Japan', 'Canada'], correctAnswer: 'Japan', hints: ['East Asian tradition', 'Japan']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the main way culture is passed down?', options: ['Through the government', 'Through books only', 'From parents to children', 'Through the weather'], correctAnswer: 'From parents to children', hints: ['Hereditary learning', 'Parents to children']}
                ],
                activity: { type: 'cultural-comparison', description: 'Research and compare the traditional clothing or a common holiday tradition of two different world cultures.', instruction: 'Describe one tradition your family practices that you learned from a parent.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.3.3 - Geography and Settlement',
                content: '<h3>How Place Affects People</h3><p>**Geography** (land, water, climate) often influences where people choose to **settle**. People tend to settle near **rivers** or **coastlines** for water, fishing, and trade. They avoid areas that are too cold (Arctic) or too dry (deep desert). Where people settle impacts their jobs, their food, and their way of life.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Why did early people often settle near rivers?', options: ['For the view', 'For transportation, drinking water, and farming', 'To avoid trade', 'Because the land was flat'], correctAnswer: 'For transportation, drinking water, and farming', hints: ['Essential resources and travel', 'Water and trade']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which area would be the most difficult for a large group of people to settle?', options: ['A warm coastal area', 'A flat river valley', 'A dry, remote desert', 'A mild forest'], correctAnswer: 'A dry, remote desert', hints: ['Lack of essential resources', 'Dry desert']},
                  { id: 'q3', type: 'multiple-choice', question: 'The type of food a culture eats is often determined by the local:', options: ['Language', 'Government', 'Geography', 'Art'], correctAnswer: 'Geography', hints: ['What can be grown or hunted locally', 'Geography']}
                ],
                activity: { type: 'settlement-analysis', description: 'Analyze a map showing a river, a mountain, and a dense forest. Predict where people would build a large town and explain why.', instruction: 'Explain why people near the ocean eat more fish.' }
              }
            ]
          },
          {
            id: 'ss-3rd-2',
            title: 'Basic Government and Civics',
            description: 'Understand the purpose of government and different political structures. Explore how communities make and enforce rules.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.3.4 - Purpose of Government',
                content: '<h3>Why We Need Government</h3><p>A **government** is a system of rule that manages a community, state, or country. The main purposes of government are to **make laws** (rules), **provide services** (like schools and police), and **protect citizens** (national defense). Without government, communities would be disorganized and unsafe. Citizens agree to follow the laws for the benefit of all.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the main purpose of government laws?', options: ['To confuse people', 'To make things expensive', 'To keep order and safety', 'To stop all fun'], correctAnswer: 'To keep order and safety', hints: ['Creates a secure environment', 'Order and safety']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is an example of a service provided by the government?', options: ['Selling cars', 'Running schools and fire departments', 'Making toys', 'Growing food'], correctAnswer: 'Running schools and fire departments', hints: ['Public service', 'Schools and fire']},
                  { id: 'q3', type: 'multiple-choice', question: 'What must citizens do for the government to work?', options: ['Ignore the laws', 'Follow the laws', 'Complain loudly', 'Move away'], correctAnswer: 'Follow the laws', hints: ['Citizen duty', 'Follow laws']}
                ],
                activity: { type: 'community-service-chart', description: 'List three services provided by the local government (e.g., police, park maintenance, schools).', instruction: 'Explain why the government must provide police protection.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.3.5 - Different Political Structures',
                content: '<h3>Rule by One, Few, or Many</h3><p>There are different types of government. In a **monarchy** or **dictatorship**, one person or a very small group holds all the power. In a **democracy** (like the U.S.), the power belongs to the **citizens**, who elect their leaders. Democracy relies on voting, freedom of speech, and citizen participation. The power in a democracy comes from the people.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In a **democracy**, who holds the power?', options: ['Only the king', 'One dictator', 'The citizens', 'The military'], correctAnswer: 'The citizens', hints: ['Rule by the people', 'Citizens']},
                  { id: 'q2', type: 'multiple-choice', question: 'In a **monarchy**, who is the leader?', options: ['The President', 'A King or Queen', 'The elected people', 'The voters'], correctAnswer: 'A King or Queen', hints: ['Hereditary rule', 'King or Queen']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is essential for a democracy to work?', options: ['No freedom of speech', 'Citizen voting and participation', 'A single, all-powerful leader', 'Secret rules'], correctAnswer: 'Citizen voting and participation', hints: ['People must participate', 'Voting and participation']}
                ],
                activity: { type: 'government-comparison-chart', description: 'Create a T-chart comparing Democracy (citizens vote) and Monarchy (King rules).', instruction: 'Explain why the U.S. is not a monarchy.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.3.6 - Making and Enforcing Laws',
                content: '<h3>From Rule to Law</h3><p>Laws are like formal rules for a large community. They are created by the **Legislative Branch** and are enforced by the **Executive Branch** (like the police). Laws apply to everyone equally and help resolve conflicts. When a conflict occurs, the **Judicial Branch** (courts) steps in to determine if a law was broken and what the consequence should be. This system ensures fairness.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which branch **makes** the laws?', options: ['Executive', 'Judicial', 'Legislative', 'Military'], correctAnswer: 'Legislative', hints: ['The elected representatives', 'Legislative']},
                  { id: 'q2', type: 'multiple-choice', question: 'Who enforces the laws in the community?', options: ['Judges', 'Police officers (Executive)', 'Teachers', 'Voters'], correctAnswer: 'Police officers (Executive)', hints: ['Part of the enforcement branch', 'Police officers']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the consequence of breaking a law?', options: ['Nothing', 'A punishment set by the court', 'A reward', 'A new job'], correctAnswer: 'A punishment set by the court', hints: ['Justice system outcome', 'Punishment']}
                ],
                activity: { type: 'law-scenario-analysis', description: 'Analyze a simple scenario (e.g., someone steals a toy) and identify which branch would handle which part (making the law, catching the person, deciding punishment).', instruction: 'Identify the role of the police in the community.' }
              }
            ]
          },
          {
            id: 'ss-3rd-3',
            title: 'Basic Economics: Supply and Demand',
            description: 'Understand the relationship between producers, consumers, and supply and demand. Explore basic concepts of trade and saving.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.3.7 - Supply and Demand',
                content: '<h3>Making the Market Work</h3><p>**Supply** is how much of a product there is to sell. **Demand** is how much people want to buy. If **Demand** is high and **Supply** is low, the price goes **up** (because the product is scarce). If **Supply** is high and **Demand** is low, the price goes **down**. This interaction of supply and demand determines prices in a **market economy**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If everyone wants a new toy (**high demand**) but the store only has a few (**low supply**), the price will likely:', options: ['Go down', 'Stay the same', 'Go up', 'Disappear'], correctAnswer: 'Go up', hints: ['Scarcity increases price', 'Go up']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does **supply** mean?', options: ['How much people want to buy', 'How much of a product there is to sell', 'The price of the item', 'The need for the item'], correctAnswer: 'How much of a product there is to sell', hints: ['The quantity available', 'Quantity to sell']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is **demand**?', options: ['How much a product costs', 'How much people want to buy', 'How fast the product is made', 'How much is stored'], correctAnswer: 'How much people want to buy', hints: ['Consumer desire', 'Want to buy']}
                ],
                activity: { type: 'supply-demand-scenario', description: 'Analyze a scenario: A bad winter kills many orange crops (low supply). Predict what happens to the price of oranges.', instruction: 'Explain why the price of lemonade goes up on a hot summer day.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.3.8 - Trade and Exchange',
                content: '<h3>Trading Goods</h3><p>**Trade** is the voluntary exchange of goods and services. Early trade was **bartering** (trading one item for another). Now, we use **money** as a medium of exchange because it is much easier. Trade happens between individuals, communities, and countries. Trade makes everyone better off because they get what they need and sell what they specialize in.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is it called when you trade one item for another item without using money?', options: ['Selling', 'Bartering', 'Buying', 'Saving'], correctAnswer: 'Bartering', hints: ['Direct exchange', 'Bartering']},
                  { id: 'q2', type: 'multiple-choice', question: 'What makes trade easier than bartering?', options: ['Money', 'Finding a friend', 'A big box', 'Good weather'], correctAnswer: 'Money', hints: ['Universal medium of exchange', 'Money']},
                  { id: 'q3', type: 'multiple-choice', question: 'Trade makes people better off because they get goods that they:', options: ['Already have too much of', 'Don\'t want', 'Need but don\'t make themselves', 'Don\'t like'], correctAnswer: 'Need but don\'t make themselves', hints: ['Benefit of specialization and exchange', 'Need but don\'t make']}
                ],
                activity: { type: 'barter-role-play', description: 'Have students trade two simple items without using money, explaining the value they see in the trade.', instruction: 'Discuss why it would be hard to barter for a new car.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.3.9 - Saving and Spending',
                content: '<h3>Financial Literacy: Save or Spend</h3><p>When you earn money, you have a choice: **spend** it now or **save** it for later. **Spending** means buying something right away. **Saving** means keeping the money to buy something more expensive or use it for the future. People save money in banks. Saving money is a smart financial habit that teaches patience and goal-setting.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Keeping money to buy something bigger later is called:', options: ['Spending', 'Borrowing', 'Earning', 'Saving'], correctAnswer: 'Saving', hints: ['Putting money aside', 'Saving']},
                  { id: 'q2', type: 'multiple-choice', question: 'If you want a new bike that costs $100 but you only have $10, you should:', options: ['Spend the $10', 'Save the $10', 'Borrow the bike', 'Ignore the bike'], correctAnswer: 'Save the $10', hints: ['Working toward a larger goal', 'Save the money']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where is a safe place to keep your saved money?', options: ['Under the bed', 'In a bank', 'In the yard', 'In a shoebox'], correctAnswer: 'In a bank', hints: ['Secure financial institution', 'In a bank']}
                ],
                activity: { type: 'save-spend-scenario', description: 'Analyze a simple savings goal (e.g., a student wants a new toy in one month) and create a plan for saving.', instruction: 'Explain why putting money in a bank is safer than keeping it at home.' }
              }
            ]
          }
        ]
      },
      '4th Grade': {
        'Math': [
          {
            id: 'math-4th-1',
            title: 'Multi-Digit Operations',
            description: 'Master multi-digit multiplication and division using place value understanding and strategies. Students will multiply multi-digit numbers, divide with remainders, solve complex word problems, and develop computational fluency. These skills are essential for higher-level mathematics and real-world problem solving.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.4.NBT.5 - Multi-digit multiplication',
                content: '<h3>Multiplying Larger Numbers</h3><p>Let\'s multiply multi-digit numbers! When multiplying 47 × 3, we use place value. Multiply the ones: 3 × 7 = 21 (write 1, carry 2). Then multiply the tens: 3 × 4 = 12, plus the carried 2 = 14. Answer: 141. For two-digit by two-digit, like 24 × 13, multiply by each digit separately then add. Use the standard algorithm, partial products, or area models. Understanding place value helps you know where to put each product. Check your work by estimating - does your answer make sense?</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 34 × 5?', correctAnswer: '170', hints: ['Use standard algorithm', '170']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 62 × 7?', correctAnswer: '434', hints: ['Multiply ones, then tens', '434']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 18 × 12?', options: ['196', '206', '216', '226'], correctAnswer: '216', hints: ['Break into parts', '216']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 45 × 6?', correctAnswer: '270', hints: ['5×6=30, 4×6=24', '270']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 23 × 14?', correctAnswer: '322', hints: ['Multiply by 4, then 10', '322']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is 56 × 8?', correctAnswer: '448', hints: ['Use algorithm', '448']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 31 × 25?', correctAnswer: '775', hints: ['Two-digit by two-digit', '775']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 72 × 9?', correctAnswer: '648', hints: ['Standard algorithm', '648']}
                ],
                activity: { type: 'interactive-practice', description: 'Multi-digit multiplication', instruction: 'Practice multiplication'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.4.NBT.6 - Multi-digit division',
                content: '<h3>Dividing Larger Numbers</h3><p>Division with multi-digit numbers uses long division. To solve 156 ÷ 12, ask "How many 12s fit in 15?" (1). Write 1 above, multiply 1 × 12 = 12, subtract from 15 to get 3. Bring down the 6 to make 36. Ask "How many 12s in 36?" (3). The answer is 13. Sometimes there\'s a remainder - the amount left over. For 157 ÷ 12, the answer is 13 R1. Check your work by multiplying the quotient by the divisor and adding the remainder!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 84 ÷ 7?', correctAnswer: '12', hints: ['Think: 7 × ? = 84', '12']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 96 ÷ 8?', correctAnswer: '12', hints: ['8 times what?', '12']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 125 ÷ 5?', options: ['20', '25', '30', '35'], correctAnswer: '25', hints: ['5 × 25', '25']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 144 ÷ 12?', correctAnswer: '12', hints: ['12 squared', '12']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 156 ÷ 13?', correctAnswer: '12', hints: ['Long division', '12']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 175 ÷ 7?', options: ['20', '25', '30', '35'], correctAnswer: '25', hints: ['7 × 25', '25']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 157 ÷ 12?', correctAnswer: '13 R1 or 13 remainder 1', hints: ['Has remainder', '13 R1']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 200 ÷ 8?', correctAnswer: '25', hints: ['8 × 25', '25']}
                ],
                activity: { type: 'interactive-practice', description: 'Multi-digit division', instruction: 'Practice division'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.4.OA.3 - Multi-step word problems',
                content: '<h3>Solving Complex Word Problems</h3><p>Real-world problems often require multiple steps! Read carefully and identify what you know and what you need to find. Some problems need two or three operations. For example: "A store has 8 boxes with 12 shirts each. They sell 35 shirts. How many left?" First multiply 8 × 12 = 96 shirts total. Then subtract 96 - 35 = 61 shirts left. Draw diagrams, make tables, or write equations. Check if your answer is reasonable. Does it make sense in the context of the problem?</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'A baker makes 6 trays with 12 cookies each, then sells 18. How many left?', correctAnswer: '54', hints: ['Multiply, then subtract', '54']},
                  { id: 'q2', type: 'multiple-choice', question: 'There are 15 tables with 4 chairs each. 8 chairs break. How many good chairs?', options: ['48', '50', '52', '60'], correctAnswer: '52', hints: ['15×4 - 8', '52']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Tom has 145 cards. He gives 23 to Sue and 17 to Jim. How many left?', correctAnswer: '105', hints: ['Subtract both', '105']},
                  { id: 'q4', type: 'multiple-choice', question: 'A book has 8 chapters with 12 pages each. Mary reads 45 pages. How many left?', options: ['41', '51', '61', '71'], correctAnswer: '51', hints: ['8×12 - 45', '51']},
                  { id: 'q5', type: 'fill-in-blank', question: 'A farm has 7 fields with 24 cows each. 15 cows are sold. How many remain?', correctAnswer: '153', hints: ['7×24 - 15', '153']},
                  { id: 'q6', type: 'fill-in-blank', question: 'Sara buys 4 packs of 6 pens and 3 packs of 8 pens. How many total?', correctAnswer: '48', hints: ['4×6 + 3×8', '48']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A store has 234 items. They sell 87 on Monday and 56 on Tuesday. How many left?', correctAnswer: '91', hints: ['Subtract both sales', '91']},
                  { id: 'q8', type: 'fill-in-blank', question: 'There are 12 rows of 15 chairs. 38 chairs are taken. How many empty?', correctAnswer: '142', hints: ['12×15 - 38', '142']}
                ],
                activity: { type: 'interactive-practice', description: 'Word problems', instruction: 'Solve multi-step problems'}
              }
            ]
          },
          {
            id: 'math-4th-2',
            title: 'Fractions and Decimals',
            description: 'Add and subtract fractions, understand decimal notation, and compare fractions and decimals. Students will work with equivalent fractions, convert between fractions and decimals, and solve real-world problems. This deepens understanding of rational numbers.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.4.NF.3 - Add and subtract fractions',
                content: '<h3>Operations with Fractions</h3><p>To add or subtract fractions, they must have the same denominator (bottom number). With like denominators, add or subtract the numerators and keep the denominator the same: 2/5 + 1/5 = 3/5. If denominators are different, find equivalent fractions with a common denominator first. For example, 1/2 + 1/4: change 1/2 to 2/4, then add 2/4 + 1/4 = 3/4. Sometimes you need to simplify your answer - if you get 4/6, simplify to 2/3. Mixed numbers (like 2 1/3) require converting to improper fractions or adding whole and fraction parts separately.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 2/8 + 3/8?', correctAnswer: '5/8', hints: ['Same denominator', '5/8']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 7/10 - 3/10?', correctAnswer: '4/10 or 2/5', hints: ['Same denominator', '4/10']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 1/2 + 1/4?', options: ['2/6', '2/4', '3/4', '3/6'], correctAnswer: '3/4', hints: ['Convert 1/2 to 2/4', '3/4']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 5/6 - 1/6?', correctAnswer: '4/6 or 2/3', hints: ['Subtract numerators', '4/6']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 3/5 + 1/5?', correctAnswer: '4/5', hints: ['Add numerators', '4/5']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 3/4 - 1/4?', options: ['1/4', '2/4', '3/4', '4/4'], correctAnswer: '2/4', hints: ['Subtract', '2/4 or 1/2']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 1/3 + 1/3?', correctAnswer: '2/3', hints: ['Add numerators', '2/3']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 9/10 - 4/10?', correctAnswer: '5/10 or 1/2', hints: ['Subtract', '5/10']}
                ],
                activity: { type: 'interactive-practice', description: 'Fraction operations', instruction: 'Add and subtract fractions'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.4.NF.6 - Decimal notation',
                content: '<h3>Understanding Decimals</h3><p>Decimals are another way to write fractions! The decimal point separates whole numbers from parts of a whole. The first place after the decimal is tenths: 0.3 = 3/10. The second place is hundredths: 0.25 = 25/100 = 1/4. To compare decimals, line up the decimal points and compare digits from left to right. Adding a zero after the last decimal digit doesn\'t change the value: 0.5 = 0.50. Decimals are used in money, measurements, and many real-world situations!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What fraction is 0.7?', options: ['7/100', '7/10', '1/7', '70/100'], correctAnswer: '7/10', hints: ['Tenths place', '7/10']},
                  { id: 'q2', type: 'multiple-choice', question: 'What decimal is 3/10?', options: ['0.03', '0.3', '3.0', '0.003'], correctAnswer: '0.3', hints: ['Three tenths', '0.3']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What fraction is 0.25?', correctAnswer: '25/100 or 1/4', hints: ['Twenty-five hundredths', '25/100']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is greater: 0.6 or 0.58?', options: ['0.6', '0.58', 'Same', 'Cannot tell'], correctAnswer: '0.6', hints: ['Compare tenths', '0.6']},
                  { id: 'q5', type: 'multiple-choice', question: 'What decimal is 1/2?', options: ['0.2', '0.5', '0.12', '0.21'], correctAnswer: '0.5', hints: ['One half', '0.5']},
                  { id: 'q6', type: 'multiple-choice', question: 'Is 0.5 equal to 0.50?', options: ['Yes', 'No', 'Maybe', 'Never'], correctAnswer: 'Yes', hints: ['Same value', 'Yes']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What decimal is 75/100?', correctAnswer: '0.75', hints: ['Seventy-five hundredths', '0.75']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which is less: 0.4 or 0.39?', options: ['0.4', '0.39', 'Same', 'Cannot tell'], correctAnswer: '0.39', hints: ['Compare hundredths', '0.39']}
                ],
                activity: { type: 'interactive-practice', description: 'Decimal practice', instruction: 'Work with decimals'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-4th-1',
            title: 'Literary Analysis',
            description: 'Analyze themes, characters, and story structure in literature. Students will compare texts, identify figurative language, and make inferences based on textual evidence. These analytical skills promote deeper reading comprehension and critical thinking.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.4.2 - Determine theme',
                content: '<h3>Analyzing Themes</h3><p>Themes are the big ideas that authors want readers to understand. Unlike the topic (what the story is about), the theme is the message or lesson (what it means). Common themes include: perseverance overcomes obstacles, friendship requires effort, honesty is important. To find the theme, consider what the main character learns, how they change, and what the story teaches. Look for repeated ideas or symbols. The theme is usually not directly stated - you have to infer it from the story events. One story can have multiple themes, and different readers might identify different themes!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is theme?', options: ['The topic', 'The message or lesson', 'The character', 'The setting'], correctAnswer: 'The message or lesson', hints: ['Big idea', 'Lesson']},
                  { id: 'q2', type: 'multiple-choice', question: 'How do you find the theme?', options: ['Read title only', 'See what character learns', 'Count pages', 'Look at pictures only'], correctAnswer: 'See what character learns', hints: ['Character growth', 'What learned']},
                  { id: 'q3', type: 'multiple-choice', question: 'Is theme usually directly stated?', options: ['Yes, always', 'No, you infer it', 'Sometimes', 'In the title'], correctAnswer: 'No, you infer it', hints: ['Read between lines', 'Infer']},
                  { id: 'q4', type: 'multiple-choice', question: 'Can one story have multiple themes?', options: ['Yes', 'No', 'Never', 'Only short stories'], correctAnswer: 'Yes', hints: ['Multiple messages', 'Yes']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which is a theme?', options: ['A boy finds treasure', 'School', 'Courage helps overcome fear', 'Tuesday'], correctAnswer: 'Courage helps overcome fear', hints: ['Life lesson', 'Courage']},
                  { id: 'q6', type: 'multiple-choice', question: 'What helps reveal theme?', options: ['Nothing', 'Repeated ideas and symbols', 'Page numbers', 'Font size'], correctAnswer: 'Repeated ideas and symbols', hints: ['Patterns', 'Symbols']},
                  { id: 'q7', type: 'multiple-choice', question: 'Can different readers find different themes?', options: ['Yes', 'No', 'Never', 'Impossible'], correctAnswer: 'Yes', hints: ['Personal interpretation', 'Yes']},
                  { id: 'q8', type: 'multiple-choice', question: 'Theme vs. topic: what\'s the difference?', options: ['No difference', 'Theme is meaning, topic is subject', 'Topic is meaning', 'Same thing'], correctAnswer: 'Theme is meaning, topic is subject', hints: ['Message vs subject', 'Theme = message']}
                ],
                activity: { type: 'interactive-practice', description: 'Theme analysis', instruction: 'Identify and analyze themes'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.4.4 - Figurative language',
                content: '<h3>Understanding Figurative Language</h3><p>Figurative language makes writing more interesting by comparing things in creative ways! A simile compares using "like" or "as": "Her smile was like sunshine." A metaphor compares without "like" or "as": "Her smile was sunshine." Personification gives human qualities to non-human things: "The wind whispered through the trees." Idioms are phrases with meanings different from the literal words: "It\'s raining cats and dogs" means heavy rain, not actual animals falling! Understanding figurative language helps you appreciate beautiful writing and understand the author\'s deeper meaning.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a simile?', options: ['Direct comparison', 'Comparison using like/as', 'Human qualities to things', 'Exaggeration'], correctAnswer: 'Comparison using like/as', hints: ['Uses like or as', 'Simile']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a metaphor?', options: ['Comparison with like/as', 'Direct comparison', 'Rhyming words', 'Question'], correctAnswer: 'Direct comparison', hints: ['Says it IS something', 'Metaphor']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is a simile?', options: ['"He is a lion"', '"He roars like a lion"', '"He lions"', '"He the lion"'], correctAnswer: '"He roars like a lion"', hints: ['Has "like"', 'Like a lion']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is personification?', options: ['"Big tree"', '"Tree like giant"', '"Tree danced in wind"', '"Green tree"'], correctAnswer: '"Tree danced in wind"', hints: ['Human action', 'Danced']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is an idiom?', options: ['Literal phrase', 'Phrase with different meaning', 'Rhyme', 'Question'], correctAnswer: 'Phrase with different meaning', hints: ['Not literal', 'Different meaning']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is a metaphor?', options: ['"Time is money"', '"Time is like money"', '"Time seems like money"', '"Time as money"'], correctAnswer: '"Time is money"', hints: ['Says it IS', 'Is money']},
                  { id: 'q7', type: 'multiple-choice', question: 'What does "it\'s raining cats and dogs" mean?', options: ['Animals falling', 'Heavy rain', 'Light rain', 'No rain'], correctAnswer: 'Heavy rain', hints: ['Idiom for heavy rain', 'Heavy rain']},
                  { id: 'q8', type: 'multiple-choice', question: 'What does "the stars danced" use?', options: ['Simile', 'Metaphor', 'Personification', 'Idiom'], correctAnswer: 'Personification', hints: ['Stars can\'t really dance', 'Personification']}
                ],
                activity: { type: 'interactive-practice', description: 'Figurative language', instruction: 'Identify figurative language'}
              }
            ]
          },
          {
            id: 'ela-4th-2',
            title: 'Informative and Opinion Writing',
            description: 'Write well-organized informative and opinion pieces with clear structure and supporting evidence. Students will develop introductions and conclusions, use transitional phrases, and cite sources appropriately. Strong writing skills support academic success.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.W.4.2 - Informative writing',
                content: '<h3>Writing to Inform</h3><p>Informative writing teaches readers about a topic using facts and details. Start with a clear introduction that states your topic and grabs attention. Organize information into paragraphs, each with a main idea and supporting details. Use headings, diagrams, or lists to make information clear. Include facts, definitions, examples, and quotations from reliable sources. Use transition words like "first," "additionally," "for example," and "in conclusion" to connect ideas. End with a conclusion that summarizes the main points. Remember to cite your sources to give credit to where you found information!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the purpose of informative writing?', options: ['Entertain', 'Teach facts', 'Persuade', 'Tell story'], correctAnswer: 'Teach facts', hints: ['Inform', 'Teach']},
                  { id: 'q2', type: 'multiple-choice', question: 'What should the introduction do?', options: ['Conclude', 'State topic and grab attention', 'Give all details', 'End writing'], correctAnswer: 'State topic and grab attention', hints: ['Hook reader', 'Intro purpose']},
                  { id: 'q3', type: 'multiple-choice', question: 'What connects ideas in writing?', options: ['Nothing', 'Transition words', 'Pictures', 'Colors'], correctAnswer: 'Transition words', hints: ['Connecting words', 'Transitions']},
                  { id: 'q4', type: 'multiple-choice', question: 'What should each paragraph have?', options: ['Random facts', 'Main idea and details', 'Only opinions', 'Questions'], correctAnswer: 'Main idea and details', hints: ['Organized', 'Main idea']},
                  { id: 'q5', type: 'multiple-choice', question: 'Why cite sources?', options: ['Not needed', 'Give credit', 'Make longer', 'Confuse readers'], correctAnswer: 'Give credit', hints: ['Credit authors', 'Give credit']},
                  { id: 'q6', type: 'multiple-choice', question: 'What should conclusion do?', options: ['Introduce new topic', 'Summarize main points', 'Ask questions', 'Give opinion only'], correctAnswer: 'Summarize main points', hints: ['Wrap up', 'Summarize']},
                  { id: 'q7', type: 'multiple-choice', question: 'Which helps organize information?', options: ['Random order', 'Headings and lists', 'No organization', 'Mixing topics'], correctAnswer: 'Headings and lists', hints: ['Visual organization', 'Headings']},
                  { id: 'q8', type: 'multiple-choice', question: 'Should informative writing include opinions?', options: ['Yes, only opinions', 'No, only facts', 'Mix equally', 'No facts'], correctAnswer: 'No, only facts', hints: ['Objective', 'Facts only']}
                ],
                activity: { type: 'interactive-practice', description: 'Informative writing', instruction: 'Write to inform'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.4.1 - Grammar and sentence structure',
                content: '<h3>Advanced Grammar Skills</h3><p>Let\'s master complex grammar! Use progressive verb tenses to show ongoing action: "I am running" (present progressive) or "I was running" (past progressive). Modal auxiliaries (can, could, should, would, may, might, must) express possibility or necessity. Form and use prepositional phrases: "The book on the table" or "We walked through the park." Use relative pronouns (who, whose, whom, which, that) to combine sentences: "The girl who won the race is my friend." Produce complete sentences and recognize fragments and run-ons. Use commas and quotation marks correctly in dialogue.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which shows present progressive?', options: ['"I ran"', '"I am running"', '"I run"', '"I will run"'], correctAnswer: '"I am running"', hints: ['Ongoing now', 'Am running']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is a modal auxiliary?', options: ['Run', 'Should', 'Book', 'Happy'], correctAnswer: 'Should', hints: ['Helper verb', 'Should']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is a prepositional phrase?', options: ['"The dog"', '"In the house"', '"Running fast"', '"She walks"'], correctAnswer: '"In the house"', hints: ['Shows location/time', 'In the house']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a relative pronoun?', options: ['And', 'But', 'Who', 'Very'], correctAnswer: 'Who', hints: ['Connects clauses', 'Who']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which is a complete sentence?', options: ['"Running fast."', '"The dog barks."', '"In the park."', '"Because I said."'], correctAnswer: '"The dog barks."', hints: ['Subject and predicate', 'Dog barks']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is a sentence fragment?', options: ['Complete sentence', 'Incomplete sentence', 'Two sentences together', 'Question'], correctAnswer: 'Incomplete sentence', hints: ['Missing parts', 'Incomplete']},
                  { id: 'q7', type: 'multiple-choice', question: 'How do you punctuate dialogue?', options: ['No punctuation', 'Quotation marks', 'Only periods', 'Only commas'], correctAnswer: 'Quotation marks', hints: ['Around speech', 'Quotes']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which shows past progressive?', options: ['"I ran"', '"I am running"', '"I was running"', '"I will run"'], correctAnswer: '"I was running"', hints: ['Ongoing in past', 'Was running']}
                ],
                activity: { type: 'interactive-practice', description: 'Grammar practice', instruction: 'Use advanced grammar'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-4th-1',
            title: 'Energy, Waves, and Information',
            description: 'Explore the properties of waves (light and sound) and their role in transferring energy and information. Students will learn about forms of energy and how devices use energy to perform work.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.4.1 - Energy and Waves',
                content: '<h3>Understanding Energy Transfer</h3><p>**Energy** is the ability to do work, and it can be transferred from one object to another. **Waves** are a way to transfer energy. Sound travels as a mechanical wave through air or water. Light travels as an electromagnetic wave and carries information (like the images on a screen). Devices like radios, phones, and computers rely on waves to transfer energy and information across distances.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which phenomenon is an example of energy being transferred by a wave?', options: ['A car sitting still', 'Hearing a bell ring', 'A rock falling', 'A book lying on a table'], correctAnswer: 'Hearing a bell ring', hints: ['Sound is a wave', 'Sound wave']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the ability to do work?', options: ['Force', 'Mass', 'Energy', 'Volume'], correctAnswer: 'Energy', hints: ['Definition of energy', 'Energy']},
                  { id: 'q3', type: 'multiple-choice', question: 'What form of energy do phones use to communicate wirelessly?', options: ['Chemical', 'Thermal', 'Electromagnetic waves', 'Sound waves'], correctAnswer: 'Electromagnetic waves', hints: ['Includes radio and cell signals', 'Electromagnetic']}
                ],
                activity: { type: 'wave-demonstration', description: 'Use a slinky to demonstrate transverse (light) and longitudinal (sound) waves.', instruction: 'Explain how the wave moves the energy without moving the whole slinky.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.4.2 - Energy Transformation',
                content: '<h3>Changing Forms of Energy</h3><p>Energy often changes from one form to another (**transformation**). In a light bulb, **electrical energy** is transformed into **light energy** and **heat energy**. In a radio, electrical energy is transformed into sound energy. The **Law of Conservation of Energy** states that energy can never be created or destroyed, only transformed from one form to another.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the main energy transformation in a battery-powered flashlight?', options: ['Light to heat', 'Sound to electrical', 'Chemical to light and heat', 'Kinetic to potential'], correctAnswer: 'Chemical to light and heat', hints: ['Battery stores chemical energy', 'Chemical to light and heat']},
                  { id: 'q2', type: 'multiple-choice', question: 'What law states that energy cannot be created or destroyed?', options: ['Newton\'s Law', 'Law of Gravity', 'Law of Conservation of Energy', 'Boyle\'s Law'], correctAnswer: 'Law of Conservation of Energy', hints: ['Energy is conserved', 'Conservation of Energy']},
                  { id: 'q3', type: 'multiple-choice', question: 'When a roller coaster goes down a hill, **potential energy** is converted to:', options: ['Chemical energy', 'Electrical energy', 'Sound energy', 'Kinetic energy'], correctAnswer: 'Kinetic energy', hints: ['Energy of motion', 'Kinetic energy']}
                ],
                activity: { type: 'energy-chain', description: 'Trace the energy transformation from the sun to a person riding a bicycle (sun → plant → food → person → kinetic).', instruction: 'Identify the starting and ending forms of energy in a wind turbine.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.4.3 - Information Transfer',
                content: '<h3>Sending Information</h3><p>Information can be transferred across distances using different methods. Ancient people used fire signals and drums (sound/light). Modern technology uses **digital signals** (pulses of light or electricity) to send information through wires or radio waves. Devices like cell phones and computers encode information and then use electromagnetic waves to transfer it quickly around the world.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Modern communication relies on information transferred by:', options: ['Smoke signals', 'Digital signals via waves', 'Slow-moving horses', 'Only loud voices'], correctAnswer: 'Digital signals via waves', hints: ['Fast, high-tech method', 'Digital signals']},
                  { id: 'q2', type: 'multiple-choice', question: 'What type of wave does a radio use to transfer information?', options: ['Sound wave', 'Mechanical wave', 'Radio wave (electromagnetic)', 'Water wave'], correctAnswer: 'Radio wave (electromagnetic)', hints: ['Part of the EM spectrum', 'Radio wave']},
                  { id: 'q3', type: 'multiple-choice', question: 'An important part of information transfer is:', options: ['The color of the object', 'Encoding and decoding the signal', 'Stopping the movement', 'Making the energy disappear'], correctAnswer: 'Encoding and decoding the signal', hints: ['Changing information into a signal and back', 'Encoding and decoding']}
                ],
                activity: { type: 'communication-timeline', description: 'Create a timeline showing how communication has changed over time (e.g., smoke signal, letter, telephone, internet).', instruction: 'Compare the speed of sending a letter versus sending an email.' }
              }
            ]
          },
          {
            id: 'science-4th-2',
            title: 'Earth and Space Systems',
            description: 'Investigate the causes of earthquakes and volcanoes (plate tectonics). Examine the characteristics of planets in the solar system and the causes of seasons.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.4.4 - Plate Tectonics and Landforms',
                content: '<h3>Earthquakes and Volcanoes</h3><p>The Earth\'s outer layer is made of moving pieces called **tectonic plates**. When these plates move or crash together, it causes **earthquakes** and often creates **volcanoes** and **mountains**. The movement is driven by heat convection inside the Earth. **Faults** are cracks in the crust where earthquakes happen when plates suddenly slip past each other.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the theory that explains how continents move and change the Earth\'s surface?', options: ['Erosion Theory', 'Water Cycle Theory', 'Plate Tectonics Theory', 'Conservation Theory'], correctAnswer: 'Plate Tectonics Theory', hints: ['Movement of the lithosphere', 'Plate Tectonics']},
                  { id: 'q2', type: 'multiple-choice', question: 'Earthquakes are often caused by the sudden slipping of plates at cracks in the Earth\'s crust called:', options: ['Rivers', 'Faults', 'Valleys', 'Plateaus'], correctAnswer: 'Faults', hints: ['Breaks in the crust', 'Faults']},
                  { id: 'q3', type: 'multiple-choice', question: 'A deep crack in the Earth\'s crust where magma can escape is a:', options: ['Mountain', 'Fault', 'Volcano', 'Hill'], correctAnswer: 'Volcano', hints: ['Vent for magma', 'Volcano']}
                ],
                activity: { type: 'plate-boundary-drawing', description: 'Draw a cross-section of the Earth showing tectonic plates moving apart (divergent) and together (convergent).', instruction: 'Explain why mountains are often found where plates collide.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.4.5 - Solar System Review',
                content: '<h3>Planets and the Sun</h3><p>Our **solar system** consists of the **Sun** (a star that provides light and heat) and eight **planets** that orbit it. The planets are divided into **rocky inner planets** (Mercury, Venus, Earth, Mars) and **gassy outer planets** (Jupiter, Saturn, Uranus, Neptune). Earth is unique because it has liquid water and supports life. Each planet has different characteristics, sizes, and orbital paths.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The main difference between inner and outer planets is:', options: ['Inner planets are gassy, outer are rocky', 'Inner planets are rocky, outer are gassy', 'Inner planets are bigger', 'Outer planets are closer to the sun'], correctAnswer: 'Inner planets are rocky, outer are gassy', hints: ['Composition difference', 'Rocky vs. Gassy']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the only planet known to support life?', options: ['Mars', 'Venus', 'Jupiter', 'Earth'], correctAnswer: 'Earth', hints: ['Has liquid water and oxygen', 'Earth']},
                  { id: 'q3', type: 'multiple-choice', question: 'What object in our solar system provides all the energy for the planets?', options: ['The Moon', 'The largest planet (Jupiter)', 'The Sun', 'Asteroids'], correctAnswer: 'The Sun', hints: ['Star at the center', 'The Sun']}
                ],
                activity: { type: 'solar-system-fact-finder', description: 'Research and create a fact card for two planets (e.g., Earth and Jupiter).', instruction: 'Compare the size of Earth and the Sun.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.4.6 - Earth\'s Rotation and Revolution',
                content: '<h3>Day, Year, and Seasons</h3><p>The cycle of **day and night** is caused by the Earth\'s **rotation** (spinning on its axis). One full rotation takes 24 hours. The cycle of the **year** and the **seasons** is caused by the Earth\'s **revolution** (orbit around the sun) AND the **tilt of its axis**. When a hemisphere (half of Earth) is tilted *toward* the sun, it is summer; when tilted *away*, it is winter.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What causes the cycle of **day and night**?', options: ['Earth\'s orbit around the sun', 'The Moon\'s orbit', 'Earth\'s rotation (spinning)', 'The Sun\'s tilt'], correctAnswer: 'Earth\'s rotation (spinning)', hints: ['One spin on the axis', 'Earth\'s rotation']},
                  { id: 'q2', type: 'multiple-choice', question: 'What causes the **seasons**?', options: ['Distance from the sun only', 'The Moon\'s phases', 'Earth\'s tilted axis and revolution', 'The clouds'], correctAnswer: 'Earth\'s tilted axis and revolution', hints: ['Tilt is the main factor', 'Tilt and revolution']},
                  { id: 'q3', type: 'multiple-choice', question: 'One full **revolution** of the Earth around the sun takes about:', options: ['24 hours', '1 month', '1 year', '10 years'], correctAnswer: '1 year', hints: ['The length of one year', '1 year']}
                ],
                activity: { type: 'season-model', description: 'Use a lamp (sun) and a ball (Earth) to demonstrate how the tilt and orbit cause seasons.', instruction: 'Explain why the North Pole has constant daylight in the summer.' }
              }
            ]
          },
          {
            id: 'science-4th-3',
            title: 'Life Science: Ecosystems and Adaptation',
            description: 'Analyze food chains and the flow of energy in ecosystems. Investigate plant and animal adaptations for survival.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.4.7 - Food Chains and Energy Flow',
                content: '<h3>Energy Flow in Food Chains</h3><p>A **food chain** shows how energy flows from one organism to the next. It starts with the **producer** (plant, making its own food). The **primary consumer** (herbivore) eats the producer. The **secondary consumer** (carnivore) eats the primary consumer. **Decomposers** break down dead matter. At each step, some energy is lost as heat. The arrows in a food chain always point to the organism that **receives** the energy.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In a food chain, which organism makes its own food?', options: ['Consumer', 'Decomposer', 'Producer', 'Herbivore'], correctAnswer: 'Producer', hints: ['Plants', 'Producer']},
                  { id: 'q2', type: 'multiple-choice', question: 'If a rabbit eats grass, and a fox eats the rabbit, the fox is the:', options: ['Producer', 'Primary Consumer', 'Secondary Consumer', 'Decomposer'], correctAnswer: 'Secondary Consumer', hints: ['Eats the primary consumer', 'Secondary Consumer']},
                  { id: 'q3', type: 'multiple-choice', question: 'In a food chain diagram, which direction do the arrows point?', options: ['Toward the organism that gives the energy', 'Toward the organism that receives the energy', 'Both directions', 'To the sun'], correctAnswer: 'Toward the organism that receives the energy', hints: ['Shows the direction of energy flow', 'Receives energy']}
                ],
                activity: { type: 'food-chain-diagram', description: 'Draw a food chain including the sun, a flower, a caterpillar, and a bird.', instruction: 'Identify the herbivore and the carnivore in the food chain.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.4.8 - Structural Adaptations',
                content: '<h3>Body Adaptations</h3><p>**Adaptations** are special traits that help an organism survive in its environment. **Structural adaptations** are physical parts of the body. Examples include a camel\'s long eyelashes (to keep out sand), a bird\'s hollow bones (for flying), or a duck\'s webbed feet (for swimming). These adaptations are inherited and developed over generations to improve survival chances.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'A polar bear\'s thick, white fur is a structural adaptation for:', options: ['Hunting fish', 'Camouflage and warmth in the Arctic', 'Running fast', 'Climbing trees'], correctAnswer: 'Camouflage and warmth in the Arctic', hints: ['Physical trait for survival', 'Camouflage and warmth']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is a structural adaptation?', options: ['A bird flying south', 'A person running', 'A giraffe\'s long neck', 'A bear sleeping all winter'], correctAnswer: 'A giraffe\'s long neck', hints: ['A body part feature', 'Long neck']},
                  { id: 'q3', type: 'multiple-choice', question: 'A bird flying south for the winter is a **behavioral** adaptation. Which is a structural adaptation of that bird?', options: ['Its ability to sing', 'Its nest building', 'Its feather shape', 'Its decision to migrate'], correctAnswer: 'Its feather shape', hints: ['A physical part', 'Feather shape']}
                ],
                activity: { type: 'adaptation-invention', description: 'Design and draw a new animal. Give it three structural adaptations to help it survive in a specific environment (e.g., a swamp).', instruction: 'Explain why one of the adaptations is needed for the swamp.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.4.9 - Behavioral Adaptations',
                content: '<h3>Action Adaptations</h3><p>**Behavioral adaptations** are things an organism **does** to survive. Examples include: **Migration** (animals moving to a warmer place for winter), **Hibernation** (animals sleeping through the cold winter), and a bird building a **nest** (shelter). These actions are inherited and help the animal find food and stay safe through the changing seasons.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'When a bear sleeps all winter to save energy, this is a:', options: ['Structural adaptation', 'Physical change', 'Behavioral adaptation (Hibernation)', 'A food chain'], correctAnswer: 'Behavioral adaptation (Hibernation)', hints: ['Action taken', 'Hibernation']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the behavioral adaptation of many birds when winter approaches?', options: ['Growing thicker fur', 'Changing color', 'Migration (flying south)', 'Shedding feathers'], correctAnswer: 'Migration (flying south)', hints: ['Seasonal movement', 'Migration']},
                  { id: 'q3', type: 'multiple-choice', question: 'A lioness hiding in the tall grass to hunt is an example of a behavioral adaptation that helps it:', options: ['Protect its cubs', 'Find a mate', 'Get food', 'Build shelter'], correctAnswer: 'Get food', hints: ['Hunting strategy', 'Get food']}
                ],
                activity: { type: 'behavior-role-play', description: 'Act out an animal\'s behavioral adaptation (e.g., huddling together for warmth, pretending to be dead).', instruction: 'Explain the difference between a bird\'s wings (structural) and migration (behavioral).' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-4th-1',
            title: 'Mississippi History and Government',
            description: 'Explore the history of Mississippi from Native American settlements to modern times. Identify the three branches of state government and the basic rights and responsibilities of citizens.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.4.1 - Native American History in MS',
                content: '<h3>First People of Mississippi</h3><p>Long before European settlers arrived, Native American tribes lived in Mississippi, including the **Choctaw**, **Chickasaw**, and **Natchez**. They had complex societies, cultivated crops (**agriculture**), and developed trade networks. The Choctaw and Chickasaw were particularly influential. Studying their history is essential to understanding the roots of Mississippi culture.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which major Native American tribe was historically located in Mississippi?', options: ['Sioux', 'Aztec', 'Choctaw', 'Inca'], correctAnswer: 'Choctaw', hints: ['One of the three major tribes of MS', 'Choctaw']},
                  { id: 'q2', type: 'multiple-choice', question: 'What was the major economic activity of these early tribes?', options: ['Deep-sea fishing', 'Hunting, gathering, and agriculture', 'Building large factories', 'Trading with Europe'], correctAnswer: 'Hunting, gathering, and agriculture', hints: ['Farming and resource collection', 'Agriculture and hunting']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is an **artifact** that historians use to learn about Native American life?', options: ['A future invention', 'A modern cell phone', 'A piece of pottery or an arrowhead', 'A printed textbook'], correctAnswer: 'A piece of pottery or an arrowhead', hints: ['Objects made and used by people in the past', 'Pottery/arrowhead']}
                ],
                activity: { type: 'tribal-culture-map', description: 'Locate the ancestral lands of the Choctaw and Chickasaw on a map of Mississippi.', instruction: 'Identify one crop grown by the Natchez people (e.g., corn, beans, squash).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.4.2 - State Government Structure',
                content: '<h3>The Three Branches of State Government</h3><p>Like the national government, the Mississippi state government has three branches: the **Legislative Branch** (makes laws), the **Executive Branch** (carries out laws, led by the Governor), and the **Judicial Branch** (interprets laws). These three branches operate under the principle of **checks and balances** to ensure no branch becomes too powerful at the state level.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which branch of the Mississippi government is led by the **Governor**?', options: ['Judicial', 'Executive', 'Legislative', 'Local'], correctAnswer: 'Executive', hints: ['Enforces laws', 'Executive']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the principle that prevents any one branch from having absolute power?', options: ['Federalism', 'Democracy', 'Checks and Balances', 'Monarchy'], correctAnswer: 'Checks and Balances', hints: ['Mutual limitations', 'Checks and Balances']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the primary role of the state\'s **Legislature**?', options: ['To interpret laws', 'To make laws', 'To veto laws', 'To lead the military'], correctAnswer: 'To make laws', hints: ['Creates statutes and rules', 'Make laws']}
                ],
                activity: { type: 'branch-function-match', description: 'Match the three branches of state government to their primary function (make, enforce, interpret).', instruction: 'Identify the name of the current Governor of Mississippi.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.4.3 - Citizen Rights and Responsibilities',
                content: '<h3>Rights and Responsibilities</h3><p>Citizens of Mississippi and the U.S. have **rights** (protected freedoms) and **responsibilities** (duties). Rights include **freedom of speech** and the right to **due process** (fair treatment under the law). Responsibilities include **obeying laws**, serving on a jury, and **voting** (when of age). Exercising rights often requires accepting responsibility.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a **right** guaranteed to citizens?', options: ['Paying taxes', 'Voting', 'Freedom of Speech', 'Serving on a jury'], correctAnswer: 'Freedom of Speech', hints: ['A protected liberty', 'Freedom of Speech']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is a major **responsibility** of adult citizens?', options: ['Ignoring traffic lights', 'Vandalizing property', 'Voting and obeying laws', 'Stealing goods'], correctAnswer: 'Voting and obeying laws', hints: ['Duty to the state', 'Voting and obeying laws']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is **due process**?', options: ['Being treated unfairly', 'Fair treatment under the law', 'Being ignored by the government', 'The right to get rich'], correctAnswer: 'Fair treatment under the law', hints: ['Procedural justice', 'Fair treatment']}
                ],
                activity: { type: 'rights-vs-responsibilities-list', description: 'Create a T-chart listing three rights and three responsibilities of American citizens.', instruction: 'Discuss why voting is both a right and a responsibility.' }
              }
            ]
          },
          {
            id: 'ss-4th-2',
            title: 'American Revolution and Founding',
            description: 'Analyze the causes and key events of the American Revolution. Examine the content and significance of the Declaration of Independence.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.4.4 - Causes of the Revolution',
                content: '<h3>Taxation Without Representation</h3><p>The main reason the American colonists fought the British was a belief in "**no taxation without representation**." The British government imposed new **taxes** (e.g., on tea, stamps) without giving the colonists a voice in Parliament. The colonists believed this was unfair and a violation of their rights. This conflict over taxes and representation led to protest and eventually, war.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What was the main reason for colonial protest against Great Britain?', options: ['Slavery', 'The King was too old', 'No taxation without representation', 'Too much representation'], correctAnswer: 'No taxation without representation', hints: ['Core colonial complaint', 'No taxation without representation']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a **tax**?', options: ['A gift to the King', 'Money people pay to the government', 'A type of animal', 'A piece of land'], correctAnswer: 'Money people pay to the government', hints: ['Mandatory payment to government', 'Money to government']},
                  { id: 'q3', type: 'multiple-choice', question: 'The **Boston Tea Party** was a protest against a tax on:', options: ['Sugar', 'Tea', 'Paper', 'Salt'], correctAnswer: 'Tea', hints: ['Famous colonial protest', 'Tea']}
                ],
                activity: { type: 'cause-effect-protest', description: 'Create a simple cause-and-effect flow chart: British Tax → Colonial Protest → Boston Tea Party.', instruction: 'Explain why the King thought he had the right to tax the colonists.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.4.5 - The Declaration of Independence',
                content: '<h3>Declaring Independence</h3><p>The **Declaration of Independence** was written primarily by **Thomas Jefferson** in 1776. It declared that the 13 colonies were free and independent states. It states that all men are created equal and have the right to "**Life, Liberty, and the pursuit of Happiness**." It is one of the most important documents in U.S. history because it laid out the philosophical foundation for American democracy and freedom.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who was the main author of the Declaration of Independence?', options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'John Adams'], correctAnswer: 'Thomas Jefferson', hints: ['Primary writer', 'Thomas Jefferson']},
                  { id: 'q2', type: 'multiple-choice', question: 'The Declaration states that all people have the right to:', options: ['Money, fame, and power', 'Life, Liberty, and the pursuit of Happiness', 'Property, slaves, and gold', 'Taxes, rules, and government'], correctAnswer: 'Life, Liberty, and the pursuit of Happiness', hints: ['Unalienable rights', 'Life, Liberty, Happiness']},
                  { id: 'q3', type: 'multiple-choice', question: 'In what year was the Declaration of Independence signed?', options: ['1787', '1865', '1776', '1492'], correctAnswer: '1776', hints: ['The year America declared freedom', '1776']}
                ],
                activity: { type: 'declaration-analysis', description: 'Identify and write down the three unalienable rights listed in the Declaration.', instruction: 'Discuss the meaning of the word "Liberty."' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.4.6 - The Revolutionary War',
                content: '<h3>The Fight for Freedom</h3><p>The **Revolutionary War** (1775-1783) was the military conflict between the American colonists (led by **George Washington**) and the British. The colonists, despite having less training and resources, won because of strong leadership, fighting on their own land, and assistance from other countries (like France). The war ended with the **Treaty of Paris**, recognizing the U.S. as an independent nation.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who led the American Continental Army during the Revolutionary War?', options: ['Thomas Jefferson', 'King George III', 'George Washington', 'Paul Revere'], correctAnswer: 'George Washington', hints: ['First President and wartime general', 'George Washington']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which country helped the American colonists defeat the British?', options: ['Germany', 'Spain', 'France', 'Canada'], correctAnswer: 'France', hints: ['Crucial military and financial support', 'France']},
                  { id: 'q3', type: 'multiple-choice', question: 'The war officially ended with the signing of the:', options: ['Declaration of Independence', 'U.S. Constitution', 'Treaty of Paris', 'Treaty of Ghent'], correctAnswer: 'Treaty of Paris', hints: ['Peace settlement', 'Treaty of Paris']}
                ],
                activity: { type: 'revolutionary-war-map', description: 'Locate two major battles of the Revolutionary War (e.g., Saratoga, Yorktown) on a U.S. map.', instruction: 'Explain why fighting on their own land gave the Americans an advantage.' }
              }
            ]
          },
          {
            id: 'ss-4th-3',
            title: 'U.S. Constitution and Civics',
            description: 'Examine the purpose of the U.S. Constitution. Understand the difference between the three branches of government and the concept of a balanced government.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.4.7 - The U.S. Constitution',
                content: '<h3>The Law of the Land</h3><p>The **U.S. Constitution** (signed 1787) is the supreme law of the land. It established our national government and defined its powers and limitations. It begins with the words, "**We the People**," emphasizing that the power of the government comes from its citizens. The Constitution created the system of **Federalism**, dividing power between the federal (national) and state governments.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What document is the **supreme law of the United States**?', options: ['The Bible', 'The Bill of Rights', 'The U.S. Constitution', 'The Declaration of Independence'], correctAnswer: 'The U.S. Constitution', hints: ['Highest legal document', 'Constitution']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does the phrase "**We the People**" emphasize?', options: ['The President\'s power', 'The power of the federal government', 'That the government\'s power comes from the citizens', 'The power of the military'], correctAnswer: 'That the government\'s power comes from the citizens', hints: ['Popular sovereignty', 'Power comes from citizens']},
                  { id: 'q3', type: 'multiple-choice', question: 'The system that divides power between the federal and state governments is:', options: ['Monarchy', 'Checks and Balances', 'Federalism', 'Dictatorship'], correctAnswer: 'Federalism', hints: ['Division of power between levels', 'Federalism']}
                ],
                activity: { type: 'constitution-preamble', description: 'Read the Preamble of the Constitution ("We the People...") and discuss its meaning.', instruction: 'Identify one power the federal government has (e.g., printing money).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.4.8 - Separating Power',
                content: '<h3>Separation of Powers</h3><p>The Constitution divides the national government\'s power into three branches: **Legislative** (Congress: makes laws), **Executive** (President: enforces laws), and **Judicial** (Supreme Court: interprets laws). This **Separation of Powers** ensures that no single branch can take over the government and protects individual freedom. Each branch has its own unique responsibilities.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which branch is headed by the Supreme Court and interprets laws?', options: ['Legislative', 'Executive', 'Judicial', 'Federal'], correctAnswer: 'Judicial', hints: ['Courts and judges', 'Judicial']},
                  { id: 'q2', type: 'multiple-choice', question: 'The Senate and House of Representatives make up which branch?', options: ['Legislative', 'Executive', 'Judicial', 'State'], correctAnswer: 'Legislative', hints: ['Congress', 'Legislative']},
                  { id: 'q3', type: 'multiple-choice', question: 'The division of power into three branches is called:', options: ['Federalism', 'Checks and Balances', 'Separation of Powers', 'Democracy'], correctAnswer: 'Separation of Powers', hints: ['Dividing the function', 'Separation of Powers']}
                ],
                activity: { type: 'branch-definition-game', description: 'Play a game where students identify which branch is responsible for a given action (e.g., declaring war → Legislative).', instruction: 'Name the current President (Executive Branch leader).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.4.9 - Checks and Balances',
                content: '<h3>Balancing Power</h3><p>**Checks and Balances** is the system where each branch of government has the power to restrain, or check, the actions of the other two. For example, the President (Executive) can **veto** (reject) a law passed by Congress (Legislative). Congress can **override** the veto. The Supreme Court (Judicial) can declare a law **unconstitutional**. This system prevents tyranny and promotes deliberation.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the action when the President rejects a law passed by Congress?', options: ['Approval', 'Amendment', 'Veto', 'Impeachment'], correctAnswer: 'Veto', hints: ['Executive check on Legislative', 'Veto']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the Judicial Branch\'s biggest check on the other two branches?', options: ['Vetoing bills', 'Declaring laws unconstitutional', 'Appointing judges', 'Writing new laws'], correctAnswer: 'Declaring laws unconstitutional', hints: ['Judicial Review', 'Declare unconstitutional']},
                  { id: 'q3', type: 'multiple-choice', question: 'The main goal of Checks and Balances is to:', options: ['Make laws quickly', 'Prevent any one branch from becoming too strong', 'Increase taxes', 'Make the President all-powerful'], correctAnswer: 'Prevent any one branch from becoming too strong', hints: ['Protect against tyranny', 'Prevent tyranny']}
                ],
                activity: { type: 'checks-and-balances-scenario', description: 'Analyze a scenario: Congress passes a law, but the President disagrees. Discuss the steps of veto and override.', instruction: 'Identify which branch Congress is a check on (Executive and Judicial).' }
              }
            ]
          }
        ]
      },
      '5th Grade': {
        'Math': [
          {
            id: 'math-5th-1',
            title: 'Operations with Decimals',
            description: 'Add, subtract, multiply, and divide decimals with understanding of place value. Students will round decimals, compare decimal values, and solve real-world problems involving money and measurements. Decimal fluency is essential for scientific calculations and financial literacy.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.5.NBT.7 - Decimal operations',
                content: '<h3>Computing with Decimals</h3><p>Decimals extend our place value system beyond whole numbers. When adding or subtracting decimals, line up the decimal points to ensure each place value is in the correct column. For 3.45 + 2.8, rewrite as 3.45 + 2.80 and add. When multiplying decimals, ignore the decimal points initially, multiply as whole numbers, then count total decimal places in both factors to place the decimal in the product. For division, move decimal points in both dividend and divisor to make the divisor a whole number. Understanding decimal operations is crucial for science, engineering, and everyday calculations involving money and measurements!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 4.5 + 3.28?', correctAnswer: '7.78', hints: ['Line up decimals', '7.78']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 8.6 - 2.35?', correctAnswer: '6.25', hints: ['Line up decimals', '6.25']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 2.5 × 4?', options: ['8', '10', '12', '14'], correctAnswer: '10', hints: ['2.5 times 4', '10']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 0.6 × 0.3?', correctAnswer: '0.18', hints: ['6 × 3 = 18, two decimal places', '0.18']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 12.5 ÷ 5?', correctAnswer: '2.5', hints: ['Divide normally', '2.5']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 7.2 + 4.85?', options: ['11.05', '12.05', '13.05', '14.05'], correctAnswer: '12.05', hints: ['Line up decimals', '12.05']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 9.1 - 3.75?', correctAnswer: '5.35', hints: ['Subtract carefully', '5.35']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 1.5 × 2.4?', correctAnswer: '3.6', hints: ['Multiply, count decimals', '3.6']}
                ],
                activity: { type: 'interactive-practice', description: 'Decimal operations', instruction: 'Practice all operations with decimals'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.5.NBT.4 - Round decimals',
                content: '<h3>Rounding Decimals</h3><p>Rounding decimals follows the same rules as whole numbers but requires understanding place value. To round 3.67 to the nearest tenth, look at the hundredths place (7). Since 7 ≥ 5, round up: 3.7. To round to the nearest whole number, look at the tenths place. Rounding helps estimate answers and makes numbers easier to work with. In real life, we round money to the nearest cent, measurements to practical precision, and statistics to meaningful figures. Always identify which place value you\'re rounding to before examining the digit to its right!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Round 5.47 to the nearest tenth', correctAnswer: '5.5', hints: ['Look at hundredths', '5.5']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Round 8.32 to the nearest whole number', correctAnswer: '8', hints: ['Look at tenths', '8']},
                  { id: 'q3', type: 'multiple-choice', question: 'Round 12.68 to the nearest tenth', options: ['12.6', '12.7', '13.0', '12.8'], correctAnswer: '12.7', hints: ['8 rounds up', '12.7']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Round 9.95 to the nearest whole number', correctAnswer: '10', hints: ['9 rounds up', '10']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Round 3.142 to the nearest hundredth', correctAnswer: '3.14', hints: ['Look at thousandths', '3.14']},
                  { id: 'q6', type: 'multiple-choice', question: 'Round 7.449 to the nearest tenth', options: ['7.4', '7.5', '7.44', '7.45'], correctAnswer: '7.4', hints: ['4 rounds down', '7.4']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Round 15.87 to the nearest whole number', correctAnswer: '16', hints: ['8 rounds up', '16']},
                  { id: 'q8', type: 'fill-in-blank', question: 'Round 2.356 to the nearest hundredth', correctAnswer: '2.36', hints: ['Look at thousandths', '2.36']}
                ],
                activity: { type: 'interactive-practice', description: 'Rounding practice', instruction: 'Round decimals to various places'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.5.NF.4 - Multiply fractions',
                content: '<h3>Multiplying Fractions</h3><p>To multiply fractions, multiply the numerators together and multiply the denominators together: 2/3 × 3/4 = 6/12 = 1/2 (simplified). When multiplying a fraction by a whole number, write the whole number as a fraction over 1: 5 × 2/3 = 5/1 × 2/3 = 10/3 = 3 1/3. Multiplying fractions makes them smaller (unless multiplying by a number greater than 1). Always simplify your answer if possible. This skill is essential for cooking (scaling recipes), construction (measurements), and many real-world applications!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 1/2 × 1/3?', correctAnswer: '1/6', hints: ['Multiply across', '1/6']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 2/3 × 3/4?', correctAnswer: '6/12 or 1/2', hints: ['Simplify', '1/2']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 4 × 1/2?', options: ['2', '4', '8', '1/2'], correctAnswer: '2', hints: ['4/1 × 1/2', '2']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 3/5 × 2/3?', correctAnswer: '6/15 or 2/5', hints: ['Multiply and simplify', '2/5']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 5/6 × 2/5?', correctAnswer: '10/30 or 1/3', hints: ['Simplify', '1/3']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 3 × 2/3?', options: ['1', '2', '3', '6'], correctAnswer: '2', hints: ['3/1 × 2/3', '2']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 1/4 × 1/4?', correctAnswer: '1/16', hints: ['Multiply across', '1/16']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 7/8 × 4/7?', correctAnswer: '28/56 or 1/2', hints: ['Simplify', '1/2']}
                ],
                activity: { type: 'interactive-practice', description: 'Fraction multiplication', instruction: 'Multiply fractions and mixed numbers'}
              },
              {
                id: 'lesson-4',
                objective: 'MCCRS.Math.5.NF.7 - Divide fractions',
                content: '<h3>Dividing Fractions</h3><p>To divide fractions, multiply by the reciprocal (flip the second fraction). For 2/3 ÷ 1/4, change to 2/3 × 4/1 = 8/3. When dividing a fraction by a whole number, write the whole number as a fraction: 3/4 ÷ 2 = 3/4 ÷ 2/1 = 3/4 × 1/2 = 3/8. Remember "Keep, Change, Flip" - keep the first fraction, change division to multiplication, flip the second fraction. Division of fractions tells you how many times one fraction fits into another. This is useful for portioning, scaling, and many practical applications!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is 1/2 ÷ 1/4?', correctAnswer: '2', hints: ['Multiply by reciprocal', '2']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is 3/4 ÷ 1/2?', correctAnswer: '3/2 or 1 1/2', hints: ['Keep, change, flip', '1 1/2']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is 2/3 ÷ 2?', options: ['1/3', '4/3', '2/6', '1/6'], correctAnswer: '1/3', hints: ['Divide by 2/1', '1/3']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is 5/6 ÷ 1/3?', correctAnswer: '5/2 or 2 1/2', hints: ['Multiply by 3/1', '2 1/2']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is 1/4 ÷ 3?', correctAnswer: '1/12', hints: ['Divide by 3/1', '1/12']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is 4/5 ÷ 2/5?', options: ['1', '2', '3', '4'], correctAnswer: '2', hints: ['Multiply by reciprocal', '2']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is 3/8 ÷ 3/4?', correctAnswer: '1/2', hints: ['Keep, change, flip', '1/2']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is 7/10 ÷ 7?', correctAnswer: '1/10', hints: ['Divide by 7/1', '1/10']}
                ],
                activity: { type: 'interactive-practice', description: 'Fraction division', instruction: 'Divide fractions using reciprocals'}
              }
            ]
          },
          {
            id: 'math-5th-2',
            title: 'Volume and Coordinate Plane',
            description: 'Calculate volume of rectangular prisms and graph points on the coordinate plane. Students will understand three-dimensional measurement, use formulas, and work with ordered pairs. Spatial reasoning and graphing skills support geometry and algebra.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.5.MD.5 - Volume concepts',
                content: '<h3>Understanding Volume</h3><p>Volume measures the amount of space inside a three-dimensional object, measured in cubic units. A rectangular prism\'s volume equals length × width × height (V = l × w × h). If a box is 4 cm long, 3 cm wide, and 2 cm tall, its volume is 4 × 3 × 2 = 24 cubic centimeters (cm³). You can visualize this by imagining unit cubes filling the space. Volume is different from area (which measures flat surfaces) and is used to measure capacity of containers, rooms, and objects. Understanding volume is essential for cooking, packing, construction, and many everyday tasks!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is the volume of a box that is 5 cm × 3 cm × 2 cm?', correctAnswer: '30 cm³ or 30 cubic cm', hints: ['Multiply all three', '30']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is the volume of a prism 4 in × 4 in × 4 in?', correctAnswer: '64 cubic inches or 64 in³', hints: ['4 cubed', '64']},
                  { id: 'q3', type: 'multiple-choice', question: 'What units measure volume?', options: ['Square units', 'Cubic units', 'Linear units', 'No units'], correctAnswer: 'Cubic units', hints: ['Three dimensions', 'Cubic']},
                  { id: 'q4', type: 'fill-in-blank', question: 'A box is 10 cm × 5 cm × 2 cm. What is its volume?', correctAnswer: '100 cm³ or 100 cubic cm', hints: ['Multiply dimensions', '100']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is the volume of a cube with sides of 6 feet?', correctAnswer: '216 cubic feet or 216 ft³', hints: ['6 × 6 × 6', '216']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a prism is 8 m × 3 m × 5 m, what is the volume?', options: ['16 m³', '120 m³', '40 m³', '24 m³'], correctAnswer: '120 m³', hints: ['8 × 3 × 5', '120']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A room is 12 ft long, 10 ft wide, 8 ft high. What is the volume?', correctAnswer: '960 ft³ or 960 cubic feet', hints: ['Multiply all', '960']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is the formula for volume of a rectangular prism?', correctAnswer: 'V = l × w × h or length times width times height', hints: ['Three dimensions multiplied', 'l × w × h']}
                ],
                activity: { type: 'interactive-practice', description: 'Volume calculation', instruction: 'Find volumes of rectangular prisms'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.5.G.1 - Coordinate plane',
                content: '<h3>Graphing on the Coordinate Plane</h3><p>The coordinate plane has two perpendicular number lines: the x-axis (horizontal) and y-axis (vertical). They intersect at the origin (0,0). Every point is located by an ordered pair (x, y). The x-coordinate tells how far right (positive) or left (negative) from the origin. The y-coordinate tells how far up (positive) or down (negative). To plot (3, 4), move 3 units right and 4 units up. The four sections created by the axes are called quadrants. Coordinate planes are used in maps, computer graphics, video games, and data visualization!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the origin?', options: ['(1,1)', '(0,0)', '(1,0)', '(0,1)'], correctAnswer: '(0,0)', hints: ['Where axes meet', '(0,0)']},
                  { id: 'q2', type: 'multiple-choice', question: 'In the point (5, 3), which is the x-coordinate?', options: ['5', '3', 'Both', 'Neither'], correctAnswer: '5', hints: ['First number', '5']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which axis is horizontal?', options: ['x-axis', 'y-axis', 'Both', 'Neither'], correctAnswer: 'x-axis', hints: ['Goes left-right', 'x-axis']},
                  { id: 'q4', type: 'multiple-choice', question: 'To plot (4, 2), you move:', options: ['4 up, 2 right', '4 right, 2 up', '2 up, 4 right', '2 right, 4 up'], correctAnswer: '4 right, 2 up', hints: ['x first, then y', '4 right, 2 up']},
                  { id: 'q5', type: 'multiple-choice', question: 'What are ordered pairs?', options: ['Two numbers', '(x, y) coordinates', 'Only x values', 'Only y values'], correctAnswer: '(x, y) coordinates', hints: ['Location on plane', '(x, y)']},
                  { id: 'q6', type: 'multiple-choice', question: 'How many quadrants are there?', options: ['2', '3', '4', '5'], correctAnswer: '4', hints: ['Four sections', '4']},
                  { id: 'q7', type: 'multiple-choice', question: 'In (7, 9), which is the y-coordinate?', options: ['7', '9', 'Both', 'Neither'], correctAnswer: '9', hints: ['Second number', '9']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which axis is vertical?', options: ['x-axis', 'y-axis', 'Both', 'Neither'], correctAnswer: 'y-axis', hints: ['Goes up-down', 'y-axis']}
                ],
                activity: { type: 'interactive-practice', description: 'Coordinate graphing', instruction: 'Plot and identify points on coordinate plane'}
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-5th-1',
            title: 'Advanced Reading Comprehension',
            description: 'Quote accurately from text, determine themes, compare and contrast story elements, and analyze multiple accounts of events. Students will make connections between texts, evaluate authors\' use of evidence, and draw inferences from complex texts. These analytical skills prepare students for middle school literature.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.5.1 - Quote accurately',
                content: '<h3>Using Text Evidence</h3><p>Strong readers support their answers with direct quotes from the text. When quoting, use quotation marks around the exact words from the passage and cite the page number or paragraph. For example: According to the text, "The storm raged for three days" (paragraph 4). Quoting accurately means copying the author\'s exact words without changing them. This proves your point and shows you read carefully. You can also paraphrase (put ideas in your own words) but still cite the source. Using textual evidence makes your arguments convincing and shows deep comprehension. Always introduce quotes with context so readers understand why you\'re including them!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are quotation marks used for?', options: ['Any words', 'Exact words from text', 'Your ideas', 'Summaries'], correctAnswer: 'Exact words from text', hints: ['Direct quotes', 'Exact words']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does it mean to quote accurately?', options: ['Change words', 'Use exact words', 'Summarize', 'Add opinions'], correctAnswer: 'Use exact words', hints: ['No changes', 'Exact']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why quote from text?', options: ['Make longer', 'Prove your point', 'Fill space', 'Look smart'], correctAnswer: 'Prove your point', hints: ['Support answer', 'Evidence']},
                  { id: 'q4', type: 'multiple-choice', question: 'What should you include with a quote?', options: ['Nothing', 'Page or paragraph number', 'Your opinion', 'Pictures'], correctAnswer: 'Page or paragraph number', hints: ['Citation', 'Source location']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is paraphrasing?', options: ['Direct quote', 'Ideas in your own words', 'Copying exactly', 'Ignoring text'], correctAnswer: 'Ideas in your own words', hints: ['Restate', 'Own words']},
                  { id: 'q6', type: 'multiple-choice', question: 'Should you change words in a direct quote?', options: ['Yes, always', 'No, keep exact', 'Sometimes', 'Add your ideas'], correctAnswer: 'No, keep exact', hints: ['Exact words', 'No changes']},
                  { id: 'q7', type: 'multiple-choice', question: 'What makes arguments convincing?', options: ['Opinions only', 'Text evidence', 'Long writing', 'Big words'], correctAnswer: 'Text evidence', hints: ['Proof', 'Evidence']},
                  { id: 'q8', type: 'multiple-choice', question: 'Should you introduce quotes with context?', options: ['Yes', 'No', 'Never', 'Only sometimes'], correctAnswer: 'Yes', hints: ['Explain why', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Quoting practice', instruction: 'Find and quote text evidence'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.5.2 - Determine theme',
                content: '<h3>Analyzing Theme</h3><p>Theme is the central message or lesson an author wants readers to understand about life. It\'s different from the topic (what the story is about) and the plot (what happens). Common themes include: perseverance leads to success, friendship requires sacrifice, courage means facing fears. To determine theme, examine how characters change, what they learn, and what the story teaches. Look for repeated ideas, symbols, and the author\'s message. One story can have multiple themes. Summarize themes in complete sentences like "The story shows that honesty is always the best policy" rather than just saying "honesty." Understanding theme helps you connect literature to real life!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is theme?', options: ['The topic', 'The plot', 'The central message', 'The characters'], correctAnswer: 'The central message', hints: ['Big idea', 'Message']},
                  { id: 'q2', type: 'multiple-choice', question: 'How do you find theme?', options: ['Read title', 'See how characters change', 'Count pages', 'Look at pictures'], correctAnswer: 'See how characters change', hints: ['Character growth', 'Changes']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is a theme?', options: ['"Dogs"', '"A boy and his dog"', '"Loyalty is important"', '"The boy played"'], correctAnswer: '"Loyalty is important"', hints: ['Complete idea', 'Loyalty']},
                  { id: 'q4', type: 'multiple-choice', question: 'Can a story have multiple themes?', options: ['Yes', 'No', 'Never', 'Only long stories'], correctAnswer: 'Yes', hints: ['Multiple messages', 'Yes']},
                  { id: 'q5', type: 'multiple-choice', question: 'How should you state a theme?', options: ['One word', 'Complete sentence', 'Question', 'List'], correctAnswer: 'Complete sentence', hints: ['Full statement', 'Sentence']},
                  { id: 'q6', type: 'multiple-choice', question: 'What helps reveal theme?', options: ['Nothing', 'Repeated ideas and symbols', 'Page numbers', 'Font'], correctAnswer: 'Repeated ideas and symbols', hints: ['Patterns', 'Symbols']},
                  { id: 'q7', type: 'multiple-choice', question: 'Is theme usually directly stated?', options: ['Yes', 'No, you infer it', 'Always stated', 'In title'], correctAnswer: 'No, you infer it', hints: ['Figure it out', 'Infer']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is plot?', options: ['The message', 'What happens', 'The topic', 'The author'], correctAnswer: 'What happens', hints: ['Events', 'What happens']}
                ],
                activity: { type: 'interactive-practice', description: 'Theme analysis', instruction: 'Identify and articulate themes'}
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.ELA.RI.5.6 - Analyze multiple accounts',
                content: '<h3>Comparing Different Accounts</h3><p>The same event can be described differently depending on the author\'s perspective, purpose, and the type of text. A firsthand account is written by someone who experienced the event directly, while a secondhand account is written by someone who researched it. Compare how different authors present the same information - what do they emphasize? What do they leave out? Why might their accounts differ? Consider the author\'s purpose (to inform, persuade, or entertain) and their point of view. Analyzing multiple accounts helps you see different perspectives, understand bias, and form your own informed opinions. This critical thinking skill is essential for evaluating information in our media-rich world!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a firsthand account?', options: ['Written by researcher', 'Written by witness', 'Second source', 'Opinion'], correctAnswer: 'Written by witness', hints: ['Experienced it', 'Witness']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a secondhand account?', options: ['By witness', 'By researcher', 'Always false', 'Opinion only'], correctAnswer: 'By researcher', hints: ['Researched it', 'Researcher']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why might accounts of the same event differ?', options: ['All same', 'Different perspectives', 'One is wrong', 'No reason'], correctAnswer: 'Different perspectives', hints: ['Point of view', 'Perspectives']},
                  { id: 'q4', type: 'multiple-choice', question: 'What should you consider about an author?', options: ['Name only', 'Purpose and point of view', 'Age', 'Nothing'], correctAnswer: 'Purpose and point of view', hints: ['Why they wrote', 'Purpose']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is bias?', options: ['Facts only', 'Favoring one side', 'Being fair', 'Research'], correctAnswer: 'Favoring one side', hints: ['Prejudice', 'One-sided']},
                  { id: 'q6', type: 'multiple-choice', question: 'Why analyze multiple accounts?', options: ['Waste time', 'See different perspectives', 'Confuse yourself', 'Not useful'], correctAnswer: 'See different perspectives', hints: ['Multiple views', 'Perspectives']},
                  { id: 'q7', type: 'multiple-choice', question: 'What might authors emphasize differently?', options: ['Nothing', 'Different aspects', 'Everything same', 'Only facts'], correctAnswer: 'Different aspects', hints: ['Focus varies', 'Different parts']},
                  { id: 'q8', type: 'multiple-choice', question: 'Is critical thinking important?', options: ['No', 'Yes', 'Sometimes', 'Never'], correctAnswer: 'Yes', hints: ['Essential skill', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Compare accounts', instruction: 'Analyze different perspectives'}
              }
            ]
          },
          {
            id: 'ela-5th-2',
            title: 'Advanced Writing and Language',
            description: 'Write opinion pieces, informative texts, and narratives with well-developed ideas and sophisticated language. Students will use transitions, vary sentence structure, employ precise vocabulary, and demonstrate command of grammar conventions. Strong writing skills support success across all academic areas.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.W.5.1 - Opinion writing',
                content: '<h3>Persuasive Writing</h3><p>Effective opinion writing states a clear position, provides logical reasons supported by facts and details, and addresses counterarguments. Begin with a strong introduction that hooks readers and clearly states your opinion. Each body paragraph should present a distinct reason with specific evidence from credible sources. Use transitional words and phrases like "furthermore," "in addition," "however," and "consequently" to connect ideas smoothly. Acknowledge opposing viewpoints and explain why your position is stronger. Conclude by restating your opinion and leaving readers with a call to action or something to consider. Persuasive writing is powerful - it can change minds and inspire action!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What should the introduction include?', options: ['Conclusion', 'Hook and clear opinion', 'Random facts', 'Nothing'], correctAnswer: 'Hook and clear opinion', hints: ['Grab attention, state position', 'Hook and opinion']},
                  { id: 'q2', type: 'multiple-choice', question: 'What supports your reasons?', options: ['Opinions only', 'Facts and details', 'Guesses', 'Nothing'], correctAnswer: 'Facts and details', hints: ['Evidence', 'Facts']},
                  { id: 'q3', type: 'multiple-choice', question: 'What are counterarguments?', options: ['Your reasons', 'Opposing viewpoints', 'Facts', 'Conclusions'], correctAnswer: 'Opposing viewpoints', hints: ['Other side', 'Opposing']},
                  { id: 'q4', type: 'multiple-choice', question: 'What do transitions do?', options: ['Nothing', 'Connect ideas', 'Confuse', 'End writing'], correctAnswer: 'Connect ideas', hints: ['Link sentences', 'Connect']},
                  { id: 'q5', type: 'multiple-choice', question: 'What should each body paragraph have?', options: ['Random facts', 'One distinct reason with evidence', 'Questions', 'Opinions only'], correctAnswer: 'One distinct reason with evidence', hints: ['Focused reason', 'Reason + evidence']},
                  { id: 'q6', type: 'multiple-choice', question: 'Why address counterarguments?', options: ['Not needed', 'Strengthens your argument', 'Weakens argument', 'Confuses'], correctAnswer: 'Strengthens your argument', hints: ['Shows thorough thinking', 'Stronger']},
                  { id: 'q7', type: 'multiple-choice', question: 'What should the conclusion do?', options: ['Introduce new ideas', 'Restate opinion', 'Ask questions', 'Give up'], correctAnswer: 'Restate opinion', hints: ['Wrap up', 'Restate']},
                  { id: 'q8', type: 'multiple-choice', question: 'What makes sources credible?', options: ['Any source', 'Reliable and trustworthy', 'Random sites', 'Opinions'], correctAnswer: 'Reliable and trustworthy', hints: ['Trustworthy', 'Reliable']}
                ],
                activity: { type: 'interactive-practice', description: 'Persuasive writing', instruction: 'Write convincing opinion pieces'}
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.5.1 - Grammar conventions',
                content: '<h3>Advanced Grammar</h3><p>Mastering grammar conventions makes your writing clear and professional. Use perfect verb tenses correctly: present perfect ("I have eaten"), past perfect ("I had eaten"), future perfect ("I will have eaten"). Shift verb tenses appropriately when changing time frames. Use correlative conjunctions in pairs: either/or, neither/nor, both/and, not only/but also. Employ commas to separate introductory elements, set off parenthetical information, and before coordinating conjunctions in compound sentences. Use underlining, quotation marks, or italics for titles correctly. Recognize and correct inappropriate shifts in number or person. Strong grammar demonstrates mature writing skills!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is present perfect tense?', options: ['"I eat"', '"I have eaten"', '"I ate"', '"I will eat"'], correctAnswer: '"I have eaten"', hints: ['Have/has + past participle', 'Have eaten']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is a correlative conjunction pair?', options: ['And/but', 'Either/or', 'Because/so', 'If/then'], correctAnswer: 'Either/or', hints: ['Work in pairs', 'Either/or']},
                  { id: 'q3', type: 'multiple-choice', question: 'Where do commas go with introductory elements?', options: ['After them', 'Before them', 'Never', 'Everywhere'], correctAnswer: 'After them', hints: ['After introduction', 'After']},
                  { id: 'q4', type: 'multiple-choice', question: 'How do you punctuate book titles?', options: ['Nothing', 'Underline or italics', 'Quotes', 'Parentheses'], correctAnswer: 'Underline or italics', hints: ['Long works', 'Italics']},
                  { id: 'q5', type: 'multiple-choice', question: 'How do you punctuate short story titles?', options: ['Underline', 'Italics', 'Quotation marks', 'Nothing'], correctAnswer: 'Quotation marks', hints: ['Short works', 'Quotes']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is past perfect tense?', options: ['"I ate"', '"I have eaten"', '"I had eaten"', '"I eat"'], correctAnswer: '"I had eaten"', hints: ['Had + past participle', 'Had eaten']},
                  { id: 'q7', type: 'multiple-choice', question: 'What are parenthetical elements?', options: ['Essential info', 'Extra, non-essential info', 'Main idea', 'Title'], correctAnswer: 'Extra, non-essential info', hints: ['Can remove', 'Extra']},
                  { id: 'q8', type: 'multiple-choice', question: 'Should verb tenses stay consistent?', options: ['No', 'Yes, unless time changes', 'Never', 'Always change'], correctAnswer: 'Yes, unless time changes', hints: ['Consistent unless shifting time', 'Yes']}
                ],
                activity: { type: 'interactive-practice', description: 'Grammar practice', instruction: 'Apply advanced grammar rules'}
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-5th-1',
            title: 'Matter, States, and Conservation',
            description: 'Explore the properties of matter and its states (solid, liquid, gas). Students will understand that matter is conserved in chemical and physical changes, and describe the basic process of photosynthesis.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.5.1 - States of Matter',
                content: '<h3>Properties and States of Matter</h3><p>**Matter** is anything that has mass and takes up space. Matter exists in three common states: **solid** (definite shape and volume), **liquid** (definite volume but no definite shape), and **gas** (no definite shape or volume). The state depends on temperature and pressure, and a change in state (like melting or boiling) is a **physical change**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which state of matter fills its entire container?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctAnswer: 'Gas', hints: ['No definite shape or volume', 'Gas']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the total amount of space an object takes up?', options: ['Mass', 'Volume', 'Density', 'Weight'], correctAnswer: 'Volume', hints: ['Three-dimensional space', 'Volume']},
                  { id: 'q3', type: 'multiple-choice', question: 'When ice melts into water, the H₂O molecules:', options: ['Change identity', 'Move faster and spread apart', 'Move slower and stick together', 'Disappear'], correctAnswer: 'Move faster and spread apart', hints: ['Heat energy increases particle motion', 'Move faster']}
                ],
                activity: { type: 'states-of-matter-comparison', description: 'Observe the three states of water (ice, liquid water, steam).', instruction: 'Draw and label the particle arrangement for each state.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.5.2 - Physical vs. Chemical Change',
                content: '<h3>Physical and Chemical Changes</h3><p>A **physical change** is reversible and does not create a new substance (e.g., cutting paper, dissolving salt). A **chemical change** (or reaction) is often irreversible and creates a **new substance** with different properties (e.g., burning wood, rusting iron). Clues for a chemical change include: color change, temperature change (heat release/absorption), or the formation of a gas (bubbles) or a precipitate (solid).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is an example of a **chemical change**?', options: ['Melting ice', 'Dissolving sugar', 'Baking a cake', 'Cutting paper'], correctAnswer: 'Baking a cake', hints: ['New substance is formed', 'Baking a cake']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a visible sign that a chemical reaction might have occurred?', options: ['A change in shape', 'Change in color or production of bubbles', 'A change in volume', 'A change in weight'], correctAnswer: 'Change in color or production of bubbles', hints: ['Key indicators', 'New color/bubbles']},
                  { id: 'q3', type: 'multiple-choice', question: 'Is boiling water a chemical or physical change?', options: ['Chemical', 'Physical', 'Both', 'Neither'], correctAnswer: 'Physical', hints: ['Still H₂O, just gas now', 'Physical']}
                ],
                activity: { type: 'change-investigation', description: 'Perform two simple experiments: 1. Dissolve salt (physical). 2. Mix baking soda and vinegar (chemical).', instruction: 'Identify the evidence (e.g., bubbles) that occurred during the chemical change.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.5.3 - Law of Conservation of Mass',
                content: '<h3>Mass is Conserved</h3><p>The **Law of Conservation of Mass** states that in a closed system, the total **mass** of all the substances before a chemical or physical change (**reactants**) must equal the total mass of all the substances after the change (**products**). Mass is never created or destroyed, only rearranged. If 10 g of reactants are used, 10 g of products will be created.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If 20 grams of wood are burned, the ashes and smoke produced will weigh:', options: ['Less than 20 grams', 'More than 20 grams', 'Exactly 20 grams', 'Zero grams'], correctAnswer: 'Exactly 20 grams', hints: ['Mass is conserved (must account for gases)', 'Exactly 20 grams']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does the Law of Conservation of Mass tell us about matter?', options: ['It is created and destroyed easily', 'It is never created or destroyed', 'It changes weight with location', 'It only exists as a solid'], correctAnswer: 'It is never created or destroyed', hints: ['Cannot be made or lost', 'Never created or destroyed']},
                  { id: 'q3', type: 'multiple-choice', question: 'In a chemical reaction, the atoms are:', options: ['Destroyed', 'Created from nothing', 'Rearranged to form new substances', 'Changed into a new element'], correctAnswer: 'Rearranged to form new substances', hints: ['The process of the change', 'Rearranged']}
                ],
                activity: { type: 'conservation-demonstration', description: 'Mix salt and water in a sealed container on a scale, demonstrating that the mass remains constant before and after mixing/dissolving.', instruction: 'Explain why it is easier to demonstrate this law in a closed container.' }
              }
            ]
          },
          {
            id: 'science-5th-2',
            title: 'Ecosystems and Food Webs',
            description: 'Analyze the flow of energy in an ecosystem and understand the process of photosynthesis. Students will identify producers, consumers, and decomposers in a food web.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.5.4 - Photosynthesis',
                content: '<h3>How Plants Make Food</h3><p>**Photosynthesis** is the process by which **producers** (plants) use **sunlight** energy to convert **water** and **carbon dioxide** into **sugar** (food) and release **oxygen**. This process is the foundation of almost all life on Earth, as it converts light energy into chemical energy that fuels the food web and creates the air we breathe. It mainly takes place in the leaves.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What gas do plants take in for photosynthesis?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correctAnswer: 'Carbon Dioxide', hints: ['Needed from the air', 'Carbon Dioxide']},
                  { id: 'q2', type: 'multiple-choice', question: 'What two products are made by plants during photosynthesis?', options: ['Water and carbon dioxide', 'Sugar and oxygen', 'Heat and light', 'Soil and fertilizer'], correctAnswer: 'Sugar and oxygen', hints: ['Food and air', 'Sugar and oxygen']},
                  { id: 'q3', type: 'multiple-choice', question: 'What provides the initial energy for photosynthesis?', options: ['Heat from the ground', 'Water from the rain', 'Sunlight', 'Nutrients from the soil'], correctAnswer: 'Sunlight', hints: ['Source of energy', 'Sunlight']}
                ],
                activity: { type: 'photosynthesis-diagram', description: 'Draw and label the inputs (sunlight, water, CO₂) and outputs (sugar, O₂) of the photosynthesis process.', instruction: 'Explain why photosynthesis only occurs during the day.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.5.5 - Food Webs and Chains',
                content: '<h3>Tracing Energy Flow</h3><p>A **food chain** shows a single path of energy flow. A **food web** shows all the interconnected food chains in an ecosystem. Energy flows from **producers** → **consumers** (primary, secondary, tertiary). **Decomposers** (like bacteria) return nutrients to the soil. At each transfer level, most energy (about 90%) is lost as heat; only 10% transfers to the next level.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which organism is a **decomposer**?', options: ['Tree', 'Deer', 'Lion', 'Fungus (Mushroom)'], correctAnswer: 'Fungus (Mushroom)', hints: ['Breaks down dead matter', 'Fungus']},
                  { id: 'q2', type: 'multiple-choice', question: 'If a food web is complex, that ecosystem is likely:', options: ['Unstable', 'Simple', 'Biodiverse and stable', 'Collapsing'], correctAnswer: 'Biodiverse and stable', hints: ['More connections mean greater resilience', 'Biodiverse and stable']},
                  { id: 'q3', type: 'multiple-choice', question: 'In a food chain, the arrow always points toward the organism that:', options: ['Makes the food', 'Is a decomposer', 'Receives the energy', 'Is a plant'], correctAnswer: 'Receives the energy', hints: ['Direction of energy transfer', 'Receives the energy']}
                ],
                activity: { type: 'food-web-creation', description: 'Build a food web diagram showing at least two producers and three different consumers.', instruction: 'Explain why removing all the producers would cause the entire food web to collapse.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.5.6 - Matter Cycling in Ecosystems',
                content: '<h3>The Recycling of Matter</h3><p>Unlike energy, which flows through an ecosystem and is lost as heat, **matter** is recycled. The **Carbon Cycle** moves carbon between the atmosphere, living things, and the ground. The **Water Cycle** moves water. Decomposers are critical for the **Nutrient Cycle** (e.g., Nitrogen, Phosphorus), as they break down dead organisms, releasing essential elements back into the soil for producers to use again. This cycling ensures the ecosystem never runs out of necessary matter.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is an example of matter cycling?', options: ['Energy being lost as heat', 'Water moving from rain to river and back to air', 'A lion chasing a deer', 'A plant growing tall'], correctAnswer: 'Water moving from rain to river and back to air', hints: ['Matter being reused', 'Water cycle']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the most important role of decomposers in nutrient cycling?', options: ['Making their own food', 'Eating primary consumers', 'Releasing nutrients from dead matter back into the soil', 'Providing shelter'], correctAnswer: 'Releasing nutrients from dead matter back into the soil', hints: ['Recycling essential elements', 'Releasing nutrients']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why is it important that matter, like carbon and nitrogen, is cycled?', options: ['To make the planet hotter', 'To prevent the ecosystem from running out of essential elements', 'To stop animals from growing', 'To make the ocean salty'], correctAnswer: 'To prevent the ecosystem from running out of essential elements', hints: ['Sustaining life', 'Prevent running out']}
                ],
                activity: { type: 'carbon-cycle-game', description: 'Act out the movement of a carbon atom through the atmosphere, a plant, and an animal.', instruction: 'Explain how the burning of wood or fossil fuels affects the carbon cycle.' }
              }
            ]
          },
          {
            id: 'science-5th-3',
            title: 'Space and Astronomical Phenomena',
            description: 'Examine the relationship between the Earth, Moon, and Sun. Students will explain the causes of moon phases, eclipses, and tides, and investigate objects in the solar system.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.5.7 - Moon Phases',
                content: '<h3>The Changing Moon</h3><p>The **Moon** orbits the Earth, and the Earth orbits the Sun. The Moon does not produce its own light; we see it because it reflects sunlight. The **phases of the Moon** (e.g., full moon, new moon, crescent) are caused by the changing angles at which we view the Moon\'s sunlit surface as it orbits Earth. It takes about one month (29.5 days) for the Moon to complete one full cycle of phases.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What causes the phases of the Moon?', options: ['The Moon changing color', 'The Earth\'s shadow on the Moon', 'The changing angles of the Moon\'s sunlit surface as it orbits Earth', 'The Moon changing size'], correctAnswer: 'The changing angles of the Moon\'s sunlit surface as it orbits Earth', hints: ['Orbital position', 'Changing angles']},
                  { id: 'q2', type: 'multiple-choice', question: 'How long does it take for the Moon to complete one cycle of phases?', options: ['1 day', '7 days', '1 month', '1 year'], correctAnswer: '1 month', hints: ['Approx. 29.5 days', '1 month']},
                  { id: 'q3', type: 'multiple-choice', question: 'The Moon is visible because it reflects light from the:', options: ['Stars', 'Sun', 'Earth', 'Planets'], correctAnswer: 'Sun', hints: ['Its light source', 'Sun']}
                ],
                activity: { type: 'moon-phase-model', description: 'Use a lamp (Sun), a ball (Earth), and a small foam ball (Moon) to model the different phases.', instruction: 'Demonstrate the difference between a New Moon and a Full Moon.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.5.8 - Eclipses and Tides',
                content: '<h3>Eclipses and Ocean Tides</h3><p>An **eclipse** occurs when one celestial body blocks the light from another. A **solar eclipse** happens when the **Moon** passes between the Sun and Earth, blocking the Sun. A **lunar eclipse** happens when the **Earth** passes between the Sun and Moon, casting a shadow on the Moon. **Tides** (the rising and falling of sea levels) are caused primarily by the gravitational pull of the Moon and, to a lesser extent, the Sun.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which celestial body moves in front of the Sun during a **solar eclipse**?', options: ['Earth', 'Mars', 'The Moon', 'Jupiter'], correctAnswer: 'The Moon', hints: ['Blocks the sun\'s light', 'The Moon']},
                  { id: 'q2', type: 'multiple-choice', question: 'The primary cause of the Earth\'s ocean tides is the gravitational pull of the:', options: ['Sun', 'Jupiter', 'Moon', 'Earth itself'], correctAnswer: 'Moon', hints: ['Its proximity to Earth', 'Moon']},
                  { id: 'q3', type: 'multiple-choice', question: 'What occurs when the Earth passes between the Sun and the Moon?', options: ['Solar eclipse', 'New Moon', 'Lunar eclipse', 'High tide'], correctAnswer: 'Lunar eclipse', hints: ['Earth\'s shadow on the Moon', 'Lunar eclipse']}
                ],
                activity: { type: 'tide-demonstration', description: 'Draw a diagram showing the relative positions of the Sun, Earth, and Moon that cause Spring Tides (highest) and Neap Tides (lowest).', instruction: 'Explain why tides happen twice a day.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.5.9 - Objects in the Solar System',
                content: '<h3>Beyond the Planets</h3><p>Besides the Sun and planets, our solar system contains many other objects. **Asteroids** are small, rocky bodies that orbit the Sun, mostly in the **Asteroid Belt** between Mars and Jupiter. **Comets** are large chunks of ice and dust that orbit the Sun, creating a visible tail as they get close to the Sun. These objects provide clues about the early formation of our solar system.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What are small, rocky bodies that orbit the Sun, mainly found between Mars and Jupiter?', options: ['Comets', 'Moons', 'Asteroids', 'Stars'], correctAnswer: 'Asteroids', hints: ['Found in the Asteroid Belt', 'Asteroids']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which object is often described as a "dirty snowball" that develops a tail as it nears the sun?', options: ['Asteroid', 'Planet', 'Comet', 'Moon'], correctAnswer: 'Comet', hints: ['Made of ice and dust', 'Comet']},
                  { id: 'q3', type: 'multiple-choice', question: 'The main difference between a comet and an asteroid is:', options: ['Asteroids are bigger', 'Comets have tails of gas and dust, asteroids are rocky', 'Comets orbit planets', 'Asteroids are closer to the sun'], correctAnswer: 'Comets have tails of gas and dust, asteroids are rocky', hints: ['Composition and visible feature', 'Tails vs. rocky']}
                ],
                activity: { type: 'solar-system-research', description: 'Research the difference between a meteoroid, meteor, and meteorite.', instruction: 'Explain why a comet\'s tail always points away from the Sun.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-5th-1',
            title: 'U.S. History: Exploration and Founding',
            description: 'Explore early American history, including European exploration, the colonization of North America, the American Revolution, and the formation of the U.S. government.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.5.1 - European Exploration and Colonization',
                content: '<h3>Age of Exploration</h3><p>European countries, such as Spain, France, and England, explored and colonized North America seeking resources, land, and trade routes. This **exploration** had a devastating impact on Native American populations due to disease and conflict. The first successful English colony was **Jamestown**, established in 1607.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What was the first successful permanent English colony in North America?', options: ['Plymouth', 'Roanoke', 'Jamestown', 'Boston'], correctAnswer: 'Jamestown', hints: ['Established in 1607', 'Jamestown']},
                  { id: 'q2', type: 'multiple-choice', question: 'What was the major negative impact of European arrival on Native American populations?', options: ['New farming tools', 'Introduction of new diseases', 'New trade routes', 'More land'], correctAnswer: 'Introduction of new diseases', hints: ['Lack of immunity', 'New diseases']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which three European nations were the primary colonizers of North America?', options: ['China, Russia, Germany', 'Spain, France, England', 'Italy, Portugal, Greece', 'Netherlands, Sweden, Poland'], correctAnswer: 'Spain, France, England', hints: ['Key European powers', 'Spain, France, England']}
                ],
                activity: { type: 'colonial-motives', description: 'Research the three main motives for European exploration (Gold, Glory, God).', instruction: 'Explain why the French primarily settled near rivers and the English settled along the coast.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.5.2 - Causes and Events of the Revolution',
                content: '<h3>Road to Independence</h3><p>The colonies protested British policies, especially the practice of "**taxation without representation**." Events like the **Boston Massacre** and the **Boston Tea Party** increased tensions. The conflict eventually led to the signing of the **Declaration of Independence** in 1776, written by **Thomas Jefferson**, which established the U.S. as a free and sovereign nation.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The major colonial protest against the tax on tea was the:', options: ['Stamp Act', 'Boston Tea Party', 'Intolerable Acts', 'First Continental Congress'], correctAnswer: 'Boston Tea Party', hints: ['Protest involving tea destruction', 'Boston Tea Party']},
                  { id: 'q2', type: 'multiple-choice', question: 'What document officially declared the colonies free from Great Britain?', options: ['The Constitution', 'The Bill of Rights', 'The Declaration of Independence', 'The Articles of Confederation'], correctAnswer: 'The Declaration of Independence', hints: ['Signed July 4, 1776', 'Declaration of Independence']},
                  { id: 'q3', type: 'multiple-choice', question: 'The American Revolution was fought to secure the rights of:', options: ['The King', 'Parliament', 'Life, Liberty, and the pursuit of Happiness', 'Taxation for all'], correctAnswer: 'Life, Liberty, and the pursuit of Happiness', hints: ['Unalienable rights', 'Life, Liberty, Happiness']}
                ],
                activity: { type: 'declaration-timeline', description: 'Create a short timeline of key events leading up to the Revolution (e.g., Stamp Act → Boston Massacre → Tea Party → Declaration).', instruction: 'Explain what the phrase "consent of the governed" means.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.5.3 - Formation of the U.S. Government',
                content: '<h3>From Weak to Strong Government</h3><p>After the Revolution, the U.S. first tried to govern itself under the **Articles of Confederation**, which created a weak national government. Recognizing its flaws, leaders created the **U.S. Constitution** in 1787. This established a strong **Federal** government with three separate branches and a system of **Checks and Balances**, ensuring a stable republic.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What was the first, weak government document used after the Revolution?', options: ['The U.S. Constitution', 'The Bill of Rights', 'The Articles of Confederation', 'The Declaration of Independence'], correctAnswer: 'The Articles of Confederation', hints: ['Preceded the Constitution', 'Articles of Confederation']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which principle was implemented in the Constitution to prevent any one branch from becoming too powerful?', options: ['Federalism', 'Popular Sovereignty', 'Checks and Balances', 'Monarchy'], correctAnswer: 'Checks and Balances', hints: ['System of control', 'Checks and Balances']},
                  { id: 'q3', type: 'multiple-choice', question: 'The document that guarantees citizens their individual freedoms (e.g., speech, religion) is the:', options: ['Preamble', 'Bill of Rights', 'Treaty of Paris', 'Federalist Papers'], correctAnswer: 'Bill of Rights', hints: ['First ten amendments', 'Bill of Rights']}
                ],
                activity: { type: 'government-function-match', description: 'Match the Legislative, Executive, and Judicial Branches to their function (make, enforce, interpret).', instruction: 'Explain why the new government needed to be stronger than the one under the Articles of Confederation.' }
              }
            ]
          },
          {
            id: 'ss-5th-2',
            title: 'Westward Expansion and Sectionalism',
            description: 'Examine the motives and consequences of Westward Expansion. Analyze the growing tensions between the North and South that led to the Civil War.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.5.4 - Westward Expansion and Manifest Destiny',
                content: '<h3>Moving West</h3><p>**Westward Expansion** was the movement of settlers from the East Coast across the continent. It was driven by the idea of **Manifest Destiny**, the belief that the U.S. was destined to expand its dominion from sea to shining sea. Key events include the **Louisiana Purchase** (1803) and the California Gold Rush. This expansion led to conflict with Native American tribes and intensified the national debate over slavery.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What was the belief that the U.S. should expand across the entire continent?', options: ['Federalism', 'Republicanism', 'Manifest Destiny', 'Abolitionism'], correctAnswer: 'Manifest Destiny', hints: ['Belief in inevitable expansion', 'Manifest Destiny']},
                  { id: 'q2', type: 'multiple-choice', question: 'The vast territory purchased from France in 1803 was the:', options: ['Florida Purchase', 'Alaska Purchase', 'Louisiana Purchase', 'Gadsden Purchase'], correctAnswer: 'Louisiana Purchase', hints: ['Doubled the size of the U.S.', 'Louisiana Purchase']},
                  { id: 'q3', type: 'multiple-choice', question: 'A major consequence of Westward Expansion was increased conflict with:', options: ['British soldiers', 'French traders', 'Native American tribes', 'Mexican immigrants'], correctAnswer: 'Native American tribes', hints: ['Displacement and loss of land', 'Native American tribes']}
                ],
                activity: { type: 'expansion-map', description: 'Draw the original 13 colonies and the territory acquired by the Louisiana Purchase.', instruction: 'Explain why the discovery of gold encouraged more people to move west.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.5.5 - North vs. South (Sectionalism)',
                content: '<h3>The Growing Divide</h3><p>**Sectionalism** refers to the loyalty to one\'s region (North or South) rather than the country as a whole. The **North** developed an industrial economy based on factories and trade, while the **South** developed an agrarian economy based on cash crops like cotton and tobacco. This economic difference, combined with differing views on federal power, led to deep political and social divisions, particularly over the issue of slavery.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The economy of the North was mainly based on:', options: ['Agriculture and plantations', 'Mining for gold', 'Industry and factories', 'Fishing only'], correctAnswer: 'Industry and factories', hints: ['Industrial economy', 'Industry and factories']},
                  { id: 'q2', type: 'multiple-choice', question: 'The term for strong loyalty to one\'s own region instead of the country is:', options: ['Nationalism', 'Patriotism', 'Sectionalism', 'Federalism'], correctAnswer: 'Sectionalism', hints: ['Regional division', 'Sectionalism']},
                  { id: 'q3', type: 'multiple-choice', question: 'The Southern economy was dependent on which cash crop, leading to reliance on slave labor?', options: ['Wheat', 'Corn', 'Cotton', 'Rice'], correctAnswer: 'Cotton', hints: ['The major cash crop', 'Cotton']}
                ],
                activity: { type: 'sectional-economy-chart', description: 'Create a two-column chart contrasting the North\'s economy/population with the South\'s economy/labor system.', instruction: 'Explain why the South needed slaves more than the North did.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.5.6 - Causes of the Civil War',
                content: '<h3>The Inevitable Conflict</h3><p>The **Civil War** (1861-1865) was caused by four major issues: **Slavery** (the central moral and economic conflict), **States\' Rights** (who had final authority: federal or state government), **Sectionalism**, and the failure of political compromises. When Abraham Lincoln was elected, Southern states feared the end of slavery and decided to **secede** (form their own country), leading to war.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What was the central cause of the American Civil War?', options: ['Westward expansion', 'Slavery', 'The economy of the North', 'The price of sugar'], correctAnswer: 'Slavery', hints: ['The issue that divided the nation', 'Slavery']},
                  { id: 'q2', type: 'multiple-choice', question: 'The act of a state formally leaving the Union is called:', options: ['Federalism', 'Secession', 'Emancipation', 'Compromise'], correctAnswer: 'Secession', hints: ['Leaving the United States', 'Secession']},
                  { id: 'q3', type: 'multiple-choice', question: 'The Southern states believed that state governments should have more power than the federal government. This is the concept of:', options: ['Popular Sovereignty', 'States\' Rights', 'Federal Supremacy', 'Democracy'], correctAnswer: 'States\' Rights', hints: ['Conflict over authority', 'States\' Rights']}
                ],
                activity: { type: 'civil-war-debate-prep', description: 'Research two major causes of the war (Slavery and States\' Rights).', instruction: 'Explain why the election of Lincoln immediately led to secession.' }
              }
            ]
          },
          {
            id: 'ss-5th-3',
            title: 'The Civil War and Reconstruction',
            description: 'Analyze the key leaders and outcomes of the Civil War. Examine the goals and impact of Reconstruction.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.5.7 - Key Figures of the Civil War',
                content: '<h3>Leaders of the Conflict</h3><p>The Civil War involved major historical figures. **Abraham Lincoln** was the President of the Union (North). **Jefferson Davis** was the President of the Confederacy (South). **Ulysses S. Grant** was the main general for the Union, and **Robert E. Lee** was the main general for the Confederacy. Lincoln\'s leadership was crucial in keeping the Union together and ensuring the end of slavery.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Who was the President of the United States (Union) during the Civil War?', options: ['George Washington', 'Jefferson Davis', 'Ulysses S. Grant', 'Abraham Lincoln'], correctAnswer: 'Abraham Lincoln', hints: ['Union leader', 'Abraham Lincoln']},
                  { id: 'q2', type: 'multiple-choice', question: 'Who led the Confederate Army and surrendered at Appomattox?', options: ['Ulysses S. Grant', 'Robert E. Lee', 'Stonewall Jackson', 'Jefferson Davis'], correctAnswer: 'Robert E. Lee', hints: ['Confederate General', 'Robert E. Lee']},
                  { id: 'q3', type: 'multiple-choice', question: 'The **Emancipation Proclamation** (1863) was issued by Lincoln to:', options: ['End the war immediately', 'Free slaves in the Confederate states', 'Free all slaves in the U.S.', 'Start a new war'], correctAnswer: 'Free slaves in the Confederate states', hints: ['Wartime measure against the South', 'Free Confederate slaves']}
                ],
                activity: { type: 'leader-comparison-chart', description: 'Create a chart comparing the roles of Abraham Lincoln and Jefferson Davis.', instruction: 'Explain why the Emancipation Proclamation did not immediately free all slaves.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.5.8 - The Process of Reconstruction',
                content: '<h3>Rebuilding the Nation</h3><p>**Reconstruction** was the period after the Civil War (1865-1877) focused on readmitting the Southern states and integrating formerly enslaved people into society. Three key amendments were passed: **13th Amendment** (abolished slavery), **14th Amendment** (granted citizenship and equal protection), and **15th Amendment** (granted voting rights to African American men). This period was marked by progress and great conflict.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What was the period of rebuilding the South after the Civil War called?', options: ['The Great Migration', 'The Gold Rush', 'Reconstruction', 'The Civil Rights Movement'], correctAnswer: 'Reconstruction', hints: ['Post-war period', 'Reconstruction']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which amendment formally abolished slavery in the entire United States?', options: ['13th', '14th', '15th', '1st'], correctAnswer: '13th', hints: ['Ended chattel slavery', '13th Amendment']},
                  { id: 'q3', type: 'multiple-choice', question: 'The **14th Amendment** guaranteed:', options: ['The right to vote', 'Freedom of speech', 'Citizenship and equal protection', 'The right to bear arms'], correctAnswer: 'Citizenship and equal protection', hints: ['Defined citizenship', 'Citizenship and equal protection']}
                ],
                activity: { type: 'amendment-puzzle', description: 'Match the 13th, 14th, and 15th Amendments to their key provisions (slavery, citizenship, voting).', instruction: 'Explain why the 14th Amendment was needed even after the 13th Amendment was passed.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.5.9 - Failure of Reconstruction and Segregation',
                content: '<h3>Challenges After Reconstruction</h3><p>Despite the amendments, Reconstruction largely failed due to political resistance in the South. White Southerners passed **Jim Crow Laws**—state and local laws that enforced strict racial **segregation** (separation) in public life, including schools, transportation, and restaurants. These laws, along with violence and intimidation, severely limited the rights of African Americans, creating a system of inequality that lasted nearly a century.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What were the laws that enforced racial separation (segregation) in the South called?', options: ['Civil Rights Acts', 'Jim Crow Laws', 'Emancipation Acts', 'Slavery Codes'], correctAnswer: 'Jim Crow Laws', hints: ['Segregation laws', 'Jim Crow Laws']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does **segregation** mean?', options: ['Integration', 'Racial separation', 'Equal rights', 'Freedom of speech'], correctAnswer: 'Racial separation', hints: ['Required separation of races', 'Racial separation']},
                  { id: 'q3', type: 'multiple-choice', question: 'What was a major reason Reconstruction failed to achieve long-term equality?', options: ['Lack of interest from the North', 'The rise of Jim Crow laws and violence in the South', 'Too much voting', 'The economy was too strong'], correctAnswer: 'The rise of Jim Crow laws and violence in the South', hints: ['Resistance and legal barriers', 'Jim Crow and violence']}
                ],
                activity: { type: 'segregation-concept', description: 'Analyze a picture (e.g., separate water fountains) and discuss how Jim Crow laws created inequality.', instruction: 'Explain the difference between the goal of the 14th Amendment and the reality of Jim Crow.' }
              }
            ]
          }
        ]
      },
      '6th Grade': {
        'Math': [
          {
            id: 'math-6th-1',
            title: 'Ratios, Rates, and Proportional Relationships',
            description: 'Understand the concepts of ratios, rates, and unit rates. Students will use ratio and rate reasoning to solve real-world and mathematical problems, including those involving percents and proportional relationships. This is a foundational concept for algebra and higher-level math.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.6.RP.1 - Understand Ratios',
                content: '<h3>Introduction to Ratios</h3><p>A **ratio** is a comparison of two quantities. It can be written in three ways: $a:b$, $a$ to $b$, or $\frac{a}{b}$. For example, if you have 3 red marbles and 5 blue marbles, the ratio of red to blue is $3:5$. Ratios are used to scale recipes, compare data, and are the basis for understanding proportions. Remember that the order in a ratio matters! The ratio of blue to red marbles is $5:3$.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In a class, there are 12 girls and 10 boys. What is the ratio of girls to boys?', options: ['10:12', '12:10', '12:22', '10:22'], correctAnswer: '12:10', hints: ['The order matters', 'Girls first, then boys']},
                  { id: 'q2', type: 'fill-in-blank', question: 'If a recipe calls for 2 cups of flour for every 1 cup of sugar, the ratio of flour to sugar is $2:1$.', correctAnswer: '2:1', hints: ['Flour amount first', 'The ratio $2$ to $1$']},
                  { id: 'q3', type: 'multiple-choice', question: 'A basket has 4 apples and 7 oranges. What is the ratio of oranges to total fruit?', options: ['4:7', '7:4', '7:11', '4:11'], correctAnswer: '7:11', hints: ['Total fruit is $4+7=11$', 'Oranges compared to the sum']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Simplify the ratio $15:20$.', correctAnswer: '3:4', hints: ['Divide both numbers by their greatest common factor ($5$)', 'Divide by $5$']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which fraction correctly represents the ratio $5$ to $8$?', options: ['$\frac{8}{5}$', '$\frac{5}{8}$', '$\frac{1}{5}$', '$\frac{1}{8}$'], correctAnswer: '$\frac{5}{8}$', hints: ['First number is the numerator', '$\frac{\text{First}}{\text{Second}}$']},
                  { id: 'q6', type: 'multiple-choice', question: 'A team won 6 games and lost 3. What is the ratio of wins to losses?', options: ['3:6', '6:9', '6:3', '9:3'], correctAnswer: '6:3', hints: ['Wins first', 'Simplify to $2:1$']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If $3$ out of $15$ students like chocolate, what is the ratio of chocolate lovers to all students? (Simplified)', correctAnswer: '1:5', hints: ['Simplify $3:15$ by dividing by $3$', 'Divide by three']},
                  { id: 'q8', type: 'multiple-choice', question: 'If the ratio of dogs to cats is $4:1$, and there are 16 dogs, how many cats are there?', options: ['2', '3', '4', '8'], correctAnswer: '4', hints: ['Divide the number of dogs by $4$', '$16 \div 4$']},
                ],
                activity: { type: 'interactive-practice', description: 'Ratio Builder', instruction: 'Create and simplify ratios using visual objects.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.6.RP.2 - Understand Unit Rate',
                content: '<h3>Unit Rates and Unit Prices</h3><p>A **unit rate** is a ratio where the second quantity is $1$. For example, if you drive $120$ miles in $2$ hours, the rate is $\frac{120 \text{ miles}}{2 \text{ hours}}$. The unit rate is found by dividing: $120 \div 2 = 60$. So, the unit rate is $60$ miles per $1$ hour (or $60$ mph). **Unit price** is a special type of unit rate that tells you the cost per one unit (like cost per ounce or per item). Finding the unit rate helps you compare different values and solve real-world problems, such as finding the best deal at the grocery store.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'A car travels $250$ miles in $5$ hours. What is the unit rate in miles per hour (mph)?', correctAnswer: '50', hints: ['Divide $250$ by $5$', '$250/5$']},
                  { id: 'q2', type: 'multiple-choice', question: 'If $3$ pounds of apples cost $\$6.00$, what is the unit price per pound?', options: ['\$2.00', '\$3.00', '\$18.00', '\$0.50'], correctAnswer: '\$2.00', hints: ['Divide total cost by total pounds', '$6 \div 3$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Mary earned $\$45$ for $5$ hours of work. What is her hourly unit rate?', correctAnswer: '9', hints: ['Divide total earnings by hours worked', '$45/5$']},
                  { id: 'q4', type: 'multiple-choice', question: 'A $12$ oz box of cereal costs $\$4.80$. What is the unit price per ounce?', options: ['\$0.40', '\$0.48', '\$4.00', '\$0.20'], correctAnswer: '\$0.40', hints: ['Divide cost by ounces', '$4.80 \div 12$']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which is a better deal: 4 pens for $\$8$ or 3 pens for $\$9$?', options: ['4 pens for \$8', '3 pens for \$9', 'They are the same', 'Cannot tell'], correctAnswer: '4 pens for \$8', hints: ['Unit rate for $4$ pens is $\$2$ each; unit rate for $3$ pens is $\$3$ each', 'Best deal is cheapest unit price']},
                  { id: 'q6', type: 'fill-in-blank', question: 'A machine can print $300$ pages in $6$ minutes. What is the unit rate in pages per minute?', correctAnswer: '50', hints: ['Divide pages by minutes', '$300 \div 6$']},
                  { id: 'q7', type: 'multiple-choice', question: 'The rate is 70 beats per 1 minute. What is the unit rate?', options: ['70 beats/min', '1 beat/70 min', '70 min/beat', '1/70 beats/min'], correctAnswer: '70 beats/min', hints: ['Unit rate has a denominator of 1', '70 beats per minute']},
                  { id: 'q8', type: 'fill-in-blank', question: 'A marathon runner runs $26$ miles in $4$ hours. What is the unit rate in miles per hour?', correctAnswer: '6.5', hints: ['Divide $26$ by $4$', '$26 \div 4$']},
                ],
                activity: { type: 'interactive-practice', description: 'Unit Rate Calculator', instruction: 'Solve unit rate problems for speed, price, and work.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.6.RP.3 - Percent Applications',
                content: '<h3>Using Percents</h3><p>A **percent** is a ratio out of $100$. The word "percent" means "per one hundred." We use the percent symbol $(\%)$ to represent it. To convert a percent to a fraction, write the number over $100$: $75\% = \frac{75}{100} = \frac{3}{4}$. To convert a percent to a decimal, divide by $100$ (move the decimal point two places to the left): $75\% = 0.75$. You can use proportions to solve problems involving percents, such as finding a percentage of a number or a sale price. Understanding percents is key to dealing with taxes, discounts, and interest.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Convert $30\%$ to a decimal.', correctAnswer: '0.30 or 0.3', hints: ['Divide by $100$ or move decimal left two places', '0.3']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is $50\%$ of $80$?', options: ['20', '30', '40', '50'], correctAnswer: '40', hints: ['Multiply $0.50 \times 80$', 'Half of $80$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Convert $\frac{1}{4}$ to a percent.', correctAnswer: '25%', hints: ['$\frac{1}{4} = \frac{25}{100}$', 'Divide $1 \div 4$ and multiply by $100$']},
                  { id: 'q4', type: 'multiple-choice', question: 'If a $\$200$ bike is on sale for $10\%$ off, how much is the discount?', options: ['\$10', '\$20', '\$180', '\$190'], correctAnswer: '\$20', hints: ['Multiply $0.10 \times 200$', 'Discount amount']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is $25\%$ of $60$?', correctAnswer: '15', hints: ['$\frac{1}{4}$ of $60$', '$0.25 \times 60$']},
                  { id: 'q6', type: 'multiple-choice', question: 'Convert $0.05$ to a percent.', options: ['50%', '5%', '0.5%', '500%'], correctAnswer: '5%', hints: ['Multiply by $100$ or move decimal right two places', 'Five percent']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If $15$ out of $50$ students play soccer, what percent play soccer?', correctAnswer: '30%', hints: ['$\frac{15}{50} = \frac{30}{100}$', 'Divide $15 \div 50$ and multiply by $100$']},
                  { id: 'q8', type: 'multiple-choice', question: 'A $\$50$ shirt has a $20\%$ discount. What is the final sale price?', options: ['\$10', '\$30', '\$40', '\$45'], correctAnswer: '\$40', hints: ['Discount is $\$10$, so $\$50 - \$10$', 'Find $80\%$ of $\$50$']},
                ],
                activity: { type: 'interactive-practice', description: 'Percent Converter', instruction: 'Practice converting between fractions, decimals, and percents.' }
              }
            ]
          },
          {
            id: 'math-6th-2',
            title: 'The Number System',
            description: 'Apply and extend previous understandings of multiplication and division to divide fractions by fractions. Compute fluently with multi-digit numbers and find common factors and multiples. Apply and extend previous understandings of numbers to the system of rational numbers.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.6.NS.1 - Division of Fractions',
                content: '<h3>Dividing Fractions</h3><p>To divide fractions, we use the rule: **Keep-Change-Flip**. Keep the first fraction, change the operation to multiplication, and flip (find the reciprocal of) the second fraction. For example, $\frac{1}{2} \div \frac{1}{4}$ becomes $\frac{1}{2} \times \frac{4}{1} = \frac{4}{2} = 2$. Division by a fraction answers the question: "How many times does the divisor fraction fit into the dividend fraction?" This is useful for scaling recipes, portioning food, and many other real-world tasks.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is $\frac{2}{3} \div \frac{1}{6}$?', correctAnswer: '4', hints: ['$\frac{2}{3} \times \frac{6}{1} = \frac{12}{3}$', 'Keep-Change-Flip: $\frac{2}{3} \times 6$']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is $\frac{3}{4} \div \frac{1}{2}$?', options: ['$\frac{1}{2}$', '$\frac{3}{8}$', '$\frac{3}{2}$', '$\frac{4}{6}$'], correctAnswer: '$\frac{3}{2}$', hints: ['$\frac{3}{4} \times \frac{2}{1} = \frac{6}{4}$', 'Simplify to $1 \frac{1}{2}$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is $5 \div \frac{1}{3}$?', correctAnswer: '15', hints: ['$5 \times \frac{3}{1}$', 'How many thirds in $5$ whole?']},
                  { id: 'q4', type: 'multiple-choice', question: 'A chef has $\frac{3}{4}$ of a pound of sugar. A recipe needs $\frac{1}{8}$ of a pound. How many recipes can he make?', options: ['3', '4', '6', '8'], correctAnswer: '6', hints: ['$\frac{3}{4} \div \frac{1}{8} = \frac{3}{4} \times \frac{8}{1}$', 'Multiply $\frac{3}{4} \times 8$']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is $\frac{7}{8} \div \frac{7}{16}$?', correctAnswer: '2', hints: ['$\frac{7}{8} \times \frac{16}{7} = \frac{112}{56}$', 'Simplify the reciprocal multiplication']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is the reciprocal of $\frac{5}{9}$?', options: ['$\frac{5}{9}$', '$\frac{9}{5}$', '$\frac{1}{5}$', '$-\frac{5}{9}$'], correctAnswer: '$\frac{9}{5}$', hints: ['Flip the fraction', 'Numerator becomes denominator']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If you have $2 \\frac{1}{2}$ yards of fabric and each shirt needs $\\frac{1}{2}$ yard, how many shirts can you make?', correctAnswer: '5', hints: ['Convert $2 \\frac{1}{2}$ to $\\frac{5}{2}$. $\\frac{5}{2} \\div \\frac{1}{2}$', 'Keep-Change-Flip: $\\frac{5}{2} \\times 2$']},
                  { id: 'q8', type: 'multiple-choice', question: 'When you divide $10$ by $\frac{1}{5}$, the result is:', options: ['$\frac{1}{50}$', '$\frac{1}{2}$', '$2$', '$50$'], correctAnswer: '50', hints: ['$10 \times 5$', 'Result is larger because dividing by a small fraction']},
                ],
                activity: { type: 'interactive-practice', description: 'Fraction Division Models', instruction: 'Use visual models to solve fraction division problems.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.6.NS.4 - GCF and LCM',
                content: '<h3>Greatest Common Factor and Least Common Multiple</h3><p>The **Greatest Common Factor (GCF)** is the largest number that divides exactly into two or more numbers. We use it to simplify fractions. To find the GCF of $12$ and $18$: Factors of $12$ are $\{1, 2, 3, 4, 6, 12\}$. Factors of $18$ are $\{1, 2, 3, 6, 9, 18\}$. The GCF is $\mathbf{6}$. The **Least Common Multiple (LCM)** is the smallest non-zero number that is a multiple of two or more numbers. We use it to add or subtract fractions. To find the LCM of $4$ and $6$: Multiples of $4$ are $\{4, 8, 12, 16, 20, 24...\}$. Multiples of $6$ are $\{6, 12, 18, 24...\}$. The LCM is $\mathbf{12}$.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is the GCF of $10$ and $15$?', correctAnswer: '5', hints: ['Largest number that divides both', 'Factors of $10$: $1, 2, 5, 10$; Factors of $15$: $1, 3, 5, 15$']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the LCM of $3$ and $5$?', options: ['3', '5', '15', '30'], correctAnswer: '15', hints: ['Smallest number both divide into', 'Multiples of $3$: $3, 6, 9, 12, 15...$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is the GCF of $24$ and $36$?', correctAnswer: '12', hints: ['Largest factor', 'Both divide by $12$']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is the LCM of $8$ and $12$?', options: ['4', '12', '24', '96'], correctAnswer: '24', hints: ['Smallest common multiple', 'Multiples of $12$: $12, 24, 36...$']},
                  { id: 'q5', type: 'multiple-choice', question: 'The GCF is used to:', options: ['Find common denominators', 'Simplify fractions', 'Multiply fractions', 'Divide fractions'], correctAnswer: 'Simplify fractions', hints: ['Divide numerator and denominator by GCF', 'Reduce fractions']},
                  { id: 'q6', type: 'fill-in-blank', question: 'What is the GCF of $7$ and $11$?', correctAnswer: '1', hints: ['Prime numbers only have $1$ as a common factor', '1']},
                  { id: 'q7', type: 'multiple-choice', question: 'The LCM is used to:', options: ['Multiply numbers', 'Divide numbers', 'Find common denominators', 'Simplify ratios'], correctAnswer: 'Find common denominators', hints: ['Essential for adding/subtracting unlike fractions', 'Common denominator']},
                  { id: 'q8', type: 'fill-in-blank', question: 'What is the LCM of $2, 4,$ and $8$?', correctAnswer: '8', hints: ['Multiples of $8$: $8, 16, 24...$', 'Smallest multiple']},
                ],
                activity: { type: 'interactive-practice', description: 'GCF/LCM Solver', instruction: 'Practice finding the GCF and LCM of various number pairs.' }
              }
            ]
          },
          {
            id: 'math-6th-3',
            title: 'Expressions and Equations',
            description: 'Apply and extend previous understandings of arithmetic to algebraic expressions. Students will write, evaluate, and simplify expressions, solve one-variable equations and inequalities, and use variables to represent numbers in real-world problems.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.6.EE.1 - Write and Evaluate Expressions',
                content: '<h3>Expressions and Variables</h3><p>An **expression** is a mathematical phrase that can contain numbers, operations, and variables. A **variable** (like $x$ or $y$) is a letter that represents an unknown number. To **evaluate** an expression, you substitute the given value for the variable and perform the operations. For example, to evaluate $2x + 5$ when $x=3$, substitute $3$: $2(3) + 5 = 6 + 5 = 11$. Remember the order of operations (**PEMDAS** - Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) when evaluating.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Evaluate $3y - 4$ when $y=5$.', correctAnswer: '11', hints: ['$3(5) - 4$', '$15 - 4$']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which algebraic expression represents "four less than twice a number $n$"?', options: ['$4 - 2n$', '$2n - 4$', '$\frac{n}{2} - 4$', '$4n - 2$'], correctAnswer: '$2n - 4$', hints: ['Twice a number is $2n$', 'Less than means subtract $4$ from $2n$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Evaluate $x^2 + 1$ when $x=6$.', correctAnswer: '37', hints: ['$6^2 + 1$', '$36 + 1$']},
                  { id: 'q4', type: 'multiple-choice', question: 'In the expression $5x + 7$, what is the coefficient?', options: ['5', 'x', '7', '$5x$'], correctAnswer: '5', hints: ['The number multiplied by the variable', 'Number next to $x$']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Evaluate $10 - (p+2)$ when $p=3$.', correctAnswer: '5', hints: ['$10 - (3+2)$', '$10 - 5$']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which term in $3x + 8$ is the constant?', options: ['$3x$', '$3$', '$x$', '$8$'], correctAnswer: '8', hints: ['The term without a variable', 'The number alone']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Write the expression for "the sum of a number $k$ and $9$".', correctAnswer: '$k+9$', hints: ['Sum means addition', '$k$ plus $9$']},
                  { id: 'q8', type: 'multiple-choice', question: 'Evaluate $\frac{m}{3} + 4$ when $m=12$.', options: ['7', '8', '12', '16'], correctAnswer: '8', hints: ['$\frac{12}{3} + 4$', '$4+4$']},
                ],
                activity: { type: 'interactive-practice', description: 'Expression Evaluator', instruction: 'Practice substituting values to evaluate algebraic expressions.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.6.EE.7 - Solve Equations',
                content: '<h3>Solving One-Step Equations</h3><p>An **equation** is a statement that two expressions are equal, usually containing an equal sign ($=$). The goal is to find the value of the variable that makes the equation true. To solve, you use **inverse operations** (opposites) to isolate the variable. Addition and subtraction are inverse operations: to solve $x + 5 = 12$, subtract $5$ from both sides. Multiplication and division are inverse operations: to solve $3x = 15$, divide both sides by $3$. Always perform the same operation to both sides to keep the equation balanced!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Solve for $x$: $x + 7 = 15$.', correctAnswer: '8', hints: ['Subtract $7$ from both sides', '$15 - 7$']},
                  { id: 'q2', type: 'multiple-choice', question: 'Solve for $y$: $y - 10 = 25$.', options: ['15', '25', '35', '50'], correctAnswer: '35', hints: ['Add $10$ to both sides', '$25 + 10$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Solve for $m$: $4m = 28$.', correctAnswer: '7', hints: ['Divide both sides by $4$', '$28 \div 4$']},
                  { id: 'q4', type: 'multiple-choice', question: 'Solve for $p$: $\frac{p}{5} = 6$.', options: ['11', '1', '30', '56'], correctAnswer: '30', hints: ['Multiply both sides by $5$', '$6 \times 5$']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What operation is the inverse of addition?', correctAnswer: 'Subtraction', hints: ['The opposite operation', 'Take away']},
                  { id: 'q6', type: 'multiple-choice', question: 'Solve for $k$: $k + 3.5 = 7.5$.', options: ['4', '11', '10.5', '3.5'], correctAnswer: '4', hints: ['Subtract $3.5$ from both sides', '$7.5 - 3.5$']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Solve for $w$: $15 = 3w$.', correctAnswer: '5', hints: ['Divide both sides by $3$', '$15/3$']},
                  { id: 'q8', type: 'multiple-choice', question: 'To solve $x - \frac{1}{4} = \frac{3}{4}$, you should:', options: ['Subtract $\frac{3}{4}$', 'Add $\frac{1}{4}$', 'Multiply by $4$', 'Divide by $3$'], correctAnswer: 'Add $\frac{1}{4}$', hints: ['Inverse of subtraction', 'Add the fraction']},
                ],
                activity: { type: 'interactive-practice', description: 'One-Step Equation Solver', instruction: 'Practice solving for variables in one-step equations.' }
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-6th-1',
            title: 'Literary Analysis and Structure',
            description: 'Analyze how a particular sentence, chapter, scene, or stanza fits into the overall structure of a text. Determine the meaning of words and phrases, including figurative and connotative meanings. Analyze how a plot unfolds and how setting influences the plot.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.6.5 - Analyze Text Structure',
                content: '<h3>Analyzing Story and Text Structure</h3><p>**Structure** refers to how a text is organized. In literature, structure includes the plot (sequence of events), chapters, and stanzas. How an author orders events (e.g., flashback, foreshadowing, parallel plots) impacts the story. In non-fiction, common structures include problem/solution, compare/contrast, cause/effect, and chronological order. Analyzing structure helps you understand the author\'s choices and their effect on the reader. For example, a **flashback** provides background information and context, while **foreshadowing** builds suspense.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the purpose of a chapter break in a novel?', options: ['To confuse the reader', 'To organize the plot and control pacing', 'To show the author is tired', 'To save paper'], correctAnswer: 'To organize the plot and control pacing', hints: ['Helps manage the length and flow of the narrative', 'Organization and pacing']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which literary device involves an interruption in the sequence of events to relate an event from an earlier time?', options: ['Foreshadowing', 'Flashback', 'Climax', 'Resolution'], correctAnswer: 'Flashback', hints: ['Looking back in time', 'Flashback']},
                  { id: 'q3', type: 'multiple-choice', question: 'In informational text, if the author describes a conflict and then how it was fixed, what structure is used?', options: ['Compare/contrast', 'Chronological', 'Problem/solution', 'Cause/effect'], correctAnswer: 'Problem/solution', hints: ['Identifies a difficulty and its fix', 'Problem and solution']},
                  { id: 'q4', type: 'fill-in-blank', question: 'The use of hints or clues to suggest events that will occur later in the story is called _________.', correctAnswer: 'Foreshadowing', hints: ['Future hints', 'Building suspense']},
                  { id: 'q5', type: 'multiple-choice', question: 'How does setting often influence the plot?', options: ['It has no impact', 'It always causes the main conflict', 'It can create mood, conflicts, or restrict actions', 'It only describes the characters'], correctAnswer: 'It can create mood, conflicts, or restrict actions', hints: ['Setting is essential for tone and action', 'Setting impact']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a poem is divided into four-line groups, each group is called a:', options: ['Line', 'Paragraph', 'Stanza', 'Chapter'], correctAnswer: 'Stanza', hints: ['Groups of lines in poetry', 'Poetry grouping']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The pattern of action that occurs in a story is called the _________.', correctAnswer: 'Plot', hints: ['Sequence of events', 'What happens']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the purpose of chronological order in a non-fiction text?', options: ['To compare ideas', 'To explain a topic', 'To organize events by time', 'To solve a problem'], correctAnswer: 'To organize events by time', hints: ['Time order', 'By time']},
                ],
                activity: { type: 'interactive-practice', description: 'Story Plot Sequencer', instruction: 'Rearrange plot events and identify the corresponding structural element (flashback, climax, etc.).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.6.4 - Figurative and Connotative Language',
                content: '<h3>Figurative and Connotative Meaning</h3><p>**Figurative language** (like metaphors, similes, and personification) is language that is not meant to be taken literally, but is used to create a vivid image or convey an idea. **Connotative meaning** refers to the emotional associations tied to a word, beyond its dictionary definition (**denotative meaning**). For example, "home" (denotation: a place where one lives) has a positive connotation (warmth, security), while "house" is more neutral. Authors use connotative language to affect the reader\'s mood and influence their judgment. Understanding both helps you read deeply.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What kind of language is used in the phrase "The lightning danced across the sky"?', options: ['Literal', 'Connotative', 'Figurative', 'Denotative'], correctAnswer: 'Figurative', hints: ['Lightning cannot literally dance', 'Not literal']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The dictionary definition of a word is its _________ meaning.', correctAnswer: 'Denotative', hints: ['Literal, dictionary definition', 'Dictionary definition']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which word has a more positive connotation: "childish" or "youthful"?', options: ['Childish', 'Youthful', 'Both', 'Neither'], correctAnswer: 'Youthful', hints: ['"Childish" suggests immaturity; "youthful" suggests energy and vitality', 'Positive association']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which figurative language is used: "The math problem was a puzzle I couldn\'t solve"?', options: ['Simile', 'Personification', 'Metaphor', 'Hyperbole'], correctAnswer: 'Metaphor', hints: ['Direct comparison without "like" or "as"', 'Direct comparison']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The phrase "It cost an arm and a leg" is an _________ that means the item was very expensive.', correctAnswer: 'Idiom', hints: ['A phrase not to be taken literally', 'Common saying']},
                  { id: 'q6', type: 'multiple-choice', question: 'In the sentence "The old truck groaned as it climbed the hill," what figurative language is used?', options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'], correctAnswer: 'Personification', hints: ['Giving human sounds to an inanimate object', 'Human quality']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The emotional association a word carries is its _________ meaning.', correctAnswer: 'Connotative', hints: ['Feeling or association', 'Emotional association']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which figurative device uses exaggeration for emphasis?', options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'], correctAnswer: 'Hyperbole', hints: ['Overstatement', 'Exaggeration']},
                ],
                activity: { type: 'interactive-practice', description: 'Connotation Sorter', instruction: 'Sort words based on whether their connotation is positive, negative, or neutral.' }
              }
            ]
          },
          {
            id: 'ela-6th-2',
            title: 'Informational Text and Argumentation',
            description: 'Analyze how a text makes arguments using evidence. Students will trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not. They will compare and contrast informational texts to find different perspectives.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RI.6.8 - Trace and Evaluate Arguments',
                content: '<h3>Tracing and Evaluating Arguments</h3><p>In argumentative or persuasive writing, an **argument** is a position an author takes. The main position is the **claim**. The author supports this claim with **reasons** and **evidence**. Reasons explain *why* the claim is true, and evidence (facts, statistics, examples) provides *proof* for the reasons. To evaluate an argument, ask: "Is the claim clear? Are the reasons logical? Is the evidence sufficient and relevant?" A strong argument has valid reasons and compelling evidence. A weak argument may rely on faulty logic or irrelevant evidence.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the main position an author takes in an argumentative text?', options: ['Reason', 'Evidence', 'Claim', 'Fact'], correctAnswer: 'Claim', hints: ['The main idea being argued', 'The author\'s stance']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Facts and statistics used to support a reason are called _________.', correctAnswer: 'Evidence', hints: ['Proof', 'Support']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which question helps evaluate the sufficiency of evidence?', options: ['Is the evidence true?', 'Is the evidence relevant?', 'Is there enough evidence?', 'Is the evidence fun?'], correctAnswer: 'Is there enough evidence?', hints: ['Sufficiency means amount', 'Enough proof?']},
                  { id: 'q4', type: 'multiple-choice', question: 'A statement that can be proven true is a:', options: ['Opinion', 'Claim', 'Fact', 'Reason'], correctAnswer: 'Fact', hints: ['Can be verified', 'Factual statement']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What connects the claim to the evidence by explaining *why* the claim is true?', correctAnswer: 'Reason', hints: ['The *why*', 'Rationale']},
                  { id: 'q6', type: 'multiple-choice', question: 'An argument that makes generalizations based on too little evidence is considered:', options: ['Strong', 'Valid', 'Logical', 'Weak'], correctAnswer: 'Weak', hints: ['Lacks sufficient proof', 'Not enough evidence']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If a claim is that "School should start later," what is a piece of supporting evidence?', correctAnswer: 'Student grades improve with more sleep', hints: ['Needs to be a verifiable fact', 'Fact to support']},
                  { id: 'q8', type: 'multiple-choice', question: 'A sound argument must be supported by:', options: ['Feelings and beliefs', 'Reasons and evidence', 'Personal stories only', 'Exaggeration'], correctAnswer: 'Reasons and evidence', hints: ['Required for a strong argument', 'Logical support']},
                ],
                activity: { type: 'interactive-practice', description: 'Argument Dissector', instruction: 'Identify the claim, reasons, and evidence in a short argumentative passage.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RI.6.6 - Author\'s Purpose and Point of View',
                content: '<h3>Analyzing Perspective and Purpose</h3><p>An author\'s **point of view** is their attitude or outlook on a topic. It can be objective (impartial, balanced) or subjective (personal, biased). The **author\'s purpose** is their reason for writing: to **P**ersuade, **I**nform, or **E**ntertain (PIE). In informational texts, the purpose is often to inform, but an author may subtly try to persuade you by emphasizing certain facts or using connotative language. Analyzing a text means recognizing the author\'s choices, distinguishing their perspective from your own, and judging if their purpose has led to any bias in the content.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If an author presents facts without taking a side, their point of view is likely:', options: ['Biased', 'Subjective', 'Objective', 'Persuasive'], correctAnswer: 'Objective', hints: ['Neutral and impartial', 'Unbiased']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which is NOT one of the primary author\'s purposes (PIE)?', options: ['Persuade', 'Inform', 'Enlighten', 'Entertain'], correctAnswer: 'Enlighten', hints: ['Enlighten is a form of inform/persuade', 'PIE: Persuade, Inform, Entertain']},
                  { id: 'q3', type: 'multiple-choice', question: 'An author who uses loaded words and emotional language is likely trying to:', options: ['Inform', 'Persuade', 'Entertain', 'Report facts'], correctAnswer: 'Persuade', hints: ['Influence opinion', 'Convince the reader']},
                  { id: 'q4', type: 'fill-in-blank', question: 'When an author favors one side or opinion over another, they are showing _________.', correctAnswer: 'Bias', hints: ['Prejudice or preference', 'Partiality']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the most common purpose of a historical textbook?', options: ['Persuade', 'Inform', 'Entertain', 'Narrate'], correctAnswer: 'Inform', hints: ['To teach facts and information', 'To teach']},
                  { id: 'q6', type: 'fill-in-blank', question: 'If a text is written in the first person ("I," "me"), the point of view is _________.', correctAnswer: 'Subjective', hints: ['Based on personal feelings', 'Personal experience']},
                  { id: 'q7', type: 'multiple-choice', question: 'To distinguish your point of view from the author\'s, you must first:', options: ['Agree with the author', 'Ignore the text', 'Identify the author\'s view', 'Write your own opinion'], correctAnswer: 'Identify the author\'s view', hints: ['Know their stance to compare', 'Identify theirs']},
                  { id: 'q8', type: 'fill-in-blank', question: 'An autobiography is most likely written to $\text{Inform and} \text{ _________}$.', correctAnswer: 'Entertain', hints: ['Tells a story', 'Enjoyment']},
                ],
                activity: { type: 'interactive-practice', description: 'Purpose and Bias Checker', instruction: 'Read short excerpts and determine the author\'s primary purpose and potential bias.' }
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-6th-1',
            title: 'Earth Systems and Plate Tectonics',
            description: 'Explore the Earth\'s systems (geosphere, hydrosphere, atmosphere, biosphere) and how they interact. Students will analyze evidence for plate tectonics and explain how internal processes (convection) lead to earthquakes and volcanoes.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.6.ESS.2 - Earth System Interactions',
                content: '<h3>The Four Spheres of Earth</h3><p>The Earth is composed of four major interacting systems: the **Geosphere** (land, rock, mantle), the **Hydrosphere** (water in all forms), the **Atmosphere** (air, weather), and the **Biosphere** (living things). These systems are constantly exchanging energy and matter. For example, a hurricane (Atmosphere/Hydrosphere) causes coastal erosion (Geosphere) and displaces wildlife (Biosphere).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which sphere includes all the mountains, rocks, and Earth\'s inner core?', options: ['Atmosphere', 'Geosphere', 'Biosphere', 'Hydrosphere'], correctAnswer: 'Geosphere', hints: ['The solid Earth', 'Geo- means Earth']},
                  { id: 'q2', type: 'multiple-choice', question: 'The process of a tree taking in carbon dioxide is an interaction between the Biosphere and the:', options: ['Geosphere', 'Atmosphere', 'Hydrosphere', 'Lithosphere'], correctAnswer: 'Atmosphere', hints: ['Plants and air/gas', 'Atmosphere']},
                  { id: 'q3', type: 'fill-in-blank', question: 'All living organisms, from bacteria to elephants, are part of the _________.', correctAnswer: 'Biosphere', hints: ['Bio- means life', 'Life sphere']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which interaction best describes rain falling into a lake?', options: ['Bio-Geo', 'Geo-Atm', 'Atm-Hyd', 'Hyd-Bio'], correctAnswer: 'Atm-Hyd', hints: ['Water from the air to water on land', 'Atmosphere to Hydrosphere']},
                  { id: 'q5', type: 'multiple-choice', question: 'Clouds, wind, and weather occur primarily within the:', options: ['Hydrosphere', 'Biosphere', 'Atmosphere', 'Geosphere'], correctAnswer: 'Atmosphere', hints: ['Air and gas layer', 'Atmosphere']},
                ],
                activity: { type: 'system-diagram', description: 'Draw a diagram showing at least two interactions between the four Earth systems.', instruction: 'Label the parts of the system involved in the water cycle.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.6.ESS.1 - Plate Tectonics Evidence',
                content: '<h3>Evidence for Plate Tectonics</h3><p>The theory of **Plate Tectonics** states that the Earth\'s outer layer is made of moving plates. Evidence includes: the **fit of continents** (like puzzle pieces), matching **fossil** records across different continents (e.g., *Glossopteris*), matching **rock types and mountain chains** on separate continents, and the distribution of **earthquakes and volcanoes** along plate boundaries. This evidence proves continents move over geologic time (**Continental Drift**).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The theory that continents slowly move over Earth\'s surface is called:', options: ['Erosion', 'Plate Tectonics', 'The Big Bang', 'Seafloor Spreading'], correctAnswer: 'Plate Tectonics', hints: ['Explains continent movement', 'Tectonics']},
                  { id: 'q2', type: 'multiple-choice', question: 'What major feature is typically found along plate boundaries?', options: ['Lakes and rivers', 'Earthquakes and volcanoes', 'Large flat grasslands', 'Extensive forests'], correctAnswer: 'Earthquakes and volcanoes', hints: ['Tectonic activity focuses energy here', 'Earthquakes and volcanoes']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Fossils of the same plant species found on South America and Africa provide evidence that they were once joined in a supercontinent called _________.', correctAnswer: 'Pangaea', hints: ['The single ancient landmass', 'Pangaea']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which evidence is the easiest to observe visually on a map?', options: ['Fossil records', 'Matching mountain ranges', 'The jigsaw fit of the continents', 'Magnetic reversals'], correctAnswer: 'The jigsaw fit of the continents', hints: ['Look at South America and Africa', 'Fit of continents']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The movement of the plates is driven by _________ currents in the Earth\'s mantle.', correctAnswer: 'Convection', hints: ['Heat transfer movement', 'Convection']},
                  { id: 'q6', type: 'multiple-choice', question: 'The theory of plate tectonics was formalized in the 20th century based on evidence of:', options: ['Static, unmoving continents', 'Continents moving due to the moon\'s gravity', 'Slow, gradual movement of continents', 'Rapid, daily movement of continents'], correctAnswer: 'Slow, gradual movement of continents', hints: ['Movement is continuous but very slow', 'Slow movement']},
                ],
                activity: { type: 'evidence-matching', description: 'Match photos of continents with matching rock/fossil sites to illustrate evidence of Pangea.', instruction: 'Explain how a single type of ancient lizard fossil in different locations proves the plates moved.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.6.ESS.3 - Plate Boundaries and Effects',
                content: '<h3>Plate Boundaries and Landforms</h3><p>Plates interact at three types of boundaries: **Divergent** (pull apart, forming new crust/mid-ocean ridges); **Convergent** (push together, forming mountains/trenches/volcanoes); and **Transform** (slide past each other, causing frequent earthquakes). The movement at these boundaries is the cause of most major landforms and geological events (like the San Andreas Fault is a transform boundary).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which plate boundary is associated with the creation of new seafloor (sea floor spreading)?', options: ['Transform', 'Convergent', 'Divergent', 'Subduction'], correctAnswer: 'Divergent', hints: ['Plates move apart', 'Divergent']},
                  { id: 'q2', type: 'multiple-choice', question: 'When two continental plates collide, they typically form large:', options: ['Volcanoes', 'Trenches', 'Rift valleys', 'Mountain ranges'], correctAnswer: 'Mountain ranges', hints: ['Folding and uplift', 'Mountains']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The boundary where two plates slide past each other horizontally is called a _________ boundary.', correctAnswer: 'Transform', hints: ['Friction-based boundary', 'Transform']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which boundary often involves one plate sinking beneath another (subduction), creating a trench and volcanoes?', options: ['Convergent', 'Divergent', 'Transform', 'Passive'], correctAnswer: 'Convergent', hints: ['Plates come together', 'Convergent']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The _________ is the thin, solid, outermost layer of Earth broken into tectonic plates.', correctAnswer: 'Crust or Lithosphere', hints: ['The surface layer', 'Crust']},
                  { id: 'q6', type: 'multiple-choice', question: 'The San Andreas Fault in California is an example of which type of boundary?', options: ['Convergent', 'Divergent', 'Transform', 'Subduction'], correctAnswer: 'Transform', hints: ['Plates slide horizontally', 'Transform']},
                  { id: 'q7', type: 'fill-in-blank', question: 'An earthquake occurs when energy stored in rocks is suddenly released along a _________.', correctAnswer: 'Fault', hints: ['A break in the crust', 'Fault']},
                ],
                activity: { type: 'boundary-animation', description: 'Watch animations of the three plate boundary types and describe the motion.', instruction: 'Identify the boundary type most likely to cause severe, shallow earthquakes.' }
              }
            ]
          },
          {
            id: 'science-6th-2',
            title: 'Matter: Properties and Changes',
            description: 'Analyze the physical and chemical properties of matter. Students will differentiate between elements, compounds, and mixtures, and apply the concept of conservation of mass in chemical changes.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.6.PS.1 - Physical and Chemical Properties',
                content: '<h3>Observing Matter Properties</h3><p>**Matter** is anything with mass and volume. A **physical property** can be observed or measured without changing the identity of the substance (e.g., density, color, melting point, size). A **chemical property** describes a substance\'s ability to undergo a chemical change and form new substances (e.g., flammability, reactivity). Identifying these properties helps scientists classify materials and predict how they will behave in different environments.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a **physical property**?', options: ['Flammability', 'Reactivity', 'Density', 'Combustion'], correctAnswer: 'Density', hints: ['Can be measured without changing the substance', 'Density']},
                  { id: 'q2', type: 'multiple-choice', question: 'The ability of wood to burn is a _________ property.', options: ['Physical', 'Chemical', 'Atomic', 'Nuclear'], correctAnswer: 'Chemical', hints: ['Changes identity when observed', 'Chemical']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A substance\'s mass divided by its volume is its _________.', correctAnswer: 'Density', hints: ['A key physical property', 'Density']},
                  { id: 'q4', type: 'multiple-choice', question: 'The melting of an ice cube is an example of a change in which type of property?', options: ['Chemical', 'Molecular', 'Physical', 'Reactive'], correctAnswer: 'Physical', hints: ['Still H₂O, just a different form', 'Physical']},
                  { id: 'q5', type: 'fill-in-blank', question: 'When iron rusts, it combines with oxygen to form a new substance, indicating a _________ property.', correctAnswer: 'Chemical', hints: ['A new substance is formed', 'Chemical']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is NOT a physical property?', options: ['Color', 'Texture', 'Malleability (ability to hammer)', 'Toxicity (ability to poison)'], correctAnswer: 'Toxicity (ability to poison)', hints: ['Toxicity requires a chemical interaction', 'Toxicity']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A property that describes how easily a substance will catch fire is _________.', correctAnswer: 'Flammability', hints: ['A key chemical property', 'Flammability']},
                  { id: 'q8', type: 'multiple-choice', question: 'The amount of space matter takes up is called:', options: ['Mass', 'Density', 'Volume', 'Weight'], correctAnswer: 'Volume', hints: ['Volume is space occupied', 'Volume']},
                ],
                activity: { type: 'property-lab', description: 'Test and record the density and magnetic properties of various objects.', instruction: 'Classify whether testing density is a physical or chemical change.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.6.PS.2 - Pure Substances and Mixtures',
                content: '<h3>Elements, Compounds, and Mixtures</h3><p>A **pure substance** is uniform throughout and cannot be separated by physical means. Pure substances include **elements** (made of only one type of atom, e.g., Gold) and **compounds** (made of two or more types of atoms chemically bonded, e.g., H₂O). A **mixture** is a physical combination of two or more substances that are not chemically bonded (e.g., salt water, salad). Mixtures can be separated by physical methods like filtration or evaporation.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is a substance composed of only one type of atom?', options: ['Compound', 'Mixture', 'Element', 'Solution'], correctAnswer: 'Element', hints: ['Basic unit of matter', 'Element']},
                  { id: 'q2', type: 'multiple-choice', question: 'Water (H₂O) is an example of a:', options: ['Element', 'Mixture', 'Compound', 'Solution'], correctAnswer: 'Compound', hints: ['Two or more elements chemically bonded', 'Compound']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A _________ can be separated by physical methods like filtration.', correctAnswer: 'Mixture', hints: ['Not chemically bonded', 'Mixture']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is an example of a mixture?', options: ['Pure Iron', 'Salt', 'Air (Nitrogen and Oxygen)', 'Carbon Dioxide'], correctAnswer: 'Air (Nitrogen and Oxygen)', hints: ['Gases physically mixed', 'Air']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The atoms in a compound are held together by _________ bonds.', correctAnswer: 'Chemical', hints: ['Not easily separated', 'Chemical bonds']},
                  { id: 'q6', type: 'multiple-choice', question: 'Can an element be broken down into simpler substances?', options: ['Yes, easily', 'No', 'Only by physical means', 'Only by mixing'], correctAnswer: 'No', hints: ['The simplest form of matter', 'No']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A mixture where the components are uniformly spread out (like salt water) is called a _________.', correctAnswer: 'Solution or Homogeneous mixture', hints: ['Evenly mixed', 'Solution']},
                ],
                activity: { type: 'separation-lab', description: 'Separate a mixture of salt, sand, and iron filings using physical properties (magnet, water, filter paper).', instruction: 'Explain which property was used to separate the iron filings.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.6.PS.3 - Changes in State (Thermal Energy)',
                content: '<h3>Thermal Energy and State Changes</h3><p>**Thermal energy** (heat) causes matter to change state. Adding thermal energy (heating) causes a substance to melt (solid to liquid) or evaporate (liquid to gas) because the particles move faster and spread further apart. Removing thermal energy (cooling) causes condensation (gas to liquid) or freezing (liquid to solid) because particles slow down and move closer together. The **Law of Conservation of Energy** means that energy is conserved during these state changes, it just changes form or location.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which phase change occurs when thermal energy is **removed**?', options: ['Melting', 'Evaporation', 'Freezing', 'Boiling'], correctAnswer: 'Freezing', hints: ['Liquid to solid (cooling)', 'Freezing']},
                  { id: 'q2', type: 'multiple-choice', question: 'What happens to the particles of a substance as it is heated?', options: ['They slow down', 'They move faster and spread out', 'They disappear', 'They stop moving'], correctAnswer: 'They move faster and spread out', hints: ['Heating increases kinetic energy', 'Move faster']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The change from liquid water to water vapor (gas) is called _________.', correctAnswer: 'Evaporation or Boiling', hints: ['Liquid to gas', 'Evaporation']},
                  { id: 'q4', type: 'multiple-choice', question: 'What principle states that energy is neither created nor destroyed during a state change?', options: ['Law of Mass Conservation', 'Law of Gravity', 'Law of Energy Conservation', 'Newton\'s First Law'], correctAnswer: 'Law of Energy Conservation', hints: ['Energy remains constant', 'Energy Conservation']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The temperature at which a liquid turns into a solid is called the _________ point.', correctAnswer: 'Freezing', hints: ['Opposite of melting', 'Freezing point']},
                  { id: 'q6', type: 'multiple-choice', question: 'When steam cools and turns back into liquid water droplets, this change is called:', options: ['Evaporation', 'Melting', 'Sublimation', 'Condensation'], correctAnswer: 'Condensation', hints: ['Gas to liquid (dew)', 'Condensation']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The type of energy associated with the random motion of atoms and molecules is _________ energy.', correctAnswer: 'Thermal or Heat', hints: ['Heat energy', 'Thermal energy']},
                ],
                activity: { type: 'state-change-diagram', description: 'Draw a diagram of the water cycle, labeling the phase changes (freezing, melting, condensation, evaporation).', instruction: 'Explain why steam burns are more severe than boiling water burns.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-6th-1',
            title: 'Ancient World Civilizations: Foundations',
            description: 'Examine the development of early human societies and the rise of the first river valley civilizations (Mesopotamia, Egypt). Analyze the political, economic, and social structures of these foundational civilizations.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.6.H.1 - First Civilizations and Environment',
                content: '<h3>The Fertile Crescent and River Valleys</h3><p>The first civilizations developed in **river valleys** (like the Nile in Egypt and the Tigris/Euphrates in Mesopotamia) because the annual flooding provided rich, fertile soil for **agriculture**. This surplus of food led to population growth, specialization of labor, and the development of complex **governments** and **writing systems** (e.g., cuneiform). The geographic necessity for irrigation also required large-scale cooperation and organization, leading to the rise of early states.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The first civilizations developed along river valleys primarily due to:', options: ['Protection from invaders', 'Lack of natural resources', 'Fertile soil for agriculture', 'Easy travel across mountains'], correctAnswer: 'Fertile soil for agriculture', hints: ['Key resource for food surplus', 'Fertile soil']},
                  { id: 'q2', type: 'multiple-choice', question: 'What early form of writing was developed in Mesopotamia?', options: ['Hieroglyphics', 'Cuneiform', 'Alphabet', 'Ideograms'], correctAnswer: 'Cuneiform', hints: ['Wedge-shaped writing', 'Cuneiform']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The major river that was the lifeblood of Ancient Egypt was the _________.', correctAnswer: 'Nile', hints: ['Flows north through Egypt', 'Nile River']},
                  { id: 'q4', type: 'multiple-choice', question: 'A food surplus allowed people in civilizations to develop:', options: ['Constant warfare', 'Specialization of labor', 'Nomadic lifestyles', 'Hunter-gatherer groups'], correctAnswer: 'Specialization of labor', hints: ['People could do jobs other than farming', 'Specialization']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The belief in many gods is called _________.', correctAnswer: 'Polytheism', hints: ['Most early religions were this', 'Many gods']},
                  { id: 'q6', type: 'multiple-choice', question: 'The Code of Hammurabi, famous for its principle of "an eye for an eye," originated in:', options: ['Ancient Greece', 'Ancient Rome', 'Mesopotamia', 'Ancient India'], correctAnswer: 'Mesopotamia', hints: ['First written law code', 'Mesopotamia']},
                ],
                activity: { type: 'river-valley-map', description: 'Identify the location of Mesopotamia and the Nile River Valley on a map.', instruction: 'Explain the role of irrigation systems in the development of early government.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.6.H.2 - Ancient Greece and Democracy',
                content: '<h3>The Greek City-States and Philosophy</h3><p>Ancient Greece was organized into independent **city-states** (**polis**), like Athens and Sparta, due to the mountainous geography. **Athens** developed the first known **democracy** (rule by the people), while **Sparta** was a strict military oligarchy. Greek philosophers (Socrates, Plato, Aristotle) developed foundational ideas about logic, ethics, and government that shape Western thought. The Greek contributions to government, science, and art are known as its **legacy**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The unique political unit of Ancient Greece, often separated by mountains, was the:', options: ['Empire', 'Province', 'City-state (polis)', 'Kingdom'], correctAnswer: 'City-state (polis)', hints: ['Independent local government', 'Polis']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which city-state is famous for developing the world\'s first known democracy?', options: ['Sparta', 'Thebes', 'Corinth', 'Athens'], correctAnswer: 'Athens', hints: ['Rule by the citizens', 'Athens']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The philosopher who taught by continually asking questions (known as the _________ method) was Socrates.', correctAnswer: 'Socratic', hints: ['Questioning technique', 'Socratic method']},
                  { id: 'q4', type: 'multiple-choice', question: 'In a **direct democracy**, citizens:', options: ['Elect representatives to vote for them', 'Vote directly on every law', 'Are ruled by a king', 'Are ruled by military leaders'], correctAnswer: 'Vote directly on every law', hints: ['Immediate participation', 'Vote directly']},
                  { id: 'q5', type: 'fill-in-blank', question: '_________ was the city-state famous for its strong focus on military training and discipline.', correctAnswer: 'Sparta', hints: ['Military society', 'Sparta']},
                  { id: 'q6', type: 'multiple-choice', question: 'The major geographic factor that discouraged unity among the Greek city-states was:', options: ['Flat, open plains', 'Vast deserts', 'Rocky mountains and seas', 'Large river valleys'], correctAnswer: 'Rocky mountains and seas', hints: ['Natural barriers create isolation', 'Mountains']},
                ],
                activity: { type: 'greek-comparison', description: 'Create a T-chart to compare the lifestyles and values of Athens and Sparta.', instruction: 'Explain why Athens\'s democracy was not truly democratic by modern standards (e.g., who was excluded).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.6.E.1 - Ancient Roman Empire and Legacy',
                content: '<h3>The Roman Republic and Empire</h3><p>Ancient Rome transitioned from a **Republic** (governed by elected officials and a Senate) to an **Empire** (ruled by a single Emperor). Roman law, based on the idea of the **rule of law** and justice for all citizens, is the foundation for many modern legal systems. Key Roman achievements include vast road networks, aqueducts, concrete construction, and the spread of their language (**Latin**), which influenced the Romance languages (Spanish, French). The Roman legacy is visible in our architecture, law, and language.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In the Roman Republic, which governing body held the most power?', options: ['The Emperor', 'The Senate', 'The Tribune', 'The Consuls'], correctAnswer: 'The Senate', hints: ['Composed of wealthy and experienced men', 'Senate']},
                  { id: 'q2', type: 'multiple-choice', question: 'The Roman structures famous for carrying water over long distances were the:', options: ['Coliseums', 'Triumphal Arches', 'Aqueducts', 'Pyramids'], correctAnswer: 'Aqueducts', hints: ['Roman engineering for water', 'Aqueducts']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The official language of the Roman Empire was _________, which evolved into languages like Spanish and French.', correctAnswer: 'Latin', hints: ['The root language', 'Latin']},
                  { id: 'q4', type: 'multiple-choice', question: 'The transition from a Republic to an Empire meant a shift in power from elected officials to a single ruler known as the:', options: ['Consul', 'Senator', 'Tribune', 'Emperor'], correctAnswer: 'Emperor', hints: ['Single ruler, typically inherited', 'Emperor']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Roman law is based on the idea of _________ (laws applying equally to all citizens).', correctAnswer: 'Rule of Law', hints: ['Fair treatment by law', 'Rule of Law']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which modern architectural feature was a key Roman invention?', options: ['The Arch and concrete', 'The pyramid', 'The ziggurat', 'The column'], correctAnswer: 'The Arch and concrete', hints: ['Allowed for larger, more durable buildings', 'Arch and concrete']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The period of Roman peace and prosperity lasting over 200 years was known as the _________ _________.', correctAnswer: 'Pax Romana', hints: ['Roman Peace', 'Pax Romana']},
                ],
                activity: { type: 'roman-legacy-report', description: 'Identify three aspects of modern life (e.g., calendar, architecture, law) that originated in Ancient Rome.', instruction: 'Debate the advantages and disadvantages of a Republic versus an Empire.' }
              }
            ]
          },
          {
            id: 'ss-6th-2',
            title: 'Economic Systems and Trade',
            description: 'Understand the concept of scarcity and opportunity cost. Compare and contrast different economic systems (traditional, command, market). Analyze the role of trade and specialization in ancient societies.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.6.E.2 - Scarcity and Opportunity Cost',
                content: '<h3>The Fundamental Economic Problem</h3><p>**Scarcity** is the basic economic problem: human wants are unlimited, but resources are limited. This forces societies and individuals to make **choices**. Every choice involves a **trade-off**, and the value of the next best alternative you give up when making a choice is the **opportunity cost**. For example, if a city chooses to build a new road, the opportunity cost might be the new school that they cannot afford to build instead.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The condition where wants are unlimited, but resources are limited, is called:', options: ['Inflation', 'Surplus', 'Scarcity', 'Profit'], correctAnswer: 'Scarcity', hints: ['Basic economic problem', 'Scarcity']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the value of the next best thing you gave up when you chose something else?', options: ['Trade-off', 'Production Cost', 'Opportunity Cost', 'Marginal Benefit'], correctAnswer: 'Opportunity Cost', hints: ['The cost of the missed option', 'Opportunity Cost']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Because of scarcity, every time an individual or country makes a decision, they incur a _________.', correctAnswer: 'Cost', hints: ['The price of the choice', 'Cost']},
                  { id: 'q4', type: 'multiple-choice', question: 'If a country uses its oil money to build a bridge instead of a hospital, the hospital is the:', options: ['Resource', 'Good', 'Opportunity Cost', 'Need'], correctAnswer: 'Opportunity Cost', hints: ['The foregone alternative', 'Opportunity Cost']},
                  { id: 'q5', type: 'fill-in-blank', question: 'A _________ is simply what you give up when you choose one alternative over another.', correctAnswer: 'Trade-off', hints: ['The exchange you make', 'Trade-off']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is an unlimited resource?', options: ['Oil', 'Money', 'Time', 'Human Wants'], correctAnswer: 'Human Wants', hints: ['Desires are infinite', 'Wants are unlimited']},
                ],
                activity: { type: 'scarcity-scenario', description: 'Analyze a scenario where limited money forces a choice between two desirable items.', instruction: 'Identify the trade-off and the opportunity cost.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.6.E.3 - Types of Economic Systems',
                content: '<h3>Comparing Economic Systems</h3><p>Every society has an **economic system** to determine how resources are used. In a **Traditional Economy**, decisions are based on custom and habit (e.g., ancient cultures). In a **Command Economy**, the government makes all decisions (e.g., Soviet Union). In a **Market Economy**, individual buyers and sellers make decisions (e.g., capitalism/U.S.). Most modern economies are **Mixed**, combining elements of market and command systems, with private ownership regulated by the government.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In which economic system are all decisions made by the central government?', options: ['Traditional', 'Market', 'Mixed', 'Command'], correctAnswer: 'Command', hints: ['Government control', 'Command']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which system relies most heavily on custom and historical precedent?', options: ['Command', 'Market', 'Traditional', 'Mixed'], correctAnswer: 'Traditional', hints: ['Doing things the way they have always been done', 'Traditional']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The United States is primarily a _________ economy, though it has government regulations.', correctAnswer: 'Mixed or Market', hints: ['Combines private enterprise with government regulation', 'Mixed']},
                  { id: 'q4', type: 'multiple-choice', question: 'In a market economy, decisions about price and production are controlled by:', options: ['The King', 'The government', 'Individual consumers and producers', 'Military leaders'], correctAnswer: 'Individual consumers and producers', hints: ['Supply and Demand', 'Individual choice']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The type of economy with the most private ownership is the _________ economy.', correctAnswer: 'Market', hints: ['Free enterprise', 'Market']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which system often lacks innovation and change due to its reliance on custom?', options: ['Market', 'Traditional', 'Command', 'Mixed'], correctAnswer: 'Traditional', hints: ['No incentive to change what works', 'Traditional']},
                  { id: 'q7', type: 'fill-in-blank', question: 'In a command economy, the government determines what to _________, how to _________ it, and for whom to _________ it.', correctAnswer: 'Produce or make', hints: ['The three basic questions', 'Produce']},
                ],
                activity: { type: 'economic-system-comparison', description: 'Create a three-column chart listing the key characteristics of Command, Market, and Traditional economies.', instruction: 'Discuss why pure market economies are rare.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.6.E.4 - Specialization and Trade',
                content: '<h3>The Benefits of Specialization and Trade</h3><p>**Specialization** occurs when people or countries focus on producing only the goods or services they can produce most efficiently. This leads to increased quality and quantity. **Trade** (or exchange) allows specialized entities to acquire the goods they didn\'t produce. For example, in ancient times, one village specialized in pottery, and another in grain. They traded their surpluses, making both groups better off. Specialization and trade are essential for increasing overall wealth and efficiency.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is it called when a person or country focuses on one product they make well?', options: ['Scarcity', 'Trade-off', 'Specialization', 'Bartering'], correctAnswer: 'Specialization', hints: ['Focusing on efficient production', 'Specialization']},
                  { id: 'q2', type: 'multiple-choice', question: 'The exchange of goods and services without the use of money is called:', options: ['Monopoly', 'Specialization', 'Bartering', 'Tariff'], correctAnswer: 'Bartering', hints: ['Direct trade', 'Bartering']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A major result of specialization is an increase in the _________ of goods produced.', correctAnswer: 'Efficiency or Quantity', hints: ['More output for less effort', 'Efficiency']},
                  { id: 'q4', type: 'multiple-choice', question: 'Why does trade generally benefit both parties involved?', options: ['One party always gets a better deal', 'It allows both to consume goods they did not produce', 'It creates scarcity', 'It lowers prices for the producer'], correctAnswer: 'It allows both to consume goods they did not produce', hints: ['Access to more goods', 'Allows for more consumption']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The geographic features of a region (like good soil or a deep harbor) often influence what the region _________ in.', correctAnswer: 'Specializes', hints: ['Natural resources determine focus', 'Specializes']},
                  { id: 'q6', type: 'multiple-choice', question: 'In ancient societies, the development of trade was often limited by:', options: ['Specialization', 'The lack of money and poor transportation', 'The desire for all items', 'The availability of all resources'], correctAnswer: 'The lack of money and poor transportation', hints: ['Difficult to move goods and agree on value', 'Poor transport and money']},
                ],
                activity: { type: 'specialization-role-play', description: 'Divide the class into specialized groups (e.g., maker of paper airplanes, drawer of pictures) and have them trade.', instruction: 'Analyze how specialization makes the entire class wealthier in goods.' }
              }
            ]
          }
        ]
      },
      '7th Grade': {
        'Math': [
          {
            id: 'math-7th-1',
            title: 'Ratios and Proportional Reasoning',
            description: 'Analyze proportional relationships and use them to solve real-world and mathematical problems. Students will compute unit rates, identify the constant of proportionality, use proportional relationships to convert units, and solve percent problems.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.7.RP.2 - Proportional Relationships',
                content: '<h3>Identifying Proportional Relationships</h3><p>A **proportional relationship** is one where the ratio between two quantities is always constant. This constant ratio is called the **constant of proportionality** or **unit rate**, represented by $k$. If $y$ is proportional to $x$, the relationship can be written as the equation $y = kx$. On a graph, a proportional relationship is a straight line that passes through the **origin** $(0,0)$. If a line is straight but does not pass through the origin, it is a linear relationship, but not proportional. To check for proportionality in a table, calculate $\frac{y}{x}$ for every pair of values; if the ratio is the same, the relationship is proportional.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If a proportional relationship is graphed, it must be a straight line that passes through:', options: ['The $x$-intercept', 'The $y$-intercept', 'The origin $(0,0)$', 'Any point'], correctAnswer: 'The origin $(0,0)$', hints: ['The defining feature of a proportional graph', 'Must pass through $(0,0)$']},
                  { id: 'q2', type: 'fill-in-blank', question: 'In the equation $y = 5x$, what is the constant of proportionality ($k$)?', correctAnswer: '5', hints: ['The coefficient of $x$', 'The unit rate']},
                  { id: 'q3', type: 'multiple-choice', question: 'A coffee shop charges $\$3$ for $1$ cup, $\$6$ for $2$ cups, and $\$9$ for $3$ cups. Is this relationship proportional?', options: ['Yes, $k=3$', 'Yes, $k=9$', 'No', 'Cannot tell'], correctAnswer: 'Yes, $k=3$', hints: ['The ratio $\frac{\text{cost}}{\text{cups}}$ is always $3$', 'Unit rate is $3$']},
                  { id: 'q4', type: 'fill-in-blank', question: 'If a taxi charges a $\$5$ fee plus $\$2$ per mile, is the total cost proportional to the number of miles?', correctAnswer: 'No', hints: ['The $\$5$ fee prevents it from passing through $(0,0)$', 'Doesn\'t pass through origin']},
                  { id: 'q5', type: 'multiple-choice', question: 'If $y$ is proportional to $x$ and $y=20$ when $x=4$, what is the equation?', options: ['$y=4x$', '$y=5x$', '$y=20x$', '$y=\frac{x}{5}$'], correctAnswer: '$y=5x$', hints: ['$k = \frac{y}{x} = \frac{20}{4} = 5$', 'Find $k$']},
                  { id: 'q6', type: 'fill-in-blank', question: 'The constant ratio in a proportional relationship is known as the constant of _________.', correctAnswer: 'Proportionality', hints: ['The name for the constant $k$', 'Constant $k$']},
                  { id: 'q7', type: 'multiple-choice', question: 'If $y=7x$, what is the value of $y$ when $x=3$?', options: ['7', '10', '21', '37'], correctAnswer: '21', hints: ['Substitute $x=3$ into the equation', '$7 \times 3$']},
                  { id: 'q8', type: 'fill-in-blank', question: 'A proportional graph is a straight line. What does the steepness of the line represent?', correctAnswer: 'Constant of proportionality or Unit rate', hints: ['The slope of the line', 'The $k$ value']},
                ],
                activity: { type: 'interactive-practice', description: 'Proportionality Grapher', instruction: 'Plot points and determine if the resulting line shows a proportional relationship.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.7.RP.3 - Percent Applications',
                content: '<h3>Solving Complex Percent Problems</h3><p>You can use proportional relationships or equations to solve complex percent problems, including those involving sales tax, gratuities (tips), interest, and percent increase/decrease. To calculate a $15\%$ tip on a $\$50$ meal, you can find $15\%$ of $\$50$: $0.15 \times 50 = \$7.50$. To find the total cost *including* tax, you can multiply the original price by $(1 + \text{tax rate})$. For a $6\%$ sales tax on a $\$20$ item, total cost is $20 \times (1 + 0.06) = 20 \times 1.06 = \$21.20$. Understanding these applications is essential for personal financial literacy.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is the final cost of a $\$40$ item with a $5\%$ sales tax?', correctAnswer: '42', hints: ['$40 \times 1.05$', 'Tax is $\$2.00$']},
                  { id: 'q2', type: 'multiple-choice', question: 'A shirt is on sale for $25\%$ off the original price of $\$32$. What is the sale price?', options: ['\$8', '\$24', '\$25', '\$30'], correctAnswer: '\$24', hints: ['Discount is $\$8$. $\$32 - \$8$', 'Find $75\%$ of $\$32$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'If a bank offers $3\%$ simple annual interest on $\$1,000$, how much interest is earned after $1$ year?', correctAnswer: '30', hints: ['$0.03 \times 1000$', 'Interest = Principal $\times$ Rate $\times$ Time']},
                  { id: 'q4', type: 'multiple-choice', question: 'A town\'s population increased from $10,000$ to $12,000$. What is the percent increase?', options: ['10%', '15%', '20%', '25%'], correctAnswer: '20%', hints: ['Increase is $2,000$. $\frac{2,000}{10,000} = 0.20$', 'Percent increase formula']},
                  { id: 'q5', type: 'fill-in-blank', question: 'A server receives a $\$9$ tip on a $\$60$ bill. What percent was the tip?', correctAnswer: '15%', hints: ['$\frac{9}{60} = \frac{3}{20} = \frac{15}{100}$', 'Divide and convert to percent']},
                  { id: 'q6', type: 'multiple-choice', question: 'If the price of gas drops from $\$4.00$ to $\$3.80$, what is the percent decrease?', options: ['5%', '10%', '20%', '2%'], correctAnswer: '5%', hints: ['Decrease is $\$0.20$. $\frac{0.20}{4.00} = 0.05$', 'Percent decrease formula']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A store marks up the price of a coat by $50\%$. If the original price was $\$100$, what is the new price?', correctAnswer: '150', hints: ['Markup is $\$50$', '$\$100 \times 1.50$']},
                  { id: 'q8', type: 'multiple-choice', question: 'The final sale price after a $40\%$ discount is $\$60$. What was the original price?', options: ['\$100', '\$84', '\$24', '\$150'], correctAnswer: '\$100', hints: ['$\$60$ is $60\%$ of the original price. $60 = 0.60x$', '$60 \div 0.60$']},
                ],
                activity: { type: 'interactive-practice', description: 'Percent Change Calculator', instruction: 'Solve real-world problems involving tip, tax, discount, and percent change.' }
              }
            ]
          },
          {
            id: 'math-7th-2',
            title: 'The Number System and Expressions',
            description: 'Apply and extend previous understandings of operations to add, subtract, multiply, and divide rational numbers. Use properties of operations to generate equivalent expressions. Solve real-life and mathematical problems using numerical and algebraic expressions.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.7.NS.1 - Operations with Integers',
                content: '<h3>Adding and Subtracting Rational Numbers</h3><p>**Rational numbers** include integers, fractions, and decimals. The rules for adding and subtracting integers are key: when adding two numbers with the **same sign**, add their absolute values and keep the sign (e.g., $-5 + (-3) = -8$). When adding two numbers with **different signs**, subtract their absolute values and take the sign of the number with the larger absolute value (e.g., $-5 + 3 = -2$). Subtraction is the same as adding the opposite: $5 - (-3) = 5 + 3 = 8$. You can visualize this movement on a number line, moving left for negative and right for positive.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is $-10 + 4$?', correctAnswer: '-6', hints: ['Subtract absolute values, keep sign of larger number', '$10 - 4 = 6$, sign is negative']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is $-8 - 3$?', options: ['$-5$', '$5$', '$-11$', '$11$'], correctAnswer: '-11', hints: ['Change to addition: $-8 + (-3)$', 'Add and keep negative sign']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is $12 + (-7)$?', correctAnswer: '5', hints: ['Subtract absolute values, sign is positive', '$12 - 7$']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is $-6 - (-2)$?', options: ['$-4$', '$4$', '$-8$', '$8$'], correctAnswer: '-4', hints: ['Change to addition: $-6 + 2$', 'Different signs, subtract']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is $-4 + (-9)$?', correctAnswer: '-13', hints: ['Same sign, add and keep negative sign', '$4 + 9 = 13$']},
                  { id: 'q6', type: 'multiple-choice', question: 'If the temperature is $-2^\circ\text{F}$ and rises $10^\circ\text{F}$, what is the new temperature?', options: ['$-12^\circ\text{F}$', '$12^\circ\text{F}$', '$8^\circ\text{F}$', '$-8^\circ\text{F}$'], correctAnswer: '8', hints: ['$-2 + 10$', '$8$ degrees']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is $-1.5 + 4.2$?', correctAnswer: '2.7', hints: ['Subtract $4.2 - 1.5$', 'Different signs, subtract']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is $\frac{1}{2} - \frac{3}{4}$?', options: ['$\frac{1}{4}$', '$-\frac{1}{4}$', '$\frac{4}{6}$', '$-\frac{1}{2}$'], correctAnswer: '$-\frac{1}{4}$', hints: ['$\frac{2}{4} - \frac{3}{4} = -\frac{1}{4}$', 'Find common denominator']},
                ],
                activity: { type: 'interactive-practice', description: 'Integer Manipulatives', instruction: 'Use colored chips to model addition and subtraction of integers.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.7.NS.2 - Multiplication and Division of Rational Numbers',
                content: '<h3>Multiplying and Dividing Rational Numbers</h3><p>The rules for multiplying and dividing rational numbers are straightforward: if the two numbers have the **same sign**, the result is always **positive** (e.g., $(-5) \times (-3) = 15$ and $15 \div 3 = 5$). If the two numbers have **different signs**, the result is always **negative** (e.g., $(-5) \times 3 = -15$ and $-15 \div 3 = -5$). These rules apply to integers, fractions, and decimals. The key is to check the signs of the two numbers being multiplied or divided.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is $(-6) \times 7$?', correctAnswer: '-42', hints: ['Different signs, result is negative', '$6 \times 7 = 42$']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is $-30 \div (-5)$?', options: ['$-6$', '$6$', '$-5$', '$30$'], correctAnswer: '6', hints: ['Same sign, result is positive', '$30 \div 5$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'What is $(-2) \times (-8)$?', correctAnswer: '16', hints: ['Same sign, result is positive', '$2 \times 8$']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is $42 \div (-6)$?', options: ['$-7$', '$7$', '$-6$', '$42$'], correctAnswer: '-7', hints: ['Different signs, result is negative', '$42 \div 6$']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is $(-0.5) \times 0.4$?', correctAnswer: '-0.20 or -0.2', hints: ['$5 \times 4 = 20$, two decimal places, negative', '$-0.2$']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is $\frac{2}{3} \times (-\frac{3}{4})$?', options: ['$\frac{1}{2}$', '$-\frac{1}{2}$', '$-\frac{6}{12}$', '$\frac{6}{12}$'], correctAnswer: '$-\frac{1}{2}$', hints: ['Different signs, multiply across, simplify', '$-\frac{1}{2}$']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The product of two negative numbers is always _________.', correctAnswer: 'Positive', hints: ['Same sign rule', 'Positive']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is $-1 \div \frac{1}{5}$?', options: ['$5$', '$1$', '$-5$', '$-\frac{1}{5}$'], correctAnswer: '-5', hints: ['$-1 \times 5$', 'Keep-Change-Flip, different signs']},
                ],
                activity: { type: 'interactive-practice', description: 'Rational Number Operations', instruction: 'Solve mixed operation problems with fractions, decimals, and integers.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.7.EE.1 - Equivalent Expressions',
                content: '<h3>Simplifying and Generating Equivalent Expressions</h3><p>**Equivalent expressions** are expressions that have the same value for all values of the variables. You can generate equivalent expressions by using the properties of operations, such as the **Distributive Property**: $a(b+c) = ab + ac$. You can also **combine like terms** (terms that have the same variable raised to the same power). For example, $5x + 3x - 2$ simplifies to $8x - 2$. Simplifying expressions helps prepare you for solving more complex algebraic equations.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Simplify the expression $4x + 7x - 2x$.', correctAnswer: '9x', hints: ['Combine the like terms (coefficients)', '$4+7-2 = 9$']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which expression is equivalent to $3(x + 5)$?', options: ['$3x + 5$', '$3x + 15$', '$3x - 15$', '$15x$'], correctAnswer: '$3x + 15$', hints: ['Use the distributive property', '$3 \times x + 3 \times 5$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Simplify $8 - 2(y + 3)$.', correctAnswer: '2 - 2y or -2y + 2', hints: ['$8 - 2y - 6$', 'Combine $8$ and $-6$']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which term is *not* a like term for $2y^2$?', options: ['$5y^2$', '$-y^2$', '$2y$', '$\frac{1}{2}y^2$'], correctAnswer: '$2y$', hints: ['Like terms must have the same variable raised to the same power', 'The exponent must match']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is the missing number: $4x + (3x + 9) = (\_\_x) + 9$.', correctAnswer: '7', hints: ['Combine $4x$ and $3x$', 'Associative property']},
                  { id: 'q6', type: 'multiple-choice', question: 'The Distributive Property is used to:', options: ['Combine like terms', 'Multiply a factor by terms inside parentheses', 'Solve equations', 'Find the inverse operation'], correctAnswer: 'Multiply a factor by terms inside parentheses', hints: ['Essential for expanding expressions', 'Multiply outside in']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Simplify $2a + 5b - a + 3b$.', correctAnswer: 'a + 8b or 8b + a', hints: ['Combine $2a-a$ and $5b+3b$', 'Combine like terms']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which expression is equivalent to $10 - (2x - 3)$?', options: ['$13 - 2x$', '$7 - 2x$', '$10 - 2x + 3$', '$10 + 2x - 3$'], correctAnswer: '$13 - 2x$', hints: ['Distribute the negative sign: $10 - 2x + 3$', 'Remove parentheses']},
                ],
                activity: { type: 'interactive-practice', description: 'Expression Builder', instruction: 'Use properties of operations to create equivalent expressions.' }
              }
            ]
          }
        ],
        'ELA': [
          {
            id: 'ela-7th-1',
            title: 'Inference and Evidence',
            description: 'Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text. Determine a theme or central idea and analyze its development over the course of the text. Analyze how different parts of a text relate to each other.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.7.1 - Inference and Evidence',
                content: '<h3>Making Inferences with Textual Evidence</h3><p>An **inference** is a conclusion reached on the basis of evidence and reasoning. It\'s an educated guess or a logical assumption based on the clues the author provides. When you infer, you are "reading between the lines." Unlike explicitly stated information, an inference requires you to combine what you read with your own background knowledge. When asked to support an inference, you must cite **multiple pieces of textual evidence**—specific facts, quotes, or details—that logically lead to that conclusion. This demonstrates a deeper understanding of the text.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is an inference?', options: ['A direct quote', 'An assumption based on text evidence', 'A guess with no proof', 'A fact that is explicitly stated'], correctAnswer: 'An assumption based on text evidence', hints: ['Reading between the lines', 'Educated guess']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Information that is directly stated in the text is called _________ evidence.', correctAnswer: 'Explicit', hints: ['Clearly stated', 'Not inferred']},
                  { id: 'q3', type: 'multiple-choice', question: 'Why should you use several pieces of evidence for an inference?', options: ['To make the paper longer', 'To confuse the reader', 'To strengthen the analysis and proof', 'To show you can copy quotes'], correctAnswer: 'To strengthen the analysis and proof', hints: ['More evidence equals stronger argument', 'Multiple proofs']},
                  { id: 'q4', type: 'fill-in-blank', question: 'An inference combines clues from the text with your own _________ knowledge.', correctAnswer: 'Background or Prior', hints: ['What you already know', 'Personal knowledge']},
                  { id: 'q5', type: 'multiple-choice', question: 'A character says, "I hate spinach." An inference would be:', options: ['The character is a child', 'The character dislikes leafy green vegetables', 'The character likes salad', 'The character is lying'], correctAnswer: 'The character dislikes leafy green vegetables', hints: ['Spinach is a leafy green vegetable', 'Logical assumption']},
                  { id: 'q6', type: 'fill-in-blank', question: 'When citing evidence, you should use _________ marks around the author\'s exact words.', correctAnswer: 'Quotation', hints: ['Punctuation for direct quotes', 'Quotes']},
                  { id: 'q7', type: 'multiple-choice', question: 'What part of reading comprehension requires you to "read between the lines"?', options: ['Summarizing', 'Explicitly stating facts', 'Making inferences', 'Identifying the setting'], correctAnswer: 'Making inferences', hints: ['Finding hidden meaning', 'Inferring']},
                  { id: 'q8', type: 'fill-in-blank', question: 'A reader can infer a character is nervous if the text describes them sweating and speaking with a trembling _________.', correctAnswer: 'Voice', hints: ['A clue to nervousness', 'Speech quality']},
                ],
                activity: { type: 'interactive-practice', description: 'Inference and Evidence Matcher', instruction: 'Read short passages, make an inference, and drag the matching textual evidence.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.7.2 - Analyze Theme Development',
                content: '<h3>Theme Development and Central Idea</h3><p>The **theme** is the universal message about life or humanity that the author conveys. The **central idea** in a literary text is similar, but often focuses on the main insight about the topic. The theme is not static; it **develops** over the course of the text. This development is shown through how characters change, the events of the plot, the conflicts that arise, and the resolution. To analyze theme development, track key moments and turning points, and ask how the author uses these elements to gradually reveal the deeper message. Articulating theme requires a complete sentence, not just one word (e.g., "Courage is found in unlikely places," not just "courage").</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the difference between theme and topic?', options: ['Theme is the subject, topic is the lesson', 'Theme is the lesson, topic is the subject', 'They are the same', 'Theme is in non-fiction only'], correctAnswer: 'Theme is the lesson, topic is the subject', hints: ['Message vs. subject matter', 'Lesson vs. subject']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The theme is revealed through the plot, setting, and the way the main characters _________.', correctAnswer: 'Change or develop', hints: ['Character growth shows theme', 'Evolve']},
                  { id: 'q3', type: 'multiple-choice', question: 'The development of a theme is often tied to the unfolding of the story\'s main:', options: ['Setting', 'Conflict', 'Title', 'Page numbers'], correctAnswer: 'Conflict', hints: ['Conflict forces characters to learn lessons', 'Struggle']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a common way an author develops the theme?', options: ['Skipping pages', 'Including unrelated events', 'Repeating symbols or key ideas', 'Using only small words'], correctAnswer: 'Repeating symbols or key ideas', hints: ['Repetition draws attention to the message', 'Symbolism']},
                  { id: 'q5', type: 'fill-in-blank', question: 'To state a theme properly, you must use a complete _________.', correctAnswer: 'Sentence', hints: ['Not a single word', 'Full thought']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a story starts with a shy character who ends up giving a brave speech, the theme is likely about:', options: ['The setting', 'The time of day', 'Overcoming fear', 'Reading books'], correctAnswer: 'Overcoming fear', hints: ['Character arc reveals the message', 'Conquering weakness']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A universal theme is one that applies to _________ people across different cultures and times.', correctAnswer: 'All or Most', hints: ['Applies broadly', 'Worldwide applicability']},
                  { id: 'q8', type: 'multiple-choice', question: 'What structural element of the plot is essential for resolving the theme?', options: ['Exposition', 'Climax', 'Resolution', 'Rising action'], correctAnswer: 'Resolution', hints: ['The conclusion finalizes the lesson', 'Ending']},
                ],
                activity: { type: 'interactive-practice', description: 'Theme Tracker', instruction: 'Drag and drop plot points to illustrate the development of a given theme.' }
              }
            ]
          },
          {
            id: 'ela-7th-2',
            title: 'Argumentative and Expository Writing',
            description: 'Write arguments to support claims with clear reasons and relevant evidence. Write informative/explanatory texts to examine a topic and convey ideas through the selection, organization, and analysis of relevant content. Use appropriate transitions and complex sentence structures.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.W.7.1 - Write Arguments',
                content: '<h3>Building a Strong Argument</h3><p>An effective **argumentative essay** requires a clear, debatable **claim** in the introduction (thesis statement). The body paragraphs must contain **logical reasons** to support the claim, and each reason must be backed by **relevant evidence** (facts, statistics, expert opinions, examples). You must also acknowledge and refute (argue against) the **counterclaim** (opposing viewpoint) to show a comprehensive understanding of the issue. Use strong **transitional phrases** (e.g., *on the other hand*, *furthermore*, *as a result*) to create smooth flow between paragraphs and ideas. The conclusion should summarize the argument and leave the reader with a final thought or call to action.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the name for the statement of your position in an argumentative essay?', options: ['Evidence', 'Reason', 'Thesis', 'Conclusion'], correctAnswer: 'Thesis', hints: ['Main claim in the introduction', 'Thesis statement']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The paragraph that recognizes the opposing viewpoint is the _________ paragraph.', correctAnswer: 'Counterclaim or Counter-argument', hints: ['The opposite side', 'Opposing view']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which transition shows concession (acknowledging the other side)?', options: ['Therefore', 'Similarly', 'Although', 'In addition'], correctAnswer: 'Although', hints: ['Shows a contrast or exception', 'Concession transition']},
                  { id: 'q4', type: 'multiple-choice', question: 'What type of evidence is generally considered the strongest in an argument?', options: ['Personal anecdotes', 'Facts and statistics', 'Emotional appeals', 'Generalizations'], correctAnswer: 'Facts and statistics', hints: ['Verifiable and objective data', 'Objective proof']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The act of proving a counterclaim to be false or invalid is called _________.', correctAnswer: 'Refutation or Rebuttal', hints: ['Arguing against the opposing claim', 'Rebuttal']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which sentence is a weak, non-debatable claim?', options: ['School uniforms should be mandatory.', 'Homework is necessary for learning.', 'Dogs are mammals.', 'The voting age should be lowered.'], correctAnswer: 'Dogs are mammals.', hints: ['A fact cannot be debated', 'Must be an opinion']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A strong conclusion should summarize the main points and offer a final thought or call to _________.', correctAnswer: 'Action', hints: ['What the reader should do next', 'Final step']},
                  { id: 'q8', type: 'multiple-choice', question: 'What should each body paragraph in an argument focus on?', options: ['A different piece of evidence', 'A new, distinct reason', 'The counterclaim', 'The conclusion'], correctAnswer: 'A new, distinct reason', hints: ['One reason per paragraph (supported by evidence)', 'One reason']},
                ],
                activity: { type: 'interactive-practice', description: 'Argument Outline Creator', instruction: 'Drag and drop components (claim, reason, evidence, counterclaim) into the correct places in an essay outline.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.7.1 - Grammar and Sentence Structure',
                content: '<h3>Varying Sentence Structure</h3><p>To make your writing more sophisticated, vary your sentence structure. Use simple, compound, and **complex sentences**. A **complex sentence** contains one independent clause and one or more dependent clauses, joined by a subordinating conjunction (e.g., *after, because, when, although*). For example: **"Although it was raining,** *we still went to the park*." When the dependent clause comes first, use a comma. Also focus on correcting misplaced and dangling modifiers (phrases that describe something but are positioned incorrectly, causing confusion). A well-constructed sentence enhances clarity and style.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which type of sentence contains an independent clause and a dependent clause?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correctAnswer: 'Complex', hints: ['Joined by a subordinating conjunction', 'Uses subordinating conjunction']},
                  { id: 'q2', type: 'fill-in-blank', question: 'In the sentence "We left early $\\underline{\\text{because}}$ the movie was boring," the underlined word is a subordinating _________.', correctAnswer: 'Conjunction', hints: ['Joins the dependent clause', 'A joining word']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which is a misplaced modifier?', options: ['The dog, wagging its tail, greeted me.', 'The wet umbrella was closed.', 'I saw a shark swimming in the water with my binoculars.', 'The test was easy.'], correctAnswer: 'I saw a shark swimming in the water with my binoculars.', hints: ['It sounds like the shark has binoculars', 'Misplaced descriptive phrase']},
                  { id: 'q4', type: 'multiple-choice', question: 'The two parts of a compound sentence are joined by a coordinating conjunction (FANBOYS) and a:', options: ['Period', 'Comma', 'Semicolon', 'Colon'], correctAnswer: 'Comma', hints: ['Comma precedes the FANBOYS word', 'Comma before conjunction']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Correct the sentence: $\\text{Reading the sign, the car stopped.}$ (The car was reading the sign.)', correctAnswer: 'The driver reading the sign, the car stopped.', hints: ['The person reading is missing, so it is a dangling modifier', 'Add the subject']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a dependent clause starts a complex sentence, it must be followed by a:', options: ['Semicolon', 'Comma', 'Colon', 'Period'], correctAnswer: 'Comma', hints: ['Separates the introductory clause', 'Comma separation']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The term for a phrase or clause that modifies or describes a word that is not clearly stated is a _________ modifier.', correctAnswer: 'Dangling', hints: ['Hanging without a subject', 'Hangs without clarity']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which is a subordinating conjunction?', options: ['For', 'And', 'Nor', 'After'], correctAnswer: 'After', hints: ['Not one of the FANBOYS (coordinating conjunctions)', 'Time-based conjunction']},
                ],
                activity: { type: 'interactive-practice', description: 'Sentence Structure Analyzer', instruction: 'Identify simple, compound, and complex sentences and correct sentences with modifier errors.' }
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-7th-1',
            title: 'Chemical Reactions and Atoms',
            description: 'Analyze physical and chemical changes in matter. Students will master the law of conservation of mass, understand the role of valence electrons in bonding, and classify types of chemical reactions.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.7.PS.1 - Chemical vs. Physical Change',
                content: '<h3>Identifying Changes in Matter</h3><p>A **chemical change** results in a new substance with different properties (e.g., rusting, burning). Clues include: unexpected color change, gas production (bubbling), energy change (light/heat), and precipitate formation (a solid forms from two liquids). A **physical change** only alters the appearance or state, but the chemical identity remains the same (e.g., melting, crushing, cutting). The key is the identity: if it\'s still the same substance, it\'s physical.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is a sign of a chemical reaction?', options: ['Melting', 'Dissolving', 'New color is produced', 'Cutting'], correctAnswer: 'New color is produced', hints: ['Indicates a new substance', 'New color']},
                  { id: 'q2', type: 'multiple-choice', question: 'Boiling water is a _________ change.', options: ['Chemical', 'Nuclear', 'Physical', 'Conservation'], correctAnswer: 'Physical', hints: ['Still H₂O, just gas form', 'Physical']},
                  { id: 'q3', type: 'fill-in-blank', question: 'When a solid forms from two liquids, this evidence of a chemical change is called a _________.', correctAnswer: 'Precipitate', hints: ['A solid product', 'Precipitate']},
                  { id: 'q4', type: 'multiple-choice', question: 'Baking soda reacting with vinegar to produce gas is a _________ change.', options: ['Physical', 'Chemical', 'State', 'Phase'], correctAnswer: 'Chemical', hints: ['Produces a new gas CO₂', 'Chemical']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Crushing a can is a _________ change because it is still aluminum.', correctAnswer: 'Physical', hints: ['Change in form only', 'Physical']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is NOT a sign of a chemical change?', options: ['Production of light', 'Production of heat', 'Change in size', 'Unexpected odor'], correctAnswer: 'Change in size', hints: ['Size change is physical', 'Size change']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The substances you start with in a chemical reaction are called _________.', correctAnswer: 'Reactants', hints: ['The starting materials', 'Reactants']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the substance produced by a chemical change?', options: ['Reactant', 'Catalyst', 'Product', 'Mixture'], correctAnswer: 'Product', hints: ['The resulting material', 'Product']},
                ],
                activity: { type: 'change-observation', description: 'Perform two experiments: one showing physical change (melting ice) and one showing chemical change (baking soda/vinegar).', instruction: 'Record four observations for each experiment.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.7.PS.2 - Conservation of Mass and Energy',
                content: '<h3>The Laws of Conservation</h3><p>The **Law of Conservation of Mass** states that matter is neither created nor destroyed in a chemical reaction; the total mass of reactants equals the total mass of products. The **Law of Conservation of Energy** states that energy cannot be created or destroyed, only transferred or transformed. In a reaction, the total amount of energy (heat, light, chemical) remains the same, even though chemical energy may be converted to heat and light (like burning wood).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If 10 grams of A reacts with 5 grams of B, how much product is formed?', options: ['5 g', '10 g', '15 g', 'Less than 10 g'], correctAnswer: '15 g', hints: ['Mass is conserved (A + B)', '15 grams']},
                  { id: 'q2', type: 'multiple-choice', question: 'A burning candle converts chemical energy into light and _________ energy.', options: ['Sound', 'Nuclear', 'Electrical', 'Heat (Thermal)'], correctAnswer: 'Heat (Thermal)', hints: ['Energy change during combustion', 'Heat/Thermal']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The total mass of the system before and after a change remains _________.', correctAnswer: 'The same or constant', hints: ['Conservation principle', 'The same']},
                  { id: 'q4', type: 'multiple-choice', question: 'In a chemical equation, the number of atoms of each element on the reactant side must equal the number on the _________ side.', options: ['Bottom', 'Product', 'Top', 'Right'], correctAnswer: 'Product', hints: ['Demonstrates conservation of mass', 'Product side']},
                  { id: 'q5', type: 'fill-in-blank', question: 'According to the Law of Conservation of Energy, energy can only be transferred or _________.', correctAnswer: 'Transformed or converted', hints: ['Change form, not quantity', 'Transformed']},
                  { id: 'q6', type: 'multiple-choice', question: 'If you drop a ball, its potential energy is converted into:', options: ['Chemical energy', 'Nuclear energy', 'Kinetic energy', 'Sound energy only'], correctAnswer: 'Kinetic energy', hints: ['Energy of motion', 'Kinetic energy']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The total _________ in the universe is constant.', correctAnswer: 'Energy', hints: ['The ultimate principle', 'Energy']},
                ],
                activity: { type: 'conservation-analysis', description: 'Analyze a balanced chemical equation (CH₄ + 2O₂ → CO₂ + 2H₂O) and count the atoms on both sides.', instruction: 'Explain why the mass of the products equals the mass of the reactants.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.7.LS.1 - Cell Structure and Function',
                content: '<h3>Eukaryotic vs. Prokaryotic Cells</h3><p>All living things are made of **cells**. **Eukaryotic cells** (plants, animals, fungi) are complex; they have a membrane-bound **nucleus** that stores DNA and specialized compartments called **organelles** (like mitochondria). **Prokaryotic cells** (bacteria) are simpler; they lack a nucleus and most membrane-bound organelles. Cells perform specialized functions, such as carrying oxygen (red blood cells) or performing photosynthesis (plant cells). The cell is the basic unit of life.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which type of cell does **NOT** have a nucleus?', options: ['Animal cell', 'Plant cell', 'Eukaryotic cell', 'Prokaryotic cell'], correctAnswer: 'Prokaryotic cell', hints: ['Bacteria are an example', 'Prokaryotic']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which organelle is responsible for generating energy (ATP) in eukaryotic cells?', options: ['Ribosome', 'Vacuole', 'Mitochondria', 'Cell wall'], correctAnswer: 'Mitochondria', hints: ['The powerhouse', 'Mitochondria']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The _________ controls what enters and leaves the cell.', correctAnswer: 'Cell membrane', hints: ['Outer boundary', 'Cell membrane']},
                  { id: 'q4', type: 'multiple-choice', question: 'Plant cells have a rigid outer layer for support that animal cells lack; this is the:', options: ['Nucleus', 'Mitochondria', 'Cell membrane', 'Cell wall'], correctAnswer: 'Cell wall', hints: ['Provides structural support', 'Cell wall']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The basic, fundamental unit of structure and function in all living things is the _________.', correctAnswer: 'Cell', hints: ['Smallest unit of life', 'Cell']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which domain contains prokaryotic cells?', options: ['Eukarya', 'Animalia', 'Bacteria and Archaea', 'Fungi'], correctAnswer: 'Bacteria and Archaea', hints: ['Domains without a nucleus', 'Bacteria/Archaea']},
                  { id: 'q7', type: 'fill-in-blank', question: '_________ is the control center of the eukaryotic cell, containing DNA.', correctAnswer: 'Nucleus', hints: ['Where genetic material is stored', 'Nucleus']},
                ],
                activity: { type: 'cell-model-comparison', description: 'Create a Venn diagram comparing Prokaryotic and Eukaryotic cells.', instruction: 'Explain the function of a nucleus in terms of information storage.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-7th-1',
            title: 'Global Exchange and Empires',
            description: 'Analyze the political, economic, and cultural characteristics of societies from the Postclassical Era (500 CE) through the Age of Exploration. Examine the impact of key events such as the Silk Road, the Islamic Golden Age, and the spread of new ideas and technologies.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.7.H.1 - Global Trade and Interactions',
                content: '<h3>The Impact of the Silk Road</h3><p>The **Silk Road** was a network of trade routes connecting East and West, primarily from China to the Mediterranean. It facilitated the exchange of goods (silk, spices), **technology** (paper, gunpowder), and **ideas** (Buddhism, Islam). While promoting economic prosperity and cultural diffusion (**cultural exchange**), it also allowed the rapid spread of diseases (like the Black Death). The Silk Road demonstrates how trade is a powerful force for global interaction.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The Silk Road was primarily a route for the exchange of:', options: ['Goods, technology, and disease', 'Only silk and spices', 'Only people and armies', 'Only written documents'], correctAnswer: 'Goods, technology, and disease', hints: ['Holistic exchange', 'Goods/technology/disease']},
                  { id: 'q2', type: 'multiple-choice', question: 'The exchange of cultural practices and ideas between different societies is called:', options: ['Specialization', 'Feudalism', 'Cultural Diffusion', 'Globalism'], correctAnswer: 'Cultural Diffusion', hints: ['Spreading culture', 'Diffusion']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Two key Chinese inventions that traveled West along the Silk Road were _________ and gunpowder.', correctAnswer: 'Paper or Printing', hints: ['Revolutionized communication', 'Paper/Printing']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which major disease is thought to have spread rapidly along the Silk Road?', options: ['Smallpox', 'The Black Death (Plague)', 'Cholera', 'The Flu'], correctAnswer: 'The Black Death (Plague)', hints: ['Devastated Europe in the 14th century', 'Black Death']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The Silk Road fostered economic _________ by allowing regions to specialize in what they produced best.', correctAnswer: 'Prosperity or Growth', hints: ['Financial success', 'Prosperity']},
                  { id: 'q6', type: 'multiple-choice', question: 'The center of the trade routes during the Postclassical era was often the:', options: ['Americas', 'Australia', 'Middle East', 'Antarctica'], correctAnswer: 'Middle East', hints: ['Connecting point between Europe, Asia, and Africa', 'Middle East']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Trade routes enabled the spread of the _________ faith from Arabia across Asia and Africa.', correctAnswer: 'Islamic', hints: ['A major world religion', 'Islamic faith']},
                ],
                activity: { type: 'silk-road-route', description: 'Draw a map of the Silk Road and label three major goods traded.', instruction: 'Explain why trade networks often cause the spread of disease.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.7.H.2 - The Enlightenment and Modern Ideas',
                content: '<h3>Foundations of Modern Democracy</h3><p>The **Enlightenment** (18th century) was an intellectual movement that emphasized **reason**, **logic**, and **individual rights**. Key thinkers like **John Locke** developed the idea of **natural rights** (life, liberty, property) and the **social contract** (government legitimacy comes from the consent of the governed). **Montesquieu** proposed the **separation of powers**. These ideas fueled the American and French Revolutions and are the basis for modern democratic and human rights documents.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The Enlightenment emphasized which concept over traditional authority?', options: ['Faith', 'Superstition', 'Reason', 'Monarchy'], correctAnswer: 'Reason', hints: ['The central focus of the movement', 'Reason']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which philosopher is most famous for promoting the idea of separation of powers?', options: ['Jean-Jacques Rousseau', 'Voltaire', 'John Locke', 'Montesquieu'], correctAnswer: 'Montesquieu', hints: ['Three branches idea', 'Montesquieu']},
                  { id: 'q3', type: 'fill-in-blank', question: 'John Locke argued that all people are born with _________ rights, including life, liberty, and property.', correctAnswer: 'Natural', hints: ['Rights inherent to humans', 'Natural rights']},
                  { id: 'q4', type: 'multiple-choice', question: 'The idea that a government\'s authority comes only from the people it governs is known as the:', options: ['Divine Right of Kings', 'Social Contract', 'Laissez-faire', 'Mercantilism'], correctAnswer: 'Social Contract', hints: ['Agreement between people and government', 'Social Contract']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The _________ and the French Revolutions were directly influenced by Enlightenment principles.', correctAnswer: 'American', hints: ['Began in 1776', 'American Revolution']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is the most significant political legacy of the Enlightenment?', options: ['Absolute monarchy', 'Democratic government', 'Feudalism', 'Theocracy'], correctAnswer: 'Democratic government', hints: ['Led to modern republics', 'Democratic government']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The Enlightenment challenged the concept of the Divine _________ of Kings.', correctAnswer: 'Right', hints: ['Monarchical authority from God', 'Divine Right']},
                  { id: 'q8', type: 'multiple-choice', question: 'The concept of "liberty" most closely aligns with the idea of:', options: ['Total government control', 'Individual freedom', 'Economic equality', 'Military rule'], correctAnswer: 'Individual freedom', hints: ['Freedom from arbitrary authority', 'Individual freedom']},
                ],
                activity: { type: 'concept-mapping', description: 'Create a concept map linking John Locke, Natural Rights, and the American Declaration of Independence.', instruction: 'Discuss how the "consent of the governed" limits government power.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.7.E.1 - Causes and Effects of Industrialization',
                content: '<h3>The Rise of the Industrial Revolution</h3><p>The **Industrial Revolution** (18th and 19th centuries) was a shift from handmade goods to machine-made goods, powered by new energy sources (steam, coal). Key developments included the **factory system**, mass production, and urbanization. **Capitalism** and the pursuit of profit drove the revolution. Effects included massive economic growth, new social classes (factory workers and owners), and eventually, government regulation to address poor working conditions and child labor.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The Industrial Revolution marked a shift from production by hand to production by:', options: ['Farming', 'Machines', 'Government', 'Trade'], correctAnswer: 'Machines', hints: ['Key characteristic', 'Machines']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which energy source was crucial to the first phase of the Industrial Revolution?', options: ['Solar power', 'Nuclear energy', 'Coal and steam power', 'Oil'], correctAnswer: 'Coal and steam power', hints: ['Used to power factories and trains', 'Coal and steam']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The growth of cities as people moved from farms to factory jobs is called _________.', correctAnswer: 'Urbanization', hints: ['City growth', 'Urbanization']},
                  { id: 'q4', type: 'multiple-choice', question: 'The economic system that fueled the Industrial Revolution, characterized by private ownership, is:', options: ['Socialism', 'Mercantilism', 'Communism', 'Capitalism'], correctAnswer: 'Capitalism', hints: ['Private ownership and profit', 'Capitalism']},
                  { id: 'q5', type: 'fill-in-blank', question: 'A major negative effect of early industrialization was the use of _________ labor and unsafe _________ conditions.', correctAnswer: 'Child or factory', hints: ['Exploitation of workers', 'Child labor/factory']},
                  { id: 'q6', type: 'multiple-choice', question: 'The invention of the cotton gin by Eli Whitney led to an increase in:', options: ['European exports', 'Slavery in the South', 'Textile worker wages', 'Farming productivity'], correctAnswer: 'Slavery in the South', hints: ['Increased demand for raw cotton', 'Increased slavery']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The rate at which goods could be produced greatly increased due to the invention of the _________ _________.', correctAnswer: 'Assembly Line', hints: ['Mass production technique', 'Assembly Line']},
                  { id: 'q8', type: 'multiple-choice', question: 'What did the Industrial Revolution require to operate the new factories?', options: ['Skilled artisans', 'Large amounts of capital and cheap labor', 'Small local farms', 'Bartering systems'], correctAnswer: 'Large amounts of capital and cheap labor', hints: ['Investment money and workers', 'Capital and labor']},
                ],
                activity: { type: 'industrial-impact-analysis', description: 'Analyze two primary source images: one showing a rural farm and one showing an industrial factory.', instruction: 'Explain how life changed for children during the shift to the factory system.' }
              }
            ]
          },
          {
            id: 'ss-7th-2',
            title: 'Economic Decision Making and Markets',
            description: 'Analyze the role of supply and demand in determining prices. Understand the functions of money and the basic structure of a market economy.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.7.E.2 - Supply and Demand',
                content: '<h3>The Forces of Supply and Demand</h3><p>In a market economy, prices are determined by **supply** (how much producers are willing to make) and **demand** (how much consumers are willing to buy). The **Law of Demand** states that as price decreases, demand increases. The **Law of Supply** states that as price increases, supply increases. The point where supply and demand curves intersect is the **equilibrium price**—the price where quantity supplied equals quantity demanded. If the price is too high, there is a **surplus**; if too low, a **shortage**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'According to the Law of Demand, what happens when the price of a product decreases?', options: ['Supply decreases', 'Demand increases', 'Demand decreases', 'Supply increases'], correctAnswer: 'Demand increases', hints: ['People buy more when things are cheaper', 'Demand increases']},
                  { id: 'q2', type: 'multiple-choice', question: 'If the price of a product is set **above** the equilibrium price, the result is a:', options: ['Shortage', 'Scarcity', 'Surplus', 'Demand shift'], correctAnswer: 'Surplus', hints: ['More supplied than demanded', 'Surplus']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The price at which the quantity supplied equals the quantity demanded is the _________ price.', correctAnswer: 'Equilibrium', hints: ['The market-clearing price', 'Equilibrium']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which factor would cause the demand for ice cream to **decrease**?', options: ['A heat wave', 'A massive increase in the cost of milk', 'A sudden drop in temperature', 'A surplus of ice cream'], correctAnswer: 'A sudden drop in temperature', hints: ['A shift in consumer preference', 'Drop in temp']},
                  { id: 'q5', type: 'fill-in-blank', question: 'An increase in production costs (e.g., labor) would cause the supply curve to shift to the _________.', correctAnswer: 'Left', hints: ['Less supplied at every price', 'Shift left']},
                  { id: 'q6', type: 'multiple-choice', question: 'What does a shortage indicate about the current price?', options: ['The price is too high', 'The price is at equilibrium', 'The price is too low', 'Supply is too high'], correctAnswer: 'The price is too low', hints: ['More demanded than supplied', 'Too low']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The Law of Supply states that producers will generally produce more at a _________ price.', correctAnswer: 'Higher', hints: ['Profit motive', 'Higher price']},
                ],
                activity: { type: 'supply-demand-analysis', description: 'Analyze a graph of supply and demand to identify the equilibrium point.', instruction: 'Discuss what would happen to the price of iPhones if a new, cheaper competitor entered the market.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.7.E.3 - Functions of Money',
                content: '<h3>The Role and Functions of Money</h3><p>**Money** is anything accepted as a medium of exchange. It has three primary functions: 1. **Medium of Exchange** (used to buy goods and services); 2. **Unit of Account** (used to measure and compare value, like price tags); and 3. **Store of Value** (can be saved and used later). Before money, people used **bartering** (trading goods for goods), which was inefficient because it required a **double coincidence of wants**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'When you use cash to buy a book, money is acting as a:', options: ['Store of Value', 'Unit of Account', 'Medium of Exchange', 'Bartering tool'], correctAnswer: 'Medium of Exchange', hints: ['Facilitates the transaction', 'Medium of Exchange']},
                  { id: 'q2', type: 'multiple-choice', question: 'When a car price is listed as $20,000, money is acting as a:', options: ['Medium of Exchange', 'Store of Value', 'Unit of Account', 'Commodity'], correctAnswer: 'Unit of Account', hints: ['Measures value', 'Unit of Account']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The direct trade of goods and services without money is called _________.', correctAnswer: 'Bartering', hints: ['Inefficient trade method', 'Bartering']},
                  { id: 'q4', type: 'multiple-choice', question: 'What function allows you to save your earnings for future purchases?', options: ['Medium of Exchange', 'Unit of Account', 'Store of Value', 'Commodity'], correctAnswer: 'Store of Value', hints: ['Holding purchasing power over time', 'Store of Value']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Bartering required a double _________ of wants.', correctAnswer: 'Coincidence', hints: ['Both parties must want what the other has', 'Double coincidence']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is a disadvantage of bartering?', options: ['It is a unit of account', 'It requires a double coincidence of wants', 'It is a store of value', 'It is a medium of exchange'], correctAnswer: 'It requires a double coincidence of wants', hints: ['Inefficiency', 'Requires coincidence']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If money loses its value rapidly due to high inflation, it fails as a reliable _________ _________.', correctAnswer: 'Store of Value', hints: ['Cannot hold its purchasing power', 'Store of Value']},
                ],
                activity: { type: 'money-function-scenario', description: 'Analyze three scenarios and identify the function of money being used in each.', instruction: 'Discuss a modern equivalent of bartering (e.g., trading video games).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.7.E.4 - The Production Process',
                content: '<h3>Factors of Production</h3><p>Economies rely on four **factors of production** to create goods and services: 1. **Land** (natural resources); 2. **Labor** (human effort); 3. **Capital** (machines, tools, buildings); and 4. **Entrepreneurship** (the risk-taker who combines the other three factors). The payment for land is rent, labor is wages, capital is interest, and entrepreneurship is profit. Understanding these factors is fundamental to analyzing how products are made and how wealth is created.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which factor of production includes the factories and machinery used to make goods?', options: ['Land', 'Labor', 'Capital', 'Entrepreneurship'], correctAnswer: 'Capital', hints: ['Man-made resources used for production', 'Capital (physical)']},
                  { id: 'q2', type: 'multiple-choice', question: 'The payment earned for **labor** is:', options: ['Profit', 'Rent', 'Interest', 'Wages'], correctAnswer: 'Wages', hints: ['Pay for work performed', 'Wages']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The risk-taker who combines the other three factors and starts a business is the _________.', correctAnswer: 'Entrepreneur', hints: ['The innovator', 'Entrepreneurship']},
                  { id: 'q4', type: 'multiple-choice', question: 'A forest used to supply wood for paper is an example of which factor of production?', options: ['Capital', 'Labor', 'Land', 'Entrepreneurship'], correctAnswer: 'Land', hints: ['A natural resource', 'Land']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The payment for the use of **land** is _________.', correctAnswer: 'Rent', hints: ['Payment for natural resources', 'Rent']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which factor of production is considered the most important for innovation and economic growth?', options: ['Land', 'Labor', 'Capital', 'Entrepreneurship'], correctAnswer: 'Entrepreneurship', hints: ['Drives new ideas and efficiency', 'Entrepreneurship']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The human effort (physical and mental) used in production is _________.', correctAnswer: 'Labor', hints: ['Workforce', 'Labor']},
                ],
                activity: { type: 'factor-of-production-identification', description: 'Analyze a scenario (e.g., building a house) and identify examples of each of the four factors of production.', instruction: 'Discuss why an entrepreneur is rewarded with profit, rather than wages or rent.' }
              }
            ]
          }
        ]
      },
      '8th Grade': {
        'Math': [
          {
            id: 'math-8th-1',
            title: 'Foundations of Algebra',
            description: 'Work with radicals and integer exponents. Understand the connection between proportional relationships, lines, and linear equations. Analyze and solve linear equations and pairs of simultaneous linear equations.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.8.EE.1 - Integer Exponents',
                content: '<h3>Laws of Integer Exponents</h3><p>**Integer exponents** (positive, negative, and zero) describe how many times a base number is multiplied by itself. Key rules: **Product of Powers** ($x^a \cdot x^b = x^{a+b}$); **Quotient of Powers** ($\frac{x^a}{x^b} = x^{a-b}$); **Power of a Power** ($(x^a)^b = x^{a \cdot b}$); **Zero Exponent** ($x^0 = 1$); and **Negative Exponent** ($x^{-a} = \frac{1}{x^a}$). These laws simplify complex exponential expressions. Remember that only the base immediately next to the exponent is affected, unless parentheses are used.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Simplify $3^2 \cdot 3^4$.', correctAnswer: '$3^6$ or 729', hints: ['Add the exponents', '$2+4$']},
                  { id: 'q2', type: 'multiple-choice', question: 'Simplify $\frac{x^5}{x^2}$.', options: ['$x^7$', '$x^3$', '$\frac{1}{x^3}$', '$x^{10}$'], correctAnswer: '$x^3$', hints: ['Subtract the exponents', '$5-2$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Simplify $(2^3)^2$.', correctAnswer: '$2^6$ or 64', hints: ['Multiply the exponents', '$3 \times 2$']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is the value of $5^0$?', options: ['0', '1', '5', '$10^0$'], correctAnswer: '1', hints: ['Any non-zero base to the power of zero is 1', 'Zero exponent rule']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Write $4^{-2}$ without a negative exponent.', correctAnswer: '$\frac{1}{16}$ or $1/16$', hints: ['Take the reciprocal', '$\frac{1}{4^2}$']},
                  { id: 'q6', type: 'multiple-choice', question: 'Simplify $x^3 \cdot y^2 \cdot x^4$.', options: ['$x^{12}y^2$', '$x^7y^2$', '$xy^7$', '$x^3y^2$'], correctAnswer: '$x^7y^2$', hints: ['Only combine bases with the same variable', '$3+4=7$']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Simplify $\frac{10^7}{10^3}$.', correctAnswer: '$10^4$ or 10000', hints: ['Subtract exponents', '$7-3$']},
                  { id: 'q8', type: 'multiple-choice', question: 'Write $\frac{1}{a^{-3}}$ without a fraction or negative exponent.', options: ['$a^{-3}$', '$3a$', '$a^3$', '$-a^3$'], correctAnswer: '$a^3$', hints: ['The reciprocal of a negative exponent is a positive exponent', 'Take reciprocal']},
                ],
                activity: { type: 'interactive-practice', description: 'Exponent Calculator', instruction: 'Simplify expressions using the laws of exponents.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.8.EE.6 - Linear Equations and Slope',
                content: '<h3>Slope and Linear Relationships</h3><p>A **linear equation** models a proportional or non-proportional relationship that graphs as a straight line. The equation is often written in **slope-intercept form**: $y = mx + b$, where $m$ is the **slope** and $b$ is the **y-intercept**. **Slope** is the steepness of the line, calculated as "rise over run" ($\frac{\Delta y}{\Delta x}$). The slope represents the **rate of change** in a real-world context (e.g., miles per hour). The **y-intercept** is the starting value or initial amount (when $x=0$). Understanding $y=mx+b$ is the foundation of linear algebra.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In the equation $y = -2x + 5$, what is the slope ($m$)?', options: ['2', '5', '-2', 'x'], correctAnswer: '-2', hints: ['The coefficient of $x$', 'Rate of change']},
                  { id: 'q2', type: 'fill-in-blank', question: 'In the equation $y = 3x - 1$, what is the $y$-intercept ($b$)?', correctAnswer: '-1', hints: ['The constant term', 'The starting value']},
                  { id: 'q3', type: 'multiple-choice', question: 'The slope is the change in $y$ divided by the change in $x$, often called:', options: ['Run over rise', 'Rate of return', 'Rise over run', 'Rate of interest'], correctAnswer: 'Rise over run', hints: ['Vertical change over horizontal change', '$\frac{\Delta y}{\Delta x}$']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Find the slope of a line passing through $(1, 2)$ and $(4, 8)$.', correctAnswer: '2', hints: ['$\frac{8-2}{4-1} = \frac{6}{3}$', '$\frac{\Delta y}{\Delta x}$']},
                  { id: 'q5', type: 'multiple-choice', question: 'What does a slope of $\frac{1}{2}$ represent?', options: ['A vertical line', 'A downward line', 'A relatively shallow upward line', 'A very steep upward line'], correctAnswer: 'A relatively shallow upward line', hints: ['Positive means upward, fraction less than 1 means shallow', 'Shallow upward']},
                  { id: 'q6', type: 'fill-in-blank', question: 'A horizontal line has a slope of _________.', correctAnswer: '0 or zero', hints: ['No rise', 'Flat line']},
                  { id: 'q7', type: 'multiple-choice', question: 'Write the equation of a line with a slope of $3$ and a $y$-intercept of $-4$.', options: ['$y=3x$', '$y=-4x+3$', '$y=3x-4$', '$y=4x-3$'], correctAnswer: '$y=3x-4$', hints: ['Use $y=mx+b$', '$m=3, b=-4$']},
                  { id: 'q8', type: 'fill-in-blank', question: 'A line that represents a proportional relationship has a $y$-intercept ($b$) of _________.', correctAnswer: '0 or zero', hints: ['It passes through the origin', '$b=0$']},
                ],
                activity: { type: 'interactive-practice', description: 'Slope Finder', instruction: 'Calculate the slope between two given points and identify $y=mx+b$ components.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Math.8.EE.8 - Solve Systems of Equations',
                content: '<h3>Solving Systems of Linear Equations</h3><p>A **system of linear equations** is a set of two or more linear equations with the same variables. The **solution** to a system is the point $(x, y)$ that satisfies *all* equations—it is the point where the lines intersect on a graph. Systems can be solved using three methods: **Graphing** (find the intersection point); **Substitution** (solve one equation for a variable, substitute into the other); and **Elimination** (add or subtract the equations to eliminate a variable). A system may have one solution, no solution (parallel lines), or infinitely many solutions (the same line).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What does the solution to a system of equations represent graphically?', options: ['The $x$-intercept', 'The $y$-intercept', 'The point of intersection', 'The area under the lines'], correctAnswer: 'The point of intersection', hints: ['The common point', 'Where they cross']},
                  { id: 'q2', type: 'fill-in-blank', question: 'If two lines in a system are parallel, how many solutions does the system have?', correctAnswer: 'None or Zero', hints: ['They never intersect', 'No solution']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which method for solving a system involves solving one equation for a variable and inserting it into the other equation?', options: ['Graphing', 'Substitution', 'Elimination', 'Factoring'], correctAnswer: 'Substitution', hints: ['Replacing a variable', 'Substitution method']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Solve the system: $y=x+1$ and $y=3x-3$.', correctAnswer: '(2, 3)', hints: ['Set $x+1 = 3x-3$', 'Subtract $x$, add $3$, then $2x=4$']},
                  { id: 'q5', type: 'multiple-choice', question: 'If two equations in a system are identical (the same line), the system has:', options: ['One solution', 'No solution', 'Infinitely many solutions', 'Two solutions'], correctAnswer: 'Infinitely many solutions', hints: ['Every point on the line is a solution', 'Same line']},
                  { id: 'q6', type: 'fill-in-blank', question: 'Which method involves adding or subtracting the two equations to eliminate a variable?', correctAnswer: 'Elimination', hints: ['Cancel a variable out', 'Elimination method']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Solve the system: $x+y=10$ and $x-y=4$.', correctAnswer: '(7, 3)', hints: ['Add the two equations: $2x=14$, so $x=7$', 'Substitution or Elimination']},
                  { id: 'q8', type: 'multiple-choice', question: 'When solving a system, if you end up with $0=5$, the system has:', options: ['One solution', 'No solution', 'Infinitely many solutions', 'Error'], correctAnswer: 'No solution', hints: ['A false statement means parallel lines', 'A contradiction']},
                ],
                activity: { type: 'interactive-practice', description: 'System Solver Visualizer', instruction: 'Visualize the solution to a system of equations using the graphing and substitution methods.' }
              }
            ]
          },
          {
            id: 'math-8th-2',
            title: 'Geometry and Functions',
            description: 'Understand and apply the Pythagorean Theorem. Understand functions as a rule that assigns to each input exactly one output. Investigate patterns of association in bivariate data.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.8.G.7 - Pythagorean Theorem',
                content: '<h3>The Pythagorean Theorem</h3><p>The **Pythagorean Theorem** states that in any right triangle (a triangle with a $90^\circ$ angle), the square of the length of the hypotenuse ($c$) is equal to the sum of the squares of the lengths of the two legs ($a$ and $b$): $a^2 + b^2 = c^2$. The **hypotenuse** is the side opposite the right angle and is always the longest side. You can use this theorem to find the length of any side of a right triangle if you know the other two sides. It is also used to find the distance between two points on the coordinate plane. Remember, this only works for right triangles!</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The Pythagorean Theorem only applies to which type of triangle?', options: ['Acute', 'Obtuse', 'Equilateral', 'Right'], correctAnswer: 'Right', hints: ['Must have a $90^\circ$ angle', 'Right triangle']},
                  { id: 'q2', type: 'fill-in-blank', question: 'If the legs of a right triangle are $3$ and $4$, what is the length of the hypotenuse?', correctAnswer: '5', hints: ['$3^2 + 4^2 = c^2$, so $9 + 16 = 25$', 'Square root of $25$']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which side of a right triangle is the hypotenuse?', options: ['The shortest side', 'The longest side', 'The side adjacent to the right angle', 'The side with length $a$'], correctAnswer: 'The longest side', hints: ['The side opposite the $90^\circ$ angle', 'Side $c$']},
                  { id: 'q4', type: 'fill-in-blank', question: 'If $a=5$ and $c=13$, what is the length of leg $b$?', correctAnswer: '12', hints: ['$5^2 + b^2 = 13^2$, so $25 + b^2 = 169$', '$b^2 = 144$']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the Pythagorean triple for $5, 12, 13$?', options: ['$5^2+12^2=13^2$', '$5+12=13$', '$5^2+13^2=12^2$', '$5+12+13=30$'], correctAnswer: '$5^2+12^2=13^2$', hints: ['$25 + 144 = 169$', 'The correct formula']},
                  { id: 'q6', type: 'fill-in-blank', question: 'A ladder $10$ feet long leans against a wall. If the base of the ladder is $6$ feet from the wall, how high up the wall does it reach?', correctAnswer: '8', hints: ['$a^2 + 6^2 = 10^2$', 'Square root of $64$']},
                  { id: 'q7', type: 'multiple-choice', question: 'What is the formula for the Pythagorean Theorem?', options: ['$a+b=c$', '$2a+2b=c$', '$a^2+b^2=c^2$', '$a \cdot b = c$'], correctAnswer: '$a^2+b^2=c^2$', hints: ['Leg squared plus leg squared equals hypotenuse squared', 'The correct formula']},
                  { id: 'q8', type: 'fill-in-blank', question: 'In the formula, $a$ and $b$ represent the lengths of the two _________.', correctAnswer: 'Legs', hints: ['The two shorter sides', 'Legs of triangle']},
                ],
                activity: { type: 'interactive-practice', description: 'Pythagorean Theorem Solver', instruction: 'Calculate missing side lengths of right triangles.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.8.F.1 - Functions',
                content: '<h3>Understanding Functions</h3><p>A **function** is a relationship where every input ($x$) has exactly one output ($y$). Think of it as a machine: you put in $x$, and you get out one specific $y$. Functions can be represented by equations (like $y=2x+1$), tables, graphs, or mapping diagrams. The set of all possible inputs is the **domain**, and the set of all possible outputs is the **range**. The **Vertical Line Test** can determine if a graph is a function: if any vertical line touches the graph at more than one point, it is *not* a function. Proportional and linear equations (except vertical lines) are examples of functions.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'A relation is a function if every input has exactly:', options: ['Two outputs', 'No output', 'One output', 'Infinite outputs'], correctAnswer: 'One output', hints: ['The defining characteristic of a function', 'One specific output']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What is the test used to determine if a graph is a function?', correctAnswer: 'Vertical Line Test', hints: ['Checks for multiple outputs for one input', 'VLT']},
                  { id: 'q3', type: 'multiple-choice', question: 'In the equation $y = 3x - 5$, if the input ($x$) is $2$, what is the output ($y$)?', options: ['1', '2', '3', '4'], correctAnswer: '1', hints: ['$3(2) - 5 = 6 - 5$', 'Substitute $x=2$']},
                  { id: 'q4', type: 'multiple-choice', question: 'The set of all possible input values ($x$) is called the:', options: ['Range', 'Output', 'Domain', 'Function'], correctAnswer: 'Domain', hints: ['Inputs', 'The $x$ values']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The set of all possible output values ($y$) is called the _________.', correctAnswer: 'Range', hints: ['Outputs', 'The $y$ values']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a vertical line passes through a graph at $(3, 4)$ and $(3, -2)$, is the graph a function?', options: ['Yes', 'No', 'Maybe', 'Cannot tell'], correctAnswer: 'No', hints: ['Input $3$ has two outputs ($4$ and $-2$)', 'Fails the VLT']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If $f(x) = x^2$, what is $f(4)$?', correctAnswer: '16', hints: ['Substitute $4$ for $x$', '$4^2$']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which relationship is NOT a function?', options: ['$y=x$', '$y=x^2$', '$\text{Table with }(1, 5) \text{ and } (1, 6)$', '$y=5$'], correctAnswer: 'Table with (1, 5) and (1, 6)', hints: ['Input $1$ has two different outputs ($5$ and $6$)', 'Input has two outputs']},
                ],
                activity: { type: 'interactive-practice', description: 'Function Identifier', instruction: 'Apply the Vertical Line Test to various graphs and analyze input/output tables.' }
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-8th-1',
            title: 'Motion, Forces, and Energy',
            description: 'Analyze the relationships between force, mass, and acceleration (Newton\'s Second Law). Students will calculate work and power, and demonstrate the conservation and transformation of potential and kinetic energy.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.8.PS.1 - Force, Mass, and Acceleration',
                content: '<h3>Newton\'s Second Law (F=ma)</h3><p>**Newton\'s Second Law** states that the acceleration (a) of an object is directly proportional to the net force (F) acting on it and inversely proportional to its mass (m). The relationship is defined by the formula F = ma. Force is measured in **Newtons** (N), mass in **kilograms** (kg), and acceleration in meters per second squared (m/s²). This law explains why a car accelerates slower than a bicycle when the same force is applied.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the standard unit of force?', options: ['Kilogram', 'Meter', 'Joule', 'Newton'], correctAnswer: 'Newton', hints: ['Named after the scientist', 'Newton']},
                  { id: 'q2', type: 'multiple-choice', question: 'According to F=ma, if you increase the force on an object, its acceleration will:', options: ['Decrease', 'Increase', 'Stay the same', 'Become zero'], correctAnswer: 'Increase', hints: ['Directly proportional', 'Increase']},
                  { id: 'q3', type: 'fill-in-blank', question: 'If a constant force is applied to a heavier object, the object will accelerate _________ than a lighter object.', correctAnswer: 'Slower or less', hints: ['Inversely proportional', 'Slower']},
                  { id: 'q4', type: 'multiple-choice', question: 'A 5 kg mass accelerates at 2 m/s². What is the net force?', options: ['10 N', '2.5 N', '0.4 N', '7 N'], correctAnswer: '10 N', hints: ['F = 5 × 2', '10 N']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The acceleration of a freely falling object is due to the force of _________.', correctAnswer: 'Gravity', hints: ['Pull of Earth', 'Gravity']},
                  { id: 'q6', type: 'multiple-choice', question: 'What happens to the acceleration if you double the mass while keeping the force constant?', options: ['It doubles', 'It is cut in half', 'It remains the same', 'It quadruples'], correctAnswer: 'It is cut in half', hints: ['Inversely proportional', 'Cut in half']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Acceleration is defined as the rate of change of _________.', correctAnswer: 'Velocity', hints: ['Change in speed/direction', 'Velocity']},
                ],
                activity: { type: 'force-calculation', description: 'Calculate the force required to accelerate various objects with different masses.', instruction: 'Explain why astronauts weigh less on the Moon than on Earth.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.8.PS.2 - Work, Power, and Efficiency',
                content: '<h3>Work and Power</h3><p>**Work** (W) is done only when a force causes an object to move some distance. If you push a wall, you do zero work, even if you are tired, because the distance (d) is zero. Work is measured in **Joules** (J). **Power** (P) is the rate at which work is done, measured in **Watts** (W). A more powerful machine can do the same work in less time. **Efficiency** is the ratio of useful work output to total energy input.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'When is zero work done on an object?', options: ['When force is applied, and the object moves 10 meters', 'When force is applied, and the object does not move', 'When power is high', 'When the object is heavy'], correctAnswer: 'When force is applied, and the object does not move', hints: ['Distance (d) must be greater than zero', 'Zero distance']},
                  { id: 'q2', type: 'multiple-choice', question: 'The unit of **power** is the:', options: ['Newton', 'Joule', 'Watt', 'Kilogram'], correctAnswer: 'Watt', hints: ['Rate of energy use', 'Watt']},
                  { id: 'q3', type: 'fill-in-blank', question: 'If a force of 100 N pushes a box 5 meters, the work done is _________ Joules.', correctAnswer: '500', hints: ['W = 100 × 5', '500 J']},
                  { id: 'q4', type: 'multiple-choice', question: 'If a machine does 1000 J of work in 10 seconds, its power is:', options: ['10 W', '100 W', '1000 W', '10000 W'], correctAnswer: '100 W', hints: ['P = 1000 / 10', '100 W']},
                  { id: 'q5', type: 'fill-in-blank', question: 'A machine with high _________ can do the same amount of work in less time.', correctAnswer: 'Power', hints: ['The rate of work', 'Power']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a lever requires 100 J of energy input but only produces 80 J of useful output, its efficiency is:', options: ['100%', '80%', '20%', '125%'], correctAnswer: '80%', hints: ['80/100 × 100%', '80%']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Work is the transfer of _________ by means of a force.', correctAnswer: 'Energy', hints: ['Work is a measure of energy transfer', 'Energy']},
                ],
                activity: { type: 'work-power-lab', description: 'Measure the work and power of students walking versus running up a flight of stairs.', instruction: 'Explain why the work done is the same, but the power is different.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.8.PS.3 - Energy Conservation and Transformation',
                content: '<h3>Potential and Kinetic Energy</h3><p>**Kinetic Energy** (KE) is the energy of motion (KE = ½mv²). **Gravitational Potential Energy** (GPE) is stored energy due to an object\'s height (GPE = mgh). The **Law of Conservation of Energy** means that in a closed system, the total mechanical energy (KE + GPE) remains constant; energy is constantly transforming between GPE and KE (e.g., a roller coaster).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which object has the most potential energy?', options: ['A ball resting on the floor', 'A ball being thrown up', 'A ball resting on a high shelf', 'A ball rolling on the floor'], correctAnswer: 'A ball resting on a high shelf', hints: ['GPE increases with height', 'High shelf']},
                  { id: 'q2', type: 'multiple-choice', question: 'As a roller coaster cart moves from the top of the track to the bottom, its potential energy is converted into:', options: ['Thermal energy', 'Chemical energy', 'Kinetic energy', 'Nuclear energy'], correctAnswer: 'Kinetic energy', hints: ['GPE converts to KE', 'Kinetic energy']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The formula for Kinetic Energy is KE = ½ m _________.', correctAnswer: 'v² or velocity²', hints: ['Mass times velocity squared', 'Velocity squared']},
                  { id: 'q4', type: 'multiple-choice', question: 'According to the Law of Conservation of Energy, the total energy of a system:', options: ['Is always increasing', 'Is always decreasing', 'Remains constant', 'Changes based on the mass'], correctAnswer: 'Remains constant', hints: ['Cannot be created or destroyed', 'Remains constant']},
                  { id: 'q5', type: 'fill-in-blank', question: 'For a falling object, its _________ energy is highest just before it hits the ground.', correctAnswer: 'Kinetic', hints: ['Maximum velocity', 'Kinetic']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which energy conversion occurs when a battery powers a flashlight?', options: ['GPE to KE', 'Chemical to Light and Heat', 'Thermal to Chemical', 'KE to GPE'], correctAnswer: 'Chemical to Light and Heat', hints: ['Battery energy is chemical', 'Chemical to Light/Heat']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The height of an object affects its _________ energy.', correctAnswer: 'Gravitational Potential', hints: ['Stored energy due to position', 'Potential energy']},
                  { id: 'q8', type: 'multiple-choice', question: 'An object at rest has a kinetic energy of:', options: ['Zero', 'Maximum', 'Negative', 'Infinite'], correctAnswer: 'Zero', hints: ['No velocity', 'Zero']},
                ],
                activity: { type: 'pendulum-analysis', description: 'Analyze a swinging pendulum, identifying the points of maximum KE and GPE.', instruction: 'Explain why the pendulum eventually stops (due to energy loss to friction/heat).' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-8th-1',
            title: 'U.S. Government: The Constitution and Federalism',
            description: 'Analyze the origins, principles, and purposes of the U.S. Constitution and the Bill of Rights. Students will compare the structure of the federal government (three branches) and understand the concept of federalism.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.8.C.1 - Constitutional Principles',
                content: '<h3>Founding Principles of the U.S. Constitution</h3><p>The U.S. Constitution is the supreme law of the land, establishing a government based on **popular sovereignty** (rule by the people) and **limited government**. Core principles include: **Separation of Powers** (dividing power among three branches) and **Checks and Balances** (each branch limits the others). These principles were designed by the Founders to prevent any single branch or person from becoming too powerful (tyranny).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The principle that government authority comes from the consent of the people is called:', options: ['Federalism', 'Limited Government', 'Popular Sovereignty', 'Judicial Review'], correctAnswer: 'Popular Sovereignty', hints: ['Rule by the citizens', 'Sovereignty']},
                  { id: 'q2', type: 'multiple-choice', question: 'The division of power among the Legislative, Executive, and Judicial branches is known as:', options: ['Federalism', 'Checks and Balances', 'Separation of Powers', 'Limited Government'], correctAnswer: 'Separation of Powers', hints: ['Dividing the labor', 'Separation of Powers']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The power of the Supreme Court to declare a law unconstitutional is called _________ _________.', correctAnswer: 'Judicial Review', hints: ['A key check on the other branches', 'Judicial Review']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which branch can **veto** a bill passed by Congress?', options: ['Judicial', 'Executive', 'Legislative', 'State'], correctAnswer: 'Executive', hints: ['The President', 'Executive']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The idea that the government only has the powers granted to it by the Constitution is _________ _________.', correctAnswer: 'Limited Government', hints: ['Bound by the Constitution', 'Limited Government']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which document contains the specific plan for the U.S. government structure?', options: ['Declaration of Independence', 'The Bill of Rights', 'The Articles of Confederation', 'The U.S. Constitution'], correctAnswer: 'The U.S. Constitution', hints: ['The governing document', 'Constitution']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The primary goal of the system of checks and balances is to prevent _________.', correctAnswer: 'Tyranny or Abuse of Power', hints: ['Avoid too much power', 'Tyranny']},
                ],
                activity: { type: 'check-and-balance-flowchart', description: 'Create a flowchart showing how a bill becomes a law, highlighting the checks by the Executive Branch (Veto) and the Judicial Branch (Review).', instruction: 'Define the difference between "Separation of Powers" and "Checks and Balances."' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.8.C.2 - Rights in the Bill of Rights',
                content: '<h3>The Bill of Rights (First Ten Amendments)</h3><p>The **Bill of Rights** guarantees fundamental rights and civil liberties to all U.S. citizens. Key rights include: **Freedom of Speech, Religion, and the Press** (1st Amendment); the **Right to Bear Arms** (2nd Amendment); protection against unreasonable search and seizure (4th Amendment); the right to a speedy and public trial (6th Amendment); and protection against cruel and unusual punishment (8th Amendment). The 10th Amendment reserves powers to the states and the people, defining **federalism**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which amendment guarantees freedom of speech?', options: ['First', 'Second', 'Fourth', 'Tenth'], correctAnswer: 'First', hints: ['Most fundamental rights', 'First Amendment']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does the Fourth Amendment protect citizens from?', options: ['Unfair taxes', 'Cruel punishment', 'Unreasonable searches and seizures', 'Quartering of troops'], correctAnswer: 'Unreasonable searches and seizures', hints: ['Search warrants required', 'Searches and seizures']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The _________ Amendment protects against self-incrimination ("pleading the fifth").', correctAnswer: 'Fifth', hints: ['Due process rights', 'Fifth Amendment']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which amendment reserves powers not given to the federal government to the states or the people?', options: ['First', 'Third', 'Tenth', 'Ninth'], correctAnswer: 'Tenth', hints: ['Defining federalism', 'Tenth Amendment']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The _________ Amendment guarantees the right to a speedy and public trial by an impartial jury.', correctAnswer: 'Sixth', hints: ['Criminal trial rights', 'Sixth Amendment']},
                  { id: 'q6', type: 'multiple-choice', question: 'The Bill of Rights was added to the Constitution to protect:', options: ['The government\'s power', 'The states\' wealth', 'Individual liberties', 'Economic trade'], correctAnswer: 'Individual liberties', hints: ['Personal freedoms', 'Individual liberties']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The protection against excessive bail and cruel and unusual punishment is found in the _________ Amendment.', correctAnswer: 'Eighth', hints: ['Justice system protections', 'Eighth Amendment']},
                ],
                activity: { type: 'rights-in-action', description: 'Analyze a short scenario where a student\'s speech is censored and debate whether their First Amendment rights were violated.', instruction: 'Discuss the concept of a right being limited (e.g., "yelling fire in a crowded theater").' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.8.G.1 - Federalism and State Power',
                content: '<h3>Federalism and the Division of Power</h3><p>**Federalism** is the division of powers between the national (federal) government and the state governments. **Delegated (Enumerated) Powers** are specifically given to the federal government (e.g., printing money, declaring war). **Reserved Powers** are held by the states (e.g., marriage laws, establishing schools - protected by the 10th Amendment). **Concurrent Powers** are shared by both (e.g., taxing, building roads). This division ensures state flexibility while maintaining national unity.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The power to declare war is an example of a _________ power.', options: ['Reserved', 'Concurrent', 'Delegated (Federal)', 'Implied'], correctAnswer: 'Delegated (Federal)', hints: ['Only the national government can do this', 'Federal power']},
                  { id: 'q2', type: 'multiple-choice', question: 'The power to establish public schools is an example of a _________ power.', options: ['Delegated (Federal)', 'Concurrent', 'Reserved (State)', 'Implied'], correctAnswer: 'Reserved (State)', hints: ['10th Amendment power', 'State power']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The power to _________ (collect taxes) is an example of a concurrent power.', correctAnswer: 'Tax', hints: ['Shared by both national and state governments', 'Taxing']},
                  { id: 'q4', type: 'multiple-choice', question: 'What constitutional amendment is the primary basis for the Reserved Powers of the states?', options: ['First', 'Ninth', 'Tenth', 'Fourteenth'], correctAnswer: 'Tenth', hints: ['It closes the loop', 'Tenth Amendment']},
                  { id: 'q5', type: 'fill-in-blank', question: '_________ is the principle of government that divides power between the federal and state levels.', correctAnswer: 'Federalism', hints: ['Division of power geographically', 'Federalism']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which power belongs exclusively to the federal government?', options: ['Building roads', 'Establishing courts', 'Issuing driver\'s licenses', 'Printing money'], correctAnswer: 'Printing money', hints: ['Enumerated power', 'Printing money']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Powers that are shared by both the federal and state governments are called _________ powers.', correctAnswer: 'Concurrent', hints: ['Occurring at the same time', 'Concurrent']},
                  { id: 'q8', type: 'multiple-choice', question: 'The necessary and proper clause is the source of _________ powers for the federal government.', options: ['Expressed', 'Reserved', 'Implied', 'Concurrent'], correctAnswer: 'Implied', hints: ['Powers not written but necessary to carry out expressed powers', 'Implied']},
                ],
                activity: { type: 'federalism-classification', description: 'Classify various governmental powers (e.g., roads, marriage, military) as Delegated, Reserved, or Concurrent.', instruction: 'Analyze why the Framers chose a federal system instead of a unitary (single central) system.' }
              }
            ]
          },
          {
            id: 'ss-8th-2',
            title: 'U.S. History: Westward Expansion and Reform',
            description: 'Analyze the economic, political, and social forces driving Westward Expansion. Examine the causes and consequences of major 19th-century conflicts (e.g., Mexican-American War, Civil War) and the movements for reform (e.g., Abolitionism, Women\'s Rights).',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.8.H.2 - Manifest Destiny and Territorial Growth',
                content: '<h3>The Drive for Westward Expansion</h3><p>**Manifest Destiny** was the 19th-century belief that the United States was divinely ordained to expand across the continent, from the Atlantic to the Pacific. This belief fueled territorial growth, including the **Louisiana Purchase** (1803) and the annexation of Texas, leading to the **Mexican-American War** (1846-1848). Expansion created economic opportunity (land, gold), but also intensified conflict with Native American populations and worsened the debate over whether new territories would be free or slave states.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The belief that the U.S. was destined to expand to the Pacific Ocean was called:', options: ['Continentalism', 'Imperialism', 'Manifest Destiny', 'Popular Sovereignty'], correctAnswer: 'Manifest Destiny', hints: ['Driving ideology for expansion', 'Manifest Destiny']},
                  { id: 'q2', type: 'multiple-choice', question: 'The largest land acquisition in U.S. history was the:', options: ['Texas Annexation', 'Mexican Cession', 'Louisiana Purchase', 'Gadsden Purchase'], correctAnswer: 'Louisiana Purchase', hints: ['Purchased from France in 1803', 'Louisiana Purchase']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The _________ _________ of 1846-1848 resulted in the U.S. acquiring vast territories in the Southwest (Mexican Cession).', correctAnswer: 'Mexican-American War', hints: ['Conflict over Texas annexation', 'Mexican-American War']},
                  { id: 'q4', type: 'multiple-choice', question: 'The main conflict over the expansion of new territories was whether they would allow:', options: ['Trade with Europe', 'Slavery', 'Railroad development', 'Only farming'], correctAnswer: 'Slavery', hints: ['The core issue dividing North and South', 'Slavery']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The route settlers traveled from Missouri to the Pacific Northwest was the _________ Trail.', correctAnswer: 'Oregon', hints: ['Famous westward route', 'Oregon Trail']},
                  { id: 'q6', type: 'multiple-choice', question: 'The concept of Manifest Destiny most directly harmed which group of people?', options: ['European immigrants', 'Southern cotton farmers', 'Northern abolitionists', 'Native Americans'], correctAnswer: 'Native Americans', hints: ['Forced off their land', 'Native Americans']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The discovery of _________ in California in 1848 spurred massive migration to the West Coast.', correctAnswer: 'Gold', hints: ['California Gold Rush', 'Gold']},
                ],
                activity: { type: 'territorial-map-analysis', description: 'Label the major U.S. territorial acquisitions (e.g., Louisiana Purchase, Mexican Cession) on a blank map.', instruction: 'Analyze the argument that Manifest Destiny was a racist ideology.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.8.C.3 - Reform Movements',
                content: '<h3>19th-Century Reform Movements</h3><p>The 19th century saw significant social reform efforts aimed at addressing societal problems. The **Abolition Movement** sought to end slavery, led by figures like Frederick Douglass. The **Women\'s Rights Movement**, beginning at the **Seneca Falls Convention** (1848), sought suffrage (the right to vote) and equal legal rights. The **Temperance Movement** aimed to prohibit alcohol. These movements used moral, political, and philosophical arguments to change laws and deeply held social customs.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The primary goal of the **Abolition Movement** was to:', options: ['End child labor', 'End slavery', 'Start the Civil War', 'Grant women the right to vote'], correctAnswer: 'End slavery', hints: ['Central goal', 'End slavery']},
                  { id: 'q2', type: 'multiple-choice', question: 'The movement for women\'s suffrage (voting rights) is considered part of the:', options: ['Temperance Movement', 'Abolition Movement', 'Women\'s Rights Movement', 'Manifest Destiny'], correctAnswer: 'Women\'s Rights Movement', hints: ['Movement for equality', 'Women\'s Rights']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The first major convention for women\'s rights took place in _________ _________, New York, in 1848.', correctAnswer: 'Seneca Falls', hints: ['Start of the movement', 'Seneca Falls']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which individual was a famous abolitionist speaker and former enslaved person?', options: ['Lucretia Mott', 'Elizabeth Cady Stanton', 'Frederick Douglass', 'Henry Clay'], correctAnswer: 'Frederick Douglass', hints: ['Prominent African American leader', 'Frederick Douglass']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The movement that sought to restrict or ban the production and sale of alcohol was the _________ Movement.', correctAnswer: 'Temperance', hints: ['Focused on alcohol', 'Temperance']},
                  { id: 'q6', type: 'multiple-choice', question: 'Suffrage means the right to:', options: ['Assemble peacefully', 'Practice religion', 'Vote', 'Own property'], correctAnswer: 'Vote', hints: ['Voting right', 'Vote']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The _________ _________ of 1848 was the document modeled on the Declaration of Independence that listed women\'s grievances.', correctAnswer: 'Declaration of Sentiments', hints: ['Women\'s manifesto', 'Declaration of Sentiments']},
                ],
                activity: { type: 'reform-comparison', description: 'Create a chart comparing the goals and key leaders of the Abolition and Women\'s Rights Movements.', instruction: 'Analyze how the two movements shared common strategies (e.g., public speaking, petitions).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.8.H.4 - Causes and Effects of the Civil War',
                content: '<h3>Causes and Consequences of the Civil War</h3><p>The primary cause of the Civil War (1861-1865) was the issue of **slavery** and its expansion into new territories, leading to the concept of **states\' rights** (Southern states claiming the right to ignore federal law). The war resulted in the preservation of the Union, the abolition of slavery (**13th Amendment**), and the beginning of the **Reconstruction** era. The war led to a stronger federal government and devastated the Southern economy, setting the stage for decades of racial and political conflict.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The main cause of the Civil War was the conflict over:', options: ['Economic tariffs', 'Slavery and states\' rights', 'Immigration', 'Westward trails'], correctAnswer: 'Slavery and states\' rights', hints: ['The core political and moral issue', 'Slavery/States\' rights']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which amendment formally abolished slavery in the U.S.?', options: ['13th', '14th', '15th', '19th'], correctAnswer: '13th', hints: ['End of slavery', '13th Amendment']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The claim by Southern states that they had the authority to reject federal laws was known as states\' _________.', correctAnswer: 'Rights', hints: ['The political argument for secession', 'States\' rights']},
                  { id: 'q4', type: 'multiple-choice', question: 'The Union victory resulted in a shift of power toward the:', options: ['State governments', 'Local communities', 'Federal government', 'The Confederacy'], correctAnswer: 'Federal government', hints: ['Increased national authority', 'Federal government']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The period following the Civil War, focused on rebuilding the South, was called _________.', correctAnswer: 'Reconstruction', hints: ['Rebuilding the nation', 'Reconstruction']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which side had the advantage in industrial capacity and population?', options: ['The Confederacy (South)', 'The Union (North)', 'They were equal', 'Foreign powers'], correctAnswer: 'The Union (North)', hints: ['Industrial and population advantage', 'The Union (North)']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The _________ Proclamation, issued by Lincoln, freed the slaves in the rebellious states.', correctAnswer: 'Emancipation', hints: ['Declared freedom for those in Confederate states', 'Emancipation Proclamation']},
                ],
                activity: { type: 'cause-effect-web', description: 'Create a web linking the major causes (e.g., slavery, states\' rights, economic differences) to the ultimate outcome of the Civil War.', instruction: 'Debate which cause was the most significant catalyst for secession.' }
              }
            ]
          }
        ]
      },
      '9th Grade (English I/Algebra I)': {
        'ELA': [
          {
            id: 'ela-9th-1',
            title: 'Foundations of Literary Analysis (English I/Algebra I)',
            description: 'Analyze how an author\'s choices concerning how to structure a text create effects such as mystery, tension, or surprise. Analyze the representation of a subject or a key scene in two different artistic mediums (e.g., Auden\'s poem "Musée des Beaux Arts" and Breughel\'s painting *Landscape with the Fall of Icarus*).',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.9-10.5 - Analyze Text Structure and Effects',
                content: '<h3>Structure and Its Effects</h3><p>Authors carefully structure their texts to achieve specific rhetorical and emotional effects. **Structure** includes the order of events (plot sequence), pacing, use of dramatic irony, flashbacks, and shifts in point of view. A slow **pacing** can build **tension** (or suspense), while withholding information until the end can create **surprise** or **mystery**. For example, a **non-linear narrative** (jumping in time) can reveal character motivation slowly, deepening the reader\'s understanding. Analyzing structure means asking *why* the author chose to tell the story in this way and *what effect* that choice has on the reader.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which structural technique is primarily used to create tension or suspense?', options: ['Describing the setting in detail', 'Speeding up the pacing of action', 'Slowing the pacing and withholding information', 'Using a simple plot structure'], correctAnswer: 'Slowing the pacing and withholding information', hints: ['Pacing is key to suspense', 'Slow pacing and mystery']},
                  { id: 'q2', type: 'fill-in-blank', question: 'A shift from the present to an earlier event in a narrative is called a _________.', correctAnswer: 'Flashback', hints: ['Recalling the past', 'Looking back']},
                  { id: 'q3', type: 'multiple-choice', question: 'If a novel opens with the conclusion of the story, what is the most likely structural effect?', options: ['Clarity and simplicity', 'Surprise and mystery about how the event occurred', 'Confusion and boredom', 'A sense of relief'], correctAnswer: 'Surprise and mystery about how the event occurred', hints: ['Non-linear narratives can create mystery', 'Mystery and suspense']},
                  { id: 'q4', type: 'multiple-choice', question: 'What structural element can reveal a secret to the reader that the characters do not know, creating anticipation?', options: ['Foreshadowing', 'Dramatic irony', 'Flashback', 'Climax'], correctAnswer: 'Dramatic irony', hints: ['The difference between what the reader knows and what the characters know', 'Reader knows more']},
                  { id: 'q5', type: 'fill-in-blank', question: 'An author\'s choice to dedicate a full chapter to a quiet scene before a major conflict is an attempt to build _________.', correctAnswer: 'Tension or Suspense', hints: ['Calm before the storm', 'Building suspense']},
                  { id: 'q6', type: 'multiple-choice', question: 'In a story, a fast pace is often used during:', options: ['Exposition (introduction)', 'Climax (peak action)', 'Resolution (ending)', 'Character development'], correctAnswer: 'Climax (peak action)', hints: ['Rapid action occurs at the peak of the story', 'Peak action']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A story with multiple, interwoven plot lines is using a complex _________ structure.', correctAnswer: 'Narrative', hints: ['How the story is told', 'Storytelling method']},
                  { id: 'q8', type: 'multiple-choice', question: 'A story that begins *in media res* (in the middle of the action) primarily creates a sense of:', options: ['Boredom', 'Clarity', 'Urgency and immediacy', 'Predictability'], correctAnswer: 'Urgency and immediacy', hints: ['Starts right away', 'Immediacy']},
                ],
                activity: { type: 'interactive-practice', description: 'Pacing and Plot Structure Game', instruction: 'Adjust the narrative pacing in a sample story and analyze the resulting emotional effect.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RL.9-10.7 - Analyze Medium',
                content: '<h3>Comparing Media and Subject Representation</h3><p>The same subject (e.g., a historical event, a myth, a piece of art) can be presented in different artistic mediums, such as a poem, a painting, a song, or a film. Analyzing these different accounts means comparing the **medium\'s impact**. A painting might focus on a single, dramatic moment, while a poem can explore the thoughts and feelings of a character over time. Different mediums may emphasize different **details** and convey different **interpretations** or emotional tones. To compare, ask: "What is each medium focusing on? What details are added or omitted? What different feeling is created?"</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If a painting and a poem both depict the same myth, the painting is likely to emphasize:', options: ['The character\'s long-term internal thoughts', 'A single, dramatic visual moment', 'The events over a long time span', 'The complex dialogue between characters'], correctAnswer: 'A single, dramatic visual moment', hints: ['Paintings are limited to one visual scene', 'Visual moment']},
                  { id: 'q2', type: 'fill-in-blank', question: 'A poem can explore a subject\'s inner thoughts and _________ more effectively than a painting.', correctAnswer: 'Feelings or Emotions', hints: ['Internal perspective', 'Inner life']},
                  { id: 'q3', type: 'multiple-choice', question: 'A film adaptation of a novel must change the medium from text to:', options: ['Sound only', 'Visual and auditory elements', 'Sculpture', 'Still image'], correctAnswer: 'Visual and auditory elements', hints: ['Requires sight and sound', 'Sight and sound']},
                  { id: 'q4', type: 'fill-in-blank', question: 'When analyzing a key scene in a play versus a novel, the play emphasizes $\text{dialogue and physical}$ _________ more.', correctAnswer: 'Action or Movement', hints: ['The actors must perform it', 'Movement']},
                  { id: 'q5', type: 'multiple-choice', question: 'Why might a director choose to film a novel\'s scene in a dark, confined space?', options: ['To save money', 'To create a sense of claustrophobia or fear', 'To focus on the music', 'To make the scene happy'], correctAnswer: 'To create a sense of claustrophobia or fear', hints: ['The visual medium affects the mood', 'Visual mood setting']},
                  { id: 'q6', type: 'multiple-choice', question: 'When comparing two different artistic mediums on the same subject, the reader is looking for differences in:', options: ['The author\'s name', 'The fundamental plot facts', 'Emphasis and interpretation', 'The number of characters'], correctAnswer: 'Emphasis and interpretation', hints: ['What each chooses to focus on and how they present it', 'Focus and meaning']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The medium is the form of communication, such as $\text{writing, painting, or}$ _________.', correctAnswer: 'Film or Music', hints: ['The vehicle for the subject', 'Form of art']},
                  { id: 'q8', type: 'multiple-choice', question: 'In a historical account, a photograph (visual medium) can provide a sense of authenticity that a written narrative can lack. This is an effect of the:', options: ['Plot', 'Theme', 'Medium', 'Opinion'], correctAnswer: 'Medium', hints: ['The form itself provides a unique effect', 'The art form']},
                ],
                activity: { type: 'interactive-practice', description: 'Medium Comparison Chart', instruction: 'Analyze a painting and a poem about a shared subject and complete a comparison chart.' }
              }
            ]
          },
        ],
        'Math': [
          {
            id: 'math-9th-1',
            title: 'Algebra I: Linear Equations and Functions (English I/Algebra I)',
            description: 'Master the process of solving linear equations and inequalities in one variable. Students will graph linear functions, calculate and interpret slope, write equations in various forms, and solve systems of two linear equations.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.A-REI.B.3 - Solve Linear Equations',
                content: '<h3>Solving Multi-Step Linear Equations</h3><p>To solve a linear equation for $x$, the goal is to **isolate the variable** on one side of the equation. Use the inverse operations: $1.$ Simplify both sides (Distribute, Combine Like Terms). $2.$ Use addition/subtraction to get all variable terms on one side and constants on the other. $3.$ Use multiplication/division to solve for the variable. Equations can have **one solution** (a specific number), **no solution** (a false statement like $5=0$), or **infinitely many solutions** (a true statement like $x=x$).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'Solve for $x$: $3x - 7 = 14$.', correctAnswer: '7', hints: ['Add 7 to both sides, then divide by 3', '$3x=21$']},
                  { id: 'q2', type: 'multiple-choice', question: 'Solve for $y$: $2(y + 5) = 16$.', options: ['3', '6', '11', '26'], correctAnswer: '3', hints: ['Distribute the 2, then subtract 10', '$2y+10=16$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Solve for $a$: $4a + 8 = 4(a + 2)$.', correctAnswer: 'Infinitely many solutions', hints: ['Distribute 4: $4a+8=4a+8$', 'The sides are identical']},
                  { id: 'q4', type: 'multiple-choice', question: 'Solve for $m$: $5m - 1 = 3m + 9$.', options: ['1', '5', '4', '2'], correctAnswer: '5', hints: ['Subtract $3m$, add 1', '$2m=10$']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Solve for $x$: $2x + 10 = 2x + 5$.', correctAnswer: 'No solution', hints: ['Subtract $2x$: $10=5$', 'False statement']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is the first step to solve $2(x-3) + 4x = 10$?', options: ['Add 3', 'Subtract 4x', 'Distribute 2', 'Divide by 2'], correctAnswer: 'Distribute 2', hints: ['Simplify the parentheses first', 'Use the distributive property']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Solve for $z$: $\frac{z}{2} - 3 = 1$.', correctAnswer: '8', hints: ['Add 3, then multiply by 2', '$\frac{z}{2} = 4$']},
                  { id: 'q8', type: 'multiple-choice', question: 'If the solution process results in $0=0$, the number of solutions is:', options: ['Zero', 'One', 'Infinitely many', 'Two'], correctAnswer: 'Infinitely many', hints: ['A true statement means all numbers are solutions', 'True statement']},
                ],
                activity: { type: 'interactive-practice', description: 'Linear Equation Solver', instruction: 'Solve multi-step equations and classify the number of solutions.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.F-IF.B.6 - Interpret Slope and Intercepts',
                content: '<h3>Interpreting Slope and $y$-intercept in Context</h3><p>In a real-world application of a linear function $y=mx+b$: the **slope** ($m$) represents the **rate of change** (how the $y$-value changes for every one unit change in $x$). The units of slope are $\frac{\text{units of } y}{\text{units of } x}$. The **y-intercept** ($b$) represents the **initial value** or starting point (the value of $y$ when the independent variable $x=0$). Understanding these concepts allows you to model and predict real-world phenomena like bank account balances, distance traveled, or water tank levels over time.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'In the equation $C = 25 + 10h$, where $C$ is the cost and $h$ is hours worked, what does the $y$-intercept ($25$) represent?', options: ['Hourly rate', 'Total hours', 'Initial fee', 'Total cost'], correctAnswer: 'Initial fee', hints: ['The starting amount ($C$ when $h=0$)', 'Starting value']},
                  { id: 'q2', type: 'fill-in-blank', question: 'In the equation $D = 60t$, where $D$ is distance in miles and $t$ is time in hours, what does the slope ($60$) represent?', correctAnswer: 'Speed or Rate of change in mph', hints: ['The rate of change', 'Miles per hour']},
                  { id: 'q3', type: 'multiple-choice', question: 'A negative slope in a context of "water level vs. time" would represent:', options: ['The level increasing', 'The level remaining constant', 'The level decreasing', 'The tank overflowing'], correctAnswer: 'The level decreasing', hints: ['Negative slope means a downward trend', 'Rate of decrease']},
                  { id: 'q4', type: 'fill-in-blank', question: 'The $y$-intercept in a graph of a savings account balance over time represents the initial _________.', correctAnswer: 'Deposit or amount', hints: ['Starting balance', 'Balance at time $t=0$']},
                  { id: 'q5', type: 'multiple-choice', question: 'If the slope is $\$15$/hour, which unit is in the numerator?', options: ['Hours', 'Dollars', 'Total cost', 'Time'], correctAnswer: 'Dollars', hints: ['Numerator is the $y$-variable unit (cost)', 'Units of $y$']},
                  { id: 'q6', type: 'fill-in-blank', question: 'If a car is traveling at a constant speed, the relationship between distance and time is described by a linear equation, and the speed is the _________.', correctAnswer: 'Slope or Rate', hints: ['The constant rate of change', 'The $m$ value']},
                  { id: 'q7', type: 'multiple-choice', question: 'The $y$-intercept is always the point on the graph where the $x$-coordinate is:', options: ['1', '$-1$', '0', 'Equal to $y$'], correctAnswer: '0', hints: ['Always occurs on the $y$-axis', '$x=0$']},
                  { id: 'q8', type: 'fill-in-blank', question: 'If the equation is $y = 0.5x + 3$, the rate of change is _________.', correctAnswer: '0.5', hints: ['The slope', 'Half']},
                ],
                activity: { type: 'interactive-practice', description: 'Contextual Slope Interpreter', instruction: 'Match linear equations to real-world scenarios and interpret the slope and $y$-intercept.' }
              }
            ]
          }
        ]
      },
      '10th Grade': {
        'ELA': [
          {
            id: 'ela-10th-1',
            title: 'Rhetoric and Argumentation (English II/Geometry)',
            description: 'Determine an author\'s point of view or purpose in a text and analyze how an author uses rhetoric to advance that point of view or purpose. Analyze seminal U.S. documents of historical and literary significance, including how they address related themes and concepts.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RI.9-10.6 - Analyze Rhetoric and Purpose',
                content: '<h3>Analyzing Rhetoric and Purpose</h3><p>**Rhetoric** is the art of persuasive speaking or writing. Authors use **rhetorical devices** to appeal to the audience and advance their purpose. The three main appeals are: **Logos** (appeal to logic and reason, using facts and statistics); **Pathos** (appeal to emotion, using evocative language or stories); and **Ethos** (appeal to credibility or authority, establishing the speaker\'s character). A strong argument effectively balances these three appeals. Analyzing rhetoric means identifying these appeals and explaining *how* they help the author achieve their goal (e.g., to persuade the audience to take a particular action).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'An appeal to logic and reason, often using facts and data, is known as:', options: ['Pathos', 'Ethos', 'Logos', 'Rhetoric'], correctAnswer: 'Logos', hints: ['Logic', 'Appeal to reason']},
                  { id: 'q2', type: 'fill-in-blank', question: 'An appeal to emotion, often using vivid imagery or emotional stories, is known as _________.', correctAnswer: 'Pathos', hints: ['Passion', 'Appeal to emotion']},
                  { id: 'q3', type: 'multiple-choice', question: 'When a speaker mentions their years of experience as a doctor to support a claim, they are using:', options: ['Pathos', 'Ethos', 'Logos', 'Hyperbole'], correctAnswer: 'Ethos', hints: ['Appeal to credibility', 'Character and authority']},
                  { id: 'q4', type: 'fill-in-blank', question: 'The use of repeated words or phrases for emphasis is a rhetorical device called _________.', correctAnswer: 'Repetition or Anaphora', hints: ['Repeating a phrase', 'Emphasis through repetition']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the primary goal of rhetoric?', options: ['To confuse the reader', 'To entertain the audience', 'To persuade the audience', 'To provide a summary'], correctAnswer: 'To persuade the audience', hints: ['The art of persuasion', 'Persuasion']},
                  { id: 'q6', type: 'multiple-choice', question: 'An author who uses highly charged language (e.g., "tragedy," "disaster") to describe a situation is primarily appealing to:', options: ['Logos', 'Ethos', 'Pathos', 'Diction'], correctAnswer: 'Pathos', hints: ['Emotional words', 'Emotion']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A rhetorical _________ is a question posed for dramatic effect or to make a point, rather than to elicit an answer.', correctAnswer: 'Question', hints: ['Used for effect', 'Dramatic question']},
                  { id: 'q8', type: 'multiple-choice', question: 'When analyzing rhetoric, you must determine the author\'s point of view and their overall:', options: ['Plot', 'Pacing', 'Purpose', 'Setting'], correctAnswer: 'Purpose', hints: ['Why they wrote it', 'Goal for writing']},
                ],
                activity: { type: 'interactive-practice', description: 'Rhetorical Appeal Identifier', instruction: 'Read examples and identify the primary rhetorical appeal (Logos, Pathos, or Ethos) being used.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.RI.9-10.9 - Analyze Seminal U.S. Documents',
                content: '<h3>Analyzing Seminal U.S. Documents</h3><p>**Seminal U.S. documents** (like the Declaration of Independence, the U.S. Constitution, and famous speeches like the Gettysburg Address) are historically and rhetorically significant texts that have shaped American thought. When analyzing them, compare their treatment of key themes (e.g., liberty, equality, justice). Focus on the **rhetoric** used to advance their purpose and the underlying **philosophical assumptions**. For instance, both the Declaration and the Gettysburg Address argue for equality, but the Declaration uses logos and philosophical claims, while the Gettysburg Address uses pathos and a moral call to action.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What key theme is advanced in both the Declaration of Independence and the Gettysburg Address?', options: ['Slavery', 'The power of the economy', 'Equality and liberty', 'The monarchy'], correctAnswer: 'Equality and liberty', hints: ['Foundational American ideals', 'Core American values']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The Declaration of Independence primarily uses the rhetorical appeal of $\text{Logos and appeals to}$ _________.', correctAnswer: 'Reason or Logic', hints: ['Logical structure and evidence', 'Appeals to sense']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which document begins with the preamble "We the People..."?', options: ['Declaration of Independence', 'Gettysburg Address', 'U.S. Constitution', 'Bill of Rights'], correctAnswer: 'U.S. Constitution', hints: ['The opening of the Constitution', 'Constitution']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Seminal documents are significant because they contain the founding $\text{principles and philosophical}$ _________ of the nation.', correctAnswer: 'Ideas or Assumptions', hints: ['Underlying beliefs', 'Foundational beliefs']},
                  { id: 'q5', type: 'multiple-choice', question: 'The primary purpose of the Gettysburg Address was to:', options: ['Declare independence from Great Britain', 'Rededicate a battlefield and unify the nation', 'Establish a new government', 'Argue for a new tax policy'], correctAnswer: 'Rededicate a battlefield and unify the nation', hints: ['Lincoln\'s purpose was to honor the dead and look forward', 'Unify the country']},
                  { id: 'q6', type: 'multiple-choice', question: 'What literary device is present in the Gettysburg Address phrase, "...government of the people, by the people, for the people..."?', options: ['Metaphor', 'Parallelism or Tricolon', 'Simile', 'Hyperbole'], correctAnswer: 'Parallelism or Tricolon', hints: ['Repeating a grammatical structure', 'Repeated structure']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The first ten amendments to the Constitution are known as the _________ of Rights.', correctAnswer: 'Bill', hints: ['Guarantees basic freedoms', 'Ten amendments']},
                  { id: 'q8', type: 'multiple-choice', question: 'When analyzing these documents, we compare them to see how they treat related:', options: ['Characters', 'Themes and concepts', 'Plot summaries', 'Authors'], correctAnswer: 'Themes and concepts', hints: ['Comparison points', 'Big ideas']},
                ],
                activity: { type: 'interactive-practice', description: 'Seminal Document Comparison', instruction: 'Read excerpts from two documents and identify how they treat the concept of "liberty" differently.' }
              }
            ]
          },
        ],
        'Math': [
          {
            id: 'math-10th-1',
            title: 'Geometry: Proofs, Congruence, and Similarity (English II/Geometry)',
            description: 'Master geometric proof and formalize understanding of congruence and similarity using transformations. Students will prove theorems about lines, angles, triangles, and parallelograms, and use coordinates to prove simple geometric theorems algebraically.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.G-CO.C.10 - Prove Triangle Theorems',
                content: '<h3>Triangle Congruence and Theorems</h3><p>**Congruence** means two figures are exactly the same size and shape. Triangles can be proven congruent using shortcuts: **SSS** (Side-Side-Side), **SAS** (Side-Angle-Side), **ASA** (Angle-Side-Angle), and **AAS** (Angle-Angle-Side). **CPCTC** (**C**orresponding **P**arts of **C**ongruent **T**riangles are **C**ongruent) is used after proving congruence to show specific sides or angles are equal. You must also know key theorems: The sum of angles in a triangle is $180^\circ$. The Isosceles Triangle Theorem states that if two sides of a triangle are congruent, then the angles opposite those sides are congruent.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the acronym for proving two triangles are congruent if all three sides are equal?', options: ['AAA', 'SSA', 'SAS', 'SSS'], correctAnswer: 'SSS', hints: ['Side-Side-Side', 'Three sides']},
                  { id: 'q2', type: 'fill-in-blank', question: 'What does the acronym CPCTC stand for?', correctAnswer: 'Corresponding Parts of Congruent Triangles are Congruent', hints: ['Used after congruence is proven', 'Corresponding parts...']},
                  { id: 'q3', type: 'multiple-choice', question: 'If two angles of a triangle are $50^\circ$ and $60^\circ$, what is the measure of the third angle?', options: ['$50^\circ$', '$70^\circ$', '$80^\circ$', '$110^\circ$'], correctAnswer: '$70^\circ$', hints: ['Sum of angles is $180^\circ$', '$180 - (50 + 60)$']},
                  { id: 'q4', type: 'fill-in-blank', question: 'If two sides of a triangle are congruent, the theorem states that the angles $\text{_________}$ those sides are also congruent.', correctAnswer: 'Opposite', hints: ['Angles across from the sides', 'Opposite angles']},
                  { id: 'q5', type: 'multiple-choice', question: 'Which set of conditions is *not* a valid way to prove triangle congruence?', options: ['ASA', 'AAS', 'SSA', 'SAS'], correctAnswer: 'SSA', hints: ['Side-Side-Angle does not work', 'The "donkey theorem"']},
                  { id: 'q6', type: 'multiple-choice', question: 'If $\triangle ABC \cong \triangle DEF$, which side corresponds to $AB$?', options: ['$DE$', '$EF$', '$FD$', '$AC$'], correctAnswer: '$DE$', hints: ['Matching order of the letters', 'First two letters']},
                  { id: 'q7', type: 'fill-in-blank', question: 'In a formal proof, every statement must be justified by a reason, definition, or $\text{_________}$.', correctAnswer: 'Postulate or Theorem', hints: ['Rule of geometry', 'Mathematical justification']},
                  { id: 'q8', type: 'multiple-choice', question: 'The shortest path between two points is a:', options: ['Curve', 'Line segment', 'Ray', 'Arc'], correctAnswer: 'Line segment', hints: ['Basic geometric postulate', 'Straight line']},
                ],
                activity: { type: 'interactive-practice', description: 'Triangle Congruence Prover', instruction: 'Identify the minimum required information to prove triangle congruence using SSS, SAS, ASA, or AAS.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.G-SRT.A.2 - Similarity and Scale Factor',
                content: '<h3>Similarity and Transformations</h3><p>**Similarity** means two figures have the same shape but possibly different sizes. Triangles are proven similar using **AA** (Angle-Angle), **SAS** (Side-Angle-Side $\text{Proportional}$), and **SSS** (Side-Side-Side $\text{Proportional}$). The ratio of corresponding sides is the **scale factor**. When a figure is transformed by a **dilation** (enlargement or reduction), it results in a similar figure. The scale factor is the ratio of the new side length to the original side length. Dilations with a scale factor greater than $1$ enlarge, and those less than $1$ reduce. The coordinates of a dilated figure are found by multiplying the original coordinates by the scale factor.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If two triangles are similar, their corresponding angles are:', options: ['Proportional', 'Congruent (Equal)', 'Double the size', 'Not related'], correctAnswer: 'Congruent (Equal)', hints: ['Same shape means same angles', 'Angles are equal']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The ratio of corresponding side lengths in similar figures is called the $\text{_________}$.', correctAnswer: 'Scale Factor', hints: ['The ratio of enlargement/reduction', 'Ratio of sides']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which transformation always results in a similar, but not necessarily congruent, figure?', options: ['Reflection', 'Rotation', 'Translation', 'Dilation'], correctAnswer: 'Dilation', hints: ['Changes size but keeps shape', 'Dilation changes size']},
                  { id: 'q4', type: 'fill-in-blank', question: 'If $\triangle ABC \sim \triangle XYZ$ with a scale factor of $2$, and side $AB=5$, what is the length of side $XY$?', correctAnswer: '10', hints: ['Multiply the original length by the scale factor', '$5 \times 2$']},
                  { id: 'q5', type: 'multiple-choice', question: 'A dilation with a scale factor of $0.5$ results in an:', options: ['Enlargement', 'Reduction', 'Congruent figure', 'Isometry'], correctAnswer: 'Reduction', hints: ['Scale factor less than 1', 'Smaller figure']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which postulate is used to prove triangle similarity based only on two angles?', options: ['SSS', 'SAS', 'AA', 'AAS'], correctAnswer: 'AA', hints: ['Angle-Angle', 'Two angles']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If a point $(3, 6)$ is dilated by a scale factor of $\frac{1}{3}$, the new coordinates are $\text{_________}$.', correctAnswer: '(1, 2)', hints: ['Multiply both coordinates by $\frac{1}{3}$', '$(3 \times \frac{1}{3}, 6 \times \frac{1}{3})$']},
                  { id: 'q8', type: 'multiple-choice', question: 'If two figures are congruent, they are also always:', options: ['Dilated', 'Rotated', 'Similar', 'Reflected'], correctAnswer: 'Similar', hints: ['Congruent is a special case of similar (scale factor is 1)', 'Same shape']},
                ],
                activity: { type: 'interactive-practice', description: 'Scale Factor Calculator', instruction: 'Calculate the scale factor between two similar figures and determine the coordinates of a dilated figure.' }
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-10th-1',
            title: 'Chemistry: Atomic Structure and Bonding',
            description: 'Analyze the structure of the atom, including subatomic particles and isotopes. Students will explain how elements form ionic and covalent bonds to create compounds and master the nomenclature of basic compounds.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.9-12.C.1 - Atomic Structure and Isotopes',
                content: '<h3>The Components of an Atom</h3><p>Atoms consist of three **subatomic particles**: **protons** (positive charge, found in the nucleus), **neutrons** (no charge, found in the nucleus), and **electrons** (negative charge, orbiting the nucleus). The **atomic number** (Z) is the number of protons and defines the element. The **mass number** is the sum of protons and neutrons. **Isotopes** are atoms of the same element (same number of protons) but with different numbers of neutrons, giving them different mass numbers (e.g., Carbon-12 and Carbon-14).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which subatomic particle determines the element\'s identity?', options: ['Neutron', 'Electron', 'Proton', 'Isotope'], correctAnswer: 'Proton', hints: ['The atomic number (Z)', 'Proton']},
                  { id: 'q2', type: 'multiple-choice', question: 'Isotopes of an element have the same number of protons but different numbers of:', options: ['Electrons', 'Neutrons', 'Atomic Mass', 'Valence Electrons'], correctAnswer: 'Neutrons', hints: ['Changes the mass number', 'Neutrons']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The $\text{_________}$ $\text{number}$ is the sum of protons and neutrons in the nucleus.', correctAnswer: 'Mass', hints: ['Total mass of the nucleus', 'Mass number']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which particle is found orbiting the nucleus?', options: ['Proton', 'Neutron', 'Electron', 'Nucleon'], correctAnswer: 'Electron', hints: ['Negative charge, outside the nucleus', 'Electron']},
                  { id: 'q5', type: 'fill-in-blank', question: 'In a neutral atom, the number of protons equals the number of $\text{_________}$.', correctAnswer: 'Electrons', hints: ['Balances the charges', 'Electrons']},
                  { id: 'q6', type: 'multiple-choice', question: 'If an atom has 6 protons, 6 electrons, and 8 neutrons, its mass number is:', options: ['6', '12', '14', '20'], correctAnswer: '14', hints: ['Protons + Neutrons: $6+8$', '14']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The outer shell electrons involved in bonding are called $\text{_________}$ $\text{electrons}$.', correctAnswer: 'Valence', hints: ['Outermost shell', 'Valence']},
                ],
                activity: { type: 'isotope-calculation', description: 'Calculate the number of neutrons in a given isotope (e.g., Oxygen-16 and Oxygen-18).', instruction: 'Draw a Bohr model diagram for a simple element (e.g., Lithium).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.9-12.C.2 - Chemical Bonding',
                content: '<h3>Ionic vs. Covalent Bonds</h3><p>Atoms bond to achieve a stable, full outer electron shell (usually 8 electrons, the **Octet Rule**). **Ionic bonds** form between metals and nonmetals by the **transfer** of electrons, resulting in charged ions that attract each other ($\text{Na}^+ \text{Cl}^-$). **Covalent bonds** form between two nonmetals by the **sharing** of electrons (e.g., $\text{H}_2\text{O}$). Ionic compounds typically dissolve in water and conduct electricity; covalent compounds usually do not.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'A bond formed by the **transfer** of electrons is:', options: ['Covalent', 'Metallic', 'Hydrogen', 'Ionic'], correctAnswer: 'Ionic', hints: ['Forms charged ions', 'Ionic']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which type of bond typically forms between two nonmetals?', options: ['Ionic', 'Covalent', 'Metallic', 'Van der Waals'], correctAnswer: 'Covalent', hints: ['Sharing electrons', 'Covalent']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The principle that atoms tend to form bonds to obtain 8 valence electrons is the $\text{_________}$ $\text{Rule}$.', correctAnswer: 'Octet', hints: ['Rule of eight', 'Octet Rule']},
                  { id: 'q4', type: 'multiple-choice', question: 'What is the charge of a potassium ion ($\text{K}$) after losing one electron?', options: ['$\text{K}^-$', '$\text{K}^+$', '$\text{K}^{2+}$', 'Neutral'], correctAnswer: '$\text{K}^+$', hints: ['Losing negative charge results in positive charge', 'Positive ion']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Compounds formed by covalent bonds are called $\text{_________}$ $\text{compounds}$.', correctAnswer: 'Molecular', hints: ['Non-ionic compounds', 'Molecular']},
                  { id: 'q6', type: 'multiple-choice', question: 'Sodium chloride ($\text{NaCl}$) is held together by:', options: ['Covalent bonds', 'Metallic bonds', 'Ionic bonds', 'Hydrogen bonds'], correctAnswer: 'Ionic bonds', hints: ['Metal and nonmetal', 'Ionic bonds']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The force of attraction between oppositely charged ions is the basis of an $\text{_________}$ bond.', correctAnswer: 'Ionic', hints: ['Positive attracts negative', 'Ionic']},
                ],
                activity: { type: 'bond-prediction', description: 'Predict the type of bond (ionic or covalent) that will form between two given elements.', instruction: 'Draw a Lewis dot structure showing the transfer of electrons for $\text{CaCl}_2$.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.9-12.C.3 - Chemical Nomenclature',
                content: '<h3>Naming Chemical Compounds</h3><p>**Nomenclature** is the system of naming compounds. For **Ionic Compounds**, name the cation (metal) first, followed by the anion (nonmetal) with the suffix changed to $-ide$ ($\text{NaCl}$ is sodium chloride). For **Covalent Compounds**, use prefixes to indicate the number of atoms (mono-, di-, tri-, etc.) and change the second element\'s suffix to $-ide$ ($\text{CO}_2$ is carbon dioxide). Naming conventions ensure clear communication between scientists worldwide.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the correct name for the ionic compound $\text{KCl}$?', options: ['Potassium Chlorine', 'Potassium Chloride', 'Potassium Chlorate', 'Potassium Monochloride'], correctAnswer: 'Potassium Chloride', hints: ['Metal first, nonmetal with -ide', 'Potassium Chloride']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the correct name for the covalent compound $\text{N}_2\text{O}_4$?', options: ['Nitrogen Oxide', 'Dinitrogen Tetroxide', 'Nitrogen Tetraoxide', 'Dinitrogen Oxide'], correctAnswer: 'Dinitrogen Tetroxide', hints: ['Use prefixes di- and tetr-', 'Dinitrogen Tetroxide']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The prefix for four atoms in a covalent bond is $\text{_________}$.', correctAnswer: 'Tetra-', hints: ['Greek prefix for four', 'Tetra-']},
                  { id: 'q4', type: 'multiple-choice', question: 'The name for the ionic compound $\text{MgO}$ is:', options: ['Magnesium Oxide', 'Monamagnesium Monooxide', 'Magnesium Oxygen', 'Magnesium (II) Oxide'], correctAnswer: 'Magnesium Oxide', hints: ['O is changed to oxide', 'Magnesium Oxide']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The name of the covalent compound $\text{CCl}_4$ is Carbon $\text{_________}$.', correctAnswer: 'Tetrachloride', hints: ['$\text{C}$ is named first; 4 $\text{Cl}$ is tetra-', 'Tetrachloride']},
                  { id: 'q6', type: 'multiple-choice', question: 'The cation (positive ion) in an ionic compound is always named:', options: ['Last', 'First', 'With a prefix', 'With an -ide suffix'], correctAnswer: 'First', hints: ['Typically the metal', 'First']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is the chemical formula for Dihydrogen Monoxide?', correctAnswer: '$\text{H}_2\text{O}$', hints: ['Di=2 $\text{H}$, Mono=1 $\text{O}$', '$\text{H}_2\text{O}$']},
                  { id: 'q8', type: 'multiple-choice', question: 'The common name for $\text{CO}$ is:', options: ['Carbon Dioxide', 'Carbon Monoxide', 'Carbon Monooxide', 'Carbon Oxide'], correctAnswer: 'Carbon Monoxide', hints: ['Mono- means one', 'Carbon Monoxide']},
                ],
                activity: { type: 'compound-naming-drill', description: 'Practice converting chemical formulas ($\text{P}_2\text{O}_5$, $\text{AlCl}_3$) to their correct systematic names.', instruction: 'Explain why the compound $\text{NaCl}$ does not require prefixes.' }
              }
            ]
          },
          {
            id: 'science-10th-2',
            title: 'Chemistry: Reactions and Stoichiometry',
            description: 'Master balancing chemical equations to obey the Law of Conservation of Mass. Students will classify reactions, understand the concept of the mole, and perform basic stoichiometric calculations to predict product amounts.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.9-12.C.4 - Balancing Equations',
                content: '<h3>The Law of Conservation of Mass in Reactions</h3><p>In a chemical reaction, atoms are rearranged but never created or destroyed; thus, the total mass is conserved. **Balancing chemical equations** ensures the number of atoms of each element is equal on the **reactant** (left) side and the **product** (right) side. This is done by adding **coefficients** (large numbers) in front of the chemical formulas. You can never change the subscripts within a formula.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What can be adjusted to balance a chemical equation?', options: ['Subscripts', 'Coefficients', 'Element symbols', 'Formulas'], correctAnswer: 'Coefficients', hints: ['The large numbers in front', 'Coefficients']},
                  { id: 'q2', type: 'multiple-choice', question: 'In the reaction $\text{H}_2 + \text{Cl}_2 \to \text{HCl}$, what coefficient is needed for $\text{HCl}$ to balance the equation?', options: ['1', '2', '3', '4'], correctAnswer: '2', hints: ['Requires two $\text{H}$ and two $\text{Cl}$ on the product side', '2']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The total mass of the $\text{_________}$ must equal the total mass of the products.', correctAnswer: 'Reactants', hints: ['The starting materials', 'Reactants']},
                  { id: 'q4', type: 'multiple-choice', question: 'The law that requires all chemical equations to be balanced is the:', options: ['Law of Definite Proportions', 'Law of Conservation of Energy', 'Law of Conservation of Mass', 'Boyle\'s Law'], correctAnswer: 'Law of Conservation of Mass', hints: ['Mass is conserved', 'Conservation of Mass']},
                  { id: 'q5', type: 'fill-in-blank', question: 'When balancing an equation, you should treat polyatomic ions (like $\text{SO}_4$) as a single $\text{_________}$ if they remain unchanged.', correctAnswer: 'Unit', hints: ['Simplifies the counting', 'Unit']},
                  { id: 'q6', type: 'multiple-choice', question: 'After balancing $\text{N}_2 + \text{H}_2 \to \text{NH}_3$, what is the coefficient for $\text{H}_2$?', options: ['1', '2', '3', '4'], correctAnswer: '3', hints: ['The balanced equation is $\text{N}_2 + 3\text{H}_2 \to 2\text{NH}_3$', '3']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If you start a reaction with $20$ grams of reactants, you must end with $\text{_________}$ grams of products.', correctAnswer: '20', hints: ['Mass is constant', '20']},
                ],
                activity: { type: 'balancing-game', description: 'Balance three simple chemical equations ($\text{CH}_4 + \text{O}_2 \to \text{CO}_2 + \text{H}_2\text{O}$ and $\text{K} + \text{Cl}_2 \to \text{KCl}$) using virtual coefficients.', instruction: 'Explain why changing a subscript is illegal in balancing.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.9-12.C.5 - Types of Reactions',
                content: '<h3>Classifying Chemical Reactions</h3><p>Chemical reactions are classified into four main types: **Synthesis** (A + B $\to$ AB, combining elements), **Decomposition** (AB $\to$ A + B, breaking down), **Single Replacement** (A + BC $\to$ AC + B, one element trades places), and **Double Replacement** (AB + CD $\to$ AD + CB, two compounds trade ions). Understanding these patterns allows you to predict the products of many reactions.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The reaction $2\text{Na} + \text{Cl}_2 \to 2\text{NaCl}$ is an example of a $\text{_________}$ reaction.', options: ['Decomposition', 'Synthesis', 'Single Replacement', 'Double Replacement'], correctAnswer: 'Synthesis', hints: ['Two or more reactants form one product', 'Synthesis']},
                  { id: 'q2', type: 'multiple-choice', question: 'The reaction $\text{Zn} + \text{CuSO}_4 \to \text{ZnSO}_4 + \text{Cu}$ is a $\text{_________}$ reaction.', options: ['Synthesis', 'Decomposition', 'Single Replacement', 'Double Replacement'], correctAnswer: 'Single Replacement', hints: ['One element replaces another', 'Single Replacement']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A reaction where a single compound breaks down into two or more simpler substances is $\text{_________}$.', correctAnswer: 'Decomposition', hints: ['Breaking apart', 'Decomposition']},
                  { id: 'q4', type: 'multiple-choice', question: 'In a **Double Replacement** reaction, what forms?', options: ['New elements', 'Two new compounds (e.g., precipitate)', 'A single complex product', 'A single complex reactant'], correctAnswer: 'Two new compounds (e.g., precipitate)', hints: ['Ions trade partners', 'Two new compounds']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The reaction $\text{AB} \to \text{A} + \text{B}$ represents a $\text{_________}$ pattern.', correctAnswer: 'Decomposition', hints: ['General form', 'Decomposition']},
                  { id: 'q6', type: 'multiple-choice', question: 'The reaction pattern $\text{A} + \text{B} \to \text{AB}$ represents a $\text{_________}$ reaction.', options: ['Synthesis', 'Decomposition', 'Single Replacement', 'Double Replacement'], correctAnswer: 'Synthesis', hints: ['General form', 'Synthesis']},
                  { id: 'q7', type: 'fill-in-blank', question: 'In a single replacement reaction, a more $\text{_________}$ element will replace a less reactive element.', correctAnswer: 'Reactive', hints: ['Drives the reaction', 'Reactive']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which type of reaction is $\text{HCl} + \text{NaOH} \to \text{NaCl} + \text{H}_2\text{O}$?', options: ['Synthesis', 'Decomposition', 'Single Replacement', 'Double Replacement'], correctAnswer: 'Double Replacement', hints: ['$\text{H}$ and $\text{Na}$ trade partners', 'Double Replacement']},
                ],
                activity: { type: 'reaction-classification', description: 'Classify five given chemical equations into the four main reaction types.', instruction: 'Predict the products of a single replacement reaction between Magnesium ($\text{Mg}$) and $\text{HCl}$.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.9-12.C.6 - Stoichiometry Introduction (The Mole)',
                content: '<h3>The Mole and Molar Mass</h3><p>The **mole** is the $\text{SI}$ unit for the amount of substance (like a "dozen" for atoms). One mole of any substance contains $\mathbf{6.02 \times 10^{23}}$ particles (**Avogadro\'s number**). The **molar mass** of a substance is the mass in grams of one mole, found by adding the atomic masses of all atoms in the chemical formula (e.g., $\text{H}_2\text{O}$ molar mass is $2(1.008 \text{g/mol}) + 1(16.00 \text{g/mol}) \approx 18.02 \text{ g/mol}$). Molar mass is the key to converting between mass and moles, which is essential for **stoichiometry** (predicting reaction quantities).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The $\text{SI}$ unit for the amount of substance is the:', options: ['Gram', 'Mole', 'Liter', 'Newton'], correctAnswer: 'Mole', hints: ['Fundamental unit in chemistry', 'Mole']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the numerical value of Avogadro\'s number?', options: ['$6.02 \times 10^{23}$', '$1.00 \times 10^{23}$', '$1.60 \times 10^{-19}$', '$6.02 \times 10^{-23}$'], correctAnswer: '$6.02 \times 10^{23}$', hints: ['Number of particles in one mole', 'Avogadro\'s number']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The mass in grams of one mole of a substance is called its $\text{_________}$ $\text{_________}$.', correctAnswer: 'Molar Mass', hints: ['Atomic mass converted to grams', 'Molar Mass']},
                  { id: 'q4', type: 'multiple-choice', question: 'What information is needed to calculate the molar mass of a compound?', options: ['Density and volume', 'Atomic masses of the elements', 'Only Avogadro\'s number', 'Pressure and temperature'], correctAnswer: 'Atomic masses of the elements', hints: ['Sum of all atoms in the formula', 'Atomic masses']},
                  { id: 'q5', type: 'fill-in-blank', question: 'To convert from moles to mass, you must $\text{_________}$ by the molar mass.', correctAnswer: 'Multiply', hints: ['Unit conversion factor', 'Multiply']},
                  { id: 'q6', type: 'multiple-choice', question: 'If a mole of $\text{A}$ reacts with 2 moles of $\text{B}$, how many particles of $\text{B}$ are involved?', options: ['$6.02 \times 10^{23}$', '$1.204 \times 10^{24}$', '$3.01 \times 10^{23}$', '$2 \times 10^{23}$'], correctAnswer: '$1.204 \times 10^{24}$', hints: ['Two times Avogadro\'s number', 'Two times Avogadro\'s']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The molar mass of $\text{C}$ ($\text{atomic mass} = 12.01$) is $\text{_________}$ $\text{g/mol}$.', correctAnswer: '12.01', hints: ['Equal to its atomic mass', '12.01']},
                  { id: 'q8', type: 'multiple-choice', question: 'What process uses molar ratios to predict the amount of product formed in a reaction?', options: ['Nomenclature', 'Balancing', 'Stoichiometry', 'Titration'], correctAnswer: 'Stoichiometry', hints: ['Chemical calculation of amounts', 'Stoichiometry']},
                ],
                activity: { type: 'molar-mass-calculation', description: 'Calculate the molar mass of $\text{CO}_2$ ($\text{C}=12.01$, $\text{O}=16.00$).', instruction: 'Convert 3 moles of $\text{NaCl}$ to grams ($\text{Na}=22.99$, $\text{Cl}=35.45$).' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-10th-1',
            title: 'U.S. Government: Constitutional Structure',
            description: 'Analyze the structure and function of the U.S. government, emphasizing the Constitution, federalism, and the roles of the three branches of government. Examine the rights and responsibilities of citizens in a democracy.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.9-12.GC.1 - Legislative Branch (Congress)',
                content: '<h3>The Legislative Branch: Making Laws</h3><p>The Legislative Branch (**Congress**) is responsible for **making laws** and is bicameral (two houses): the **House of Representatives** (based on population, 435 members) and the **Senate** (equal representation, 100 members). The Senate holds specific powers, like ratifying treaties and confirming Supreme Court justices. The primary function is to create bills that can become law, subject to checks from the President (Veto) and the Supreme Court (Judicial Review).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The U.S. Congress is divided into two houses, meaning it is:', options: ['Unicameral', 'Bicameral', 'Tricameral', 'Federal'], correctAnswer: 'Bicameral', hints: ['Two chambers', 'Bicameral']},
                  { id: 'q2', type: 'multiple-choice', question: 'Representation in the **House of Representatives** is based on:', options: ['Equal representation per state', 'State population', 'State size', 'Economic status'], correctAnswer: 'State population', hints: ['Larger states have more votes', 'Population']},
                  { id: 'q3', type: 'fill-in-blank', question: 'All bills involving federal revenue (taxes) must originate in the $\text{_________}$ of $\text{_________}$.', correctAnswer: 'House of Representatives', hints: ['Closer to the people', 'House of Representatives']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which body has the sole power to ratify treaties?', options: ['The President', 'The Supreme Court', 'The House of Representatives', 'The Senate'], correctAnswer: 'The Senate', hints: ['Special power of the upper house', 'The Senate']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The constitutional power to regulate interstate and foreign commerce is the $\text{_________}$ $\text{_________}$.', correctAnswer: 'Commerce Clause', hints: ['Key economic power of Congress', 'Commerce Clause']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is the term length for a U.S. Senator?', options: ['2 years', '4 years', '6 years', '8 years'], correctAnswer: '6 years', hints: ['Longer term for stability', '6 years']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The process of accusing a government official of wrongdoing is called $\text{_________}$.', correctAnswer: 'Impeachment', hints: ['Power held by the House', 'Impeachment']},
                  { id: 'q8', type: 'multiple-choice', question: 'A bill must pass both houses of Congress and be signed by the President to become a:', options: ['Treaty', 'Veto', 'Law', 'Amendment'], correctAnswer: 'Law', hints: ['Final legislative step', 'Law']},
                ],
                activity: { type: 'bill-to-law-simulation', description: 'Trace the path of a hypothetical bill through both the House and Senate.', instruction: 'Explain why the Founders created a bicameral legislature instead of a unicameral one.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.9-12.GC.2 - Executive Branch (The President)',
                content: '<h3>The Executive Branch: Enforcing Laws</h3><p>The Executive Branch is led by the **President** and is responsible for **enforcing and administering laws**. The President acts as the **Commander-in-Chief** of the armed forces and conducts foreign policy. Key tools of the President include the **Veto** power (blocking legislation), issuing **Executive Orders** (directives with the force of law), and appointing cabinet members and judges (with Senate approval). The President is elected via the **Electoral College**, not solely by popular vote.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The primary role of the Executive Branch is to:', options: ['Make laws', 'Interpret laws', 'Enforce laws', 'Ratify treaties'], correctAnswer: 'Enforce laws', hints: ['To carry out or execute the laws', 'Enforce laws']},
                  { id: 'q2', type: 'multiple-choice', question: 'When the President rejects a bill passed by Congress, this is called a:', options: ['Executive Order', 'Treaty', 'Veto', 'Writ of certiorari'], correctAnswer: 'Veto', hints: ['Presidential check on Congress', 'Veto']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The President is the supreme commander of the military, also known as the $\text{_________}$ $\text{_________}$.', correctAnswer: 'Commander-in-Chief', hints: ['Head of the armed forces', 'Commander-in-Chief']},
                  { id: 'q4', type: 'multiple-choice', question: 'The President is formally elected by the:', options: ['Supreme Court', 'Popular Vote', 'Electoral College', 'U.S. Senate'], correctAnswer: 'Electoral College', hints: ['Indirect method of election', 'Electoral College']},
                  { id: 'q5', type: 'fill-in-blank', question: 'A directive or rule issued by the President that has the force of law without Congressional approval is an $\text{_________}$ $\text{_________}$.', correctAnswer: 'Executive Order', hints: ['Immediate command', 'Executive Order']},
                  { id: 'q6', type: 'multiple-choice', question: 'Appointments made by the President, such as cabinet members and judges, must be approved by the:', options: ['House of Representatives', 'Supreme Court', 'State Governors', 'Senate'], correctAnswer: 'Senate', hints: ['Senate advises and consents', 'Senate']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The President serves a $\text{_________}$-year term and can be re-elected once.', correctAnswer: 'Four', hints: ['Term limit', 'Four-year']},
                  { id: 'q8', type: 'multiple-choice', question: 'The group of top advisors appointed by the President is known as the:', options: ['White House Staff', 'Cabinet', 'Secret Service', 'Joint Chiefs'], correctAnswer: 'Cabinet', hints: ['Advisory body', 'Cabinet']},
                ],
                activity: { type: 'presidential-power-analysis', description: 'Analyze the difference between a law passed by Congress and an Executive Order issued by the President.', instruction: 'Discuss why the Electoral College exists and its impact on modern elections.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.9-12.GC.3 - Judicial Branch (The Courts)',
                content: '<h3>The Judicial Branch: Interpreting Laws</h3><p>The Judicial Branch, headed by the **Supreme Court**, is responsible for **interpreting laws** and applying the Constitution. Its most significant power is **Judicial Review** (the power to declare a law unconstitutional, established in *Marbury v. Madison*). Federal judges serve for life (on good behavior) to ensure they are shielded from political pressure. The Judicial Branch provides a final check on the power of the other two branches and protects the Constitution.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The primary role of the Judicial Branch is to:', options: ['Make laws', 'Enforce laws', 'Interpret laws', 'Declare war'], correctAnswer: 'Interpret laws', hints: ['Determine meaning and constitutionality', 'Interpret laws']},
                  { id: 'q2', type: 'multiple-choice', question: 'The power of **Judicial Review** was established by the Supreme Court case:', options: ['Plessy v. Ferguson', 'Marbury v. Madison', 'McCulloch v. Maryland', 'Dred Scott v. Sandford'], correctAnswer: 'Marbury v. Madison', hints: ['1803 case', 'Marbury v. Madison']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Federal judges and Supreme Court Justices serve for $\text{_________}$ (on good behavior).', correctAnswer: 'Life', hints: ['To ensure independence', 'Life']},
                  { id: 'q4', type: 'multiple-choice', question: 'When the Supreme Court hears a case for the first time, it is using its $\text{_________}$ jurisdiction.', options: ['Appellate', 'Original', 'Veto', 'Inherent'], correctAnswer: 'Original', hints: ['First instance', 'Original']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The Supreme Court is made up of eight associate justices and one $\text{_________}$ $\text{Justice}$.', correctAnswer: 'Chief', hints: ['The head of the court', 'Chief Justice']},
                  { id: 'q6', type: 'multiple-choice', question: 'What is the highest court in the U.S. federal system?', options: ['District Court', 'Appeals Court', 'Supreme Court', 'State Supreme Court'], correctAnswer: 'Supreme Court', hints: ['Final court of appeal', 'Supreme Court']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The term for a request for the Supreme Court to review a case is a $\text{writ}$ $\text{of}$ $\text{_________}$.', correctAnswer: 'Certiorari', hints: ['How most cases reach the Supreme Court', 'Certiorari']},
                  { id: 'q8', type: 'multiple-choice', question: 'Judicial Review allows the Judicial Branch to check the power of the:', options: ['Executive and Legislative Branches', 'States only', 'Military only', 'Voters only'], correctAnswer: 'Executive and Legislative Branches', hints: ['Checks both the President and Congress', 'Both branches']},
                ],
                activity: { type: 'judicial-review-analysis', description: 'Analyze the principle of Judicial Review and its importance in maintaining the Constitution.', instruction: 'Discuss why the lifetime tenure of judges is important for their independence.' }
              }
            ]
          },
          {
            id: 'ss-10th-2',
            title: 'U.S. Government: Civil Liberties and Rights',
            description: 'Analyze the Bill of Rights and the protections of civil liberties. Students will examine the role of the 14th Amendment in extending rights and analyze the ways civil rights have been protected or denied throughout U.S. history.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.9-12.GC.4 - First Amendment Freedoms',
                content: '<h3>Civil Liberties in the First Amendment</h3><p>The **First Amendment** guarantees five freedoms: religion, speech, press, assembly, and petition. These are not absolute; for example, freedom of speech can be limited if it incites violence or defamation. The **Establishment Clause** prevents the government from establishing a national religion, and the **Free Exercise Clause** protects an individual\'s right to practice their faith. The Supreme Court constantly rules on the boundaries and limits of these civil liberties.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The clause that prevents the government from establishing an official national religion is the:', options: ['Free Exercise Clause', 'Establishment Clause', 'Commerce Clause', 'Necessary and Proper Clause'], correctAnswer: 'Establishment Clause', hints: ['Prohibits state church', 'Establishment Clause']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is a common limit on freedom of speech?', options: ['Criticizing the President', 'Expressing an unpopular opinion', 'Incitement to imminent lawless action', 'Wearing symbolic clothing'], correctAnswer: 'Incitement to imminent lawless action', hints: ['The "clear and present danger" test', 'Incitement to violence']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The freedom to gather peacefully in groups is the freedom of $\text{_________}$.', correctAnswer: 'Assembly', hints: ['Gathering', 'Assembly']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a form of symbolic speech protected by the First Amendment?', options: ['Shouting "fire" falsely', 'Wearing an armband to protest a war', 'Defamation (libel)', 'Inciting a riot'], correctAnswer: 'Wearing an armband to protest a war', hints: ['Protected non-verbal expression', 'Symbolic speech']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The $\text{_________}$ $\text{Exercise}$ $\text{Clause}$ protects an individual\'s right to practice their religion as they choose.', correctAnswer: 'Free', hints: ['Right to practice', 'Free Exercise']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which freedom allows citizens to express opinions without government censorship?', options: ['Religion', 'Press', 'Assembly', 'Petition'], correctAnswer: 'Press', hints: ['Freedom of the media', 'Press']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Slander (spoken) and libel (written) are forms of $\text{_________}$ that are not protected speech.', correctAnswer: 'Defamation', hints: ['Harmful false statements', 'Defamation']},
                ],
                activity: { type: 'first-amendment-case-study', description: 'Analyze the facts and outcome of a key free speech case (*Tinker v. Des Moines*).', instruction: 'Discuss why the freedom of the press is vital to a functioning democracy.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.9-12.GC.5 - 14th Amendment and Due Process',
                content: '<h3>The 14th Amendment and Due Process</h3><p>The **14th Amendment** (1868) is one of the most important amendments, containing the **Citizenship Clause**, the **Due Process Clause**, and the **Equal Protection Clause**. The **Due Process Clause** guarantees that states must respect all legal rights owed to a person (procedural and substantive). The **Equal Protection Clause** mandates that states cannot deny any person within its jurisdiction the equal protection of the laws, which was crucial for the **Civil Rights Movement** and dismantling segregation.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The $\text{_________}$ $\text{Clause}$ was key to ending racial segregation in schools.', options: ['Due Process', 'Establishment', 'Equal Protection', 'Necessary and Proper'], correctAnswer: 'Equal Protection', hints: ['Crux of *Brown v. Board*', 'Equal Protection']},
                  { id: 'q2', type: 'multiple-choice', question: 'What does the Due Process Clause guarantee?', options: ['Equal representation in Congress', 'Fair treatment under the law', 'Right to bear arms', 'Freedom of speech'], correctAnswer: 'Fair treatment under the law', hints: ['Government must follow fair procedures', 'Fair treatment']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The 14th Amendment extended citizenship to all persons born or $\text{_________}$ in the United States.', correctAnswer: 'Naturalized', hints: ['Birthright citizenship', 'Naturalized']},
                  { id: 'q4', type: 'multiple-choice', question: 'The 14th Amendment was passed primarily to protect the rights of:', options: ['Women', 'Native Americans', 'Newly freed slaves', 'Immigrants'], correctAnswer: 'Newly freed slaves', hints: ['Passed during Reconstruction', 'Newly freed slaves']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The $\text{_________}$ $\text{Doctrine}$ (separate but equal) was overturned by the Supreme Court using the 14th Amendment.', correctAnswer: 'Separate but Equal', hints: ['Justified segregation', 'Separate but Equal']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which protection is primarily covered by **procedural** due process?', options: ['The law itself is fair', 'The right to an attorney and a fair trial', 'The right to vote', 'The right to own property'], correctAnswer: 'The right to an attorney and a fair trial', hints: ['Fairness in the process', 'Fair trial/attorney']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Substantive due process refers to whether the $\text{_________}$ $\text{itself}$ is fair and constitutional.', correctAnswer: 'Law', hints: ['Fairness of the policy', 'The Law']},
                  { id: 'q8', type: 'multiple-choice', question: 'The 14th Amendment made which set of protections applicable to the **states**?', options: ['Only the 1st Amendment', 'The entire Bill of Rights', 'Only the 10th Amendment', 'Only the 1st and 5th Amendments'], correctAnswer: 'The entire Bill of Rights', hints: ['Selective incorporation', 'Bill of Rights']},
                ],
                activity: { type: 'amendment-impact-chart', description: 'Create a chart showing how the 14th Amendment impacts the legal rights of minority groups.', instruction: 'Analyze how the Equal Protection Clause applies to disability rights.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.9-12.GC.6 - Political Parties and Elections',
                content: '<h3>Political Systems and Voter Behavior</h3><p>The U.S. primarily operates on a **two-party system** (Democrats and Republicans). **Political Parties** serve to organize and mobilize voters, recruit candidates, and set policy agendas. **Interest Groups** seek to influence specific policies without running candidates. **Voter turnout** is influenced by factors like education, income, and political efficacy. The electoral process includes primaries, caucuses, and the general election, culminating in the **Electoral College** vote for president.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The two main political parties in the U.S. are the Democrats and the:', options: ['Green Party', 'Libertarian Party', 'Republican Party', 'Whig Party'], correctAnswer: 'Republican Party', hints: ['The two major parties', 'Republicans']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the main goal of a **political party**?', options: ['Lobbying Congress', 'Getting their members elected to office', 'Running the court system', 'Writing the Constitution'], correctAnswer: 'Getting their members elected to office', hints: ['Winning elections', 'Electing members']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Groups that focus on influencing specific policy issues without running candidates are called $\text{_________}$ $\text{Groups}$.', correctAnswer: 'Interest', hints: ['Lobbying groups', 'Interest Groups']},
                  { id: 'q4', type: 'multiple-choice', question: 'The official selection of the President is done by the:', options: ['Popular Vote', 'U.S. Senate', 'Electoral College', 'House of Representatives'], correctAnswer: 'Electoral College', hints: ['Constitutional body', 'Electoral College']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The level of voter participation in an election is known as voter $\text{_________}$.', correctAnswer: 'Turnout', hints: ['How many people vote', 'Turnout']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which factor is most likely to increase voter turnout?', options: ['Low income', 'High education level', 'Young age (18-25)', 'Low political efficacy'], correctAnswer: 'High education level', hints: ['Correlates with higher participation', 'High education']},
                  { id: 'q7', type: 'fill-in-blank', question: 'An election where voters choose which candidate will represent their party in the general election is a $\text{_________}$.', correctAnswer: 'Primary', hints: ['Party selection process', 'Primary']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which party generally favors a smaller federal government and lower taxes?', options: ['Democratic', 'Republican', 'Green', 'Libertarian'], correctAnswer: 'Republican', hints: ['Conservative platform', 'Republican']},
                ],
                activity: { type: 'voter-analysis', description: 'Analyze data showing voter turnout rates based on age and education level.', instruction: 'Discuss arguments for and against abolishing the Electoral College.' }
              }
            ]
          }
        ]
      },
      '11th Grade': {
        'ELA': [
          {
            id: 'ela-11th-1',
            title: 'Foundations of Research and Analysis (English III/Algebra II)',
            description: 'Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings. Analyze syntax and rhetoric. Conduct short as well as more sustained research projects to answer a question or solve a problem.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.L.11-12.5 - Analyze Word Meaning and Tone',
                content: '<h3>Figurative Language, Connotation, and Tone</h3><p>In advanced analysis, students must recognize how an author\'s word choice (diction) contributes to the overall **tone** and meaning. **Tone** is the author\'s attitude toward the subject, conveyed through word choice and style. **Connotation** (the feeling a word evokes) is a major contributor to tone: using "slender" instead of "skinny" creates a more positive or admiring tone. You must also analyze complex **figurative language** (such as extended metaphors or paradoxes) and explain how these devices deepen the meaning and impact of the text. Word choice is never accidental; it is a deliberate rhetorical tool.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The author\'s attitude toward the subject is called the:', options: ['Theme', 'Purpose', 'Tone', 'Mood'], correctAnswer: 'Tone', hints: ['Author\'s feeling', 'Attitude']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The emotional association of a word is its _________.', correctAnswer: 'Connotation', hints: ['Feeling', 'Emotional meaning']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which word, used to describe a stubborn person, has a more negative connotation: "tenacious" or "pigheaded"?', options: ['Tenacious', 'Pigheaded', 'Both', 'Neither'], correctAnswer: 'Pigheaded', hints: ['Implies stubbornness to a fault', 'Negative feeling']},
                  { id: 'q4', type: 'fill-in-blank', question: 'A statement that appears self-contradictory but contains a deeper truth is a _________.', correctAnswer: 'Paradox', hints: ['Seeming contradiction', 'Contradictory statement']},
                  { id: 'q5', type: 'multiple-choice', question: 'If an author uses only harsh, sharp-sounding words (diction), the tone is likely:', options: ['Joyful', 'Sarcastic', 'Somber or critical', 'Excited'], correctAnswer: 'Somber or critical', hints: ['The sounds of the words affect the mood/attitude', 'Harsh/sharp']},
                  { id: 'q6', type: 'multiple-choice', question: 'An **extended metaphor** is a metaphor that is:', options: ['Brief and sudden', 'Unrelated to the theme', 'Developed over several lines or an entire text', 'Easy to understand'], correctAnswer: 'Developed over several lines or an entire text', hints: ['Carried out over a long passage', 'Developed over time']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is the term for the author\'s deliberate choice of words?', correctAnswer: 'Diction', hints: ['Word choice', 'Vocabulary']},
                  { id: 'q8', type: 'multiple-choice', question: 'What literary device is used in the phrase "The silence was deafening"?', options: ['Simile', 'Alliteration', 'Oxymoron', 'Hyperbole'], correctAnswer: 'Oxymoron', hints: ['Contradictory terms used together', 'Contradiction']},
                ],
                activity: { type: 'interactive-practice', description: 'Tone and Diction Matcher', instruction: 'Read short excerpts and match the author\'s diction to the overall tone (e.g., formal, critical, whimsical).' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.W.11-12.7 - Conduct Research Projects',
                content: '<h3>Conducting Sustained Research</h3><p>A **sustained research project** requires multiple steps: $1.$ **Formulating a research question** (focused, relevant, and answerable). $2.$ **Gathering information** from multiple, credible sources (academic journals, primary sources, expert interviews). $3.$ **Evaluating sources** for bias, credibility, and accuracy. $4.$ **Synthesizing information** (combining ideas from different sources). $5.$ **Organizing and presenting** findings logically, with proper citation (**MLA or APA**). You must distinguish between your original ideas and information from sources to avoid **plagiarism**. This prepares you for college-level academic work.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is the most focused and researchable question?', options: ['What is the meaning of life?', 'What causes global warming?', 'How does $\text{X}$ pollutant affect local river ecosystems?', 'Are dogs better than cats?'], correctAnswer: 'How does $\text{X}$ pollutant affect local river ecosystems?', hints: ['Specific, relevant, and answerable with evidence', 'Specific and answerable']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The act of combining information from multiple sources to create a new understanding is called $\text{_________}$.', correctAnswer: 'Synthesis', hints: ['Blending ideas', 'Merging data']},
                  { id: 'q3', type: 'multiple-choice', question: 'The process of giving credit to the original source of information is called:', options: ['Plagiarism', 'Quoting', 'Citation', 'Paraphrasing'], correctAnswer: 'Citation', hints: ['Essential for academic integrity', 'Giving credit']},
                  { id: 'q4', type: 'fill-in-blank', question: 'The two main styles of academic citation are MLA and _________.', correctAnswer: 'APA', hints: ['Most common formatting styles', 'APA style']},
                  { id: 'q5', type: 'multiple-choice', question: 'Why must you use multiple, diverse sources for a sustained research project?', options: ['To make the paper longer', 'To ensure depth and prevent bias', 'To confuse the reader', 'To avoid using facts'], correctAnswer: 'To ensure depth and prevent bias', hints: ['Breadth of information and objectivity', 'Depth and lack of bias']},
                  { id: 'q6', type: 'multiple-choice', question: 'Using an author\'s idea without citing them is considered:', options: ['Quoting', 'Paraphrasing', 'Plagiarism', 'Summarizing'], correctAnswer: 'Plagiarism', hints: ['Intellectual theft', 'Failing to give credit']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Before using a source, you should evaluate its $\text{relevance, accuracy, and}$ $\text{_________}$.', correctAnswer: 'Credibility or Bias', hints: ['Trustworthiness of the source', 'Source evaluation']},
                  { id: 'q8', type: 'multiple-choice', question: 'An expert interview is an example of which type of source?', options: ['Secondary', 'Tertiary', 'Primary', 'Non-credible'], correctAnswer: 'Primary', hints: ['Directly from the source/subject matter expert', 'Firsthand information']},
                ],
                activity: { type: 'interactive-practice', description: 'Source Credibility Checker', instruction: 'Evaluate sample sources (e.g., blog post vs. academic journal) for credibility and bias.' }
              }
            ]
          },
        ],
        'Math': [
          {
            id: 'math-11th-1',
            title: 'Algebra II: Quadratic and Polynomial Functions (English III/Algebra II)',
            description: 'Master solving quadratic equations in one variable and understand quadratic functions. Students will perform arithmetic operations on polynomials, factor polynomials, and solve and graph quadratic equations using various methods.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.A-REI.B.4 - Solve Quadratic Equations',
                content: '<h3>Solving Quadratic Equations</h3><p>A **quadratic equation** is a second-degree polynomial of the form $ax^2 + bx + c = 0$. Solutions (also called **roots** or **zeros**) can be found using: **Factoring** (using the Zero Product Property); **Completing the Square**; and the **Quadratic Formula** ($x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$). The **discriminant** ($b^2 - 4ac$) determines the number and type of solutions: positive (two real solutions), zero (one real solution), or negative (two imaginary solutions). Unlike linear equations, quadratic equations can have up to two solutions.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which formula solves any quadratic equation in the form $ax^2 + bx + c = 0$?', options: ['Slope-intercept', 'Point-slope', 'Quadratic Formula', 'Pythagorean Theorem'], correctAnswer: 'Quadratic Formula', hints: ['The universal formula for quadratics', 'The long formula']},
                  { id: 'q2', type: 'fill-in-blank', question: 'Find the solutions for $x^2 - 9 = 0$.', correctAnswer: '$3, -3$ or $\pm 3$', hints: ['Factor to $(x-3)(x+3)=0$', 'Square root both sides']},
                  { id: 'q3', type: 'multiple-choice', question: 'The solutions to a quadratic equation are also known as the $\text{_________}$ of the related function.', options: ['Vertices', 'Asymptotes', 'Zeros or roots', 'Slopes'], correctAnswer: 'Zeros or roots', hints: ['The $x$-intercepts of the parabola', 'The $x$-intercepts']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is the discriminant of $2x^2 - 4x + 1 = 0$?', correctAnswer: '8', hints: ['$b^2 - 4ac = (-4)^2 - 4(2)(1)$', '$16 - 8$']},
                  { id: 'q5', type: 'multiple-choice', question: 'If the discriminant is negative, the equation has:', options: ['One real solution', 'Two real solutions', 'Two imaginary solutions', 'No solution'], correctAnswer: 'Two imaginary solutions', hints: ['Negative under the square root', 'Imaginary solutions']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which method is easiest for solving $x^2 - 5x + 6 = 0$?', options: ['Quadratic Formula', 'Factoring', 'Completing the square', 'Graphing'], correctAnswer: 'Factoring', hints: ['Easily factors to $(x-2)(x-3)$', 'Simple factoring']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is the highest exponent in a quadratic equation?', correctAnswer: '2 or two', hints: ['Second-degree polynomial', 'Squared term']},
                  { id: 'q8', type: 'multiple-choice', question: 'The graph of a quadratic function is a U-shaped curve called a:', options: ['Hyperbola', 'Parabola', 'Asymptote', 'Vertex'], correctAnswer: 'Parabola', hints: ['The graph of $y=ax^2+bx+c$', 'U-shaped curve']},
                ],
                activity: { type: 'interactive-practice', description: 'Quadratic Equation Solver', instruction: 'Solve equations using factoring, completing the square, and the quadratic formula.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.A-APR.A.1 - Polynomial Arithmetic',
                content: '<h3>Operations with Polynomials</h3><p>A **polynomial** is an expression consisting of variables and coefficients, involving only addition, subtraction, and multiplication, where variables have non-negative integer exponents. To add or subtract polynomials, you simply **combine like terms**. To multiply polynomials, use the **Distributive Property** (or the FOIL method for two binomials). For example, $(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$. Understanding polynomial operations is necessary for higher-level factoring, solving equations, and algebraic proofs.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'fill-in-blank', question: 'What is the result of $(3x^2 + 2x - 1) + (x^2 - 5x + 4)$?', correctAnswer: '$4x^2 - 3x + 3$', hints: ['Combine like terms', '$3x^2+x^2, 2x-5x, -1+4$']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the product of $(x + 4)(x - 4)$?', options: ['$x^2 + 16$', '$x^2 - 16$', '$x^2 + 8x + 16$', '$x^2 - 8x - 16$'], correctAnswer: '$x^2 - 16$', hints: ['Difference of Squares', 'Use FOIL: $x^2 - 4x + 4x - 16$']},
                  { id: 'q3', type: 'fill-in-blank', question: 'Simplify $2(x^2 - 3x) - (x^2 + x)$.', correctAnswer: '$x^2 - 7x$', hints: ['Distribute: $2x^2 - 6x - x^2 - x$', 'Combine $x^2$ and $x$ terms']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which is a not a valid operation in a polynomial?', options: ['Addition', 'Multiplication', 'Subtraction', 'Division by a variable'], correctAnswer: 'Division by a variable', hints: ['Exponents must be non-negative integers', 'No division by $x$']},
                  { id: 'q5', type: 'fill-in-blank', question: 'What is the result of $(2y + 1)^2$?', correctAnswer: '$4y^2 + 4y + 1$', hints: ['$(2y+1)(2y+1)$', 'Square the binomial']},
                  { id: 'q6', type: 'multiple-choice', question: 'The degree of a polynomial is determined by the:', options: ['Smallest exponent', 'Largest exponent', 'Number of terms', 'Coefficient of the first term'], correctAnswer: 'Largest exponent', hints: ['Highest power of the variable', 'Highest power']},
                  { id: 'q7', type: 'fill-in-blank', question: 'What is the constant term in the polynomial $5x^3 - 2x + 10$?', correctAnswer: '10', hints: ['The term without a variable', 'The number alone']},
                  { id: 'q8', type: 'multiple-choice', question: 'When multiplying a monomial by a polynomial, you must use the:', options: ['FOIL method', 'Zero Product Property', 'Substitution method', 'Distributive Property'], correctAnswer: 'Distributive Property', hints: ['Multiply the outside term by every term inside', 'The property of distribution']},
                ],
                activity: { type: 'interactive-practice', description: 'Polynomial Calculator', instruction: 'Practice adding, subtracting, and multiplying polynomials.' }
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-11th-1',
            title: 'Physics: Forces, Motion, and Energy',
            description: 'Apply kinematic equations to analyze motion. Students will solve problems involving forces, work, power, and energy conservation. Analyze the effects of gravity, friction, and normal forces on moving objects.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.9-12.P.1 - Kinematics (Uniform Motion)',
                content: '<h3>Analyzing Motion: Kinematics</h3><p>**Kinematics** is the study of motion. Key concepts include **distance** (total length traveled), **displacement** (change in position, a vector), **speed** (distance/time), and **velocity** (displacement/time, a vector). **Acceleration** is the rate of change of velocity ($a = \Delta v / t$). Uniform motion involves constant velocity (zero acceleration). For constant acceleration, the kinematic equations allow you to predict future position and velocity.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which concept is a **vector** quantity (has both magnitude and direction)?', options: ['Distance', 'Speed', 'Velocity', 'Time'], correctAnswer: 'Velocity', hints: ['Speed with direction', 'Velocity']},
                  { id: 'q2', type: 'multiple-choice', question: 'The rate of change of an object\'s velocity is defined as:', options: ['Speed', 'Displacement', 'Acceleration', 'Distance'], correctAnswer: 'Acceleration', hints: ['$\Delta v / t$', 'Acceleration']},
                  { id: 'q3', type: 'fill-in-blank', question: 'If a car travels 100 meters east and then 100 meters west, its total $\text{displacement}$ is $\text{_________}$ meters.', correctAnswer: 'Zero', hints: ['Final position equals initial position', 'Zero']},
                  { id: 'q4', type: 'multiple-choice', question: 'A horizontal line on a position-time graph indicates:', options: ['Constant positive velocity', 'Constant negative velocity', 'Zero acceleration', 'Constant acceleration'], correctAnswer: 'Zero acceleration', hints: ['Position is not changing', 'Zero acceleration (and velocity)']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The slope of a velocity-time graph represents $\text{_________}$.', correctAnswer: 'Acceleration', hints: ['Rise ($\Delta v$) over run ($\Delta t$)', 'Acceleration']},
                  { id: 'q6', type: 'multiple-choice', question: 'A car accelerates from $0 \text{ m/s}$ to $20 \text{ m/s}$ in 4 seconds. Its average acceleration is:', options: ['$5 \text{ m/s}^2$', '$20 \text{ m/s}^2$', '$0.2 \text{ m/s}^2$', '$4 \text{ m/s}^2$'], correctAnswer: '$5 \text{ m/s}^2$', hints: ['$a = 20/4$', '$5 \text{ m/s}^2$']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The $\text{_________}$ is the total path length traveled.', correctAnswer: 'Distance', hints: ['A scalar quantity', 'Distance']},
                  { id: 'q8', type: 'multiple-choice', question: 'For an object moving at a constant velocity, its acceleration is always:', options: ['Positive', 'Negative', 'Zero', 'Changing'], correctAnswer: 'Zero', hints: ['No change in velocity', 'Zero']},
                ],
                activity: { type: 'motion-graphing', description: 'Analyze a graph of velocity vs. time to calculate total displacement (area under the curve) and acceleration (slope).', instruction: 'Explain the difference between speed and velocity using an example.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.9-12.P.2 - Dynamics and Newton\'s Laws',
                content: '<h3>Newton\'s Laws of Motion Applied</h3><p>**Newton\'s First Law** (Inertia) states objects resist change in motion. **Newton\'s Second Law** ($\mathbf{F_{net} = ma}$) relates net force, mass, and acceleration. **Newton\'s Third Law** (Action-Reaction) states forces come in equal and opposite pairs. The **net force** is the vector sum of all forces acting on an object. If $\text{F}_{net}=0$, the object is in equilibrium (either at rest or constant velocity).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If an object is moving at a constant velocity, the net force acting on it must be:', options: ['Positive', 'Negative', 'Increasing', 'Zero'], correctAnswer: 'Zero', hints: ['In equilibrium (First Law)', 'Zero']},
                  { id: 'q2', type: 'multiple-choice', question: 'The force of gravity acting on an object is known as its:', options: ['Mass', 'Inertia', 'Weight', 'Tension'], correctAnswer: 'Weight', hints: ['Mass $\times$ gravity', 'Weight']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The force exerted by a surface perpendicular to an object is the $\text{_________}$ $\text{Force}$.', correctAnswer: 'Normal', hints: ['Opposite of weight on a flat surface', 'Normal Force']},
                  { id: 'q4', type: 'multiple-choice', question: 'A rocket accelerating upward is an application of which of Newton\'s laws?', options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravity'], correctAnswer: 'Third Law', hints: ['Action (exhaust push) = Reaction (rocket push)', 'Third Law']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The force that opposes motion between two surfaces in contact is $\text{_________}$.', correctAnswer: 'Friction', hints: ['Resists sliding', 'Friction']},
                  { id: 'q6', type: 'multiple-choice', question: 'If the net force on a $10 \text{ kg}$ object is $50 \text{ N}$, its acceleration is:', options: ['$500 \text{ m/s}^2$', '$0.2 \text{ m/s}^2$', '$5 \text{ m/s}^2$', '$60 \text{ m/s}^2$'], correctAnswer: '$5 \text{ m/s}^2$', hints: ['$a = F/m = 50/10$', '$5 \text{ m/s}^2$']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The $\text{_________}$ $\text{force}$ is the vector sum of all individual forces acting on an object.', correctAnswer: 'Net', hints: ['Total force', 'Net Force']},
                  { id: 'q8', type: 'multiple-choice', question: 'What property measures an object\'s resistance to acceleration?', options: ['Weight', 'Momentum', 'Inertia (or Mass)', 'Velocity'], correctAnswer: 'Inertia (or Mass)', hints: ['Greater mass means greater inertia', 'Inertia/Mass']},
                ],
                activity: { type: 'free-body-diagram', description: 'Draw a free-body diagram for a box being pushed across a floor (show weight, normal, applied, and friction forces).', instruction: 'Calculate the acceleration of the box if the applied force is $100 \text{ N}$ and friction is $20 \text{ N}$ ($m=10 \text{ kg}$).' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.9-12.P.3 - Energy Conservation and Work',
                content: '<h3>Conservation of Mechanical Energy</h3><p>Mechanical energy is the sum of **Kinetic Energy** ($\text{KE}$, motion) and **Potential Energy** ($\text{PE}$, stored). The **Law of Conservation of Mechanical Energy** states that the total mechanical energy in a system remains constant ($\text{KE}_i + \text{PE}_i = \text{KE}_f + \text{PE}_f$) if only conservative forces (like gravity) are acting. **Work** is the energy transferred by a force ($W=Fd$). If non-conservative forces (like friction) are present, the total mechanical energy decreases (converted to heat).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'If a roller coaster cart stops at the bottom of a hill, where did the lost mechanical energy go?', options: ['It was destroyed', 'It was converted to mass', 'It was converted to heat due to friction', 'It increased its velocity'], correctAnswer: 'It was converted to heat due to friction', hints: ['Energy transformation due to non-conservative force', 'Friction/Heat']},
                  { id: 'q2', type: 'multiple-choice', question: 'When is a force doing **negative** work on an object?', options: ['When the force is perpendicular to displacement', 'When the force is in the same direction as displacement', 'When the force is opposite the direction of displacement', 'When the object is at rest'], correctAnswer: 'When the force is opposite the direction of displacement', hints: ['Removing energy from the system (e.g., friction)', 'Opposite direction']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The total $\text{KE} + \text{PE}$ in a closed system with only gravity acting is $\text{_________}$.', correctAnswer: 'Conserved or Constant', hints: ['The principle of conservation', 'Conserved/Constant']},
                  { id: 'q4', type: 'multiple-choice', question: 'An object with a mass of $2 \text{ kg}$ is moving at $4 \text{ m/s}$. Its Kinetic Energy is:', options: ['8 J', '4 J', '16 J', '32 J'], correctAnswer: '16 J', hints: ['$\text{KE} = 1/2 m v^2 = 0.5 \times 2 \times 4^2$', '16 J']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The unit of **work** is the $\text{_________}$.', correctAnswer: 'Joule', hints: ['Unit of energy transfer', 'Joule']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which is a **non-conservative** force that reduces mechanical energy?', options: ['Gravity', 'Spring force', 'Friction', 'Tension'], correctAnswer: 'Friction', hints: ['Dissipates energy as heat', 'Friction']},
                  { id: 'q7', type: 'fill-in-blank', question: 'If a worker lifts a $100 \text{ N}$ box $2 \text{ m}$ vertically, the work done is $\text{_________}$ $\text{J}$.', correctAnswer: '200', hints: ['$W = Fd = 100 \times 2$', '200 J']},
                  { id: 'q8', type: 'multiple-choice', question: 'Gravitational Potential Energy depends on an object\'s mass, gravity, and its:', options: ['Velocity', 'Acceleration', 'Height', 'Time'], correctAnswer: 'Height', hints: ['$\text{PE} = mgh$', 'Height']},
                ],
                activity: { type: 'energy-transfer-calculation', description: 'Calculate the maximum velocity of a $5 \text{ kg}$ object that falls from a height of $10 \text{ m}$ using energy conservation ($\text{GPE}=\text{KE}$).', instruction: 'Explain why the velocity is independent of mass in this ideal scenario.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-11th-1',
            title: 'U.S. History: Post-Civil War to Modern America',
            description: 'Analyze the major turning points in modern U.S. history, including the Gilded Age, Industrialization, the Great Depression, and the World Wars. Examine the shift from an agrarian to an industrial and global power.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.9-12.US.1 - Industrialization and the Gilded Age',
                content: '<h3>The Rise of Industrial America</h3><p>The late 19th and early 20th centuries were marked by rapid **Industrialization** (Gilded Age). This era saw the rise of powerful industrialists (**Robber Barons** or **Captains of Industry**) who built massive monopolies (e.g., Andrew Carnegie in steel). Workers faced low wages and unsafe conditions, leading to the formation of **Labor Unions**. The massive wealth created and social problems hidden beneath the surface gave this era the name "Gilded Age."</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The business practice of one company controlling an entire industry is a:', options: ['Trust', 'Partnership', 'Monopoly', 'Subsidiary'], correctAnswer: 'Monopoly', hints: ['Single seller', 'Monopoly']},
                  { id: 'q2', type: 'multiple-choice', question: 'The purpose of **Labor Unions** was to:', options: ['Increase company profits', 'Fight for better wages and working conditions', 'Establish monopolies', 'Elect the President'], correctAnswer: 'Fight for better wages and working conditions', hints: ['Collective bargaining', 'Better wages/conditions']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The era known for the tremendous gap between the wealthy elite and the poor working class was the $\text{_________}$ $\text{Age}$.', correctAnswer: 'Gilded', hints: ['Gold covering a cheap interior', 'Gilded Age']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which policy favored minimal government regulation of the economy ("hands-off")?', options: ['New Deal', 'Laissez-faire', 'Populism', 'Socialism'], correctAnswer: 'Laissez-faire', hints: ['Let the market be', 'Laissez-faire']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Andrew $\text{_________}$ made his fortune in the steel industry and became a famous philanthropist.', correctAnswer: 'Carnegie', hints: ['Master of Steel', 'Carnegie']},
                  { id: 'q6', type: 'multiple-choice', question: 'The major shift that provided factory labor during this era was $\text{_________}$ from Southern and Eastern Europe.', options: ['Emigration', 'Colonization', 'Immigration', 'Nativism'], correctAnswer: 'Immigration', hints: ['Inflow of new workers', 'Immigration']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The $\text{_________}$ $\text{_________}$ Act (1890) was the first federal law aimed at breaking up monopolies.', correctAnswer: 'Sherman Antitrust', hints: ['Early regulation', 'Sherman Act']},
                ],
                activity: { type: 'historical-role-play', description: 'Debate a historical strike from the Gilded Age from the perspective of a factory owner and a union organizer.', instruction: 'Analyze the term "Robber Baron" vs. "Captain of Industry" by listing evidence for each view.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.9-12.US.2 - U.S. in World War II',
                content: '<h3>The United States and World War II</h3><p>The U.S. entered **World War II** after the attack on **Pearl Harbor** (December 7, 1941). The war dramatically changed American society: women entered the workforce in large numbers ("Rosie the Riveter"), and the economy shifted to massive **wartime production** (ending the Great Depression). The war culminated in the U.S. dropping atomic bombs on Japan, ushering in the **Nuclear Age** and establishing the U.S. as a global superpower.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What event caused the U.S. to enter World War II?', options: ['Invasion of Poland', 'Attack on Pearl Harbor', 'Sinking of the Lusitania', 'Passage of the New Deal'], correctAnswer: 'Attack on Pearl Harbor', hints: ['December 7, 1941', 'Pearl Harbor']},
                  { id: 'q2', type: 'multiple-choice', question: 'The symbol of women entering the industrial workforce during WWII was:', options: ['Flapper', 'Rosie the Riveter', 'Jane Addams', 'Eleanor Roosevelt'], correctAnswer: 'Rosie the Riveter', hints: ['Iconic image of women in factories', 'Rosie the Riveter']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The secret U.S. project to develop the atomic bomb was called the $\text{_________}$ $\text{Project}$.', correctAnswer: 'Manhattan', hints: ['Top-secret weapon program', 'Manhattan Project']},
                  { id: 'q4', type: 'multiple-choice', question: 'What was the major economic effect of WWII on the U.S. home front?', options: ['Caused the Great Depression', 'Led to rationing and ended the Great Depression', 'Caused mass unemployment', 'Created massive debt'], correctAnswer: 'Led to rationing and ended the Great Depression', hints: ['Full employment due to wartime production', 'Ended the Depression/Rationing']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The strategy used by the U.S. in the Pacific to defeat Japan was called $\text{_________}$ $\text{_________}$.', correctAnswer: 'Island Hopping', hints: ['Bypassing heavily fortified islands', 'Island Hopping']},
                  { id: 'q6', type: 'multiple-choice', question: 'The post-WWII international organization created to promote peace and cooperation is the:', options: ['League of Nations', 'United Nations', 'NATO', 'Warsaw Pact'], correctAnswer: 'United Nations', hints: ['Global diplomatic body', 'United Nations']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The D-Day invasion (June 6, 1944) involved the Allied landing in $\text{_________}$.', correctAnswer: 'Normandy, France', hints: ['Crucial event in Europe', 'Normandy']},
                  { id: 'q8', type: 'multiple-choice', question: 'The use of the atomic bomb ushered in the $\text{_________}$ $\text{Age}$.', options: ['Space', 'Information', 'Nuclear', 'Industrial'], correctAnswer: 'Nuclear', hints: ['Era defined by atomic weapons', 'Nuclear Age']},
                ],
                activity: { type: 'home-front-poster', description: 'Design a propaganda poster (e.g., for rationing, war bonds, or factory work) from the WWII home front.', instruction: 'Analyze the ethical debate surrounding the use of the atomic bomb.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.9-12.US.3 - The Cold War and Civil Rights',
                content: '<h3>Cold War and Civil Rights Movement</h3><p>The **Cold War** (1947–1991) was a state of political and military tension between the U.S. (democracy/capitalism) and the Soviet Union (communism), characterized by proxy wars, an arms race, and the **Space Race**. Simultaneously, the **Civil Rights Movement** aimed to end racial segregation and discrimination in the U.S. Major victories included the Supreme Court decision in **_Brown v. Board of Education_** (1954, ending school segregation) and the passage of the **Civil Rights Act of 1964**.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The rivalry and tension between the U.S. and the Soviet Union after WWII was known as the:', options: ['Great War', 'Vietnam Conflict', 'Cold War', 'Space Race only'], correctAnswer: 'Cold War', hints: ['Ideological conflict', 'Cold War']},
                  { id: 'q2', type: 'multiple-choice', question: 'What Supreme Court case ended school segregation ("separate but equal")?', options: ['Plessy v. Ferguson', 'Gideon v. Wainwright', 'Brown v. Board of Education', 'Marbury v. Madison'], correctAnswer: 'Brown v. Board of Education', hints: ['1954 decision', 'Brown v. Board']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The $\text{_________}$ $\text{_________}$ Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin.', correctAnswer: 'Civil Rights', hints: ['Landmark legislation', 'Civil Rights Act']},
                  { id: 'q4', type: 'multiple-choice', question: 'What was the primary focus of the **Space Race**?', options: ['Colonizing Mars', 'Achieving military dominance', 'Developing nuclear weapons', 'Technological superiority in space exploration'], correctAnswer: 'Technological superiority in space exploration', hints: ['Rivalry to be first in space', 'Space exploration']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The U.S. policy aimed at preventing the spread of communism was called $\text{_________}$.', correctAnswer: 'Containment', hints: ['Key Cold War policy', 'Containment']},
                  { id: 'q6', type: 'multiple-choice', question: 'Martin Luther King Jr. was a major leader who advocated for change through:', options: ['Armed conflict', 'Economic boycott only', 'Nonviolent civil disobedience', 'Political party dominance'], correctAnswer: 'Nonviolent civil disobedience', hints: ['Peaceful resistance', 'Nonviolent action']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The Berlin $\text{_________}$ symbolized the division between communist East and democratic West Germany.', correctAnswer: 'Wall', hints: ['Tore down in 1989', 'Berlin Wall']},
                  { id: 'q8', type: 'multiple-choice', question: 'The $\text{Arms Race}$ during the Cold War focused on building up what kind of weapons?', options: ['Conventional weapons', 'Chemical weapons', 'Nuclear weapons', 'Biological weapons'], correctAnswer: 'Nuclear weapons', hints: ['Competition for atomic superiority', 'Nuclear weapons']},
                ],
                activity: { type: 'civil-rights-strategy', description: 'Analyze the differences between the strategies of nonviolent resistance (MLK Jr.) and black nationalism (Malcolm X).', instruction: 'Explain how the Cold War influenced U.S. domestic spending on science education.' }
              }
            ]
          }
        ]
      },
      '12th Grade': {
        'ELA': [
          {
            id: 'ela-12th-1',
            title: 'Critical Reading and Synthesis (English IV/Advanced Math/Calculus)',
            description: 'Analyze how an author draws on and transforms source material in a specific work. Integrate and synthesize multiple sources, making connections between ideas and distinguishing between a work\'s theme and its historical context. Demonstrate command of conventions of standard English grammar.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.ELA.RL.11-12.9 - Analyze Source Transformation',
                content: '<h3>Analyzing Source Transformation</h3><p>Authors often draw inspiration from and **transform** source material—such as historical events, myths, or earlier literary works—to create something new. **Transformation** can involve changing the setting, point of view, characters, or even the theme of the original source. For example, a modern novel might adapt a Greek myth to comment on contemporary social issues. To analyze transformation, compare the new work to the original source and ask: "What has the author kept? What has been changed? *Why* did the author make these changes? What new message or perspective is created by the transformation?"</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which is the best definition of **source material transformation**?', options: ['Copying the original work exactly', 'Changing the genre of the source material', 'Altering the setting or characters to convey a new message', 'Adding more details to the original plot'], correctAnswer: 'Altering the setting or characters to convey a new message', hints: ['A new interpretation or commentary', 'Changing to a new message']},
                  { id: 'q2', type: 'fill-in-blank', question: 'A work that transforms a source material often reflects a $\text{contemporary}$ _________ on an old idea.', correctAnswer: 'Perspective or Viewpoint', hints: ['Modern take', 'Current interpretation']},
                  { id: 'q3', type: 'multiple-choice', question: 'If a playwright adapts a classic novel to be set in a future dystopian society, the primary change is in the:', options: ['Theme', 'Historical context', 'Setting', 'Plot'], correctAnswer: 'Setting', hints: ['The time and place have been dramatically altered', 'Time and place']},
                  { id: 'q4', type: 'fill-in-blank', question: 'Transformation of a myth usually creates a new literary work that offers $\text{social or political}$ $\text{_________}$ on the original tale.', correctAnswer: 'Commentary', hints: ['Critical analysis or statement', 'Critical statement']},
                  { id: 'q5', type: 'multiple-choice', question: 'What is the most important question to ask when analyzing transformation?', options: ['Is the new work better than the old?', 'What genre is the new work?', 'What new meaning is created by the change?', 'How long is the new work?'], correctAnswer: 'What new meaning is created by the change?', hints: ['Focus on the new message', 'New meaning']},
                  { id: 'q6', type: 'multiple-choice', question: 'The historical context of a literary work refers to:', options: ['The author\'s life story', 'The theme of the work', 'The social and political climate when it was written', 'The main character\'s journey'], correctAnswer: 'The social and political climate when it was written', hints: ['The surrounding world', 'Time period']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A new work can use the characters of a myth to explore a $\text{universal}$ _________ from a modern perspective.', correctAnswer: 'Theme', hints: ['The core message', 'Universal message']},
                  { id: 'q8', type: 'multiple-choice', question: 'When analyzing the use of source material, you are practicing the critical skill of:', options: ['Fact-checking', 'Synthesis and comparison', 'Plot summarization', 'Vocabulary building'], correctAnswer: 'Synthesis and comparison', hints: ['Bringing multiple texts together', 'Connecting and comparing']}
                ],
                activity: { type: 'interactive-practice', description: 'Source Transformation Analogy', instruction: 'Compare an excerpt from a classical source to its modern adaptation and justify the author\'s changes.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.ELA.L.11-12.1 - Advanced Grammar and Syntax',
                content: '<h3>Advanced Syntax and Parallelism</h3><p>**Syntax** is the arrangement of words and phrases to create well-formed sentences. Advanced writers vary syntax for rhetorical effect. **Parallel structure** (or parallelism) is the repetition of the same grammatical form within a sentence or a series of sentences. Correct parallelism enhances clarity, emphasizes ideas, and creates a sense of rhythm and balance (e.g., *She enjoys running, swimming, and cycling*—all are gerunds). Common errors include shifting between voice (active/passive), mood (indicative/subjunctive), or number. College-level writing demands mastery of these complex grammatical conventions.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is **parallel structure**?', options: ['Using all short sentences', 'Repeating the same grammatical form in a series', 'Starting every sentence with the same word', 'Using only conjunctions'], correctAnswer: 'Repeating the same grammatical form in a series', hints: ['Consistency in word form', 'Repetition of form']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The term for the arrangement of words and phrases to create sentences is $\text{_________}$.', correctAnswer: 'Syntax', hints: ['Sentence structure', 'Word order']},
                  { id: 'q3', type: 'multiple-choice', question: 'Which sentence demonstrates correct parallelism?', options: ['He likes to jog, to swim, and sailing.', 'He likes jogging, swimming, and sailing.', 'He likes to jog, swimming, and to sail.', 'He likes jogging, to swim, and to sail.'], correctAnswer: 'He likes jogging, swimming, and sailing.', hints: ['All are gerunds (-ing)', 'All the same form']},
                  { id: 'q4', type: 'fill-in-blank', question: 'To achieve a formal, authoritative tone, writers often use **inverted** $\text{_________}$ (reversing the normal word order).', correctAnswer: 'Syntax or Structure', hints: ['Changing the typical order', 'Reversed word order']},
                  { id: 'q5', type: 'multiple-choice', question: 'The statement "I wish I $\text{was}$ a bird" incorrectly uses the **indicative** mood. The correct **subjunctive** form is:', options: ['I wish I were a bird.', 'I wish I am a bird.', 'I wish I will be a bird.', 'I wish I had been a bird.'], correctAnswer: 'I wish I were a bird.', hints: ['Used for counterfactual/hypothetical statements', 'Subjunctive form']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which sentence is written in the **active voice**?', options: ['The ball was thrown by the boy.', 'The boy threw the ball.', 'The ball was being thrown.', 'The ball is thrown.'], correctAnswer: 'The boy threw the ball.', hints: ['The subject (boy) performs the action', 'Subject performs action']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Incorrectly switching between third person ($\text{he/she/it/they}$) and second person ($\text{you}$) is a shift in $\text{_________}$ that confuses the reader.', correctAnswer: 'Person or Point of View', hints: ['Inconsistent perspective', 'Inconsistent voice']},
                  { id: 'q8', type: 'multiple-choice', question: 'Why is parallel structure important in lists?', options: ['It makes the list longer.', 'It creates rhythm and emphasizes equal importance.', 'It confuses the reader.', 'It is grammatically optional.'], correctAnswer: 'It creates rhythm and emphasizes equal importance.', hints: ['Rhetorical effect and clarity', 'Rhythm and clarity']},
                ],
                activity: { type: 'interactive-practice', description: 'Grammar Error Corrector', instruction: 'Identify and correct errors in parallelism, mood, and voice.' }
              }
            ]
          },
        ],
        'Math': [
          {
            id: 'math-12th-1',
            title: 'Calculus: Derivatives and Applications (English IV/Advanced Math/Calculus)',
            description: 'Master the concept of the limit, continuity, and the derivative. Students will calculate derivatives using formal definitions and rules, and apply the derivative to solve real-world problems involving rates of change, optimization, and related rates.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Math.C.1 - Limits and Continuity',
                content: '<h3>Limits and Continuity</h3><p>The concept of a **limit** is the foundation of calculus. $\lim_{x \to a} f(x) = L$ means that as $x$ gets infinitely close to $a$, the function value $f(x)$ gets infinitely close to $L$. A function is **continuous** at a point $a$ if three conditions are met: $1.$ $f(a)$ is defined. $2.$ $\lim_{x \to a} f(x)$ exists. $3.$ $\lim_{x \to a} f(x) = f(a)$. Intuitively, a continuous function can be drawn without lifting your pencil. Limits are essential for defining the derivative and integral.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the limit of $f(x) = 2x + 1$ as $x$ approaches $3$?', options: ['3', '4', '7', '1'], correctAnswer: '7', hints: ['Substitute $x=3$: $2(3) + 1$', 'The function value at $x=3$']},
                  { id: 'q2', type: 'fill-in-blank', question: 'A function is $\text{_________}$ if its graph can be drawn without lifting your pencil.', correctAnswer: 'Continuous', hints: ['No breaks or holes', 'Connected graph']},
                  { id: 'q3', type: 'multiple-choice', question: 'For $\lim_{x \to a} f(x)$ to exist, the limit from the left and the limit from the right must:', options: ['Be equal', 'Be zero', 'Be unequal', 'Be undefined'], correctAnswer: 'Be equal', hints: ['Approach the same value', 'Must be same']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is the limit of $f(x) = \frac{x^2 - 4}{x - 2}$ as $x$ approaches $2$?', correctAnswer: '4', hints: ['Factor: $f(x) = x+2$. Substitute $x=2$', '$\frac{(x-2)(x+2)}{x-2}$']},
                  { id: 'q5', type: 'multiple-choice', question: 'A **discontinuity** where the graph has a break or jump is called a:', options: ['Removable discontinuity', 'Jump discontinuity', 'Infinite discontinuity', 'Continuity'], correctAnswer: 'Jump discontinuity', hints: ['The limit from the left and right are different', 'Jump in graph']},
                  { id: 'q6', type: 'fill-in-blank', question: 'If $\lim_{x \to a} f(x) \neq f(a)$, the function is not $\text{_________}$ at $a$.', correctAnswer: 'Continuous', hints: ['Fails the third condition', 'Broken at $a$']},
                  { id: 'q7', type: 'multiple-choice', question: 'The function $f(x) = \frac{1}{x}$ has an **infinite discontinuity** at $x=0$ because:', options: ['The limit is 1', 'The limit is 0', 'The function value approaches $\pm \infty$', 'The function is continuous'], correctAnswer: 'The function value approaches $\pm \infty$', hints: ['Vertical asymptote', 'Approaches infinity']},
                  { id: 'q8', type: 'fill-in-blank', question: 'The core idea of a limit is to study the $\text{_________}$ of a function near a point, not exactly at the point.', correctAnswer: 'Behavior or Trend', hints: ['How the function acts', 'Trend']},
                ],
                activity: { type: 'interactive-practice', description: 'Limit Calculator and Grapher', instruction: 'Evaluate limits graphically and algebraically, identifying points of discontinuity.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Math.C.2 - Differentiation and Rate of Change',
                content: '<h3>The Derivative and Rate of Change</h3><p>The **derivative** is the instantaneous rate of change of a function. It measures how fast a function\'s value is changing at any single point and is the slope of the tangent line to the function at that point. The derivative of $f(x)$ is denoted $f\'(x)$. The **Power Rule** is the simplest rule: if $f(x) = x^n$, then $f\'(x) = nx^{n-1}$. Derivatives are used to find velocity (rate of change of position), acceleration (rate of change of velocity), and to solve **optimization problems** (finding maximum or minimum values).</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The derivative of a function at a point gives the $\text{_________}$ of the tangent line at that point.', options: ['Area', 'Volume', 'Slope', 'Intercept'], correctAnswer: 'Slope', hints: ['Instantaneous rate of change', 'The $\text{m}$ value']},
                  { id: 'q2', type: 'fill-in-blank', question: 'The instantaneous rate of change of position with respect to time is called $\text{_________}$.', correctAnswer: 'Velocity', hints: ['How fast something is moving', 'Speed with direction']},
                  { id: 'q3', type: 'multiple-choice', question: 'What is the derivative of $f(x) = x^5$?', options: ['$5x^6$', '$x^4$', '$5x^4$', '$6x^5$'], correctAnswer: '$5x^4$', hints: ['Use the Power Rule: $nx^{n-1}$', 'Multiply by $5$, subtract $1$ from exponent']},
                  { id: 'q4', type: 'fill-in-blank', question: 'What is the derivative of a constant function, $f(x) = 7$?', correctAnswer: '0 or zero', hints: ['The rate of change of a flat line is zero', 'No change']},
                  { id: 'q5', type: 'multiple-choice', question: 'To find the maximum profit or minimum cost in a real-world problem (optimization), you must set the first derivative equal to:', options: ['The original function', '1', '0', 'The second derivative'], correctAnswer: '0', hints: ['Finding the critical points (where the slope is 0)', 'Level curve']},
                  { id: 'q6', type: 'multiple-choice', question: 'The derivative of $f(x) = 3x^2 + 2x - 1$ is:', options: ['$3x + 2$', '$6x + 2$', '$x^3 + x^2 - x$', '$2x - 1$'], correctAnswer: '$6x + 2$', hints: ['$3(2x^{2-1}) + 2(1x^{1-1}) + 0$', 'Power rule applied']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The acceleration is the $\text{_________}$ rate of change of the velocity function.', correctAnswer: 'Instantaneous or Derivative', hints: ['Second derivative of position', 'Rate of velocity']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is the derivative of $f(x) = \sqrt{x}$ (which is $x^{1/2}$)?', options: ['$2\sqrt{x}$', '$\frac{1}{2\sqrt{x}}$', '$\frac{3}{2}x^{3/2}$', '$\sqrt{x^2}$'], correctAnswer: '$\frac{1}{2\sqrt{x}}$', hints: ['$\frac{1}{2}x^{-1/2} = \frac{1}{2x^{1/2}}$', 'Power rule application']},
                ],
                activity: { type: 'interactive-practice', description: 'Derivative Solver', instruction: 'Practice calculating derivatives of simple polynomial functions using the power rule.' }
              }
            ]
          }
        ],
        'Science': [
          {
            id: 'science-9th-1',
            title: 'Biology: Cell Structure and Function',
            description: 'Understand the structure and function of cells (prokaryotic vs. eukaryotic) and the major organelles. Students will analyze the processes of cellular respiration and photosynthesis as fundamental energy transformations of life.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.Sci.9-12.B.1 - Cell Types and Organelles',
                content: '<h3>The Basic Unit of Life: The Cell</h3><p>All living things are made of **cells**. **Prokaryotic cells** (bacteria) are simple, lacking a nucleus and membrane-bound organelles. **Eukaryotic cells** (plants, animals, fungi) are complex, featuring a membrane-bound **nucleus** (DNA storage) and specialized compartments (**organelles**). Key organelles include the **mitochondria** (energy production) and, in plants, **chloroplasts** (photosynthesis). The cell membrane regulates the transport of substances into and out of the cell.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'Which organelle is found in plant cells but NOT animal cells?', options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Cell membrane'], correctAnswer: 'Chloroplast', hints: ['Used for photosynthesis', 'Chloroplast']},
                  { id: 'q2', type: 'multiple-choice', question: 'The function of the cell membrane is to:', options: ['Produce energy', 'Control which substances enter and leave the cell', 'Store genetic material', 'Provide rigid support'], correctAnswer: 'Control which substances enter and leave the cell', hints: ['Selective permeability', 'Control entry/exit']},
                  { id: 'q3', type: 'fill-in-blank', question: '_________ cells lack a nucleus and are typically smaller and simpler than other cells.', correctAnswer: 'Prokaryotic', hints: ['Bacteria are an example', 'Prokaryotic']},
                  { id: 'q4', type: 'multiple-choice', question: 'The "powerhouse" of the cell, where cellular respiration occurs, is the:', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell wall'], correctAnswer: 'Mitochondria', hints: ['Generates ATP', 'Mitochondria']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The cell organelle that synthesizes proteins is the _________.', correctAnswer: 'Ribosome', hints: ['Site of protein production', 'Ribosome']},
                  { id: 'q6', type: 'multiple-choice', question: 'Which type of cell is generally larger and more structurally complex?', options: ['Prokaryotic', 'Eukaryotic', 'Bacterial', 'Archaean'], correctAnswer: 'Eukaryotic', hints: ['Has nucleus and organelles', 'Eukaryotic']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The process of maintaining a stable internal environment in a cell or organism is called _________.', correctAnswer: 'Homeostasis', hints: ['Internal stability', 'Homeostasis']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which structure provides rigid support to plant cells?', options: ['Cell membrane', 'Cytoplasm', 'Cell wall', 'Mitochondria'], correctAnswer: 'Cell wall', hints: ['Outer layer of plant cells', 'Cell wall']},
                ],
                activity: { type: 'cell-labeling', description: 'Label the major organelles on a diagram of an animal and a plant cell.', instruction: 'Compare the roles of the cell wall and the cell membrane.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.Sci.9-12.B.2 - Photosynthesis',
                content: '<h3>Photosynthesis: Energy from the Sun</h3><p>**Photosynthesis** is the process by which producers (plants, algae) convert light energy into chemical energy (glucose/sugar). The equation is: 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂. It primarily occurs in the **chloroplasts** of plant cells, using the pigment **chlorophyll** to capture light. This process is essential for life on Earth as it produces the food and oxygen required by most ecosystems.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The primary energy source for photosynthesis is:', options: ['Heat energy', 'Chemical energy', 'Light energy', 'Thermal energy'], correctAnswer: 'Light energy', hints: ['Plants absorb this from the sun', 'Light energy']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the main carbohydrate product of photosynthesis?', options: ['Carbon Dioxide', 'Oxygen', 'Water', 'Glucose (Sugar)'], correctAnswer: 'Glucose (Sugar)', hints: ['The food produced', 'Glucose/Sugar']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The green pigment in plants that captures light energy is _________.', correctAnswer: 'Chlorophyll', hints: ['Found in chloroplasts', 'Chlorophyll']},
                  { id: 'q4', type: 'multiple-choice', question: 'What gas is released as a byproduct of photosynthesis?', options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Methane'], correctAnswer: 'Oxygen', hints: ['What humans and animals breathe', 'Oxygen']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Photosynthesis primarily takes place in the _________ of plant cells.', correctAnswer: 'Chloroplasts', hints: ['The plant organelle', 'Chloroplasts']},
                  { id: 'q6', type: 'multiple-choice', question: 'What raw material do plants absorb from the atmosphere for photosynthesis?', options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Water'], correctAnswer: 'Carbon Dioxide', hints: ['The C in C₆H₁₂O₆', 'Carbon Dioxide']},
                  { id: 'q7', type: 'fill-in-blank', question: 'Photosynthesis converts light energy into _________ energy.', correctAnswer: 'Chemical', hints: ['Stored in bonds of sugar', 'Chemical energy']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which kingdom includes organisms that perform photosynthesis?', options: ['Fungi', 'Animalia', 'Plantae', 'Protista only'], correctAnswer: 'Plantae', hints: ['Primary producers', 'Plants']},
                ],
                activity: { type: 'photosynthesis-simulation', description: 'Analyze the chemical equation of photosynthesis and trace the path of carbon atoms.', instruction: 'Explain why deforestation increases atmospheric carbon dioxide.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.Sci.9-12.B.3 - Cellular Respiration',
                content: '<h3>Cellular Respiration: Releasing Energy</h3><p>**Cellular Respiration** is the process by which cells break down food (glucose) to release usable energy in the form of **ATP** (adenosine triphosphate). The equation is the reverse of photosynthesis: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP). It occurs mainly in the **mitochondria** of eukaryotic cells. Respiration is essential for life, powering all cellular activities and maintaining body temperature.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the usable energy currency molecule produced by cellular respiration?', options: ['DNA', 'Chlorophyll', 'ATP', 'Glucose'], correctAnswer: 'ATP', hints: ['Energy for cellular work', 'ATP']},
                  { id: 'q2', type: 'multiple-choice', question: 'Cellular respiration primarily occurs in which organelle?', options: ['Nucleus', 'Vacuole', 'Ribosome', 'Mitochondria'], correctAnswer: 'Mitochondria', hints: ['The site of aerobic respiration', 'Mitochondria']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The main reactant broken down during cellular respiration is _________ (sugar).', correctAnswer: 'Glucose', hints: ['The food source', 'Glucose']},
                  { id: 'q4', type: 'multiple-choice', question: 'What gas is required for **aerobic** cellular respiration?', options: ['Carbon Dioxide', 'Nitrogen', 'Oxygen', 'Methane'], correctAnswer: 'Oxygen', hints: ['Needed for full energy release', 'Oxygen']},
                  { id: 'q5', type: 'fill-in-blank', question: 'Cellular respiration converts chemical energy into usable _________ energy and heat.', correctAnswer: 'ATP', hints: ['Usable energy molecule', 'ATP energy']},
                  { id: 'q6', type: 'multiple-choice', question: 'The waste products of cellular respiration are water and:', options: ['Oxygen', 'Glucose', 'ATP', 'Carbon Dioxide'], correctAnswer: 'Carbon Dioxide', hints: ['Gas exhaled by animals', 'Carbon Dioxide']},
                  { id: 'q7', type: 'fill-in-blank', question: '_________ respiration occurs without oxygen, producing far less ATP.', correctAnswer: 'Anaerobic', hints: ['Less efficient process', 'Anaerobic']},
                  { id: 'q8', type: 'multiple-choice', question: 'How do the chemical equations for photosynthesis and cellular respiration relate?', options: ['They are the same equation', 'They are inverses (opposites) of each other', 'They are completely unrelated', 'Only the products are the same'], correctAnswer: 'They are inverses (opposites) of each other', hints: ['The reactants of one are the products of the other', 'Inverses']},
                ],
                activity: { type: 'energy-flow-comparison', description: 'Create a chart comparing the reactants, products, and location of Photosynthesis and Cellular Respiration.', instruction: 'Explain why plants must perform both photosynthesis AND cellular respiration.' }
              }
            ]
          }
        ],
        'Social Studies': [
          {
            id: 'ss-9th-1',
            title: 'World Geography: Physical and Human',
            description: 'Analyze physical geography (climate, biomes, landforms) and its influence on human settlement. Examine the distribution of human populations, cultural patterns, and global economic interdependence.',
            lessons: [
              {
                id: 'lesson-1',
                objective: 'MCCRS.SS.9-12.WG.1 - Physical Geography and Climate',
                content: '<h3>Climate and Biomes</h3><p>**Physical Geography** studies the natural environment. **Climate** is the long-term weather pattern of an area, determined by latitude, elevation, and proximity to water. Climate dictates the type of **biome** (ecosystem) that develops (e.g., tropical rainforest, temperate forest, desert). Human settlement patterns are heavily influenced by climate and access to fresh water. Most large cities are in temperate zones with good precipitation.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The average, long-term weather pattern of a region is called its:', options: ['Weather', 'Climate', 'Atmosphere', 'Topography'], correctAnswer: 'Climate', hints: ['Over many years', 'Climate']},
                  { id: 'q2', type: 'multiple-choice', question: 'Which factor determines the amount of solar energy a region receives?', options: ['Longitude', 'Elevation', 'Latitude', 'Proximity to mountains'], correctAnswer: 'Latitude', hints: ['Distance from the equator', 'Latitude']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A large, naturally occurring community of flora and fauna occupying a major habitat is called a _________.', correctAnswer: 'Biome', hints: ['Major ecosystem type', 'Biome']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which landform is typically the least densely populated by humans?', options: ['Coastal plains', 'River valleys', 'Mountain ranges', 'Low plateaus'], correctAnswer: 'Mountain ranges', hints: ['Difficult for agriculture and transportation', 'Mountains']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The study of the earth\'s physical features and the atmosphere is _________ _________.', correctAnswer: 'Physical Geography', hints: ['Natural environment study', 'Physical Geography']},
                  { id: 'q6', type: 'multiple-choice', question: 'The side of a mountain range that receives the most rain is called the:', options: ['Rain shadow', 'Leeward side', 'Windward side', 'Coastal side'], correctAnswer: 'Windward side', hints: ['Where the moisture is dropped', 'Windward side']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The vast majority of the world\'s population lives in _________ zones.', correctAnswer: 'Temperate', hints: ['Not too hot, not too cold', 'Temperate']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which climate factor can change rapidly based on elevation?', options: ['Humidity', 'Temperature', 'Pressure', 'Precipitation'], correctAnswer: 'Temperature', hints: ['Higher elevation means lower temperature', 'Temperature (elevation)']},
                ],
                activity: { type: 'climate-zone-mapping', description: 'Analyze a world map of climate zones and compare it to a population density map.', instruction: 'Explain why the Ganges River Valley in India is one of the most densely populated areas.' }
              },
              {
                id: 'lesson-2',
                objective: 'MCCRS.SS.9-12.WG.2 - Population and Culture',
                content: '<h3>Population Density and Cultural Patterns</h3><p>**Population Density** is the measure of the number of people per unit area. It is typically highest in urban areas and along coasts/rivers. **Culture** includes the shared customs, beliefs, language, and technology of a group. **Cultural diffusion** is the spread of ideas and innovations from one group to another. **Language** and **Religion** are two of the most significant unifying and dividing forces in human geography, often dictating political boundaries and societal values.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'What is the most significant factor defining a distinct cultural region?', options: ['Food only', 'Climate', 'Shared language and religion', 'Political parties'], correctAnswer: 'Shared language and religion', hints: ['Core components of identity and value', 'Language/Religion']},
                  { id: 'q2', type: 'multiple-choice', question: 'The number of people per square mile is known as:', options: ['Population Growth', 'Population Density', 'Fertility Rate', 'Urbanization'], correctAnswer: 'Population Density', hints: ['Concentration of people', 'Density']},
                  { id: 'q3', type: 'fill-in-blank', question: 'The spread of popular music from one country to another is an example of _________ _________.', correctAnswer: 'Cultural Diffusion', hints: ['Spread of customs', 'Cultural Diffusion']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which region has the highest population density in the world?', options: ['North America', 'Western Europe', 'South Asia (India, Bangladesh)', 'Australia'], correctAnswer: 'South Asia (India, Bangladesh)', hints: ['Highest concentration of people on Earth', 'South Asia']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The movement of people from rural areas to cities is called _________.', correctAnswer: 'Urbanization', hints: ['City growth due to migration', 'Urbanization']},
                  { id: 'q6', type: 'multiple-choice', question: 'The political map often reflects the boundaries established by:', options: ['Landforms', 'Economic zones', 'Cultural and linguistic groups', 'Climate zones'], correctAnswer: 'Cultural and linguistic groups', hints: ['People with shared identity often seek self-governance', 'Culture/Language']},
                  { id: 'q7', type: 'fill-in-blank', question: 'The birth rate minus the death rate gives you the rate of _________ _________.', correctAnswer: 'Natural Increase', hints: ['Population change due to births/deaths', 'Natural Increase']},
                  { id: 'q8', type: 'multiple-choice', question: 'Which characteristic is the least likely to be shared by members of the same culture?', options: ['Language', 'Dietary practices', 'Personal income', 'Religious beliefs'], correctAnswer: 'Personal income', hints: ['Wealth varies greatly within a culture', 'Income']},
                ],
                activity: { type: 'culture-trait-analysis', description: 'Analyze a demographic table comparing the birth and death rates of two different countries.', instruction: 'Discuss why the spread of English as a global language is an example of cultural diffusion.' }
              },
              {
                id: 'lesson-3',
                objective: 'MCCRS.SS.9-12.WG.3 - Global Economic Interdependence',
                content: '<h3>Globalization and Trade</h3><p>**Globalization** is the increasing interconnectedness of the world economy, driven by rapid advances in communication and transportation. **Economic Interdependence** means countries rely on each other for goods and resources (e.g., the U.S. relies on China for manufactured goods, and China relies on the U.S. for markets). **Free Trade** (minimal tariffs/restrictions) generally promotes global growth but can lead to domestic job losses. Organizations like the WTO (World Trade Organization) regulate international commerce.</p>',
                practiceQuestions: [
                  { id: 'q1', type: 'multiple-choice', question: 'The reliance of countries on each other for resources, goods, and services is called:', options: ['Autarky', 'Nationalism', 'Economic Interdependence', 'Isolationism'], correctAnswer: 'Economic Interdependence', hints: ['Mutual reliance', 'Interdependence']},
                  { id: 'q2', type: 'multiple-choice', question: 'What is the term for the interconnectedness of the world\'s economies and cultures?', options: ['Geopolitics', 'Regionalism', 'Globalization', 'Federalism'], correctAnswer: 'Globalization', hints: ['Worldwide integration', 'Globalization']},
                  { id: 'q3', type: 'fill-in-blank', question: 'A _________ is a tax or duty placed on imported goods.', correctAnswer: 'Tariff', hints: ['Used to restrict trade', 'Tariff']},
                  { id: 'q4', type: 'multiple-choice', question: 'Which practice allows countries to produce the goods they are most efficient at making?', options: ['Isolationism', 'Subsistence farming', 'Specialization', 'Trade barriers'], correctAnswer: 'Specialization', hints: ['Focusing production', 'Specialization']},
                  { id: 'q5', type: 'fill-in-blank', question: 'The goal of Free _________ is to eliminate trade barriers like tariffs and quotas.', correctAnswer: 'Trade', hints: ['Unrestricted exchange', 'Free Trade']},
                  { id: 'q6', type: 'multiple-choice', question: 'The global exchange of information, people, and goods has been accelerated primarily by advancements in:', options: ['Agriculture', 'Mining', 'Transportation and communication', 'Local markets'], correctAnswer: 'Transportation and communication', hints: ['Connecting the world faster', 'Transport/Communication']},
                  { id: 'q7', type: 'fill-in-blank', question: 'A company that operates in multiple countries is known as a _________ _________ (MNC).', correctAnswer: 'Multinational Corporation', hints: ['Global company', 'MNC']},
                  { id: 'q8', type: 'multiple-choice', question: 'What is a major downside of globalization for industrialized nations?', options: ['Increased access to foreign goods', 'Loss of manufacturing jobs to cheaper labor markets', 'Higher prices for consumers', 'Decreased cultural variety'], correctAnswer: 'Loss of manufacturing jobs to cheaper labor markets', hints: ['Outsourcing', 'Job loss']},
                ],
                activity: { type: 'trade-benefit-analysis', description: 'Analyze a graph showing the trade volume between the U.S. and China over the last 30 years.', instruction: 'Discuss the arguments for and against placing tariffs on foreign goods.' }
              }
            ]
          }
        ]
      }
    };
  }

  getLearningPath(grade, subject, pathId) {
    return this.paths[grade]?.[subject]?.find(p => p.id === pathId);
  }

  getAllPaths(grade, subject) {
    return this.paths[grade]?.[subject] || [];
  }

  getLesson(grade, subject, pathId, lessonId) {
    const path = this.getLearningPath(grade, subject, pathId);
    return path?.lessons.find(l => l.id === lessonId);
  }
}

// Export to global scope
window.LearningPathData = LearningPathData;