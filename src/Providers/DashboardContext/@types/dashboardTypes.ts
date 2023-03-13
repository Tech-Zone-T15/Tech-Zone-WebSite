import { Key } from "react";


export interface IDefaultProviderProps {
   children: React.ReactNode;
}
export interface IidUserLogin{
   token: string | number;
   sub: string | number;
} 
export interface Iposts{
   userId:number | string
   img:string
   content:string
   id:number | string
   comments?:any[] 
   likes:any[]
}

export interface IComments {
   id?: Key | null | undefined;
   map?: any;
   postId: number | string;
   userId: number | string;
   name?: string;
   profile_img?: string;
   comment:string;
   
}
export interface ICommentsProps {
   comments:IComments
   comment:string
   id?:number
   profile_img?:string
   name?:string
}

export interface IsendPost {
   userId: number | string;
   img: string;
   content: string;
}

export interface IUpdatePost{
   userId:string | number
   img:string
   content:string
   id: number | string
}

export interface IUpdateComments{
   id?: Key | null | undefined;
   map?: any;
   postId: number | number;
   userId: number | number;
   name?: string;
   profile_img?: string;
   comment:string;
}
export interface IsendComments{
   postId:number | string
   userId:number | string
   comment:string
}
export interface Iusers{
   age:number
   bio:string
   city:string
   comments:[]
   email:string
   id:number
   name:string
   posts: Iposts[]
   profile_img:string
}
export interface IpostsProps{
   post:Iposts
   profile_img?:string
   name?:string
   user?:Iusers
}
export interface ProfilePostProps{
   ProfilePost:Iposts
   profile_img?:string
   name?:string
   user?:Iusers
}


export interface IUserProps{
   user:Iusers
   comments?:IComments
}  
//---------------------
export interface IPostLikes{
   postId: number
   userId: number
   id: number
}
export interface IlikesPostProps{
   postLikes: IPostLikes
}
export interface ILikingPost{
   postId: string | number,
   userId: number | undefined
}
//-------------------

export interface Ifollows{
   userId: number;
   follows: number;
   id?: number
}

export interface IUserID {
   token: string;
   sub: string;
}

export interface IDashboardContext {
   sendComments: (data: IComments) => Promise<void>
   sendPost: (data: IsendPost) => Promise<void>
   getUsers : () => Promise<void>
   users: Iusers[]
   deletePost: (postId: Iposts) => Promise<void>
   editPost: (data: IUpdatePost) => Promise<void>
   setGetPost: React.Dispatch<React.SetStateAction<Iposts[]>>
   followUsers: Iusers[]
   getPosts: Iposts[]
   editcomments: (data: IUpdateComments) => Promise<void>
   getAllPosts: () => Promise<void>
   setGetComments: React.Dispatch<React.SetStateAction<IComments[]>>
   getComments: IComments[]
   deleteComments: (CommentId: IComments) => Promise<void>
   searchValue: string
   setSearchValue: React.Dispatch<React.SetStateAction<string>>
   setFilteredPosts: React.Dispatch<React.SetStateAction<string>>
   searchPostsList: Iposts[]
   loading: boolean
   getPostLikes: (postID: string | number) => Promise<void>
   postLikes: IPostLikes[]

   followedsUsers: (data: Ifollows) => Promise<void>
   setText1: React.Dispatch<React.SetStateAction<string>>
   setText2: React.Dispatch<React.SetStateAction<string>>
   setText3: React.Dispatch<React.SetStateAction<string>>
   text1: string
   text2: string
   text3:string
   likingPost: (data: ILikingPost) => Promise<void>
   unLinkingPost: (likeID: number, data: ILikingPost) => Promise<void>
   likesPosts: IPostLikes[]
   getProfilePosts: (post: Iposts) => Promise<void>
   ProfilePost: Iposts[]
}
