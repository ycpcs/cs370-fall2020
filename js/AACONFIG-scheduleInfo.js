// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Lab 0: Hello, OpenGL!", "lab00.html"),
		reading: "",
		file: "CS370_Lab00"
	},
	{
		topic: new Topic("Lab 1: Basic Geometry", "lab01.html"),
		reading: "Ch. 1",
		file: "CS370_Lab01"
	},
	{
		topic: new Topic("Lab 2: Indexed Geometry and Colors", "lab02.html"),
		reading: "Ch. 3",
		file: "CS370_Lab02"
	},
	{
		topic: new Topic("Lab 3: Linear Algebra and Transformations", "lab03.html"),
		reading: "Ch. 5",
		file: "CS370_Lab03"
	},
	{
		topic: new Topic("Lab 4: User Interaction and Animation", "lab04.html"),
		reading: "",
		file: "CS370_Lab04"
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/05/2020 10:15:00")),
		new FinalExamDay("102", new Date("12/03/2020 10:15:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
