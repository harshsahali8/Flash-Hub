
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
    <div>
     <Link href={"/"} className="md:hidden">
        <Image 
        src={'/logo/FlashHub.png'} 
        alt="logo"
        width={200}
        height={200}
        className="p-10"
        />
     </Link>

     <Link href={"/"} className="hidden md:block">
        <Image 
        src={'/logo/FlashHub.png'} 
        alt="logo"
        width={200}
        height={200}
        />
     </Link>



    </div> );
}
 
export default Logo;