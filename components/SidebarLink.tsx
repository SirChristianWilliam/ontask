"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather"; 
// Strings ARE serializable, functions, recursion, and components (as props) are not
import { usePathname } from "next/navigation";
// "use client" is only necessary here because { usePathname } 
// only works with a client component. It's a hook, and hooks 
// only work on client components. It's also a browser API, 
// and browser api only exists in a client component.
import clsx from "clsx";
// As in the other components, clsx is a way to concatenate strings together

const icons = { Settings, User, Grid, Calendar };
// If everything was client, we wouldn't have to do this 
// mapping here. Client to client components is "free" 
// but server to client has security issues.
const SidebarLink = ({ link }) => {
    const pathname = usePathname();
    let isActive = false;

    if (pathname === link.link) {
        isActive = true;
    }

    const Icon = icons[link.icon];
    // Make sure components ALWAYS START WITH CAPITALS, 
    // Or react will not like you
    return (
        <Link href={link.link} className="w-full flex justify-center items-center">
            <Icon
                size={40}
                className={clsx(
                    "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
                    isActive && "stroke-violet-600"
                )}
            />
        </Link>
    );
};

export default SidebarLink;