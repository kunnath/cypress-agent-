# Cypress with Allure Reporting

This project demonstrates how to set up [Cypress](https://www.cypress.io/) for local and Docker-based test execution with [Allure](https://docs.qameta.io/allure/) report integration.

## 📁 Project Structure
```
/cypress-code
  ├── cypress/
  │   ├── e2e/               # test specs
  │   └── support/           # support files (e2e.js, commands)
  ├── Dockerfile            # docker image definition for running tests
  ├── docker-compose.yml    # compose file to mount results and run tests
  ├── package.json          # dependencies & scripts
  └── cypress.config.js     # Cypress configuration with allure plugin
```

## 🛠 Installation (local)
1. Clone/open the workspace.
2. Run `npm install` to pull dependencies.
3. Open Cypress UI: `npm run cypress:open`.
4. Run headless tests and generate Allure report:
   ```bash
   # xvfb-run wrapper is used so that the headless browser has an X server
   npm run test
   # the `cypress:run` script now passes `allureResultsPath=cypress/results` so
   # the plugin writes JSON there, and `allure:generate` reads from the same
   # folder. The report will open automatically after generation.
   # you can also open manually:
   npm run allure:open # to view locally
   ```

## 🐳 Docker

> **Linux CI:** some environments (e.g. a plain `jenkins/jenkins:lts` agent) lack a virtual X server. the `xvfb` package must be installed and commands run via `xvfb-run` – our `Dockerfile` image already includes Xvfb and the `cypress:run` script wraps the command appropriately. the accompanying `Jenkinsfile` also demonstrates how to install the package at runtime.

```bash
# build image (first time or after Dockerfile changes)
docker-compose build

# execute tests in container (results & report mounted back to host)
docker-compose up --exit-code-from cypress --build

# open generated report
allure open cypress/report
```

> **Note:** Allure CLI is installed locally (`allure-commandline`) for report generation. The Docker image also includes it via `npm ci`.

## ✅ Running & Reporting
- Tests are tagged with `cy.allure().step()` to record steps.

### Plugin setup notes
The plugin has two pieces:
1. **support** import – adds the `allure` command and attaches listeners
2. **writer** used in `setupNodeEvents` (never require the full plugin there, as
   it references a browser `Cypress` global and will throw `ReferenceError`)

The sample config already reflects the correct usage.
- Results (`.xml` from junit and `.json` from Allure) go to `cypress/results` (configured via the `allureResultsPath` env variable).
- Reports generated in `cypress/report`.

## 💡 Tips

### Custom Jenkins container
If you are building your own image based on `jenkins/jenkins:lts` you can
pre‑install Xvfb and Node so the agent always has the required dependencies:

```dockerfile
FROM jenkins/jenkins:lts

USER root

# install node, xvfb and other system deps
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && apt-get install -y nodejs xvfb \
        libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
        libxkbcommon0 libxcomposite1 libxrandr2 libxdamage1 \
        libxfixes3 libglib2.0-0 libasound2 libgbm1 libgtk-3-0

# optionally install allure-cli globally
RUN npm install -g allure-commandline

# switch back to jenkins user
USER jenkins

# ensure display variable is set for containers
ENV DISPLAY=:99
```

Alternatively the pipeline shown earlier performs an `apt-get install -y xvfb`
at runtime if the binary is missing.

## 💡 Tips
- Add environment variables or baseUrl overrides via `CYPRESS_` prefixed vars.
- For CI pipelines, persist `cypress/results` and `cypress/report` as artifacts.

---
Enjoy your Cypress & Allure setup! 🎯# cypress-agent-
