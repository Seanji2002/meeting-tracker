const NewMeeting = () => {
    return (
        <div>
            <form action="/api/sanityHandler" method="POST" className="ml-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Meeting Title:</label>
                    <input type="text" id="title" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="timeEstimate" className="block text-gray-700 text-sm font-bold mb-2">Estimated Time:</label>
                    <input type="number" id="timeEstimate" name="timeEstimate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <input type="text" id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <button type="submit" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default NewMeeting;
