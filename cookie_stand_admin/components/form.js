export default function Form({ eventHandler }) {
    return (
        <form onSubmit={eventHandler} className="flex flex-col items-center p-5 text-xl font-semibold bg-teal justify-center w-4/6 mx-auto mt-8 rounded-md border-2 border-limegreen">
            <div className="flex flex-row items-center w-4/6">
                <div className="flex flex-col items-center w-full p-2">
                    <label>ADD LOCATION</label>
                    <input type="text" placeholder="  Cookie Stand Location" text="grey" name="location" className="w-full m-4" />
                </div>
                <div className="flex flex-row">
                    <button className="bg-darkgreen w-full hover:bg-black hover:text-white">
                        CREATE STAND
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="rounded-md flex flex-col items-center text=grey text-sm py-3 px-8 w-2/4">
                    <label>MINIMUM CUSTOMERS PER HOUR</label>
                    <input type="text" placeholder="  0" name="minCustomers" className="w-full m-4" />
                </div>
                <div className="rounded-md flex flex-col items-center text=grey text-sm py-3 px-8 w-2/4">
                    <label>MAXIMUM CUSTOMERS PER HOUR</label>
                    <input type="text" placeholder="  0" name="maxCustomers" className="w-full m-4" />
                </div>
                <div className="rounded-md flex flex-col items-center text=grey text-sm py-3 px-8 w-2/4">
                    <label>AVERAGE COOKIES PER SALE</label>
                    <input type="text" placeholder="  0" name="avgCookies" className="w-full m-4" />
                </div>
            </div>
        </form>
    )
}