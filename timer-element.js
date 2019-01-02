"use strict";
let timerElement = {
  options: {miliseconds: 40, color: '#4caf50', height: '3px', selector: '.element-timer'},
  width: 1,
  intervalId: undefined,
  elem: undefined,
  subelem: undefined,
  callback: function(){},
  run: function(options, callback){
    if (typeof callback==='function') this.callback = callback;
    
    if (typeof options==='object') this._extend(this.options, options);
    else if (typeof options==='number') this.options.miliseconds = options;
    else if (typeof options==='string') this.options.selector = options;
    else if (typeof options==='function') this.callback = options;
        
    this.width = 1;
    this.elem = document.querySelector(this.options.selector);
    this.subelem = document.createElement("div");
    this.subelem.style.width = this.width+'%';
    this.subelem.style.height = this.options.height;
    this.subelem.style.backgroundColor = this.options.color;
    this.elem.appendChild(this.subelem);
    
    this.intervalId = setInterval(this.frame, this.options.miliseconds, this);
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
  _extend: function() {
    for(var i=1; i<arguments.length; i++)
      for(var key in arguments[i])
        if(arguments[i].hasOwnProperty(key))
          arguments[0][key] = arguments[i][key];
    return arguments[0];
  }
};
