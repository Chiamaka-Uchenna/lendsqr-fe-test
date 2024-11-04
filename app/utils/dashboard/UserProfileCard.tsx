import { User } from "@/app/types/User";
import { AiOutlineUser } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";
import { sfCompactText } from "@/app/utils/font";

type UserProfileCardProps = {
  user: User;
  allUsers: User[];
};

// Function to calculate stars based on join year
function calculateStars(
  joinYear: number,
  oldestYear: number,
  newestYear: number
) {
  if (joinYear === oldestYear) return 3;
  if (joinYear === newestYear) return 1;
  return 2;
}

export default function UserProfileCard({
  user,
  allUsers,
}: UserProfileCardProps) {
  console.log("User Data:", user); // Debugging statement

  const userJoinYear = new Date(user.date_joined).getFullYear();
  const joinYears = allUsers.map((u) => new Date(u.date_joined).getFullYear());
  const oldestYear = Math.min(...joinYears);
  const newestYear = Math.max(...joinYears);
  const stars = calculateStars(userJoinYear, oldestYear, newestYear);

  return (
    <div className="bg-white rounded-lg border border-t-gray-200 shadow-md px-6 pt-6 pb-0 max-w-4xl mx-auto">
      <div className="flex items-center justify-start mb-4 gap-6">
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <AiOutlineUser className="text-secondary text-2xl" />
          </div>
          <div>
            <h2 className="font-medium text-[22px] leading-[25.81px] text-primary">
              {user.full_name}
            </h2>
            <p className="font-normal text-sm text-secondary">
              {user.borrower_id}
            </p>
          </div>
        </div>

        {/* User Tier and Balance */}
        <div className="flex flex-col items-center border border-y-0 border-x-gray-200 text-center p-6">
          <p className="text-sm text-secondary">User's Tier</p>
          <div className="flex items-center space-x-1 text-yellow-500">
            {[...Array(stars)].map((_, i) => (
              <FaStar key={i} />
            ))}
            {[...Array(3 - stars)].map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
        </div>
        <div className="text-left">
          <p className="text-[22px] font-semibold text-primary">
            {user.savings}
          </p>
          <p className="text-primary text-[12px] font-normal leading-[14.08px]">
            {user.account_number ?? "N/A"} / {user.bank ?? "N/A"}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <div className={`flex space-x-10 pt-4 ${sfCompactText.className}`}>
          <a
            href="#"
            className="text-teal text-opacity-80 font-normal text-[16px] leading-[18.77px] align-middle border-b-2 border-teal pb-2"
          >
            General Details
          </a>
          <a href="#" className="profileText">
            Documents
          </a>
          <a href="#" className="profileText">
            Bank Details
          </a>
          <a href="#" className="profileText">
            Loans
          </a>
          <a href="#" className="profileText">
            Savings
          </a>
          <a href="#" className="profileText">
            App and System
          </a>
        </div>
      </div>
    </div>
  );
}
