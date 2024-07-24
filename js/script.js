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

function formatMilliseconds(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    let result = [];
    if (hours > 0) {
        result.push(hours + " hour" + (hours > 1 ? "s" : ""));
    }
    if (minutes > 0) {
        result.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
    }
    if (seconds > 0 || result.length === 0) {
        result.push(seconds + " second" + (seconds > 1 ? "s" : ""));
    }

    return result.join(" and ");
}

var mode = "normal"
let realPrompt = prompt
document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    const terminalElement = document.querySelector('.terminal');

    const prompt = document.getElementById('prompt');
    const barTitle = document.getElementById('bar-title');

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



    let fileSystem = {
        '/': {
            home: {
                exelvi: {
                    ".bash_history": "",
                    desktop: {
                        "about.txt": "<!DOCTYPE html>\n<span color='blue'>Hello, I'm exelvi</span>\n<span color='red'>I'm a developer</span>\n<span color='green'>I live in Veneto, Italy</span>\n\n\n<span hidden>Pssss... Also try to type 'color enable' and reopen me </span>",
                        "favotite.txt": "<!DOCTYPE html>\n<span color='#f7de1f'>Javascript</span>\n<span color='#0186d0'>VSCode</span>\n<span color='#5865F2'>Blurple</span>\n\n\n<span hidden>Pssss... Also try to type 'color enable' and reopen me </span>",
                        "links.txt": `<!DOCTYPE html>   

<a target="_blank" rel="noopener noreferrer" href="https://exelvi.github.io">My website</a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/EXELVI">My GitHub</a>
<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/exelviofficial/">My Instagram</a>

\n`,
                    },
                    documents: {
                        "troll.txt": "cat: troll.txt: Path not found", "player.sh": `javascript new Audio(realPrompt("Song URL (MP3 or other file)")).play();
echo You can't stop it :)`,
                        "fontChanger.sh": `javascript tempFunction = function (path) { fileSystemFunctions.changeFileContent("/etc/profile", fileSystemFunctions.readFileContent("/etc/profile") + "\\n" + fileSystemFunctions.readFileContent('/home/exelvi/documents/fontChangerStart.sh')); } 
echo Do you want to change the font automatically at the start?
echo javascript document.body.style.fontFamily = "Arial, sans-serif" > fontChangerStart.sh
javascript prompt.textContent = "(y/n)"
javascript mode = "confirm-tempFunction()"`
                    }
                }
            },
            root: {
                ".bash_history": "",

            },
            etc: {
                "motd": "Welcome to the terminal! \n\nType 'help' to see all available commands",
                "skel": {
                    ".bash_history": "",
                    desktop: {

                    },
                    documents: {

                    }
                },
                "profile": ""
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
                    "/home/exelvi": ["r", "w", "x"],
                    "/": ["r"],
                }

            },
            {
                "name": "root",
                "password": "ifyoucanreadthisyouareahacker",
                "UID": 0,
                "home": "/root",
                "permissions": {
                    "/": ["r", "w", "x"]
                }
            }
        ],
        currentUser: 1000,
        colors: false,
        lastUser: 1000,
    }

    let stats = { //Does not reset on clear
        commands: {}, // commands executed since the start 
        files: 0, //files created since the start 
        directories: 0, //directories created since the start
        sudo: 0, //sudo commands executed since the start
        users: 0, //users created since the start
        resets: 0, //terminal resets since the start
        screenshots: {}, //screenshots taken since the start
        uptime: 0, //time since the start
        errors: [], //JS errors since the start
    }

    let sudoLogin = false; //used sudo at least once


    function getPermissions(path, user) {
        return true
    }

    let currentDir = '/';


    if (localStorage.getItem('fileSystem')) {
        fileSystem = JSON.parse(localStorage.getItem('fileSystem'));
    }
    if (localStorage.getItem('settings')) {
        settings = JSON.parse(localStorage.getItem('settings'));
    }
    if (localStorage.getItem('stats')) {
        stats = JSON.parse(localStorage.getItem('stats'));
    }

    const terminal = document.getElementById('terminal');
    const topBar = document.getElementById('top-bar');
    const resizeHandles = document.querySelectorAll('.resize-handle');

    let isResizing = false;
    let currentHandle = null;
    let initialMouseX, initialMouseY, initialWidth, initialHeight;

    resizeHandles.forEach(handle => {
        handle.addEventListener('mousedown', (e) => {
            isResizing = true;
            currentHandle = handle;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
            initialWidth = terminal.offsetWidth;
            initialHeight = terminal.offsetHeight;
            document.body.style.cursor = handle.style.cursor;
            e.preventDefault();
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (isResizing) {
            const dx = e.clientX - initialMouseX;
            const dy = e.clientY - initialMouseY;

            if (currentHandle.classList.contains('top-left')) {
                terminal.style.width = `${initialWidth - dx}px`;
                terminal.style.height = `${initialHeight - dy}px`;
                terminal.style.top = `${terminal.offsetTop + dy}px`;
                terminal.style.left = `${terminal.offsetLeft + dx}px`;
            } else if (currentHandle.classList.contains('top-right')) {
                terminal.style.width = `${initialWidth + dx}px`;
                terminal.style.height = `${initialHeight - dy}px`;
                terminal.style.top = `${terminal.offsetTop + dy}px`;
            } else if (currentHandle.classList.contains('bottom-left')) {
                terminal.style.width = `${initialWidth - dx}px`;
                terminal.style.height = `${initialHeight + dy}px`;
                terminal.style.left = `${terminal.offsetLeft + dx}px`;
            } else if (currentHandle.classList.contains('bottom-right')) {
                terminal.style.width = `${initialWidth + dx}px`;
                terminal.style.height = `${initialHeight + dy}px`;
            }
        }
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
        }
    });


    let isDragging = false;
    let offsetX, offsetY;

    topBar.addEventListener('dragstart', (e) => {
        if (document.getElementById('terminal-body').style.width != '99%') {
            isDragging = true;
            offsetX = e.clientX - terminal.offsetLeft;
            offsetY = e.clientY - terminal.offsetTop;
        }
    });

    document.addEventListener('dragover', (e) => {
        if (isDragging) {
            e.preventDefault();
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            terminal.style.left = `${x}px`;
            terminal.style.top = `${y}px`;
        }
    });

    document.addEventListener('drop', () => {
        isDragging = false;
    });

    document.addEventListener('dragend', () => {
        isDragging = false;
    });

    const minimizeButton = document.getElementById('minimize');
    const closeButton = document.getElementById('close');
    const zoomButton = document.getElementById('zoom');

    minimizeButton.addEventListener('click', function () {
        if (document.getElementById("terminal-body").style.display != "none") {
            document.getElementById("terminal-body").style.display = "none";
            document.getElementById("top-bar").style.borderBottomRightRadius = "5px";
            document.getElementById("top-bar").style.borderBottomLeftRadius = "5px";
            document.getElementById("top-bar").style.borderTopRightRadius = "5px";
            document.getElementById("top-bar").style.borderTopLeftRadius = "5px";
            document.getElementById("top-bar").style.width = "200px";
        } else {
            document.getElementById("terminal-body").style.display = "block";
            document.getElementById("top-bar").style.borderBottomRightRadius = "0";
            document.getElementById("top-bar").style.borderBottomLeftRadius = "0";
            if (document.getElementById('terminal-body').style.width == '99%') {
                document.getElementById("top-bar").style.width = "99%";
            } else {
                document.getElementById("top-bar").style.width = "80%";
            }

        }

    });

    closeButton.addEventListener('click', function () {
        document.location.href = "https://exelvi.github.io";
        document.getElementById('terminal').style.display = 'none';
    });

    zoomButton.addEventListener('click', function () {
        if (document.getElementById("terminal-body").style.display == "none") {
            document.getElementById("terminal-body").style.display = "block";
            document.getElementById("top-bar").style.borderBottomRightRadius = "0";
            document.getElementById("top-bar").style.borderBottomLeftRadius = "0";

        }
        if (document.getElementById('terminal-body').style.width == '99%') {
            document.getElementById('terminal-body').style.width = '80%';
            document.getElementById('terminal-body').style.height = '370px';
            document.getElementById('terminal-body').style.left = '10%';
            document.getElementById('terminal-body').style.top = '10%';
            document.getElementById('top-bar').style.borderTopRightRadius = '5px';
            document.getElementById('top-bar').style.borderTopLeftRadius = '5px';
            document.getElementById('top-bar').style.width = '80%';
            document.getElementById("terminal").style.maxWidth = "800px";
            topBar.draggable = true;
            topBar.style.cursor = 'grab';

        } else {
            document.getElementById('terminal-body').style.width = '99%';
            document.getElementById('terminal-body').style.height = '99%';
            document.getElementById('terminal-body').style.left = '0';
            document.getElementById('terminal-body').style.top = '0';
            document.getElementById('top-bar').style.width = '99%';
            document.getElementById('top-bar').style.borderTopRightRadius = '0';
            document.getElementById('top-bar').style.borderTopLeftRadius = '0';
            document.getElementById("terminal").style.maxWidth = "none";
            terminal.style.left = '0px';
            terminal.style.top = '0px';
            topBar.draggable = false;
            topBar.style.cursor = 'default';
        }
    });


    var confirms = 0;

    const resetButton = document.getElementById('reset'); //div
    resetButton.addEventListener('click', function () {
        var output = document.createElement('div');
        confirms = 0;
        output.innerHTML = "\n<span style='color: red'>!WARNING!</span>\n\nThis will reset the terminal <strong>(NOT clear)</strong> and all the data will be lost (except the stats)\n\n";
        outputElement.appendChild(output);
        prompt.textContent = "Are you sure? (y/n)";
        mode = "confirm-" + "resetTerminal()";
        inputElement.value = '';

    });



    function resetTerminal() {
        if (confirms == 1) {
            localStorage.clear();
            stats.resets++;
            localStorage.setItem('stats', JSON.stringify(stats));
            location.reload()
        } else {
            confirms++;
            var output = document.createElement('div');
            output.innerHTML = "\n<span style='color: red'>!LAST WARNING!</span>\n\nThis will reset the terminal <strong>(NOT clear)</strong> and all the data will be lost (except the stats)\n\n";
            outputElement.appendChild(output);
            prompt.textContent = "Are you sure? (y/n)";
            mode = "confirm-" + "resetTerminal()";
            inputElement.value = '';
        }
    }

    const screenshotButton = document.getElementById('screenshot');
    screenshotButton.addEventListener('click', function () {
        var element = document.getElementById('terminal-body');

        document.getElementById("terminal-body").style.borderBottomRightRadius = "0";
        document.getElementById("terminal-body").style.borderBottomLeftRadius = "0";

        html2canvas(element).then(function (canvas) {
            var image = canvas.toDataURL('image/png');

            var link = document.createElement('a');
            link.href = image;
            link.download = 'screenshot-' + new Date().toISOString().slice(0, 19).replace(/:/g, '-') + '.png';

            link.click();

            var today = "" + new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()
            stats.screenshots[today] = stats.screenshots[today] ? stats.screenshots[today] + 1 : 1;
            localStorage.setItem('stats', JSON.stringify(stats));

            document.getElementById("terminal-body").style.borderBottomRightRadius = "5px";
            document.getElementById("terminal-body").style.borderBottomLeftRadius = "5px";
        });


    });


    let javascriptHistory = ""


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
            stats.files++;
        },
        createDirectory: function (path) {
            const parentDir = navigateToPath(path, true);
            parentDir[getFileName(path)] = {};
            stats.directories++;
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
            var userDir = navigateToPath(settings.users.find(u => u.UID === user).home);
            if (userDir[".bash_history"] === undefined) {
                this.createFile(`${settings.users[user].home}/.bash_history`);
                userDir = navigateToPath(settings.users.find(u => u.UID === user).home);
            }
            return userDir[".bash_history"];
        },
        addToBashHistory: function (user, command) {
            var userDir = navigateToPath(settings.users.find(u => u.UID === user).home);
            if (userDir[".bash_history"] === undefined) {
                this.createFile(`${settings.users[user].home}/.bash_history`);
                userDir = navigateToPath(settings.users.find(u => u.UID === user).home);
            }
            userDir[".bash_history"] += command + "\n";
        },
        copy: function (source, destination) {
            const sourceObj = navigateToPath(source);
            if (sourceObj === false) {
                throw new Error('Source path not found');
            }
            const destinationDir = navigateToPath(destination, true);
            if (destinationDir === false) {
                throw new Error('Destination path not found');
            }
            destinationDir[getFileName(destination)] = JSON.parse(JSON.stringify(sourceObj));
        },
        move: function (source, destination) {
            this.copy(source, destination);
            this.remove(source);
        },
        tree: function (path, indent = '') {
            let treeOutput = '';
            const target = navigateToPath(path);

            if (typeof target !== 'object') {
                throw new Error('Path not found');
            }

            const keys = Object.keys(target);
            keys.forEach((key, index) => {
                const isLast = index === keys.length - 1;
                treeOutput += indent + (isLast ? '└── ' : '├── ') + key + '\n';
                if (typeof target[key] === 'object') {
                    treeOutput += this.tree(`${path}/${key}`, indent + (isLast ? '    ' : '│   '));
                }
            });

            return treeOutput;
        }
    };

    var tempFunction = {

    }

    function navigateToPath(path, parent = false) {
        const parts = path.split('/').filter(part => part.length > 0);
        let current = fileSystem['/'];
        for (let i = 0; i < (parent ? parts.length - 1 : parts.length); i++) {
            current = current[parts[i]];
            if (current === undefined) {
                return false
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

    let inputPosition = 0;

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
                    settings.lastUser = settings.currentUser
                    settings.currentUser = settings.users.find(u => u.name === user).UID
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    } else {
                        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                    }
                    document.title = settings.users.find(u => u.UID == settings.currentUser).name + '@' + browserName;
                    barTitle.textContent = settings.users.find(u => u.UID == settings.currentUser).name + '@' + browserName;
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
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
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
                if (settings.users.find(u => u.UID === user).password == input) {
                    sudoLogin = true;
                    mode = "normal"
                    inputElement.type = 'text';
                    inputElement.value = '';
                    handleCommand("sudo " + inputC, false)
                } else {
                    tries++
                    if (tries > 3) {
                        var output = document.createElement('div');
                        output.textContent = "Too many tries";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
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

                if (passwdMode == "c") {
                    if (settings.users.find(u => u.name === user).password == input) {
                        mode = "passwd-n-" + user
                        prompt.textContent = "Enter new password: ";
                        inputElement.value = '';
                        return
                    } else {
                        var output = document.createElement('div');
                        output.textContent = "passwd: Authentication token manipulation error\npasswd: password unchanged";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.currentUser}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>$`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                        }
                        mode = "normal"
                        return

                    }
                } else if (passwdMode == "n") {
                    passwordTemp = input
                    mode = "passwd-cc-" + user
                    prompt.textContent = "Confirm new password: ";
                    inputElement.value = '';
                } else if (passwdMode == "cc") {
                    if (passwordTemp == input) {
                        settings.users.find(u => u.name === user).password = input
                        mode = "normal"
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                        }
                        inputElement.value = '';
                        inputElement.type = 'text';
                        localStorage.setItem('settings', JSON.stringify(settings));
                        return
                    } else {
                        var output = document.createElement('div');
                        output.textContent = "passwd: Authentication token manipulation error\npasswd: password unchanged";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                        }
                        mode = "normal"
                        return
                    }
                }
            }
            else if (mode == "javascript") {
                if (input == ".exit") {
                    mode = "normal"
                    inputElement.type = 'text';
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    } else {
                        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                    }
                    inputElement.value = '';
                    return
                }
                try {
                    var output = document.createElement('div');
                    output.textContent += "> " + input + "\n";
                    var result = eval(input);
                    if (typeof result == "boolean" || typeof result == "number") {
                        var span = document.createElement('span');
                        span.textContent = result;
                        if (settings.colors) span.style.color = "orange";
                        output.appendChild(span);
                    } else if (typeof result == "string") {
                        var span = document.createElement('span');
                        span.textContent = "'" + result + "'";
                        if (settings.colors) span.style.color = "green";
                        output.appendChild(span);
                    } else if (typeof result == "object") {
                        var span = document.createElement('span');
                        span.textContent = JSON.stringify(result);
                        if (settings.colors) span.style.color = "blue";
                        output.appendChild(span);
                    } else {
                        var span = document.createElement('span');
                        span.textContent = result;
                        output.appendChild(span);
                    }
                    outputElement.appendChild(output);
                    terminalElement.scrollTop = terminalElement.scrollHeight;
                    inputElement.value = '';
                    javascriptHistory += input + "\n";
                    hystoryPosition = 1;
                    return
                } catch (error) {
                    var output = document.createElement('div');
                    output.textContent = error;
                    outputElement.appendChild(output);
                    terminalElement.scrollTop = terminalElement.scrollHeight;
                    inputElement.value = '';
                    return
                }
            } else if (mode.startsWith("adduser-")) {
                const mod = mode.split("-")[1] //passn = New password, passc = Confirm password
                const userUID = mode.split("-")[2]
                if (mod == "passn") {
                    passwordTemp = input
                    mode = "adduser-passc-" + userUID
                    prompt.textContent = "Confirm new password: ";
                    inputElement.value = '';
                } else if (mod == "passc") {
                    if (passwordTemp == input) {
                        settings.users.find(u => u.UID == userUID).password = input
                        mode = "normal"
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                        }
                        inputElement.value = '';
                        inputElement.type = 'text';
                        localStorage.setItem('settings', JSON.stringify(settings));
                        return
                    } else {
                        var output = document.createElement('div');
                        output.textContent = "Sorry, passwords do not match";
                        output.textContent += "\npasswd: Authentication token manipulation error\npasswd: password unchanged";
                        outputElement.appendChild(output);
                        inputElement.value = '';
                        inputElement.type = 'text';
                        prompt.textContent = "Try again? [y/N]";
                        mode = "confirm-" + "adduserpass(" + userUID + ")";

                        return
                    }
                }
            } else if (mode.startsWith("confirm-")) {
                const functionString = mode.split("-")[1]

                if (input == "y") {

                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    } else {
                        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                    }
                    inputElement.value = '';
                    mode = "normal"
                    eval(functionString)


                } else {
                    var output = document.createElement('div');
                    output.textContent = "Operation canceled";
                    outputElement.appendChild(output);
                    mode = "normal"
                    inputElement.value = '';
                    inputElement.type = 'text';
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    } else {
                        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                    }

                }

            }
            else {
                handleCommand(input);
                inputElement.value = '';
            }

        }

        if (event.ctrlKey && event.key === 'c') {
            if (window.getSelection().toString() == '') {

                const output = document.createElement('div');
                if (settings.colors) {
                    output.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'} ^C`;
                } else {
                    output.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'} ^C`;
                }
                outputElement.appendChild(output);
                terminalElement.scrollTop = terminalElement.scrollHeight;
                inputElement.value = '';
                mode = "normal"
                inputElement.type = 'text';
                if (settings.colors) {
                    prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                } else {
                    prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                }
            } else {
                event.preventDefault();
                navigator.clipboard.writeText(window.getSelection().toString());
                window.getSelection().removeAllRanges();
                inputElement.focus();
            }
        }
        if (event.key === 'ArrowUp') {
            let bashHistory = fileSystemFunctions.getBashHistory(settings.currentUser).split("\n");
            if (mode == "javascript") {
                bashHistory = javascriptHistory.split("\n");;
            }
            if (hystoryPosition < bashHistory.length) {
                hystoryPosition++;
                inputElement.value = bashHistory[bashHistory.length - hystoryPosition];
            }
        }
        if (event.key === 'ArrowDown') {
            var bashHistory = fileSystemFunctions.getBashHistory(settings.currentUser).split("\n");
            if (mode == "javascript") {
                bashHistory = javascriptHistory.split("\n");;
            }

            // 0 is always ""
            if (hystoryPosition > 1) {
                hystoryPosition--;
                inputElement.value = bashHistory[bashHistory.length - hystoryPosition];
            }
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            if (mode == "normal") {
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

            } else if (mode == "javascript") {
                if (first) {
                    tabMachPosition = 0;
                    first = false;

                    input = inputElement.value;
                    // get input current position and position on the splitted array 
                    let cursorPosition = inputElement.selectionStart;
                    let cursorPositionArray = input.substring(0, cursorPosition).split(' ');
                    let cursorPositionArrayLength = cursorPositionArray.length;
                    let cursorPositionArrayLast = cursorPositionArray[cursorPositionArrayLength - 1];

                    command = cursorPositionArrayLast;
                    inputPosition = cursorPositionArrayLength - 1;

                    //      var globalProperties = Object.getOwnPropertyNames(window);

                    commandList = Object.getOwnPropertyNames(window).map(function (command) {
                        return command;
                    });
                    matchingCommands = commandList.filter(function (commandName) {
                        return commandName.startsWith(command);
                    });
                }

                if (matchingCommands.length > 0) {
                    inputElement.value = input.split(' ').slice(0, inputPosition).join(' ') + ' ' + matchingCommands[tabMachPosition];
                    tabMachPosition++;
                    if (tabMachPosition >= matchingCommands.length) {
                        tabMachPosition = 0;
                    }
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

    function adduserpass(userUID) {
        console.log(userUID)
        inputElement.value = '';
        inputElement.type = 'password';
        inputElement.focus();
        prompt.textContent = 'New password: ';
        mode = "adduser-passn-" + userUID;

    }

    const commands = [
        {
            name: 'help',
            description: 'List all available commands',
            root: false,
            execute: function () {
                const output = document.createElement('div');
                output.textContent = 'Available commands:';
                commands.sort((a, b) => a.name.localeCompare(b.name)).forEach(function (command) {
                    const commandOutput = document.createElement('div');
                    let descriptionPos = ' '.repeat(15 - command.name.length);
                    let description = command.description;
                    if (description.length > 40) {
                        description = description.substring(0, 40) + '\n' + ' '.repeat(15) + description.substring(40);
                    }
                    commandOutput.textContent = `${command.name}${descriptionPos}${description}`;
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
                    prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    return output;
                } else if (input.split(' ')[1] === 'disable') {
                    prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
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
                    var content = fileSystemFunctions.readFileContent(`${currentDir}/${fileName}`);
                    if (!content && content !== '') {
                        throw new Error('No such file or directory');
                    }
                    if (!content) content = ' ';
                    if (content.startsWith('<!DOCTYPE html>')) {
                        if (settings.colors) {
                            output.innerHTML = content.replace(/color='(.*?)'/g, 'style="color: $1"');

                        } else {
                            output.innerHTML = content.replace(/hidden/g, '');
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
                var parts = input.split(' ');
                if (parts[parts.length - 2] === ">") {
                    parts.pop();
                    parts.pop();
                }
                parts.shift();
                output.textContent = parts.join(' ');
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
            name: 'mv',
            root: false,
            description: 'Move a file or directory',
            execute: function (input) {
                const output = document.createElement('div');
                const source = input.split(' ')[1];
                const destination = input.split(' ')[2];
                try {
                    fileSystemFunctions.move(`${currentDir}/${source}`, `${currentDir}/${destination}`);
                    return output;
                } catch (error) {
                    output.textContent = `mv: ${error.message}`;
                    return output;
                }
            }
        },
        {
            name: 'cp',
            root: false,
            description: 'Copy a file or directory',
            execute: function (input) {
                const output = document.createElement('div');
                const source = input.split(' ')[1];
                const destination = input.split(' ')[2];
                try {
                    fileSystemFunctions.copy(`${currentDir}/${source}`, `${currentDir}/${destination}`);
                    return output;
                } catch (error) {
                    output.textContent = `cp: ${error.message}`;
                    return output;
                }
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
                    let newDir;
                    if (directoryName === '/') {
                        newDir = '/';
                    } else if (directoryName === '..' || directoryName === '../') {
                        newDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';
                    } else if (directoryName.startsWith('/')) {
                        newDir = directoryName;
                    } else if (directoryName === '~') {
                        newDir = settings.users.find(u => u.UID == settings.currentUser).home;
                    } else {
                        newDir = `${currentDir}/${directoryName}`.replace('//', '/');
                    }

                    const target = navigateToPath(newDir);
                    if (typeof target === 'object') {
                        currentDir = newDir.replace(/\/$/, '') || '/';  // Remove trailing slash
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        } else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                        }
                    } else {
                        throw new Error('No such file or directory');
                    }
                } catch (error) {
                    console.log(error);
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
            execute: function (input, currentUser) {
                const output = document.createElement('div');
                output.textContent = settings.users.find(x => x.UID == currentUser).name;
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

                var settingsUser = settings.users.find(u => u.name === user)


                if (!user) {
                    // root
                    settingsUser = settings.users.find(u => u.UID === 0)
                }


                if (!settingsUser) {
                    output.textContent = `su: user '${user}' does not exist`;

                    return output;
                }
                if (settingsUser) {
                    if (settingsUser.password == "") {
                        settings.currentUser = settingsUser.UID;
                        document.title = settings.users.find(u => u.UID == settings.currentUser)?.name + '@' + browserName;
                        barTitle.textContent = settings.users.find(u => u.UID == settings.currentUser)?.name + '@' + browserName;
                        if (settings.colors) {
                            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                        }
                        else {
                            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                        }

                        localStorage.setItem('settings', JSON.stringify(settings));



                    } else {
                        inputElement.value = '';
                        inputElement.type = 'password';
                        inputElement.focus();
                        prompt.textContent = 'Password:';
                        mode = "supassword-" + settingsUser.name;
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
                if (!url) {
                    output.textContent = 'curl: missing URL';
                    return output;
                }
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'http://' + url;
                }

                fetch(url, {
                    headers: {
                        "User-Agent": "curl/7.68.0"
                    }
                })
                    .then(response => response.text())
                    .then(data => {
                        output.textContent = data;
                    })
                    .catch(error => {
                        output.textContent = error;
                    });
                return output;

            }
        },
        {
            name: 'neofetch',
            root: false,
            description: 'Print system information',
            execute: function (input, currentUser) {
                const output = document.createElement('div');
                var deviceName = currentUser + '@' + browserName;
                var dividerBar;
                if (deviceName.length % 2 == 0) {
                    dividerBar = '-'.repeat(deviceName.length);
                } else {
                    dividerBar = '-'.repeat(deviceName.length - 1);
                }
                output.innerHTML = ascii[browserName](...asciiColors[browserName], browserName, settings.users.find(u => u.UID == currentUser).name, dividerBar, formatMilliseconds(new Date() - startDate));
                return output;
            }
        },
        {
            name: 'exit',
            root: false,
            description: 'Close the terminal',
            execute: function () {
                var output = document.createElement('div');
                if (settings.currentUser !== 0) {
                    output.textContent = 'Bye!';
                    window.location.href = 'https://exelvi.github.io';

                } else {
                    settings.currentUser = settings.lastUser;
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    } else {
                        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                    }
                    document.title = settings.users.find(u => u.UID == settings.currentUser).name + '@' + browserName;
                    barTitle.textContent = settings.users.find(u => u.UID == settings.currentUser).name + '@' + browserName;


                }
                return output;
            }
        },
        {
            name: 'usermod',
            root: true,
            description: 'Modify a user',
            execute: function (input, currentUser) {
                var output = document.createElement('div');
                inputParsed = parseCommand(input);

                if (input.includes('--help') || input.includes('-h')) {
                    output.textContent = `Usage: usermod [options] LOGIN

Options: 

  -d, --home HOME_DIR           new home directory for the user account
  -h, --help                    display this help message and exit
  -l, --login NEW_LOGIN         new value of the login name
  -m, --move-home               move contents of the home directory to the

`;
                    return output;
                }

                if (inputParsed['l'] || inputParsed['-login']) {
                    var user = inputParsed['input'];
                    if (user === undefined || user === "") {
                        user = settings.users.find(u => u.name === currentUser).name;
                    }
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
                        settings.users.find(u => u.name === user).name = inputParsed['l'] || inputParsed['-login'];

                    }
                }
                if (inputParsed['d'] || inputParsed['-home']) {
                    var user = inputParsed['input'];
                    if (user === undefined || user === "") {
                        user = settings.users.find(u => u.UID === currentUser).name;
                    }
                    if (settings.users.find(u => u.name == user)?.UID === 0) {
                        output.textContent = `usermod: user ${user} is currently used by process 1`;
                        return output;
                    } else if (settings.users.find(u => u.name === user)) {
                        settings.users.find(u => u.name === user).home = inputParsed['d'] || inputParsed['-home'];
                        if (inputParsed['m'] || inputParsed['-move-home']) {
                            fileSystemFunctions.move(`/home/${user}`, inputParsed['d'] || inputParsed['-home']);
                        }
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
                    user = settings.users.find(u => u.UID === currentUser).name;
                }

                if (settings.users.find(u => u.name === user)) {
                    if (currentUser !== 0) {
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
        },
        {
            name: 'javascript',
            root: false,
            description: 'Open a javascript console',
            execute: function (input) {
                const output = document.createElement('div');
                var commands = input.split('javascript ')[1];
                if (commands) {
                    try {
                        var result = eval(commands)
                        if (typeof result == "boolean" || typeof result == "number") {
                            var span = document.createElement('span');
                            span.textContent = result;
                            if (settings.colors) span.style.color = "orange";
                            output.appendChild(span);
                        } else if (typeof result == "string") {
                            var span = document.createElement('span');
                            span.textContent = "'" + result + "'";
                            if (settings.colors) span.style.color = "green";
                            output.appendChild(span);
                        } else if (typeof result == "object") {
                            var span = document.createElement('span');
                            span.textContent = JSON.stringify(result);
                            if (settings.colors) span.style.color = "blue";
                            output.appendChild(span);
                        } else {
                            var span = document.createElement('span');
                            span.textContent = result;
                            output.appendChild(span);
                        }
                        return output;
                    } catch (error) {
                        output.textContent = error;
                        return output;
                    }
           
                } else {
                    output.textContent = 'Welcome to JavaScript!\nTo exit press Ctrl + C or type .exit';
                    inputElement.value = '';
                    inputElement.type = 'text';
                    mode = "javascript";
                    prompt.textContent = '> ';
                    outputElement.appendChild(output);
                    return false;
                }
            }
        },
        {
            name: 'adduser',
            root: true,
            description: 'Create a new user',
            execute: function (input) {
                var output = document.createElement('div');
                //adduser LOGIN
                var user = input.split(' ')[1];
                if (input.includes('--help') || input.includes('-h') || user === undefined || user === "") {
                    output.textContent = `Usage: adduser LOGIN`
                    return output;
                }

                if (settings.users.find(u => u.name === user)) {
                    output.textContent = `adduser: The user '${user}' already exists`;
                    return output;
                }

                output.textContent = `Adding user '${user}' ... `
                setTimeout(() => {
                    output.textContent += `\nCreating home directory '/home/${user}' ... `
                    outputElement.appendChild(output);
                    setTimeout(() => {
                        var home = `/home/${user}`;
                        var path = navigateToPath("/home");
                        if (!path[user]) {
                            output.textContent += `\nCopying files from '/etc/skel' ... `
                            outputElement.appendChild(output);
                            fileSystemFunctions.createDirectory(home);
                            if (!fileSystem['/']['etc']['skel']) {
                                fileSystem['/']['etc']['skel'] = {};
                            } else {
                                fileSystemFunctions.copy("/etc/skel", home);
                            }
                        } else {
                            output.textContent += `\nThe home directory '${home}' already exists.  Not copying from '/etc/skel'.`
                            outputElement.appendChild(output);
                        }
                        setTimeout(() => {
                            var userUID = 1000 + (settings.users.length - 1);
                            var userJson = {
                                name: user,
                                password: "",
                                UID: userUID,
                                home: home,
                                permissions: {
                                    "/": ["r"],
                                    home: ["r", "w", "x"]
                                }
                            }
                            settings.users.push(userJson);
                            stats.users++;
                            localStorage.setItem('settings', JSON.stringify(settings));
                            inputElement.value = '';
                            inputElement.type = 'password';
                            inputElement.focus();
                            prompt.textContent = 'New password: ';
                            mode = "adduser-passn-" + userUID;
                            return false
                        }, 500);
                    }, 500);
                })
            }
        },
        {
            name: 'userdel',
            root: true,
            description: 'Delete a user',
            execute: function (input) {
                var output = document.createElement('div');
                var user = input.split(' ')[1];
                if (input.includes('--help') || input.includes('-h') || user === undefined || user === "") {
                    output.textContent = `Usage: userdel LOGIN

Options:
  -h, --help                    display this help message and exit
  -r, --remove                  remove home directory`
                    return output;
                }

                if (settings.users.find(u => u.name === user)) {
                    user = settings.users.find(u => u.name === user);
                    if (user.UID === 0) {
                        output.textContent = `userdel: user '${user.name}' is currently used by process 1`;
                        return output;
                    }
                    if (user.UID == settings.currentUser) {
                        output.textContent = `userdel: user '${user.name}' is currently used by process 1097`;
                        return output;
                    }
                    output.textContent = `Removing user '${user.name}' ... `
                    setTimeout(() => {
                        if (input.includes('--remove') || input.includes('-r')) {
                            output.textContent += `\nRemoving home directory '${user.home}' ... `
                            outputElement.appendChild(output);
                            setTimeout(() => {
                                fileSystemFunctions.remove(user.home);
                                setTimeout(() => {
                                    settings.users = settings.users.filter(u => u.name !== user.name);
                                    localStorage.setItem('settings', JSON.stringify(settings));
                                    output.textContent += `\nDone.`
                                    outputElement.appendChild(output);
                                }, 500);
                            }, 500);
                        } else {
                            settings.users = settings.users.filter(u => u.name !== user.name);
                            output.textContent += `\nDone.`
                            outputElement.appendChild(output);
                        }
                    }, 500);
                }

            }
        },
        {
            name: "sh",
            description: "Start a shell",
            root: false,
            execute: function (input) {
                var output = document.createElement('div');
                var file = input.split(' ')[1];

                if (file) {
                    var content = fileSystemFunctions.readFileContent(`${currentDir}/${file}`);
                    if (content) {
                        var lines = content.split('\n');
                        lines.forEach(function (line) {
                            handleCommand(line, false);
                        });
                    } else {
                        output.textContent = `sh: ${file}: No such file or directory`;
                        return output;
                    }
                }

            }
        },
        {
            name: 'wget',
            root: false,
            description: 'Download a file',
            execute: function (input) {
                var output = document.createElement('div');
                var url = input.split(' ')[1];
                if (!url) {
                    output.textContent = 'wget: missing URL';
                    return output;
                }
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'http://' + url;
                }
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        var fileName = url.split('/').pop();
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`, data);
                        output.textContent = `Saved '${fileName}'`;
                    })
                    .catch(error => {
                        output.textContent = error;
                    });
                return output;
            }
        },
        {
            name: "tree",
            description: "List the file system in a tree view",
            root: false,
            execute: function (input) {
                var dir = input.split(' ')[1] || "/";
                const output = document.createElement('div');
                try {
                    const treeOutput = fileSystemFunctions.tree(dir);
                    output.innerHTML = `<pre>${dir}\n${treeOutput}</pre>`;
                } catch (error) {
                    output.textContent = `tree: ${dir}: No such file or directory`;
                }
                outputElement.appendChild(output);

                return output;
            }
        },
        {
            name: "screenshot",
            description: "Take a screenshot",
            root: false,
            execute: function () {
                var element = document.getElementById('terminal-body');

                document.getElementById("terminal-body").style.borderBottomRightRadius = "0";
                document.getElementById("terminal-body").style.borderBottomLeftRadius = "0";
                inputElement.value = '';
                prompt.textContent = '';

                html2canvas(element).then(function (canvas) {
                    var image = canvas.toDataURL('image/png');

                    var link = document.createElement('a');
                    link.href = image;
                    link.download = 'screenshot-' + new Date().toISOString().slice(0, 19).replace(/:/g, '-') + '.png';

                    link.click();

                    var today = "" + new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()
                    stats.screenshots[today] = stats.screenshots[today] ? stats.screenshots[today] + 1 : 1;
                    localStorage.setItem('stats', JSON.stringify(stats));

                    document.getElementById("terminal-body").style.borderBottomRightRadius = "5px";
                    document.getElementById("terminal-body").style.borderBottomLeftRadius = "5px";
                    if (settings.colors) {
                        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
                    } else {
                        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
                    }
                });
            }
        },
        {
            name: "stats",
            description: "Print terminal statistics",
            root: false,
            execute: function (input) {
                var output = document.createElement('div');
                var args = input.split(" ");

                if (args[1] == "--help" || args[1] == "-h") {
                    output.textContent = `Usage: stats [OPTION]

Options:
    -c, --commands            display command statistics
    -s, --screenshots         display screenshot statistics
    -e, --errors              display error statistics
    -complete, -all           display all statistics
    -console                  display errors in console (only with -errors)`;
                    return output;

                }

                function randomReadableColor() {
                    do {
                        var r = Math.floor(Math.random() * 256);
                        var g = Math.floor(Math.random() * 256);
                        var b = Math.floor(Math.random() * 256);
                    } while (r + g + b < 128);
                    return { r, g, b };
                }

                let mostUsedCommand,
                    totalCommands,
                    totalScreenshots,
                    totalErrors;


                if (stats.commands) {
                    mostUsedCommand = Object.keys(stats.commands).reduce((a, b) => stats.commands[a] > stats.commands[b] ? a : b);
                    totalCommands = Object.values(stats.commands).reduce((a, b) => a + b);
                } else {
                    mostUsedCommand = 'N/A';
                    totalCommands = 0;
                }
                if (stats.screenshots != {}) {
                    totalScreenshots = Object.values(stats.screenshots).reduce((a, b) => a + b);
                } else {
                    totalScreenshots = 0;
                }
                if (stats.errors != {}) {
                    totalErrors = Object.values(stats.errors).length;
                } else {
                    totalErrors = 0;
                }

                output.innerHTML = `<span style="color: #ffffff">stats: ${args[1]}: invalid argument;</span>`;
                if (!args[1]) {
                    output.innerHTML = `<pre>
Total commands:     ${totalCommands}
Most used command:  ${mostUsedCommand} (${stats.commands[mostUsedCommand]} times)
Sudo commands:      ${stats.sudo || 0}
Screenshots:        ${totalScreenshots}
Time spent:         ${formatMilliseconds(stats.uptime)}
</pre>`;
                }

                if (args[1] === '-c' || args[1] === '-commands') {
                    var commandStats = Object.keys(stats.commands).map(cmd => {
                        return `${cmd}:${' '.repeat(15 - cmd.length)}${stats.commands[cmd]} times`;
                    }).join('\n');

                    output.innerHTML = `<pre>
Most used command: ${mostUsedCommand} (${stats.commands[mostUsedCommand]} times)
Total commands: ${totalCommands}
-----------------------------------------------
Command statistics:
${commandStats}
</pre>`;
                }

                if (args[1] === '-screenshot' || args[1] === '-screenshots' || args[1] === '-s') {
                    var screenshotStats = Object.keys(stats.screenshots).map(date => {
                        return `${date}:${' '.repeat(15 - date.length)}${stats.screenshots[date]} times`;
                    }).join('\n');

                    output.innerHTML = `<pre>
Screenshots: ${totalScreenshots}
-----------------------------------------------
${screenshotStats}
</pre>`;
                }

                if (args[1] === '-errors' || args[1] === '-e' || args[1] === '-error' || args[2] === '-e' || args[2] === '-errors' || args[2] === '-error') {
                    if (args[1] === '-console' || args[2] === '-console') console.log(stats.errors);
                    var errorStats = "";
                    for (let i = 0; i < Object.values(stats.errors).length; i++) {
                        errorStats += `${i}. ${Object.values(stats.errors)[i]?.message?.length > 48 ? Object.values(stats.errors)[i]?.message?.substring(0, 43) + '...' : Object.values(stats.errors)[i]?.message}\n`
                    }
                    output.innerHTML = `<pre>
Errors: ${totalErrors}
-----------------------------------------------
${errorStats}
</pre>`;
                }

                if (args[1] === '-complete' || args[1] === '-all') {

                    var commandStats = Object.keys(stats.commands).map(cmd => {
                        return `${cmd}:${' '.repeat(15 - cmd.length)}${stats.commands[cmd]} times`;
                    }).join('\n');

                    var screenshotStats = Object.keys(stats.screenshots).map(date => {
                        return `${date}:${' '.repeat(15 - date.length)}${stats.screenshots[date]} times`;
                    }).join('\n');

                    output.innerHTML = `<pre>
Total commands:       ${totalCommands}
Most used command:    ${mostUsedCommand} (${stats.commands[mostUsedCommand]} times)
Sudo commands:        ${stats.sudo || 0}
Screenshots:          ${totalScreenshots}
Time spent:           ${formatMilliseconds(stats.uptime)}
Errors:               ${totalErrors}
Files created:        ${stats.files}
Directories created:  ${stats.directories}
Resets:               ${stats.resets}
</pre>`



                }


                var startColor = randomReadableColor();
                var endColor = randomReadableColor();

                var steps = output.textContent.split('\n').length;

                let fade = []
                for (let i = 0; i < steps; i++) {
                    fade.push(`rgb(${startColor.r + i * (endColor.r - startColor.r) / steps}, ${startColor.g + i * (endColor.g - startColor.g) / steps}, ${startColor.b + i * (endColor.b - startColor.b) / steps})`);
                }

                output.innerHTML = output.innerHTML.split('\n').map((line, i) => `<span style="color: ${fade[i]}">${line}</span>`).join('<br>');


                return output;
            }

        }

    ];


    if (fileSystem['/']['etc']['motd']) {
        outputElement.appendChild(commands.find(command => command.name === 'cat').execute("cat /etc/motd"));
    }

    if (fileSystem['/']['etc']['profile']) {
        var profile = fileSystemFunctions.readFileContent('/etc/profile');
        var lines = profile.split('\n');

        lines.forEach(function (line) {
            handleCommand(line, false);
        });
    }


    if (localStorage.getItem('currentDir')) {
        currentDir = localStorage.getItem('currentDir');
    } else {
        currentDir = settings.users.find(u => u.UID == settings.currentUser).home;
    }

    if (settings.currentUser == 0) {
        settings.currentUser = settings.lastUser;

    }

    if (settings.colors) {
        prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
    } else {
        prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
    }

    document.title = settings.users.find(u => u.UID == settings.currentUser).name + '@' + browserName;
    barTitle.textContent = settings.users.find(u => u.UID == settings.currentUser).name + '@' + browserName;

    function handleCommand(input, out = true) {
        const output = document.createElement('div');
        hystoryPosition = 1;
        try {
            fileSystemFunctions.addToBashHistory(settings.currentUser, input);
        } catch (error) {
            console.log(error)
        }

        if (settings.colors) {
            output.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'} ${input}`;
        } else {
            output.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'} ${input}`;
        }


        if (out) outputElement.appendChild(output);

        var currentUser = settings.currentUser;

        // if command starts with sudo
        if (input.startsWith('sudo')) {
            //remove sudo from the input
            if (sudoLogin || settings.users.find(u => u.UID === currentUser).UID === 0) {
                input = input.substring(5);
                currentUser = 0;
                stats.sudo = stats.sudo ? stats.sudo + 1 : 1;
            } else {
                input = input.substring(5);
                tries = 0;
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
            stats.commands[command.name] = stats.commands[command.name] ? stats.commands[command.name] + 1 : 1;
            var out = command.execute(input, currentUser);
            if (!out) return

            var inputParts = input.split(' ');
            if (inputParts[inputParts.length - 2] === '>') {
                if (inputParts[inputParts.length - 1] === "") {
                    outputElement.appendChild(out);
                } else {
                    var fileName = inputParts[inputParts.length - 1];

                    if (fileName in navigateToPath(currentDir)) {
                        fileSystemFunctions.changeFileContent(`${currentDir}/${fileName}`, out.textContent);
                    } else {
                        fileSystemFunctions.createFile(`${currentDir}/${fileName}`, out.textContent);
                    }
                    if (fileSystem['/']['proc']) {
                        if (fileSystem['/']['proc']['sysrq-trigger']) {
                            if (fileSystemFunctions.readFileContent('/proc/sysrq-trigger') !== '') {
                                outputElement.innerHTML = '';
                                prompt.textContent = '';
                                terminalElement.style.backgroundColor = 'black'
                                terminalElement.style.color = 'white'
                                outputElement.style.color = 'white'
                                inputElement.value = '';
                                inputElement.disabled = true;
                                fileSystem['/']['proc']['sysrq-trigger'] = '';
                                setTimeout(function () {

                                    document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                                }, 1000);
                            }
                        }
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
            prompt.innerHTML = `<span style="color: ${settings.currentUser == 0 ? "#a82403" : "#34a853"}">${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}</span>:<span style="color: #3f65bd">${currentDir}</span>${settings.currentUser == 0 ? '#' : '$'}`;
        }
        else {
            prompt.textContent = `${settings.users.find(u => u.UID == settings.currentUser).name}@${browserName}:${currentDir}${settings.currentUser == 0 ? '#' : '$'}`;
        }

        terminalElement.scrollTop = terminalElement.scrollHeight;

        localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
        localStorage.setItem('settings', JSON.stringify(settings));
        localStorage.setItem('currentDir', currentDir);
    }

    window.addEventListener('beforeunload', function (event) {
        if (!stats.uptime) {
            stats.uptime = 0;
        }
        stats.uptime += new Date() - startDate;
        localStorage.setItem('stats', JSON.stringify(stats));

    });

    window.onerror = function (msg, url, lineNo, columnNo, error) {
        if (!stats.errors) {
            stats.errors = [];
        }
        stats.errors.push({
            message: msg,
            url: url,
            line: lineNo,
            column: columnNo,
            error: error
        });
    };


});
