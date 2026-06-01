# ⏲️ CLI Countdown Timer

A lightweight Node.js command-line interface (CLI) countdown timer built with TypeScript. It allows users to set a specific duration in seconds and displays a real-time, formatted countdown.

---

## ✨ Features

* **Real-time Countdown:** Displays time ticking down second-by-second in `MM:SS` format.
* **Input Validation:** Restricts input to valid numbers only and caps the entry at a maximum of 60 seconds.
* **Graceful Exit:** Automatically stops the timer and alerts the user with an expiration message (`Timer has expired ⌛`) upon completion.
* **User-Friendly Prompts:** Colorful terminal feedback built using `inquirer` and `chalk`.

---

## 🛠️ Tech Stack

* **Language:** TypeScript / Node.js
* **Dependencies:** `inquirer` (User input), `chalk` (Terminal colors), `date-fns` (Time utility functions)

---

## 🚀 How to Run & Use

1. Clone or download this repository.
2. Open your terminal in the project folder and install the packages:
   ```bash
   npm install

3. Run the timer using the following command:

```bash
npx tsc && node index.js
