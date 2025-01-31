export default function Info(){
    return(
        <div className="mt-4">
        <h1 className="text-[#04162F] text-[20px] text-center sm:text-left xl:text-[28px]">Stay up to date with our story</h1>

        <p className="text-white text-center mt-2 sm:text-left sm:w-[50%] xl:w-[40%]">Join and be the first to get the latest news about trend, promotions, and much more!</p>

     <div className="mt-4 flex flex-col gap-2 justify-center items-center sm:justify-start sm:items-start sm:flex-row">
        <input type="email" className="w-[280px] h-[50px] xl:w-[400px] xl:h-[70px] border-2 border-white rounded-full bg-transparent text-[12px] p-2 text-[black]" placeholder="Enter your email address"/>
        <div className="flex flex-col justify-center items-center ">
        <button className=" bg-white  text-black w-[150px] h-[40px] xl:w-[150px] xl:h-[60px] sm:w-[110px] sm:h-[50px] rounded-full">Join Now</button>
        </div>
     </div>
     </div>
    )
}