import PostSummaryItem from "./PostSummaryItem.js";
import Post from "./post.js";

function test_postsumary() {
    $('#wd-test-postsummary').append(`
    <h3>Test Post Summary</h3>
    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-danger">
            <h3>Nav Side Bar</h3>
        </div>
       <div class="col-10 col-lg-7 col-xl-6 bg-primary">
            ${PostSummaryItem(Post[0])}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
            <h3>Right Side bar</h3>
            
       </div>
    </div>
    
    
    
    `);
}

$(test_postsumary)