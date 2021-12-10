function getTaxiCount(passengersCount) {
    //VA
    if (passengersCount < 1) return -1;
    //Pro..
    if (passengersCount <= 4) return "1 car 4 seat to be " + 1;
    
    let calcCar7 = Math.trunc(passengersCount / 7); 
    let calcCar4 = passengersCount % 7;
    
    if (calcCar4 > 4) { 
          calcCar7 = calcCar7 + 1;
    } else if(calcCar4 > 1) {
    calcCar4 = 1;
    }
    
    if (calcCar4 < 1) return calcCar7 + " car 7 seat to be " + calcCar7;
    if(calcCar4 >= 1) return calcCar7 + " car 7 seat and " + calcCar4 + " car 4 seat to be " + calcCar7;
}
    console.log(getTaxiCount(4));
    console.log(getTaxiCount(12));
    console.log(getTaxiCount(10)); 
    console.log(getTaxiCount(20));
    console.log(getTaxiCount(35));

