import { useContext, useEffect } from "react"
import { DynamicHeader } from "../../components/DynamicHeader"
import PerfilSelect from "../../components/PerfilSelect"
import PostsSelectPerfil from "../../components/PostsSelectPerfil"
import { DashboardContext } from "../../Providers/DashboardContext"


const SelectPerfilPage= () => {
   const {ProfilePost,getUsers,getProfilePosts} = useContext(DashboardContext)

   useEffect(() => {
      getUsers();
   }, []);

   return (
      <>
      <DynamicHeader
            text1="Voltar"
            text2="LogOut"
            location1="/dashboard"
            location2="/out"
         />
         <figure>
            <img
            className="foto-capa"
            src="https://s3.amazonaws.com/gupy5/production/companies/7825/career/18358/images/2021-08-24_14-01_mainImage.png"
            alt="capa"
            />
         </figure>
      <main>
         <section>
               <PerfilSelect ProfilePost={ProfilePost[0]}/>
         </section>

         <section>
            <ul>
                  {ProfilePost.map(post =><PostsSelectPerfil post={post} key={post.id}/>)}
            </ul>

         </section>
      </main>
      </>
   )
}

export default SelectPerfilPage