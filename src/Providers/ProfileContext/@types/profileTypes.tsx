import { IUser } from "../../UserContext/@types";

export interface iUpdateProfile {
   email: string;
   name: string;
   profile_img?: string;
   city: string;
   bio: string
}
export interface iMyPost{
   userId: number;
   img: string;
   content: string;
   id: number
}

export interface iMyPostProps{
   myPosts: iMyPost[]
}

export interface iFollowersList {
   userId: number;
   follows: number;
   id: number;
   user: IUser
}

export interface ifollowingObj {
   userId: number;
   follows: number;
   id: number;
}

export interface iPost{
   userId: string | number;
   img: string;
   content: string;
}

export interface iProfileContext{
   updateProfile: (formData: iUpdateProfile)=> Promise<void>
   updateProfileModal: boolean;
   setUpdateProfileModal: React.Dispatch<React.SetStateAction<boolean>>
   updateProfileImage: boolean
   setUpdateProfileImage: React.Dispatch<React.SetStateAction<boolean>>
   deleteProfile: ()=> Promise<void>
   deleteProfileModal: boolean
   setDeleteProfileModal: React.Dispatch<React.SetStateAction<boolean>>
   unfollow: (id: number)=> Promise<void>
   getMyPosts: ()=> Promise<void>
   myPosts: iMyPost[]
   getFollowers: ()=> Promise<void>
   followersList: iFollowersList[]
   getUsersProfile: ()=> Promise<void>
   followingList: ifollowingObj[]
   editMyPost: (formData: iMyPost, postId: number)=> Promise<void>
   deleteMyPost: (postId: number)=> Promise<void>
   follow: (userIdToFollow: number)=> Promise<void>
   publishAPost: (dataForm: iPost)=> Promise<void>
}