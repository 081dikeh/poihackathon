function app() {

    // for the log-out/collection div 
    const openCollectionBtn = document.querySelector('#collections')
    const collectionsMenu = document.querySelector('#log-out')

    openCollectionBtn.addEventListener('click', function(){
        collectionsMenu.classList.toggle('active')

        const menuItem = collectionsMenu.querySelectorAll('[role="menuitem"]')

        const isExpanded = openCollectionBtn.attributes['aria-expanded'].value === 'true'
        openCollectionBtn.ariaExpanded = 'true';

        if(isExpanded) {
            openCollectionBtn.ariaExpanded = 'false'
        } else {
            openCollectionBtn.ariaExpanded = 'true'
            menuItem.item(0).focus();
        }

    })

    
}//for the mobile 
function appMobile() {

    // for the log-out/collection div 
    const openCollectionBtn = document.querySelector('#collectionsbtn')
    const collectionsMenu = document.querySelector('#log-out')

    openCollectionBtn.addEventListener('click', function(){
        collectionsMenu.classList.toggle('active')

        const menuItem = collectionsMenu.querySelectorAll('[role="menuitem"]')

        const isExpanded = openCollectionBtn.attributes['aria-expanded'].value === 'true'
        openCollectionBtn.ariaExpanded = 'true';

        if(isExpanded) {
            openCollectionBtn.ariaExpanded = 'false'
        } else {
            openCollectionBtn.ariaExpanded = 'true'
            menuItem.item(0).focus();
        }

    })

    
}
appMobile()

app()

function app2() {
    // for the alert
    const openNotificationMenu = document.querySelector('#notification')
    const notificationMenu = document.querySelector('#alerts')


    openNotificationMenu.addEventListener('click', function(){
        notificationMenu.classList.toggle('active')
    })
}

app2()


function removeSelectPlan() {
    //for the select plan
    let removeSelectPlanBtn = document.getElementById("remove")
    let selectPlan = document.getElementById("selectplan")
    let header = document.getElementById("header")

    removeSelectPlanBtn.addEventListener('click', function(){
        selectPlan.style.display = 'none'
        header.style.marginBottom = '6rem'

    })
}
removeSelectPlan()


function closeStore() {
    ///for the customize store
    const closeStoreBtn = document.querySelector('#close-store')
    const customizeStore = document.querySelector('.customize-store')

    closeStoreBtn.addEventListener('click', function(){
        customizeStore.classList.toggle('remove-add')
        closeStoreBtn.classList.toggle('close-store-rotate')
    })
}

closeStore();


//Automatically close the setup-content text apart from the first guide when browser loads
const closes = document.querySelectorAll(".close");
closes.forEach((close, index) => index > 0 && close.classList.add("hide"));
//ading backgroung to the first set-up
const customize = document.querySelectorAll('.customize')
customize.forEach((custom, index) => index == 0 && custom.classList.add('background'))
    

//To open and close a specific guide and add click animation
const markBtn = document.querySelectorAll('.mark-btn')
    const notMarked = document.querySelectorAll('.not-marked')
    const loading = document.querySelectorAll('.loading')
    const markedcheck = document.querySelectorAll('.marked')
    const MARKASCLICKED = 'clicked'
    const markStatusCheck = document.querySelectorAll('.shopping-mark-status')

    
//Progressbar functionality
const progressFill = document.querySelector(".progress-filled");
const progressCount = document.querySelector(".changes-range");
let checkedGuidescount = 0

const updateProgress = () => {
  progressFill.style.width = 20 * checkedGuidescount + "%";
  progressCount.textContent = checkedGuidescount;
};


//adding the animation to check or uncheck and also progress bar

markBtn.forEach((mark) => {
    const notMarked1 = mark.children[0]
    const loading1 = mark.children[1]
    const marked1 = mark.children[2]
    

    
    function marked() {
        notMarked1.classList.add('hidden')
        loading1.classList.remove('hidden')
        mark.setAttribute("disabled", "")

        
        setTimeout(() => {
            loading1.classList.add('hidden')
            marked1.classList.remove('hidden')
            mark.ariaLabel = mark.ariaLabel.replace('to', 'to undo');
            mark.classList.add(MARKASCLICKED)
            mark.removeAttribute("disabled")
           
        }, 500)
        checkedGuidescount++;
        updateProgress();
        
        
    }

    function notMarked() {
        marked1.classList.add('hidden')
        loading1.classList.remove('hidden')
        mark.setAttribute("disabled", "")
       

        setTimeout(() => {
            notMarked1.classList.remove('hidden')
            loading1.classList.add('hidden')
            mark.ariaLabel = mark.ariaLabel.replace('to undo', 'to');
            mark.classList.remove(MARKASCLICKED)
            mark.removeAttribute("disabled")
        }, 500)
        checkedGuidescount--;
        updateProgress();
    }

    function markedOrNotMarked() {
        const markedAsClick1 = mark.classList.contains(MARKASCLICKED)
        if(markedAsClick1){
            notMarked();
        }else {
            marked()
        }
    }
    mark.addEventListener('click', markedOrNotMarked)
})



//opening and closing setup guide close divs
const toggleCustomize = (i) => {
    const CONTAINSNOTHIDE = "containsnothide"

    closes.forEach((close, index) => {
        const showCustom = index == i + 1 ;
       
        
        if(showCustom) {
          close.classList.toggle("hide")
        }else {
          close.classList.add("hide");
        }
        
        if(close.classList.contains('hide')){
          close.classList.remove(CONTAINSNOTHIDE)
  
        }else {
          close.classList.add(CONTAINSNOTHIDE)
        }
  
       
      }); 
  
      customize.forEach((custom, index) => {
          const showcustom = index == i + 1;
          showcustom ? custom.style.backgroundColor = '#F6F3F6' : custom.style.backgroundColor ="#FFF"
          
      }) 
 
    
  };


