const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통 메뉴</div>
      {children}
    </div>
  );
};

export default AppLayout;
