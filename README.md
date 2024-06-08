# bpm-airdrop-bot

This is a bot to automate the completion of missions on the BPM Rewards platform.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dante4rt/bpm-airdrop-bot.git
   cd bpm-airdrop-bot
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create an `accounts.json` file in the root directory of the project and add your JWT accounts as an array of bearer tokens:

   ```json
   [
     "Bearer your_first_jwt_token",
     "Bearer your_second_jwt_token"
   ]
   ```

4. Create a `tokens.json` file in the root directory if you need to store refresh tokens or other persistent data.

## How to Get Your Bearer Token

1. Open your browser and navigate to the BPM Rewards login page.
2. Log in with your account credentials.
3. Open the developer tools (right-click on the page and select "Inspect" or press `Ctrl+Shift+I`).
4. Go to the "Network" tab in the developer tools.
5. Refresh the page and look for a network request to the BPM Rewards API (it should be something like `/api/User/get-users-missions`).
6. Click on the request and go to the "Headers" section.
7. Find the "Authorization" header and copy the bearer token value.
8. Paste the token value into the `accounts.json` file as shown above.

## Usage

1. Run the bot:

   ```bash
   node index.js
   ```

   The bot will start, display the header, and begin processing your missions.