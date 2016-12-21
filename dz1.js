window.onload = function (){
	
	
	setInterval(function(){
		var timeNow = new Date();
		var Hours = timeNow.getHours();
		if(Hours < 10){
			Hours = '0'+ Hours;
		}
		var Minutes = timeNow.getMinutes();
		if(Minutes < 10){
			Minutes = '0'+ Minutes;
		}
		var Seconds = timeNow.getSeconds();
		if(Seconds < 10){
			Seconds = '0'+ Seconds;
		}
		document.getElementById('clock').innerHTML = '<h1>'+Hours+':'+Minutes+':'+Seconds+'</h1>';
	},1000)
	
	
	var btn = document.getElementById('btn');
	btn.onclick = function(event){
		var date = document.getElementById('getBirthDate').value;
		document.getElementById('result').innerHTML = date;
		var dateOfBirthDay = new Date(date);
		console.log(typeof dateOfBirthDay);
		console.log(typeof date);
		// dateOfBirthDay = dateOfBirthDay.setDate("1984-01-30");
		console.log(dateOfBirthDay);
		dateOfBirthDay.setFullYear('2016');
		var nowTime = new Date();
		nowTime = nowTime.getTime();
		dateOfBirthDay = dateOfBirthDay.getTime();
		
		if(dateOfBirthDay < nowTime){
			 var newDateofBirthDay = new Date(dateOfBirthDay);
			 newDateofBirthDay.setFullYear('2017');
			 console.log('Это те кто родился в следующем году!!' + newDateofBirthDay);
			 newDateofBirthDay = newDateofBirthDay.getTime();
			 console.log('Это те кто родился в следующем году в миллесекундак !!' + newDateofBirthDay)
			 differenceOftheTime = newDateofBirthDay - nowTime;
			differenceOftheTime = Math.ceil((differenceOftheTime/1000)/60/60/24);
			document.getElementById('result').innerHTML ="до вашего дня рождения осталось - '"  + differenceOftheTime + "' Дня";
		// dateOfBirthDay = dateOfBirthDay.setYear('2017');	
		}else if(dateOfBirthDay > nowTime){
			differenceOftheTime = dateOfBirthDay - nowTime;
			differenceOftheTime = Math.ceil((differenceOftheTime/1000)/60/60/24);
			document.getElementById('result').innerHTML ="до вашего дня рождения осталось - '"  + differenceOftheTime + "' Дня";
		}
		console.log(dateOfBirthDay);
		console.log(nowTime);
		console.log(date)
		event.preventDefault();
	};
	
	
};