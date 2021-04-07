import React, { useEffect, useRef, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import RechargeMoney from "./components/Game/RechargeMoney";
import Navigation from "./components/Navigation/Navigation";
import UserDialog from "./components/UserDialog/UserDialog";

const App = () => {
  const [money, setMoney] = useState(
    parseFloat(localStorage.getItem("balance")) || 10
  );
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [slotOne, setSlotOne] = useState(0);
  const [slotTwo, setSlotTwo] = useState(0);
  const [slotThree, setSlotThree] = useState(0);
  const [openGame, setOpenGame] = useState(false);
  const [openRecharge, setOpenRecharge] = useState(false);
  const [debug, setDebug] = useState(false);

  const rechargeInputRef = useRef();
  const nameInputRef = useRef();

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
    console.log("hanleLogout login", login);
    setUsername("");
    localStorage.removeItem("username");
    console.log("Soy HandleLogout");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsername = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
  };

  const handleOpenGame = () => {
    setOpenGame(true);
  };

  const handleCloseGame = () => {
    setOpenGame(false);
    setSlotOne(0);
    setSlotTwo(0);
    setSlotThree(0);
  };

  const handleCloseRecharge = () => {
    setOpenRecharge(false);
  };

  const updateMoney = (recharge) => {
    setMoney(parseFloat(recharge));
    localStorage.setItem("balance", parseFloat(recharge));
  };

  const handleOpenRecharge = () => {
    setOpenRecharge(true);
  };

  const handleDebug = () => {
    setDebug(true);
    setSlotOne(7);
    setSlotTwo(7);
    setSlotThree(7);
  };

  const spinRandom = () => {
    if (money >= 1) {
      setDebug(false);
      setMoney((state) => state - 1);
      setSlotOne(Math.floor(Math.random() * 9) + 1);
      setSlotTwo(Math.floor(Math.random() * 9) + 1);
      setSlotThree(Math.floor(Math.random() * 9) + 1);

      if (
        (slotOne !== slotTwo &&
          slotOne !== slotThree &&
          slotTwo !== slotThree) ||
        (slotOne === 7 && slotTwo === 7 && slotThree === 7 && debug)
      ) {
        localStorage.setItem("balance", money);
      } else if (
        slotOne === slotTwo &&
        slotOne !== slotThree &&
        slotTwo !== slotThree
      ) {
        setMoney((state) => state + 0.5);
        localStorage.setItem("balance", money);
      } else if (
        slotTwo === slotThree &&
        slotTwo !== slotOne &&
        slotThree !== slotOne
      ) {
        setMoney((state) => state + 0.5);
        localStorage.setItem("balance", money);
      } else if (
        slotOne === slotTwo &&
        slotOne === slotThree &&
        slotTwo === slotThree &&
        slotTwo === slotOne &&
        slotThree === slotOne &&
        slotThree === slotTwo &&
        slotOne !== 0 &&
        slotTwo !== 0 &&
        slotThree !== 0
      ) {
        setMoney((state) => state + 5);
        localStorage.setItem("balance", money);
      } else if (slotOne === 7 && slotTwo === 7 && slotThree === 7 && !debug) {
        setMoney((state) => state + 10);
        localStorage.setItem("balance", money);
      }
    } else if (money > 0 && money < 1) {
      handleCloseGame();
    } else if (money <= 0) {
      setMoney(0);
      localStorage.setItem("balance", money);
      handleCloseGame();
    }
  };

  useEffect(() => {
    localStorage.getItem("username");
    if (username.trim().length > 2) {
      setLogin(true);
    } else {
      setLogin(false);
    }

    localStorage.setItem("balance", money);
    setMoney(parseFloat(localStorage.getItem("balance")));
  }, [username, money]);

  console.log("USERNAME", username);
  console.log("MONEY", money);

  return (
    <div>
      <Navigation
        handleLogin={handleLogin}
        login={login}
        money={money?.toFixed(2)}
        handleClickOpen={handleClickOpen}
        username={username}
        handleLogout={handleLogout}
        handleOpenRecharge={handleOpenRecharge}
      />
      <Dashboard handleOpenGame={handleOpenGame} />
      <Game
        slotOne={slotOne}
        slotTwo={slotTwo}
        slotThree={slotThree}
        openGame={openGame}
        handleCloseGame={handleCloseGame}
        spinRandom={spinRandom}
        handleDebug={handleDebug}
      />
      <UserDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleUsername={handleUsername}
        handleLogin={handleLogin}
        nameInputRef={nameInputRef}
      />
      <RechargeMoney
        rechargeInputRef={rechargeInputRef}
        handleCloseRecharge={handleCloseRecharge}
        openRecharge={openRecharge}
        money={money}
        updateMoney={updateMoney}
      />
      <Footer />
    </div>
  );
};

export default App;
