document.title = 'exelvi@' + navigator.appName;

document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    const terminalElement = document.querySelector('.terminal');
    const prompt = document.getElementById('prompt');
    prompt.textContent = 'exelvi@' + navigator.appName + ':~$';
    
    let fileSystem = {
        '/': {  // Root directory
            home: {
                user: {},  
                
            documents: {}  
            },
        }
    };

    let currentDir = '/';

    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const input = inputElement.value;
            handleCommand(input);
            inputElement.value = '';
            event.preventDefault();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.key === 'Enter' || event.key === 'Tab') {
            event.preventDefault();
            inputElement.focus();
        }
    });

    const commands = [
        {
            name: 'help',
            description: 'List all available commands',
            execute: function () {
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
            name: 'clear',
            description: 'Clear the terminal',
            execute: function () {
                outputElement.innerHTML = '';
            }
        },
        {
            name: 'echo',
            description: 'Prints text to the terminal',
            execute: function (input) {
                const output = document.createElement('div');
                output.textContent = input.substring(5);
                outputElement.appendChild(output);
            }
        },
        {
            name: 'date',
            description: 'Prints the current date and time',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = new Date().toLocaleString();
                outputElement.appendChild(output);
            }
        },
        {
            name: 'color',
            description: 'Change the color of the terminal',
            execute: function (input) {
                const colors = input.split(' ')[1].toUpperCase();
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
                if (!colors) {
                    terminalElement.style.backgroundColor = 'black';
                    terminalElement.style.color = 'white';
                } else {
                    const backgroundColor = colorMap[colors[0]];
                    const textColor = colorMap[colors[1]];
                    terminalElement.style.backgroundColor = backgroundColor;
                    terminalElement.style.color = textColor;
                }
            }
        },
        {
            name: 'touch',
            description: 'Create a new file',
            execute: function (input) {
                const fileName = input.split(' ')[1];
                if (fileName) {
                    fileSystem[currentDir][fileName] = '';
                } else {
                    const output = document.createElement('div');
                    output.textContent = 'touch: missing file operand';
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'rm',
            description: 'Delete a file',
            execute: function (input) {
                const fileName = input.split(' ')[1];
                if (fileName && fileSystem[currentDir][fileName] !== undefined) {
                    delete fileSystem[currentDir][fileName];
                } else {
                    const output = document.createElement('div');
                    output.textContent = `rm: ${fileName}: No such file`;
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'cat',
            description: 'Display the content of a file',
            execute: function (input) {
                const fileName = input.split(' ')[1];
                if (fileName && fileSystem[currentDir][fileName] !== undefined) {
                    const output = document.createElement('div');
                    output.textContent = fileSystem[currentDir][fileName];
                    outputElement.appendChild(output);
                } else {
                    const output = document.createElement('div');
                    output.textContent = `cat: ${fileName}: No such file`;
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'echo',
            description: 'Append text to a file',
            execute: function (input) {
                const parts = input.split(' ');
                const textIndex = input.indexOf('>') + 1;
                const fileName = parts[parts.length - 1];
                const text = input.substring(5, textIndex - 1).trim();
                if (fileName && text) {
                    if (fileSystem[currentDir][fileName] === undefined) {
                        fileSystem[currentDir][fileName] = '';
                    }
                    fileSystem[currentDir][fileName] += text;
                    const output = document.createElement('div');
                    output.textContent = `Appended to ${fileName}: ${text}`;
                    outputElement.appendChild(output);
                } else {
                    const output = document.createElement('div');
                    output.textContent = 'Usage: echo [text] > [filename]';
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'ls',
            description: 'List files and directories in the current directory',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = Object.keys(fileSystem[currentDir]).join(' ');
                outputElement.appendChild(output);
            }
        },
        {
            name: 'mkdir',
            description: 'Create a new directory',
            execute: function (input) {
                const directoryName = input.split(' ')[1];
                if (directoryName) {
                    fileSystem[currentDir][directoryName] = {};
                } else {
                    const output = document.createElement('div');
                    output.textContent = 'mkdir: missing operand';
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'rmdir',
            description: 'Remove an empty directory',
            execute: function (input) {
                const directoryName = input.split(' ')[1];
                if (directoryName && fileSystem[currentDir][directoryName] !== undefined && Object.keys(fileSystem[currentDir][directoryName]).length === 0) {
                    delete fileSystem[currentDir][directoryName];
                } else {
                    const output = document.createElement('div');
                    output.textContent = `rmdir: ${directoryName}: Directory not empty or does not exist`;
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'cd',
            description: 'Change directory',
            execute: function (input) {
                const directoryName = input.split(' ')[1];
                if (directoryName && fileSystem[currentDir][directoryName] !== undefined) {
                    currentDir += '/' + directoryName;
                } else {
                    const output = document.createElement('div');
                    output.textContent = `cd: ${directoryName}: No such directory`;
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'pwd',
            description: 'Print current directory path',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = currentDir;
                outputElement.appendChild(output);
            }
        }
    ];

    function handleCommand(input) {
        const output = document.createElement('div');
        output.textContent = `exelvi@${navigator.appName}:${currentDir}$ ${input}`;
        outputElement.appendChild(output);

        const command = commands.find(function (command) {
            return input.split(' ')[0] === command.name;
        });

        if (command) {
            command.execute(input);
        } else {
            const commandOutput = document.createElement('div');
            commandOutput.textContent = `bash: ${input}: command not found`;
            outputElement.appendChild(commandOutput);
        }

        terminalElement.scrollTop = terminalElement.scrollHeight;
    }
});
