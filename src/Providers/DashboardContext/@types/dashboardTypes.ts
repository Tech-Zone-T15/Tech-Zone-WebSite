import { Key } from "react";
import { number } from "yup";

export interface IDefaultProviderProps {
   children: React.ReactNode;
}


export interface Iposts{
   userId:number | string
   img:string
   content:string
   id:number | string
   comments: [] 
   comment: [] | string | number
}

export interface IComments {
   id: Key | null | undefined;
   map: any;
   postId: number;
   userId: number;
   name: string;
   profile_img: string;
   comment: [] | string;
   
}
export interface ICommentsProps {
   comments:IComments
   comment:string
   id?:number
   profile_img?:string
   name?:string
}

export interface IsendPost {
   userId: string;
   img: string;
   content: string;
}

export interface IsendComments {
   postId: number;
   userId: number;
   name: string;
   profile_img: string;
   comment: string;
}


export interface IUpdatePost{
   userId:string | number
   img:string
   content:string
   id: number | string
}
export interface IsendComments{
   postId:number
   userId:number
   name:string
   profile_img:string
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
export interface IUserProps{
   user:Iusers
   comments?:IComments
}
export interface IDashboardContext {
   sendComments: (data: IsendComments) => Promise<void>
   sendPost: (data: IsendPost) => Promise<void>
   getComments: () => Promise<void>
   getUsers : () => Promise<void>
   users: Iusers[]
   deletePost: (postId: Iusers) => Promise<void>
   editPost: (data: IUpdatePost) => Promise<void>
   setGetPost: React.Dispatch<React.SetStateAction<Iposts[]>>
   followUsers: Iusers[]
   getPosts: Iposts[]
   getAllPosts: () => Promise<void>

}
