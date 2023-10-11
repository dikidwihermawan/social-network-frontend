import { IconBell, IconHash, IconHome, IconMessage } from "@tabler/icons-react";

function Sidebar() {
  const classCode =
    "border-b border-b-gray-100 hover:bg-gradient-to-l from-blue-400 to-blue-500 hover:text-white hover:rounded-sm";
  const classIcon = "w-5 h-5 stroke-1 mr-4";
  return (
    <div className="border border-gray-200 rounded shadow-xl">
      <ul>
        <li className={classCode}>
          <a href="/" className="flex p-4">
            <IconHome className={classIcon} />
            <span className="text-sm">Home</span>
          </a>
        </li>
        <li className={classCode}>
          <a href="/explore" className="flex p-4">
            <IconHash className={classIcon} />
            <span className="text-sm">Explore</span>
          </a>
        </li>
        <li className={classCode}>
          <a href="/notification" className="flex p-4">
            <IconBell className={classIcon} />
            <span className="text-sm">Notification</span>
          </a>
        </li>
        <li className={classCode}>
          <a href="/messages" className="flex p-4">
            <IconMessage className={classIcon} />
            <span className="text-sm">Messages</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
