export default {
    
    template:    `    <figure class="mt-24 flex flex-col items-center">
    <img src="images/34.png" alt ="Profile picture" class="rounded-full h-20 w-20">
    <figcaption class="mt-3.5 flex items-center text-sm">
        <p class="mr-2.5 font-medium text-base" v-for ="user in users" :key ="user.id" >{{user.fname}} {{user.Lname}}</p>
<svg class="w-3 h-3.5" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 1.125L6.5 5.875L11.25 1.125" stroke="#0D1C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</figcaption>
</figure>`
}
