(function(){
    var addCss = function(file) {
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL(file);
	document.head.appendChild(style);
    };
    addCss('issues.css');
    
    //$('.progress').hide();
    //$('#issue_tree').prev().hide(); // <hr>
    //$('#issue_tree').hide();
    
    $('#history > div').each(function() {
	var details = $(this).find('.details');
	if (details.size() == 1) {
	    details.hide();
            
	    $(this).find('h4').addClass(function() {
		if ($(this).children().size() == 2) return 'journal-h4';
	    }).click(function() {
		details.slideToggle('fast');
	    }).hover(function() {
		$(this).toggleClass('journal-hilit');
	    }).append('...');
	}
    }).filter(':odd').addClass('journal-odd');
})();
