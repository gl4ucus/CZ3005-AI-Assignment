export default `
% Setting up of list methods for appending
append([], Y, Y).
append([H|X], Y, [H|Z]) :- append(X, Y, Z).

:- dynamic(chosen_meals/1).
:- dynamic(vegan_meal/1).
:- dynamic(veggie_meal/1).

% Facts to check conditions
healthy_meal(healthy).
value_meal(value).
vegan_meal(vegan).
veggie_meal(veggie).

% Possible choice of options for each categorie
meals([healthy, normal, value, vegan, veggie]).
breads([wheat, honey_oat, italian, hearty_italian, flatbread]).
meats([chicken, beef, ham, bacon, salmon, tuna, turkey]).
veggies([cucumber, green_peppers, lettuce, red_onions, tomatoes]).
fatty_sauces([chipotle, bbq, ranch, sweet_chilli, mayo]).
non_fatty_sauces([honey_mustard, sweet_onion]).
cheese_topups([american, monterey_jack, cheddar]).
non_cheese_topups([avocado, egg_mayo]).
sides([chips, cookies, hashbrowns, drinks]).

% Return a list of possible meals
ask_meals(X) :- meals(X).

% Return a list of possible breads
ask_breads(X) :- breads(X).

% Return a list of possible meats
% Vegan and Veggie meals do not have meat options, return empty list [].
ask_meats(X) :- findall(X, (chosen_meals(Y), \\+vegan_meal(Y), \\+veggie_meal(Y), meats(X)), X).

% Return a list of possible veggies
ask_veggies(X) :- veggies(X).

% Return a list of possible sauces
% Healthy meals do not have fatty sauces, return a list containing only non_fatty_sauces
ask_sauces(X) :- findall(X, (chosen_meals(Y), healthy_meal(Y) -> non_fatty_sauces(X);
                 fatty_sauces(L1), non_fatty_sauces(L2), append(L1, L2, X)), X).

% Return a list of possible top-ups
% Value meal does not have topup, returns an empty list
% Vegan meal does not have cheese topup, return a list containing non_cheese_topups
ask_topups(X) :- findall(X, (chosen_meals(Y), \\+value_meal(Y) -> (vegan_meal(Y) -> non_cheese_topups(X);
                 cheese_topups(L1), non_cheese_topups(L2), append(L1, L2, X))), X).

% Return a list of possible sides
ask_sides(X) :- sides(X).

% Return a list containing corresponding user choice
% using built-in method findall(X, pred(X), List) - Find possible values for predicate and add to the List
show_meals(Meals) :- findall(X, chosen_meals(X), Meals).
show_breads(Breads) :- findall(X, chosen_breads(X), Breads).
show_meats(Meats) :- findall(X, chosen_meats(X), Meats).
show_veggies(Veggies) :- findall(X, chosen_veggies(X), Veggies).
show_sauces(Sauces) :- findall(X, chosen_sauces(X), Sauces).
show_topups(TopUps) :- findall(X, chosen_topups(X), TopUps).
show_sides(Sides) :- findall(X, chosen_sides(X), Sides).
`
