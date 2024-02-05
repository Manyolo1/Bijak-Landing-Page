import ActionButtons from "./actionButtons";
import Logo from "./logo";
import { Navigation } from "./navigation";


export default function Navbar(){
    return (
        <div className="
        flex
        justify-between 
        items-center px-10 border-b
        ">
            <Logo />
            <Navigation />
            <ActionButtons />
            

        </div>
      )
}