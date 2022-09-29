export default function Header() {
    return (
        <header className="flex flex-row justify-between p-2 text-2xl font-mono font-semibold bg-limegreen text-black">
            <h1>Cookie Stand Admin</h1>
            <div>
            <button className="bg-darkgreen text-white rounded-md text-sm p-1 m-2">Sign Out</button>
            <button className="bg-white text-black rounded-md text-sm p-1 m-2">Overview</button>
            </div>
        </header>
    )
}