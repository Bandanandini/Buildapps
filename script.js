const greeting = document.getElementById('greeting');
const message = document.getElementById('message');

const currentHour = new Date().getHours();
let greetingText = 'Hello!';

if (currentHour < 12) {
    greetingText = 'Good Morning!';
} else if (currentHour < 18) {
    greetingText = 'Good Afternoon!';
} else {
    greetingText = 'Good Evening!';
}

greeting.textContent = greetingText;
message.textContent = 'Welcome! Have a wonderful day.';

