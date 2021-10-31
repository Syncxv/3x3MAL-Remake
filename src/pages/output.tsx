import type { NextPage } from 'next'

const output: NextPage  = () => {
    const onClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log("hey")
        fetch("api/getAnime?user=bruh")
    }
    return (
        <>
            <div className="w-full flex justify-center ">
                <form className="px-8 pt-6 pb-8 mb-4">
                    <div className="flex-col w-full">
                        <div className="mb-4">
                            <label htmlFor="Mal-Username" className="block text-gray-300 text-sm font-bold mb-2">My Anime List Username</label>
                            <input type="text" placeholder="Username" id="Mal-Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    <button className=" h-10 w-auto pl-2 pr-2 mt-5 rounded-md text-lg font-bold text-center bg-green-500" type="submit" onClick={(e) => onClick(e)}>Generate</button>
                    </div>
                </form>
            </div>
            
            <div className="grid justify-center items-center h-screen">
                3x3 Grid
            </div>
        </>
    )
}

export default output
