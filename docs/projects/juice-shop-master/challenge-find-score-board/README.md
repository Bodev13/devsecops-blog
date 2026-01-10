# find-score-board

## Challenge Name

Find the Score Board

## Challenge Description

The objective of this challenge is to discover the hidden Score Board page of the OWASP Juice Shop application by manually accessing a known but undocumented URL endpoint using a web browser

## Recording of the Challenge

https://go.screenpal.com/watch/cOV6rinrwxN

## Vulnerability Category

Information Disclosure

## Tools Used

- Kali Linux  
- Mozilla Firefox  

## Step-by-Step Solution

1. Started OWASP Juice Shop locally on the Kali Linux VM
2. Opened Mozilla Firefox
3. Entered the base URL `http://127.0.0.1:3000` in the browser
4. Manually appended `/score-board` to the URL
5. Successfully accessed the hidden Score Board page
6. Viewed the list of all challenges and their completion status

## Result

The Score Board, which is not linked anywhere in the application UI, was accessible directly via URL without authentication or authorization

## Security Impact

Exposing the Score Board allows attackers to gain insight into the internal challenge structure and progress of the application. In real-world scenarios, similar information disclosure could reveal sensitive internal data, application logic, security weaknesses, or user activity, which may aid further attacks

## Mitigation

- Restrict access to administrative or internal pages such as the Score Board
- Implement proper authentication and authorization checks
- Hide sensitive endpoints behind role-based access control
- Avoid exposing internal application status or debugging pages in production environments

## Disclaimer

This challenge was solved in a controlled lab environment and is documented strictly for educational purposes
