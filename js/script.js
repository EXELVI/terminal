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
                exelvi: {
                    documents: { "troll.txt": "cat: troll.txt: Path not found" }
                }
            },
            root: {

            }
        }
    };

    let settings = {
        users: {
            "exelvi": {
                "password": "password", //easy :)
                "home": "/home/exelvi",
                "permissions": {
                    "/home/exelvi": true,
                }

            },
            "root": {
                "password": "ifyoucanreadthisyouareahacker",
                "home": "/root",
                "permissions": true
            }
        },
        currentUser: "exelvi",


    }

    function getPermissions(path, user) {
        return true //to implement

    }

    let bashHistory = [];

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
        createFile: function (path, content = '') {
            const parentDir = navigateToPath(path, true);
            parentDir[getFileName(path)] = content;
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
            //if is focused on input
            if (document.activeElement != inputElement) {
                const output = document.createElement('div');
                output.textContent = '^C';
                outputElement.appendChild(output);
                terminalElement.scrollTop = terminalElement.scrollHeight;
                inputElement.value = '';
            }
        }
    });

    const commands = [
        {
            name: 'help',
            description: 'List all available commands',
            root: false,
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
            root: false,
            description: 'Clear the terminal',
            execute: function () {
                outputElement.innerHTML = '';
            }
        },
        {
            name: 'echo',
            root: false,
            description: 'Prints text to the terminal',
            execute: function (input) {
                const output = document.createElement('div');
                output.textContent = input.substring(5);
                outputElement.appendChild(output);
            }
        },
        {
            name: 'date',
            root: false,
            description: 'Prints the current date and time',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = new Date().toLocaleString();
                outputElement.appendChild(output);
            }
        },
        {
            name: 'color',
            root: false,
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
            root: false,
            description: 'Create a new file',
            execute: function (input) {
                if (getPermissions(currentDir, settings.currentUser)) {
                    const fileName = input.split(' ')[1];
                    if (fileName) {
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`, fileName == "grass.txt" ? "Time to go outside :)" : "");
                        const output = document.createElement('div');
                        outputElement.appendChild(output);
                    } else {
                        const output = document.createElement('div');
                        output.textContent = 'touch: missing file operand';
                        outputElement.appendChild(output);
                    }
                } else {
                    const output = document.createElement('div');
                    output.textContent = 'bash: touch: Permission denied';
                    outputElement.appendChild(output);
                }
            }
        },
        {
            name: 'rm',
            root: false,
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
            root: false,
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
            root: false,
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
            root: false,
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
            root: false,
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
            root: false,
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
            root: false,
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
            root: false,
            description: 'Print current directory path',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = currentDir;
                outputElement.appendChild(output);
            }
        },
        {
            name: 'whoami',
            root: false,
            description: 'Print the current user',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = settings.currentUser;
                outputElement.appendChild(output);
            }
            ,
        }, {
            name: 'su',
            root: false,
            description: 'Change user',
            execute: function (input) {
                const user = input.split(' ')[1];

                const settingsUser = settings.users[user];

                if (settingsUser) {
                    if (settingsUser.password == "") {
                        settings.currentUser = user;
                        prompt.textContent =   settings.currentUser +'@' + browserName + ':' + currentDir + '$';
                        document.title = settings.currentUser + '@' + browserName;   
                    } else {
                       //to implement
                    }
                }
            }
        },
        {
            name: 'curl', 
            root: false,
            description: 'Fetch the content from a URL',
            execute: function (input) {
                var url = input.split(' ')[1];
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                }
        
                //ajax
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                //curl/8.7.1 headers
                xhr.setRequestHeader('User-Agent', 'curl/8.7.1');
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        const output = document.createElement('div');
                        output.textContent = xhr.responseText;
                        outputElement.appendChild(output);
                    }
                }
            }
        }
    ];

    function handleCommand(input) {
        const output = document.createElement('div');
        output.textContent = `${settings.currentUser}@${browserName}:${currentDir}$ ${input}`;
        prompt.textContent =   settings.currentUser +'@' + browserName + ':' + currentDir + '$';
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
