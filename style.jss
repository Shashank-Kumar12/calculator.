@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #0a0a0a, #3a4452);
}
.calculator {
  border: 1px solid #717377;
  padding: 20px;
  border-radius: 20px;
  background: transparent;
  box-shadow: 0px 5px 15px rgba(115, 120, 125, 2);
}
input {
  width: 350px;
  border: none;
  padding: 15px;
  margin: 10px;
  box-shadow: 0px 5px 15px rgba(84, 84, 84, 1);
  background: transparent;
  font-size: 30px;
  text-align: right;
  cursor: pointer;
  color: white;
}
input::placeholder {
  color: white;
}
button {
  border: none;
  width: 70px;
  height: 60px;
  margin: 10px;
  border-radius: 50%;
  background: transparent;
  color: white;
  font-size: 20px;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.equal {
  background-color: #fb7c14;
}
.operators {
  color: rgb(17, 177, 17);
}
.clear {
  color: red;
}
