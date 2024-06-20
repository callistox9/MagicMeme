import React from "react";
import memesData from "./memesData";
export default function Meme(){


  let url1;
  const [memeImage, setMemeImage]=React.useState("")
  
function MemeDisplay()
{
  //const memeName=memesData.data.memes.name;
  const memesArray=memesData.data.memes;
  const randomNumber=Math.floor(Math.random()*memesArray.length);
   url1=memesArray[randomNumber].url
  setMemeImage(url1)

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

<img className="image--displayed" src ={memeImage}></img>

 </main>
    )
}
/*isGoingOut==true;
const k = (isGoingOut )? "yes " : "no";
console.log(k);

function changeMind()
{

}
<button onClick></button>*/