import Image from "next/image";

export default function Logo(){
    return (
        <div>
          <Image 
          src="/bijak_nobg.png"
          width={200}
          height={200}
          alt="logo"
          />
        </div>
      );
    }
