import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import { delay } from "@/lib/async";
// The data for this page is on this page. It is self contained. 
// If the data was passed down as a prop from the page.tsx in the 
// app folder, we would not have been able to use the 
// skeleton loading ( which is a server process not client function )

const getData = async () => {
  await delay(1000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async () => {
  const user = await getData();

  return (
    <Card className="w-full py-4 relative">
      <div className="mb-4">
        <h1 className="text-3xl text-gray-700 font-bold mb-4">
          Hello, {user.firstName}!
        </h1>
        <h4 className="text-xl text-gray-400">
          Check your daily tasks and schedule
        </h4>
      </div>
      <div>
        <Button size="large">Today's Schedule</Button>
      </div>
    </Card>
  );
};

export default Greetings;