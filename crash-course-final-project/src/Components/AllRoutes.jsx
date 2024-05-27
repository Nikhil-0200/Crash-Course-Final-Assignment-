import { Routes, Route } from "react-router-dom"
import {Home} from "../Pages/Home"
import {About} from "../Pages/About"
import {Contact} from "../Pages/Contact"
import {Tickets} from "../Pages/Tickets"
import {Login} from "../Pages/Login"
import { PrivatePage } from "../Pages/PrivatePage"
import { TicketView } from "../Pages/TicketView"
import { TicketCreate } from "../Pages/TicketCreate"
import { Edit } from "../Pages/Edit"

export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={
            <PrivatePage>
              <Home />  
            </PrivatePage>
            }/>

            <Route path="/about" element={
            <PrivatePage>
              <About/>  
            </PrivatePage>
            }/>


            <Route path="/contact" element={
            <PrivatePage>
            <Contact/>
            </PrivatePage>
            }/>

            <Route path="/tickets" element={
            <PrivatePage>
            <Tickets/>
            </PrivatePage>
            }/>
            
            <Route path="/tickets/:id" element={
            <PrivatePage>
            <TicketView />
            </PrivatePage>
            } />

            <Route path="/ticketcreate" element={
            <PrivatePage>
            <TicketCreate/>
            </PrivatePage>
            
            } />

            <Route path="/ticket/edit/:id" element={<Edit/>}/>

            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}