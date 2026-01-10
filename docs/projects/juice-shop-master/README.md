# Juice Shop Master

This repository contains documentation for selected OWASP Juice Shop challenges.  
The purpose of this project is to practice basic web application security testing techniques in a local and controlled environment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Challenges](#challenges)
- [Disclaimer](#disclaimer)

## Prerequisites

- Kali Linux
- Mozilla Firefox
- Node.js and npm installed
- OWASP Juice Shop cloned locally

## Quickstart

1. Navigate to the project directory

   ```bash
   cd juice-shop-master
   ```
2. Make sure OWASP Juice Shop is running
3. Go to Mozilla and enter

```bash
http://127.0.0.1:300
```
## Usage

1. Install required packages

```bash
sudo apt update
sudo apt install nodejs npm
```

2. Clone the OWASP Juice Shop repository

```bash
git clone https://github.com/juice-shop/juice-shop.git
cd juice-shop
```

3. Start OWAS Juice Shop

```bash
npm start
```

4. Open the following URL in your browser

```bash
http://127.0.0.1:3000
```

## Challenges

### Find Restricted Document
[Find Restricted Document](challenge-find-restricted-document/)

### Find Score Board
[Find Score Board](challenge-find-score-board/)


## Disclaimer
The vulnerabilities and techniques documented in this repository are demonstrated strictly for educational purposes

All attacks were performed against an intentionally vulnerable application in a local test environment

Do not attempt to use these techniques on real systems without explicit authorization

