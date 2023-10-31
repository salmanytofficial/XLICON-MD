const { bot, cmd } = require('../lib');

// Initialize an object to store greeting messages
const greetingMessages = {};

// Command to set a custom greeting message
cmd({
  pattern: "setgreeting",
  desc: "Set a custom greeting message",
  category: "utility",
}, async (Void, citel, text) => {
  const greeting = text.trim(); // Get the custom greeting message from the command.
  const userId = citel.sender; // Use the sender's ID as the key.

  greetingMessages[userId] = greeting; // Store the custom greeting message for this user.

  await citel.reply("Custom greeting message set successfully!");
});

// Listen for incoming messages
bot.on('message', async (message) => {
  const userId = message.sender; // Get the sender's ID

  // Check if the sender has a custom greeting message
  if (greetingMessages[userId]) {
    const greeting = greetingMessages[userId]; // Get the custom greeting message for this user
    await bot.sendMessage(userId, `👋 ${greeting}`); // Send the custom greeting message to the user
  } else {
    await bot.sendMessage(userId, "👋 Hello! How can I assist you?"); // Send a default greeting message if no custom greeting is set
  }
});
