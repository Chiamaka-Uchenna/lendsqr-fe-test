// components/UserDetails.tsx
import { User } from "@/app/types/User";



type UserDetailsProps = {
  user: User;
};

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="bg-white rounded-md border border-t-gray-200 shadow-md p-6 max-w-4xl mx-auto space-y-6">
      {/* Personal Information */}
      <section>
        <h3 className="detailsText mb-4">Personal Information</h3>
        <div className="grid grid-cols-5 gap-y-4 gap-x-6 text-sm">
          <div>
            <p className="customText mb-2">FULL NAME</p>
            <p className="userText">{user.full_name}</p>
          </div>
          <div>
            <p className="customText mb-2">PHONE NUMBER</p>
            <p className="userText">{user.phone_number}</p>
          </div>
          <div>
            <p className="customText mb-2">EMAIL ADDRESS</p>
            <p className="userText">{user.email}</p>
          </div>
          <div>
            <p className="customText mb-2">BVN</p>
            <p className="userText">{user.bvn}</p>
          </div>
          <div>
            <p className="customText mb-2">GENDER</p>
            <p className="userText">{user.gender}</p>
          </div>
          <div>
            <p className="customText mb-2">MARITAL STATUS</p>
            <p className="userText">{user.marital_status}</p>
          </div>
          <div>
            <p className="customText mb-2">CHILDREN</p>
            <p className="userText">{user.children}</p>
          </div>
          <div>
            <p className="customText mb-2">TYPE OF RESIDENCE</p>
            <p className="userText">{user.type_of_residence}</p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Education and Employment */}
      <section>
        <h3 className="detailsText mb-4">Education and Employment</h3>
        <div className="grid grid-cols-5 gap-y-4 gap-x-3 text-sm">
          <div>
            <p className="customText mb-2">LEVEL OF EDUCATION</p>
            <p className="userText">{user.level_of_education}</p>
          </div>
          <div>
            <p className="customText mb-2">EMPLOYMENT STATUS</p>
            <p className="userText">{user.employment_status}</p>
          </div>
          <div>
            <p className="customText mb-2">SECTOR OF EMPLOYMENT</p>
            <p className="userText">{user.sector_of_employment}</p>
          </div>
          <div>
            <p className="customText mb-2">DURATION OF EMPLOYMENT</p>
            <p className="userText">{user.duration_of_employment}</p>
          </div>
          <div>
            <p className="customText mb-2">OFFICE EMAIL</p>
            <p className="userText">{user.office_email}</p>
          </div>
          <div>
            <p className="customText mb-2">MONTHLY INCOME</p>
            <p className="userText">{user.monthly_income}</p>
          </div>
          <div>
            <p className="customText mb-2">LOAN REPAYMENT</p>
            <p className="userText">{user.loan_repayment}</p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Socials */}
      <section>
        <h3 className="detailsText mb-4">Socials</h3>
        <div className="grid grid-cols-5 gap-y-4 text-sm">
          <div>
            <p className="customText mb-2">TWITTER</p>
            <p className="userText">{user.socials.twitter}</p>
          </div>
          <div>
            <p className="customText mb-2">FACEBOOK</p>
            <p className="userText">{user.socials.facebook}</p>
          </div>
          <div>
            <p className="customText mb-2">INSTAGRAM</p>
            <p className="userText">{user.socials.instagram}</p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Guarantor */}
      <section>
        <h3 className="detailsText mb-4">Guarantor</h3>
        <div className="grid grid-cols-5 gap-y-4 gap-x-12 text-sm">
          <div>
            <p className="customText mb-2">FULL NAME</p>
            <p className="userText">{user.guarantor.full_name}</p>
          </div>
          <div>
            <p className="customText mb-2">PHONE NUMBER</p>
            <p className="userText">{user.guarantor.phone_number}</p>
          </div>
          <div>
            <p className="customText mb-2">EMAIL ADDRESS</p>
            <p className="userText">{user.guarantor.email}</p>
          </div>
          <div>
            <p className="customText mb-2">RELATIONSHIP</p>
            <p className="userText">{user.guarantor.relationship}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
