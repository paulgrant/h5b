'use strict';

angular.module('enqApp.data')
	.constant('courseData', {
		
		/*	
			*   This list defines each course.
			*   All ids should be unique.
			*   type must match one of 'types.id' below.
			*   attendance must match one of 'attendance.id' below.
			*   subject must match one of 'subjects.id' below.
			*/
		list:[
			{ id:'course1a-pt', label: 'Economics 1a un pt', type:'undergraduate', attendance:'partTime', subject:'economics'},
			{ id:'course2a-pt', label: 'Science 2a un pt Longvalue long long long', type:'undergraduate', attendance:'partTime', subject:'science'},
			{ id:'course3a-pt', label: 'Fine Arts course 3a un pt', type:'undergraduate', attendance:'partTime', subject:'fineArts'},
			
			{ id:'course1b-pt', label: 'Computing 1b pg pt', type:'postgraduate', attendance:'partTime', subject:'computing'},
			{ id:'course2b-pt', label: 'Economics 2b pg pt Longvalue long long long', type:'postgraduate', attendance:'partTime', subject:'economics'},
			{ id:'course3b-pt', label: 'Science course 3b pg pt', type:'postgraduate', attendance:'partTime', subject:'science'},
			
			{ id:'course1c-pt', label: 'Fine Arts 1c esl pt', type:'esl', attendance:'partTime', subject:'fineArts'},
			{ id:'course2c-pt', label: 'Computing 2c esl pt Longvalue long long long', type:'esl', attendance:'partTime', subject:'computing'},
			
			{ id:'course1d-pt', label: 'Economics 1d phd pt', type:'phd', attendance:'partTime', subject:'economics'},
			{ id:'course2d-pt', label: 'Science course 2d phd pt', type:'phd', attendance:'partTime', subject:'science'},
			
			
			{ id:'course1a-ft', label: 'Economics 1a un ft', type:'undergraduate', attendance:'fullTime', subject:'economics'},
			{ id:'course2a-ft', label: 'Science 2a un ft Longvalue long long long', type:'undergraduate', attendance:'fullTime', subject:'science'},
			{ id:'course3a-ft', label: 'Fine Arts course 3a un ft', type:'undergraduate', attendance:'fullTime', subject:'fineArts'},
			{ id:'course4a-ft', label: 'Computing course 4a un ft', type:'undergraduate', attendance:'fullTime', subject:'computing'},
			
			{ id:'course1b-ft', label: 'Economics 1b pg ft', type:'postgraduate', attendance:'fullTime', subject:'economics'},
			{ id:'course2b-ft', label: 'Science 2b pg ft Longvalue long long long', type:'postgraduate', attendance:'fullTime', subject:'science'},
			{ id:'course3b-ft', label: 'Fine Arts course 3b pg ft', type:'postgraduate', attendance:'fullTime', subject:'fineArts'},
			{ id:'course4b-ft', label: 'Computing course 4b pg ft', type:'postgraduate', attendance:'fullTime', subject:'computing'},
			
			{ id:'course1c-ft', label: 'Economics 1c esl ft', type:'esl', attendance:'fullTime', subject:'economics'},
			{ id:'course2c-ft', label: 'Science 2c esl ft Longvalue long long long', type:'esl', attendance:'fullTime', subject:'science'},
			{ id:'course3c-ft', label: 'Fine Arts course 3c esl ft', type:'esl', attendance:'fullTime', subject:'fineArts'},
			
			{ id:'course1d-ft', label: 'Computing 1d phd ft', type:'phd', attendance:'fullTime', subject:'computing'},
			{ id:'course2d-ft', label: 'Economics course phd 2d ft', type:'phd', attendance:'fullTime', subject:'economics'},
			{ id:'course3d-ft', label: 'Science course 3d phd ft', type:'phd', attendance:'fullTime', subject:'science'}
		],
		
		subjects:[
			{ id:'economics', label:'Economics'},
			{ id:'science', label:'Science'},
			{ id:'fineArts', label:'Fine Arts'},
			{ id:'computing', label:'Computing'}
		],
		
		types:[
			{ id:'undergraduate', label:'Undergraduate'},
			{ id:'postgraduate', label:'Postgraduate'},
			{ id:'esl', label:'ESL'},
			{ id:'phd', label:'PhD'}
		],
		
		/* 
			*	Selected key (selected) can be true or false - setting 'true' pre-selects the checkbox and ensures all relevant courses are displayed
			*/
		attendance:[
			{ id: 'fullTime', selected: true, label:'Full Time'},
			{ id: 'partTime', selected: true, label:'Part Time'}
		]
	});