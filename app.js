/* ––––––––––––––––––––––––
   QUIZ DATA
   –––––––––––––––––––––––– */

const quizData = {
    questions: [
        {
            id: 1,
            text: "Which jewellery makes you feel instantly more put together?",
            options: [
                { label: "Silver, white gold, platinum", scores: { tempCool: 2 } },
                { label: "Gold, brass, bronze", scores: { tempWarm: 2 } },
                { label: "Both work, depends on outfit", scores: { tempCool: 1, tempWarm: 1 } }
            ]
        },
        {
            id: 2,
            text: "When you wear white near your face, what looks best?",
            options: [
                { label: "Crisp white / optic white", scores: { tempCool: 2 } },
                { label: "Cream / ivory / off-white", scores: { tempWarm: 2 } },
                { label: "I avoid white altogether", scores: { depthDark: 1, depthMid: 1 } }
            ]
        },
        {
            id: 3,
            text: "Black clothing on you feels…",
            options: [
                { label: "Heavy or overpowering", scores: { depthLight: 2 } },
                { label: "Fine, but better styled carefully", scores: { depthMid: 2 } },
                { label: "Powerful, chic, effortless", scores: { depthDark: 2 } }
            ]
        },
        {
            id: 4,
            text: "You get the most compliments when you wear…",
            options: [
                { label: "Light, soft, airy colours", scores: { depthLight: 2 } },
                { label: "Balanced mid-tones", scores: { depthMid: 2 } },
                { label: "Deep, rich, dramatic colours", scores: { depthDark: 2 } }
            ]
        },
        {
            id: 5,
            text: "Which pink would you choose instinctively?",
            options: [
                { label: "Baby pink / blush", scores: { tempCool: 1, depthLight: 1 } },
                { label: "Coral / peach", scores: { tempWarm: 1, depthLight: 1 } },
                { label: "Raspberry / rose", scores: { tempCool: 1, depthMid: 1 } },
                { label: "Fuchsia / berry", scores: { tempCool: 1, depthDark: 1 } },
                { label: "Dusty coral / terracotta pink", scores: { tempWarm: 1, depthMid: 1 } }
            ]
        },
        {
            id: 6,
            text: "Your best brown is closer to…",
            options: [
                { label: "Taupe / grey-brown / cool cocoa", scores: { tempCool: 2 } },
                { label: "Camel / tan / caramel", scores: { tempWarm: 2 } },
                { label: "Brown is tricky on me", scores: { tempCool: 1, depthLight: 1 } }
            ]
        },
        {
            id: 7,
            text: "When colours are intense (burgundy, royal blue, deep purple), you tend to look…",
            options: [
                { label: "Overwhelmed or faded", scores: { depthLight: 2 } },
                { label: "Fine if balanced", scores: { depthMid: 2 } },
                { label: "Better — they bring me to life", scores: { depthDark: 2 } }
            ]
        },
        {
            id: 8,
            text: "If you had to choose, you lean more…",
            options: [
                { label: "Fresh, icy, clean", scores: { tempCool: 2 } },
                { label: "Warm, glowing, golden", scores: { tempWarm: 2 } }
            ]
        },
        {
            id: 9,
            text: "Your version of nude clothing is…",
            options: [
                { label: "Stone / rosewood / pewter", scores: { tempCool: 2 } },
                { label: "Beige / warm sand / honey", scores: { tempWarm: 2 } }
            ]
        }
    ],
    tieBreaker: {
        id: 10,
        text: "Your version of nude clothing is…",
        options: [
            { label: "Stone / rosewood / pewter", scores: { tempCool: 2 } },
            { label: "Beige / warm sand / honey", scores: { tempWarm: 2 } }
        ]
    }
};

const resultData = {
    periwinkle: {
        name: "Periwinkle",
        subtitle: "Light & Cool",
        description: "Your palette is fresh, ethereal, and delicate. You shine in soft cool tones that feel airy and refined.",
        colours: {
            "Neutrals": ["Soft white", "Pearl grey", "Cool beige", "Dove grey"],
            "Core colours": ["Baby pink", "Sky blue", "Lavender", "Mint", "Soft rose"],
            "Accent colours": ["Periwinkle blue", "Cool raspberry", "Silver"]
        },
        blackGuidance: "Black may feel heavy on you. Try charcoal, soft black, or navy instead.",
        avoid: "Warm oranges, rust, heavy earth tones, intense burgundy. These can overwhelm your delicate palette.",
        styleChips: ["Winter to Remember", "Cherry Blossoms", "Creme de la Creme", "Light Denim", "Moonstone Unicorn", "Blue & Stripes", "Cheeky Look"]
    },
    buttercup: {
        name: "Buttercup",
        subtitle: "Light & Warm",
        description: "Your palette is sunny, soft, and inviting. You glow in warm pastels and gentle golden tones that feel fresh and optimistic.",
        colours: {
            "Neutrals": ["Cream", "Ivory", "Warm beige", "Soft camel"],
            "Core colours": ["Peach", "Coral", "Buttercup yellow", "Warm pink", "Apricot"],
            "Accent colours": ["Soft gold", "Light terracotta", "Warm aqua"]
        },
        blackGuidance: "Black is too harsh for your soft warmth. Opt for chocolate brown, soft navy, or warm charcoal.",
        avoid: "Cool icy colours, stark black and white, jewel tones. These clash with your gentle warmth.",
        styleChips: ["Fresh & Blooming", "Handcrafted Chic", "Bright & Cosy", "Straight from rom-com", "Cottagecore", "Yummy Pastels", "Hot & Cold"]
    },
    columbine: {
        name: "Columbine",
        subtitle: "Mid & Cool",
        description: "Your palette is sophisticated, balanced, and elegant. You wear medium-depth cool tones with natural ease and polish.",
        colours: {
            "Neutrals": ["Soft grey", "Cool taupe", "Slate", "Greige"],
            "Core colours": ["Dusty rose", "Soft teal", "Cool mauve", "Periwinkle", "Sage green"],
            "Accent colours": ["Raspberry", "Cool burgundy", "Soft navy", "Pewter"]
        },
        blackGuidance: "Black works well on you, especially soft black or paired with cool tones.",
        avoid: "Warm golden yellows, bright orange, overly warm browns. These pull against your cool undertone.",
        styleChips: ["Silver Moon", "Fleur Du Mal", "Grey Checked Dove", "Chemistry Lesson", "See U Thru", "Big Star", "Grey Teddy"]
    },
    marigold: {
        name: "Marigold",
        subtitle: "Mid & Warm",
        description: "Your palette is rich, balanced, and naturally warm. You radiate in mid-tone earth colours and golden hues that feel grounded and vibrant.",
        colours: {
            "Neutrals": ["Warm taupe", "Camel", "Tan", "Warm grey"],
            "Core colours": ["Terracotta", "Coral", "Warm teal", "Olive", "Warm rose"],
            "Accent colours": ["Burnt orange", "Warm burgundy", "Gold", "Bronze"]
        },
        blackGuidance: "Black can work if paired with warm accents. Try chocolate brown or espresso for everyday.",
        avoid: "Icy pastels, cool pinks, stark white. These can make you look washed out.",
        styleChips: ["Leopard", "Liquid Gold", "Checked & Cool", "Floral Tales", "Exotic Fruit", "Closer to Nature", "Bombshell Pink"]
    },
    hellebore: {
        name: "Hellebore",
        subtitle: "Dark & Cool",
        description: "Your palette is dramatic, intense, and striking. You command attention in deep cool tones that feel powerful and sophisticated.",
        colours: {
            "Neutrals": ["Charcoal", "Cool black", "Deep grey", "Icy white"],
            "Core colours": ["True red", "Deep navy", "Emerald", "Royal purple", "Icy pink"],
            "Accent colours": ["Magenta", "Electric blue", "Silver", "Cool burgundy"]
        },
        blackGuidance: "Black is your power colour. Wear it often, pair it with bold accents or crisp white.",
        avoid: "Warm earth tones, peach, rust, muddy browns. These dull your natural intensity.",
        styleChips: ["Silver = Nude", "Basic & Not", "Black & White", "Black Rose", "Dark Monochrome", "Velvet Nightingale", "Red like Oxblood"]
    },
    rudbeckia: {
        name: "Rudbeckia",
        subtitle: "Dark & Warm",
        description: "Your palette is deep, rich, and luxurious. You thrive in dark warm tones that feel bold, earthy, and endlessly chic.",
        colours: {
            "Neutrals": ["Espresso", "Deep brown", "Warm black", "Bronze"],
            "Core colours": ["Deep burgundy", "Forest green", "Burnt orange", "Deep teal", "Chocolate"],
            "Accent colours": ["Gold", "Rust", "Deep plum", "Copper"]
        },
        blackGuidance: "Black works beautifully on you, especially when warmed up with gold or bronze accessories.",
        avoid: "Icy pastels, cool pinks, bright white, light grey. These feel disconnected from your depth.",
        styleChips: ["Kind Witchcraft", "Snake Whisperer", "Cave Traveller", "Autumnal Victoriana", "Velvet Fire", "Tan & Burgundy", "Western"]
    }
};

/* ––––––––––––––––––––––––
   STATE MANAGEMENT
   –––––––––––––––––––––––– */

let currentState = {
    currentQuestionIndex: 0,
    answers: [],
    scores: {
        tempCool: 0,
        tempWarm: 0,
        depthLight: 0,
        depthMid: 0,
        depthDark: 0
    },
    needsTieBreaker: false,
    showingTieBreaker: false
};

/* ––––––––––––––––––––––––
   DOM ELEMENTS
   –––––––––––––––––––––––– */

const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    disclaimer: document.getElementById('disclaimer-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    startBtn: document.getElementById('start-quiz-btn'),
    backBtn: document.getElementById('back-btn'),
    nextBtn: document.getElementById('next-btn'),
    restartBtn: document.getElementById('restart-btn'),
    shareBtn: document.getElementById('share-btn'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    shareNotification: document.getElementById('share-notification')
};

/* ––––––––––––––––––––––––
   INITIALIZATION
   –––––––––––––––––––––––– */

function init() {
    // Check for shared result in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sharedResult = urlParams.get('result');

    if (sharedResult && resultData[sharedResult.toLowerCase()]) {
        showScreen('result');
        renderResult(sharedResult.toLowerCase());
        return;
    }

    // Try to restore previous session
    const savedState = loadState();
    if (savedState && savedState.answers.length > 0) {
        // User has a saved session, but we'll start fresh for simplicity
        // Could add a "Continue Quiz" option here
    }

    // Set up event listeners
    elements.startBtn.addEventListener('click', startQuiz);
    elements.backBtn.addEventListener('click', goBack);
    elements.nextBtn.addEventListener('click', goNext);
    elements.restartBtn.addEventListener('click', restartQuiz);
    elements.shareBtn.addEventListener('click', shareResult);

    // Show welcome screen
    showScreen('welcome');
}

/* ––––––––––––––––––––––––
   SCREEN MANAGEMENT
   –––––––––––––––––––––––– */

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

/* ––––––––––––––––––––––––
   QUIZ FLOW
   –––––––––––––––––––––––– */

function startQuiz() {
    resetState();
    showScreen('quiz');
    renderQuestion();
}

function resetState() {
    currentState = {
        currentQuestionIndex: 0,
        answers: [],
        scores: {
            tempCool: 0,
            tempWarm: 0,
            depthLight: 0,
            depthMid: 0,
            depthDark: 0
        },
        needsTieBreaker: false,
        showingTieBreaker: false
    };
    saveState();
}

function renderQuestion() {
    const question = currentState.showingTieBreaker
        ? quizData.tieBreaker
        : quizData.questions[currentState.currentQuestionIndex];

    // Update question text
    elements.questionText.textContent = question.text;

    // Update progress
    updateProgress();

    // Render options
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionId = `option-${question.id}-${index}`;
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optionId;
        input.name = `question-${question.id}`;
        input.value = index;
        input.className = 'option-input';

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.className = 'option-label';
        label.textContent = option.label;

        const wrapper = document.createElement('div');
        wrapper.appendChild(input);
        wrapper.appendChild(label);

        elements.optionsContainer.appendChild(wrapper);

        // Add event listener
        input.addEventListener('change', handleOptionSelect);
    });

    // Update button states
    elements.nextBtn.disabled = true;
    elements.backBtn.style.display = currentState.currentQuestionIndex === 0 && !currentState.showingTieBreaker ? 'none' : 'inline-block';

    // Check if there's a saved answer for this question
    const savedAnswer = currentState.answers[currentState.currentQuestionIndex];
    if (savedAnswer !== undefined && !currentState.showingTieBreaker) {
        const savedInput = document.querySelector(`input[value="${savedAnswer}"]`);
        if (savedInput) {
            savedInput.checked = true;
            elements.nextBtn.disabled = false;
        }
    }
}

function updateProgress() {
    const totalQuestions = 9;
    let current = currentState.currentQuestionIndex + 1;

    if (currentState.showingTieBreaker) {
        current = 10;
    }

    const percentage = (current / (currentState.showingTieBreaker ? 10 : totalQuestions)) * 100;
    elements.progressBar.style.width = `${percentage}%`;
    elements.progressText.textContent = `Question ${current} of ${currentState.showingTieBreaker ? 10 : totalQuestions}`;

    // Update ARIA
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.setAttribute('aria-valuenow', percentage);
}

function handleOptionSelect(event) {
    elements.nextBtn.disabled = false;
}

function goBack() {
    if (currentState.showingTieBreaker) {
        // Go back from tie-breaker to last main question
        currentState.showingTieBreaker = false;
        currentState.currentQuestionIndex = 8; // Last main question
    } else if (currentState.currentQuestionIndex > 0) {
        currentState.currentQuestionIndex--;
    }

    renderQuestion();
    saveState();
}

function goNext() {
    const selectedOption = document.querySelector('input[name^="question-"]:checked');

    if (!selectedOption) {
        return;
    }

    const optionIndex = parseInt(selectedOption.value);
    const question = currentState.showingTieBreaker
        ? quizData.tieBreaker
        : quizData.questions[currentState.currentQuestionIndex];

    // Record answer
    if (!currentState.showingTieBreaker) {
        currentState.answers[currentState.currentQuestionIndex] = optionIndex;
    }

    // Update scores
    const selectedOptionData = question.options[optionIndex];
    Object.keys(selectedOptionData.scores).forEach(scoreKey => {
        currentState.scores[scoreKey] += selectedOptionData.scores[scoreKey];
    });

    // Save state
    saveState();

    // Determine next action
    if (currentState.showingTieBreaker) {
        // Tie-breaker complete, show results
        calculateAndShowResult();
    } else if (currentState.currentQuestionIndex < quizData.questions.length - 1) {
        // Move to next question
        currentState.currentQuestionIndex++;
        renderQuestion();
    } else {
        // All main questions complete, check if tie-breaker needed
        checkForTieBreaker();
    }
}

function checkForTieBreaker() {
    const tempDiff = Math.abs(currentState.scores.tempWarm - currentState.scores.tempCool);

    if (tempDiff < 2) {
        // Temperature is too close, show tie-breaker
        currentState.needsTieBreaker = true;
        currentState.showingTieBreaker = true;
        renderQuestion();
    } else {
        // No tie-breaker needed, show results
        calculateAndShowResult();
    }
}

function calculateAndShowResult() {
    const scores = currentState.scores;

    // Determine temperature
    const temperature = scores.tempWarm > scores.tempCool ? 'warm' : 'cool';
    const tempDiff = Math.abs(scores.tempWarm - scores.tempCool);
    const tempCloseCall = tempDiff < 2;

    // Determine depth
    let depth;
    const maxDepth = Math.max(scores.depthLight, scores.depthMid, scores.depthDark);

    if (scores.depthLight === maxDepth && scores.depthMid === maxDepth && scores.depthDark === maxDepth) {
        depth = 'mid'; // All tied, default to mid
    } else if (scores.depthLight === maxDepth && scores.depthMid === maxDepth) {
        depth = 'light'; // Light and mid tied, prefer light
    } else if (scores.depthMid === maxDepth && scores.depthDark === maxDepth) {
        depth = 'mid'; // Mid and dark tied, prefer mid
    } else if (scores.depthLight === maxDepth && scores.depthDark === maxDepth) {
        depth = 'mid'; // Light and dark tied, default to mid
    } else if (scores.depthLight === maxDepth) {
        depth = 'light';
    } else if (scores.depthMid === maxDepth) {
        depth = 'mid';
    } else {
        depth = 'dark';
    }

    // Map to result
    const resultMap = {
        'cool-light': 'periwinkle',
        'warm-light': 'buttercup',
        'cool-mid': 'columbine',
        'warm-mid': 'marigold',
        'cool-dark': 'hellebore',
        'warm-dark': 'rudbeckia'
    };

    const resultKey = `${temperature}-${depth}`;
    const result = resultMap[resultKey];

    // Calculate confidence
    const depthScores = [scores.depthLight, scores.depthMid, scores.depthDark].sort((a, b) => b - a);
    const depthGap = depthScores[0] - depthScores[1];

    let confidence;
    if (tempCloseCall || depthGap < 2) {
        confidence = 'Low';
    } else if (tempDiff >= 4 && depthGap >= 4) {
        confidence = 'High';
    } else {
        confidence = 'Medium';
    }

    // Store result in state
    currentState.result = result;
    currentState.confidence = confidence;
    saveState();

    // Show disclaimer modal first
    showDisclaimerModal(result, confidence);
}

/* ––––––––––––––––––––––––
   DISCLAIMER MODAL
   –––––––––––––––––––––––– */

function showDisclaimerModal(result, confidence) {
    const disclaimerScreen = document.getElementById('disclaimer-screen');
    const continueBtn = document.getElementById('continue-to-results-btn');
    const generatingIcon = document.getElementById('generating-icon');

    showScreen('disclaimer');
    disclaimerScreen.classList.add('active');

    // Show loading animation for 7 seconds, then reveal button
    setTimeout(() => {
        generatingIcon.style.display = 'none';
        continueBtn.style.display = 'block';
        // Small delay for display change, then add visible class for animation
        setTimeout(() => {
            continueBtn.classList.add('visible');
        }, 50);
    }, 7000);

    // Handle continue button
    const handleContinue = () => {
        showScreen('result');
        renderResult(result, confidence);
        continueBtn.removeEventListener('click', handleContinue);
    };

    continueBtn.addEventListener('click', handleContinue);
}

/* ––––––––––––––––––––––––
   CONFETTI ANIMATION
   –––––––––––––––––––––––– */

function createConfetti(resultKey) {
    const container = document.getElementById('confetti-container');
    container.innerHTML = ''; // Clear existing confetti

    // Color palettes for each flower type
    const colorPalettes = {
        'periwinkle': ['#CCCCFF', '#87CEEB', '#FFD6E8', '#E6E6FA', '#B0E0E6', '#F4C2C2', '#AAF0D1'],
        'buttercup': ['#F3E05C', '#FFD700', '#FFDAB9', '#FF7F50', '#FBCEB1', '#FFB6C1', '#7FDBFF'],
        'columbine': ['#D8B2D1', '#DCAE96', '#9DC183', '#B0E0E6', '#DDA0DD', '#C9BEB0', '#87CEEB'],
        'marigold': ['#F3E05C', '#E2725B', '#CC5500', '#B7410E', '#B87333', '#FFD700', '#D4AF37'],
        'hellebore': ['#800020', '#722F37', '#5D3A5A', '#6A0DAD', '#0047AB', '#4169E1', '#2C5F2D'],
        'rudbeckia': ['#3E2723', '#5D4037', '#8B6341', '#4E342E', '#800020', '#B7410E', '#D4AF37']
    };

    const colors = colorPalettes[resultKey] || ['#D85B7D', '#E87B98', '#C34A6B', '#F9E79F', '#D4AF37', '#6B5B95'];
    const confettiCount = 150; // Increased from 80 to 150 for more intensity

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random positioning
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random size - increased range for more variety
        const size = Math.random() * 12 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        // Random animation duration and delay
        confetti.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
        confetti.style.animationDelay = Math.random() * 1 + 's';

        container.appendChild(confetti);
    }

    // Clear confetti after animation completes
    setTimeout(() => {
        container.innerHTML = '';
    }, 8000); // Increased from 7000 to 8000
}

// Color mapping for visual swatches
function getColorSwatch(colorName) {
    const colorMap = {
        // Whites & Creams
        'soft white': { bg: '#F8F8F8', text: '#333' },
        'cream': { bg: '#FFFDD0', text: '#333' },
        'ivory': { bg: '#FFFFF0', text: '#333' },
        'warm white': { bg: '#FFF9E6', text: '#333' },
        'crisp white': { bg: '#FAFAFA', text: '#333' },

        // Greys & Neutrals
        'pearl grey': { bg: '#E8E8E8', text: '#333' },
        'cool beige': { bg: '#E3DCD0', text: '#333' },
        'dove grey': { bg: '#D3D3D3', text: '#333' },
        'warm beige': { bg: '#E8DCC5', text: '#333' },
        'soft camel': { bg: '#C19A6B', text: '#FFF' },
        'charcoal': { bg: '#4A4A4A', text: '#FFF' },
        'taupe': { bg: '#B8A99A', text: '#FFF' },
        'greige': { bg: '#C9BEB0', text: '#333' },
        'espresso': { bg: '#3E2723', text: '#FFF' },
        'deep brown': { bg: '#5D4037', text: '#FFF' },
        'warm black': { bg: '#2C2624', text: '#FFF' },
        'bronze': { bg: '#8B6341', text: '#FFF' },
        'chocolate': { bg: '#4E342E', text: '#FFF' },
        'soft black': { bg: '#3B3B3B', text: '#FFF' },
        'navy': { bg: '#1A237E', text: '#FFF' },
        'true black': { bg: '#000000', text: '#FFF' },

        // Pinks & Roses
        'baby pink': { bg: '#FFD6E8', text: '#333' },
        'soft rose': { bg: '#F4C2C2', text: '#333' },
        'peach': { bg: '#FFDAB9', text: '#333' },
        'coral': { bg: '#FF7F50', text: '#FFF' },
        'warm pink': { bg: '#FFB6C1', text: '#333' },
        'apricot': { bg: '#FBCEB1', text: '#333' },
        'rose pink': { bg: '#E6A8D7', text: '#333' },
        'hot pink': { bg: '#FF69B4', text: '#FFF' },
        'magenta': { bg: '#C71585', text: '#FFF' },
        'dusty rose': { bg: '#DCAE96', text: '#333' },
        'mauve': { bg: '#D8B2D1', text: '#333' },
        'cool raspberry': { bg: '#E30B5D', text: '#FFF' },

        // Reds & Burgundy
        'true red': { bg: '#E32227', text: '#FFF' },
        'warm red': { bg: '#D73B3E', text: '#FFF' },
        'deep burgundy': { bg: '#800020', text: '#FFF' },
        'cherry red': { bg: '#990000', text: '#FFF' },
        'burgundy': { bg: '#800020', text: '#FFF' },
        'wine': { bg: '#722F37', text: '#FFF' },

        // Blues
        'sky blue': { bg: '#87CEEB', text: '#333' },
        'periwinkle blue': { bg: '#CCCCFF', text: '#333' },
        'soft navy': { bg: '#4A5F7F', text: '#FFF' },
        'icy blue': { bg: '#B0E0E6', text: '#333' },
        'cobalt blue': { bg: '#0047AB', text: '#FFF' },
        'royal blue': { bg: '#4169E1', text: '#FFF' },
        'deep teal': { bg: '#004D4D', text: '#FFF' },
        'teal': { bg: '#008080', text: '#FFF' },
        'warm aqua': { bg: '#7FDBFF', text: '#333' },

        // Purples
        'lavender': { bg: '#E6E6FA', text: '#333' },
        'soft plum': { bg: '#DDA0DD', text: '#333' },
        'deep plum': { bg: '#5D3A5A', text: '#FFF' },
        'rich purple': { bg: '#6A0DAD', text: '#FFF' },

        // Greens
        'mint': { bg: '#AAF0D1', text: '#333' },
        'sage green': { bg: '#9DC183', text: '#333' },
        'forest green': { bg: '#228B22', text: '#FFF' },
        'emerald': { bg: '#50C878', text: '#FFF' },
        'pine green': { bg: '#2C5F2D', text: '#FFF' },

        // Yellows & Golds
        'buttercup yellow': { bg: '#F3E05C', text: '#333' },
        'soft gold': { bg: '#FFD700', text: '#333' },
        'gold': { bg: '#D4AF37', text: '#333' },
        'lemon yellow': { bg: '#FFF44F', text: '#333' },

        // Oranges & Rust
        'light terracotta': { bg: '#E2725B', text: '#FFF' },
        'burnt orange': { bg: '#CC5500', text: '#FFF' },
        'rust': { bg: '#B7410E', text: '#FFF' },
        'copper': { bg: '#B87333', text: '#FFF' },
        'warm oranges': { bg: '#FF8C42', text: '#FFF' },
        'bright orange': { bg: '#FF8800', text: '#FFF' },

        // Compound/Descriptive terms
        'icy colours': { bg: '#E0F2F7', text: '#333' },
        'icy pastels': { bg: '#E8F4F8', text: '#333' },
        'jewel tones': { bg: '#9B59B6', text: '#FFF' },
        'earth tones': { bg: '#8B7355', text: '#FFF' },
        'heavy earth tones': { bg: '#6B5344', text: '#FFF' },
        'warm earth tones': { bg: '#A0826D', text: '#FFF' },
        'muddy browns': { bg: '#6F5849', text: '#FFF' },
        'warm browns': { bg: '#8B6F47', text: '#FFF' },
        'cool pinks': { bg: '#FFB3D9', text: '#333' },
        'stark white': { bg: '#FFFFFF', text: '#333' },
        'light grey': { bg: '#D3D3D3', text: '#333' },
        'bright white': { bg: '#FEFEFE', text: '#333' },
        'stark black': { bg: '#000000', text: '#FFF' },
        'intense burgundy': { bg: '#6B0F1A', text: '#FFF' },
        'warm golden yellows': { bg: '#FFD700', text: '#333' },

        // Additional terms
        'silver': { bg: '#C0C0C0', text: '#333' },
        'slate': { bg: '#708090', text: '#FFF' },
        'terracotta': { bg: '#E2725B', text: '#FFF' },
        'olive': { bg: '#808000', text: '#FFF' },
        'warm rose': { bg: '#FF6B9D', text: '#FFF' },
        'cool mauve': { bg: '#B8A3C8', text: '#333' },
        'periwinkle': { bg: '#CCCCFF', text: '#333' },
        'raspberry': { bg: '#E30B5D', text: '#FFF' },
        'cool burgundy': { bg: '#6B0F1A', text: '#FFF' },
        'pewter': { bg: '#96A8A1', text: '#333' },
        'warm burgundy': { bg: '#8B0000', text: '#FFF' },
        'warm teal': { bg: '#008B8B', text: '#FFF' },
        'camel': { bg: '#C19A6B', text: '#FFF' },
        'tan': { bg: '#D2B48C', text: '#333' },
        'warm grey': { bg: '#B8A99A', text: '#FFF' },
        'cool black': { bg: '#2B2B2B', text: '#FFF' },
        'deep grey': { bg: '#5A5A5A', text: '#FFF' },
        'icy white': { bg: '#F0FFFF', text: '#333' },
        'deep navy': { bg: '#000080', text: '#FFF' },
        'royal purple': { bg: '#7851A9', text: '#FFF' },
        'icy pink': { bg: '#FFE4E1', text: '#333' },
        'electric blue': { bg: '#7DF9FF', text: '#333' },
        'warm charcoal': { bg: '#54534A', text: '#FFF' },
        'chocolate brown': { bg: '#4E342E', text: '#FFF' },
        'soft taupe': { bg: '#C9B8A8', text: '#333' },
        'cool taupe': { bg: '#A89F91', text: '#FFF' },
        'warm taupe': { bg: '#D5C5B1', text: '#333' },
        'cool cocoa': { bg: '#8B7D6B', text: '#FFF' },

        // Generic color words
        'black': { bg: '#000000', text: '#FFF' },
        'white': { bg: '#FFFFFF', text: '#333' },
        'orange': { bg: '#FF8800', text: '#FFF' },
        'brown': { bg: '#8B4513', text: '#FFF' },
        'grey': { bg: '#808080', text: '#FFF' },
        'gray': { bg: '#808080', text: '#FFF' },
        'pink': { bg: '#FFC0CB', text: '#333' },
        'yellow': { bg: '#FFFF00', text: '#333' },
        'blue': { bg: '#0000FF', text: '#FFF' }
    };

    // Case-insensitive lookup
    const normalizedName = colorName.toLowerCase();
    return colorMap[normalizedName] || { bg: '#F6EFE8', text: '#333' };
}

// Parse text to identify color names and create structured parts
function parseColorText(text) {
    // Get all color names from the colorMap to search for
    const colorNames = [
        // Add generic color names that might appear in avoid text
        'black', 'white', 'orange', 'oranges', 'rust', 'burgundy', 'peach', 'brown', 'browns',
        'grey', 'pink', 'pinks', 'yellow', 'yellows', 'blue', 'navy', 'charcoal',
        // Compound/descriptive terms (check these first as they're more specific)
        'warm oranges', 'icy colours', 'icy pastels', 'jewel tones', 'earth tones',
        'heavy earth tones', 'warm earth tones', 'muddy browns', 'warm browns', 'cool pinks',
        'stark white', 'light grey', 'bright white', 'stark black', 'intense burgundy',
        'warm golden yellows', 'bright orange',
        // Also specific colors
        'Soft white', 'Cream', 'Ivory', 'Warm white', 'Crisp white',
        'Pearl grey', 'Cool beige', 'Dove grey', 'Warm beige', 'Soft camel',
        'Charcoal', 'Taupe', 'Greige', 'Espresso', 'Deep brown', 'Warm black',
        'Bronze', 'Chocolate', 'Soft black', 'Navy', 'True black',
        'Baby pink', 'Soft rose', 'Peach', 'Coral', 'Warm pink', 'Apricot',
        'Rose pink', 'Hot pink', 'Magenta', 'Dusty rose', 'Mauve', 'Cool raspberry',
        'True red', 'Warm red', 'Deep burgundy', 'Cherry red', 'Burgundy', 'Wine',
        'Sky blue', 'Periwinkle blue', 'Soft navy', 'Icy blue', 'Cobalt blue',
        'Royal blue', 'Deep teal', 'Teal', 'Warm aqua',
        'Lavender', 'Soft plum', 'Deep plum', 'Rich purple',
        'Mint', 'Sage green', 'Forest green', 'Emerald', 'Pine green',
        'Buttercup yellow', 'Soft gold', 'Gold', 'Lemon yellow',
        'Light terracotta', 'Burnt orange', 'Rust', 'Copper',
        'Silver', 'Slate', 'Terracotta', 'Olive', 'Warm rose',
        'Cool mauve', 'Periwinkle', 'Raspberry', 'Cool burgundy', 'Pewter',
        'Warm burgundy', 'Warm teal', 'Camel', 'Tan', 'Warm grey',
        'Cool black', 'Deep grey', 'Icy white', 'Deep navy', 'Royal purple',
        'Icy pink', 'Electric blue', 'Warm charcoal', 'Chocolate brown',
        'Soft taupe', 'Cool taupe', 'Warm taupe', 'Cool cocoa'
    ];

    // Create a case-insensitive regex pattern for color matching
    // Sort by length (longest first) to match "warm golden yellows" before "yellows"
    const sortedColors = colorNames.sort((a, b) => b.length - a.length);
    const colorPattern = new RegExp(
        `\\b(${sortedColors.map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
        'gi'
    );

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = colorPattern.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
            parts.push({
                text: text.substring(lastIndex, match.index),
                isColor: false
            });
        }

        // Add the color match
        parts.push({
            text: match[0],
            isColor: true
        });

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push({
            text: text.substring(lastIndex),
            isColor: false
        });
    }

    // If no colors found, return the whole text as non-color
    if (parts.length === 0) {
        parts.push({
            text: text,
            isColor: false
        });
    }

    return parts;
}

/* ––––––––––––––––––––––––
   RESULT RENDERING
   –––––––––––––––––––––––– */

function renderResult(resultKey, confidence = 'Medium') {
    const result = resultData[resultKey];

    // Update header
    const flowerImg = document.getElementById('result-flower');
    const flowerMap = {
        'periwinkle': 'Flowers/ZAZU_FLOWERS_Periwinkle.png',
        'buttercup': 'Flowers/ZAZU_FLOWERS_Buttercup.png',
        'columbine': 'Flowers/ZAZU_FLOWERS_Columbine.png',
        'marigold': 'Flowers/ZAZU_FLOWERS_Marigold.png',
        'hellebore': 'Flowers/ZAZU_FLOWERS_Hellabore.png',
        'rudbeckia': 'Flowers/ZAZU_FLOWERS_Rudbekia.png'
    };
    flowerImg.src = flowerMap[resultKey] || '';
    flowerImg.alt = result.name;

    document.getElementById('result-name').textContent = result.name;
    document.getElementById('result-subtitle').textContent = result.subtitle;

    // Update confidence gauge
    const confidenceBar = document.getElementById('confidence-bar');
    const confidenceText = document.getElementById('confidence-text');

    confidenceText.textContent = confidence;

    // Set gauge width and color based on confidence
    const confidenceLevels = {
        'Low': { width: '33%', color: '#E87B98' },
        'Medium': { width: '66%', color: '#D4AF37' },
        'High': { width: '100%', color: '#6B5B95' }
    };

    const level = confidenceLevels[confidence] || confidenceLevels['Medium'];
    confidenceBar.style.width = level.width;
    confidenceBar.style.backgroundColor = level.color;

    // Update description
    document.getElementById('result-description').textContent = result.description;

    // Show colours organized by category
    const coloursContainer = document.getElementById('result-colours');
    coloursContainer.innerHTML = '';
    const previewCountPerCategory = 2;

    Object.keys(result.colours).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'colour-category';

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'colour-category-title';
        categoryTitle.textContent = category;

        const colourList = document.createElement('div');
        colourList.className = 'colour-list';

        const categoryColours = result.colours[category];
        const visibleColours = categoryColours.slice(0, previewCountPerCategory);
        const hiddenCount = Math.max(0, categoryColours.length - visibleColours.length);

        visibleColours.forEach(colour => {
            const colourTag = document.createElement('span');
            colourTag.className = 'colour-tag';
            colourTag.textContent = colour;

            colourList.appendChild(colourTag);
        });

        if (hiddenCount > 0) {
            const lockedTag = document.createElement('span');
            lockedTag.className = 'colour-tag colour-tag-locked';
            lockedTag.textContent = `+${hiddenCount} more`;
            colourList.appendChild(lockedTag);
        }

        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(colourList);
        coloursContainer.appendChild(categoryDiv);
    });

    // Show avoid section with colored tags
    const avoidContainer = document.getElementById('result-avoid');
    avoidContainer.innerHTML = '';

    const avoidPreviewCount = 2;
    const avoidItems = result.avoid
        .replace(/\.$/, '')
        .split(',')
        .map(item => item.trim())
        .filter(Boolean);

    if (avoidItems.length === 0) {
        avoidContainer.textContent = result.avoid;
    } else {
        const visibleAvoidItems = avoidItems.slice(0, avoidPreviewCount);
        const hiddenAvoidCount = Math.max(0, avoidItems.length - visibleAvoidItems.length);

        visibleAvoidItems.forEach(item => {
            const avoidTag = document.createElement('span');
            avoidTag.className = 'colour-tag';
            avoidTag.textContent = item;
            avoidContainer.appendChild(avoidTag);
        });

        if (hiddenAvoidCount > 0) {
            const lockedAvoidTag = document.createElement('span');
            lockedAvoidTag.className = 'colour-tag colour-tag-locked';
            lockedAvoidTag.textContent = `+${hiddenAvoidCount} more`;
            avoidContainer.appendChild(lockedAvoidTag);
        }
    }


    // Set up result buttons to link to colour type pages
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const proServiceBtn = document.getElementById('pro-service-btn');

    const typeUrls = {
        'periwinkle': 'https://www.zazufeu.com/colour-types/periwinkle',
        'buttercup': 'https://www.zazufeu.com/colour-types/buttercup',
        'columbine': 'https://www.zazufeu.com/colour-types/columbine',
        'marigold': 'https://www.zazufeu.com/colour-types/marigold',
        'hellebore': 'https://www.zazufeu.com/colour-types/hellebore',
        'rudbeckia': 'https://www.zazufeu.com/colour-types/rudbeckia'
    };

    learnMoreBtn.textContent = `Learn More About ${result.name}`;
    learnMoreBtn.onclick = () => {
        window.open(typeUrls[resultKey], '_blank');
    };

    proServiceBtn.onclick = () => {
        window.open('https://www.zazufeu.com/services', '_blank');
    };
}

/* ––––––––––––––––––––––––
   ACTIONS
   –––––––––––––––––––––––– */

function restartQuiz() {
    showScreen('welcome');
    resetState();
}

function shareResult() {
    const result = currentState.result;
    if (!result) return;

    const url = `${window.location.origin}${window.location.pathname}?result=${result}`;

    // Try to use native share API
    if (navigator.share) {
        navigator.share({
            title: 'My Style Colour Type',
            text: `I'm ${resultData[result].name}! Find out your colour type:`,
            url: url
        }).catch(() => {
            // Fallback to clipboard
            copyToClipboard(url);
        });
    } else {
        // Fallback to clipboard
        copyToClipboard(url);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Link copied to clipboard!');
    }).catch(() => {
        showNotification('Could not copy link');
    });
}

function showNotification(message) {
    elements.shareNotification.textContent = message;
    elements.shareNotification.classList.add('show');

    setTimeout(() => {
        elements.shareNotification.classList.remove('show');
    }, 3000);
}

/* ––––––––––––––––––––––––
   LOCAL STORAGE
   –––––––––––––––––––––––– */

function saveState() {
    try {
        localStorage.setItem('styleColourQuizState', JSON.stringify(currentState));
    } catch (e) {
        console.error('Could not save state:', e);
    }
}

function loadState() {
    try {
        const saved = localStorage.getItem('styleColourQuizState');
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        console.error('Could not load state:', e);
        return null;
    }
}

/* ––––––––––––––––––––––––
   START APP
   –––––––––––––––––––––––– */

document.addEventListener('DOMContentLoaded', init);
