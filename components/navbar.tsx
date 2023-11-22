import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { ModeToggle } from "./ui/theme-toggle";


const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />
        <div className="flex w-full justify-end mr-4">
          <UserButton afterSignOutUrl="/" />
        </div>
        <div>
          <ModeToggle />
        </div>
    </div>
  )
}
export default Navbar;