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
    const modal = document.getElementById('disclaimer-modal');
    const continueBtn = document.getElementById('continue-to-results-btn');
    const generatingIcon = document.getElementById('generating-icon');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

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
        modal.classList.remove('active');
        document.body.style.overflow = '';
        showScreen('result');
        renderResult(result, confidence);
        createConfetti(); // Add confetti celebration
        continueBtn.removeEventListener('click', handleContinue);
    };

    continueBtn.addEventListener('click', handleContinue);
}

/* ––––––––––––––––––––––––
   CONFETTI ANIMATION
   –––––––––––––––––––––––– */

function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = ''; // Clear existing confetti

    const colors = ['#D85B7D', '#E87B98', '#C34A6B', '#F9E79F', '#D4AF37', '#6B5B95'];
    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random positioning
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random size
        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        // Random animation duration and delay
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';

        container.appendChild(confetti);
    }

    // Clear confetti after animation completes
    setTimeout(() => {
        container.innerHTML = '';
    }, 7000);
}

/* ––––––––––––––––––––––––
   RESULT RENDERING
   –––––––––––––––––––––––– */

function renderResult(resultKey, confidence = 'Medium') {
    const result = resultData[resultKey];

    // Update header
    document.getElementById('result-name').textContent = result.name;
    document.getElementById('result-subtitle').textContent = result.subtitle;
    document.getElementById('result-confidence').textContent = `Confidence: ${confidence}`;

    // Update description
    document.getElementById('result-description').textContent = result.description;

    // Update colours
    const coloursContainer = document.getElementById('result-colours');
    coloursContainer.innerHTML = '';

    Object.keys(result.colours).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'colour-category';

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'colour-category-title';
        categoryTitle.textContent = category;

        const colourList = document.createElement('div');
        colourList.className = 'colour-list';

        result.colours[category].forEach(colour => {
            const colourTag = document.createElement('span');
            colourTag.className = 'colour-tag';
            colourTag.textContent = colour;
            colourList.appendChild(colourTag);
        });

        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(colourList);
        coloursContainer.appendChild(categoryDiv);
    });

    // Update black guidance
    if (result.blackGuidance) {
        document.getElementById('black-guidance-section').style.display = 'block';
        document.getElementById('black-guidance').textContent = result.blackGuidance;
    } else {
        document.getElementById('black-guidance-section').style.display = 'none';
    }

    // Update avoid
    document.getElementById('result-avoid').textContent = result.avoid;

    // Update style chips
    const chipsContainer = document.getElementById('style-chips');
    chipsContainer.innerHTML = '';

    result.styleChips.forEach(chip => {
        const chipElement = document.createElement('span');
        chipElement.className = 'style-chip';
        chipElement.textContent = chip;
        chipsContainer.appendChild(chipElement);
    });
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
