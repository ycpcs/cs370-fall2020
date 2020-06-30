---
layout: default
title: Resources
---

This page contains links to useful resources.


<!--
-   [Visual Studio 2017](https://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?cmi_cs=1&cmi_mnuMain=bdba23cf-e05e-e011-971f-0030487d8897&ws=c1ca0b0c-0f62-e511-9410-b8ca3a5db7a1&vsro=8) is available through MSDNAA. Use the Desktop Development for C++ option.
-   [FreeGLUT](http://freeglut.sourceforge.net/) the OpenGL window management package we will be using. The package is targetted to Linux, but you can get a distribution for [Windows](http://www.transmissionzero.co.uk/software/freeglut-devel/).
-   [SOIL](http://www.lonesock.net/soil.html) the Simple OpenGL Image Library package we will be using. I have precompiled libraries for Windows and Mac OSX that can be downloaded in the corresponding installation section below.
-   [GLEW](http://glew.sourceforge.net/) the OpenGL Extension Wrangler Library package we will be using for shaders (since Windows contains an old version of OpenGL). NOTE: OSX contains a current version of OpenGL and thus does not require GLEW.

FreeGLUT Installation Instructions
----------------------------------

**Windows 10 (Visual Studio 2017)**

1.  Download and extract [freeglut 3.0.0 MSVC Package](http://www.transmissionzero.co.uk/software/freeglut-devel/).

2.  Copy the contents of the **include\\GL** directory to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.17134.0\\um\\gl

3.  Copy **freeglut.lib** from the **lib** directory (**NOT** the x64 subdirectory) to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Lib\\10.0.17134.0\\um\\x86

4.  Copy **freeglut.dll** from the **bin** directory (**NOT** the x64 subdirectory) to:

    - C:\\Windows\\SysWOW64

**Linux (ubuntu)**

From a terminal window

```cpp
$ sudo apt-get install freeglut3-dev
```

**Linux (centos)**

From a terminal window

```cpp
$ sudo yum install freeglut-devel.x86_64
```

**Mac OSX**

Install **XCode** from the App Store. 

Then in a terminal window 

```cpp
$ sudo xcode-select --install
```

to install the command line tools.

SOIL Installation Instructions
------------------------------

**Windows 10 (Visual Studio 2017)**

1.  Copy the header file [SOIL.h](soil/win64/SOIL.h) to (you will need to make a new **SOIL** directory):

    - C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.17134.0\\um\\SOIL

2.  Copy the library [SOIL.lib](soil/win64/SOIL.lib) to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Lib\\10.0.17134.0\\um\\x86

**Linux (ubuntu)**

From a terminal window

```cpp
$ sudo apt-get install libsoil-dev
```
	
**Linux (centos)**

1.  Download the [linux header](soil/centos/SOIL.h).

2.  In a terminal window, from the directory where you downloaded the header file:

	```cpp
	$ sudo mkdir /usr/local/include/SOIL
	
	$ sudo cp SOIL.h /usr/local/include/SOIL/
	```

3.  Download [libSOIL.a](soil/centos/libSOIL.a).

4.  In a terminal window, from the directory where you downloaded the library:

	```cpp
	$ sudo cp libSOIL.a /usr/local/lib/
	```
	
**Mac OSX**

1.  Download the [mac header](soil/mac/SOIL.h).

2.  In a terminal window, from the directory where you downloaded the header file:

	```cpp
	$ sudo mkdir /usr/local/include/SOIL
	
	$ sudo cp SOIL.h /usr/local/include/SOIL/
	```

3.  Download [libSOIL.a](soil/mac/libSOIL.a).

4.  In a terminal window, from the directory where you downloaded the library:

	```cpp
	$ sudo cp libSOIL.a /usr/local/lib/
	```
	
GLEW Installation Instructions
------------------------------

**Windows 10 (Visual Studio 2017)**

1.  Download and extract (be sure to get the Windows 32-bit version even if you are running a 64-bit OS) [precompiled binaries](https://sourceforge.net/projects/glew/files/glew/2.1.0/glew-2.1.0-win32.zip/download).

2.  Copy the contents of the **include\\GL** directory to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.17134.0\\um\\gl

3.  Copy **glew32.lib** in the **lib\\Release\Win32** directory to:

    - C:\\Program Files (x86)\\Windows Kits\\10\\Lib\\10.0.17134.0\\um\\x86

4.  Copy **glew32.dll** in the **bin\Release\Win32** directory to:

    - C:\\Windows\\SysWOW64

**Linux (ubuntu)**

From a terminal window

```cpp
$ sudo apt-get install libglew-dev
```

**Linux (centos)**

From a terminal window

```cpp
$ sudo yum install glew-devel.x86_64
```

**Mac OSX**

GLEW is not needed for OSX.
-->