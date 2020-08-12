---
layout: default
title: Resources
---

This page contains links to useful resources.



-   [CLion](https://www.jetbrains.com/clion/) This is the IDE we will be using in this course. You will need to create an account using your YCP email to receive a free license.
-   [GLFW](https://www.glfw.org) This is the cross-platform window management library for OpenGL we will be using.
-   [GLEW](http://glew.sourceforge.net/) This is the OpenGL Extension Wrangler Library package we will be using to ensure all core functionality is available.


## Windows 10

### Visual Studio 2019

Download and install [Visual Studio 2019](https://visualstudio.microsoft.com) - the Community Edition is sufficient. During the installation when you are given options of features to add, select **Desktop development with C++**. You should be able to sign in with your YCP email (or create a new account using it).

### CLion

1.  Create a [JetBrains](https://account.jetbrains.com/login) account with your YCP email to obtain a free license. 

2. Download and install [CLion](https://www.jetbrains.com/clion/) and accept the defaults during the installation process. You should see a screen for the Visual Studio toolchain, be sure to select the AMD64 architecture.

### GLFW

1.  Download and unzip the [GLFW3 64-bit precompiled binary package](https://www.glfw.org)

2. In the **include** directory, copy the **GLFW** subdirectory to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.17134.0\\um
    
3. In the **lib-vc2019** directory, copy the two **.lib** files (**glfw3.lib** and **glfw3dll.lib**) to

    - C:\\Program Files (x86)\\Windows Kits\\10\\Lib\\10.0.17134.0\\um\\x64
    
4. In the **lib-vc2019** directory, copy the **.dll** file (**glfw3.dll**) to

    - C:\\Windows\\System32
    
### GLEW 

1.  Download and extract the [precompiled binaries](https://sourceforge.net/projects/glew/files/glew/2.1.0/glew-2.1.0-win32.zip/download).

2.  Copy the contents of the **include\\GL** directory to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.18362.0\\um\\gl

3.  Copy **glew32.lib** in the **lib\\Release\\x64** directory to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Lib\\10.0.17134.0\\um\\x64

4.  Copy **glew32.dll** in the **bin\Release\x64** directory to:

    - C:\\Windows\\System32
 

## Mac OSX (Catalina)

### XCode

1. From the Mac App store, download and install XCode

2. In the Terminal, install the command line tools using

    - xcode-select --install
    
### CLion

1.  Create a [JetBrains](https://account.jetbrains.com/login) account with your YCP email to obtain a free license. 

2. Download and install [CLion](https://www.jetbrains.com/clion/) and accept the defaults during the installation process.

### Homebrew

Install the [homebrew](https://brew.sh) package manager for Mac.

### GLFW

Install GLFW via **homebrew**

    - brew install glfw
    
### GLEW

Install GLEW via **homebrew**

    - brew install glew


## Linux

Use the appropriate package manager, e.g. **yum** or **apt**. Contact me for further assistance.