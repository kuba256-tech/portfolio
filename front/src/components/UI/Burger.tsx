interface IBurgerState {
  isOpened: boolean;
  onClick: () => void;
}

const Burger: React.FC<IBurgerState> = ({ isOpened, onClick }) => {
  return (
    <div className={`header-burger ${isOpened && 'openBurger'}`} onClick={() => onClick()}>
      <div className="burger-el"></div>
      <div className="burger-el"></div>
      <div className="burger-el"></div>
    </div>
  );
};

export default Burger;
