import profile from "./profile.js"
import navV from "./nav.js"
import logOut from "./logout.js"
export default {
    components:{
        profile,
        navV,
        logOut
    },
    data(){
        return {}
    },
    props:['fname', 'Lname'],
    mounted(){

    },
    
    template:  `            <aside class="w-1/5 bg-white pb-12 h-screen sticky top-0 overflow-y-auto" style="box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);"> 
    <profile></profile>
    <navV></navV>
    <logOut></logOut>

</aside>`
}