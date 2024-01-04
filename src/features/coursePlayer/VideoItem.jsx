import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledVideoItem = styled.div`
  display: flex;
  gap: 2rem;

  &:hover {
    background-color: var(--color-grey-300);
  }
`;

const Icon = styled.div`
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default function VideoItem({ video }) {
  const { id, title, description, url, views, duration, createdAt } = video;
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/coursePlayer/${id}`);
  }

  return (
    <StyledVideoItem onClick={handleClick}>
      <Icon>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
      </Icon>
      <div clas="flex flex-col w-full">
        <a href="#">
          <p className="text-slate-50 text-sm font-medium">{title}</p>
        </a>
        <div>
          <span className="text-gray-400 text-xs mt-1">{duration} Mins</span>
          <span className="text-gray-400 text-xs mt-1"> | </span>
          <span className="text-gray-400 text-xs mt-1">{views} views</span>
        </div>
      </div>
    </StyledVideoItem>
  );
}
