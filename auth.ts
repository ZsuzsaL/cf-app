import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const credentialsConfig =CredentialsProvider({
name:"Credentials", 
credentials: {
email:{
label:"Email",
type: "email"},
password: {
label:"Password",
type: "password"}
},
async authorize(credentials){
if(credentials.email= "test@test.org" && credentials.password === "123") //replace with real database check
return {
name: "Test User" // in real word senario user object
}
else return null
}})
 
export const config=  {
  providers: [Google, credentialsConfig],
callbacks: {
authorized({request, auth}){
const {pathname}= request.nextUrl
if(pathname==="/profile") return !!auth
return true
}
}
} satisfies NextAuthConfig

export const {handlers, auth, signIn, signOut}=NextAuth(config)