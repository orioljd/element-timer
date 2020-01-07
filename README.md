# timer-element
Prints a timer line on an element specified, when it's completed executes a callback if it is specified.
## Examples of use
```javascript
timerElement.run(30); // 30 milliseconds for each 1% of progresing
timerElement.run("#identDiv"); // timer-element querySelector
timerElement.run(function(){alert("This is the callback");}); // After timer-element executes uses this function as a callback
timerElement.run({color: "#000"}); // When using an object, it modifies the properties of the timer line
timerElement.run({color: "#000"}, function(){alert("This is the callback passed as second parameter");}); // Pass callback in second parameter
```
## default options
You can modify default optoins by 
```javascript
timerElement.defaultOptions = {milliseconds: 40, color: '#4caf50', height: '3px', selector: '.element-timer'};
// You have to specify all the options listed above
```
