import {
  IconHeart,
  IconMessageCircle,
  IconSend,
  IconThumbDown,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

function FormComment(props) {
  const textAreaRef = useRef(null);
  const [body, setBody] = useState("");

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const storeComment = async (e) => {
    const data = { props, body };
    e.preventDefault();

    // try {
    //   const url = "status/" + props.identifier + "/comment";
    //   let response = await axios.post(url, data);
    //   console.log(response.data);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [body]);

  return (
    <div className="space-y-4">
      {/* first comment */}
      <form onClick={storeComment}>
        <div className="flex space-x-2 items-start w-full">
          <img
            src="https://i.pravatar.cc/30"
            className="w-8 h-8 rounded-full lg:ml-0 border border-gray-100"
            alt="image"
          />
          <textarea
            ref={textAreaRef}
            value={body}
            onChange={handleChange}
            rows={1}
            placeholder="Write a comment"
            className="w-full p-2 overflow-hidden resize-none text-xs rounded-sm border-b border-gray-300 focus:outline-none focus:border-b focus:border-blue-300"
            {...props}
          />
          <button type="submit">
            <IconSend size={20} stroke={1} strokeLinejoin="miter" />
          </button>
        </div>
      </form>
      {/* second comment */}
      {/* <div>
          <div>
            <div className="flex space-x-2 py-4 items-start w-full">
              <img
                src="https://i.pravatar.cc/30"
                className="w-8 h-8 rounded-full lg:ml-0 border border-gray-100"
                alt="image"
              />
              <div className="space-y-2 text-xs">
                <p className="font-semibold">Diki Dwi Hermawan</p>
                <p className="text-gray-600">Just now</p>
                <p className="p-2 rounded-lg tracking-tight bg-gray-200">
                  Testtt
                </p>
                <div className="flex items-center space-x-6 ">
                  <div className="flex space-x-1">
                    <button>
                      <IconHeart size={20} stroke={1} strokeLinejoin="miter" />
                    </button>
                    <span>20</span>
                  </div>
                  <div className="flex space-x-1">
                    <button>
                      <IconMessageCircle
                        size={20}
                        stroke={1}
                        strokeLinejoin="miter"
                      />
                    </button>
                    <span>4</span>
                  </div>
                </div>
                <div>
                  <textarea
                    rows={1}
                    placeholder="Write a comment"
                    className="w-full p-2 overflow-hidden resize-none text-xs rounded-sm border-b border-gray-300 focus:outline-none focus:border-b focus:border-blue-300"
                    {...props}
                  />
                </div>
              </div>
            </div>
  
            <div className="flex space-x-2 px-10 pb-4 items-start w-full">
              <img
                src="https://i.pravatar.cc/30"
                className="w-8 h-8 rounded-full lg:ml-0 border border-gray-100"
                alt="image"
              />
              <div className="space-y-2 text-xs">
                <p className="font-semibold">Jennie Black Pink</p>
                <p className="text-gray-600">Just now</p>
                <p className="p-2 rounded-lg tracking-tight bg-gray-200">Hello</p>
                <div>
                  <a href="#" className="text-xs">
                    Reply
                  </a>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 py-4 items-start w-full">
              <img
                src="https://i.pravatar.cc/30"
                className="w-8 h-8 rounded-full lg:ml-0 border border-gray-100"
                alt="image"
              />
              <div className="space-y-2 text-xs">
                <p className="font-semibold">Lisa Black Pink</p>
                <p className="text-gray-600">Just now</p>
                <p className="p-2 rounded-lg tracking-tight bg-gray-200">Hello</p>
                <div className="flex items-center space-x-6 ">
                  <div className="flex space-x-1">
                    <button>
                      <IconHeart size={20} stroke={1} strokeLinejoin="miter" />
                    </button>
                    <span>20</span>
                  </div>
                  <div className="flex space-x-1">
                    <button>
                      <IconMessageCircle
                        size={20}
                        stroke={1}
                        strokeLinejoin="miter"
                      />
                    </button>
                    <span>4</span>
                  </div>
                </div>
                <div>
                  <textarea
                    rows={1}
                    placeholder="Write a comment"
                    className="w-full p-2 overflow-hidden resize-none text-xs rounded-sm border-b border-gray-300 focus:outline-none focus:border-b focus:border-blue-300"
                    {...props}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default FormComment;
