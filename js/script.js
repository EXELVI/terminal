document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    const terminalElement = document.querySelector('.terminal');
    const prompt = document.getElementById('prompt');


    let browserInfo = navigator.userAgent;
    let browserName;

    if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
        browserName = 'opera';
    } else if (browserInfo.includes('Edg')) {
        browserName = 'edge';
    } else if (browserInfo.includes('Chrome')) {
        browserName = 'chrome';
    } else if (browserInfo.includes('Safari')) {
        browserName = 'safari';
    } else if (browserInfo.includes('Firefox')) {
        browserName = 'firefox'
    } else {
        browserName = 'browser'
    }

    document.title = 'exelvi@' + browserName;

    let fileSystem = {
        '/': {
            home: {
                user: {},

                documents: { "troll.txt": "cat: troll.txt: Path not found" }
            },
        }
    };

    let currentDir = '/';
    prompt.textContent = 'exelvi@' + browserName + ':' + currentDir + '$';
    const fileSystemFunctions = {
        changeFileContent: function (path, content) {
            const file = navigateToPath(path);
            if (typeof file === 'string') {
                const parentDir = navigateToPath(path, true);
                parentDir[getFileName(path)] = content;
            } else {
                return false
            }
        },
        remove: function (path) {
            const parentDir = navigateToPath(path, true);
            delete parentDir[getFileName(path)];
        },
        createFile: function (path) {
            const parentDir = navigateToPath(path, true);
            parentDir[getFileName(path)] = '';
        },
        createDirectory: function (path) {
            const parentDir = navigateToPath(path, true);
            parentDir[getFileName(path)] = {};
        },
        readFileContent: function (path) {
            const file = navigateToPath(path);
            if (typeof file === 'string') {
                return file;
            } else {
                return false;
            }
        }
    };

    function navigateToPath(path, parent = false) {
        const parts = path.split('/').filter(part => part.length > 0);
        let current = fileSystem['/'];
        for (let i = 0; i < (parent ? parts.length - 1 : parts.length); i++) {
            current = current[parts[i]];
            if (current === undefined) {
                throw new Error('Path not found');
            }
        }
        return current;
    }

    function getFileName(path) {
        const parts = path.split('/');
        return parts[parts.length - 1];
    }

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
        //IF ctrl+c is pressed
        if (event.ctrlKey && event.key === 'c') {
      
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
                const colors = input.split(' ')[1]?.toUpperCase();
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
                    fileSystemFunctions.createFile(`${currentDir}/${fileName}`);
                    const output = document.createElement('div');
                    outputElement.appendChild(output);
                } else {
                    const output = document.createElement('div');
                    output.textContent = 'touch: missing file operand';
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'rm',
            description: 'Delete a file or directory',
            execute: function (input) {
                const path = input.split(' ')[1];
                try {
                    fileSystemFunctions.remove(`${currentDir}/${path}`);
                    const output = document.createElement('div');
                    outputElement.appendChild(output);
                } catch (error) {
                    const output = document.createElement('div');
                    output.textContent = `rm: ${path}: ${error.message}`;
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'cat',
            description: 'Display the content of a file',
            execute: function (input) {
                const fileName = input.split(' ')[1];
                try {
                    const content = fileSystemFunctions.readFileContent(`${currentDir}/${fileName}`);
                    const output = document.createElement('div');
                    output.textContent = content;
                    outputElement.appendChild(output);
                } catch (error) {
                    const output = document.createElement('div');
                    output.textContent = `cat: ${fileName}: ${error.message}`;
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'echo',
            description: 'Append text to a file',
            execute: function (input) {
                const parts = input.split(' ');
                const fileName = parts[parts.length - 1];
                const text = input.substring(5, input.indexOf('>')).trim();
                try {
                    const currentContent = fileSystemFunctions.readFileContent(`${currentDir}/${fileName}`);
                    fileSystemFunctions.changeFileContent(`${currentDir}/${fileName}`, currentContent + text);
                    const output = document.createElement('div');
                    output.textContent = `Appended to ${fileName}: ${text}`;
                    outputElement.appendChild(output);
                } catch (error) {
                    if (error.message === 'Path not found') {
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`);
                        fileSystemFunctions.changeFileContent(`${currentDir}/${fileName}`, text);
                        const output = document.createElement('div');
                        output.textContent = `Created and appended to ${fileName}: ${text}`;
                        outputElement.appendChild(output);
                    } else {
                        const output = document.createElement('div');
                        output.textContent = `echo: ${fileName}: ${error.message}`;
                        outputElement.appendChild(output);
                    }
                }
            }
        },
        {
            name: 'ls',
            description: 'List files in the current directory',
            execute: function () {
                const currentDirContent = navigateToPath(currentDir);
                const output = document.createElement('div');
                output.textContent = Object.keys(currentDirContent).join(' ');
                outputElement.appendChild(output);
            }
        },
        {
            name: 'mkdir',
            description: 'Create a new directory',
            execute: function (input) {
                const directoryName = input.split(' ')[1];
                if (directoryName) {
                    fileSystemFunctions.createDirectory(`${currentDir}/${directoryName}`);
                    const output = document.createElement('div');
                    outputElement.appendChild(output);
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
            description: 'Change the current directory',
            execute: function (input) {
                const directoryName = input.split(' ')[1];
                try {
                    if (directoryName === '..') {
                        currentDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';
                        prompt.textContent = 'exelvi@' + browserName + ':' + currentDir + '$';
                    } else {
                        const newDir = `${currentDir}/${directoryName}`.replace('//', '/');
                        const target = navigateToPath(newDir);
                        if (typeof target === 'object') {
                            currentDir = newDir;
                            prompt.textContent = 'exelvi@' + browserName + ':' + currentDir + '$';
                        } else {
                            throw new Error('No such file or directory');
                        }
                    }
                } catch (error) {
                    const output = document.createElement('div');
                    console.log(error)
                    output.textContent = `cd: ${directoryName}: No such file or directory`;
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
        output.textContent = `exelvi@${browserName}:${currentDir}$ ${input}`;
        prompt.textContent = 'exelvi@' + browserName + ':' + currentDir + '$';
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
