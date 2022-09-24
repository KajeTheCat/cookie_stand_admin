export default function Form({ eventHandler }) {
    return (
        <form onSubmit={eventHandler} className="flex flex-col items-center p-5 text-xl font-semibold bg-limegreen justify-center w-4/6 mx-auto mt-8 rounded-md">
            Create Cookie Stand
            <div className="flex items-center w-full p-2">
                <label>Location</label>
                <input name="location" className="w-full m-4" />
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="bg-teal rounded-md flex flex-col items-center font py-3 px-2 w-1/4">
                    <label>Minimum Customers per Hour</label>
                    <input name="minCustomers" className="w-full m-4" />
                </div>
                <div className="bg-teal rounded-md flex flex-col items-center font py-3 px-2 w-1/4">
                    <label>Maximum Customers per Hour</label>
                    <input name="maxCustomers" className="w-full m-4" />
                </div>
                <div className="bg-teal rounded-md flex flex-col items-center font py-3 px-2 w-1/4">
                    <label>Average Cookies per Sale</label>
                    <input name="avgCookies" className="w-full m-4" />
                </div>
                <button className="bg-darkgreen px-20 py-10 hover:bg-black hover:text-white">
                    Create
                </button>
            </div>
        </form>
    )
}