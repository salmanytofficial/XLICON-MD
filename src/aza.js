const axios = require('axios');
const { cmd } = require('../lib');

const rapidApiKey = 'bcdeae8e6bmsh3af33e24439971ep106cd9jsnfc28157e482b';

// Create a map to store temporary email addresses and messages
const tempEmails = new Map();

// Function to generate a temporary email address
async function generateTempEmail(userId) {
  const options = {
    method: 'GET',
    url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/new/',
    headers: {
      'X-RapidAPI-Key':'bcdeae8e6bmsh3af33e24439971ep106cd9jsnfc28157e482b',
      'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const email = response.data.email;
    tempEmails.set(userId, { address: email, messages: [] }); // Store the generated email address for the user
    return email;
  } catch (error) {
    console.error('Error generating temporary email:', error);
    throw error;
  }
}

// Function to check the inbox of a temporary email address
async function checkInbox(userId) {
  const email = tempEmails.get(userId).address;

  const options = {
    method: 'GET',
    url: `https://privatix-temp-mail-v1.p.rapidapi.com/request/keepalive/id/${email}/`,
    headers: {
      'X-RapidAPI-Key':'bcdeae8e6bmsh3af33e24439971ep106cd9jsnfc28157e482b',
      'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const messages = response.data;
    tempEmails.get(userId).messages = messages; // Update the messages in the map
    return messages;
  } catch (error) {
    console.error('Error checking temporary email inbox:', error);
    throw error;
  }
}

// Command for generating a temporary email address
cmd({
  pattern: "tempmail",
  desc: "Generate a temporary email address.",
  category: "utility",
}, async (Void, citel) => {
  const userId = citel.sender;

  try {
    // Generate a temporary email address
    const email = await generateTempEmail(userId);
    await citel.reply(`Your temporary email address is: ${email}`);
  } catch (error) {
    console.error('Error generating temporary email:', error);
    await citel.reply('An error occurred while generating the temporary email address.');
  }
});

// Command for checking messages in the temporary email inbox
cmd({
  pattern: "checkmail",
  desc: "Check your temporary email inbox.",
  category: "utility",
}, async (Void, citel) => {
  const userId = citel.sender;

  // Check if the user has a temporary email address
  if (tempEmails.has(userId)) {
    try {
      // Check the inbox of the temporary email address
      const inbox = await checkInbox(userId);

      if (inbox.length > 0) {
        // Display the received messages
        let messageList = "Your temporary email inbox:\n";
        inbox.forEach((message, index) => {
          messageList += `${index + 1}. From: ${message.from_email}, Subject: ${message.subject}\n`;
        });

        await citel.reply(messageList);
      } else {
        await citel.reply("Your temporary email inbox is empty.");
      }
    } catch (error) {
      console.error('Error checking temporary email inbox:', error);
      await citel.reply('An error occurred while checking the temporary email inbox.');
    }
  } else {
    await citel.reply("You don't have a temporary email address. Generate one with '.tempmail' first.");
  }
});
