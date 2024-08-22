# 🖥️ [Terminal](https://exelvi.github.io/terminal)


![Terminal screen](assets/screen.png)


[![GitHub last commit](https://img.shields.io/github/last-commit/EXELVI/terminal?style=for-the-badge)](https://github.com/EXELVI/terminal/commits/main/)
[![GitHub repo size](https://img.shields.io/github/repo-size/EXELVI/terminal?style=for-the-badge)](https://github.com/EXELVI/terminal)
[![GitHub issues](https://img.shields.io/github/issues/EXELVI/terminal?style=for-the-badge)](https://github.com/EXELVI/terminal/issues)
[![GitHub forks](https://img.shields.io/github/forks/EXELVI/terminal?style=for-the-badge)](https://github.com/EXELVI/terminal/network/members)
[![GitHub stars](https://img.shields.io/github/stars/EXELVI/terminal?style=for-the-badge)](https://github.com/EXELVI/terminal/stargazers)

This is a **web-based terminal application** built using HTML, CSS, and JavaScript. Originally designed as a portfolio project, it provides a simple yet functional implementation of a terminal interface that allows users to execute commands, navigate the file system, and more.


## ✨ Features

- **Command execution**: Users can enter commands and see the output directly in the terminal.
- **File system navigation**: Users can navigate through directories, list files, and perform basic file operations.
- **Command history**: Users can access previously executed commands using the up and down arrow keys.
- **Autocomplete**: Users can use the tab key to autocomplete commands and file paths.
- **Resizable terminal**: The terminal can be resized, maximized, or minimized for convenience.
- **Screenshot button**: Easily take a screenshot of the terminal interface with a dedicated button.

## 🚀 Usage

### [Open the Terminal ![Open Terminal](assets/box-arrow-up-right.svg)](https://exelvi.github.io/terminal) 

## 📝 Commands

> **Note:** You can use `sudo` before a command to run it as the root user.

> **Note:** You can use `> [filename]` at the end of a command to save the output to a file.

| Command    | Description                     | Usage                      | Notes                                                                                  |
|------------|---------------------------------|----------------------------|----------------------------------------------------------------------------------------|
| `adduser`  | Create a new user               | `adduser [username]`        |                                                                                        |
| `alias`    | Create an alias for a command   | `alias [name] [command]`    |                                                                                        |
| `cat`      | Display the content of a file   | `cat [filename]`            |                                                                                        |
| `cd`       | Change the current directory    | `cd [directory]`            | Using `..` will move up one directory, and using `~` will move to the home directory.  |
| `clear`    | Clear the terminal              | `clear`                     |                                                                                        |
| `color`    | Change the terminal color       | `color (color)`             |                                                                                        |
| `cp`       | Copy a file or directory        | `cp [source] [destination]` |                                                                                        |
| `curl`     | Fetch content from a URL        | `curl [url]`                | Can't use the curl user-agent since it's a web-based terminal.                         |
| `date`     | Prints the current date and time| `date`                      |                                                                                        |
| `echo`     | Prints text to the terminal     | `echo [text]`               |                                                                                        |
| `exit`     | Close the terminal              | `exit`                      | If root user, will log out.                                                            |
| `help`     | List all available commands     | `help`                      |                                                                                        |
| `javascript` | Open a JavaScript console     | `javascript (code)`         |                                                                                        |
| `ls`       | List files in the directory     | `ls`                        |                                                                                        |
| `mkdir`    | Create a new directory          | `mkdir [directory]`         |                                                                                        |
| `mv`       | Move a file or directory        | `mv [source] [destination]` |                                                                                        |
| `nano`     | Open a text editor              | `nano [filename]`           | Bugged, really bugged. :\|                                                             |
| `neofetch` | Print system information        | `neofetch`                  | ASCII art only with Chrome and Safari.                                                 |
| `passwd`   | Change user password            | `passwd (username)`         | Leaving out the username will change the current user's password.                      |
| `pwd`      | Print current directory path    | `pwd`                       |                                                                                        |
| `rm`       | Delete a file or directory      | `rm [file]`                 |                                                                                        |
| `screenshot` | Take a screenshot of the terminal | `screenshot`            |                                                                                        |
| `sh`       | Start a shell                   | `sh [file]`                 |                                                                                        |
| `stats`    | Print terminal statistics       | `stats (params)`            |                                                                                        |
| `su`       | Change user                     | `su (username)`             | Leaving out the username will switch to the root user.                                 |
| `touch`    | Create a new file               | `touch [filename]`          | There may be an easter egg :)                                                          |
| `tree`     | Print the directory tree        | `tree`                      |                                                                                        |
| `unalias`  | Remove an alias                 | `unalias [name]`            |                                                                                        |
| `userdel`  | Delete a user                   | `userdel [username]`        |                                                                                        |
| `usermod`  | Modify a user                   | `usermod [username]`        |                                                                                        |
| `whoami`   | Print the current user          | `whoami`                    |                                                                                        |
| `wget`     | Download a file from a URL      | `wget [url]`                |                                                                                        |
> `[]` means required, `()` means optional

Feel free to explore and experiment with different commands to familiarize yourself with the terminal's capabilities.

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/EXELVI/terminal).
