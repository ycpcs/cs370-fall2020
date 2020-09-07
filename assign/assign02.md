---
layout: default
title: "Assignment 2: Train Kept A Rollin' (hopefully not all night long)"
---

**Written Questions Due: Thursday, Sept 24th by 12:30/2:00 PM** (in class)

**Program Due:**

**Milestone 1: Monday, Sept 21st by 11:59 PM** 

**Milestone 2: Monday, Sept 28th by 11:59 PM** Late assignments will be penalized 20 points per day.

## Getting Started

Download [CS370\_Assign02.zip](src/CS370_Assign02.zip), saving it into the **assignment** directory.

Double-click on **CS370\_Assign02.zip** and extract the contents of the archive into a subdirectory called **CS370\_Assign02**

Open CLion, select **Open or Import** from the main screen (you may need to close any open projects), and navigate to the **CS370\_Assign02** directory. This should open the project and execute the [CMake](https://cmake.org) script to configure the toolchain.

## Written Questions

1.  Typically when we draw 3D objects on paper (or the board) we draw the *x* and *y* axes at 90 degrees (*x* axis pointing right and *y* axis pointing up). We then represent the *z* axis (which would be coming out of the board) by a line at -135 degrees from the *x* axis (diagonally down towards the left). This type of projection is known as an *oblique* projection. Determine the projection matrix that would render the objects in this fashion. 

	> **Hint:** In order to achieve this projection, we need to find a *transformation matrix* that takes the standard axes and converts them as follows:
	>
    > <img src="images/assign02/oblique1.png" alt="Oblique Axes" height="50"/>

    >
    > Use the above axis values to find the *rows* of a (homogeneous) transformation matrix by considering the matrix-vector products of the standard axes with the following generic projection matrix
    >
    > <img src="images/assign02/oblique2.png" alt="Generic Projection Matrix" height="100"/>

2. Given the following scene with the camera located at (x, 0, 1) looking at (x, 0, 2), sketch the viewing volume and determine the final size of the object in the rendered scene for the following projections (**Note:** the *x*-axis is ignored.) **Hint:** Use similar triangles to relate the relative sizes of the objects to the relative distances from the camera.

    > <img src="images/assign02/projection.png" alt="Projection Scene" height="300"/>

    > -  ortho(x, x, -1, 1, -1, 4)

    > -   frustum(x, x, -1, 1, 1, 4)

3.  Some of my research has been in the area of stereoscopic 3D images, which is now used extensively for VR. To create a stereoscopic 3D image, we simply render the scene from two different viewpoints (one to represent what the left eye would see and one to represent what the right eye would see) and then display the corresponding image to each eye using the VR headset. If the viewer is considered to be at the origin with an ocular spacing of Δ*x*, what are the appropriate **lookat()** functions to produce a stereo image pair? **Hint:** We need to render the scene from two different camera locations (separated by Δ*x*). Consider two possible locations where these cameras can be pointed, i.e. the **center** location, to produce a stereoscopic image.

## Programming assignment

Write a program that draws a 3D "train" scene using OpenGL. A sample executable is included in the **demo** directory as either **RollinTrainSolWin**, **RollinTrainSolMac**, or **RollinTrainSolLinux**. The scene should include:

-   A train with a body, engineer's compartment, smoke stack with funnel, six wheels spaced appropriately with spokes that rotate as the train moves.
-   A pair of tracks that have evenly spaced railroad ties below the tracks.
-   A stack of three blocks at the end of the tracks.
-   The key 'o' should select an orthographic "birds-eye" view above the scene that allows for the camera to be moved via spherical coordinates.
-   The keys 'w', 'a', 's', 'd' should rotate the camera along the azimuth and elevation angles.
-   The key 'p' should select a perspective "driver" view from the engineer's compartment that moves with the train to see the impending doom of the blocks approaching head on.
-   \<space\> should toggle the animation of the train going forward/backward down the track.
-   \<esc\> should quit the program.

*Hints:*

> Use the provided models for a cube, cylinder, torus, and cone to draw all the geometry. You will need to load the models from their respective files in **build\_geometry()**
>
> Use instance transformations to build up more complex objects, e.g. tracks, by repeatedly rendering the template models with different transformations. Suggested symbolic constants are provided in **RollinTrain.h**. The constants are interrelated as much as possible so that objects that are referenced off each other can be adjusted with a single value. **Develop the scene incrementally!** **Note:** You may want to make additional functions to draw the different parts of the scene, e.g. tracks, train, blocks, etc.
>
> An initial *orthographic* view from an *isometric* viewpoint, i.e. the camera positioned along a line going through (1,1,1) but far enough back to see the entire scene is provided. You will want to add spherical coordinate angles and adjust the camera parameters accordingly.
>
> For the *perspective* projection, consider where the camera should be located and where it should be looking at. **Note:** The location of this camera should *move* with the train.
>
> You'll probably want to have completely separate projection and camera setups for the different projection modes. A flag to toggle between the modes has been provided.

## Grading Criteria

**The program MUST compile to receive any credit** (so develop incrementally).

**Milestone 1** - 45 points

-   Initialization (main): 10 points
-   Tracks: 15 points
-   Blocks: 10 points
-   Train body: 10 points

**Milestone 2** - 55 points

-   Complete train: 15 points
-   Train perspective: 10 points
-   Display lists: 5 points
-   Animated train: 5 points
-   Dynamic orthographic camera (3rd person): 5 points
-   Dynamic perspective camera (1st person): 5 points
-   Creativity: 10 points

*Be creative!* For example, enhance the geometry of the scene or with additional animations.

## Compiling and running the program

You should be able to build and run the program by clicking the small green arrow towards the right of the top toolbar.

> <img src="images/assign02/RollinTrain1.png" alt="Rollin Train Orthographic Window" height="500"/>

> <img src="images/assign02/RollinTrain2.png" alt="Rollin Train Perspective Window" height="500"/>

To quit the program simply close the window.

## Submitting to Marmoset

At the top right of the CLion window, expand the drop down menu to change the configuration to **MAKE\_ZIP** and click the green arrow

> <img src="images/assign01/MakeZip.png" alt="Make Zip" height="100"/>

You may see a configuration dialog, simply click the **Run** button and **Continue Anyway** in the Change Configuration Settings popup dialog. This should generate a **solution.zip** file in the project root directory. Log into [Marmoset](https://cs.ycp.edu/marmoset/login) and manually upload the **solution.zip** file to the **assign02\_ms1** or **assign02\_ms2** submission.

**You are responsible for making sure that your submission contains the correct file(s).**
