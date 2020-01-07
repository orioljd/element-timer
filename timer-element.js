"use strict";
let timerElement = {
  defaultOptions: {milliseconds: 40, color: '#4caf50', height: '3px', selector: '.element-timer'},
  width: 1,
  intervalId: undefined,
  elem: undefined,
  subelem: undefined,
  callback: function(){},
  run: function(options, callback){
    this._options = this._extend({}, this.defaultOptions);
    
    if (typeof callback==='function') this.callback = callback;
    
    if (typeof options==='object') this._extend(this._options, this.defaultOptions, options);
    else if (typeof options==='number') this._options.milliseconds = options;
    else if (typeof options==='string') this._options.selector = options;
    else if (typeof options==='function') this.callback = options;
        
    this.width = 1;
    this.elem = document.querySelector(this._options.selector);
    this.subelem = document.createElement("div");
    this.subelem.style.width = this.width+'%';
    this.subelem.style.height = this._options.height;
    this.subelem.style.backgroundColor = this._options.color;
    this.elem.appendChild(this.subelem);
    
    this.intervalId = setInterval(this.frame, this._options.milliseconds, this);
  },
  frame: function(element){
    if (element.width >= 100) {
        clearInterval(element.intervalId);
        element.callback();
    } else {
        element.width++;
        element.subelem.style.width = element.width + '%'; 
    }
  },
  _options: {},
  _extend: function() {
    for(var i=1; i<arguments.length; i++)
      for(var key in arguments[i])
        if(arguments[i].hasOwnProperty(key))
          arguments[0][key] = arguments[i][key];
    return arguments[0];
  }
};
