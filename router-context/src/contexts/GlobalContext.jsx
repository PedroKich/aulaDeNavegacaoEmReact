import React, { children, useState } from 'react'
import { createContext } from 'react';

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

let usuarioLogado = 'Silly boyo'
const [usuarios, setUsuarios] = useState([
{
    id: Date.now()+1,
    nome: "Wortox",
    email: "happyFaunHappyImp@hotmail.com"
},
{
    id: Date.now()+2,
    nome: "RWQFSFASXC",
    email: "ShadowBnuy@Outlook.com"
},
{
    id: Date.now()+3,
    nome: "America chavez",
    email: "AQuaseUnica@gmail.com"
},
{
    id: Date.now()+4,
    nome: "Satoru Gojo",
    email: "OMaisForte@gmail.com"
},
{
    id: Date.now()+5,
    nome: "Chesire cat",
    email: "{object Object}"
},
])
   


    return(
        <GlobalContext.Provider value={{usuarioLogado, usuarios, setUsuarios}}>
            {children}
        </GlobalContext.Provider>
    )
}

