const quizData = [
    {
        question: "What is JavaScript?",
        options: ["Programming Language", "Database", "Server", "OS"],
        correct: "Programming Language"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Apple", "Google"],
        correct: "Netscape"
    },
    {
        question: "Which symbol is used for strict equality comparison?",
        options: ["=", "==", "===", "!="],
        correct: "==="
    },
    {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["null", "undefined", "object", "string"],
        correct: "object"
    },
    {
        question: "Which of the following best describes the Temporal Dead Zone (TDZ)?",
        options: [
            "The time between function declaration and execution", 
            "The period where variables declared with let/const cannot be accessed before initialization", 
            "A strict mode scoping rule for the 'var' keyword", 
            "The execution delay caused by setTimeout()"
        ],
        correct: "The period where variables declared with let/const cannot be accessed before initialization"
    },
    {
        question: "What is the result of `[] + []` in JavaScript?",
        options: ["[]", "undefined", "NaN", "An empty string \"\""],
        correct: "An empty string \"\""
    },
    {
        question: "How does the `this` keyword behave inside an arrow function?",
        options: [
            "It refers to the object that called the function", 
            "It is lexically bound to the surrounding scope", 
            "It always refers to the global window object", 
            "It is undefined by default"
        ],
        correct: "It is lexically bound to the surrounding scope"
    },
    {
        question: "What will `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)` output respectively?",
        options: [
            "true, true", 
            "true, false", 
            "false, true", 
            "false, false"
        ],
        correct: "true, false"
    },
    {
        question: "What does an `async` function always return in JavaScript?",
        options: ["A Callback", "A Promise", "Undefined", "The exact value returned inside the function"],
        correct: "A Promise"
    },
    {
        question: "What is the output of `true + false`?",
        options: ["truefalse", "1", "NaN", "undefined"],
        correct: "1"
    },
    {
        question: "In the JavaScript event loop, which queue has the highest priority?",
        options: [
            "Macrotask Queue (e.g., setTimeout)", 
            "Microtask Queue (e.g., Promises)", 
            "Render Queue", 
            "Call Stack"
        ],
        correct: "Microtask Queue (e.g., Promises)"
    },
    {
        question: "Which method is used to create a new array with all elements that pass a test implemented by a provided function?",
        options: ["map()", "reduce()", "filter()", "forEach()"],
        correct: "filter()"
    },
    {
        question: "What is the data type of `NaN`?",
        options: ["undefined", "string", "boolean", "number"],
        correct: "number"
    }
];