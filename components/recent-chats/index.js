import createNewChat,{blessing} from "./create-new-chat.js";
import search from "./search.js";
import articleOne from "./articleOne.js";
import articleTwo from "./articleTwo.js";
import articleThree from "./articleThree.js";
// console.log(blessing)
export default{
    components:{
        createNewChat,
        search,
        articleOne,
        articleTwo,
        articleThree
    },
    template:

    `
    <div class="w-35.5% flex flex-col max-h-screen overflow-y-hidden ">
    <createNewChat></createNewChat>
    <search></search>
    <div class="flex flex-col mt-6 max-h-screen overflow-y-scroll overflow-x-hidden pr-3.5 max-height-cal pb-4">
    <articleOne></articleOne>
    <articleTwo></articleTwo>
    <articleThree></articleThree>
    </div>
    </div>
    `
}