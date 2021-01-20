export default{
    template: `
    <article class="px-10 flex flex-col py-7 mt-5 bg-white rounded-lg shadow-md relative">
    <div class="flex justify-between">
        <div class="flex">
        <div class="w-12 h-12 relative">
        <img src="images/25.png" class="rounded-full object-center h-full w-full">
<svg class="absolute" style="top: 0px; left: 1px" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="4.25" fill="#00C305" stroke="white" stroke-width="1.5"/>
    </svg>
            
        </div>
        <div class="flex flex-col">
            <h5 class="text-sm font-semibold ">
                Jared Sunn
            </h5>
            <div class="flex items-end mt-1.5">
        <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="#2A8BF2" fill-opacity="0.25"/>
            <circle cx="6" cy="6" r="2" fill="#2A8BF2"/>
            </svg>
                    

        <p class="text-sm leading-3" style="color: #2A8BF2;">
            records voice message
        </p>
            </div>
        </div>
        </div>
        <time class="text-brand-gray text-sm" datetime="" >1 minute ago</time>
    </div>
    <p  class="mt-4 mr-5 text-left text-brand-gray text-xs relative leading-relaxed flex">

        <svg class="mr-2" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00002 1.33335C4.3566 1.33335 3.83335 1.8566 3.83335 2.50002V5.41669C3.83335 6.0601 4.3566 6.58335 5.00002 6.58335C5.64344 6.58335 6.16669 6.0601 6.16669 5.41669V2.50002C6.16669 1.8566 5.64344 1.33335 5.00002 1.33335ZM7.33335 5.41669C7.33335 6.70352 6.28685 7.75002 5.00002 7.75002C3.71319 7.75002 2.66669 6.70352 2.66669 5.41669V2.50002C2.66669 1.21319 3.71319 0.166687 5.00002 0.166687C6.28685 0.166687 7.33335 1.21319 7.33335 2.50002V5.41669ZM8.50002 4.83335C8.82261 4.83335 9.08335 5.09469 9.08335 5.41669C9.08335 7.47002 7.5591 9.16869 5.58335 9.45335V10.6667H6.81127C7.09885 10.6667 7.33335 10.9012 7.33335 11.1888V11.3113C7.33335 11.5989 7.09885 11.8334 6.81127 11.8334H3.18877C2.90119 11.8334 2.66669 11.5989 2.66669 11.3113V11.1888C2.66669 10.9012 2.90119 10.6667 3.18877 10.6667H4.41669V9.45335C2.44094 9.16869 0.916687 7.47002 0.916687 5.41669C0.916687 5.09469 1.17744 4.83335 1.50002 4.83335C1.8226 4.83335 2.08335 5.09469 2.08335 5.41669C2.08335 7.02494 3.39177 8.33335 5.00002 8.33335C6.60827 8.33335 7.91669 7.02494 7.91669 5.41669C7.91669 5.09469 8.17744 4.83335 8.50002 4.83335Z" fill="#231F20"/>
</svg>
            
        Voice message (01:15) 
        <small class="text-white bg-red-500 absolute h-4 w-4 rounded-full items-center justify-around top-3 -right-7 flex brand-box-shadow">
           <em class="not-italic">1</em>
        </small>
    </p>
    <div class="flex mt-6">
    <button class="relative mr-5 bg-brand text-white px-2 py-3 flex items-center text-sm leading-3" style="background: rgba(42, 139, 242, 0.25);
    border-radius: 20px; color: #2A8BF2;">
       <svg class="mr-2" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00003 10.6667H4.50003C4.04003 10.6667 3.66669 10.2934 3.66669 9.83335C3.66669 9.37335 4.04003 9.00002 4.50003 9.00002H7.00003C7.46003 9.00002 7.83336 9.37335 7.83336 9.83335C7.83336 10.2934 7.46003 10.6667 7.00003 10.6667ZM3.66669 13.1667C3.66669 12.7067 4.04003 12.3334 4.50003 12.3334H9.50003C9.96086 12.3334 10.3334 12.7067 10.3334 13.1667C10.3334 13.6267 9.96086 14 9.50003 14H4.50003C4.04003 14 3.66669 13.6267 3.66669 13.1667ZM11.537 15.6667H2.46278C2.20778 15.6667 2.00028 15.48 2.00028 15.25V2.75002C2.00028 2.52002 2.20778 2.33335 2.46278 2.33335H7.00028V4.95835C7.00028 6.26835 8.01445 7.33335 9.26195 7.33335H12.0003V15.25C12.0003 15.48 11.7928 15.6667 11.537 15.6667ZM8.66695 3.14835L10.952 5.66668H9.26195C8.93362 5.66668 8.66695 5.34918 8.66695 4.95835V3.14835ZM13.4503 5.94002L8.91362 0.94002C8.75528 0.765854 8.53195 0.666687 8.29612 0.666687H2.46278C1.28862 0.666687 0.333618 1.60169 0.333618 2.75002V15.25C0.333618 16.3984 1.28862 17.3334 2.46278 17.3334H11.537C12.7111 17.3334 13.667 16.3984 13.667 15.25V6.50002C13.667 6.29252 13.5895 6.09335 13.4503 5.94002Z" fill="#2A8BF2"/>
        </svg>
        Files (x2)</button>
    <button class="relative text-white px-3 py-3 flex items-center" style="background: rgba(255, 51, 102, 0.25);
    border-radius: 20px; color: #FF3366;">
    <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 6.33333C5.35667 6.33333 5.91667 5.77333 5.91667 5.08333C5.91667 4.39333 5.35667 3.83333 4.66667 3.83333C3.97667 3.83333 3.41667 4.39333 3.41667 5.08333C3.41667 5.77333 3.97667 6.33333 4.66667 6.33333ZM13 13.8333H3.4675L9.305 8.96249C9.51 8.78833 9.88167 8.78916 10.0825 8.96166L13.8333 12.1617V13C13.8333 13.46 13.46 13.8333 13 13.8333ZM3 2.16667H13C13.46 2.16667 13.8333 2.54 13.8333 3V9.97L11.1642 7.69333C10.3392 6.99167 9.04833 6.99167 8.23083 7.68833L2.16667 12.7483V3C2.16667 2.54 2.54 2.16667 3 2.16667ZM13 0.5H3C1.62167 0.5 0.5 1.62167 0.5 3V13C0.5 14.3783 1.62167 15.5 3 15.5H13C14.3783 15.5 15.5 14.3783 15.5 13V3C15.5 1.62167 14.3783 0.5 13 0.5Z" fill="#FF3366"/>
        </svg>
        
    
    Photo</button>
    </div>
   
    </article>
`
}