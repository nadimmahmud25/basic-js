// https://github.com/nadimnil/basic-js

// 1.First Problem  Solution Kilometer To Meter:
function kilometerToMeter(kilometer){

    if(kilometer >= 0){

        return kilometer * 1000       // We Know That 1km is equal 1000 Meter

    }
    else
    {
        return "Distance cannot be negative" ;
    }

   
  }
        var result = kilometerToMeter(3.5);
        console.log(result);


//2. Second Problem Solution Budget Calculator:

function badgetCalculator( numberOfWatch, numberOfPhone, numberOfLaptop ) {
            
    if( numberOfWatch >= (0).toFixed && numberOfPhone >= (0).toFixed && numberOfLaptop >= (0).toFixed){

        return numberOfWatch * 50 + numberOfPhone * 100 + numberOfLaptop * 500; 
    }

    else
    {
        return "Please Input Valid Quntity" ;          
    }

   }

   var result = badgetCalculator(2,-3,1)
   console.log(result);
        

        //3.Third Problem Solution Hotel Cost:

        function hotelCost(costFirstTenDays){                        

            if(costFirstTenDays <= 10 && costFirstTenDays > (0).toFixed){        
        
                return costFirstTenDays * 100 ;        //First Ten Days Cost Per Day (100)
                
        
            }
        
            else if(costFirstTenDays <= 20 && costFirstTenDays > (10).toFixed){
        
                let costSecondTenDays = costFirstTenDays - 10;
                return costSecondTenDays * 80 + 1000 ;              // Second Ten Days Cost Per Day = 80 And including first ten days cost(1000).
            
            
            }
        
            else if(costFirstTenDays >= (21).toFixed){
        
                let extraDaysCost = costFirstTenDays - 20;
                return  extraDaysCost * 50 + 1800 ;          // Second Ten Days Cost Per Day =50 and including first and second ten days cost(1800)                   
            }
        
            else{
                return "Please Input Valid Days" ;
            }
        }
        var result = hotelCost(21.5);
        console.log(result);


    // 4.Fourth Problem Solution: Mega Friend

    function megaFriend(arrayOfName) {
        var largestName = arrayOfName[0];
        for (i = 1; i < arrayOfName.length; i++) {
            if (arrayOfName[i].length > largestName.length) {
                largestName = arrayOfName[i];
            }
        }
        if(largestName.length>0){
            return largestName;
        }
        else{
            return "Please enter a valid name."
        }
    }
    
    var result = megaFriend(['Nadim Mahmud','Nadim Mahmud Nil','Mahmud','Md Nadim Mahmud Nil','Md Nadim Mahmud','Md Mahmud','Nadim','Md Nadim Mahmud nel']);
    console.log(result);

   

  
