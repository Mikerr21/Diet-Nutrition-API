
This following repository contains some Material-UI design mixed with the axios framework to fetch data from the ninjas-calories API.
Website contains an input that takes the value and send it to the API query whenever someone presses the button.
The input value then is put into the API to search for the nutrients of that given food. ( e.g apple, egg, chicken breast) which will be displayed in a table of rows and cells using material-UI.

"proxy":"localhost:3000" in package.json helps to not block access and avoid getting CORS problems.
in App.js you can see X-API-KEY. There you'll have to enter your own API-Key given from ninjas-calories websites ( https://api-ninjas.com/api ). 
I cannot display my own X-API-Key due to their rules.
