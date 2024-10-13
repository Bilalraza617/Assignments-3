import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image from "../../public/assingmext.jpeg";
import Prisma from "../../public/prisma.png";
import Postgres from "../../public/postgress.png";
import tail from "../../public/tail.png";
import ts from "../../public/ts.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[80vh] items-center flex justify-between max-w-[70%] m-auto ">
        <div className="right w-[80%]  ml-3">
          <h1 className="font-bold text-2xl leading-4">BiLaL Raza</h1>
          <p className="text-[18px] mb-2">I am a student</p>
          <p className="text-sm  mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            fugiat aspernatur explicabo nesciunt fugit dolore labore facilis
            quis tempora, temporibus iure magnam atque debitis nemo iste
            molestias! Quod, magnam voluptas!
          </p>

          <div className="box-shadow-lg">
            <p className="text-xl font-bold">SKills</p>
            <div className="flex items-center gap-2 max-w-[100%]">
              <Image src={Prisma} alt="imge" className="h-10 w-10" />
              <Image src={Postgres} alt="imge" className="h-10 w-10 " />
              <Image src={tail} alt="imge" className="w-32" />
              <Image src={ts} alt="imge" className="h-10 w-16" />
            </div>
          </div>
        </div>
        <div className="right ">
          <Image
            className="rounded-[50%] h-[25vw] w-[30vw]"
            src={image}
            alt="image"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
