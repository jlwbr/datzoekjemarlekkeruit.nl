export default function Page({ params: { name } }: { params: { name: string } }) {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex flex-col items-center justify-center">
                <img src="https://source.unsplash.com/random/500X500/?meme" className="w-96 h-96 rounded-full p-10" />
                <h1 className="text-4xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase">{name} dat zoek je maar lekker uit</h1>
            </div>
        </div>
    );
}