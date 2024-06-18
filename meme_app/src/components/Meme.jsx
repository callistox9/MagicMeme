import React from "react";
import memesData from "./memesData";
export default function Meme(){


  let url;
  
function MemeDisplay()
{
  const memeName=memesData.data.memes.name;
  const memesArray=memesData.data.memes;
  const randomNumber=Math.floor(Math.random()*memesArray.length);
   url=memesArray[randomNumber].url
  
}
    return(

      <main>
<div className="input">
<input 
className = "form-input"
type="text"
placeholder="Top Text">
</input>
<input
 className ="form-input"
 type ="text" 
 placeholder="Bottom Text">
</input>
<button className="form-button"
onClick={MemeDisplay}

>🤣Get a new meme image 🤣</button>

</div>
 </main>
    )
}

const [count, setcount]= React.useState(0)
