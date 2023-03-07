export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>
  userLogOut: () => void;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLoad: () => void;
  getAllUser: () => Promise<void>
  allUser: IUser[]
}

export interface IDefaultProviderProps{
  children: React.ReactNode;
}

export interface IUser{
  accessToken: string;
  user: {
		id: number;
		name: string;
		email: string;
    profile_img: string;
    age: number;
    city: string;
    bio: string;
	}
}

export interface IRegisterFormValues{
	name: string;
  email: string;
  password: string;
  profile_img: string;
  age: number;
  city: string;
  bio: string;
	
}

export interface ILoginFormValues{
  email: string;
  password: string;
  
}