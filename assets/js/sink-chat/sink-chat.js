// tabbar

const tabButtons = document.querySelectorAll('.custom-tab-btn');
const tabContents = document.querySelectorAll('.custom-tab-content');
const speechBubble = document.querySelector('.speech-bubble');
const introSection = document.querySelector('.intro-section');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {


        if (speechBubble) {
            speechBubble.classList.add('fade-out');
            setTimeout(() => {
                speechBubble.style.display = 'none';
            }, 500);
        }
        if (introSection) {
            introSection.classList.add('fade-out');
            setTimeout(() => {
                introSection.style.display = 'none';
            }, 500);
        }

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-bs-target');
        document.querySelector(target).classList.add('active');
    });
});


// chat section

const chatSection = document.getElementById('chat-section');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Smooth scroll only when new messages are added
function smoothScrollToBottom() {
    const container = document.querySelector('.main-content');
    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
}

// Add today's date marker once
function addTodayMarker() {
    if (!document.querySelector('.current-day')) {
        const marker = document.createElement('div');
        marker.classList.add('current-day');
        marker.innerHTML = `<hr><span>Bugün</span><hr>`;
        chatSection.appendChild(marker);
    }
}

// Add a user message
function addUserMessage(text, time, scroll = true) {
    const msg = document.createElement('div');
    msg.classList.add('message', 'user');
    msg.innerHTML = `
        <div class="message-info">
            <h6 class="username">Siz</h6>
        </div>
        <div class="message-content">
            <div class="bubble">
                <p>${text}</p>
                <button class="edit-btn">
                    <img src="./assets/images/chat-edit.svg" alt="edit">
                </button>
            </div>
            <div class="avatar">
                <img src="./assets/images/user-profile.svg" width="26px" height="26px" alt="avatar">
            </div>
        </div>
        <span class="timestamp">${time}</span>
    `;
    chatSection.appendChild(msg);

    // Attach edit functionality with delegation
    msg.querySelector('.edit-btn').addEventListener('click', () => makeEditable(msg));

    if (scroll) smoothScrollToBottom();
}

function makeEditable(messageElement) {
    const bubble = messageElement.querySelector('.bubble');
    const p = bubble.querySelector('p');

    // If already editing, do nothing
    if (bubble.querySelector('input')) return;

    const currentText = p.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.classList.add('edit-input');

    p.replaceWith(input);
    input.focus();

    function saveEdit() {
        const newText = input.value.trim() || currentText;
        const newP = document.createElement('p');
        newP.textContent = newText;
        input.replaceWith(newP);
    }

    // Save on Enter, cancel on Esc, or save on blur
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveEdit();
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            input.replaceWith(p);
        }
    });
    input.addEventListener('blur', saveEdit);
}

// function addUserMessage(text, time, scroll = true) {
//     const msg = document.createElement('div');
//     msg.classList.add('message', 'user');
//     msg.innerHTML = `
//         <div class="message-info">
//             <h6 class="username">Siz</h6>
//         </div>
//         <div class="message-content">
//             <div class="bubble">
//                 <p>${text}</p>
//                 <button class="edit-btn">
//                     <img src="./assets/images/chat-edit.svg" alt="edit">
//                 </button>
//             </div>
//             <div class="avatar">
//                 <img src="./assets/images/user-profile.svg" width="26px" height="26px" alt="avatar">
//             </div>
//         </div>
//         <span class="timestamp">${time}</span>
//     `;
//     chatSection.appendChild(msg);
//     if (scroll) smoothScrollToBottom();
// }

// Add an AI message
function addAIMessage(text, time, scroll = true) {
    const msg = document.createElement('div');
    msg.classList.add('message', 'ai');
    msg.innerHTML = `
        <div class="avatar">
            <img src="./assets/images/ai-profile.svg" width="48px" height="48px" alt="avatar">
        </div>
        <div class="content">
            <div class="message-info">
                <h6 class="username">SINK</h6>
                <span class="timestamp">${time}</span>
            </div>
            <div class="bubble ai-bubble">
                ${text}
            </div>
            <div class="feedback">
                <div>
                    <button class="icon-btn"><img src="./assets/images/sound.svg" alt="speak"></button>
                    <button class="icon-btn"><img src="./assets/images/copy.svg" alt="copy"></button>
                </div>
                <div>
                    <button class="icon-btn"><img src="./assets/images/thumbup.svg" alt="like"></button>
                    <button class="icon-btn"><img src="./assets/images/thumbdown.svg" alt="dislike"></button>
                </div>
            </div>
        </div>
    `;
    chatSection.appendChild(msg);
    if (scroll) smoothScrollToBottom();
}

// Add AI loading bubble
function addAILoading() {
    const msg = document.createElement('div');
    msg.classList.add('message', 'ai', 'loading');
    msg.innerHTML = `
        <div class="avatar">
            <img src="./assets/images/ai-profile.svg" width="48px" height="48px" alt="avatar">
        </div>
        <div class="content">
            <div class="message-info">
                <h6 class="username">SINK</h6>
            </div>
            <div class="ai-bubble typing">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatSection.appendChild(msg);
    smoothScrollToBottom();
    return msg;
}

// Handle send message
function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addTodayMarker();

    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    addUserMessage(text, time);

    chatInput.value = '';

    // Show typing bubble then AI message
    const loadingMsg = addAILoading();
    setTimeout(() => {
        loadingMsg.remove();
        addAIMessage(
            `<p>Lorem ipsum dolor sit amet consectetur. Metus tristique iaculis consectetur ut.</p>
             <ol>
               <li>First point from AI response.</li>
               <li>Second point from AI response.</li>
             </ol>`, time
        );
    }, 1500);
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Initial chat without auto-scroll
addTodayMarker();
addUserMessage('Merhaba! Bu benim ilk mesajım.', '10:45', false);
addAIMessage('<p>SINK buradayım! Size nasıl yardımcı olabilirim?</p>', '10:46', false);
