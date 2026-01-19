# Find the Score Board

## Challenge Description

The objective of this challenge is to discover the hidden Score Board page of the OWASP Juice Shop application by manually accessing a known but undocumented URL endpoint using a web browser.

---

## Disclaimer

This challenge was solved in a controlled lab environment and is documented strictly for educational purposes.
The OWASP Juice Shop application must be started locally before performing this challenge (see Quickstart section of the main repository).  

The interaction is performed entirely through a web browser

The application can be started using

```bash
npm start
```
---

## Table of Contents

- [Disclaimer](#disclaimer)
- [Challenge Name](#challenge-name)
- [Challenge Description](#challenge-description)
- [Usage](#usage)
- [Recording of the Challenge](#recording-of-the-challenge)
- [Vulnerability Category](#vulnerability-category)
- [Tools Used](#tools-used)
- [Step-by-Step Solution](#step-by-step-solution)
- [Result](#result)
- [Security Impact](#security-impact)
- [Mitigation](#mitigation)


---

## Challenge Name

Find the Score Board

---

## Usage

1. Start the OWASP Juice Shop application locally.
2. Open a web browser.
3. Navigate to `http://127.0.0.1:3000`.
4. Ensure the application is running and accessible.
5. Follow the steps described in the **Step-by-Step Solution** section to reproduce the challenge.

---

## Recording of the Challenge

https://go.screenpal.com/watch/cOV6rinrwxN

---

## Vulnerability Category

Information Disclosure

This challenge has a difficulty rating of 1 star (1/6).

---

## Tools Used

- Kali Linux  
- Mozilla Firefox  

---

## Step-by-Step Solution

1. Open the OWASP Juice Shop application in a web browser and ensure the main page is displayed

   ![OWASP Juice Shop main page with sidebar menu](screenshots/main.png)

2. Open the sidebar menu and select **Help getting started** to review available hints and guidance provided by the application

   ![Help getting started menu entry](screenshots/helpStart.png)

3. Review the displayed hints and challenges

   Within the help section, references to a **Score Board** were identified, indicating the existence of an internal page that provides an overview of challenges and progress

   ![Score Board reference in help section](screenshots/helpSB1.png)
   ![Additional Score Board reference](screenshots/helpSB2.png)

4. To verify whether the Score Board is referenced elsewhere in the application, the browser’s developer tools were opened and the HTML content was searched for the term **Score Board**

   The search returned only references from the help section, suggesting that the Score Board page is not directly linked within the application interface

   ![Search for Score Board in developer tools](screenshots/devTool.png)

5. Based on common web application patterns, potential URL paths were tested manually by appending variations such as `/score`, `/board`, and `/scoreboard` to the base URL

   These attempts did not return the expected page

   ![Attempt to access /score](screenshots/score.png)
   ![Attempt to access /board](screenshots/board.png)
   ![Attempt to access /scoreboard](screenshots/scoreboard.png)

6. Further analysis of existing application routes revealed that multi-word menu items are often represented using hyphenated paths (e.g. **Photo Wall** → `/photo-wall`)

   Based on this observation, the URL `/score-board` was tested

   ![Successful access to score-board page](screenshots/bingo.png)

7. The Score Board page was successfully accessed without authentication or authorization.  
   The page exposes a complete overview of challenges and their completion status, confirming that the endpoint is publicly accessible despite not being linked within the application

---

## Result

The Score Board page, which is not linked anywhere within the application interface, was accessible directly via its URL without requiring authentication or authorization.

By manually accessing the undocumented endpoint `/score-board`, it was possible to view an internal overview of all challenges and their completion status, confirming that access to this internal page is not properly restricted

---

## Security Impact

Exposing the Score Board page allows unauthorized users to gain detailed insight into the internal structure and state of the application

In a real-world scenario, such an internal overview page could expose sensitive information, including:

- internal application logic and workflows
- the structure and naming of internal endpoints
- feature flags or functionality not intended for public users
- operational or debugging information

In the worst-case scenario, an attacker could leverage this information to:

- identify high-value attack targets and vulnerable components
- plan targeted attacks based on exposed application logic
- gain insights into security mechanisms and bypass strategies
- chain this information with other vulnerabilities to escalate attacks

Additionally, if such an internal page were to expose data such as user statistics, administrative information, credentials, API keys, or personal user data, this could result in:

- violations of data protection regulations (e.g. GDPR)
- legal and compliance issues
- financial losses
- and significant reputational damage to the organization

From a business perspective, exposing internal or administrative pages without access control represents a high-risk security weakness, as it lowers the barrier for attackers and increases the overall attack surface of the application

---

## Mitigation

- Enforce authentication for access to internal endpoints  
  All internal pages, including the Score Board, must require an authenticated user session.  
  Unauthenticated requests to such endpoints should be rejected by default on the server side

- Implement role-based authorization for administrative functionality  
  Access to internal or administrative pages must be restricted based on user roles.  
  Endpoints such as the Score Board should only be accessible to users with explicit administrative privileges

- Remove or disable internal overview pages in production environments  
  Internal status, overview, or debugging pages should not be exposed in production deployments unless strictly required.  
  If such pages are necessary, they must be protected by strong access controls and auditing mechanisms

- Validate access control decisions exclusively on the server side  
  Authorization checks must be enforced on the backend and must not rely on client-side logic or UI restrictions.  
  Direct URL access to protected endpoints should always be validated against the user’s session and permissions

- Reduce the attack surface through defense-in-depth measures  
  Additional controls such as reverse proxies, firewall rules, or endpoint allowlists can be used to further restrict access to sensitive functionality
