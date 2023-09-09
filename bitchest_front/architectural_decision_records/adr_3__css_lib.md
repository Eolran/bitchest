<!-- For more information : https://adr.github.io/ -->
<!-- Inspired by https://raw.githubusercontent.com/adr/madr/main/template/adr-template.md -->
# CSS Librairies and Framework to use and quick-styling the project.

* date: {2023-09-09}
* status: {accepted}

## Context and Problem Statement

We need a quick solution to avoid custom styling and focus on the project. We have to choose between React-Bootstrap, Material-UI and Tailwind CSS. We have to choose the best option for the project.

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Quick and easy to use.
* Already known by the team.
* Can't waste time to learn something new.

## Considered Options

* React-Bootstrap
* Material-UI
* Tailwind CSS

<!-- This is an optional element. Feel free to remove. -->
## Pros and Cons of the Options

### React-Bootstrap

<!-- This is an optional element. Feel free to remove. -->
[React-Bootstrap] (https://react-bootstrap.github.io/)

* Good, because it's already known by the team.
* Good, because quick to set up and easy to use.
* Neutral, because the team know vanilla Bootstrap.
* Bad, because not as flexible as the other options.

### Material-UI

[Material-UI] (https://material-ui.com/)

* Good, because many components and icons are already available.
* Neutral, because the team already used it ONCE in another project.

### Tailwind CSS

[Tailwind CSS] (https://tailwindcss.com/)

* Good, because most flexible option.
* Neutral, because alike Bootstrap, design is set by classes and quick to write.
* Bad, because the team never used it before and don't know how to setup it properly.

## Decision Outcome

Chosen option: "React-Bootstrap", because
It's already known by the team and it's easy to use. The team is already familiar with the vanilla Bootstrap and know some of the librairies that can be used with it.