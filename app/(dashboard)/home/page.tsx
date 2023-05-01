// import { delay } from "@/lib/async";
import Greetings from "@/components/Greetings";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import { delay } from "@/lib/async";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import NewProject from "@/components/NewProject";

const getData = async () => {
    await delay(1500);
    const user = await getUserFromCookie(cookies())
    const projects = await db.project.findMany({
        where: {
            ownerId: user?.id,
        },
        include: {
            tasks: true,
        },
    });
    return { projects };
}
// A difference of using Suspense is that the rendering happens on 
// THE SERVER: no client side rendering or javascript is used to create 
// the skeleton loading effect.
// It also makes it so we don't have to set up the conditional 
// logic to determine when to toggle (or not) a loading animation component,
// without sending javascript to the client. It's a built in, so it does it 
// in the background, and it's predictable and casche-able.
export default async function Page() {
    const { projects } = await getData();
    return (
        <div className="h-full overflow-y-auto pr-6 w-full">
            <div className=" h-full  items-stretch justify-center min-h-[content]">
                <div className="flex-1 grow flex">
                    <Suspense fallback={<GreetingsSkeleton />}>
                        <Greetings />
                    </Suspense>
                </div>
                <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
                    {projects.map((project) => (
                        <div className="w-1/3 p-3" key={project.id}>
                            <Link href={`/project/${project.id}`}>
                                <ProjectCard project={project} />
                            </Link>
                        </div>
                    ))}
                    <div className="w-1/3 p-3">
                        <NewProject />
                    </div>
                </div>
                <div className="mt-6 flex-2 grow w-full flex">
                    <div className="w-full"><TaskCard /></div>
                </div>
            </div>
        </div>
    );
}