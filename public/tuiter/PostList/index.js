import posts from "./posts.js"
import PostItem from "./PostItem.js"

function postList() {
    return(`
        ${posts.map(item => {return(PostItem(item))
        }).join('')
    }
    `);
}

export default postList;