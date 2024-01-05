import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaClock, FaUser} from "react-icons/fa"
import SideBar from "../components/SideBar";


const Singleblog = () => {
  const data = useLoaderData();
  console.log(data)
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 ">
          Single Blog
        </h2>
      </div>
      {/* {blog details} */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              minus velit consequuntur harum officia et, perferendis obcaecati
              quia suscipit tenetur id dolorum veritatis nesciunt recusandae
              quis molestias ullam sint voluptatum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              esse, quisquam eius accusantium porro rem consectetur unde,
              quibusdam nemo officiis iste voluptates! Nostrum aspernatur, iste
              ducimus natus autem dolores consequatur!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur eum dicta quibusdam magni corrupti vitae id ab animi
              eveniet reiciendis fugiat veritatis blanditiis nemo, ex porro
              ratione earum! Quasi, molestias?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              minus velit consequuntur harum officia et, perferendis obcaecati
              quia suscipit tenetur id dolorum veritatis nesciunt recusandae
              quis molestias ullam sint voluptatum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              esse, quisquam eius accusantium porro rem consectetur unde,
              quibusdam nemo officiis iste voluptates! Nostrum aspernatur, iste
              ducimus natus autem dolores consequatur!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur eum dicta quibusdam magni corrupti vitae id ab animi
              eveniet reiciendis fugiat veritatis blanditiis nemo, ex porro
              ratione earum! Quasi, molestias?
            </p>
          </div>
        </div>
        <div>
            <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
