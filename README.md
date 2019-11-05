# AI Documentation

# CZ3005 Artificial Intelligence Assignment

# [Click Here To Go To Live DEMO page](http://okkarmin.github.io/CZ3005-AI-Assignment)

## Subway Sandwich Interactor

The prolog script offers different meal options, sandwich options, meat options, salad options, sauce options, top-up options, sides options etc. to create a customized list of person’s choice. The options should be intelligently selected based on previous choices. For example, if the person chose a veggie meal, meat options should not be offered. If a person chose healthy meal, fatty sauces should not be offered. If a person chose vegan meal, cheese top-up should not be offered. If a person chose value meal, no top-up should be offered.

## Demonstration Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/2c4dB52ehAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

## System Architecture

![](client_server_architecture.jpg)

'Fat Client' architecture.

When (1)User access the (2)Web Server through browser, (2) responds to (1) with index.html

Web Server is hosted on [github pages](https://pages.github.com).

[Tau Prolog](http://tau-prolog.org) for prolog logic querying/asserting with JavaScript.

## Directory Structure

![](directory_structure.png)

- \_config.yml → configuration file for github pages
- index.html → file served to user's browser when requested
- index.js → contians logic/functions to handle GUI interactions
- styles.css → styling of GUI components seen on index.html are defined
- subway-prolog.js → prolog logic in JavaScript file format. Tau Prolog require the prolog logic to be in JavaScript file format.
- tau-prolog.js → an open source prolog interpreter in JavaScript

## Prolog Logic

![](prolog_logic.png)

- Vegan and Veggies meals do not have meat options
- Healthy meals do not have fatty sauces
- Value meals do not have topup
- Vegan meals do not have cheese topup
