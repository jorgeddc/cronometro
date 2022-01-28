import React from 'react';
let run
let sec = 1;
let min = 1;
let hor = 1;
const Start = () =>{
    document.querySelector('.startButton').disabled = true;
    run = setInterval( 
        function runStart()
        {
            const second = document.querySelector('.second')
            const minute = document.querySelector('.minute')
            const hour = document.querySelector('.hour')
            if ( sec<=9){second.innerHTML = `0${sec++}`} 
            else{second.innerHTML = sec++}
            
            if (sec>=60){
                second.innertHTML= '00' 
                 sec=0;
                 
                 
                
                 if ( min<=9){minute.innerHTML = `0${min++}`} 
                 else{minute.innerHTML = min++}
                 return
                
         }
         if (min>=60){
            minute.innertHTML= '00' 
             min=0;
           
             if ( hor<=9){hour.innerHTML = `0${hor++}`} 
             else{hour.innerHTML = hor++}
             return
            
     }
            

            },1000);
        }
        const Clear = () =>{
            
            clearInterval(run)
         document.querySelector('.startButton').disabled = false;
           
            document.querySelector('.second').innerHTML='00';
            sec=0;
            document.querySelector('.minute').innerHTML='00';
            min=0;
            document.querySelector('.hour').innerHTML='00';
            hor=0;



        
        }
        
        const Stop = () =>{
         document.querySelector('.startButton').disabled = false;

           clearInterval(run)
           console.log('para ', sec)
        }

        // const reinicio = () =>
        // {
        //     second.innertHTML= '00' 
        // }
    
const App = () =>{

   
    return (
        <> 
            <div className='contenedor-crono'>
            <h1 className='hour'>00 </h1> :<h1 className='minute'> 00</h1>  :<h1 className='second'>00</h1> </div>
            <div className="contenedor-button">  <button className='startButton'onClick = {Start}>start</button>
            <button onClick={Clear}>clear</button>
            <button  onClick = {Stop}>stop</button>
            </div>
        </>
      
        )
   
}



export default App;