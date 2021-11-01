import type { NextPage } from 'next'

const output: NextPage  = () => {
    const onClick = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let form = e.target as HTMLFormElement
        const username = (form.elements[0] as HTMLInputElement).value
        console.log(username)
        const data = await fetch(`api/getAnime?user=${username}`)
        console.log(data)
    }
    return (
        <>
            <div className="flex justify-center ">
                <form onSubmit={(e) => onClick(e)} className="px-8 pt-6 pb-8 mb-4">
                    <div className="flex-col">
                        <div className="mb-4">
                            <label htmlFor="Mal-Username" className="block text-gray-300 text-md font-bold mb-2">My Anime List Username</label>
                            <input type="text" placeholder="Username" id="Mal-Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    <button className=" h-10 w-auto pl-2 pr-2 mt-5 rounded-md text-lg font-bold text-center bg-green-500" type="submit">Generate</button>
                    </div>
                </form>
            </div>
            

            <div className="anime-grid">
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
            </div>

        </>
    )
}

export default output
