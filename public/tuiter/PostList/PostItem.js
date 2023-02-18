import postDescription from "./postDescription.js";
import postImg from "./postImg.js";

function PostItem(post) {
    return (`
        <div class="row border border-2 border-light pt-3 pb-3 ps-1 pe-2 border-bottom-0">
          <div class="col-1">
             <img src=${post.avatarIcon} class = "rounded-circle"
             width="55px" height="55px">
          </div>
          <div class="col-11 ">
            <div class = "ps-3">
              <div>
                <div class="row">
                    <div class="col-11">
                        <span class="text-white">
                            <b>${post.userName}</b>
                            <i class="fa-solid fa-circle-check"></i>
                        </span>
                        <span class="text-muted ps-1"> ${post.handle} </span>
                        <span class="text-muted"> &#183; ${post.time}</span>
                    </div>
                    <div class="col-1">
                        <span class="text-muted">&#8943;</span>
                    </div>
                 </div>
                 <div class="text-white mb-3">
                    ${post.title}
                  </div>          
            </div>
             
            ${post.postSourcePresent ? postDescription(post) : postImg(post)}

            <div class="ps-1 row pt-3 text-muted">
                    <div class="col-sm">
                      <div>
                        <i class="fa-regular fa-comment"></i>
                        <span class="ps-3">${post.commentCount}</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      <div>
                        <i class="fa-solid fa-retweet"></i>
                        <span class="ps-3">${post.retweetCount}</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      <div>
                        <i class="fa-regular fa-heart"></i>
                        <span class="ps-3">${post.likeCount}</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      <div>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                      </div>
                    </div>
              </div>
             
                
            </div>            
          </div>
            
        </div>

        
        
    `);
}

export default PostItem;