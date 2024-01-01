import { Link } from "react-router-dom";

export default function AccountIssueLink({ to, children }) {
  return (
    <div className="flex items-center justify-end">
      <div className="text-sm">
        <Link
          to={to}
          className="font-medium text-violet-600 hover:text-violet-500"
        >
          {children}
        </Link>
      </div>
    </div>
  );
}
