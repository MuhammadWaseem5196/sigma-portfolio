import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
export default function Home() {
  return (
      
    <div className="m-0  p-[4%]  h-auto w-screen flex justify-center    ">

      {/* main div */}

      <div className="h-auto w-[80%]  bg-[#CFA6A61C;] ">
         {/* nevbar */}
         <div className="float-end mt-10 mr-10 text-sm font-thin">
         <Link href={"#"}> <span>Works</span> </Link>&nbsp;&nbsp;&nbsp;
         <Link href={"#"}> <span>Blog</span> </Link>&nbsp;&nbsp;&nbsp;
         <Link href={"#"}> <span>Contact</span> </Link>
         </div>
         {/* hero */}
         <div className="w-[100%] flex justify-center ">
         <div className="h-auto w-[75%]  mt-28 flex items-center" >
          <div className="w-[50%]">
              {/* heading */}
              <h1 className="text-3xl font-extrabold">Hi, i am <br /> Muhmmad Waseem <br /> Web Developer</h1>
              <p className="text-sm pt-5 pb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing  vel architecto magni repellat commodi laudantium maxime eligendi officiis ea voluptatibus, earum nam voluptatum sit?</p>
             
              {/* button */} 
              <button className="w-32 h-8 bg-[#F98585;] text-sm text-whit">Download resume</button>
              
              </div>
              <div className="ml-28 "> 
                {/* images */}
              <Image src={'/images/123.jpeg'} alt="profile" height={200} width={200} className="rounded-full"></Image>
              
              </div>
         </div>
         </div>
              {/* blog */}   
            <div className="w-[100%] h-80 bg-[#F4E2E2;] mt-20 pl-40 pr-40 pt-5 ">
              <div className="flex justify-between text-sm ">
                     <h3>Recent Post</h3><h3 className="text-red-400">View all </h3>
              </div>
               {/* content 1 */}   
               <div className="flex justify-between pt-3">
               <div className="bg-white w-[48%] h-60 p-6 font-bold">
                <h1>Making a design system from scratch</h1>
                <h3 className="text-[12px] font-thin mt-4 mb-4">12 Feb 2024 &nbsp;&nbsp;  |&nbsp;&nbsp; Desighn, Pattern</h3>
               <p className="text-[10px] font-thin text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius quod eligendi incidunt repudiandae, ullam quam quasi modi aspernatur autem voluptatum enim dolores ut voluptatibus harum, cum, ipsam non et.</p>
               </div>
               {/* content 2 */} 
               <div className="bg-white w-[48%] h-60 p-6 font-bold">
               <h1>Making a design system from scratch</h1>
               <h3 className="text-[12px] font-thin mt-4 mb-4">12 Feb 2024 &nbsp;&nbsp;  |&nbsp;&nbsp; Desighn, Pattern</h3>
               <p className="text-[10px] font-thin text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius quod eligendi incidunt repudiandae, ullam quam quasi modi aspernatur autem voluptatum enim dolores ut voluptatibus harum, cum, ipsam non et.</p>
              
               </div>
               </div>
                 
            </div>
             {/* content 2 strt*/}
             <div className="w-[100%] pl-40 pr-40 mt-6">
               <p className="font-bold text-[12px]">Featured Works</p>
               <div className="flex  mt-4 mb-10">
                {/* image*/}
                <div>
                  <Image src={'/images/Rectangle 30.png'} height={350} width={350} alt="picture"></Image>
                </div>
                {/* contetn*/}
                <div className="pl-4">
                  <h2 className="font-bold">Designing Dashboards</h2>
                  <span className="  bg-[#F98585;] text-[9px] p-1 pl-2 pr-2 rounded-3xl text-white">2020</span>
                  <span className=" text-[10px] ml-3 font-extralight">Dashboard</span>
                  <p className="text-[9px] text-justify w-[80%] pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis exercitationem dolores maxime quo nemo minima laboriosam quisquam, cumque explicabo delectus totam veniam. Animi, similique explicabo. Veritatis commodi non laudantium ducimus!</p>
                </div>

               </div>


               <div className="flex  mt-4 mb-10">
                {/* image*/}
                <div>
                  <Image src={'/images/Rectangle 32.png'} height={350} width={350} alt="picture"></Image>
                </div>
                {/* contetn*/}
                <div className="pl-4">
                  <h2 className="font-bold">Designing Dashboards</h2>
                  <span className="  bg-[#F98585;] text-[9px] p-1 pl-2 pr-2 rounded-3xl text-white">2020</span>
                  <span className=" text-[10px] ml-3 font-extralight">Dashboard</span>
                  <p className="text-[9px] text-justify w-[80%] pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis exercitationem dolores maxime quo nemo minima laboriosam quisquam, cumque explicabo delectus totam veniam. Animi, similique explicabo. Veritatis commodi non laudantium ducimus!</p>
                </div>

               </div>


               <div className="flex  mt-4 pb-20">
                {/* image*/}
                <div>
                  <Image src={'/images/Rectangle 34.png'} height={350} width={350} alt="picture"></Image>
                </div>
                {/* contetn*/}
                <div className="pl-4">
                  <h2 className="font-bold">Designing Dashboards</h2>
                  <span className="  bg-[#F98585;] text-[9px] p-1 pl-2 pr-2 rounded-3xl text-white">2020</span>
                  <span className=" text-[10px] ml-3 font-extralight">Dashboard</span>
                  <p className="text-[9px] text-justify w-[80%] pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis exercitationem dolores maxime quo nemo minima laboriosam quisquam, cumque explicabo delectus totam veniam. Animi, similique explicabo. Veritatis commodi non laudantium ducimus!</p>
                </div>

               </div>
             </div>
             {/* content 2 strt*/}
              {/* footer start*/}
              <div className="w-[100%] h-auto pt-8 pb-8  bg-[#faf9f9]">
              <div className="flex flex-row gap-10 text-2xl justify-center">
                <span><FaFacebookSquare /></span><span><FaInstagram /></span> <span><FaTwitter /></span> <span><FaLinkedin /></span>
                
              </div>
              <h5 className="text-center font-bold mt-4">Copyright @2020 All rights reserved</h5>
              </div>

              {/* footer end*/}

      </div>

    </div>

  );
}
