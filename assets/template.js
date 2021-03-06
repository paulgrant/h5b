$(function()
{
	// Instanstiate html5 application
	var h5app = new Application();

	// nav object created on the window to run navigation function generated by contents links from in5 plugin
	window.nav =
	{
		to: function(p)
		{
			h5app.goToPage(p);
		}
	};
	
	// Script added to catch any console methods that by have been left in
	var method,
		noop = function(){},
		methods = [
	        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	        'timeStamp', 'trace', 'warn'
	    ],
	    length = methods.length,
	    console = (window.console = window.console || {});

    while(length--)
    {
        method = methods[length];
        
        if(!console[method])
            console[method] = noop;
    }
});