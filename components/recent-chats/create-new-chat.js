export default {
    template:`                    <div class="flex justify-between items-center">
    <div class="flex flex-col">
        <h3 class="text-3xl font-medium tracking-wide">Chats</h3>
        <p class ="text-brand-gray mt-2 flex items-center">
            Recent Chats
            &nbsp; &nbsp;
            <svg  class="mt-1 cursor-pointer" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#707C97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </p>
    </div>
    <button class="bg-brand rounded-lg text-white px-6 py-4 flex items-center">
    <svg class="w-4 h-4 fill-current mr-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M15 7H9V1C9 0.447 8.552 0 8 0C7.448 0 7 0.447 7 1V7H1C0.448 7 0 7.447 0 8C0 8.553 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.552 9 16 8.553 16 8C16 7.447 15.552 7 15 7Z" />
        </svg>
            
    Create New Chat</button>
    </div>
`
}

export class blessing{

    getName(){
        return "Blessing Onwunali"
    }
}