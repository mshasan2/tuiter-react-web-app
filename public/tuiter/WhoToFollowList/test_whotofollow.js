import WhoToFollowListItem from './WhoToFollowListItem.js'
import who from "./who.js";
import WhoToFollowList from './index.js';


function test_whoToFollow() {
    $('#wd-test-whotofollow').append(`
        <h1>Test Who to follow</h1>
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-danger">
            <h3>Nav Side Bar</h3>
        </div>
       <div class="col-10 col-lg-7 col-xl-6 bg-primary">
            <h3>ExploreComponent</h3>
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
            ${WhoToFollowList()}
            
       </div>
    </div>
    `);

}

$(test_whoToFollow);