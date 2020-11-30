
 
 //when having two commands, its best to put in a function or export each command line as they are declared
 export const mainFunction = () =>{

    const gbpFunction = () =>{
        var ngnNaira = 506.81
        var usdDollar = 1.33
        var inrRupies = 98.58
        var cadDollar = 1.74
        var euro = 1.12
        amount = Number(document.getElementById("currcyinput").value)
                if(selct2.value==="naira"){
                    conversion = amount * ngnNaira
                    
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }
                else if(selct2.value==="usdollars"){
                    conversion = amount * usdDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }

                else if(selct2.value==="indianruppies"){
                    conversion = amount * inrRupies
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="candollars"){
                    conversion = amount * cadDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="euros"){
                    conversion = amount * euro
                    alert (`the conversion for ${amount} is ${conversion}`)
                }  
                
                else if (selct2.value==="pounds"){
                    conversion = amount * 1
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   
    }


    

    const nairaFunction = () =>{
        var gdpounds = 0.0020
        var usdDollar = 0.0026
        var inrRupies = 0.19
        var cadDollar = 0.0034
        var euro = 0.0022
        amount = Number(document.getElementById("currcyinput").value)
                if(selct2.value==="pounds"){

                    conversion = amount * gdpounds
                    
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }
                else if(selct2.value==="usdollars"){
                    conversion = amount * usdDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }

                else if(selct2.value==="indianruppies"){
                    conversion = amount * inrRupies
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="candollars"){
                    conversion = amount * cadDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="euros"){
                    conversion = amount * euro
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   

                else if (selct2.value==="naira"){
                    conversion = amount * 1
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   
    }


    const inrFunction = () =>{
        var gdpounds = 0.010
        var usdDollar = 0.014
        var naira= 5.16
        var cadDollar = 0.018
        var euro = 0.011
        amount = Number(document.getElementById("currcyinput").value)
                if(selct2.value==="pounds"){

                    conversion = amount * gdpounds
                    
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }
                else if(selct2.value==="usdollars"){
                    conversion = amount * usdDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }

                else if(selct2.value==="naira"){
                    conversion = amount * naira
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="candollars"){
                    conversion = amount * cadDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="euros"){
                    conversion = amount * euro
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   

                else if (selct2.value==="indianruppies"){
                    conversion = amount * 1
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   
    }


    const usdFunction = () =>{
        var gdpounds = 0.75
        var naira= 386
        var cadDollar = 1.30
        var euro = 0.84
        var inrRupies = 73.81
        amount = Number(document.getElementById("currcyinput").value)
                if(selct2.value==="pounds"){

                    conversion = amount * gdpounds
                    
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }
                else if(selct2.value==="indianruppies"){
                    conversion = amount * inrRupies
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }

                else if(selct2.value==="naira"){
                    conversion = amount * naira
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="candollars"){
                    conversion = amount * cadDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="euros"){
                    conversion = amount * euro
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   

                else if (selct2.value==="usdollars"){
                    conversion = amount * 1
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   
    }
    

    const cadFunction = () =>{
        var gdpounds = 0.57
        var naira= 293.01
        var usDollar = 0.78
        var euro = 0.65
        var inrRupies = 56.77
        amount = Number(document.getElementById("currcyinput").value)
                if(selct2.value==="pounds"){

                    conversion = amount * gdpounds
                    
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }
                else if(selct2.value==="indianruppies"){
                    conversion = amount * inrRupies
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }

                else if(selct2.value==="naira"){
                    conversion = amount * naira
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="usdollars"){
                    conversion = amount * usDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="euros"){
                    conversion = amount * euro
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   

                else if (selct2.value==="candollars"){
                    conversion = amount * 1
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   
    }



    const eurFunction = () =>{
        var gdpounds = 0.89
        var naira= 460
        var usDollar = 1.19
        var cadollars = 1.55
        var inrRupies = 88
        amount = Number(document.getElementById("currcyinput").value)

        const rate = selct2.value==="pounds" ? gdpounds : selct2.value==="indianruppies" ? inrRupies : selct2.value==="naira" ? naira 
        : 0 
                if(selct2.value==="pounds"){

                    conversion = amount * gdpounds
                    
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }
                else if(selct2.value==="indianruppies"){
                    conversion = amount * inrRupies
                    alert (`the conversion for ${amount} is ${conversion}`)
                   
                }

                else if(selct2.value==="naira"){
                    conversion = amount * naira
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="usdollars"){
                    conversion = amount * usDollar
                    alert (`the conversion for ${amount} is ${conversion}`)
                }

                else if (selct2.value==="candollars"){
                    conversion = amount * cadollars
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   

                else if (selct2.value==="euros"){
                    conversion = amount * 1
                    alert (`the conversion for ${amount} is ${conversion}`)
                }   
    }

  
const overallFunction = () =>{

alert("win9n190")
convertBtn.addEventListener("click", function(){
    if (selct1.value =="pounds"){
        gbpFunction();
    }
   else if(selct1.value == "naira"){
       nairaFunction();
   }
   else if(selct1.value == "indianruppies"){
    inrFunction();
   }
   else if (selct1.value == "usdollars"){
    usdFunction();
   }
   else if(selct1.value == "candollars"){
    cadFunction();
   }
   else if(selct1.value == "euros"){
    eurFunction();
   }
// return gbpFunction();
}) 

}
return overallFunction();
}


mainFunction();

export const myFunction = (name, person) => `Her name is ${name} and she is a ${person} person`
export const theFunction = (name, person) => `Her name is ${name} and she is a ${person} person`
