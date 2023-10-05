const menu = document.getElementById("menu");
const menuBtn = document.getElementById("hamberger");
const sideBar = document.getElementsByClassName("sideBar");
const viewPort = document.getElementsByClassName("viewport");
const button = document.getElementById("topNav").querySelectorAll("button");
const searchBtn = document.getElementById("searchBtn").querySelectorAll("img")[0];
const arrowBtn = document.getElementById("topNav").querySelector("img");
const videoContainer = document.getElementsByClassName("videoContainer");
const gridContainer = videoContainer[0].getElementsByClassName("grid-container");
const gridItem = videoContainer[0].getElementsByClassName("grid-item");
const API_KEY = 'AIzaSyAV9DYCd7OnPzjNtPSxJFtqDR7j0KrEIBM';
const url ='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=' 
const maxResults = 12;

//Making the Sidebar and the 
menuBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const visible = sideBar[0].style.visibility;
    const rotate = menuBtn.style.transform;
    if(visible != 'hidden' && rotate !='rotate(90deg)'){
        sideBar[0].style.visibility = 'hidden';
        menuBtn.style.transform = 'rotate(90deg)';
        viewPort[0].style.width = "1440px";
        viewPort[0].style.marginLeft = "0px";
        document.getElementById("topNav").querySelector("img").style.marginLeft = "1378px";    
    }else{
        sideBar[0].style.visibility = 'visible';
        menuBtn.style.transform = 'rotate(0deg)';
        viewPort[0].style.width = "1200px";
        viewPort[0].style.marginLeft = "240px";
        document.getElementById("topNav").querySelector("img").style.marginLeft = "1138px";
    }
})


function addButton(int){
    const topNav = document.getElementById("topNav");
    const para = document.createElement("p");
    const button = document.createElement("button");
    button.innerText = "item "+int;
    para.appendChild(button);
    topNav.appendChild(para);
}

function addItem(title,url,channel){
    const para = document.createElement("p");
    const channelDetails = document.createElement("p");
    const details = document.createElement("div");
    const videoDetails = document.createElement("div");
    const item = document.createElement("div");
    const image = document.createElement("img");
    para.innerText = title;
    item.classList.add("grid-item");
    channelDetails.innerText = channel;
    image.src = url;
    details.id = "info";
    videoDetails.id="videoInfo";
    item.appendChild(image);
    details.appendChild(para);
    details.appendChild(channelDetails);
    videoDetails.appendChild(details);
    item.appendChild(videoDetails);
    gridContainer[0].appendChild(item);
}

onload = ()=>{
    button[0].id = 'selected';
    const elements = document.getElementById("topNav").querySelectorAll("p").length;
    const visible = sideBar[0].style.visibility;
    
    if(elements<16){
        if(visible === 'hidden' && elements<16){
        const itemCount = 16-elements;
        var count = elements;
        for(let i=count;i<itemCount;i++){
            addButton(i);
            count++;
        }
    }   else{
        let itemCount = 13-elements;
        for(let i=elements;i<=itemCount;i++){
            addButton(i);
        }
    }
    }
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    gridContainer[0].innerHTML = "";
    const query = document.querySelector('input[type="text"]').value;
    console.log(query);
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=`+API_KEY)
    .then(res => {return res.json()})
    .then((data)=>{
        console.log(data);
        for(let i=0;i<data.items.length;i++){
            addItem(data.items[i].snippet.title,data.items[i].snippet.thumbnails.high.url,data.items[i].snippet.channelTitle)
        }
        console.log(data.items[0].snippet.title,data.items[0].snippet.thumbnails.high.url,data.items[0].snippet.channelTitle)
    }).catch(error => console.log('Error',error))
})

// const container = document.querySelector(".grid-container");

// let totalPosts = 0;
// function loadPosts(numPosts = 10) {
//   for (let i = 0; i < numPosts; i++) {
//     totalPosts++;
//     const post = document.createElement("div");
//     post.classList.add("post");
//     post.appendChild(document.createTextNode(totalPosts));
//     container.appendChild(post);
//   }
// }

// loadPosts();
// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     loadPosts();
//   }
// });

videoContainer.onscroll = function(){
    alert("Hello World!")
}

fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${maxResults}&regionCode=IN&key=`+API_KEY)
    .then(res => {return res.json()})
    .then((data)=>{
        for(let i=0;i<data.items.length;i++){
            addItem(data.items[i].snippet.title,data.items[i].snippet.thumbnails.standard.url,data.items[i].snippet.channelTitle)
        }
        // addItem(data.items[1].snippet.title,data.items[1].snippet.thumbnails.standard.url,data.items[1].snippet.channelTitle)
        console.log(data.items[0].snippet.channelTitle,data.items[0].snippet.title,data.items[0].snippet)
    })







