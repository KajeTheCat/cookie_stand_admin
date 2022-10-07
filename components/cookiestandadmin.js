import CookieStandForm from "./form";
import CookieStandTable from "./table";
import useResource from '../hooks/useResource';

import Footer from "../components/footer.js";

export default function CookieStandAdmin({ user, logout }) {

    const { resources, deleteResource } = useResource();

    return (
        <div>

            <header className="flex flex-row justify-between p-2 text-2xl font-mono font-semibold bg-limegreen text-black">
                <h1>Cookie Stand Admin</h1>
                <div>
                    <button className="bg-white text-black rounded-md text-sm p-1 m-2">{user.username}</button>
                    <button className="bg-darkgreen text-white rounded-md text-sm p-1 m-2" onClick={logout}>Signout Out</button>
                    <button className="bg-white text-black rounded-md text-sm p-1 m-2">Overview</button>
                </div>
            </header>

            <CookieStandForm />
            <CookieStandTable stands={resources} deleteStand={deleteResource} />
            <Footer />
        </div>
    );
}