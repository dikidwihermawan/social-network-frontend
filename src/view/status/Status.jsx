import {
  IconHeart,
  IconMessageCircle,
  IconThumbDown,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import FormComment from "./FormComment";
import { getLoginUser } from "../../store/Users";

function Status() {
  const auth = useRecoilValue(getLoginUser);
  const [statuses, setStatuses] = useState([]);
  const [body, setBody] = useState("");
  const textAreaRef = useRef(null);
  const status = {
    body,
  };

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [body]);

  const getStatus = async () => {
    try {
      let response = await axios.get("status");
      setStatuses(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const store = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("status", status);
      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setBody("");
      getStatus();
    } catch (e) {
      console.log(e);
    }
  };

  const hasLike = async (e) => {
    try {
      const url = "status/" + e[0] + "/likes";
      await axios.post(url, { identifier: e[0], type: 1 });
      getStatus();
    } catch (e) {
      console.log(e);
    }
  };
  const hasDislike = async (e) => {
    try {
      const url = "status/" + e[0] + "/likes";
      await axios.post(url, { identifier: e[0], type: 0 });
      getStatus();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div>
      <div className="flex place-items-start space-x-4 px-4 py-6 border border-gray-100 rounded-lg shadow-md mb-2">
        <img
          src="https://i.pravatar.cc/30"
          className="hidden lg:block rounded-full lg:ml-0 w-{150px} h-{150px} border border-gray-100"
          alt="image"
        />
        <div className="w-full">
          <form onSubmit={store}>
            <textarea
              ref={textAreaRef}
              value={body}
              onChange={handleChange}
              rows={5}
              name="body"
              placeholder="What's your mind ?"
              className="w-full text-sm bg-gray-50 resize-none rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="text-end py-2">
              <Button>Update</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="rounded-lg shadow-xl space-y-6 border border-gray-100">
        {statuses.length > 0 ? (
          <ul>
            {statuses.map((status, index) => {
              return (
                <li
                  key={index}
                  className="px-4 py-8 border-b border-b-gray-100"
                >
                  <div className="flex place-items-start space-x-4">
                    <img
                      src="https://i.pravatar.cc/30"
                      className="rounded-full lg:ml-0 w-{150px} h-{150px} border border-gray-100"
                      alt="image"
                    />
                    <div className="w-full pe-10">
                      <div className="space-y-2">
                        <p className="font-semibold">
                          {status["user"]["name"]}
                        </p>
                        <p className="text-xs text-gray-600">
                          {moment(status["created_at"])
                            .startOf("hh:mm a")
                            .fromNow()}
                        </p>
                        <div className="text-sm antialiased tracking-tight leading-relaxed">
                          {status["body"]}
                        </div>
                        <div className="flex items-center space-x-6 text-xs">
                          <div className="flex space-x-1 text-red">
                            <button
                              onClick={() => {
                                hasLike([status.identifier, "like"]);
                              }}
                            >
                              {status["has_like"] != null &&
                              status["has_like"]["user_id"] == auth.user.id &&
                              status["has_like"]["type"] == true ? (
                                <IconHeart
                                  color="blue"
                                  size={20}
                                  stroke={1}
                                  strokeLinejoin="miter"
                                />
                              ) : (
                                <IconHeart
                                  size={20}
                                  stroke={1}
                                  strokeLinejoin="miter"
                                />
                              )}
                            </button>
                            <span>{status["likes_count_count"]}</span>
                          </div>
                          <div className="flex space-x-1">
                            <button
                              onClick={() => {
                                hasDislike([status.identifier, "dislike"]);
                              }}
                            >
                              {status["has_like"] != null &&
                              status["has_like"]["type"] == false ? (
                                <IconThumbDown
                                  color="red"
                                  size={20}
                                  stroke={1}
                                  strokeLinejoin="miter"
                                />
                              ) : (
                                <IconThumbDown
                                  size={20}
                                  stroke={1}
                                  strokeLinejoin="miter"
                                />
                              )}
                            </button>
                            <span>{status["dislikes_count_count"]}</span>
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
                        <div className="pt-2">
                          <FormComment
                            id={index}
                            identifier={status.identifier}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="text-center p-4">
            <span className="text-sm">No status updated</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Status;
