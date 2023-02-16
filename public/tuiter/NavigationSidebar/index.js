const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-house"></i>
       <span class = "d-none d-xl-inline d-inline">Home</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-hashtag"></i>
       <span class = "d-none d-xl-inline d-inline">Explore</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-bell"></i>
       <span class = "d-none d-xl-inline d-inline">Notifications</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-envelope"></i>
       <span class = "d-none d-xl-inline d-inline">Messages</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-bookmark"></i>
       <span class = "d-none d-xl-inline d-inline">Bookmarks</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-list"></i>
       <span class = "d-none d-xl-inline d-inline">Lists</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-user"></i>
       <span class = "d-none d-xl-inline d-inline">Profile</span>
       </a>
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-ellipsis"></i>
       <span class = "d-none d-xl-inline d-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;