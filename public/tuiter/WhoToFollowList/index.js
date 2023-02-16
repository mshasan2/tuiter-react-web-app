import WhoToFollowListItem from './WhoToFollowListItem.js'
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
    <ul class="list-group">
        <li class="list-group-item ">
            <b class = "align-top">Who to follow</b>
        </li>
        
        ${who.map(item => {
            return(WhoToFollowListItem(item))
        }).join('')
    }
    </ul>
    `);

}

export default WhoToFollowList;