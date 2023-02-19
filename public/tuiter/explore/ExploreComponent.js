import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
         <div class="row">
              <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                <div class="input-group mb-3">
                    <input type="text" class="form-control rounded-pill wd-fAwesome"
                        placeholder="&#xf002; &nbsp; &nbsp; Search Tuiter"
                        aria-label="Search Tuiter"
                        aria-describedby="basic-addon1">
                    </div>
               </div>
               <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 text-center pt-1 text-primary">
                    <h4><a class = "align-top" href = "explore-settings.html">
                    <i class="fa-solid fa-gear"></i></a></h4>
              </div>
         </div>
           <ul class="nav mb-2 nav-tabs">
               <li class="nav-item">
                   <a class="nav-link active" href="for-you.html">For you</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="trending.html">Trending</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="news.html">News</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="sports.html">Sports</a>
               </li>
               <li class="nav-item d-sm-none d-md-inline">
                   <a class="nav-link" href="entertainment.html">Entertainment</a>
               </li>
           </ul>
           
                
           <div class="row" id="box-search">
                <div class="wd-thumbnail">
                    <img src="../../images/starship_spacex.jpeg" alt="" class="img-responsive w-100">
                    <div class="wd-caption">
                        <div class="ms-4 h2">SpaceX's Starship</div>
                    </div>
                </div>
           </div>
           ${PostSummaryList()}


    `);
}

export default ExploreComponent;