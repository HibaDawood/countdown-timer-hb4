# ⏲️ CLI Countdown Timer
[![npm version](https://img.shields.io/npm/v/countdown-timer-hb4.svg?style=flat-square)](https://www.npmjs.com/package/countdown-timer-hb4)

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

### 🚀 How to Run & Use

Run this application directly in your terminal using `npx` (No installation required):

```bash
npx countdown-timer-hb4
