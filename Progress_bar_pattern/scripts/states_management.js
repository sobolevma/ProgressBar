
var numberPercents;
	/*Функция задания размера Progress Bar.*/
function setProgressValue()
{
    	 var readValue = document.getElementById('volumeValue1').value%100;
         if(Number.isInteger(readValue))
		 {
			 var  readValue = document.getElementById('volumeValue1').value%100;
			 numberPercents = readValue;
			 var degree_val = 3.6*readValue; 
			
			 var degrees=degree_val+'deg';        
			 document.documentElement.style.setProperty("--degreesVolume", degrees);    
		 }
}
    
/*Функция вращения блока Progress*/
function startAnimation(){
		
		const interval = setInterval(() => {
			if (!document.getElementById('sliderAnimate').checked)
				clearInterval(interval);
			var readValue =window.getComputedStyle(document.documentElement).getPropertyValue('--degreesAnimate').replace("deg","");
			var incrementValue = readValue%360+5;
			var degrees = incrementValue+'deg';        
			document.documentElement.style.setProperty("--degreesAnimate", degrees); 
		}, 30);	

}
    
/*Функция сокрытия блока Progress*/
function hideObject(){
		if (document.getElementById('sliderHide').checked) {
            document.documentElement.style.setProperty("--opacityProgressVal", 0); 
        } else {
            document.documentElement.style.setProperty("--opacityProgressVal", 1); 
        }
}