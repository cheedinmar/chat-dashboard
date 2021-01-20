import headChat from "./header.js";
import recieved1 from "./recievedFrom1.js";
import sent1 from "./sentTo1.js";
import recieved2 from "./recievedFrom2.js"
import daysDivide from "./daysDivide.js"
import sent2 from "./sentTo2.js"
import recieved3 from "./recievedFrom3.js"
import dropUp from "./dropUpSVG.js"
import MsgBox from "./messageBox.js"

export default{
components: {
    headChat,
    recieved1,
    sent1,
    recieved2,
    daysDivide,
    sent2,
    recieved3,
    dropUp,
    MsgBox
},
template:  `
<div class="w-52%  bg-white max-h-screen overflow-y-scroll flex flex-col">
<headChat></headChat>
<main class="chat-display-input flex flex-col relative h-full">
<div class="flex flex-col px-7 scroll-messages flex-grow">
<recieved1></recieved1>
<sent1></sent1>
<recieved2></recieved2>
<daysDivide></daysDivide>
<sent2></sent2>
<recieved3></recieved3>
</div>
<div class=" flex flex-col w-full chat-input px-7">
<dropUp></dropUp>
<MsgBox></MsgBox>
</div>
</main>
</div> 
`
}