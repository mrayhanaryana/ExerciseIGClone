import { USERS} from "./users";

export const POSTS = [
    {
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg',
        user: USERS[0].user,
        likes: 7000,
        caption: 'No Way Home :(',
        profile_picture: USERS[0].image,
        comments:[
            {
                user:'Azmi',
                comment:'Cant Waiting for this!'
            }
        ],
    },
]