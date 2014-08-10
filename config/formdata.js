'use strict';

angular.module('enqApp.data')
	.constant('formData', {
		
		socialTitles : [
			'Dame',
			'Dr',
			'Miss',
			'Mr',
			'Mrs',
			'Ms',
			'Prof',
			'Sir'
		],
				
		genders : [
			'Male',
			'Female',
			'Other'
		],
		
		// The user's level of english proficiency		
		englishLevels : [
			'C2',
			'C1',
			'B2',
			'B1',
			'A2',
			'A1'
		],
		
		// Miscellaneous extras the user can request information about
		// id must be unique
		// set 'selected': true to pre-select input
		// 'label' is string only.
		additionalInfo : [
			{'id':'locInfo', 'label': 'Location Information', 'selected': false },
			{'id':'scholarships', 'label': 'Scholarships', 'selected': false },
			{'id':'costs', 'label': 'Costs of Living', 'selected': false },
			{'id':'visaReq', 'label': 'Visa Requirements', 'selected': false },
			{'id':'englishLangStudies', 'label': 'English Language Studies', 'selected': false },
			{'id':'accommodation', 'label': 'Accommodation', 'selected': false }
		],
	});
