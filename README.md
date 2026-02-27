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
   npm run test
   # this executes cypress:run then generates the report
   npm run allure:open # to view locally
   ```

## 🐳 Docker
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
- Results (`.xml` and `.json`) go to `cypress/results`.
- Reports generated in `cypress/report`.

## 💡 Tips
- Add environment variables or baseUrl overrides via `CYPRESS_` prefixed vars.
- For CI pipelines, persist `cypress/results` and `cypress/report` as artifacts.

---
Enjoy your Cypress & Allure setup! 🎯# cypress-agent-
