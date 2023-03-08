export interface IDefaultProviderProps {
   children: React.ReactNode;
}

export interface Iusers{
   userId:number
   img:string
   content:string
   id:number
}

export interface Ipost{
   userId:number
   img:string
   content:string
   id:number
}

export interface IComments{
   postId:number
   userId:number
   name:string
   profile_img:string
   comment:string
   id:number
}
export interface IsendPost{
   userId:string
   img:string
   content:string
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
   posts: Ipost[]
   profile_img:string
}
export interface IpostsProps{
   post:Ipost
   profile_img:string
   name:string
}
export interface IUserProps{
   user:Iusers
}
export interface IDashboardContext {
   sendComments: (data: IsendComments) => Promise<void>
   sendPost: (data: IsendPost) => Promise<void>
   getComments: () => Promise<void>
   getUsers : () => Promise<void>
   users: Iusers[]
   deletePost: (postId: Iusers) => Promise<void>
   editPost: (data: IUpdatePost) => Promise<void>
}
