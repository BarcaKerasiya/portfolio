import HTML from "../assets/html.png";
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Next from "../assets/Next.png"


const Tech = () => {
//   const tech = [
//     {
//       id: 1, 
//       src: HTML,
//       name: 'HTML',
//       style: 'shadow-orange-500'
//   },
//   {
//     id: 2, 
//     src: CSS,
//     name: 'Css',
//     style: 'shadow-blue-500'
// },
// {
//   id: 3, 
//   src: JavaScript,
//   name: 'Js',
//   style: 'shadow-yellow-500'
// },
// {
//   id: 4, 
//   src: Tailwind,
//   title: 'Tailwind',
//   style: 'shadow-sky-400'
// },
// {
//   id: 5, 
//   src: ReactImg,
//   name: 'React',
//   style: 'shadow-blue-600'
// },
// {
//   id: 6, 
//   src: Node,
//   name: 'Node',
//   style: 'shadow-green-500'
// },
// {
//   id: 7, 
//   src: Mongo,
//   name: 'Mongo',
//   style: 'shadow-green-500'
// },
// {
//   id: 8, 
//   src: GitHub,
//   name: 'Git',
//   style: 'shadow-grey-500'
// },

// ]
  return (
    <div id="tech" className=" h-fit w-full  bg-[#0a192f]">
      <div className="max-w-[1000px]  mx-auto p-4 pt-[10rem] scroll-smooth flex  flex-col justify-center w-full  h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#77B255] text-green inline">Tech</p>
          <p className="py-6">My Coding Langauges and Skills</p>
        </div>

        <div className="w-full grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
{/* 
   {
            tech.map(({id, src, name, style}) => {
              <div className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
              <img src={HTML} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >HTML</p>
            </div>
            })
          } */}
          <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg  cursor-pointer">
              <img src={HTML} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >HTML</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={CSS} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >CSS</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={JavaScript} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >Javascript</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={ReactImg} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >React.js</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={Node} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >Node.js</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg  cursor-pointer">
              <img src={Next} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >Next</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={Mongo} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >MongoDB</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={GitHub} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >GitHub</p>
            </div>
            <div className=" shadow-md hover:scale-110 duration-500 py-2 rounded-lg cursor-pointer">
              <img src={Tailwind} alt=""  className="w-20 mx-auto"/>
              <p className=" mt-4" >Tailwind</p>
            </div>
            
        </div>
        

      </div>
    </div>
  );
};

export default Tech;
