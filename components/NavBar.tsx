import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
        <nav>
           <Link href="/" className="logo group">
             <span className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-[0_0_28px_rgba(134,216,255,0.16)] backdrop-blur-md transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:shadow-[0_0_36px_rgba(134,216,255,0.26)]">
               <Image
                 src="/icons/logo2.png"
                 alt="EventHub Logo"
                 width={34}
                 height={34}
                 className="h-6 w-6 drop-shadow-[0_0_12px_rgba(134,216,255,0.3)]"
                 priority
               />
             </span>
             <p className="tracking-[0.16em] text-white/90">EventHub</p>
           </Link> 
           <ul>
            <Link href="/">Home</Link>
            <Link href="/">Events</Link>
            <Link href="/">Create Event</Link>
           </ul>
        </nav>
    </header>
  )
}

export default NavBar