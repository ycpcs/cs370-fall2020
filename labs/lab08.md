---
layout: default
title: "Lab 8: Writing Shaders"
---

In the last lab we saw how to *use* programmable shaders written in GLSL by creating the shader program, associating references to the shader variables, and then passing data from the application to the shaders. The true power of modern graphics hardware, however, is unlocked by being able to *write* our own programmable shaders to produce any effect we desired. There are many different shader languages including GLSL, HLSL, cG, etc. We will be focusing on [GLSL](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language) which is the shader language for OpenGL. The structure of a shader program is very similar to C, e.g. semi-colon terminated statements, but incorporates the vector and matrix datatypes discussed in [Lab03](https://ycpcs.github.io/cs370-fall2020/labs/lab03.html). While we can get some error information if there are issues in our shader syntax, there are limited *debugging* mechanism available to help correct shader programs that simply product the wrong output (since they are only executed once they have been compiled and loaded onto the graphics card). A few debugging tools are available, such as [GLSL-Debugger](http://glsl-debugger.github.io) but it is still a challenging task to write sophisticated shaders. Since shaders control the functionality of the pipeline stages, it is *essential* to understand all the concepts we have discussed, i.e. the *mathematical implementations*, in order to effectively implement it in shader code.

## Getting Started

Navigate into the **CS370\labs** directory on your **H:** drive.

Download [CS370\_Lab08.zip](src/CS370_Lab08.zip), saving it into the **labs** directory.

Double-click on **CS370\_Lab08.zip** and extract the contents of the archive into a subdirectory called **CS370\_Lab08**

Open CLion, select **Open or Import** from the main screen (you may need to close any open projects), and navigate to the **CS370\_Lab08** directory. This should open the project and execute the [CMake](https://cmake.org) script to configure the toolchain.

## Shader Variables

### Data Types

When we write shaders we can use many of the data types we are familiar with in C/Java such as **bool**, **int**, **float**, along with identical single dimensional array and structure notation. However since the pipeline primarily performs *matrix/vector* operations, there are several [built-in data types](https://www.khronos.org/opengl/wiki/Data_Type_(GLSL\)) for vectors and matrices, similar to the ones defined in the **vmath.h** library (see [Lab03](https://ycpcs.github.io/cs370-fall2020/labs/lab03.html)), which will simplify the correspondance between application variables and shader variables. 

As a review, vector types have the form

    [b,i,u,d]vec{2,3,4}

where *[b,i,u,d]* is an optional indicator of boolean, integer, unsigned integer, or double data type (the default is **float**) and *{2,3,4}* represents the number of components in the vector. For example

```cpp
vec4 col;
```

would define a variable named **col** that is a 4x1 **float** vector.

Square matrix types have a similar form

    mat{2,3,4}
    
and for non-square types 

    mat{2,3,4}x{2,3,4}

where *{2,3,4}* represents the number of rows and columns in the matrix. NOTE: Matrices are **float**'s and are stored column-wise (OpenGL 4+ supports matrices of **double**).

Since the variables within the shaders often refer to common graphics quantities, e.g. vertices, colors, etc., in addition to standard integer indices we can refer to the elements of a **vec**? variable using the *structure fields* - **{x,y,z,w}** (vertex coordinates), **{r,g,b,a}** (color channels), or **{s,t,p,q}** (texture coordinates). For example, **col[2]**, **col.z**, **col.b**, and **col.p** all refer to the same value (*regardless* of what the vector quantity actually represents). We can also use any combination of these fields, known as *swizzling*, to refer to parts of a vector that we wish to manipulate, i.e. **col.rb** would refer to only the red (first) and blue (third) components. Furthermore, since the graphics pipeline supports vector operations (on variables with *compatible* dimensions), the standard arithmetic operators can also be used on vector/matrix quantities as a whole (rather than having to perform operations element by element).

### Type Qualifiers

There are several [type qualifiers](https://www.khronos.org/opengl/wiki/Type_Qualifier_(GLSL\)) for global shader variables. The shader global variables are then given values by the *application* and/or *transferred* between the vertex and fragment shaders. Some common qualifiers are:

-   **const** - indicates that a variable is constant to avoid inadvertently changing it within a shader.
-   **in** - indicates that a variable is receiving input value(s) from the application or prior shader stage
-   **out** - indicates that a variable will be transferring data to a subsequent stage
-   **uniform** - indicates that a variable is passed *from the appliction*, but that it will **not** change for an *entire object*. Thus a uniform variable is *fixed* from vertex to vertex within the same rendering operation.
-   **layout(location = #) in** - indicates that a variable is receiving attribute data (i.e. *per vertex*) from a vertex buffer where # represents the ordering of the variables in the corresponding buffers 

### Tasks

- Add code to **color\_mesh.vert** to add 3 uniform **mat4** variables named *model\_matrix*, *proj\_matrix*, and *camera\_matrix* which will represent the model, camera, and projection matrices

- Add code to **color\_mesh.vert** to add a uniform **vec4** variable named *vColor* which will represent the color of the object

- Add code to **color\_mesh.vert** to add a **layout(location=0) in vec4** variable named *vPosition* which will be the attribute variable for the vertex position

- Add code to **color\_mesh.vert** to add an **out vec4** variable named *oColor* which will pass the color to the fragment shader

- Add code to **fog.frag** to add an **in vec4** variable named *oColor* which will receive the color from the fragment shader

- Add code to **fog.frag** to add an **out vec4** variable named *fragColor* which will be the final output color for the fragment

- Add code to **fog.frag** to add a uniform **vec4** variable named *fogColor* which will represent the fog color

- Add code to **fog.frag** to add 2 uniform **float** variables named *fogStart* and *fogEnd* which will represent the extents of the fog range

**Note:** We will retrieve references to all these shader variables (except *oColor*) in our application's **main()** function and set these variables through the references in **render\_scene()** when we render the objects.

## Built-in Shader Variables

In addition to shader variables that we define, GLSL provides several [built-in variables](https://www.khronos.org/opengl/wiki/Built-in_Variable_(GLSL\)) for different stages of the pipeline that do not be defined but simply used within their respective shaders.  For example, the vertex shader should set an **out** variable named

```cpp
vec4 gl_Position;
```

which will be the output position for the vertex coordinates, i.e. the transformed vertex.

In the fragment shader, the variable 

```cpp
vec4 gl_FragCoord;
```

contains the (x,y) window relative coordinates (where (0,0) is the lower right corner) based on the viewport, the normalized z depth value that will be written to the depth buffer, and the (1/w) normalization factor that can be used to retrieve the original depth value. 

### Tasks

- Add code to **color\_mesh.vert** in **main()** to compute *gl_Position* as the product of the projection matrix, camera matrix, model matrix, and vertex position. **Note:** Use the proper order such that the vertex is transformed by the model matrix first, then the camera matrix, and then the projection matrix using *right multiplication*

- Add code to **color\_mesh.vert** in **main()** to set *oColor* equal to *vColor*

- Add code to **fog.frag** in **main()** to set *fragColor* equal to *oColor*

At this point you should be able to see the perspective sphere and cube with a spherical coordinate camera.

## Fog

We can now write a shader that will simulate the effect of fog, i.e. objects will dim as they move away from the camera and "into the fog". This can be a useful effect to prevent objects from appearing to be suddenly "clipped" by the far clipping plane by gradually having them blend in with the background color before they reach the far clipping plane. To accomplish this effect, we will specify a distance from the camera that we wish the fog to start, i.e. objects begin to disappear, and a distance from the camera that we wish the fog to end, i.e. objects have completely disappeared. Between these two extents, we will *linearly interpolate* the fog color with the object color (although other transition functions can also be used) based on the distance of the object within this range.

### Tasks

- Add code to **fog.frag** in **main()** to compute a **float** variable named *fog* using the equation

```cpp
(fogEnd - (gl_FragCoord.z/gl_FragCoord.w))/(fogEnd-fogStart)
```

**Note:** This equation computes the relative amount the actual (unnormalized) distance (computed by *gl\_FragCoord.z/gl\_FragCoord.w*) is within the fog range, i.e. ≤ 0 the fragment is not in the fog (is closer than *fogStart*), 0 ≤ *fog* ≤ 1 the fragment is in the fog, ≥ 1 the fragment is completely in the fog (is further than *fogEnd*).

- Add code to **fog.frag** in **main()** to **clamp()** the *fog* value between 0.0 and 1.0. **Note:** The signature for the clamp function is

```cpp
genType clamp(genType x, genType minVal, genType maxVal);
```

where **genType** is the type of value that the clamping function is being applied to.

- Add code to **fog.frag** in **main()** to compute *fragColor* by **mix()**ing the *fogColor* with *oColor* based on *fog*. **Note:** The signature for the [mix function](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/mix.xhtml) is

```cpp
genType mix(genType x, genType y, float a);
```

where **genType** is the type of value, *x* is the starting value, *y* is the ending value, and *a* is the interpolation value to compute x\*(1-a) + y\*a.

## Compiling and running the program

You should be able to build and run the program by clicking the small green arrow towards the right of the top toolbar.

At this point you should see a sphere and cube object that "disappears into the fog" as the camera moves away from the object using X and "reappears out of the fog" as the camera moves closer to the object using Z.

> <img src="images/lab06/fogScene.png" alt="Fog Scene Window" height="500"/>

To quit the program simply close the window.

Congratulations, you have now written a simple shader to create a fog effect.

Now that we have finished the basics of creating scenes, we will start to enhance the appearance of our objects starting with lighting.
