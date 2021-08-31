// import AsyncStorage from '@react-native-async-storage/async-storage';

// const setData = async (title, state) => {
//   try {
//     await AsyncStorage.setItem(title, JSON.stringify(state));
//   } catch (e) {
//     console.log(e);
//   }
// };

async function getGurbaniJi() {
  let shabad = "";
  await fetch("https://api.gurbaninow.com/v2/shabad/random")
    .then((res) => res.json())
    .then((resJson) => {
      const shabadOLstbj = resJson.shabad;
      for (const index in shabadOLstbj) {
        const gurmukhi = shabadOLstbj[index].line.larivaar.unicode;
        const translation =
          shabadOLstbj[index].line.translation.english.default;
        shabad += gurmukhi + "\n" + translation + "\n";
      }
    });
  // console.log(typeof shabad);
  return shabad;
}

export const initialState = {
  checkBoxes: {
    "Adi Maharaj.pdf": {
      checked: false,
      baniType: "Sri Guru Granth Sahib Jee",
      currentAng: 1,
    },
    "Fareedkot Teeka.pdf": {
      checked: false,
      baniType: "Sri Guru Granth Sahib Jee",
      currentAng: 1,
    },
    "1) Sri Raag Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "2) Vaar Maajh Ki Mahala 1.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "3) Goauri Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "4) Goauri Ki Vaar Mahala 5.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "5) Asa Vaar Mahala 1.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "6) Goojri Ki Vaar Mahala 3.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "7) Goojri Ki Vaar Mahala 5.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "8) Bihagra Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "9) Vidhans Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "10) Sorath Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "11) Jaitsri Ki Vaar Mahala 5.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "12) Soohi KI Vaar Mahala 3.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "13) Bilval Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "14) Ramkali Ki Vaar Mahala 3.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "15) Ramkali Ki Vaar Mahala 5.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "16) Ramkali Ki Vaar Rai Satta Balvand.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "17) Maroo Ki Vaar - Mahala 3.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "18) Maroo Ki Vaar - Mahala 5 Dakhne.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "19) Basant Ki Vaar Mahala 5.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "20) Sarang Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "21) Malaar Ki Vaar Mahala 1.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "22) Kanre Ki Vaar Mahala 4.pdf": {
      checked: false,
      baniType: "Bai Varra",
      currentAng: 1,
    },
    "1) Sri raag.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "2) Raag Gaurii.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "3) Raag Asa.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "4) Raag Goojri.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "5) Raag Sorath.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "6) Raag Dhanasri.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "7) Raag Jaatsri.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "8) Raag Todi.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "9) Raag Tilang.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "10) Raag Soohi.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "11) Raag Bilawal.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "12) Raag Goand.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "13) Raag Raamkali.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "14) Raag Mali Goara.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "15) Raag Maroo.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "16) Raag keydara.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "17) Raag Bhaaro.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "18) Raag Basant.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "19) Raag Sarang.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "20) Raag Malaar.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "21) Raag Kaanra.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "22) Raag Parbati.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "23) Salok Bhagat Kabir Jio Ki.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "24) Salok Bhagat Fareed Jee Ki.pdf": {
      checked: false,
      baniType: "Bhagat Bani",
      currentAng: 1,
    },
    "Adhyatam_Prakash.pdf": {
      checked: false,
      baniType: "Vidya Sagar Pothis",
      currentAng: 1,
    },
    "Bavras_Amrit.pdf": {
      checked: false,
      baniType: "Vidya Sagar Pothis",
      currentAng: 1,
    },
    "CaNaka_Rajniti.pdf": {
      checked: false,
      baniType: "Vidya Sagar Pothis",
      currentAng: 1,
    },
    "Sarkutavali.pdf": {
      checked: false,
      baniType: "Vidya Sagar Pothis",
      currentAng: 1,
    },
    "Vichar_Mala.pdf": {
      checked: false,
      baniType: "Vidya Sagar Pothis",
      currentAng: 1,
    },
    "Sri_Nanak_Parkash_1.pdf": {
      checked: false,
      baniType: "Sri Nanak Parkash",
      currentAng: 1,
    },
    "Sri_Nanak_Parkash_2.pdf": {
      checked: false,
      baniType: "Sri Nanak Parkash",
      currentAng: 1,
    },
  },
  shabadModalShown: false,
  theShabad: "Vaheguru",
};
// setData('state', initialState); //to reset all state

//why does the app chash when I change the prarameters position
function theReducer(state = initialState, action) {
  if (action.type === "SET_CHECKBOX") {
    const newCheckBoxes = { ...state.checkBoxes };
    newCheckBoxes[action.theBani].checked =
      !newCheckBoxes[action.theBani].checked;
    // console.log(action.theBani, newCheckBoxes[action.theBani]);

    const newState = {
      ...state,
      checkBoxes: newCheckBoxes,
    };
    // setData('state', newState);
    return newState;
  }
  // for async storage
  if (action.type === "SET_THE_STATE") {
    return {
      ...action.state,
    };
  }
  if (action.type === "UN_CHECK_BOXES") {
    let newCheckBoxes = {};
    const arrayCheckBoxes = Object.entries(state.checkBoxes);
    arrayCheckBoxes.map((item) => {
      if (item[1].baniType === action.baniType) {
        item[1].checked = false;
      }
      newCheckBoxes[item[0]] = item[1];
    });

    const newState = {
      ...state,
      checkBoxes: newCheckBoxes,
    };
    // setData('state', newState);
    return newState;
  }
  if (action.type === "SHABAD_MODAL") {
    return {
      ...state,
      shabadModalShown: !state.shabadModalShown,
    };
  }
  if (action.type === "SET_SHABAD") {
    let theNewShabad = "hii";
    theNewShabad = getGurbaniJi().then((res) => {
      theNewShabad = res;
    });
    console.log(theNewShabad);
    const newState = {
      ...state,
      theShabad: theNewShabad,
    };
    // setData('state', newState);
    return newState;
  }
  if (action.type === "SET_ANG_NUM") {
    const newCurrentAngBani = state.checkBoxes[action.bani];
    newCurrentAngBani.currentAng = action.angNum;

    const newCheckBoxes = state.checkBoxes;
    newCheckBoxes[action.bani] = newCurrentAngBani;

    console.log(newCurrentAngBani);

    const newState = {
      ...state,
      checkBoxes: newCheckBoxes,
    };
    // setData('state', newState);
    return newState;
  }
  return state;
}

export default theReducer;
