import { Suspense } from "react";
import { Outlet } from 'react-router-dom'
import Header from "./component/Header/Header";

export default function UserTemplate(){

    return (
      <>
        
          <main>
            {/* <Header/> */}
              <Suspense>
                  <Outlet/>
               
              </Suspense>
              
          </main>
  
      
      </>
    )
  }