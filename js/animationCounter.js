!function(a){a.fn.animationCounter=function(b){return this.each(function(){try{var c=a(this),d={start:0,end:null,step:1,delay:1e3,txt:""},e=a.extend(d,b||{}),f=e.start,g=e.end;c.text(f+e.txt);var h=function(){null!=g&&f>=g||(f+=e.step,c.text(f+e.txt))};setInterval(h,e.delay)}catch(a){alert(a+" at line "+a.lineNumber)}})}}(jQuery);