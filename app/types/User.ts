export type User = {
  id: string;
  borrower_id: string;
  email: string;
  status: "Active" | "Pending" | "Blacklisted" | "Inactive";
  username: string;
  date_joined: string;
  organization: string;
  phone_number: string;
  full_name: string;
  bvn: number;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  savings: string;
  bank: string;
  account_number: string;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    full_name: string;
    phone_number: number;
    email: string;
    relationship: string;
  };
};
