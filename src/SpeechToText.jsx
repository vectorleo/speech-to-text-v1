import React, { useState } from "react";



const SpeechToText = () =>{


  const [text,setText] = useState("")
  const [listening, setlistening] = useState(false)

  // Speech Recogintion 
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  if(! recognition){
    alert = 'Speach recognition is not enabled'
  }

  alert = 'Speach recognition is enabled'

  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "en-Us";


  recognition.onresult = (event)=>{
    setText(event.results[0][0].transcript)
  }
  
  const StartListening = ()=>{
    recognition.start();
    setlistening(true)
  }
  
  const StopListening = ()=>{
    recognition.stop();
    setlistening(false)
  }

  return(
      <div className="flex flex-2/3 items-center justify-center bg-slate-100">
        <div className="w-80 h-64 rounded-lg bg-white shadow-xl flex flex-col p-6 items-center ">
          <h1 className="text-neutral-600 font-bold mb-4">🎤Speech To Text</h1>
        
          <div>
            {!listening? (
              <button 
              onClick={StartListening}
              className=" bg-emerald-300 p-2 w-40 rounded-lg text-white mb-4 cursor-pointer flex items-center justify-center"
              > <i className="fa-solid fa-microphone mr-1"></i> <p>Start Listening</p> </button>
            ):(
            <button 
              onClick={StopListening}
              className=" bg-red-400 p-2 rounded-lg w-40 text-white mb-4 cursor-pointer flex items-center justify-center"
              > <i className="fa-solid fa-microphone-slash mr-1 "></i> <p>Stop Listening</p></button>
              )}
          </div>

          <textarea value={text} readOnly className="bg-slate-50 rounded-lg w-[250px] h-[90px] px-2  "></textarea>
        </div>
      </div>
      
  );
};

export default SpeechToText;