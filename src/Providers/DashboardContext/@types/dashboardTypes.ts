export interface IDefaultProviderProps {
   children: React.ReactNode;
}

export interface Ipost {
   userId: number;
   img: string;
   content: string;
   id: number;
}

export interface IComments {
   postId: number;
   userId: number;
   name: string;
   profile_img: string;
   comment: string;
   id: number;
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

export interface Iusers {
   name: string;
   email: string;
   profile_img: string;
   age: number;
   city: string;
   bio: string;
   id: number;
}


export interface IUpdatePost{
   userId:string
   img:string
   content:string
}
export interface IsendComments{
   postId:number
   userId:number
   name:string
   profile_img:string
   comment:string
}
export interface IpostProps{
   post:Ipost
}

export interface IDashboardContext {
   sendComments: (data: IsendComments) => Promise<void>
   sendPost: (data: IsendPost) => Promise<void>
   getComments: () => Promise<void>
   // getPosts: () => Promise<void>
   posts: Ipost[]
   deletePost: (postId: Ipost) => Promise<void>
   editPost: (data: Ipost[], postId: Ipost) => Promise<void>
    followUsers: Iusers[];
}
