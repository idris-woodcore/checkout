// import "../src/style.css";
// import closeIcon from "./assets/Icon (1).svg";
// import poolerLogo from "./assets/Poolerlogo.svg";
// import copyIcon from "./assets/Icon.svg";
// import "./assets/fonts/Graphik-Medium.ttf";
// import "./assets/fonts/Graphik-Regular.ttf";

let modalStylesEle = document.createElement("style");
let modalStyles = `
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  width: 100%;
  border-radius: 8px;
  position: relative;
  max-width: 360px;
}

/* media queries */
@media screen and (max-width: 640px) {
  .modal-content {
    width: 90%;
  }
  .text-truncate {
    width: 120px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1180px) {
  .modal-content {
    width: 50%;
  }
  .text-truncate {
    width: 120px;
  }
`;

function Pooler(merchantConfig) {
  console.log("yes");
  let overlay = "";

  const woodcoreConfig = {
    apiUrl: "https://api.swim.poolerapp.com/api/v1/",
    apiRoute: "business/accounts/disposable",
    dev: "checkout.swim.poolerapp.com",
    live: "checkout.poolerapp.com",
    local: "checkout.localhost:4000",
  };

  const config = {
    display_name: "Idris Bankole",
    email: "idris@woodcoreapp.com",
    mobile_number: "08189960542",
    metadata: {},
    payment_link: true,
    amount: 9000,
    "x-key":
      "skl_D+7m+90BNNcyV7SM0sb/iEdIaMfRUPUnzsKx0KiN7H9LNtT+m5NTZamT567TmYE0UzbhK7LwAN3xh47NMosZ8g==",
  };

  var host = window.location.host;
  let iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.position = "fixed";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.zIndex = "9999";

  var styles = document.createElement("style");
  var cssStyles = `
  .spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 0.5s linear infinite;
  }
  
  .spinner-small {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #261bc1;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 0.5s linear infinite;
  }
  
  .footer-text {
    position: absolute;
    top: 100%;
    left: 35%;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinner-centered {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .awaiting-container {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .transferToMerchant {
    color: #000;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
  }
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    width: 25%;
    border-radius: 8px;
    position: relative;
  }
  .modal-footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-top: 1rem; */
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .modal-text-parent {
    background-color: #e0e4f4;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #e0e4f4;
    padding: 20px;
  }
  .modal-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .modal-amt-email {
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
  }
  .modal-amt {
    font-weight: 500;
    color: #000;
    text-align: end;
    text-align: right;
    font-size: 1.125rem;
  }
  .modal-em {
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 91.6667%;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 1.2rem;
  }
  .modal-amount-email {
    display: flex;
    flex-direction: column;
    column-gap: 5px;
  }
  .modal-email {
    color: #8f9bb2;
    font-family: "GraphikRegular", "Source Sans Pro", sans-serif;
  }
  .close {
    color: #000;
    float: right;
    margin-top: 0px;
    position: absolute;
    right: -5%;
    top: 1%;
    width: 10px;
    height: 10px;
  }
  .close-img:hover {
    background: red;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08),
      4px 10px 25px rgba(0, 0, 0, 0.03);
    border-radius: 13px;
    width: 10px;
    height: 10px;
    transition: all 0.8s ease-in-out;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  `;

  styles.innerHTML = cssStyles;
  overlay = document.createElement("div");

  // trigger overlay, and loader
  function payWithPooler() {
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "row";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1";

    var spinnerCssCode = `
  <style>
    .lds-spinner {
      color: official;
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    
    .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
    }
    
    .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: #e0e4f4;
    }
    
    .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    
    .lds-spinner div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    
    .lds-spinner div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    
    .lds-spinner div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    
    .lds-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    
    .lds-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    
    .lds-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    
    .lds-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    
    .lds-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    
    .lds-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    
    .lds-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    
    .lds-spinner div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  </style>
  `;
    var spinnerContainer = document.createElement("div");
    spinnerContainer.innerHTML = spinnerCssCode;
    var spinner = document.createElement("div");
    spinner.className = "lds-spinner";
    // Create the spinner divs
    for (var i = 0; i < 12; i++) {
      var div = document.createElement("div");
      spinner.appendChild(div);
    }
    overlay.appendChild(spinnerContainer);
    overlay.appendChild(spinner);
    document.body.appendChild(overlay);
    // document.head.appendChild(styles);

    // SET UP CONNECTION TO GENERATE DISPOSABLE ACCOUNT
    setTimeout(function () {
      spinner.style.display = "none";
      overlay.style.display = "none";
      createDisposableAccount(merchantConfig, woodcoreConfig);
    }, 3000);
  }

  // shows merchant details modal
  function showMerchantModal(config) {
    // const data = response?.data;
    const data = config;
    var Merchantmodal = document.createElement("div");
    Merchantmodal.setAttribute("id", "merchant-modal");
    Merchantmodal.style.display = "block";
    Merchantmodal.style.position = "fixed";
    Merchantmodal.style.zIndex = "9999";
    Merchantmodal.style.top = "0";
    Merchantmodal.style.left = "0";
    Merchantmodal.style.paddingTop = "100px";
    Merchantmodal.style.width = "100%";
    Merchantmodal.style.height = "100%";
    Merchantmodal.style.overflow = "auto";
    Merchantmodal.style.backgroundColor = "rgb(0, 0, 0, 0.2)";

    var modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "auto";
    modalContent.style.width = "100%";
    modalContent.style.borderRadius = "8px";
    modalContent.style.position = "relative";
    modalContent.style.maxWidth = "360px";

    var closeBtn = document.createElement("div");
    closeBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1L1 11M1 1L11 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    // closeBtn.className = "close close-img";
    closeBtn.style.color = "#000";
    closeBtn.style.float = "right";
    closeBtn.style.marginTop = "0px";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "-3.5%";
    closeBtn.style.top = "1%";
    closeBtn.style.width = "10px";
    closeBtn.style.height = "10px";
    closeBtn.style.cursor = "pointer";

    // modal text parent
    var modalTextParent = document.createElement("div");
    // modalTextParent.className = "modal-text-parent";
    modalTextParent.style.background = "#e0e4f4";
    modalTextParent.style.borderTopLeftRadius = "8px";
    modalTextParent.style.borderTopRightRadius = "8px";
    modalTextParent.style.borderBottom = "1px solid #e0e4f4";
    modalTextParent.style.padding = "20px";
    modalContent.appendChild(modalTextParent);

    // modal header
    var modalText = document.createElement("div");
    // modalText.className = "modal-header";
    modalText.style.display = "flex";
    modalText.style.flexDirection = "row";
    modalText.style.alignItems = "center";
    modalText.style.justifyContent = "space-between";

    // pooler image icon
    var poolerIcon = document.createElement("div");
    // poolerIcon.src = "./Pooler DP 1.svg"
    // poolerIcon.innerHTML = poolerLogo;
    poolerIcon.innerHTML = `<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.383 12.1136L22.9586 10.5829C22.6293 10.4051 22.2876 10.2508 21.936 10.121C20.985 9.75941 19.9744 9.57471 18.9553 9.57618H9.65918L11.1286 26.7961H15.7526V25.9878H18.9553C20.0471 25.9878 21.1283 25.7753 22.137 25.3628C23.1457 24.9502 24.0622 24.3454 24.8341 23.5829C25.606 22.8205 26.2182 21.9154 26.6358 20.9193C27.0535 19.9232 27.2682 18.8556 27.2677 17.7776V17.742C27.251 16.0846 26.6098 14.4928 25.4684 13.2772L24.383 12.1136Z" fill="#52A1FF"/>
      <path d="M25.166 15.594C25.1664 16.6723 24.9516 17.7401 24.5338 18.7364C24.116 19.7327 23.5035 20.638 22.7313 21.4004C21.9591 22.1629 21.0422 22.7676 20.0332 23.1801C19.0241 23.5926 17.9426 23.8047 16.8505 23.8043H13.6508V26.7888H7.56641V7.38673H16.8625C18.3194 7.38485 19.7511 7.76275 21.0127 8.4822L22.9649 10.5785L23.3098 10.9515C24.4908 12.2029 25.1551 13.8452 25.172 15.5555L25.166 15.594Z" fill="#1F7AFF"/>
      <path d="M22.6592 13.4573C22.6599 15.633 21.7858 17.72 20.2287 19.2595C18.6717 20.7991 16.5592 21.6652 14.3556 21.6676H11.141V26.7897H5.05957V5.25H14.3556C15.6236 5.25052 16.8746 5.53795 18.0125 6.09023C19.1504 6.64248 20.145 7.44487 20.9199 8.4358C22.0484 9.87702 22.6601 11.6474 22.6592 13.4691V13.4573Z" fill="#2C1DFF"/>
      </svg>
      `;
    poolerIcon.style.width = "32px";
    poolerIcon.style.height = "32px";
    modalText.appendChild(poolerIcon);

    // amount and email address column
    var modalAmountEmail = document.createElement("div");
    // modalAmountEmail.className = "modal-amt-email";
    modalAmountEmail.style.display = "flex";
    modalAmountEmail.style.flexDirection = "column";
    modalAmountEmail.style.marginTop = "0.25rem";
    modalText.appendChild(modalAmountEmail);
    modalTextParent.appendChild(modalText);

    // amount
    var modalAmount = document.createElement("div");
    // modalAmount.className = "modal-amount modal-amt";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalAmount.style.fontWeight = "600";
    modalAmount.style.color = "#000";
    modalAmount.style.textAlign = "end";
    modalAmount.style.textAlign = "right";
    modalAmount.style.fontSize = "1.125rem";
    modalAmount.style.paddingBottom = "8px";
    modalAmount.textContent = `${data?.amount}`;
    modalAmountEmail.appendChild(modalAmount);

    // email
    var modalEmail = document.createElement("div");
    // modalEmail.className = "modal-email modal-em";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalEmail.style.color = "#8f9bb2";
    modalEmail.style.fontStyle = "normal";
    modalEmail.style.fontSize = "1.2rem";
    modalEmail.textContent = `${data?.email}`;
    modalAmountEmail.appendChild(modalEmail);

    // modal body
    var modalBody = document.createElement("div");
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.position = "relative";
    // modalBody.style.marginRight = "auto";
    // modalBody.style.width = "91.6667%";

    // make transfer to
    var transferToHeader = document.createElement("div");
    // transferToHeader.className = "transferToHeader";
    transferToHeader.style.marginBottom = "1.5rem";
    transferToHeader.style.marginTop = "35px";
    var transferTo = document.createElement("div");
    // transferTo.className = "transfer-to transferTo";
    transferTo.textContent = "Make transfer to";
    transferTo.style.textAlign = "center";
    transferTo.style.fontFamily = "GraphikRegular, sans-serif";
    transferTo.style.color = "#8f9bb2";
    transferTo.style.fontStyle = "normal";
    transferTo.style.fontSize = "14px";
    transferTo.style.paddingBottom = "15px";
    var transferToMerchant = document.createElement("div");
    // transferToMerchant.className = "transferToMerchant";
    transferToMerchant.textContent = `${data.display_name}`;
    transferToMerchant.style.textAlign = "center";
    transferToMerchant.style.color = "#000";
    transferToMerchant.style.fontStyle = "normal";
    transferToMerchant.style.fontSize = "16px";
    transferToMerchant.style.fontFamily = "GraphikRegular, sans-serif";
    transferToHeader.appendChild(transferTo);
    transferToHeader.appendChild(transferToMerchant);
    modalBody.appendChild(transferToHeader);

    // merchant details
    var paymentDetails = document.createElement("ul");
    // paymentDetails.className = "payment-details";
    paymentDetails.style.listStyleType = "none";
    paymentDetails.style.display = "flex";
    paymentDetails.style.flexDirection = "column";
    paymentDetails.style.width = "90%";
    paymentDetails.style.marginBottom = "30px";
    paymentDetails.style.position = "relative";
    // paymentDetails.classList.add("payment-details");

    // LIST 1
    var li1 = document.createElement("li");
    // li1.className = "payment-detail";
    li1.style.display = "flex";
    li1.style.flexDirection = "row";
    li1.style.alignItems = "center";
    li1.style.justifyContent = "space-between";
    li1.style.borderBottom = "1px solid #e5e7eb";
    li1.style.paddingTop = "0.9em";
    li1.style.paddingBottom = "0.9em";
    var merchant = document.createElement("span");
    // merchant.className = "payment-detail-text modal-email";
    merchant.textContent = "Merchant";
    merchant.style.fontFamily = "GraphikRegular, sans-serif";
    merchant.style.color = "#8f9bb2";
    var merchatName = document.createElement("span");
    // merchatName.className = "payment-detail-bold text-truncate";
    merchatName.style.fontFamily = "GraphikMedium, sans-serif";
    merchatName.style.fontWeight = "500";
    merchatName.style.color = "#000";
    merchatName.textContent = `${data.display_name}`;
    merchatName.style.width = "200px";
    merchatName.style.whiteSpace = "nowrap";
    merchatName.style.overflow = "hidden";
    merchatName.style.textAlign = "right";
    merchatName.style.textOverflow = "ellipsis";
    li1.appendChild(merchant);
    li1.appendChild(merchatName);

    // LIST 2
    var li2 = document.createElement("li");
    // li2.className = "payment-detail";
    li2.style.display = "flex";
    li2.style.flexDirection = "row";
    li2.style.alignItems = "center";
    li2.style.justifyContent = "space-between";
    li2.style.borderBottom = "1px solid #e5e7eb";
    li2.style.paddingTop = "0.9em";
    li2.style.paddingBottom = "0.9em";
    var accNum = document.createElement("span");
    // accNum.className = "payment-detail-text modal-email";
    accNum.textContent = "Account Number";
    accNum.style.fontFamily = "GraphikRegular, sans-serif";
    accNum.style.color = "#8f9bb2";
    var accDetails = document.createElement("span");
    // accDetails.className = "payment-detail-bold row-span";
    // accDetails.textContent = `${data?.account_no} || 123456789`;
    accDetails.textContent = `9977639255`;
    // accDetails.className = "payment-detail-bold text-truncate";
    accDetails.style.fontFamily = "GraphikMedium, sans-serif";
    accDetails.style.fontWeight = "500";
    accDetails.style.color = "#000";
    accDetails.style.display = "flex";
    accDetails.style.flexDirection = "row";
    var copy = document.createElement("div");
    // copy.className = "copy";
    copy.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14C3.06812 14 2.60218 14 2.23463 13.8478C1.74458 13.6448 1.35523 13.2554 1.15224 12.7654C1 12.3978 1 11.9319 1 11V4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11C11.9319 1 12.3978 1 12.7654 1.15224C13.2554 1.35523 13.6448 1.74458 13.8478 2.23463C14 2.60218 14 3.06812 14 4M11.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.7157 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.7157 8.40973 8.40973 8.7157 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V17.8C8 18.9201 8 19.4802 8.21799 19.908C8.40973 20.2843 8.7157 20.5903 9.09202 20.782C9.51984 21 10.0799 21 11.2 21Z" stroke="#CBD1EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    copy.style.width = "20px";
    copy.style.height = "20px";
    copy.style.position = "absolute";
    copy.style.left = "102%";
    copy.style.cursor = "pointer";
    copy.src = "./Icon.svg";
    copy.addEventListener("click", () => {
      // navigator.clipboard.writeText(`${data?.account_no}`);
      navigator.clipboard.writeText(`9977639255`);
    });
    accDetails.appendChild(copy);
    li2.appendChild(accNum);
    li2.appendChild(accDetails);

    // LIST 3
    var li3 = document.createElement("li");
    // li3.className = "payment-detail";
    li3.style.display = "flex";
    li3.style.flexDirection = "row";
    li3.style.alignItems = "center";
    li3.style.justifyContent = "space-between";
    li3.style.borderBottom = "1px solid #e5e7eb";
    li3.style.paddingTop = "0.9em";
    li3.style.paddingBottom = "0.9em";
    li3.style.borderBottom = "0px";
    var bank = document.createElement("span");
    // bank.className = "payment-detail-text modal-email";
    bank.textContent = "Bank name";
    bank.style.fontFamily = "GraphikRegular, sans-serif";
    bank.style.color = "#8f9bb2";
    var bankDetails = document.createElement("span");
    // bankDetails.className = "payment-detail-bold text-truncate";
    bankDetails.textContent = "LIFEGATE MICROFINANCE BANK";
    bankDetails.style.width = "200px";
    bankDetails.style.whiteSpace = "nowrap";
    bankDetails.style.overflow = "hidden";
    bankDetails.style.textOverflow = "ellipsis";
    bankDetails.style.fontFamily = "GraphikMedium, sans-serif";
    bankDetails.style.fontWeight = "500";
    bankDetails.style.color = "#000";
    li3.appendChild(bank);
    li3.appendChild(bankDetails);

    // UL MAKE UP
    paymentDetails.appendChild(li1);
    paymentDetails.appendChild(li2);
    paymentDetails.appendChild(li3);
    modalBody.appendChild(paymentDetails);

    // button and countdwon timer
    var modalFooter = document.createElement("div");
    // modalFooter.className = "modal-footer";
    modalFooter.style.display = "flex";
    modalFooter.style.flexDirection = "column";
    modalFooter.style.width = "100%";
    modalFooter.style.paddingTop = "0.5rem";
    modalFooter.style.paddingBottom = "1.5rem";
    // modalFooter.style.paddingLeft = "2rem";
    // modalFooter.style.paddingRight = "2rem";
    var paybutton = document.createElement("button");
    // paybutton.className = "modal-btn";
    paybutton.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    paybutton.style.background =
      "linear-gradient(178.53deg, #2c1dff 1.25%, #261bc1 165.23%)";
    paybutton.style.borderRadius = "8px";
    paybutton.style.textAlign = "center";
    paybutton.style.color = "#fff";
    paybutton.style.fontWeight = "500";
    paybutton.style.width = "85%";
    paybutton.style.height = "2.75rem";
    paybutton.style.fontSize = "1.125rem";
    paybutton.style.margin = "0 auto";
    paybutton.style.border =
      "linear-gradient(178.53deg, #2c1dff 1.25%, #261bc1 165.23%)";
    paybutton.style.cursor = "pointer";
    paybutton.textContent = "I have sent the money";
    paybutton.style.zIndex = "999";
    paybutton.setAttribute("type", "button");
    modalFooter.appendChild(paybutton);
    // count down timer
    var timerText = document.createElement("span");
    // timerText.className = "title modal-email timer-text";
    timerText.style.paddingTop = "20px";
    timerText.style.textAlign = "center";
    timerText.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    // countdown time
    var duration = 1800;
    var countdown = "";
    var text = "";
    var timer = setInterval(function () {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
      countdown = minutes + ":" + seconds;
      if (duration <= 0) {
        showSessionExpirationModal(data);
        clearInterval(timer);
        Merchantmodal.style.display = "none";
        overlay.style.display = "none";
        document.body.removeChild(Merchantmodal);
        Merchantmodal.parentNode.removeChild(Merchantmodal);
        clearInterval(timer);
        var childNodes = document.body.childNodes;
        var desiredChild = null;
        for (var i = 0; i < childNodes.length; i++) {
          if (childNodes[i].id === "merchant-modal") {
            desiredChild = childNodes[i];
            break;
          }
        }
        if (desiredChild) {
          var parent = desiredChild.parentNode;
          parent.removeChild(desiredChild);
          console.log("yeah");
        }
      }
      duration--;
      timerText.textContent = `Expires in ${
        countdown !== undefined ? countdown : ""
      }`;
    }, 1000);
    // timerText.textContent = text;

    modalFooter.appendChild(timerText);

    // secure by pooler
    var secureTextContainer = document.createElement("div");
    // secureTextContainer.className = "absolute footer-text";
    secureTextContainer.style.position = "absolute";
    secureTextContainer.style.top = "100%";
    secureTextContainer.style.left = "35%";
    secureTextContainer.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    var htmlContent = document.createElement("div");
    htmlContent.style.display = "flex";
    htmlContent.style.flexDirection = "row";
    htmlContent.style.paddingTop = "5px";
    htmlContent.style.color = "white";
    htmlContent.style.alignItems = "center";

    var htmlContent = `<div style="color: #fff; display: flex; flex: row; padding-top:5px; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>&nbsp;<span>Secured by Pooler</span></div>`;

    secureTextContainer.innerHTML = htmlContent;
    modalContent.appendChild(secureTextContainer);

    // MODAL BUILD UP
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    Merchantmodal.appendChild(modalContent);
    // overlay.appendChild(modal);
    document.body.appendChild(Merchantmodal); // Append modal to the document body

    closeBtn.addEventListener("click", function () {
      Merchantmodal.parentNode.removeChild(Merchantmodal);
      Merchantmodal.style.display = "none";
      overlay.style.display = "none";
      var childNodes = document.body.childNodes;
      var desiredChild = null;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].id === "merchant-modal") {
          desiredChild = childNodes[i];
          break;
        }
      }
      if (desiredChild) {
        var parent = desiredChild.parentNode;
        parent.removeChild(desiredChild);
        console.log("yeah");
      }
    });

    paybutton.addEventListener("click", function () {
      showAwaitingModal(data);
      Merchantmodal.parentNode.removeChild(Merchantmodal);
      clearInterval(timer);
      var childNodes = document.body.childNodes;
      var desiredChild = null;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].id === "merchant-modal") {
          desiredChild = childNodes[i];
          break;
        }
      }
      if (desiredChild) {
        var parent = desiredChild.parentNode;
        parent.removeChild(desiredChild);
        console.log("yeah");
      }
    });
  }

  // show awaiting payment while socket is opened
  function showAwaitingModal(data) {
    var Awaitingmodal = document.createElement("div");
    Awaitingmodal.setAttribute("id", "awaiting-modal");
    Awaitingmodal.style.display = "block";
    Awaitingmodal.style.position = "fixed";
    Awaitingmodal.style.zIndex = "9999";
    Awaitingmodal.style.top = "0";
    Awaitingmodal.style.left = "0";
    Awaitingmodal.style.paddingTop = "100px";
    Awaitingmodal.style.width = "100%";
    Awaitingmodal.style.height = "100%";
    Awaitingmodal.style.overflow = "auto";
    Awaitingmodal.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
    // modal.className = "modal";

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "auto";
    modalContent.style.width = "100%";
    modalContent.style.borderRadius = "8px";
    modalContent.style.position = "relative";
    modalContent.style.maxWidth = "360px";

    var closeBtn = document.createElement("div");
    closeBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1L1 11M1 1L11 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    // closeBtn.className = "close close-img";
    closeBtn.style.color = "#000";
    closeBtn.style.float = "right";
    closeBtn.style.marginTop = "0px";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "-3.5%";
    closeBtn.style.top = "1%";
    closeBtn.style.width = "10px";
    closeBtn.style.height = "10px";
    closeBtn.style.cursor = "pointer";

    // modal text parent
    var modalTextParent = document.createElement("div");
    // modalTextParent.className = "modal-text-parent";
    modalTextParent.style.background = "#e0e4f4";
    modalTextParent.style.borderTopLeftRadius = "8px";
    modalTextParent.style.borderTopRightRadius = "8px";
    modalTextParent.style.borderBottom = "1px solid #e0e4f4";
    modalTextParent.style.padding = "20px";
    modalContent.appendChild(modalTextParent);

    // modal header
    var modalText = document.createElement("div");
    modalText.style.display = "flex";
    modalText.style.flexDirection = "row";
    modalText.style.alignItems = "center";
    modalText.style.justifyContent = "space-between";

    // pooler image icon
    var poolerIcon = document.createElement("div");
    // poolerIcon.innerHTML = poolerLogo;
    poolerIcon.innerHTML = `<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.383 12.1136L22.9586 10.5829C22.6293 10.4051 22.2876 10.2508 21.936 10.121C20.985 9.75941 19.9744 9.57471 18.9553 9.57618H9.65918L11.1286 26.7961H15.7526V25.9878H18.9553C20.0471 25.9878 21.1283 25.7753 22.137 25.3628C23.1457 24.9502 24.0622 24.3454 24.8341 23.5829C25.606 22.8205 26.2182 21.9154 26.6358 20.9193C27.0535 19.9232 27.2682 18.8556 27.2677 17.7776V17.742C27.251 16.0846 26.6098 14.4928 25.4684 13.2772L24.383 12.1136Z" fill="#52A1FF"/>
      <path d="M25.166 15.594C25.1664 16.6723 24.9516 17.7401 24.5338 18.7364C24.116 19.7327 23.5035 20.638 22.7313 21.4004C21.9591 22.1629 21.0422 22.7676 20.0332 23.1801C19.0241 23.5926 17.9426 23.8047 16.8505 23.8043H13.6508V26.7888H7.56641V7.38673H16.8625C18.3194 7.38485 19.7511 7.76275 21.0127 8.4822L22.9649 10.5785L23.3098 10.9515C24.4908 12.2029 25.1551 13.8452 25.172 15.5555L25.166 15.594Z" fill="#1F7AFF"/>
      <path d="M22.6592 13.4573C22.6599 15.633 21.7858 17.72 20.2287 19.2595C18.6717 20.7991 16.5592 21.6652 14.3556 21.6676H11.141V26.7897H5.05957V5.25H14.3556C15.6236 5.25052 16.8746 5.53795 18.0125 6.09023C19.1504 6.64248 20.145 7.44487 20.9199 8.4358C22.0484 9.87702 22.6601 11.6474 22.6592 13.4691V13.4573Z" fill="#2C1DFF"/>
      </svg>
      `;
    poolerIcon.style.width = "32px";
    poolerIcon.style.height = "32px";
    modalText.appendChild(poolerIcon);

    // amount and email address column
    var modalAmountEmail = document.createElement("div");
    // modalAmountEmail.className = "modal-amt-email";
    modalAmountEmail.style.display = "flex";
    modalAmountEmail.style.flexDirection = "column";
    modalAmountEmail.style.marginTop = "0.25rem";
    modalText.appendChild(modalAmountEmail);
    modalTextParent.appendChild(modalText);

    // amount
    var modalAmount = document.createElement("div");
    // modalAmount.className = "modal-amount modal-amt";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalAmount.style.fontWeight = "600";
    modalAmount.style.color = "#000";
    modalAmount.style.textAlign = "end";
    modalAmount.style.textAlign = "right";
    modalAmount.style.fontSize = "1.125rem";
    modalAmount.style.paddingBottom = "8px";
    modalAmount.textContent = `NGN${data?.amount}`;
    modalAmountEmail.appendChild(modalAmount);

    // email
    var modalEmail = document.createElement("div");
    // modalEmail.className = "modal-email modal-em";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalEmail.style.color = "#8f9bb2";
    modalEmail.style.fontStyle = "normal";
    modalEmail.style.fontSize = "1.2rem";
    modalEmail.textContent = `${data?.email}`;
    modalAmountEmail.appendChild(modalEmail);

    // modal body
    var modalBody = document.createElement("div");
    // modalBody.className = "modal-body";
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.position = "relative";
    modalBody.style.justifyContent = "center";

    // merchant details
    var paymentDetails = document.createElement("ul");
    // paymentDetails.className = "payment-details";
    paymentDetails.style.listStyleType = "none";
    paymentDetails.style.display = "flex";
    paymentDetails.style.flexDirection = "column";
    paymentDetails.style.width = "90%";
    paymentDetails.style.marginBottom = "30px";
    paymentDetails.style.position = "relative";
    paymentDetails.style.marginTop = "30px";

    // AWAITING REQUEST LOADER
    var awaitingContainer = document.createElement("div");
    awaitingContainer.style.background = "#F5F6FB";
    awaitingContainer.style.display = "flex";
    awaitingContainer.style.flexDirection = "column";
    awaitingContainer.style.borderRadius = "0.5rem";
    awaitingContainer.style.margin = "auto";
    awaitingContainer.style.width = "85%";
    awaitingContainer.style.paddingTop = "1.5rem";
    awaitingContainer.style.paddingBottom = "1.5rem";
    awaitingContainer.style.justifyContent = "center";
    modalBody.appendChild(awaitingContainer);
    // loader
    var loader = document.createElement("div");
    loader.className = "spinner-small spinner-centered";
    loader.style.border = "6px solid #f3f3f3";
    loader.style.borderTop = "6px solid #261bc1";
    loader.style.borderRadius = "50%";
    loader.style.width = "40px";
    loader.style.height = "40px";
    loader.style.animation = "spin 0.5s linear infinite";
    loader.style.textAlign = "center";
    loader.style.margin = "auto";
    var style = document.createElement("style");
    style.innerHTML = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `;
    document.head.appendChild(style);
    // loader.classList.add("spinner-small");
    // loader.classList.add("spinner-centered");
    awaitingContainer.appendChild(loader);

    //   awaiting confirmation
    var awaitingConfirmation = document.createElement("div");
    awaitingConfirmation.textContent = "Awaiting confirmation";
    awaitingConfirmation.style.paddingTop = "10px";
    awaitingConfirmation.style.fontFamily = "GraphikRegular, sans-serif";
    awaitingConfirmation.style.textAlign = "center";
    awaitingConfirmation.style.fontSize = "16px";
    awaitingConfirmation.style.paddingTop = "20px";
    // awaitingConfirmation.className = "transferToMerchant modal-amount";
    awaitingContainer.appendChild(awaitingConfirmation);

    //   awaiting confirmation message
    var awaitingMessage = document.createElement("div");
    // awaitingMessage.className = "awaiting-message modal-email";
    awaitingMessage.style.fontFamily = "GraphikRegular, sans-serif";
    awaitingMessage.style.margin = "auto";
    awaitingMessage.style.width = "80%";
    awaitingMessage.style.fontSize = "14px";
    awaitingMessage.style.textAlign = "center";
    awaitingMessage.style.paddingTop = "20px";
    awaitingMessage.style.color = "#8f9bb2";
    awaitingMessage.textContent =
      "We are confirming your transaction. This will take a few minutes.";
    awaitingContainer.appendChild(awaitingMessage);

    // LIST 1
    var li1 = document.createElement("li");
    li1.className = "payment-detail";
    li1.style.display = "flex";
    li1.style.flexDirection = "row";
    li1.style.alignItems = "center";
    li1.style.justifyContent = "space-between";
    li1.style.borderBottom = "1px solid #e5e7eb";
    li1.style.paddingTop = "0.9em";
    li1.style.paddingBottom = "0.9em";
    var merchant = document.createElement("span");
    merchant.className = "payment-detail-text modal-email";
    merchant.textContent = "Merchant";
    merchant.style.fontFamily = "GraphikRegular, sans-serif";
    merchant.style.color = "#8f9bb2";
    var merchatName = document.createElement("span");
    merchatName.className = "payment-detail-bold text-truncate";
    merchatName.style.fontFamily = "GraphikMedium, sans-serif";
    merchatName.style.fontWeight = "500";
    merchatName.style.color = "#000";
    merchatName.textContent = `${data.display_name}`;
    li1.appendChild(merchant);
    li1.appendChild(merchatName);

    // LIST 2
    var li2 = document.createElement("li");
    // li2.className = "payment-detail";
    li2.style.display = "flex";
    li2.style.flexDirection = "row";
    li2.style.alignItems = "center";
    li2.style.justifyContent = "space-between";
    li2.style.borderBottom = "1px solid #e5e7eb";
    li2.style.paddingTop = "0.9em";
    li2.style.paddingBottom = "0.9em";
    var accNum = document.createElement("span");
    accNum.className = "payment-detail-text modal-email";
    accNum.textContent = "Account Number";
    accNum.style.fontFamily = "GraphikRegular, sans-serif";
    accNum.style.color = "#8f9bb2";
    var accDetails = document.createElement("span");
    accDetails.className = "payment-detail-bold row-span";
    // accDetails.textContent = `${data?.account_no} || 123456789`;
    accDetails.textContent = `9977639255`;
    accDetails.className = "payment-detail-bold text-truncate";
    accDetails.style.fontFamily = "GraphikMedium, sans-serif";
    accDetails.style.fontWeight = "500";
    accDetails.style.color = "#000";
    accDetails.style.display = "flex";
    accDetails.style.flexDirection = "row";
    var copy = document.createElement("div");
    copy.className = "copy";
    copy.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14C3.06812 14 2.60218 14 2.23463 13.8478C1.74458 13.6448 1.35523 13.2554 1.15224 12.7654C1 12.3978 1 11.9319 1 11V4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11C11.9319 1 12.3978 1 12.7654 1.15224C13.2554 1.35523 13.6448 1.74458 13.8478 2.23463C14 2.60218 14 3.06812 14 4M11.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.7157 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.7157 8.40973 8.40973 8.7157 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V17.8C8 18.9201 8 19.4802 8.21799 19.908C8.40973 20.2843 8.7157 20.5903 9.09202 20.782C9.51984 21 10.0799 21 11.2 21Z" stroke="#CBD1EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    copy.style.width = "20px";
    copy.style.height = "20px";
    copy.style.position = "absolute";
    copy.style.left = "102%";
    copy.style.cursor = "pointer";
    copy.src = "./Icon.svg";
    copy.addEventListener("click", () => {
      // navigator.clipboard.writeText(`${data?.account_no}`);
      navigator.clipboard.writeText(`9977639255`);
    });
    accDetails.appendChild(copy);
    li2.appendChild(accNum);
    li2.appendChild(accDetails);

    // LIST 3
    var li3 = document.createElement("li");
    li3.className = "payment-detail";
    li3.style.display = "flex";
    li3.style.flexDirection = "row";
    li3.style.alignItems = "center";
    li3.style.justifyContent = "space-between";
    li3.style.borderBottom = "1px solid #e5e7eb";
    li3.style.paddingTop = "0.9em";
    li3.style.paddingBottom = "0.9em";
    li3.style.borderBottom = "0px";
    var bank = document.createElement("span");
    bank.className = "payment-detail-text modal-email";
    bank.textContent = "Bank name";
    bank.style.fontFamily = "GraphikRegular, sans-serif";
    bank.style.color = "#8f9bb2";
    var bankDetails = document.createElement("span");
    bankDetails.className = "payment-detail-bold text-truncate";
    bankDetails.textContent = "LIFEGATE MICROFINANCE BANK";
    bankDetails.style.width = "200px";
    bankDetails.style.whiteSpace = "nowrap";
    bankDetails.style.overflow = "hidden";
    bankDetails.style.textOverflow = "ellipsis";
    bankDetails.style.fontFamily = "GraphikMedium, sans-serif";
    bankDetails.style.fontWeight = "500";
    bankDetails.style.color = "#000";
    li3.appendChild(bank);
    li3.appendChild(bankDetails);

    // UL MAKE UP
    paymentDetails.appendChild(li1);
    paymentDetails.appendChild(li2);
    paymentDetails.appendChild(li3);
    modalBody.appendChild(paymentDetails);

    // secure by pooler
    var secureTextContainer = document.createElement("div");
    // secureTextContainer.className = "absolute footer-text";
    secureTextContainer.style.position = "absolute";
    secureTextContainer.style.top = "100%";
    secureTextContainer.style.left = "35%";
    secureTextContainer.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    secureTextContainer.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    var htmlContent = document.createElement("div");
    htmlContent.style.display = "flex";
    htmlContent.style.flexDirection = "row";
    htmlContent.style.paddingTop = "5px";
    htmlContent.style.color = "white";
    htmlContent.style.alignItems = "center";
    var htmlContent = `<div style="color: #fff; display: flex; flex: row; padding-top:5px; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>&nbsp;<span>Secured by Pooler</span></div>`;

    secureTextContainer.innerHTML = htmlContent;
    modalContent.appendChild(secureTextContainer);

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    Awaitingmodal.appendChild(modalContent);
    document.body.appendChild(Awaitingmodal);

    // SET UP WEBSOCKET CONNECTION
    // if (host == woodcoreConfig.dev) {
    //   url = "wss://socket.swim.poolerapp.com";
    // } else if (host == woodcoreConfig.live) {
    //   url = "wss://socket.poolerapp.com";
    // } else {
    //   url = "wss://socket.swim.poolerapp.com";
    // }
    // var reqObject = {
    //   type: "status",
    //   reference: data?.reference,
    //   account_no: data?.account_no,
    //   amount: data?.amount,
    // };

    // socket = new WebSocket(`${url}/${reqObject?.reference}`);
    // socket.addEventListener("open", () => {
    //   socket.send(JSON.stringify(reqObject));
    // });

    // socket.addEventListener("message", async (e) => {
    //   console.log(data, "event")
    //   const response = await JSON.parse(e?.data);
    //   if (e) {
    //     modal.style.display = "none";
    //     overlay.style.display = "none";
    //     successModal(data);
    //   }
    // });

    // socket.addEventListener("error", (e) => {
    //   return e;
    // });

    closeBtn.addEventListener("click", function () {
      Awaitingmodal.parentNode.removeChild(Awaitingmodal);
      // window.alert("payment cancelled");
      // socket.addEventListener("close", (event) => {});
      Awaitingmodal.style.display = "none";
      overlay.style.display = "none";
      var childNodes = document.body.childNodes;
      var desiredChild = null;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].id === "awaiting-modal") {
          desiredChild = childNodes[i];
          break;
        }
      }
      if (desiredChild) {
        var parent = desiredChild.parentNode;
        parent.removeChild(desiredChild);
        console.log("yeah");
      }
    });
    setTimeout(function () {
      successModal(config);
      Awaitingmodal.parentNode.removeChild(Awaitingmodal);
      overlay.style.display = "none";
      Awaitingmodal.style.display = "none";
      var childNodes = document.body.childNodes;
      var desiredChild = null;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].id === "awaiting-modal") {
          desiredChild = childNodes[i];
          break;
        }
      }
      if (desiredChild) {
        var parent = desiredChild.parentNode;
        parent.removeChild(desiredChild);
        console.log("yeah");
      }
    }, 10000000000);
  }

  // SUCCESS MODAL, establishes that payments was successful
  function successModal(data) {
    var modal = document.createElement("div");
    modal.setAttribute("id", "success-modal");
    // modal.className = "modal";
    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.zIndex = "9999";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.paddingTop = "100px";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
    var modalContent = document.createElement("div");
    // modalContent.className = "modal-content";
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "auto";
    modalContent.style.width = "25%";
    modalContent.style.borderRadius = "8px";
    modalContent.style.position = "relative";

    var closeBtn = document.createElement("div");
    closeBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1L1 11M1 1L11 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    // closeBtn.className = "close close-img";
    closeBtn.style.color = "#000";
    closeBtn.style.float = "right";
    closeBtn.style.marginTop = "0px";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "-5%";
    closeBtn.style.top = "1%";
    closeBtn.style.width = "10px";
    closeBtn.style.height = "10px";
    closeBtn.style.cursor = "pointer";

    // modal text parent
    var modalTextParent = document.createElement("div");
    // modalTextParent.className = "modal-text-parent";
    modalTextParent.style.background = "#e0e4f4";
    modalTextParent.style.borderTopLeftRadius = "8px";
    modalTextParent.style.borderTopRightRadius = "8px";
    modalTextParent.style.borderBottom = "1px solid #e0e4f4";
    modalTextParent.style.padding = "20px";
    modalContent.appendChild(modalTextParent);

    // modal header
    var modalText = document.createElement("div");
    // modalText.className = "modal-header";
    modalText.style.display = "flex";
    modalText.style.flexDirection = "row";
    modalText.style.alignItems = "center";
    modalText.style.justifyContent = "space-between";

    // pooler image icon
    var poolerIcon = document.createElement("div");
    // poolerIcon.innerHTML = poolerLogo;
    poolerIcon.innerHTML = `<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.383 12.1136L22.9586 10.5829C22.6293 10.4051 22.2876 10.2508 21.936 10.121C20.985 9.75941 19.9744 9.57471 18.9553 9.57618H9.65918L11.1286 26.7961H15.7526V25.9878H18.9553C20.0471 25.9878 21.1283 25.7753 22.137 25.3628C23.1457 24.9502 24.0622 24.3454 24.8341 23.5829C25.606 22.8205 26.2182 21.9154 26.6358 20.9193C27.0535 19.9232 27.2682 18.8556 27.2677 17.7776V17.742C27.251 16.0846 26.6098 14.4928 25.4684 13.2772L24.383 12.1136Z" fill="#52A1FF"/>
      <path d="M25.166 15.594C25.1664 16.6723 24.9516 17.7401 24.5338 18.7364C24.116 19.7327 23.5035 20.638 22.7313 21.4004C21.9591 22.1629 21.0422 22.7676 20.0332 23.1801C19.0241 23.5926 17.9426 23.8047 16.8505 23.8043H13.6508V26.7888H7.56641V7.38673H16.8625C18.3194 7.38485 19.7511 7.76275 21.0127 8.4822L22.9649 10.5785L23.3098 10.9515C24.4908 12.2029 25.1551 13.8452 25.172 15.5555L25.166 15.594Z" fill="#1F7AFF"/>
      <path d="M22.6592 13.4573C22.6599 15.633 21.7858 17.72 20.2287 19.2595C18.6717 20.7991 16.5592 21.6652 14.3556 21.6676H11.141V26.7897H5.05957V5.25H14.3556C15.6236 5.25052 16.8746 5.53795 18.0125 6.09023C19.1504 6.64248 20.145 7.44487 20.9199 8.4358C22.0484 9.87702 22.6601 11.6474 22.6592 13.4691V13.4573Z" fill="#2C1DFF"/>
      </svg>
      `;
    poolerIcon.style.width = "32px";
    poolerIcon.style.height = "32px";
    modalText.appendChild(poolerIcon);

    // amount and email address column
    var modalAmountEmail = document.createElement("div");
    // modalAmountEmail.className = "modal-amt-email";
    modalAmountEmail.style.display = "flex";
    modalAmountEmail.style.flexDirection = "column";
    modalAmountEmail.style.marginTop = "0.25rem";
    modalText.appendChild(modalAmountEmail);
    modalTextParent.appendChild(modalText);

    // amount
    var modalAmount = document.createElement("div");
    // modalAmount.className = "modal-amount modal-amt";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalAmount.style.fontWeight = "600";
    modalAmount.style.color = "#000";
    modalAmount.style.textAlign = "end";
    modalAmount.style.textAlign = "right";
    modalAmount.style.fontSize = "1.125rem";
    modalAmount.style.paddingBottom = "8px";
    // modalAmount.textContent = `NGN${data?.amount}`;
    modalAmount.textContent = `NGN${data?.amount}`;
    modalAmountEmail.appendChild(modalAmount);

    // email
    var modalEmail = document.createElement("div");
    // modalEmail.className = "modal-email modal-em";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalEmail.style.color = "#8f9bb2";
    modalEmail.style.fontStyle = "normal";
    modalEmail.style.fontSize = "1.2rem";
    modalEmail.textContent = `${data?.email}`;
    modalAmountEmail.appendChild(modalEmail);

    // modal body
    var modalBody = document.createElement("div");
    // modalBody.className = "modal-body";
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.position = "relative";
    modalBody.style.justifyContent = "center";
    modalBody.style.paddingTop = "25px";
    modalBody.style.paddingBottom = "25px";

    // SUCCESS CONTAINER
    var successContainer = document.createElement("div");
    successContainer.style.background = "#F5F6FB";
    // successContainer.className = "awaiting-container";
    successContainer.style.marginBottom = "35px";
    successContainer.style.marginTop = "35px";
    successContainer.style.width = "85%";
    successContainer.style.margin = "auto";
    successContainer.style.display = "flex";
    successContainer.style.flexDirection = "column";
    successContainer.style.paddingTop = "1.5rem";
    successContainer.style.paddingBottom = "1.5rem";
    successContainer.style.borderRadius = "0.5rem";
    modalBody.appendChild(successContainer);

    // loader
    var successIcon = document.createElement("div");
    successIcon = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: auto; text-align: center; padding-bottom: 15px; padding-top: 15px;">
      <g filter="url(#filter0_d_365_8137)">
      <circle cx="39" cy="39" r="39" fill="white"/>
      </g>
      <circle cx="39" cy="39" r="34.125" fill="#C8DEC4"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M64.1703 62.0431C69.7315 55.9718 73.125 47.8822 73.125 39C73.125 29.7908 69.4771 21.4337 63.5475 15.2947C62.9874 15.2547 62.4218 15.2344 61.8516 15.2344C48.8944 15.2344 38.3906 25.7382 38.3906 38.6953C38.3906 51.6524 48.8944 62.1562 61.8516 62.1562C62.634 62.1562 63.4075 62.1179 64.1703 62.0431Z" fill="#9AC693"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M70.4296 52.3153C72.1651 48.224 73.125 43.7241 73.125 39C73.125 34.2759 72.1651 29.776 70.4296 25.6847C69.9146 25.6246 69.3906 25.5938 68.8594 25.5938C61.4553 25.5938 55.4531 31.5959 55.4531 39C55.4531 46.4041 61.4553 52.4062 68.8594 52.4062C69.3906 52.4062 69.9146 52.3754 70.4296 52.3153Z" fill="#128100"/>
      <path d="M48.75 31.6875L35.3438 45.0938L29.25 39" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <filter id="filter0_d_365_8137" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="2" dy="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_365_8137"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_365_8137" result="shape"/>
      </filter>
      </defs>
      </svg>
      `;
    successContainer.innerHTML = successIcon;

    // success confirmation
    var successConfirmation = document.createElement("div");
    successConfirmation.textContent = "Money received!";
    successConfirmation.className = "transferToMerchant modal-amount";
    successConfirmation.style.textAlign = "center";
    successConfirmation.style.paddingTop = "25px";
    successConfirmation.style.paddingBottom = "25px";
    successContainer.appendChild(successConfirmation);

    var successMessage = document.createElement("div");
    successMessage.className = "awaiting-message modal-email";
    successMessage.textContent = "Your transaction have been confirmed.";
    successMessage.style.textAlign = "center";
    successMessage.style.marginLeft = "auto";
    successMessage.style.marginRight = "auto";
    successContainer.appendChild(successMessage);

    // secure by pooler
    var secureTextContainer = document.createElement("div");
    secureTextContainer.className = "absolute footer-text";
    secureTextContainer.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    var htmlContent = document.createElement("div");
    htmlContent.style.display = "flex";
    htmlContent.style.flexDirection = "row";
    htmlContent.style.paddingTop = "15px";
    htmlContent.style.color = "white";
    htmlContent.style.alignItems = "center";
    var htmlContent = `<div style="color: #fff; display: flex; flex: row; padding-top:15px; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>&nbsp;<span>Secured by Pooler</span></div>`;
    secureTextContainer.innerHTML = htmlContent;
    modalContent.appendChild(secureTextContainer);

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      modal.parentNode.removeChild(modal);
      var childNodes = document.body.childNodes;
      var desiredChild = null;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].id === "success-modal") {
          desiredChild = childNodes[i];
          break;
        }
      }
      if (desiredChild) {
        var parent = desiredChild.parentNode;
        parent.removeChild(desiredChild);
        console.log("yeah");
      }
    });
  }

  // session expiration and error handling modal
  function showSessionExpirationModal(data) {
    var sessionmodal = document.createElement("div");
    sessionmodal.setAttribute("id", "session-modal");
    // modal.className = "modal";
    sessionmodal.style.display = "block";
    sessionmodal.style.position = "fixed";
    sessionmodal.style.zIndex = "9999";
    sessionmodal.style.top = "0";
    sessionmodal.style.left = "0";
    sessionmodal.style.paddingTop = "100px";
    sessionmodal.style.width = "100%";
    sessionmodal.style.height = "100%";
    sessionmodal.style.overflow = "auto";
    sessionmodal.style.backgroundColor = "rgb(0, 0, 0, 0.2)";

    var modalContent = document.createElement("div");
    // modalContent.className = "modal-content";
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "auto";
    modalContent.style.width = "25%";
    modalContent.style.borderRadius = "8px";
    modalContent.style.position = "relative";

    var closeBtn = document.createElement("div");
    closeBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1L1 11M1 1L11 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;

    var svgElement = closeBtn.querySelector("svg");
    svgElement.addEventListener("click", function () {
      sessionmodal.style.display = "none";
      overlay.style.display = "none";
      sessionmodal.style.backgroundColor = "transparent";
    });
    // closeBtn.className = "close close-img";
    closeBtn.style.color = "#000";
    closeBtn.style.float = "right";
    closeBtn.style.marginTop = "0px";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "-5%";
    closeBtn.style.top = "1%";
    closeBtn.style.width = "10px";
    closeBtn.style.height = "10px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.border = "0px solid";
    closeBtn.style.zIndex = "999999";

    // modal text parent
    var modalTextParent = document.createElement("div");
    // modalTextParent.className = "modal-text-parent";
    modalTextParent.style.background = "#e0e4f4";
    modalTextParent.style.borderTopLeftRadius = "8px";
    modalTextParent.style.borderTopRightRadius = "8px";
    modalTextParent.style.borderBottom = "1px solid #e0e4f4";
    modalTextParent.style.padding = "20px";
    modalContent.appendChild(modalTextParent);

    // modal header
    var modalText = document.createElement("div");
    modalText.style.display = "flex";
    modalText.style.flexDirection = "row";
    modalText.style.alignItems = "center";
    modalText.style.justifyContent = "space-between";

    // pooler image icon
    var poolerIcon = document.createElement("div");
    // poolerIcon.innerHTML = poolerLogo;
    poolerIcon.innerHTML = `<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.383 12.1136L22.9586 10.5829C22.6293 10.4051 22.2876 10.2508 21.936 10.121C20.985 9.75941 19.9744 9.57471 18.9553 9.57618H9.65918L11.1286 26.7961H15.7526V25.9878H18.9553C20.0471 25.9878 21.1283 25.7753 22.137 25.3628C23.1457 24.9502 24.0622 24.3454 24.8341 23.5829C25.606 22.8205 26.2182 21.9154 26.6358 20.9193C27.0535 19.9232 27.2682 18.8556 27.2677 17.7776V17.742C27.251 16.0846 26.6098 14.4928 25.4684 13.2772L24.383 12.1136Z" fill="#52A1FF"/>
      <path d="M25.166 15.594C25.1664 16.6723 24.9516 17.7401 24.5338 18.7364C24.116 19.7327 23.5035 20.638 22.7313 21.4004C21.9591 22.1629 21.0422 22.7676 20.0332 23.1801C19.0241 23.5926 17.9426 23.8047 16.8505 23.8043H13.6508V26.7888H7.56641V7.38673H16.8625C18.3194 7.38485 19.7511 7.76275 21.0127 8.4822L22.9649 10.5785L23.3098 10.9515C24.4908 12.2029 25.1551 13.8452 25.172 15.5555L25.166 15.594Z" fill="#1F7AFF"/>
      <path d="M22.6592 13.4573C22.6599 15.633 21.7858 17.72 20.2287 19.2595C18.6717 20.7991 16.5592 21.6652 14.3556 21.6676H11.141V26.7897H5.05957V5.25H14.3556C15.6236 5.25052 16.8746 5.53795 18.0125 6.09023C19.1504 6.64248 20.145 7.44487 20.9199 8.4358C22.0484 9.87702 22.6601 11.6474 22.6592 13.4691V13.4573Z" fill="#2C1DFF"/>
      </svg>
      `;
    poolerIcon.style.width = "32px";
    poolerIcon.style.height = "32px";
    modalText.appendChild(poolerIcon);

    // amount and email address column
    var modalAmountEmail = document.createElement("div");
    // modalAmountEmail.className = "modal-amt-email";
    modalAmountEmail.style.display = "flex";
    modalAmountEmail.style.flexDirection = "column";
    modalAmountEmail.style.marginTop = "0.25rem";
    modalText.appendChild(modalAmountEmail);
    modalTextParent.appendChild(modalText);

    // amount
    var modalAmount = document.createElement("div");
    // modalAmount.className = "modal-amount modal-amt";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalAmount.style.fontWeight = "600";
    modalAmount.style.color = "#000";
    modalAmount.style.textAlign = "end";
    modalAmount.style.textAlign = "right";
    modalAmount.style.fontSize = "1.125rem";
    modalAmount.style.paddingBottom = "8px";
    modalAmount.textContent = `NGN${data?.amount}`;
    modalAmountEmail.appendChild(modalAmount);

    // email
    var modalEmail = document.createElement("div");
    // modalEmail.className = "modal-email modal-em";
    modalAmount.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    modalEmail.style.color = "#8f9bb2";
    modalEmail.style.fontStyle = "normal";
    modalEmail.style.fontSize = "1.2rem";
    modalEmail.textContent = `${data?.email}`;
    modalAmountEmail.appendChild(modalEmail);

    // modal body
    var modalBody = document.createElement("div");
    // modalBody.className = "modal-body";
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.position = "relative";
    modalBody.style.justifyContent = "center";
    modalBody.style.paddingTop = "25px";

    // merchant details
    var paymentDetails = document.createElement("ul");
    // paymentDetails.className = "payment-details";
    paymentDetails.style.listStyleType = "none";
    paymentDetails.style.display = "flex";
    paymentDetails.style.flexDirection = "column";
    paymentDetails.style.width = "80%";
    paymentDetails.style.marginBottom = "30px";

    // SUCCESS CONTAINER
    var successContainer = document.createElement("div");
    successContainer.style.background = "#F5F6FB";
    // successContainer.className = "awaiting-container";
    successContainer.style.alignItems = "center";
    successContainer.style.display = "flex";
    successContainer.style.flexDirection = "column";
    successContainer.style.borderRadius = "0.5rem";
    successContainer.style.margin = "auto";
    successContainer.style.width = "85%";
    successContainer.style.paddingTop = "1.5rem";
    successContainer.style.paddingBottom = "1.5rem";
    successContainer.style.marginTop = "25px";
    successContainer.style.marginBottom = "35px";
    successContainer.style.justifyContent = "center";
    successContainer.style.marginTop = "30px";
    successContainer.style.margin = "auto";
    modalBody.appendChild(successContainer);

    // loader
    var successIcon = document.createElement("div");
    successIcon = `<svg width="93" height="67" viewBox="0 0 93 67" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: auto; text-align: center; padding-bottom: 15px">
      <g filter="url(#filter0_d_467_8419)">
      <rect width="91" height="65" rx="4" fill="white"/>
      </g>
      <rect x="5" y="5" width="81" height="55" rx="2" fill="#FFE5EC"/>
      <path d="M5 7C5 5.89543 5.89543 5 7 5H63V44C63 45.1046 62.1046 46 61 46H5V7Z" fill="#FFCCD8"/>
      <path d="M5 7C5 5.89543 5.89543 5 7 5H39V28C39 29.1046 38.1046 30 37 30H5V7Z" fill="#FF99B1"/>
      <circle cx="66.5" cy="40.5" r="14.5" fill="#FF003D"/>
      <path d="M67 33L67 42" stroke="white" stroke-width="4" stroke-linecap="round"/>
      <path d="M67 48L67 49" stroke="white" stroke-width="4" stroke-linecap="round"/>
      <defs>
      <filter id="filter0_d_467_8419" x="0" y="0" width="93" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="2" dy="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_467_8419"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_467_8419" result="shape"/>
      </filter>
      </defs>
      </svg>`;
    successContainer.innerHTML = successIcon;

    var awaitingConfirmation = document.createElement("div");
    awaitingConfirmation.textContent = "Session expired!";
    awaitingConfirmation.style.fontFamily = "GraphikMedium, sans-serif";
    awaitingConfirmation.style.paddingTop = "10px";
    awaitingConfirmation.style.fontFamily = "GraphikRegular, sans-serif";
    awaitingConfirmation.style.textAlign = "center";
    awaitingConfirmation.style.fontSize = "16px";
    awaitingConfirmation.style.paddingTop = "20px";
    awaitingConfirmation.className = "transferToMerchant modal-amount";
    successContainer.appendChild(awaitingConfirmation);

    var successMessage = document.createElement("div");
    successMessage.className = "awaiting-message modal-email";
    successMessage.style.fontFamily = "GraphikRegular, sans-serif";
    successMessage.style.margin = "auto";
    successMessage.style.width = "80%";
    successMessage.style.fontSize = "14px";
    successMessage.style.textAlign = "center";
    successMessage.style.paddingTop = "20px";
    successMessage.style.color = "#8f9bb2";
    successMessage.textContent = "Transaction time has elapsed.";
    successContainer.appendChild(successMessage);

    // LIST 1
    var li1 = document.createElement("li");
    // li1.className = "payment-detail";
    li1.style.display = "flex";
    li1.style.flexDirection = "row";
    li1.style.alignItems = "center";
    li1.style.justifyContent = "space-between";
    li1.style.borderBottom = "1px solid #e5e7eb";
    li1.style.paddingTop = "0.9em";
    li1.style.paddingBottom = "0.9em";
    var merchant = document.createElement("span");
    // merchant.className = "payment-detail-text modal-email";
    merchant.textContent = "Merchant";
    var merchatName = document.createElement("span");
    // merchatName.className = "payment-detail-bold text-truncate";
    merchatName.style.fontFamily = "GraphikMedium, sans-serif";
    merchatName.style.fontWeight = "500";
    merchatName.style.color = "#000";
    merchant.style.fontFamily = "GraphikRegular, sans-serif";
    merchant.style.color = "#8f9bb2";
    merchatName.style.fontWeight = "500";
    merchatName.style.color = "#000";
    merchatName.textContent = `${data.display_name}`;
    li1.appendChild(merchant);
    li1.appendChild(merchatName);

    // LIST 2
    var li2 = document.createElement("li");
    // li2.className = "payment-detail";
    li2.style.display = "flex";
    li2.style.flexDirection = "row";
    li2.style.alignItems = "center";
    li2.style.justifyContent = "space-between";
    li2.style.borderBottom = "1px solid #e5e7eb";
    li2.style.paddingTop = "0.9em";
    li2.style.paddingBottom = "0.9em";
    var accNum = document.createElement("span");
    // accNum.className = "payment-detail-text modal-email";
    accNum.textContent = "Account Number";
    accNum.style.fontFamily = "GraphikRegular, sans-serif";
    accNum.style.color = "#8f9bb2";
    var accDetails = document.createElement("span");
    accDetails.className = "payment-detail-bold row-span";
    // accDetails.textContent = `${data?.account_no}`;
    accDetails.style.fontFamily = "GraphikMedium, sans-serif";
    accDetails.style.fontWeight = "500";
    accDetails.style.color = "#000";
    accDetails.style.display = "flex";
    accDetails.style.flexDirection = "row";
    accDetails.textContent = `9977639255`;
    var copy = document.createElement("div");
    copy.className = "copy";
    // copy.innerHTML = copyIcon;
    copy.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14C3.06812 14 2.60218 14 2.23463 13.8478C1.74458 13.6448 1.35523 13.2554 1.15224 12.7654C1 12.3978 1 11.9319 1 11V4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11C11.9319 1 12.3978 1 12.7654 1.15224C13.2554 1.35523 13.6448 1.74458 13.8478 2.23463C14 2.60218 14 3.06812 14 4M11.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.7157 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.7157 8.40973 8.40973 8.7157 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V17.8C8 18.9201 8 19.4802 8.21799 19.908C8.40973 20.2843 8.7157 20.5903 9.09202 20.782C9.51984 21 10.0799 21 11.2 21Z" stroke="#CBD1EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    copy.style.width = "20px";
    copy.style.height = "20px";
    copy.style.position = "absolute";
    copy.style.right = "3%";
    copy.style.cursor = "pointer";
    // copy.src = "./Icon.svg";
    copy.addEventListener("click", function () {
      navigator.clipboard.writeText(`${data?.account_no}`);
      navigator.clipboard.writeText(`9977639255`);
    });
    accDetails.appendChild(copy);
    li2.appendChild(accNum);
    li2.appendChild(accDetails);

    // LIST 3
    var li3 = document.createElement("li");
    // li3.className = "payment-detail";
    li3.style.borderBottom = "0px";
    li3.style.display = "flex";
    li3.style.flexDirection = "row";
    li3.style.alignItems = "center";
    li3.style.justifyContent = "space-between";
    li3.style.paddingTop = "0.9em";
    li3.style.paddingBottom = "0.9em";
    li3.style.borderBottom = "0px";
    var bank = document.createElement("span");
    // bank.className = "payment-detail-text modal-email";
    bank.textContent = "Bank name";
    bank.style.fontFamily = "GraphikRegular, sans-serif";
    bank.style.color = "#8f9bb2";
    var bankDetails = document.createElement("span");
    // bankDetails.className = "payment-detail-bold text-truncate";
    bankDetails.textContent = "LIFEGATE MICROFINANCE BANK";
    bankDetails.style.width = "200px";
    bankDetails.style.whiteSpace = "nowrap";
    bankDetails.style.overflow = "hidden";
    bankDetails.style.textOverflow = "ellipsis";
    bankDetails.style.fontFamily = "GraphikMedium, sans-serif";
    bankDetails.style.fontWeight = "500";
    bankDetails.style.color = "#000";
    li3.appendChild(bank);
    li3.appendChild(bankDetails);

    // UL MAKE UP
    paymentDetails.appendChild(li1);
    paymentDetails.appendChild(li2);
    paymentDetails.appendChild(li3);
    modalBody.appendChild(paymentDetails);

    // button and countdwon timer
    var modalFooter = document.createElement("div");
    // modalFooter.className = "modal-footer";
    modalFooter.style.display = "flex";
    modalFooter.style.flexDirection = "column";
    modalFooter.style.width = "100%";
    modalFooter.style.paddingTop = "0.5rem";
    modalFooter.style.paddingBottom = "1.5rem";
    var paybutton = document.createElement("button");
    // paybutton.className = "modal-req-acc-btn";
    paybutton.style.border = "1px solid #d0d5e9";
    paybutton.style.filter = "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.05))";
    paybutton.style.borderRadius = "8px";
    paybutton.style.textAlign = "center";
    paybutton.style.width = "80%";
    paybutton.style.color = "#000";
    paybutton.style.fontWeight = "500";
    paybutton.style.fontSize = "1.125rem";
    paybutton.style.height = "2.75rem";
    paybutton.style.margin = "auto";
    paybutton.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    paybutton.addEventListener("click", async function () {
      isLoading = true;
      sessionmodal.style.display = "none";
      overlay.style.display = "none";
    });
    paybutton.textContent = "Request for new account";
    modalFooter.appendChild(paybutton);

    // secure by pooler
    var secureTextContainer = document.createElement("div");
    // secureTextContainer.className = "absolute footer-text";
    secureTextContainer.style.position = "absolute";
    secureTextContainer.style.top = "100%";
    secureTextContainer.style.left = "35%";
    secureTextContainer.style.fontFamily =
      '"GraphikMedium", "Source Sans Pro", sans-serif';
    var htmlContent = document.createElement("div");
    htmlContent.style.display = "flex";
    htmlContent.style.flexDirection = "row";
    htmlContent.style.paddingTop = "15px";
    htmlContent.style.color = "white";
    htmlContent.style.alignItems = "center";
    var htmlContent = `<div style="color: #fff; display: flex; flex: row; padding-top:15px; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>&nbsp;<span>Secured by Pooler</span></div>`;
    secureTextContainer.innerHTML = htmlContent;
    modalContent.appendChild(secureTextContainer);

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    sessionmodal.appendChild(modalContent);
    document.body.appendChild(sessionmodal);

    closeBtn.addEventListener("click", function () {
      sessionmodal.parentNode.removeChild(sessionmodal);
      sessionmodal.style.display = "none";
      overlay.style.display = "none";
      var childNodes = document.body.childNodes;
      var desiredChild = null;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].id === "session-modal") {
          desiredChild = childNodes[i];
          break;
        }
      }
      if (desiredChild) {
        var parent = desiredChild.parentNode;
        parent.removeChild(desiredChild);
        console.log("yeah");
      }
    });
  }

  function createDisposableAccount(merchantConfig, config) {
    overlay.style.display = "none";
    showMerchantModal(merchantConfig);
    // const data = {
    //   display_name: merchantConfig?.display_name,
    //   email: merchantConfig?.email,
    //   mobile_number: merchantConfig?.mobile_number,
    //   metadata: merchantConfig?.metadata,
    //   payment_link: merchantConfig?.payment_link,
    //   amount: merchantConfig?.amount,
    // };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-key": merchantConfig["x-key"],
    //   },
    //   body: JSON.stringify(data),
    // };
    // try {
    //   const response = await fetch(
    //     `${config.apiUrl}${config.apiRoute}`,
    //     options
    //   );
    //   const result = await response.json();
    //   if (response.status === 200) {
    //     overlay.style.display = "none";
    //     showMerchantModal(result);
    //   }
    // } catch (error) {
    //   return error;
    // }
  }

  payWithPooler();
}
//   https://cdn.jsdelivr.net/gh/idris-woodcore/checkout/index.js
