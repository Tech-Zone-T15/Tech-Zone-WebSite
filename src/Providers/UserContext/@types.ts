export interface IUserContext {

   loading: boolean;
   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
   user: IUser | null;
   userRegister: (formData: IRegisterFormValues) => Promise<void>;
   userLogOut: () => void;
   userLogin: (formData: ILoginFormValues) => Promise<void>;
   typeWritter: (title: HTMLElement, content: string) => void;
   setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
   load: boolean
}

export interface IDefaultProviderProps {
   children: React.ReactNode;
}

export interface IUser {
   id: number;
   name: string;
   email: string;
   password: string;
   profile_img: string;
   age: number;
   city: string;
   bio: string;
}

export interface IUserID {
   token: string;
   sub: string;
}

export interface IRegisterFormValues {
   name: string;
   email: string;
   password: string;
   profile_img: string;
   age: number;
   city: string;
   bio: string;
}

export interface ILoginFormValues {
   email: string;
   password: string;
}

