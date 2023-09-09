<!-- For more information : https://adr.github.io/ -->
<!-- Inspired by https://raw.githubusercontent.com/adr/madr/main/template/adr-template.md -->
# Charts Librairies to use to display data

* date: {2023-09-05}
* status: {accepted}

## Context and Problem Statement

We need to select a librairy to display data in charts. We have to choose between Chart.js, ApexCharts and Recharts. We have to choose the best option for the project.

## Considered Options

* Chart.js
* ApexCharts
* Recharts

<!-- This is an optional element. Feel free to remove. -->
## Pros and Cons of the Options

### Chart.js

[Chart.js] (https://www.chartjs.org/)

* Good, because it's already known by the team.
* Good, because big community and many examples with documentation.
* Neutral, because the team already used it in the past sometimes.

### ApexCharts

[ApexCharts] (https://apexcharts.com/)

* Good, because it's more recent than Chart.js.
* Good, because it provide a React integration from already configured components.
* Neutral, because the team never used it.
* Bad, because without the react integration, the team didn't find it easy to use.

### Recharts

[Recharts] (https://recharts.org/en-US/)

* Good, because it's component based.
* Neutral, because the team never used it.
* Bad, because the documentation is unclear and the team didn't find it easy to use.

## Decision Outcome

Chosen option: "ApexCharts", because
It's not really different from Chart.js but it's more recent and provide more features. ApexCharts also provide a clear and simple React integration to help insert charts inside components.