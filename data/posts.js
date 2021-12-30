import { USERS} from "./users";

export const POSTS = [
    {
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg',
        user: USERS[2].user,
        likes: 7000,
        caption: 'No Way Home :(',
        profile_picture: USERS[2].image,
        comments:[
            {
                user:'Azmi',
                comment:'Cant Waiting for this!'
            }
        ],
    },

    {
        imageUrl:'https://static.zerochan.net/Ousama.Ranking.full.3467526.jpg',
        user: USERS[1].user,
        likes: 5000,
        caption: 'DAISUKI!',
        profile_picture: USERS[1].image,
        comments:[
            {
                user:'Ariq',
                comment:'Anone anone ^-^'
            },

            {
                user:'mrayhanaryana',
                comment:'cot'
            },

        ],
        
    },
]