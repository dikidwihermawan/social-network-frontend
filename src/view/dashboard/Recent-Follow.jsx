import { useEffect } from "react";
import FollowButton from "../../components/FollowButton";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { followUser, getAllUser, userFollowing } from "../../store/Users";

function RecentFollow() {
  const users = useRecoilValue(getAllUser);
  const followingUser = useRecoilValue(userFollowing);
  const [follow, setFollow] = useRecoilState(followUser);

  const following = (user) => {
    setFollow(user);
    console.log(followingUser);
  };

  useEffect(() => {}, []);

  return (
    <div className="border border-gray-200 rounded shadow-xl px-4 pt-4 py-8 space-y-4">
      <p className="font-semibold">Recently Follows</p>
      {users.length > 0 ? (
        <ul className="space-y-8">
          {users.map((user, index) => (
            <li key={index}>
              <div className="flex space-x-2 items-center">
                <img
                  src="https://i.pravatar.cc/30"
                  className="rounded-full lg:ml-0 w-{150px} h-{150px} border border-gray-100"
                  alt={user.username}
                />
                <div className="space-y-2 w-full">
                  <a href={"profile/" + user.username}>
                    <p className="text-sm leading-relaxed">{user.name}</p>
                    <p className="text-xs text-gray-600">@{user.username}</p>
                  </a>
                </div>
                <div className="">
                  {user.follow ? (
                    <FollowButton
                      color="hover:text-white"
                      background="border bg-white hover:bg-gradient-to-r from-blue-400 to-blue-500"
                      onClick={() => following(user.username)}
                    >
                      Unfollow
                    </FollowButton>
                  ) : (
                    <FollowButton
                      className="hover:bg-blue-100"
                      onClick={() => following(user.username)}
                    >
                      Follow
                    </FollowButton>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center">
          <span className="text-sm">Nothing</span>
        </div>
      )}
    </div>
  );
}

export default RecentFollow;
