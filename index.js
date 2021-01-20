import aside from "./components/aside-bar/index.js"
import section1 from "./components/recent-chats/index.js"
import section2 from "./components/direct-message/index.js";
const mainApp = {
    data() {
      return {
        counter: 0,
        req : {
          "path": "/project-x",
          "recursive": true,
          "include_media_info": true,
          "include_deleted": false,
          "include_has_explicit_shared_members": false,
          "include_mounted_folders": true,
          "include_non_downloadable_files": true
         },
        access_Token:"JAidJlqw-DgAAAAAAAAAAS6dGhT6GO99ch8dPgoD5OsjbBLvie0LRjNRl7ruUdrN",
        path_display:{"path": "/project-x/index.json"},
        id : {"id" : "nfXiKBiVzIAAAAAAAAAFQ"},
        link: "https://content.dropboxapi.com/apitl/1/ApeE04gpa8dWotRpJH0DAUteN9YasS45A8aLoJMO3rZhcsY1ucZKfDngw61wm5q25VW9E6Voo3rbCT-v_fFStTu9thUVw4KFpC2bNqZ0hMBNg2EGhdcccGKFM6LHHM1yU7CZA4tQzwhB756x7V7vaZQ4alYkel7TPqDnLvaOlbKJq72udTye5bCw_8Ubf8nnJMmM7N5cfML4qplfIZgATG38sx1D5prLH5_DLBcbIqz-uxZ2IMSXAywfVKfg2s9-LFyl-Nukoq4IWg3rGP5FXALMVitqziv0kFstgfeFsgXDBd47U7l4oV0ZbiYCKXpiKPuNtYg_QuB0oSStEJsU7jDp",
        users:[]

      }
    },
    methods:{
      
      getFolderList(){
        //get the folder list from dropbox using xmlhttp request
        var oReq = new XMLHttpRequest();
        oReq.open("POST", "https://api.dropboxapi.com/2/files/list_folder");  //open initializes a request

        //on loading the request, call and eventListener to watch the folderList
        oReq.addEventListener("load", this.watchFolderList);
        //watchFolderList is a nested method that checks if the event.target.status is successful or not
        //upon successful watchFolderList method goes to the event.target.response and JSON.parse it
        
        //set request Header
        oReq.setRequestHeader("Authorization", "Bearer " + this.access_Token);
        oReq.setRequestHeader("Content-Type", "application/json")
        oReq.send(JSON.stringify(this.req)); // sends the request
      },
      watchFolderList(event){
        if(event.target.status >= 200 && event.target.status < 300){
          let result = JSON.parse(event.target.response)
          console.log(result)
        }else
        return false
      },

      getTempLink(){
        var get = new XMLHttpRequest();
        get.open("POST", "https://api.dropboxapi.com/2/files/get_temporary_link");
        get.addEventListener('load', this.watchFolderList);
        get.setRequestHeader("Authorization", "Bearer " + "t_2EuB5G9UwAAAAAAAAAAWuPvaoCJV3n4Qh5bW7jJyHgZuoxS4X5K-avU-O9xFmV");
        get.setRequestHeader("Content-Type", "application/json")
        get.send(JSON.stringify(this.path_display));

      },
     
      useLink(){
        var link = new XMLHttpRequest();
        link.open("GET", this.link );
        link.addEventListener("load",this.displayUI);
        
        link.send();


      },
      displayUI(event){
        if(event.target.status >= 200 && event.target.status < 300){
          let result = JSON.parse(event.target.response)
          console.log(result)
          this.users = result;
          console.log(this.users)
        }else
        return false
      }
    
    },
    template: `<side-bar></side-bar>
    <section class="w-4/5 flex justify-evenly pt-12" style="background: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);">
    <sectionA></sectionA>
    <sectionB></sectionB>
    </section>`,


    created(){
    //  this.getFolderList();
    //  this.getTempLink();
      // this.getReq();

      this.useLink();
      
    }
  }
  
 const app = Vue.createApp(mainApp)
 app.component('side-bar', aside);
 app.component('sectionA', section1);
 app.component('sectionB', section2)
 app.mount('#root')