document.title = 'exelvi@' + navigator.appName;


document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    const terminalElement = document.querySelector('.terminal');
    const appName = document.getElementById('appName');

    let fileSystem = {    }
    appName.textContent = navigator.appName;

    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const input = inputElement.value;
            handleCommand(input);
            inputElement.value = '';
            event.preventDefault();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {

            inputElement.focus();
        }
        if (event.key === 'Enter') {
            event.preventDefault();

            inputElement.focus();
        }
        if (event.key === 'Tab') {
            event.preventDefault();
        }
    }
    );

    const commands = [
        {
            name: 'help', description: 'List all available commands', execute: function (input) {
                const output = document.createElement('div');
                output.textContent = 'Available commands:';
                outputElement.appendChild(output);
                commands.forEach(function (command) {
                    const commandOutput = document.createElement('div');
                    commandOutput.textContent = `${command.name}: ${command.description}`;
                    outputElement.appendChild(commandOutput);
                });
                terminalElement.scrollTop = terminalElement.scrollHeight;
            }
        },
        {
            name: 'clear', description: 'Clear the terminal', execute: function (input) {
                outputElement.innerHTML = '';
            }
        },
        {
            name: 'echo', description: 'Prints text to the terminal', execute: function (input) {
                const output = document.createElement('div');
                output.textContent = input.substring(5);
                outputElement.appendChild(output);
            }
        },
        {
            name: 'date', description: 'Prints the current date and time', execute: function (input) {
                const output = document.createElement('div');
                output.textContent = new Date().toLocaleString();
                outputElement.appendChild(output);
            }
        },
        {
            name: 'color', description: 'Change the color of the terminal', execute: function (input) {
                const output = document.createElement('div');
                //two digits, first = background, second = text, 0-9, A-F
                const colors = input.split(' ')[1].toUpperCase();
                if (!colors) //reset color 
                {
                    terminalElement.style.backgroundColor = 'black';
                    terminalElement.style.color = 'white';
                }
                const colorMap = {
                    "0": "black",
                    "1": "blue",
                    "2": "green",
                    "3": "cyan",
                    "4": "red",
                    "5": "magenta",
                    "6": "yellow",
                    "7": "white",
                    "8": "gray",
                    "9": "lightblue",
                    "A": "lightgreen",
                    "B": "lightcyan",
                    "C": "lightred",
                    "D": "lightmagenta",
                    "E": "lightyellow",
                    "F": "brightwhite"
                };
                const backgroundColor = colorMap[colors[0]];
                const textColor = colorMap[colors[1]];
                terminalElement.style.backgroundColor = backgroundColor;
                terminalElement.style.color = textColor;
                outputElement.appendChild(output);



            }
        }



    ]
    function handleCommand(input) {
        const output = document.createElement('div');
        output.textContent = `exelvi@${navigator.appName}:~$ ${input}`;
        outputElement.appendChild(output);

        const commandOutput = document.createElement('div');

        const command = commands.find(function (command) {
            return input.split(' ')[0] === command.name;
        });

        if (command) {
            command.execute(input);
            commandOutput.textContent = "\n";
        }
        else {
            commandOutput.textContent = `bash: ${input}: command not found`;
        }


        outputElement.appendChild(commandOutput);
        terminalElement.scrollTop = terminalElement.scrollHeight;
    }
});
