---
layout: default
title: Resources
---

This page contains links to useful resources.

-   [CLion](https://www.jetbrains.com/clion/) This is the IDE we will be using in this course. You will need to create an account using your YCP email to receive a free license.


## Windows 10

### Visual Studio 2019

Download and install [Visual Studio 2019](https://visualstudio.microsoft.com) - the Community Edition is sufficient. During the installation when you are given options of features to add, select **Desktop development with C++**. You should be able to sign in with your YCP email (or create a new account using it).

### CLion

1.  Create a [JetBrains](https://account.jetbrains.com/login) account with your YCP email to obtain a free license. 

2. Download and install [CLion](https://www.jetbrains.com/clion/) and accept the defaults during the installation process. You should see a screen for the Visual Studio toolchain, be sure to select the AMD64 architecture. **Note:** If Visual Studio is not the default toolchain, use the up arrow above the list until it shows **(default)**.

## Mac OSX (Catalina)

### XCode

1. From the Mac App store, download and install XCode

2. In the Terminal, install the command line tools using

	```cpp
	$ sudo xcode-select --install
	```
    
### CLion

1.  Create a [JetBrains](https://account.jetbrains.com/login) account with your YCP email to obtain a free license. 

2. Download and install [CLion](https://www.jetbrains.com/clion/) and accept the defaults during the installation process.

## Linux - USE AT YOUR OWN RISK

### Debian based distros (e.g. Debian, Ubuntu, Mint)

From the command line, install the g++ compiler and the glfw/glew libraries

```cpp
	$ sudo apt-get install g++
	$ sudo apt-get install libglfw3-dev
	$ sudo apt-get install libglew-dev
```
	
### CLion

1.  Create a [JetBrains](https://account.jetbrains.com/login) account with your YCP email to obtain a free license. 

2. Download [CLion](https://www.jetbrains.com/clion/) and follow the [installation instructions](https://www.jetbrains.com/help/clion/installation-guide.html#standalone)  for Linux.

3. Accept the defaults during the installation process.

