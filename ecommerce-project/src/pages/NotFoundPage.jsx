import { Header } from "../components/Header";
import './NotFoundPage.css'

export function NotFoundPage(){
  return(
    <>
      <title>Error 404</title>
      <Header />
      <p className="error">Error 404</p>
    </>
    
  );
}