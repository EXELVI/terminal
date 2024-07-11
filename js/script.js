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
    `,//For now only this two browsers
    "firefox": (c1, c2, browserName, user, dividerBar, uptime) => `
<span style="color: ${c1}">${user}@${browserName}</span>
<span style="color: #ffffff">${dividerBar}</span>
<span style="color: ${c2};">OS: <span style='color: #ffffff'>Browser</span>
<span style="color: ${c2};">Host: <span style='color: #ffffff'>${navigator.vendor}</span>
<span style="color: ${c2};">Kernel: <span style='color: #ffffff'>${window.navigator.userAgent.split(" ")[0]}</span>
<span style="color: ${c2};">Uptime: <span style='color: #ffffff'>${uptime}</span>
<span style="color: ${c2};">Packages: <span style='color: #ffffff'>0</span>
<span style="color: ${c2};">Shell: <span style='color: #ffffff'>Bash</span>
<span style="color: ${c2};">Resolution: <span style='color: #ffffff'>${window.screen.width}x${window.screen.height}</span>`,
    "opera": (c1, c2, browserName, user, dividerBar, uptime) => `
<span style="color: ${c1}">${user}@${browserName}</span>
<span style="color: #ffffff">${dividerBar}</span>
<span style="color: ${c2};">OS: <span style='color: #ffffff'>Browser</span>
<span style="color: ${c2};">Host: <span style='color: #ffffff'>${navigator.vendor}</span>
<span style="color: ${c2};">Kernel: <span style='color: #ffffff'>${window.navigator.userAgent.split(" ")[0]}</span>
<span style="color: ${c2};">Uptime: <span style='color: #ffffff'>${uptime}</span>
<span style="color: ${c2};">Packages: <span style='color: #ffffff'>0</span>
<span style="color: ${c2};">Shell: <span style='color: #ffffff'>Bash</span>
<span style="color: ${c2};">Resolution: <span style='color: #ffffff'>${window.screen.width}x${window.screen.height}</span>`,
    "edge": (c1, c2, browserName, user, dividerBar, uptime) => `
<span style="color: ${c1}">${user}@${browserName}</span>
<span style="color: #ffffff">${dividerBar}</span>
<span style="color: ${c2};">OS: <span style='color: #ffffff'>Browser</span>
<span style="color: ${c2};">Host: <span style='color: #ffffff'>${navigator.vendor}</span>
<span style="color: ${c2};">Kernel: <span style='color: #ffffff'>${window.navigator.userAgent.split(" ")[0]}</span>
<span style="color: ${c2};">Uptime: <span style='color: #ffffff'>${uptime}</span>
<span style="color: ${c2};">Packages: <span style='color: #ffffff'>0</span>
<span style="color: ${c2};">Shell: <span style='color: #ffffff'>Bash</span>
<span style="color: ${c2};">Resolution: <span style='color: #ffffff'>${window.screen.width}x${window.screen.height}</span>`,
    "browser": (c1, c2, browserName, user, dividerBar, uptime) => `
<span style="color: ${c1}">${user}@${browserName}</span>
<span style="color: #ffffff">${dividerBar}</span>
<span style="color: ${c2};">OS: <span style='color: #ffffff'>Browser</span>
<span style="color: ${c2};">Host: <span style='color: #ffffff'>${navigator.vendor}</span>
<span style="color: ${c2};">Kernel: <span style='color: #ffffff'>${window.navigator.userAgent.split(" ")[0]}</span>
<span style="color: ${c2};">Uptime: <span style='color: #ffffff'>${uptime}</span>
<span style="color: ${c2};">Packages: <span style='color: #ffffff'>0</span>
<span style="color: ${c2};">Shell: <span style='color: #ffffff'>Bash</span>
<span style="color: ${c2};">Resolution: <span style='color: #ffffff'>${window.screen.width}x${window.screen.height}</span>`,


}

const asciiColors = {
    "chrome": ["</span><span style='color: #34a853'>", "</span><span style='color: #ea4335'>", "</span><span style='color: #fbbc05'>", "</span><span style='color: #4285f4'>", "</span><span style='color: #ffffff'>"],
    "safari": ["</span><span style='color: #15b40c'>", "</span><span style='color: #f9f0a4'>", "</span><span style='color: #e74957'>", "</span><span style='color: #e74957'>", "</span><span style='color: #b5019e'>", "</span><span style='color: #3b78ff'>"],
    "firefox": ["#e10f67", "#fb912c",],
    "opera": ["#fa4a4a", "#af0510"],
    "edge": ["#46d369", "#0980d0"],
    "browser": ["#a9a9a9", "#dfdfdf"]

}

var mode = "normal"

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
                    ".bash_history": "",
                    desktop: {
                        "about.txt": "<!DOCTYPE html>\n<span color='blue'>Hello, I'm exelvi</span>\n<span color='red'>I'm a developer</span>\n<span color='green'>I live in Veneto, Italy</span>\n\n\n Pssss... Also try to type 'color enable'",
                    },
                    documents: { "troll.txt": "cat: troll.txt: Path not found" }
                }
            },
            root: {
                ".bash_history": "",

            },
            etc: {

            }
        }
    };

    let settings = {
        users: [
            {
                "name": "exelvi",
                "password": "password", //easy :)
                "UID": 1000,
                "home": "/home/exelvi",
                "permissions": {
                    "/home/exelvi": true,
                }

            },
            {
                "name": "root",
                "password": "ifyoucanreadthisyouareahacker",
                "UID": 0,
                "home": "/root",
                "permissions": true
            }
        ],
        currentUser: "exelvi",
        colors: false,
        lastUser: "exelvi",
    }

    let sudoLogin = false; //used sudo at least once


    function getPermissions(path, user) {
        return true //to implement

    }

    let currentDir = '/';


    if (localStorage.getItem('fileSystem')) {
        fileSystem = JSON.parse(localStorage.getItem('fileSystem'));
    }
    if (localStorage.getItem('settings')) {
        settings = JSON.parse(localStorage.getItem('settings'));
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
        },
        getBashHistory: function (user) {
            var userDir = navigateToPath(settings.users.find(u => u.name === user).home);
            if (userDir[".bash_history"] === undefined) {
                this.createFile(`${settings.users[user].home}/.bash_history`);
                userDir = navigateToPath(settings.users.find(u => u.name === user).home);
            }
            return userDir[".bash_history"];
        },
        addToBashHistory: function (user, command) {
            var userDir = navigateToPath(settings.users.find(u => u.name === user).home);
            if (userDir[".bash_history"] === undefined) {
                this.createFile(`${settings.users[user].home}/.bash_history`);
                userDir = navigateToPath(settings.users.find(u => u.name === user).home);
            }
            userDir[".bash_history"] += command + "\n";
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

    function parseCommand(command) {
        const parts = command.split(' ');
        const result = {};
        let input = "";

        for (let i = 0; i < parts.length; i++) {
            if (parts[i].startsWith('-')) {
                const arg = parts[i].substring(1);
                const value = parts[i + 1];
                result[arg] = value;
                i++;
            } else if (i === parts.length - 1) {
                input = parts[i];
            }
        }

        if (input) {
            result['input'] = input;
        }

        return result;
    }


    let hystoryPosition = 1;

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

    let tries = 0

    let passwordTemp = ""

    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const input = inputElement.value;

            if (mode.startsWith("supassword-")) {
                const user = mode.split("-")[1]
                if (settings.users.find(u => u.name === user).password == input) {
                    settings.lastUser = settings.currentUser;
                    settings.currentUser = user;
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                    } else {
                        prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                    }
                    document.title = settings.currentUser + '@' + browserName;
                    mode = "normal"
                    inputElement.type = 'text';
                    inputElement.value = '';
                    return
                } else {
                    tries++
                    if (tries > 3) {
                        var output = document.createElement('div');
                        output.textContent = "Too many tries";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                        } else {
                            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                        }

                        mode = "normal"
                        tries = 0
                        return
                    }
                    var output = document.createElement('div');
                    output.textContent = "Wrong password";
                    outputElement.appendChild(output);
                    inputElement.value = '';
                    return
                }
            } else if (mode.startsWith("sudo-")) {
                const user = settings.currentUser
                const inputC = mode.split("sudo-")[1]
                if (settings.users.find(u => u.name === user).password == input) {
                    sudoLogin = true;
                    mode = "normal"
                    inputElement.type = 'text';
                    inputElement.value = '';
                    handleCommand("sudo " + inputC)
                } else {
                    tries++
                    if (tries > 3) {
                        var output = document.createElement('div');
                        output.textContent = "Too many tries";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                        } else {
                            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                        }

                        mode = "normal"
                        tries = 0
                        return
                    }
                    var output = document.createElement('div');
                    output.textContent = "Wrong password";
                    outputElement.appendChild(output);
                    inputElement.value = '';
                    return
                }

            } else if (mode.startsWith("passwd-")) {
                const passwdMode = mode.split("-")[1]
                const user = mode.split("-")[2]

                if (passwdMode == "c") { //current password 
                    if (settings.users.find(u => u.name === user).password == input) {
                        mode = "passwd-n-" + user
                        prompt.textContent = "Enter new password: ";
                        inputElement.value = '';
                        return
                    } else {
                        var output = document.createElement('div');
                        output.textContent = "Wrong password";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                        } else {
                            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                        }
                        mode = "normal"
                        return

                    }
                } else if (passwdMode == "n") { //new password
                    //set password temp and ask for confirmation
                    passwordTemp = input
                    mode = "passwd-cc-" + user
                    prompt.textContent = "Confirm new password: ";
                    inputElement.value = '';
                } else if (passwdMode == "cc") {
                    if (passwordTemp == input) {
                        settings.users.find(u => u.name === user).password = input
                        mode = "normal"
                        prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                        inputElement.value = '';
                        return
                    } else {
                        var output = document.createElement('div');
                        output.textContent = "Passwords do not match";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                        } else {
                            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                        }
                        mode = "normal"
                        return
                    }
                } 
                
            }
            else {
                handleCommand(input);
                inputElement.value = '';
            }

        }

        if (event.ctrlKey && event.key === 'c') {
            //if is focused on input
            if (window.getSelection().toString() == '') {

                const output = document.createElement('div');
                output.textContent = '^C';
                outputElement.appendChild(output);
                terminalElement.scrollTop = terminalElement.scrollHeight;
                inputElement.value = '';
                mode = "normal"
                inputElement.type = 'text';
                if (settings.colors) {
                    prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                } else {
                    prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                }
            } else {
                event.preventDefault();
                navigator.clipboard.writeText(window.getSelection().toString());
                window.getSelection().removeAllRanges();
                inputElement.focus();
            }
        }
        if (event.key === 'ArrowUp') {
            var bashHistory = fileSystemFunctions.getBashHistory(settings.currentUser).split("\n");
            if (hystoryPosition < bashHistory.length) {
                hystoryPosition++;
                inputElement.value = bashHistory[bashHistory.length - hystoryPosition];
            }
        }
        if (event.key === 'ArrowDown') {
            var bashHistory = fileSystemFunctions.getBashHistory(settings.currentUser).split("\n");
            if (hystoryPosition > 1) {
                hystoryPosition--;
                if (hystoryPosition === 1) {
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
                if (window.getSelection().toString() == '') {
                    if (event.key.length === 1) {
                        inputElement.value += event.key;
                    }
                    inputElement.focus();
                } else {
                    event.preventDefault();
                    navigator.clipboard.writeText(window.getSelection().toString());
                    window.getSelection().removeAllRanges();
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
                    terminalElement.style.backgroundColor = 'black';
                    terminalElement.style.color = 'white';
                    settings.colors = true;
                    prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
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
                    if (settings.colors) {
                        if (typeof currentDirContent[item] === 'object') {
                            output.innerHTML += `<span style="color: #3f65bd">${item}</span> `;
                        } else {
                            output.innerHTML += `${item} `;
                        }
                    } else {
                        if (typeof currentDirContent[item] === 'object') {
                            output.textContent += item + ' ';
                        } else {
                            output.textContent += item + ' ';
                        }
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
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                        } else {
                            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                        }
                    } else {
                        const newDir = `${currentDir}/${directoryName}`.replace('//', '/');
                        const target = navigateToPath(newDir);
                        if (typeof target === 'object') {
                            currentDir = newDir;
                            if (settings.colors) {
                                prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
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

                const settingsUser = settings.users.find(u => u.name === user)

                if (settingsUser) {
                    if (settingsUser.password == "") {
                        settings.currentUser = user;
                        prompt.textContent = settings.currentUser + '@' + browserName + ':' + currentDir + '$';
                        document.title = settings.currentUser + '@' + browserName;
                    } else {
                        inputElement.value = '';
                        inputElement.type = 'password';
                        inputElement.focus();
                        prompt.textContent = 'Password:';
                        mode = "supassword-" + user;
                        tries = 0
                        return false

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
        },
        {
            name: 'exit',
            root: false,
            description: 'Close the terminal',
            execute: function () {
                var output = document.createElement('div');
                if (settings.currentUser !== 'root') {
                    output.textContent = 'Bye!';
                    window.location.href = 'https://exelvi.github.io';

                } else {
                    settings.currentUser = settings.lastUser;
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                    } else {
                        prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
                    }
                    document.title = settings.currentUser + '@' + browserName;


                }
                return output;
            }
        },
        {
            name: 'usermod',
            root: true,
            description: 'Modify a user',
            execute: function (input) {
                var output = document.createElement('div');
                inputParsed = parseCommand(input);

                if (input.includes('--help') || input.includes('-h')) {
                    output.textContent = `Usage: usermod [options] LOGIN

Options: 

  -d, --home HOME_DIR           new home directory for the user account
  -h, --help                    display this help message and exit
  -l, --login NEW_LOGIN         new value of the login name

`;
                    return output;
                }

                if (inputParsed['l'] || inputParsed['-login']) {
                    var user = inputParsed['input'];
                    if (!settings.users.find(u => u.name === user)) {
                        output.textContent = `usermod: user '${user}' does not exist`;
                        return output;
                    }
                    if (settings.currentUser === user) {
                        output.textContent = `usermod: user ${user} is currently used by process 1097`;
                        return output;
                    } else if (settings.users.find(u => u.name == user).UID === 0) {
                        output.textContent = `usermod: user ${user} is currently used by process 1`;
                        return output;
                    } else {
                        if (settings.users.find(u => u.name === user)) {
                            settings.users[inputParsed['l'] || inputParsed['-login']] = settings.users.find(u => u.name === user)
                            delete settings.users.find(u => u.name === user);
                        }
                    }
                }
                if (inputParsed['d'] || inputParsed['-home']) {
                    var user = inputParsed['input'];
                    if (settings.users.find(u => u.name == user).UID === 0) {
                        output.textContent = `usermod: user ${user} is currently used by process 1`;
                        return output;
                    } else if (settings.users.find(u => u.name === user)) {
                        ssettings.users.find(u => u.name === user).home = inputParsed['d'] || inputParsed['-home'];
                    }
                }
                return output;
            }
        },
        {
            name: 'passwd',
            root: false,
            description: 'Change user password',
            execute: function (input, currentUser) {
                var output = document.createElement('div');
                if (input.includes('--help') || input.includes('-h')) {
                    output.textContent = `Usage: passwd LOGIN`
                }
                var user = input.split(' ')[1];
                if (user === undefined || user === "") {
                    user = settings.currentUser;
                }

                if (settings.users.find(u => u.name === user)) {
                    if (settings.users.find(u => u.name !== currentUser)?.UID == 0) {
                        inputElement.value = '';
                        inputElement.type = 'password';
                        inputElement.focus();
                        prompt.textContent = 'Current password:';
                        mode = "passwd-c-" + user;
                        tries = 0
                        return false
                    } else {
                        inputElement.value = '';
                        inputElement.type = 'password';
                        inputElement.focus();
                        prompt.textContent = 'New password:';
                        mode = "passwd-n-" + user;
                        tries = 0
                        return false

                    }
                } else {
                    output.textContent = `passwd: user '${user}' does not exist`;
                    return output;
                }
            }


        }

    ];


    if (fileSystem['/']['startMessage.txt']) {
        outputElement.appendChild(commands.find(command => command.name === 'cat').execute("cat startMessage.txt"));
    }

    if (localStorage.getItem('currentDir')) {
        currentDir = localStorage.getItem('currentDir');
    } else {
        currentDir = settings.users.find(u => u.name === settings.currentUser).home;
    }

    if (settings.currentUser === 'root') {
        //  settings.currentUser = settings.lastUser;

    }

    if (settings.colors) {
        prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
    } else {
        prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
    }

    function handleCommand(input) {
        const output = document.createElement('div');
        hystoryPosition = 1;
        fileSystemFunctions.addToBashHistory(settings.currentUser, input);
        if (settings.colors) {
            output.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$ ${input}`;
        } else {
            output.textContent = `${settings.currentUser}@${browserName}:${currentDir}$ ${input}`;
        }


        outputElement.appendChild(output);

        var currentUser = settings.currentUser;

        // if command starts with sudo
        if (input.startsWith('sudo')) {
            //remove sudo from the input
            if (sudoLogin || settings.users.find(u => u.name === currentUser).UID === 0) {
                input = input.substring(5);
                currentUser = settings.users.find(u => u.UID === 0).name;
            } else {
                input = input.substring(5);
                inputElement.value = '';
                inputElement.type = 'password';
                inputElement.focus();
                prompt.textContent = 'Password:';
                mode = "sudo-" + input;
                return
            }
        }

        const command = commands.find(function (command) {
            return input.split(' ')[0] === command.name;
        });


        if (command) {
            var out = command.execute(input, currentUser);
            if (!out) return

            var inputParts = input.split(' ');
            if (inputParts[inputParts.length - 2] === '>') {
                if (inputParts[inputParts.length - 1] === "") {
                    outputElement.appendChild(out);
                } else {
                    var fileName = inputParts[inputParts.length - 1];
                    //remove the last two elements
                    if (fileName in navigateToPath(currentDir)) {
                        fileSystemFunctions.changeFileContent(`${currentDir}/${fileName}`, out.textContent);
                    } else {
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`, out.textContent);
                    }
                }

            } else {
                outputElement.appendChild(out);
            }

        } else {
            const commandOutput = document.createElement('div');
            if (input === '') {

            } else {
                commandOutput.textContent = `${input}: command not found`;
                outputElement.appendChild(commandOutput);
            }

        }

        if (settings.colors) {
            prompt.innerHTML = `<span style="color: ${settings.users.find(u => u.name == settings.currentUser).UID == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
        }
        else {
            prompt.textContent = `${settings.currentUser}@${browserName}:${currentDir}$`;
        }

        terminalElement.scrollTop = terminalElement.scrollHeight;

        localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
        localStorage.setItem('settings', JSON.stringify(settings));
        localStorage.setItem('currentDir', currentDir);
    }
});
