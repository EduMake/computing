function loop() {
    var MinTemp = INPUT("mintemp");
    var MaxTemp = INPUT("maxtemp");
    var AirTemp = GET("airtemp");
    
    if(AirTemp < MinTemp)
    {
        OUTPUT("boiler", "ON");
    }
    else
    {
        
    }
}
