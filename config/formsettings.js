'use strict';

angular.module('enqApp.data')
    .factory('formSettings', function(formData) {

        return {
            // server address
            // TODO: update grunt rewrite settings
            //destination: 'http://0.0.0.0:8000/app/register.php',
            destination: 'https://flxcloud.net/relays',

            // unique id so server can tell who this form belongs to
            appId: 'service_01',

            settings: {

                // Block or inline html (ie h1,span) allowed. Displays at top of form.
                header: '<h1>Enquiry Form</h1>',

                // All below, inline html (ie span,block) allowed.
                instructions: 'Please provide the following details. Required fields are marked by an asterisk (<b>*</b>).',
                errorsOnSubmit: 'Please check the form submissions for errors and try again.',

                buttonLabels: {
                    save: 'Submit',
                    reset: 'Reset',
                },

                fieldsetLabels: {
                    user: 'User details',
                    education: 'Education',
                    course: 'Course selection',
                    misc: 'Additional details'
                },

                requiredMarker: '<b>*</b>',
                orderCoursesBy: 'label',
                statusTimeout: 6000
            },

            inputs: [{
                    id: 'uTitle',
                    label: 'Title',

                    dataList: formData.socialTitles,
                    placeholder: 'Mr/Mrs',
                    size: 1,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please provide a title'
                        }
                    },
                    visible: true
                }, {
                    id: 'uFirstName',
                    label: 'First name',
                    placeholder: 'Firstname',
                    size: 2,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> please provide a first name'
                        }
                    },
                    visible: true
                }, {
                    id: 'uLastName',
                    label: 'Last name',
                    placeholder: 'Lastname',
                    size: 2,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> please provide a last name'
                        }
                    },
                    visible: true
                }, {
                    id: 'uDOB',
                    label: 'Date&nbsp;of Birth',
                    placeholder: 'dd/mm/yyyy',
                    size: 2,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> a valid date of birth is required'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uGender',
                    label: 'Gender',
                    placeholder: '-- Choose gender --',
                    size: 2,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> please select a gender'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uNationality',
                    label: 'Nationality',
                    placeholder: '-- Choose nationality --',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please select your nationality'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uCurrCountry',
                    label: 'Country&nbsp;of Residence',
                    placeholder: '-- Choose residence --',
                    size: 2,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> please select your current country of residence'
                        }
                    },
                    visible: true,
                },

                {
                    id: 'uEmail',
                    label: 'Email',
                    placeholder: 'email@domain.com',
                    size: 3,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> an email address is required'
                        },
                        email: {
                            value: true,
                            message: '<strong>Error:</strong> a valid email address is required'
                        }
                    },
                    visible: true
                }, {
                    id: 'uTelephone',
                    label: 'Telephone',
                    placeholder: '+00 (0) 1234 567890',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> a telephone number is required'
                        }
                    },
                    visible: true,
                },


                {
                    id: 'uEnglish',
                    label: 'English&nbsp;Level',
                    placeholder: '-- Choose level --',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please select your level of english'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uCurrSchool',
                    label: 'Current&nbsp;school',
                    placeholder: 'School name',
                    size: 3,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> a current school is required'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uCurrQual',
                    label: 'Qualification being studied',
                    placeholder: 'Degree/Certification',
                    size: 3,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> a current qualification is required'
                        }
                    },
                    visible: true,

                }, {
                    id: 'uSchoolStartYear',
                    label: 'Year started (if&nbsp;applicable)',
                    placeholder: '2010',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> a start year is required'
                        },
                        number: {
                            value: true,
                            message: '<strong>Error:</strong> a numeric value is required'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uSchoolEndYear',
                    label: 'Year completed (if&nbsp;applicable)',
                    placeholder: '2014',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> an end year is required'
                        },
                        number: {
                            value: true,
                            message: '<strong>Error:</strong> a numeric value is required'
                        }
                    },
                    visible: true,
                },


                {
                    id: 'uAttendance',
                    label: 'Course&nbsp;FT/PT',
                    size: 2,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> please select at least one in order to see the list of available courses'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uType',
                    label: 'Course&nbsp;type',
                    placeholder: '-- Choose type --',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please select one'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uSubject',
                    label: 'Subject&nbsp;area',
                    placeholder: '-- Choose subject --',
                    size: 2,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please select one'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uCourse',
                    label: 'Course',
                    placeholder: '-- Choose course --',
                    size: 3,
                    validation: {
                        required: {
                            value: true,
                            message: '<strong>Error:</strong> please select a course'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uAddtnlInfo',
                    label: 'Also interested in:',
                    size: 3,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please select at least one'
                        }
                    },
                    visible: true,
                }, {
                    id: 'uComments',
                    label: 'Comments',
                    placeholder: 'Enter Comments here.',
                    size: 4,
                    validation: {
                        required: {
                            value: false,
                            message: '<strong>Error:</strong> please enter some comments'
                        },
                        maxlength: {
                            value: 10,
                            message: '<strong>Error:</strong> input exceeds maximum length'
                        }
                    },
                    visible: true,
                }
            ]
        };
    });
