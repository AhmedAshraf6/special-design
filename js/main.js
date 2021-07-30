// check if there is local sotrage color option
let mainColors = localStorage.getItem('color-option');
if(mainColors){
    document.documentElement.style.setProperty('--main-color',mainColors);
    
    // remove Active Class From All Colors List Item
    document.querySelectorAll('.colors-list li').forEach(el=>{
       
        el.classList.remove('active');
        
        //add active class on element with data color === locale storage item
        if(el.dataset.color===mainColors){
            el.classList.add('active');
        }
    });
}
// Arrow


// toggle spin class on icon
document.querySelector('.tooggle-setting i').onclick = function(){
  
    this.classList.toggle('fa-spin');
    document.querySelector('.settings-box').classList.toggle('open');
};

// switch colors 
const colorli = document.querySelectorAll('.colors-list li');

colorli.forEach(li=>{
    
   li.addEventListener('click',(e)=>{
     
       document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
       
       //set color on local storage
       localStorage.setItem('color-option',e.target.dataset.color);
       // remove active class from activated li
       e.target.parentElement.querySelectorAll('.active').forEach(element=>{
           
          element.classList.remove('active'); 
       });
       e.target.classList.add('active');
   });
    
});
// Select Land Page
let landPage = document.querySelector('.landing-page');

// get Array of imgs 
let imgsArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];

let counterLandPage=0;

setInterval(()=>{
        
    //Change Background Image Url
    landPage.style.backgroundImage = "url('imgs/"+imgsArray[counterLandPage]+"')";
    counterLandPage++;
    if(counterLandPage==imgsArray.length)
    {
        counterLandPage=0;
    }
    
},5000);

// Select Skills Selector
let ourSkills = document.querySelector('.skills');

window.onscroll = function(){
  
    
    //Skilss offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    
    // skills outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    
    //window Height
    let windowHeight= this.innerHeight;
     
    // window currently scrolled
    let windowscrolltop = this.pageYOffset;
    if(windowscrolltop>150)
    {
    arrBtn.style.display='block';
    }
    else{
        arrBtn.style.display='none';
    }
    if(windowscrolltop>(skillsOffsetTop+skillsOuterHeight-windowHeight))
    {
       let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
       allSkills.forEach(skill=>{
          
           skill.style.width = skill.dataset.progress;
       });   
    }
    
};


// Create popup with the Image
let ourGallery = document.querySelectorAll('.gallery img');


ourGallery.forEach(img=>{
    
   img.addEventListener('click',(e)=>{
       
      // Creat overlay Element
      let overlay = document.createElement('div');
       
      // Add class to overlay
      overlay.className='popup-oveerlay';
       
      // Append Overlay To body
      document.body.appendChild(overlay);
       
      // creat Popup box
      let popupBox = document.createElement('div');
       
      // Add Class To The popup Box
      popupBox.className='popup-box';
       
      // Create Heading
       let imageHeading = document.createElement('h3');
       
      // Create Text For Heading
      let imageText = document.createTextNode(img.alt);
       
      // Append The Text To Heading
      imageHeading.appendChild(imageText);
       
      // Append The Heading To Popup Box
      popupBox.appendChild(imageHeading);
       
      // create The img
      let popupImage = document.createElement('img');
    
      // create the src image
      popupImage.src = img.src;
       
      // Append Image To popup Box
      popupBox.appendChild(popupImage);
       
      // Append popup Box to Body
      document.body.appendChild(popupBox);
       
      // Create The Close Span 
      let closeButton = document.createElement('span');
       
      // create Text to Close Button
      let closeButtonText = document.createTextNode('x');
       
      // Append Text To Close Button
      closeButton.appendChild(closeButtonText);
       
      // Add Class To Close Button
      closeButton.className = 'close-button';
       
      // Append close Button To popup Box
      popupBox.appendChild(closeButton);
       
   });
    
});

// close popup
document.addEventListener('click',(e)=>{
   

  if(e.target.className=='close-button'){
      
      // Remove Popup Box
      e.target.parentNode.remove();
      
      // Remove Overlay
      document.querySelector('.popup-oveerlay').remove();
  }
    

  if(e.target.className=='popup-oveerlay'){
      
       // Remove Overlay
       document.querySelector('.popup-oveerlay').remove();
      
      // Remove popup Box
      document.querySelector('.popup-box').remove();

  }
});

// Function To Scroll Any Section 
let allLinks = document.querySelectorAll('.links a');

function scrollSmooth(elements){
    
    elements.forEach(ele=>{
        
        ele.addEventListener('click',(e)=>{
            
           e.preventDefault();
           document.querySelector(e.target.dataset.section).scrollIntoView({
               
              behavior:'smooth'
           });    
        });
    });
}
scrollSmooth(allLinks);

// reset OPtion
document.querySelector('.Reset-option').onclick=function(){
  localStorage.clear();
    
  // window Location Reload
    window.location.reload();
};

// Toggle Menu
let toggleBtn = document.querySelector('.toggle-menu'),
    tLinks = document.querySelector('.links');

toggleBtn.onclick = function(e){
   
   e.stopPropagation();
   this.classList.toggle('toggle-active'); 
   tLinks.classList.toggle('open');
    
};
  document.addEventListener('click',(e)=>{
   if(e.target!==toggleBtn&&e.target!==tLinks)
   {
      if(tLinks.classList.contains('open'))
      {
           toggleBtn.classList.toggle('toggle-active'); 
           tLinks.classList.toggle('open');    
      } 
   }
      
});
tLinks.onclick =function(e){
  
    e.stopPropagation();
    
};
let arrBtn = document.querySelector('.arrow');
arrBtn.onclick = function(){
    window.scrollTo(0,0);
}


