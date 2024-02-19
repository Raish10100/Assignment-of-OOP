// Create a Temperature class in javaScript that manages both Celsius and Fahrenheit tempeatures with getters and setters for each unit allowing for automatic conversion between the two scales.The class should have an initial state of 0°C and 32°F,and it should validate input values for temperature updates,ensuring they are numeric.when setting the temperature in either Celsius or Fahrenheit ,the class should correctly update the corresponding value in the order scale.For example,setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F .Your challenge is to implement the Temperature class following the provided code structure and requirements while ensuring that it handles conversions and input validation accurately.

class Temperature{
    constructor(){
      this._Celcius = 0;
      this._Fahrenheit = 32;
    }
  
    get getCelcius(){
      return this._Celcius;
    }
  
    get getFahrenheit(){
      return this._Fahrenheit;
    }
  

    set setCelcius(celcius){
      if(typeof celcius === 'number' && !isNaN(celcius)){
        this._Celcius = celcius;
        this._Fahrenheit = (this._Celcius * 9/5) + 32;
      }
      else{
        console.log("Invalid input");
      }
    }
  
    set setFahrenheit(fahrenheit){
      if(typeof fahrenheit === 'number' && !isNaN(fahrenheit)){
        this._Fahrenheit = fahrenheit;
        this._Celcius = (this._Fahrenheit - 32) * 5/9;
      }
      else{
        console.log("Invalid input");
      }
    }
  }
  
  
  const temperature = new Temperature();
  
  console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
  console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);
  
  temperature.setCelsius = 25;
  console.log(`Celsius: ${temperature.getCelsius}°C`);
  console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
  
  temperature.setFahrenheit = 68;
  console.log(`Celsius: ${temperature.getCelsius}°C`);
  console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);