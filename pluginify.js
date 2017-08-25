/*
* We call these (anonymous) "Immediately-Invoked Function Expression" or an "immediately invoking function"
* We pass it jQuery as a parameter - we do like this to provide modularity and also encapsulation
* - We pass the function jQuery (defined by our include file)
* - What is the $? It's a alias for jQuery
* - What is $.fn? It's an alias to the jQuery prototype property
*/
(function ($) {
    $.fn.pluginify = function(par) {
        // These can go above the $fn declaration too as we're offering it
        // proper encapsulating, instead of just declaring it as per usual
        // We set a minimum too of -100
        var domObject = this;
        var pluginParameters = par;
        var counter = (pluginParameters.start > -100) ? pluginParameters.start : -100 ;
        var speed = pluginParameters.random * pluginParameters.maximum;
        var interval;

        // Add some content before the setInterval starts
        domObject.html(counter);

        // Do some of the processing for what our plugin actually does
        interval = setInterval(function() {
            domObject.html(counter);
            counter++;
            if (counter>100) {
                domObject.addClass('winner');
                clearInterval(interval);
            }
        }, speed);

        // return the DOM so we can used chain
        return domObject;
    };
}(jQuery));
