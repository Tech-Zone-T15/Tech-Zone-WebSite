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
export interface iProfileContext{
   updateProfile: (formData: iUpdateProfile)=> Promise<void>
   updateProfileModal: boolean;
   setUpdateProfileModal: React.Dispatch<React.SetStateAction<boolean>>
   updateProfileImage: boolean
   setUpdateProfileImage: React.Dispatch<React.SetStateAction<boolean>>
   deleteProfile: ()=> Promise<void>
   deleteProfileModal: boolean
   setDeleteProfileModal: React.Dispatch<React.SetStateAction<boolean>>
   myPosts: iMyPost[]
   setMyPosts: React.Dispatch<React.SetStateAction<iMyPost[]>>
   unfollow: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> Promise<void>

}