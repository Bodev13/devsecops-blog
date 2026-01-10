## Automatic Startup of OWASP Juice Shop (Kali Linux)

To streamline the pentesting workflow, OWASP Juice Shop was configured to start automatically when opening a terminal in Kali Linux. This allows immediate testing without manually starting the application each time.

### Prerequisites

- Kali Linux with Zsh as default shell
- Node.js and npm installed
- OWASP Juice Shop cloned locally

### Setup Steps

1. Install Node.js and npm (if not already installed):
   ```bash
   sudo apt update
   sudo apt install nodejs npm

2. Navigate to the Juice Shop directory and install dependencies

```bash 
cd ~/juice-shop
npm install
```
3. Create a startup script

```bash
nano ~/start-juice-shop.sh
```
4. Add the following content to the script

```bash
#!/bin/bash
cd ~/juice-shop/
npm start
```
5. Make the script executable

```bash
chmod +x ~/start-juice-shop.sh
```
6. Edit the Zsh configuration file

```bash
nano ~/.zshrc
```
7. Add the following line at the end of the file

```bash
~/start-juice-shop.sh
```
8. Apply changes

```bash
source ~/.zshrc
```
### Disclaimer
This setup is intended for local testing environments only and should not be used in production systems.






