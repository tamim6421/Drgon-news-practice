import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-3">
        <h2 className="text-xl font-bold text-center my-2">Login With</h2>
        <button className="btn btn-outline w-full ">
         <FaGoogle className="text-2xl"></FaGoogle>
         LOgin With Google
        </button>
        <button className="btn btn-outline w-full mt-2 ">
         <FaGithub className="text-2xl"></FaGithub>
         LOgin With GitHub
        </button>
      </div>


      <div className="p-3">
        <h2 className="text-xl font-bold my-2">Find Us on</h2>
        <a className="flex p-3 items-center text-xl  gap-3 border rounded-t-lg" href="">
            <FaFacebook className="text-2xl"></FaFacebook>
            Facebook
        </a>
        <a className="flex p-3 items-center text-xl gap-3 border-x" href="">
            <FaInstagram className="text-2xl "></FaInstagram>
            Instagram
        </a>
        <a className="flex p-3 items-center text-xl  gap-3 border rounded-b-lg" href="">
            <FaTwitter className="text-2xl"></FaTwitter>
            Twitter
        </a>
      </div>

      <div className="p-3 mt-4 bg-gray-100">
        <h2 className="text-xl font-bold my-2">Q-Zone</h2>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
