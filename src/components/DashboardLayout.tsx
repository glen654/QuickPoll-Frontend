export function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="grow mx-5">{children}</div>
      <div className="hidden md:block mr-5">
        <UserDetailsCard
          profileImageUrl={user && user.profileImageUrl}
          fullname={user && user.fullname}
          username={user && user.username}
          totalPollsVotes={user && user.totalPollsVotes}
          totalPollsCreated={user && user.totalPollsCreated}
          totalPollsBookmarked={user && user.totalPollsBookmarked}
        />
      </div>
    </div>
  );
}
