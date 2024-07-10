const ascii = { // ASCII from neofetch: https://github.com/dylanaraps/neofetch
    "chrome": (c1, c2, c3, c4, c5, browserName, user, dividerBar, uptime) => `
<span>${c2}            .,:loool:,.                 ${c1}${user}@${browserName}
${c2}        .,coooooooooooooc,.             <span style='color: #ffffff'>${dividerBar}
${c2}     .,lllllllllllllllllllll,.          ${c2}OS: <span style='color: #ffffff'>Browser
${c2}    ;ccccccccccccccccccccccccc;         ${c2}Host: <span style='color: #ffffff'>${navigator.vendor}
${c1}  '${c2}ccccccccccccccccccccccccccccc.       ${c2}Kernel: <span style='color: #ffffff'>${window.navigator.userAgent.split(" ")[0]}
${c1} ,oo${c2}c::::::::okO${c5}000${c3}0OOkkkkkkkkkkk:      ${c2}Uptime: <span style='color: #ffffff'>${uptime}
${c1}.ooool${c2};;;;:x${c5}K0${c4}kxxxxxk${c5}0X${c3}K0000000000.     ${c2}Packages: <span style='color: #ffffff'>0
${c1}:oooool${c2};,;O${c5}K${c4}ddddddddddd${c5}KX${c3}000000000d     ${c2}Shell: <span style='color: #ffffff'>Bash
${c1}lllllool${c2};l${c5}N${c4}dllllllllllld${c5}N${c3}K000000000     ${c2}Resolution: <span style='color: #ffffff'>${window.screen.width}x${window.screen.height}
${c1}lllllllll${c2}o${c5}M${c4}dccccccccccco${c5}W${c3}K000000000     
${c1};cllllllllX${c5}X${c4}c:::::::::c${c5}0X${c3}000000000d
${c1}.ccccllllllO${c5}Nk${c4}c;,,,;cx${c5}KK${c3}0000000000.
${c1} .cccccclllllxOO${c5}OOO${c1}Okx${c3}O0000000000;
${c1}  .:ccccccccllllllllo${c3}O0000000OOO,
${c1}    ,:ccccccccclllcd${c3}0000OOOOOOl.
${c1}      '::ccccccccc${c3}dOOOOOOOkx:.
${c1}        ..,::cccc${c3}xOOOkkko;.
${c1}            ..,:${c3}dOkxl:.</span>
`,
    "safari": (c1, c2, c3, c4, c5, c6, browserName, user, dividerBar, uptime) => `
 <span>${c1}                    'c.           ${user}@${browserName}
${c1}                 ,xNMM.            <span style='color: #ffffff'>${dividerBar}
${c1}               .OMMMMo             ${c2}OS: <span style='color: #ffffff'>Browser
${c1}               OMMM0,              ${c2}Host: <span style='color: #ffffff'>${navigator.vendor}
${c1}     .;loddo:' loolloddol;.        ${c2}Kernel: <span style='color: #ffffff'>${window.navigator.userAgent.split(" ")[0]}
${c1}   cKMMMMMMMMMMNWMMMMMMMMMM0:      ${c2}Uptime: <span style='color: #ffffff'>${uptime}
${c2} .KMMMMMMMMMMMMMMMMMMMMMMMWd.      ${c2}Packages: <span style='color: #ffffff'>0
${c2} XMMMMMMMMMMMMMMMMMMMMMMMX.        ${c2}Shell: <span style='color: #ffffff'>Bash
${c3};MMMMMMMMMMMMMMMMMMMMMMMM:         ${c2}Resolution: <span style='color: #ffffff'>${window.screen.width}x${window.screen.height}
${c3}:MMMMMMMMMMMMMMMMMMMMMMMM:                
${c4}.MMMMMMMMMMMMMMMMMMMMMMMMX.               
 ${c4}kMMMMMMMMMMMMMMMMMMMMMMMMWd.             
 ${c5}.XMMMMMMMMMMMMMMMMMMMMMMMMMMk            
  ${c5}.XMMMMMMMMMMMMMMMMMMMMMMMMK.            
    ${c6}kMMMMMMMMMMMMMMMMMMMMMMd
     ;KMMMMMMMWXXWMMMMMMMk.
       .cooc,.    .,coo:. </span>
    `
} //For now only this two browsers

const asciiColors = {
    "chrome": ["</span><span style='color: #34a853'>", "</span><span style='color: #ea4335'>", "</span><span style='color: #fbbc05'>", "</span><span style='color: #4285f4'>", "</span><span style='color: #ffffff'>"],
    "safari": ["</span><span style='color: #15b40c'>", "</span><span style='color: #f9f0a4'>", "</span><span style='color: #e74957'>", "</span><span style='color: #e74957'>", "</span><span style='color: #b5019e'>", "</span><span style='color: #3b78ff'>"]
}

document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    const terminalElement = document.querySelector('.terminal');
    const prompt = document.getElementById('prompt');

    let startDate = new Date();

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
            "startMessage.txt": "Welcome to the terminal! \n\nType 'help' to see all available commands",
            home: {
                exelvi: {
                    desktop: {
                        "about.txt": "<!DOCTYPE html>\n<span color='blue'>Hello, I'm exelvi</span>\n<span color='red'>I'm a developer</span>\n<span color='green'>I live in Veneto, Italy</span>\n",
                    },
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
        colors: true


    }


    function getPermissions(path, user) {
        return true //to implement

    }

    let bashHistory = [];

    let currentDir = '/';

    if (localStorage.getItem('fileSystem')) {
        fileSystem = JSON.parse(localStorage.getItem('fileSystem'));
    }
    if (localStorage.getItem('settings')) {
        settings = JSON.parse(localStorage.getItem('settings'));
    }

    if (localStorage.getItem('bashHistory')) {
        bashHistory = JSON.parse(localStorage.getItem('bashHistory'));
    }


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

    let hystoryPosition = 0;

    let tabMachPosition = 0;
    let tabMachCommandPosition = 0;
    let first = true;
    let firstFile = true;

    var input,
        command,
        commandList,
        fileListing,
        fileNames,
        matchingCommands,
        matchingFiles



    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const input = inputElement.value;
            handleCommand(input);
            inputElement.value = '';
            event.preventDefault();
        }

        if (event.ctrlKey && event.key === 'c') {
            //if is focused on input

            const output = document.createElement('div');
            output.textContent = '^C';
            outputElement.appendChild(output);
            terminalElement.scrollTop = terminalElement.scrollHeight;
            inputElement.value = '';
        }
        if (event.key === 'ArrowUp') {
            if (hystoryPosition < bashHistory.length) {
                hystoryPosition++;
                inputElement.value = bashHistory[bashHistory.length - hystoryPosition];
            }
        }
        if (event.key === 'ArrowDown') {
            if (hystoryPosition > 0) {
                hystoryPosition--;
                if (hystoryPosition === 0) {
                    inputElement.value = '';
                } else {
                    inputElement.value = bashHistory[bashHistory.length - hystoryPosition];;
                }
            }
        }
        if (event.key === 'Tab') {
            event.preventDefault();

            if (first) {
                tabMachPosition = 0;
                tabMachCommandPosition = 0;
                first = false;

                input = inputElement.value;
                command = input.split(' ')[0];
                commandList = commands.map(function (command) {
                    return command.name;
                });
                matchingCommands = commandList.filter(function (commandName) {
                    return commandName.startsWith(command);
                });
            }
            if (firstFile) {
                fileListing = navigateToPath(currentDir);
                fileNames = Object.keys(fileListing);
                matchingFiles = fileNames.filter(function (fileName) {
                    return fileName.startsWith(input.split(' ')[1] || '');
                });
            }

            if (matchingCommands.length === 1) {
                if (matchingCommands[0] == command) {
                    const file = matchingFiles[tabMachPosition];
                    if (file) {
                        inputElement.value = command + ' ' + file;
                        tabMachPosition++;
                        if (tabMachPosition >= matchingFiles.length) {
                            tabMachPosition = 0;
                        }
                    }
                } else {
                    inputElement.value = matchingCommands[0];
                }
            } else if (matchingCommands.length > 1) {
                inputElement.value = matchingCommands[tabMachCommandPosition];
                tabMachCommandPosition++;
                if (tabMachCommandPosition >= matchingCommands.length) {
                    tabMachCommandPosition = 0;
                }
            }

        } else {
            tabMachPosition = 0;
            tabMachCommandPosition = 0;
            first = true;
        }

    });

    document.addEventListener('keydown', function (event) {
        if (document.activeElement != inputElement) {
            if (event.ctrlKey && event.key === 'c') {
            } else {
                if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) {
                } else {
                    event.preventDefault();
                }
            }
            if (event.ctrlKey && event.key !== 'c' || event.metaKey || event.altKey || event.shiftKey) {
            } else {
                if (window.getSelection().toString() != '') {
                    inputElement.focus();
                }
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
                commands.forEach(function (command) {
                    const commandOutput = document.createElement('div');
                    let descriptionPos = ' '.repeat(15 - command.name.length);
                    if (command.description.length > 50) {
                        command.description = command.description.substring(0, 40) + '\n' + ' '.repeat(15) + command.description.substring(40);
                    }
                    commandOutput.textContent = `${command.name}${descriptionPos}${command.description}`;
                    output.appendChild(commandOutput);
                });
                terminalElement.scrollTop = terminalElement.scrollHeight;
                return output;
            }
        },
        {
            name: 'clear',
            root: false,
            description: 'Clear the terminal',
            execute: function () {
                const output = document.createElement('div');
                outputElement.innerHTML = '';
                return output;
            }
        },
        {
            name: 'echo',
            root: false,
            description: 'Prints text to the terminal',
            execute: function (input) {
                const output = document.createElement('div');
                output.textContent = input.substring(5);
                return output;
            }
        },
        {
            name: 'date',
            root: false,
            description: 'Prints the current date and time',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = new Date().toLocaleString();
                return output;
            }
        },
        {
            name: 'color',
            root: false,
            description: 'Change the color of the terminal',
            execute: function (input) {
                const output = document.createElement('div');
                if (input.split(' ')[1] === 'enable') {
                    settings.colors = true;
                    prompt.innerHTML = `<span style="color: #34a853">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                    return output;
                } else if (input.split(' ')[1] === 'disable') {
                    prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                    settings.colors = false;
                    return output;
                }
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
                    settings.colors = false;
                } else {
                    const backgroundColor = colorMap[colors[0]];
                    const textColor = colorMap[colors[1]];
                    terminalElement.style.backgroundColor = backgroundColor;
                    terminalElement.style.color = textColor;
                    settings.colors = false;
                }
                return output;
            }
        },
        {
            name: 'touch',
            root: false,
            description: 'Create a new file',
            execute: function (input) {
                const output = document.createElement('div');
                if (getPermissions(currentDir, settings.currentUser)) {
                    const fileName = input.split(' ')[1];
                    if (fileName) {
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`, fileName == "grass.txt" ? "Time to go outside :)" : "");
                        return output;
                    } else {
                        output.textContent = 'touch: missing file operand';
                        return output;
                    }
                } else {
                    output.textContent = 'bash: touch: Permission denied';
                    return output;
                }
            }
        },
        {
            name: 'rm',
            root: false,
            description: 'Delete a file or directory',
            execute: function (input) {
                const output = document.createElement('div');
                const path = input.split(' ')[1];
                try {
                    fileSystemFunctions.remove(`${currentDir}/${path}`);
                    return output;
                } catch (error) {
                    output.textContent = `rm: ${path}: ${error.message}`;
                    return output;
                }
            }
        },
        {
            name: 'cat',
            root: false,
            description: 'Display the content of a file',
            execute: function (input) {
                const output = document.createElement('div');
                const fileName = input.split(' ')[1];
                try {
                    const content = fileSystemFunctions.readFileContent(`${currentDir}/${fileName}`);
                    if (!content) {
                        throw new Error('No such file or directory');
                    }
                    if (content.startsWith('<!DOCTYPE html>')) {
                        if (settings.colors) {
                            output.innerHTML = content.replace(/color='(.*?)'/g, 'style="color: $1"');

                        } else {
                            output.innerHTML = content;
                        }

                    } else {
                        output.textContent = content;
                    }
                    return output;
                } catch (error) {
                    output.textContent = `cat: ${fileName}: ${error.message}`;
                    return output;
                }
            }
        },
        {
            name: 'echo',
            root: false,
            description: 'Prints text to the terminal',
            execute: function (input) {
                const output = document.createElement('div');
                output.textContent = input.substring(5);
                return output;
            }
        },
        {
            name: 'ls',
            root: false,
            description: 'List files in the current directory',
            execute: function () {
                const currentDirContent = navigateToPath(currentDir);
                const output = document.createElement('div');

                Object.keys(currentDirContent).forEach(function (item) {
                    if (typeof currentDirContent[item] === 'object') {
                        output.innerHTML += `<span style="color: #3f65bd">${item}</span> `;
                    } else {
                        output.innerHTML += `${item} `;
                    }

                });
                return output;

            }
        },
        {
            name: 'mkdir',
            root: false,
            description: 'Create a new directory',
            execute: function (input) {
                const output = document.createElement('div');
                const directoryName = input.split(' ')[1];
                if (directoryName) {
                    fileSystemFunctions.createDirectory(`${currentDir}/${directoryName}`);
                    return output;
                } else {
                    output.textContent = 'mkdir: missing operand';
                    return output;
                }
            }
        },
        {
            name: 'rmdir',
            root: false,
            description: 'Remove an empty directory',
            execute: function (input) {
                const output = document.createElement('div');
                const directoryName = input.split(' ')[1];
                if (directoryName && fileSystem[currentDir][directoryName] !== undefined && Object.keys(fileSystem[currentDir][directoryName]).length === 0) {
                    delete fileSystem[currentDir][directoryName];
                } else {
                    output.textContent = `rmdir: ${directoryName}: Directory not empty or does not exist`;
                    outputElement.appendChild(output);
                }
                return output;
            }
        },
        {
            name: 'cd',
            root: false,
            description: 'Change the current directory',
            execute: function (input) {
                const output = document.createElement('div');
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
                            if (settings.colors) {
                                prompt.innerHTML = `<span style="color: #34a853">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                            } else {
                                prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                            }
                        } else {
                            throw new Error('No such file or directory');
                        }
                    }
                } catch (error) {

                    console.log(error)
                    output.textContent = `cd: ${directoryName}: No such file or directory`;
                    outputElement.appendChild(output);
                }
                return output;
            }
        },
        {
            name: 'pwd',
            root: false,
            description: 'Print current directory path',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = currentDir;
                return output;
            }
        },
        {
            name: 'whoami',
            root: false,
            description: 'Print the current user',
            execute: function () {
                const output = document.createElement('div');
                output.textContent = settings.currentUser;
                return output;
            }
            ,
        }, {
            name: 'su',
            root: false,
            description: 'Change user',
            execute: function (input) {
                const output = document.createElement('div');
                const user = input.split(' ')[1];

                const settingsUser = settings.users[user];

                if (settingsUser) {
                    if (settingsUser.password == "") {
                        settings.currentUser = user;
                        prompt.textContent = settings.currentUser + '@' + browserName + ':' + currentDir + '$';
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
            description: 'Fetch the content from a URL, can\'t use the curl user-agent so you mostly will get html content',
            execute: function (input) {
                const output = document.createElement('div');
                var url = input.split(' ')[1];
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                }
                fetch(url, { mode: 'no-cors' })
                    .then(response => response.text())
                    .then(data => {
                        output.textContent = data;
                        return output;
                    }).catch(error => {
                        output.textContent = error;
                        return output;
                    });

            }
        },
        {
            name: 'neofetch',
            root: false,
            description: 'Print system information',
            execute: function () {
                const output = document.createElement('div');
                var deviceName = settings.currentUser + '@' + browserName;
                var dividerBar;
                if (deviceName.length % 2 == 0) {
                    dividerBar = '-'.repeat(deviceName.length);
                } else {
                    dividerBar = '-'.repeat(deviceName.length - 1);
                }
                output.innerHTML = ascii[browserName](...asciiColors[browserName], browserName, settings.currentUser, dividerBar, (new Date() - startDate) / 1000 + 's');
                return output;



            }
        }
    ];


    if (fileSystem['/']['startMessage.txt']) {
        outputElement.appendChild(commands.find(command => command.name === 'cat').execute("cat startMessage.txt"));
    }

    if (localStorage.getItem('currentDir')) {
        currentDir = localStorage.getItem('currentDir');
    }


    if (settings.colors) {
        prompt.innerHTML = `<span style="color: #34a853">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
    } else {
        prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
    }

    function handleCommand(input) {
        const output = document.createElement('div');
        bashHistory.push(input);
        hystoryPosition = 0;
        if (settings.colors) {
            output.innerHTML = `<span style="color: #34a853">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$ ${input}`;
            prompt.innerHTML = `<span style="color: #34a853">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
        } else {
            output.textContent = `${settings.currentUser}@${browserName}:${currentDir}$ ${input}`;
            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
        }

        outputElement.appendChild(output);

        const command = commands.find(function (command) {
            return input.split(' ')[0] === command.name;
        });

        if (command) {
            var out = command.execute(input);

            var inputParts = input.split(' ');
            if (inputParts[inputParts.length - 2] === '>') {
                if (inputParts[inputParts.length - 1] === "") {
                    outputElement.appendChild(out);
                } else {
                    var fileName = inputParts[inputParts.length - 1];
                    //remove the last two elements
                    var fileContentParts = inputParts.split(" ");
                    var fileContent = fileContentParts.slice(0, -2).join(" ");


                    if (fileName in navigateToPath(currentDir)) {
                        fileSystemFunctions.changeFileContent(`${currentDir}/${fileName}`, fileContent);
                    } else {
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`, fileContent);
                    }
                }

            } else {
                outputElement.appendChild(out);
            }
        } else {
            const commandOutput = document.createElement('div');
            commandOutput.textContent = `bash: ${input}: command not found`;
            outputElement.appendChild(commandOutput);
        }

        terminalElement.scrollTop = terminalElement.scrollHeight;

        localStorage.setItem('bashHistory', JSON.stringify(bashHistory));
        localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
        localStorage.setItem('settings', JSON.stringify(settings));
        localStorage.setItem('currentDir', currentDir);
    }
});
