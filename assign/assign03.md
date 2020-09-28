---
layout: default
title: "Assignment 3: Limelight"
---

**Written Questions Due: Thursday, Oct 15th by 12:30/2:00 PM** (in class)

**Program Due:**

**Milestone 1: Thursday, Oct 8th by 11:59 PM** 

**Milestone 2: Monday, Oct 19th by 11:59 PM** Late assignments will be penalized 20 points per day.

## Getting Started

Download [CS370\_Assign03.zip](src/CS370_Assign03.zip), saving it into the **assignment** directory.

Double-click on **CS370\_Assign03.zip** and extract the contents of the archive into a subdirectory called **CS370\_Assign03**

Open CLion, select **Open or Import** from the main screen (you may need to close any open projects), and navigate to the **CS370\_Assign03** directory. This should open the project and execute the [CMake](https://cmake.org) script to configure the toolchain.

## Written Questions

1.  Whenever large polygons are rendered with lighting in OpenGL, instead of having relatively uniform shading they are bright in one area and dimmer in others. Explain why this occurs and how this problem can be avoided. Furthermore, why are the light sources applied to *every* object instead of considering whether or not the light is blocked from one object to another, i.e. our lights do not cast *shadows*?

2.  For specular reflections, the equation in the Phong model involves the angle between the *reflection* vector and the *viewer* vector, i.e. **r** ⋅ **v**. To avoid this computation, if **v** is in the same plane as **l**, **n**, and **r** we can compute the *halfway vector* (the vector that is halfway between **l** and **v**, see hint below) as

    > **h** = (**l** + **v**)/(\|**l** + **v**\|)
    >
    > Show that the angle ψ between **n** and **h** is *half* the angle φ between **r** and **v**. In otherwords, show
    >
    > > 2 ψ = φ
    >
    > Note that this means that since we already have the vectors **n**, **l**, and **v** from the application, we can approximate the specular term without computing **r** but instead just compute **h** and find **n** ⋅ **h**.

    > **Hint:** Recall that the angle of incidence (θ between **l** and **n**) equals the angle of reflection (θ between **n** and **r**) and the vector **h** is *halfway* between **l** and **v**.
	>
	> ![image](images/assign03/Hint2.png)
	>

3. Assume that at a given pixel in the framebuffer that contains color channel values (0.2f, 0.6f, 0.4f, 1.0f), we render *two* translucent objects with the following colors

    > - (0.7f, 0.2f, 0.2f, 0.6f)
    > - (0.5f, 0.5f, 0.8f, 0.4f)
    
> What is the final blended color for that pixel using blend factors

> - **GL\_SRC\_ALPHA**/**GL\_ONE\_MINUS\_SRC\_ALPHA**
> - **GL\_SRC\_ALPHA**/**GL\_ONE** 

### Programming assignment


Write a program that draws a 3D stage scene with three "actors" and several lights using OpenGL. A sample executable is included in the **demo** directory as either **LimeLightSolWin.exe***, **LimeLightSolMac**, or **LimeLightSolLinux**. The scene should include:

-   A stage which is a rectangular cube with an elliptical front.
-   Three "actors" on the stage consisting of a cube, sphere, and octahedron.
-   A point light source shining directly down on the stage.
-   Three spotlights (one per "actor") shining on the stage. The lights should be above each actor and have different colors.
-   The following keyboard behavior:

    > -   'V' should toggle the cube sliding forward/backwards
    > -   'B' should toggle the sphere bouncing up/down
    > -   'N' should toggle the octahedron spinning/stopped
    > -   0 should toggle the point light on/off
    > -   1, 2, 3 should toggle the respective spotlights on/off

-   All animations should be system *independent*, i.e. time-based.
-   \<esc\> should quit the program.

*Hints:*

> There are additional models provided that can be used for the different actors, e.g. **octahedron.obj**, etc.
>
> Consider how to use the **half\_circle.obj** and **cylinder.obj** to create the stage edge
>
> Create various interesting lights and materials for the objects.
>
> A **lightOn[]** array is provided and passed to the shader to specify which lights to use for lighting effects (0 - off, 1 - on). Don't forget to set the corresponding element of the array as you add additional lights.
>
> **DEVELOP INCREMENTALLY**. For example, draw the geometry and attempt to add each spotlight individually.


## Grading Criteria

**The program MUST compile to receive any credit** (so develop incrementally).

**Milestone 1** - 35 points

-   Initialization (main): 5 points
-   Stage: 10 points
-   Stage material: 5 points
-   Point light source: 5 points
-   Sphere object: 5 points
-   Sphere material: 5 points

**Milestone 2** - 65 points

-   Stage edge: 10 points
-   Cube object: 5 points
-   Cube material: 5 points
-   Pyramid object: 5 points
-   Pyramid material: 5 points
-   Spotlights: 15 points
-   Animated objects: 10 points
-   Toggle spotlights: 5 points
-   Creativity: 5 points

*Be creative!* For example, enhance the geometry of the scene by making new objects in Blender, use additional animations, allow the colors of the lights to change, and/or provide enhanced shader lighting.

## Compiling and running the program

You should be able to build and run the program by clicking the small green arrow towards the right of the top toolbar.

> <img src="images/assign03/LimeLight.png" alt="LimeLight Window" height="500"/>

To quit the program simply close the window.

## Submitting to Marmoset

At the top right of the CLion window, expand the drop down menu to change the configuration to **MAKE\_ZIP** and click the green arrow

> <img src="images/assign01/MakeZip.png" alt="Make Zip" height="100"/>

You may see a configuration dialog, simply click the **Run** button and **Continue Anyway** in the Change Configuration Settings popup dialog. This should generate a **solution.zip** file in the project root directory. Log into [Marmoset](https://cs.ycp.edu/marmoset/login) and manually upload the **solution.zip** file to the **assign03\_ms1** or **assign03\_ms2** submission.

**You are responsible for making sure that your submission contains the correct file(s).**
