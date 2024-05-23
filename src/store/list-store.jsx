import { useReducer,createContext } from "react";


export const ListPost=createContext({
    listPost:[],
    addPost:()=>{},
    deletePost:()=>{}
    });

const PostListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type === 'delete_post'){
        newPostList=currPostList.filter((post)=>post.id !== action.payload.postId);
    }else if(action.type === 'add_post'){
        newPostList=[action.payload,...currPostList]
    }
    return newPostList;
};

const PostListProvider=({children})=>{

    const[listPost,dispatchList]=useReducer(PostListReducer,Default_List);

    const addPost=(userId,title,content,tag)=>{
        dispatchList({
            type:'add_post',
            payload:{
                id:Date.now(),
                title:title,
                body:content,
                userId:userId,
                tags:tag
            }
        })
    }


    const deletePost=(postId)=>{
        dispatchList({
            type:'delete_post',
            payload:{
                postId
            }
        })
    }

return <ListPost.Provider value={{listPost, addPost, deletePost}}>
            {children}
        </ListPost.Provider>
}

const Default_List=[{
    id:'1',
    title:'The Future of Artificial Intelligence in Healthcare',
    body:`Dive into the fascinating world of AI in healthcare! Discover how cutting-edge technology is revolutionizing patient care, diagnosis, and treatment. The future is here, and it's AI-powered!`,
    userId:'user-1',
    tags:['AI','HealthTech','TechTrends']
},
{
    id:'2',
    title:'FinancialFreedom',
    body:'Take control of your financial future with these smart money habits that will set you on the path to wealth and security. From budgeting tips to investment strategies, learn how to make your money work for you and achieve financial freedom. Start building your nest egg today!',
    userId:'user-2',
    tags:['PersonalFinance', 'MoneyManagement']
},
{
    id:'3',
    title:'ArtInspiration',
    body:`Wanderlust and street art go hand in hand! Exploring the city streets and stumbling upon vibrant murals is pure magic. Each stroke tells a story, each color evokes emotion. Let's get lost in the beauty of urban art!`,
    userId:'user-3',
    tags:['Street Art', 'Wanderlust']
}];

export default PostListProvider