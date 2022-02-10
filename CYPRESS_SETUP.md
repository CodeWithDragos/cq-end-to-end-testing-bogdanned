### How to setup `Cypress`

### 1. Install Cypress:
```bash
npm install cypress --save-dev
```
###### :warning: The install should take long, as `Cypress` contains an internal web browser and is quite heavy to download.


### 2. Run Cypress
In [package.json](/package.json) add:
```diff
{
  "scripts": {
+   "cypress:open": "cypress open"
  }
}
```
And in your terminal run: 
```bash
npm run cypress:open
```

Cypress should open with some example tests in the [cypress/integration](/cypress/integration) folder. Feel free to delete those and write your own.